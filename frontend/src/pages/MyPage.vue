<script setup>
import { ref, onMounted, watch} from 'vue'
import { useI18n } from 'vue-i18n'
import { getPlansForLocale } from '@/data/plansLoader.js'
import { useUserStore } from '@/store/userStore'

const { t, locale } = useI18n({ useScope: 'global' })
const userStore = useUserStore()

// 최초 진입 시 로컬 즐겨찾기 주입
onMounted(() => {
  userStore.loadFavorites()
})

// 현재 로케일의 전체 카드 flat
function getAllCardsFlat() {
  const allPlans = getPlansForLocale(locale.value)
  const out = []
  for (const cityKey in allPlans) {
    const cityData = allPlans[cityKey]
    if (!cityData) continue
    for (const categoryKey in cityData) {
      const arr = cityData[categoryKey]
      if (Array.isArray(arr)) out.push(...arr)
    }
  }
  return out
}

// ✨ 공통 매칭 키 생성 (가능하면 고유한 것 → fallback 순)
const keyOfCard = (c) =>
    c?.id || c?.slug || c?.link || c?.img || c?.title || null

const keyOfFav = (f) =>
    f?.id || f?.slug || f?.link || f?.travelImage || f?.key || f?.travelName || null

// 화면에 뿌릴 카드
const favoriteCards = ref([])

function buildFavoriteCards() {
  // 1) 저장된 즐겨찾기(언어 독립)에서 키 셋 구성
  const favKeys = new Set(userStore.favorites
      .map(keyOfFav)
      .filter(Boolean))

  // 2) 현재 로케일 카드 중에서 같은 키를 가진 것만 추출
  const all = getAllCardsFlat()
  const matched = all.filter(c => favKeys.has(keyOfCard(c)))

  // 3) 만약 키로 못 찾은 게 있다면(과거 데이터 등)… 제목으로 느슨 매칭 보조
  if (matched.length < userStore.favorites.length) {
    const titleSet = new Set(
        userStore.favorites
            .map(f => f.travelName || f.title)
            .filter(Boolean)
    )
    for (const c of all) {
      if (!matched.includes(c) && titleSet.has(c.title)) {
        matched.push(c)
      }
    }
  }

  favoriteCards.value = matched
}

// 언어 바뀌면 즉시 재계산
watch(locale, buildFavoriteCards)
// 즐겨찾기 데이터 자체가 바뀌어도 재계산
watch(() => userStore.favorites, buildFavoriteCards, { deep: true })

onMounted(buildFavoriteCards)

// 찜 해제(스토어만 호출하면 로컬/상태가 모두 갱신됨)
async function removeFavorite(card) {
  await userStore.toggleFavorite(card)
  buildFavoriteCards()
}
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

            <div class="desc-main">
              {{ card.bottomDesc }}
            </div>

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

            <div v-if="card.content?.tip" class="tip-line">
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

          <button class="fav-btn on" @click="removeFavorite(card)">
            💔 {{ t('mypage.unfav') }}
          </button>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
/* (네 기존 스타일 그대로) */
.mypage-wrap {
  min-height: calc(100vh - 120px);
  background: #f9f6f1;
  display: flex;
  justify-content: center;
  padding: 32px 16px 80px;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, "Noto Sans KR", sans-serif;
}
.inner { width: 100%; max-width: 800px; background: #fff; border-radius: 16px; box-shadow: 0 12px 24px rgba(0,0,0,0.07); padding: 24px 20px 20px; }
.heading { font-size: 18px; font-weight: 700; color: #3a332a; margin-bottom: 16px; }
.empty { text-align: center; color: #8a8173; font-size: 14px; padding: 60px 0; }
.fav-card { border-radius: 12px; border: 1px solid #e0ddd6; background: #f9f6f1; box-shadow: 0 8px 16px rgba(0,0,0,.06); padding: 16px; margin-bottom: 16px; }
.plan-top { display: grid; grid-template-columns: 84px 1fr; grid-gap: 12px; align-items: flex-start; margin-bottom: 12px; }
.thumb-wrap { width: 84px; height: 84px; border-radius: 6px; overflow: hidden; background: #ddd; box-shadow: 0 4px 10px rgba(0,0,0,.1); }
.thumb-wrap img { width: 100%; height: 100%; object-fit: cover; }
.text-wrap .tag { font-size: 11px; font-weight: 600; color: #fff; background: #c15e4a; border-radius: 5px; padding: 3px 6px; line-height: 1.2; display: inline-block; margin-bottom: 6px; }
.text-wrap .title { font-size: 14px; font-weight: 700; color: #3a332a; line-height: 1.4; margin-bottom: 4px; }
.text-wrap .subtitle { font-size: 12px; font-weight: 500; color: #3a332a; margin-bottom: 8px; word-break: keep-all; }
.desc-main { font-size: 12px; color: #4a443a; line-height: 1.4; margin-bottom: 8px; word-break: keep-all; white-space: pre-line; }
.info-list { list-style: none; padding: 0; margin: 0 0 8px 0; font-size: 12px; color: #4a443a; line-height: 1.4; word-break: keep-all; white-space: pre-line; }
.info-list li { margin-bottom: 2px; }
.info-list strong { color: #3a332a; font-weight: 600; font-size: 12px; margin-right: 4px; }
.tip-line { font-size: 12px; line-height: 1.4; color: #8a5f00; background: #fff8df; border: 1px solid #e6d29a; border-radius: 4px; padding: 6px 8px; word-break: keep-all; white-space: pre-line; }
.plan-foot { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.more-btn { appearance: none; border: 0; background: #3a332a; color: #fff; font-size: 12px; font-weight: 600; line-height: 1.2; border-radius: 6px; padding: 8px 10px; cursor: pointer; text-decoration: none; }
.more-btn:active { opacity: .8; }
.fav-btn { display: inline-flex; align-items: center; gap: 4px; border: 1px solid #c62828; background: #fff; color: #c62828; font-size: 12px; font-weight: 600; line-height: 1.2; border-radius: 6px; padding: 8px 10px; cursor: pointer; }
.fav-btn.on { background: #fff; color: #c62828; border-color: #c62828; }
.fav-btn:active { opacity: .8; }
</style>
