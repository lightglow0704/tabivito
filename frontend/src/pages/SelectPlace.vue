<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const route = useRoute()
const { t } = useI18n({ useScope: 'global' })

// 이전 페이지(도시 선택)에서 넘긴 값
const chosenCity = route.query.city || ''

// 선택된 스타일
const selectedStyle = ref('')

// 선택 후보들
// labelKey / subKey는 i18n 키만 들고 있고 실제 텍스트는 t()로 뽑는다
const styles = [
  {
    labelKey: 'selectPlace.opt.cafe.label',
    subKey: 'selectPlace.opt.cafe.sub',
    value: 'cafe',
  },
  {
    labelKey: 'selectPlace.opt.walk.label',
    subKey: 'selectPlace.opt.walk.sub',
    value: 'walk',
  },
  {
    labelKey: 'selectPlace.opt.nature.label',
    subKey: 'selectPlace.opt.nature.sub',
    value: 'nature',
  },
  {
    labelKey: 'selectPlace.opt.photo.label',
    subKey: 'selectPlace.opt.photo.sub',
    value: 'photo',
  },
  {
    labelKey: 'selectPlace.opt.food.label',
    subKey: 'selectPlace.opt.food.sub',
    value: 'food',
  },
  {
    labelKey: 'selectPlace.opt.shopping.label',
    subKey: 'selectPlace.opt.shopping.sub',
    value: 'shopping',
  },
  {
    labelKey: 'selectPlace.opt.culture.label',
    subKey: 'selectPlace.opt.culture.sub',
    value: 'culture',
  },
  {
    labelKey: 'selectPlace.opt.trip.label',
    subKey: 'selectPlace.opt.trip.sub',
    value: 'trip',
  },
  {
    labelKey: 'selectPlace.opt.spa.label',
    subKey: 'selectPlace.opt.spa.sub',
    value: 'spa',
  },
  {
    labelKey: 'selectPlace.opt.festival.label',
    subKey: 'selectPlace.opt.festival.sub',
    value: 'festival',
  },
]

function pickStyle(v) {
  selectedStyle.value = v
}

function finish() {
  if (!selectedStyle.value) {
    alert(t('selectPlace.alertPickStyle'))
    return
  }

  router.push({
    path: '/selectMap',
    query: {
      city: chosenCity,
      style: selectedStyle.value,
    },
  })
}
</script>

<template>
  <main class="wrap">
    <section class="card">
      <header class="top">
        <small class="back-hint">
          <button class="back-btn" @click="router.push('/selectTabi')">
            ← {{ t('selectPlace.backToFirst') }}
          </button>
        </small>

        <h1 class="question" v-html="t('selectPlace.question')"></h1>

        <p class="desc">
          {{ t('selectPlace.desc') }}
        </p>

        <p v-if="chosenCity" class="hint-city">
          {{ t('selectPlace.chosenCity') }}
          <strong>{{ chosenCity }}</strong>
        </p>
      </header>

      <!-- 옵션들 -->
      <ul class="option-list">
        <li v-for="opt in styles" :key="opt.value">
          <button
              class="option-btn"
              :class="{ active: selectedStyle === opt.value }"
              @click="pickStyle(opt.value)"
          >
            <div class="main">{{ t(opt.labelKey) }}</div>
            <div class="sub">{{ t(opt.subKey) }}</div>
          </button>
        </li>
      </ul>

      <footer class="bottom">
        <button class="next-btn" @click="finish">
          {{ t('selectPlace.nextBtn') }}
        </button>
      </footer>
    </section>
  </main>
</template>

<style scoped>
/* ====== 기본 구조 ====== */
.wrap {
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 16px 80px;
  background: #f9f6f1;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Noto Sans KR", sans-serif;
}

.card {
  width: 100%;
  max-width: 640px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.07);
  padding: 24px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ====== 상단 ====== */
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
  white-space: pre-line;
}
.desc {
  font-size: 13px;
  color: #8a8173;
  line-height: 1.4;
  margin-bottom: 8px;
  white-space: pre-line;
}
.hint-city {
  font-size: 12px;
  color: #a1917f;
}

/* ====== 옵션 리스트 (2열) ====== */
.option-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.option-btn {
  width: 100%;
  min-height: 90px;
  text-align: left;
  border-radius: 12px;
  border: 1px solid #d8d3ca;
  background: #fdfcfb;
  padding: 14px 16px;
  line-height: 1.4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  cursor: pointer;
}
.option-btn .main {
  font-size: 15px;
  font-weight: 600;
  color: #3a332a;
  margin-bottom: 4px;
}
.option-btn .sub {
  font-size: 12px;
  color: #8a8173;
}

.option-btn.active {
  background: #3a332a;
  border-color: #3a332a;
  box-shadow: 0 4px 10px rgba(58, 51, 42, 0.3);
}
.option-btn.active .main,
.option-btn.active .sub {
  color: #fff;
}

/* 반응형 */
@media (max-width: 600px) {
  .option-list {
    grid-template-columns: 1fr;
  }
}

/* ====== 하단 버튼 ====== */
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
