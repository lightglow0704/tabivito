<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore.js'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })

const me = ref(null)
const loading = ref(true)
const menuOpen = ref(false)

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

// ✅ 언어 전환 + 저장
function setLang(lang) {
  locale.value = lang
  localStorage.setItem('tabivito:locale', lang)
  // ❌ router.push() 제거 (새로고침 시 이전 페이지로 가는 문제 방지)
}

function isCurrentLang(lang) {
  return locale.value === lang
}

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
  await userStore.logout()
  await fetchMe()
  menuOpen.value = false
  router.push('/home')
}

async function removeAccount() {
  const ok = confirm(t('header.confirmDelete'))
  if (!ok) return

  const res = await fetch('/api/auth/delete', { method: 'DELETE', credentials: 'include' })
  if (res.ok) {
    alert(t('header.deleted'))
    userStore.onAccountDeleted()
    await fetchMe()
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
      <div class="lang-row">
        <button
            class="lang-btn"
            :class="{ active: isCurrentLang('kr') }"
            @click="setLang('kr')"
        >KR</button>

        <span class="divider">|</span>

        <button
            class="lang-btn"
            :class="{ active: isCurrentLang('jp') }"
            @click="setLang('jp')"
        >JP</button>
      </div>

      <nav class="nav">
        <template v-if="!me">
          <router-link to="/login">{{ t('header.login') }}</router-link>
          <router-link to="/signup">{{ t('header.signup') }}</router-link>
        </template>

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
/* 기존 스타일 그대로 */
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
.logo { display: flex; align-items: center; height: 100%; }
.logo img { height: 200px; width: auto; object-fit: contain; cursor: pointer; padding-top: 15px; transition: transform 0.25s ease; }
.logo img:hover { transform: scale(1.1); }

.right-side { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; padding-top: 12px; }
.lang-row { display: flex; align-items: center; font-size: 13px; color: #555; line-height: 1; }
.lang-btn { background: none; border: none; padding: 0 4px; font-size: 13px; font-weight: 600; color: #444; cursor: pointer; }
.lang-btn:hover { color: #1677ff; text-decoration: underline; }
.lang-btn.active { color: #1677ff; text-decoration: underline; }
.divider { font-size: 12px; color: #aaa; padding: 0 4px; }

.nav { display: flex; align-items: center; gap: 22px; }
.nav a { color: #333; text-decoration: none; font-weight: 600; font-size: 18px; transition: color 0.25s; }
.nav a:hover { color: #1677ff; }

.dropdown { position: relative; cursor: pointer; user-select: none; }
.hello { font-weight: 600; font-size: 16px; color: #333; }
.menu { position: absolute; right: 0; top: calc(100% + 6px); background: white; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 3px 8px rgba(0,0,0,0.1); display: flex; flex-direction: column; min-width: 160px; padding: 4px 0; z-index: 10; }
.menu button { padding: 9px 14px; text-align: left; background: none; border: none; width: 100%; color: #333; font-size: 15px; cursor: pointer; }
.menu button:hover { background: #f5f5f5; }
.menu .danger { color: #c62828; }
</style>
