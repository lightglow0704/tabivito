<script setup>
import { ref, onMounted } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'



const me = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/api/auth/me', { credentials: 'include' })
    me.value = res.ok ? await res.json() : null
  } catch (e) {
    me.value = null
  }
})

async function logout() {
  await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
  me.value = null
}
</script>

<template>
  <div class="app">
    <!-- 상단 -->
    <HeaderBar />
    <!-- 메인 컨텐츠 -->
    <router-view />
    <!-- 하단 -->
    <FooterBar />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
