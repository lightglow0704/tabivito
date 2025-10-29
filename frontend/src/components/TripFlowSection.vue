<script setup>
import { useI18n } from 'vue-i18n'

// v11 전역 i18n 사용
const { t } = useI18n({ useScope: 'global' })

// 샘플 카드 (언어별 key만 연결)
const sampleSpots = [
  {
    step: 1,
    titleKey: 'how.card1.title',
    descKey: 'how.card1.desc',
    img: new URL('@/assets/osaka/food/shinsekai.jpg', import.meta.url).href,
  },
  {
    step: 2,
    titleKey: 'how.card2.title',
    descKey: 'how.card2.desc',
    img: new URL('@/assets/osaka/cafe/nakazakicho.jpg', import.meta.url).href,
  },
  {
    step: 3,
    titleKey: 'how.card3.title',
    descKey: 'how.card3.desc',
    img: new URL('@/assets/osaka/shopping/americamura.jpg', import.meta.url).href,
  },
]
</script>

<template>
  <section class="how-wrap">
    <div class="how-inner">

      <!-- 왼쪽 영역 -->
      <div class="how-left">
        <!-- 줄바꿈 지원 -->
        <h2 class="headline" v-html="t('how.headline')"></h2>
        <p class="lead" v-html="t('how.lead')"></p>

        <ul class="steps">
          <li class="step-row">
            <span class="step-num on">{{ t('how.step1Num') }}</span>
            <span class="step-text on">{{ t('how.step1Text') }}</span>
          </li>
          <li class="step-row">
            <span class="step-num">{{ t('how.step2Num') }}</span>
            <span class="step-text">{{ t('how.step2Text') }}</span>
          </li>
        </ul>

        <button class="plan-btn">
          <router-link to="/selectTabi" class="btn">
            {{ t('how.cta') }}
          </router-link>
        </button>
      </div>

      <!-- 오른쪽 카드 영역 -->
      <div class="how-right">
        <div class="path-col">
          <div class="plane-icon">{{ t('how.planeIcon') }}</div>
          <div class="dotted-line"></div>
        </div>

        <div class="cards-col">
          <div v-for="spot in sampleSpots" :key="spot.step" class="spot-card">
            <div class="spot-left">
              <div class="bubble-num" :class="{ active: spot.step === 1 }">
                {{ spot.step }}
              </div>
              <div class="spot-info">
                <!-- ✅ 다국어 적용 -->
                <div class="spot-title">{{ t(spot.titleKey) }}</div>
                <div class="spot-desc">{{ t(spot.descKey) }}</div>
              </div>
            </div>

            <div class="thumb-box">
              <img :src="spot.img" :alt="t(spot.titleKey)" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 전체 섹션 배경 */
.how-wrap {
  background: radial-gradient(circle at 70% 20%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%),
  #fafafa;
  padding: 64px 16px 80px;
  font-family: system-ui, -apple-system, "Noto Sans KR", sans-serif;
  color: #1a1a1a;
}

/* 가운데 정렬 + 좌우 2컬럼 */
.how-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: flex-start;
}

@media (max-width: 900px) {
  .how-inner {
    grid-template-columns: 1fr;
  }
}

/* 왼쪽 텍스트 영역 */
.how-left {
  max-width: 480px;
}

/* 줄바꿈 적용 */
.headline, .lead { white-space: pre-line; }

.headline {
  font-size: clamp(24px, 2vw, 32px);
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 16px;
  color: #0d1a2b;
}

.lead {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin: 0 0 24px;
  word-break: keep-all;
}

/* 단계 리스트 */
.steps {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: grid;
  gap: 10px;
}

.step-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  line-height: 1.4;
  color: #666;
  font-weight: 500;
}

.step-num {
  min-width: 28px;
  height: 28px;
  border-radius: 999px;
  background: #d9dbe1;
  color: #444;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-text {
  color: #888;
  font-weight: 500;
}

.step-num.on {
  background: #155eef;
  color: #fff;
  box-shadow: 0 12px 24px rgba(21,94,239,0.3);
}
.step-text.on {
  color: #155eef;
  font-weight: 600;
}

/* 버튼 */
.plan-btn {
  border: none;
  border-radius: 10px;
  background: rgb(120, 200, 255);
  box-shadow: 0 16px 32px rgba(21, 94, 239, 0.35);
  transition: all 0.25s ease;
  padding: 0;
  cursor: pointer;
}
.plan-btn .btn {
  display: inline-block;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;
  padding: 14px 24px;
  text-decoration: none;
  border-radius: 10px;
}
.plan-btn:hover {
  background: #155eef;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transform: scale(1.08);
}
.plan-btn:hover .btn {
  color: #fff;
}

/* 오른쪽 카드 */
.how-right {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
}
.path-col {
  position: relative;
  padding-top: 8px;
}
.plane-icon {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: linear-gradient(135deg,#155eef 0%,#7a5cff 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 16px 32px rgba(21,94,239,.35);
  margin-left: 8px;
}
.dotted-line {
  width: 2px;
  background-image: repeating-linear-gradient(
      to bottom,
      rgba(0,0,0,0.12) 0px,
      rgba(0,0,0,0.12) 6px,
      rgba(0,0,0,0) 6px,
      rgba(0,0,0,0) 12px
  );
  flex-grow: 1;
  margin: 12px auto 0;
  border-radius: 1px;
  min-height: 260px;
}

/* 카드 리스트 */
.cards-col { display: grid; gap: 16px; }
.spot-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  background: rgba(255,255,255,0.9);
  border-radius: 8px;
  padding: 16px;
  box-shadow:
      0 30px 60px rgba(0,0,0,0.07),
      0 6px 20px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.04);
  min-width: 260px;
  max-width: 360px;
}
.spot-left { display: flex; gap: 12px; }
.bubble-num {
  min-width: 28px;
  height: 28px;
  border-radius: 999px;
  background: #ececf3;
  color: #4d4d66;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bubble-num.active {
  background: linear-gradient(135deg,#155eef 0%,#7a5cff 100%);
  color: #fff;
  box-shadow: 0 16px 24px rgba(21,94,239,.3);
}
.spot-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.spot-title {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
}
.spot-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.4;
  word-break: keep-all;
  max-width: 200px;
}
.thumb-box {
  width: 64px;
  height: 64px;
  border-radius: 6px;
  overflow: hidden;
  background: #ddd;
  flex-shrink: 0;
  box-shadow: 0 12px 24px rgba(0,0,0,.12);
}
.thumb-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
