<!-- src/pages/Signup.vue -->
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t, locale } = useI18n({ useScope: 'global' })

// 폼 상태
const form = ref({
  username: '',
  name: '',
  email: '',
  password: '',
  confirm: '',
})

// UI 상태
const loading = ref(false)
const msg = ref('')
const errors = ref({})

// 아이디 중복체크 상태
const checking = ref(false)
const usernameAvailable = ref(null) // null=미확인 / true=사용가능 / false=중복

// 아이디 규칙: 6~20자, 영문+숫자 필수, '_' 허용
const USERNAME_RULE = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9_]{6,20}$/

// 아이디 도움말 텍스트/상태 (화면에 표시되는 초록/빨강 문구)
const usernameHelp = ref({
  text: t('signup.username.ruleHint'),
  tone: 'hint', // 'hint' | 'warn' | 'error' | 'success'
})

// 아이디 도움말 최신화 함수
function updateUsernameHelp() {
  const uname = form.value.username.trim()

  if (!uname) {
    usernameHelp.value = {
      text: t('signup.username.ruleHint'),
      tone: 'hint',
    }
    usernameAvailable.value = null
    return
  }

  if (!USERNAME_RULE.test(uname)) {
    usernameHelp.value = {
      text: t('signup.username.ruleInvalid'),
      tone: 'error',
    }
    usernameAvailable.value = null
    return
  }

  if (usernameAvailable.value === null) {
    usernameHelp.value = {
      text: t('signup.username.needCheck'),
      tone: 'warn',
    }
    return
  }

  if (usernameAvailable.value === true) {
    usernameHelp.value = {
      text: t('signup.username.ok'),
      tone: 'success',
    }
  } else {
    usernameHelp.value = {
      text: t('signup.username.dup'),
      tone: 'error',
    }
  }
}

// 아이디 입력이 바뀔 때마다 중복체크 다시 하라고 상태 초기화
function onChangeUsername() {
  usernameAvailable.value = null
  updateUsernameHelp()
}

// 아이디 중복 체크
async function checkUsername() {
  const uname = form.value.username.trim()

  // 형식부터 안 맞으면 아예 서버 호출 안 함
  if (!USERNAME_RULE.test(uname)) {
    usernameAvailable.value = null
    usernameHelp.value = {
      text: t('signup.username.ruleInvalid'),
      tone: 'error',
    }
    return
  }

  checking.value = true
  try {
    const res = await fetch(`/api/auth/check/${encodeURIComponent(uname)}`)
    const json = await res.json() // { available: true/false, message?: string }

    usernameAvailable.value = !!json.available

    if (json.message && usernameAvailable.value === false) {
      // 서버가 "이미 사용중입니다" 같은 세부 메시지를 직접 줬으면 그걸 우선 사용
      usernameHelp.value = {
        text: json.message,
        tone: 'error',
      }
    }
  } catch {
    usernameAvailable.value = null
    usernameHelp.value = {
      text: t('signup.username.checkFail'),
      tone: 'error',
    }
  } finally {
    checking.value = false
    updateUsernameHelp()
  }
}

// 기본 유효성 검사 (프론트 단)
function validateForm() {
  const e = {}

  if (!USERNAME_RULE.test(form.value.username)) {
    e.username = t('signup.err.usernameRule')
  }
  if (!form.value.name.trim()) {
    e.name = t('signup.err.nameRequired')
  }
  if (form.value.email && !/^\S+@\S+\.\S+$/.test(form.value.email)) {
    e.email = t('signup.err.emailInvalid')
  }
  if (form.value.password.length < 4) {
    e.password = t('signup.err.passwordShort')
  }
  if (form.value.password !== form.value.confirm) {
    e.confirm = t('signup.err.confirmMismatch')
  }

  errors.value = e
  return Object.keys(e).length === 0
}

