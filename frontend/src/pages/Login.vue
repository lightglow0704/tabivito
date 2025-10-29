<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n({ useScope: 'global' })

const form = ref({ username:'', password:'' })
const error = ref('')
const loading = ref(false)

async function submit() {
  error.value = ''
  loading.value = true
  try {
    const res = await fetch('/api/auth/login', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(form.value),
      credentials:'include'
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(text || t('login.fail'))
    }
    await router.push('/home')
  } catch (e) {
    error.value = e.message
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
    />
    <input
        v-model="form.password"
        type="password"
        :placeholder="t('login.passwordPH')"
    />

    <button :disabled="loading" @click="submit">
      {{ t('login.submit') }}
    </button>

    <p class="err" v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>
.box{max-width:360px;margin:40px auto;display:grid;gap:10px}
input,button{padding:10px}
.err{color:#c62828;min-height:20px}
button[disabled]{opacity:.6;cursor:not-allowed}
</style>
