<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n({ useScope: 'global' })

const form = ref({ username: '', password: '' })

// 문자열 대신 키를 저장해서 언어 변경 시 자동 번역되게 함
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
      body: JSON.stringify(form.value), // { username, password }
      credentials: 'include',
    })

    const data = await res.json()

    // ✅ 1. 서버가 200 OK로 응답하지만 ok:false 인 경우
    if (!data.ok) {
      // INVALID_CREDENTIALS 등 서버 코드 확인
      if (data.code === 'INVALID_CREDENTIALS') {
        errorKey.value = 'login.invalid'
        return
      }
      // 그 외 일반 오류 메시지
      errorText.value = data.message || t('login.fail') || '로그인에 실패했습니다.'
      return
    }

    // ✅ 2. 로그인 성공 시
    await router.push('/home')
  } catch (e) {
    // 네트워크 에러 등 (서버에 도달하지 못한 경우)
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

    <!-- 에러 표시 -->
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
