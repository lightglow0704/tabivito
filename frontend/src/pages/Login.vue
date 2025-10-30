<!-- src/pages/Login.vue -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/userStore'

const router = useRouter()
const { t } = useI18n({ useScope: 'global' })
const userStore = useUserStore()

const form = ref({ username: '', password: '' })
const errorKey = ref('')
const errorText = ref('')
const loading = ref(false)

function clearError() {
  errorKey.value = ''
  errorText.value = ''
}

async function submit() {
  clearError()
  loading.value = true
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
      credentials: 'include',
    })

    const data = await res.json()

    // ❌ 로그인 실패 처리
    if (!data.ok) {
      if (data.code === 'INVALID_CREDENTIALS') {
        errorKey.value = 'login.invalid'
        return
      }
      errorText.value = data.message || t('login.fail') || '로그인에 실패했습니다.'
      return
    }

    // ✅ 로그인 성공 시: 새로고침 없이 상태 동기화 후 홈 이동
    await userStore.refetchMe()
    router.push('/home')
  } catch (e) {
    errorText.value = e?.message || t('login.fail') || '로그인에 실패했습니다.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="box">
    <h2>{{ t('login.title') }}</h2>

    <input
        v-model="form.username"
        :placeholder="t('login.usernamePH')"
        @input="clearError"
        @keyup.enter="submit"
    />
    <input
        v-model="form.password"
        type="password"
        :placeholder="t('login.passwordPH')"
        @input="clearError"
        @keyup.enter="submit"
    />

    <button :disabled="loading" @click="submit">
      {{ t('login.submit') }}
    </button>

    <p class="err" v-if="errorKey || errorText">
      {{ errorKey ? t(errorKey) : errorText }}
    </p>
  </div>
</template>

<style scoped>
.box {
  max-width: 360px;
  margin: 40px auto;
  display: grid;
  gap: 10px;
}
input,
button {
  padding: 10px;
}
.err {
  color: #c62828;
  min-height: 20px;
  white-space: pre-line;
}
button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
