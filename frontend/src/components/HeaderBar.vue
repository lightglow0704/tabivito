<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore.js'
import { useI18n } from 'vue-i18n'

// 전역 i18n 연결
const { t, locale } = useI18n({ useScope: 'global' })

const me = ref(null)
const loading = ref(true)
const menuOpen = ref(false)

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

// 언어 전환
function setLang(lang) {
  locale.value = lang
}

// 현재 선택된 언어인지 비교 (버튼 하이라이트용)
function isCurrentLang(lang) {
  return locale.value === lang
}

// 로그인 사용자 정보
async function fetchMe() {
  loading.value = true
  try {
    const res = await fetch('/api/auth/me', { credentials: 'include' })
    me.value = res.ok ? await res.json() : null
  } catch {
    me.value = null
  } finally {
    loading.value = false
  }
}

async function goMyPage() {
  menuOpen.value = false
  await userStore.loadFavorites()
  router.push('/mypage')
}

async function logout() {
  await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
  await fetchMe()
  userStore.favorites = []
  menuOpen.value = false
  router.push('/home')
}

async function removeAccount() {
  // confirm 문구도 다국어 키로 빼고 쓰면 더 좋음
  const ok = confirm(t('header.confirmDelete'))
  if (!ok) return

  const res = await fetch('/api/auth/delete', { method: 'DELETE', credentials: 'include' })
  if (res.ok) {
    alert(t('header.deleted'))
    await fetchMe()
    userStore.favorites = []
    router.push('/home')
  } else {
    alert(t('header.deleteFail'))
  }
  menuOpen.value = false
}

onMounted(fetchMe)
watch(() => route.fullPath, fetchMe)
</script>

<template>
  <header class="wrap">
    <h1 class="logo">
      <router-link to="/home">
        <img src="@/assets/Tabivito_logo.png" alt="Tabivito" />
      </router-link>
    </h1>

    <div class="right-side">
      <!-- ✅ 언어 전환 -->
      <div class="lang-row">
        <button
            class="lang-btn"
            :class="{ active: isCurrentLang('kr') }"
            @click="setLang('kr')"
        >
          KR
        </button>

        <span class="divider">|</span>

        <button
            class="lang-btn"
            :class="{ active: isCurrentLang('jp') }"
            @click="setLang('jp')"
        >
          JP
        </button>
      </div>

      <!-- ✅ 네비게이션 -->
      <nav class="nav">
        <!-- 로그인 안 했을 때 -->
        <template v-if="!me">
          <router-link to="/login">{{ t('header.login') }}</router-link>
          <router-link to="/signup">{{ t('header.signup') }}</router-link>
        </template>

        <!-- 로그인 했을 때 -->
        <template v-else>
          <div class="dropdown" @click="menuOpen = !menuOpen">
            <span class="hello">{{ me.name }} ▼</span>

            <transition name="fade-slide">
              <div v-if="menuOpen" class="menu">
                <button @click.stop="goMyPage">{{ t('header.mypage') }}</button>
                <button @click.stop="logout">{{ t('header.logout') }}</button>
                <button class="danger" @click.stop="removeAccount">
                  {{ t('header.withdraw') }}
                </button>
              </div>
            </transition>
          </div>
        </template>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100px;
  padding: 0 28px;
  border-bottom: 1px solid #eee;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-sizing: border-box;
}

/* 로고 */
.logo {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo img {
  height: 200px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  padding-top: 15px;
  transition: transform 0.25s ease;
}
.logo img:hover {
  transform: scale(1.1);
}

/* 오른쪽 묶음 */
.right-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding-top: 12px;
}

/* 언어 전환 */
.lang-row {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #555;
  line-height: 1;
}
.lang-btn {
  background: none;
  border: none;
  padding: 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: #444;
  cursor: pointer;
}
.lang-btn:hover {
  color: #1677ff;
  text-decoration: underline;
}

/* 지금 선택된 언어 강조 */
.lang-btn.active {
  color: #1677ff;
  text-decoration: underline;
}
.divider {
  font-size: 12px;
  color: #aaa;
  padding: 0 4px;
}

/* nav */
.nav {
  display: flex;
  align-items: center;
  gap: 22px;
}
.nav a {
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: color 0.25s;
}
.nav a:hover {
  color: #1677ff;
}

/* 드롭다운 */
.dropdown {
  position: relative;
  cursor: pointer;
  user-select: none;
}
.hello {
  font-weight: 600;
  font-size: 16px;
  color: #333;
}
.menu {
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 160px;
  padding: 4px 0;
  z-index: 10;
}
.menu button {
  padding: 9px 14px;
  text-align: left;
  background: none;
  border: none;
  width: 100%;
  color: #333;
  font-size: 15px;
  cursor: pointer;
}
.menu button:hover {
  background: #f5f5f5;
}
.menu .danger {
  color: #c62828;
}
</style>
