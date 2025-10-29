<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n({ useScope: 'global' })

// 선택된 도시
const selectedCity = ref('')

// 도시 후보 (라벨 문자열 대신 i18n 키를 들고만 있음)
const cities = [
  { labelKey: 'main.city.tokyo', value: 'tokyo' },
  { labelKey: 'main.city.osaka', value: 'osaka' },
  { labelKey: 'main.city.nagoya', value: 'nagoya' },
  { labelKey: 'main.city.sapporo', value: 'sapporo' },
  { labelKey: 'main.city.fukuoka', value: 'fukuoka' },
]

// 도시 선택
function pickCity(v) {
  selectedCity.value = v
}

// 다음 버튼 → selectPlace 페이지로 이동
function goNext() {
  if (!selectedCity.value) {
    alert(t('selectTabi.alertPickCity')) // 다국어 알림
    return
  }

  router.push({
    path: '/selectPlace',
    query: { city: selectedCity.value },
  })
}
</script>

<template>
  <main class="wrap">
    <section class="card">
      <header class="top">
        <small class="back-hint">
          <button class="back-btn" @click="router.push('/home')">
            ← {{ t('selectTabi.backToHome') }}
          </button>
        </small>

        <h1 class="question" v-html="t('selectTabi.question')"></h1>

        <p class="desc">
          {{ t('selectTabi.desc') }}
        </p>
      </header>

      <ul class="chips">
        <li v-for="c in cities" :key="c.value">
          <button
              class="chip"
              :class="{ on: selectedCity === c.value }"
              @click="pickCity(c.value)"
          >
            {{ t(c.labelKey) }}
          </button>
        </li>
      </ul>

      <footer class="bottom">
        <button class="next-btn" @click="goNext">
          {{ t('selectTabi.nextBtn') }}
        </button>
      </footer>
    </section>
  </main>
</template>

<style scoped>
/* 전체 화면 가운데 정렬 느낌 */
.wrap {
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 16px 80px;
  background: #f9f6f1;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Noto Sans KR", sans-serif;
}

/* 카드 */
.card {
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.07);
  padding: 24px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 상단 질문 영역 */
.top {
  text-align: left;
}

.back-hint {
  font-size: 12px;
  color: #b9b1a3;
}

.back-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
}
.back-btn:hover {
  text-decoration: underline;
}

.question {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #3a332a;
  margin: 12px 0 8px;
  white-space: pre-line; /* 줄바꿈 반영 */
}
.desc {
  font-size: 13px;
  color: #8a8173;
  line-height: 1.4;
  white-space: pre-line;
}

/* 도시 선택 칩들 */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.chip {
  appearance: none;
  border: 0;
  border-radius: 8px;
  background: #f1eee8;
  color: #4a443a;
  font-size: 14px;
  padding: 10px 14px;
  line-height: 1.2;
  min-width: 80px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
}
.chip.on {
  background: #3a332a;
  color: #fff;
  border-color: #3a332a;
}

/* 하단 버튼 */
.bottom {
  margin-top: 12px;
}
.next-btn {
  width: 100%;
  border: 0;
  border-radius: 10px;
  background: #c15e4a;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 0;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(193, 94, 74, 0.3);
}
.next-btn:active {
  opacity: 0.8;
}
</style>