// 회원가입 제출
async function submit() {
  msg.value = ''

  // 프론트단 검사 + 아이디 중복 체크 여부
  if (!validateForm()) return
  if (usernameAvailable.value !== true) {
    usernameHelp.value = {
      text: t('signup.username.needCheck'),
      tone: 'warn',
    }
    return
  }

  loading.value = true
  try {
    // ✅ 서버가 비밀번호 / 비밀번호확인 둘 다 비교하는 것 같으므로 confirm도 같이 보냄
    // confirm이라는 필드명으로 먼저 시도 (백엔드 DTO가 password/confirm 구조일 가능성 높음)
    const payload = {
      username: form.value.username,
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      confirm: form.value.confirm,
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'include',
    })

    if (res.ok) {
      alert(t('signup.successAlert'))
      await router.push('/login')
    } else {
      const text = await res.text()
      // 서버에서 {"message":"...","detail":...} 같은 걸 보내면 그대로 노출
      msg.value = t('signup.failMsg', { reason: text || res.status })
    }
  } catch {
    msg.value = t('signup.networkErr')
  } finally {
    loading.value = false
  }
}

// 🌐 언어(locale) 바뀌면 usernameHelp 문구도 현재 언어로 다시 갱신
watch(locale, () => {
  updateUsernameHelp()
})
</script>

<template>
  <div class="box">
    <!-- 제목 -->
    <h2>{{ t('signup.title') }}</h2>

    <!-- 아이디 + 중복체크 줄 -->
    <div class="row">
      <input
          v-model="form.username"
          :placeholder="t('signup.username.ph')"
          @input="onChangeUsername"
      />
      <button
          class="check"
          :disabled="
          checking ||
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9_]{6,20}$/.test(form.username)
        "
          @click="checkUsername"
      >
        {{ checking ? t('signup.username.checking') : t('signup.username.checkBtn') }}
      </button>
    </div>

    <!-- 아이디 도움말 (초록/빨강 텍스트) -->
    <small
        class="help"
        :class="{
        hint: usernameHelp.tone === 'hint',
        warn: usernameHelp.tone === 'warn',
        error: usernameHelp.tone === 'error',
        success: usernameHelp.tone === 'success'
      }"
    >
      {{ usernameHelp.text }}
    </small>

    <!-- 이름 -->
    <input
        v-model="form.name"
        :placeholder="t('signup.namePH')"
        @blur="validateForm"
    />
    <small v-if="errors.name" class="error">
      {{ errors.name }}
    </small>

    <!-- 이메일 -->
    <input
        v-model="form.email"
        :placeholder="t('signup.emailPH')"
        @blur="validateForm"
    />
    <small v-if="errors.email" class="error">
      {{ errors.email }}
    </small>

    <!-- 비밀번호 -->
    <input
        v-model="form.password"
        type="password"
        :placeholder="t('signup.passwordPH')"
        @blur="validateForm"
    />
    <small v-if="errors.password" class="error">
      {{ errors.password }}
    </small>

    <!-- 비밀번호 확인 -->
    <input
        v-model="form.confirm"
        type="password"
        :placeholder="t('signup.confirmPH')"
        @blur="validateForm"
    />
    <small v-if="errors.confirm" class="error">
      {{ errors.confirm }}
    </small>

    <!-- 가입 버튼 -->
    <button
        class="submit"
        :disabled="loading"
        @click="submit"
    >
      {{ t('signup.submit') }}
    </button>

    <!-- 서버 응답 메시지 -->
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<style scoped>
.box {
  max-width: 520px;
  margin: 40px auto;
  display: grid;
  gap: 10px;
}
.row {
  display: flex;
  align-items: center;
  gap: 8px;
}
input,
button {
  padding: 10px;
}
button.check {
  padding: 10px 12px;
  border: 1px solid #ddd;
  background: #fafafa;
  border-radius: 6px;
  cursor: pointer;
}
button.check:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.submit {
  padding: 10px;
  border: 0;
  background: #1677ff;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}
.submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.error {
  color: #d00;
}
.msg {
  min-height: 20px;
  white-space: pre-line;
  word-break: break-word;
}
.help {
  font-size: 13px;
  line-height: 1.4;
  white-space: pre-line;
}
.help.hint {
  color: #777;
}
.help.warn {
  color: #b56a00;
}
.help.error {
  color: #d00;
}
.help.success {
  color: #0a6b00;
}
button {
  color: black;
}
</style>
