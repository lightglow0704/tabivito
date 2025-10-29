<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { getPlansForLocale } from '@/data/plansLoader.js'

const { t, locale } = useI18n({ useScope: 'global' })

// 내가 찜한 카드들만 모은 결과
const favoriteCards = ref([])

// localStorage -> Set
function loadFavoredTitles() {
  try {
    const raw = localStorage.getItem('favTitles')
    if (!raw) return new Set()
    return new Set(JSON.parse(raw)) // ["야나카 긴자", ...]
  } catch (e) {
    console.error('loadFavoredTitles error:', e)
    return new Set()
  }
}

function saveFavoredTitles(setObj) {
  localStorage.setItem('favTitles', JSON.stringify(Array.from(setObj)))
}

// 현재 locale의 모든 카드(flat) 뽑는 헬퍼
function getAllCardsFlat() {
  const allPlans = getPlansForLocale(locale.value)
  const result = []

  for (const cityKey in allPlans) {
    const cityData = allPlans[cityKey]
    if (!cityData) continue

    for (const categoryKey in cityData) {
      const arr = cityData[categoryKey]
      if (Array.isArray(arr)) {
        for (const card of arr) {
          result.push(card)
        }
      }
    }
  }

  return result
}

// 마이페이지용 목록 만들기
function buildFavoriteCards() {
  const favSet = loadFavoredTitles() // Set of titles
  const all = getAllCardsFlat()      // 모든 카드

  // 찜한 title 에 해당하는 카드만
  favoriteCards.value = all.filter(c => favSet.has(c.title))
}

// 찜 해제
function removeFavorite(card) {
  const favSet = loadFavoredTitles()
  favSet.delete(card.title)
  saveFavoredTitles(favSet)
  buildFavoriteCards()
}

onMounted(() => {
  buildFavoriteCards()
})

// 언어 바뀌면 다시 로드
watch(locale, () => {
  buildFavoriteCards()
})
</script>

<template>
  <main class="mypage-wrap">
    <section class="inner">
      <h2 class="heading">{{ t('mypage.title') }}</h2>

      <div v-if="favoriteCards.length === 0" class="empty">
        {{ t('mypage.empty') }}
      </div>

      <article
          v-for="(card, idx) in favoriteCards"
          :key="idx"
          class="fav-card"
      >
        <div class="plan-top">
          <div class="thumb-wrap">
            <img :src="card.img" :alt="card.title" />
          </div>

          <div class="text-wrap">
            <span class="tag">{{ t('mypage.tag') }}</span>

            <div class="title">{{ card.title }}</div>
            <div class="subtitle">{{ card.subtitle }}</div>

            <!-- 설명 -->
            <div class="desc-main">
              {{ card.bottomDesc }}
            </div>

            <!-- 정보 리스트 -->
            <ul class="info-list">
              <li v-if="card.content?.hours">
                <strong>{{ t('main.hours') }}:</strong>
                {{ card.content.hours }}
              </li>
              <li v-if="card.content?.fee">
                <strong>{{ t('main.fee') }}:</strong>
                {{ card.content.fee }}
              </li>
              <li v-if="card.content?.address">
                <strong>{{ t('main.address') }}:</strong>
                {{ card.content.address }}
              </li>
            </ul>

            <!-- 팁 -->
            <div
                v-if="card.content?.tip"
                class="tip-line"
            >
              💡 {{ card.content.tip }}
            </div>
          </div>
        </div>

        <div class="plan-foot">
          <a
              v-if="card.link"
              class="more-btn"
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
          >
            {{ t('main.more') }}
          </a>

          <button
              class="fav-btn on"
              @click="removeFavorite(card)"
          >
            💔 {{ t('mypage.unfav') }}
          </button>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.mypage-wrap {
  min-height: calc(100vh - 120px);
  background: #f9f6f1;
  display: flex;
  justify-content: center;
  padding: 32px 16px 80px;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, "Noto Sans KR", sans-serif;
}

.inner {
  width: 100%;
  max-width: 800px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.07);
  padding: 24px 20px 20px;
}

.heading {
  font-size: 18px;
  font-weight: 700;
  color: #3a332a;
  margin-bottom: 16px;
}

.empty {
  text-align: center;
  color: #8a8173;
  font-size: 14px;
  padding: 60px 0;
}

.fav-card {
  border-radius: 12px;
  border: 1px solid #e0ddd6;
  background: #f9f6f1;
  box-shadow: 0 8px 16px rgba(0,0,0,.06);
  padding: 16px;
  margin-bottom: 16px;
}

.plan-top {
  display: grid;
  grid-template-columns: 84px 1fr;
  grid-gap: 12px;
  align-items: flex-start;
  margin-bottom: 12px;
}

.thumb-wrap {
  width: 84px;
  height: 84px;
  border-radius: 6px;
  overflow: hidden;
  background: #ddd;
  box-shadow: 0 4px 10px rgba(0,0,0,.1);
}
.thumb-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-wrap .tag {
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  background: #c15e4a;
  border-radius: 5px;
  padding: 3px 6px;
  line-height: 1.2;
  display: inline-block;
  margin-bottom: 6px;
}
.text-wrap .title {
  font-size: 14px;
  font-weight: 700;
  color: #3a332a;
  line-height: 1.4;
  margin-bottom: 4px;
}
.text-wrap .subtitle {
  font-size: 12px;
  font-weight: 500;
  color: #3a332a;
  margin-bottom: 8px;
  word-break: keep-all;
}

/* ✅ 줄바꿈(\n) 살리는 핵심 */
.desc-main {
  font-size: 12px;
  color: #4a443a;
  line-height: 1.4;
  margin-bottom: 8px;
  word-break: keep-all;
  white-space: pre-line; /* <<<<<< 이거 덕분에 \n이 실제 줄바꿈으로 보여 */
}

/* info list */
.info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #4a443a;
  line-height: 1.4;
  word-break: keep-all;
  white-space: pre-line; /* 여기도 개행 들어갈 수 있으니까 같이 */
}
.info-list li {
  margin-bottom: 2px;
}
.info-list strong {
  color: #3a332a;
  font-weight: 600;
  font-size: 12px;
  margin-right: 4px;
}

/* 팁 영역도 여러 줄일 수 있으니까 동일하게 */
.tip-line {
  font-size: 12px;
  line-height: 1.4;
  color: #8a5f00;
  background: #fff8df;
  border: 1px solid #e6d29a;
  border-radius: 4px;
  padding: 6px 8px;
  word-break: keep-all;
  white-space: pre-line; /* <<<<<< 핵심 */
}

.plan-foot {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.more-btn {
  appearance: none;
  border: 0;
  background: #3a332a;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  border-radius: 6px;
  padding: 8px 10px;
  cursor: pointer;
  text-decoration: none;
}
.more-btn:active { opacity: .8; }

.fav-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid #c62828;
  background: #fff;
  color: #c62828;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  border-radius: 6px;
  padding: 8px 10px;
  cursor: pointer;
}
.fav-btn.on {
  background: #fff;
  color: #c62828;
  border-color: #c62828;
}
.fav-btn:active { opacity: .8; }
</style>
