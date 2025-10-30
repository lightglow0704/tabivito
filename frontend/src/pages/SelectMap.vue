<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getPlansForLocale } from '@/data/plansLoader.js'
import { useUserStore } from '@/store/userStore'

const { t, locale } = useI18n({ useScope: 'global' })
const userStore = useUserStore()

// 라우트에서 city/style 받기
const route = useRoute()
const chosenCity = route.query.city || ''
const chosenStyle = route.query.style || ''

// 지도 핀
const spots = [
  { id: 'tokyo',   labelKey: 'main.city.tokyo',   top: '50%', left: '67%' },
  { id: 'osaka',   labelKey: 'main.city.osaka',   top: '57%', left: '47.5%' },
  { id: 'nagoya',  labelKey: 'main.city.nagoya',  top: '53%', left: '55%' },
  { id: 'fukuoka', labelKey: 'main.city.fukuoka', top: '62%', left: '23%' },
  { id: 'sapporo', labelKey: 'main.city.sapporo', top: '18%', left: '73%' },
]

const activeSpotId = ref('')

// 최초 진입 시 로컬 즐겨찾기 로드
onMounted(() => {
  userStore.loadFavorites()
})

// 현재 로케일의 특정 도시 카드 전부
function getAllCardsForCity(city) {
  const allPlans = getPlansForLocale(locale.value)
  const cityData = allPlans[city]
  if (!cityData) return []
  return Object.values(cityData)
  .flat()
  .map(c => ({ ...c, imgRaw: c.img }))   // ✅ 원본 경로 유지
}

// 우측 패널 데이터
const displayCards = computed(() => {
  if (activeSpotId.value) return getAllCardsForCity(activeSpotId.value)

  const city = chosenCity || 'tokyo'
  const style = chosenStyle || null

  const allPlans = getPlansForLocale(locale.value)
  const cityData = allPlans[city]
  if (!cityData) return []

  if (style && cityData[style]) return cityData[style]
  return Object.values(cityData).flat()
})

function selectSpot(id) {
  activeSpotId.value = id
}

// ✅ 스토어 사용
const toggleFavorite = (card) => userStore.toggleFavorite(card)
const isFavored      = (card) => userStore.isFavorite(card)

// 로케일 변경 시 안전하게 재로드
watch(locale, () => userStore.loadFavorites())
</script>

<template>
  <div class="map-page-root">
    <!-- 지도 -->
    <div class="map-layer">
      <div class="map-figure">
        <img class="japan-bg" src="../assets/nippon_icon.png" :alt="t('main.mapAlt')" />
        <button
            v-for="spot in spots"
            :key="spot.id"
            class="map-pin"
            :class="{ active: activeSpotId === spot.id }"
            :style="{ top: spot.top, left: spot.left }"
            @click="selectSpot(spot.id)"
        >
          <img class="pin-img" src="@/assets/touch_icon.png" :alt="t(spot.labelKey)" />
          <span class="pin-label">{{ t(spot.labelKey) }}</span>
        </button>
      </div>
    </div>

    <!-- 우측 패널 -->
    <aside class="side-panel">
      <header class="panel-header">
        <p class="mini">TABIVITO {{ t('main.recommendTitle') }}</p>

        <div class="summary">
          <div v-if="chosenCity" class="row">
            <span class="label">{{ t('main.cityLabel') }}</span>
            <strong class="val">{{ chosenCity }}</strong>
          </div>
          <div v-if="chosenStyle" class="row">
            <span class="label">{{ t('main.styleLabel') }}</span>
            <strong class="val">{{ chosenStyle }}</strong>
          </div>
          <div v-if="activeSpotId" class="row">
            <span class="label">{{ t('main.mapPick') }}</span>
            <strong class="val">{{ t('main.city.' + activeSpotId) }}</strong>
          </div>
        </div>

        <p class="hint" v-html="t('main.hintHTML')"></p>
      </header>

      <div class="panel-scroll">
        <div
            v-for="(c, idx) in displayCards"
            :key="idx"
            class="plan-card"
        >
          <div class="plan-top">
            <div class="thumb-wrap">
              <img :src="c.img || ''" :alt="c.title" />
            </div>

            <div class="text-wrap">
              <span class="tag">{{ c.tag }}</span>

              <div class="title">{{ c.title }}</div>
              <div class="subtitle">{{ c.subtitle }}</div>

              <div class="desc-main">
                {{ c.bottomDesc }}
              </div>

              <ul class="info-list">
                <li v-if="c.content?.hours">
                  <strong>{{ t('main.hours') }}:</strong> {{ c.content.hours }}
                </li>
                <li v-if="c.content?.fee">
                  <strong>{{ t('main.fee') }}:</strong> {{ c.content.fee }}
                </li>
                <li v-if="c.content?.address">
                  <strong>{{ t('main.address') }}:</strong> {{ c.content.address }}
                </li>
              </ul>

              <div v-if="c.content?.tip" class="tip-line">
                💡 {{ c.content.tip }}
              </div>
            </div>
          </div>

          <div class="plan-foot">
            <a
                v-if="c.link"
                class="more-btn"
                :href="c.link"
                target="_blank"
                rel="noopener noreferrer"
            >
              {{ t('main.more') }}
            </a>

            <button
                class="fav-btn"
                :class="{ on: isFavored(c) }"
                @click="toggleFavorite(c)"
            >
              <span v-if="isFavored(c)">💖 {{ t('main.favored') }}</span>
              <span v-else>🤍 {{ t('main.fav') }}</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
/* — 기존 스타일 그대로 — */
.map-page-root{position:relative;width:100vw;height:calc(100vh - 60px);background:linear-gradient(180deg,#aee6ff 0%,#e8faff 100%);overflow:hidden;font-family:system-ui,-apple-system,"Noto Sans KR",sans-serif}
.map-layer{position:absolute;inset:0;display:flex;justify-content:flex-start;align-items:center;padding-left:8vw;padding-right:400px;box-sizing:border-box}
.map-figure{position:relative;width:900px;aspect-ratio:1/1;max-width:90vw;filter:drop-shadow(0 25px 40px rgba(0,0,0,.4))}
.japan-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none}
.map-pin{position:absolute;transform:translate(-50%,-50%);background:none;border:none;cursor:pointer;text-align:center}
.pin-img{width:32px;height:32px;object-fit:contain;transition:transform .3s ease,filter .3s ease}
.pin-img:hover{transform:translateY(-6px) scale(1.1);filter:drop-shadow(0 0 10px rgba(255,60,60,.8))}
.pin-label{display:inline-block;margin-top:4px;padding:2px 6px;font-size:12px;line-height:1.2;border-radius:6px;background:rgba(255,255,255,.9);color:#222;box-shadow:0 2px 4px rgba(0,0,0,.4);white-space:nowrap}
.map-pin.active .pin-label{background:#3a332a;color:#fff;box-shadow:0 4px 10px rgba(58,51,42,.4)}
.side-panel{position:absolute;top:0;right:0;width:400px;max-width:90%;height:100%;background:#f9f6f1;display:flex;flex-direction:column;box-shadow:-6px 0 25px rgba(0,0,0,.3);border-left:1px solid rgba(0,0,0,.1);border-top-left-radius:14px;border-bottom-left-radius:14px;overflow:hidden}
.panel-header{padding:16px;background:#faf8f4;border-bottom:1px solid #e5e2dc}
.panel-header .mini{font-size:12px;font-weight:600;color:#3a332a;margin:0 0 8px}
.summary{display:flex;flex-wrap:wrap;gap:8px 12px;font-size:13px;color:#3a332a;margin-bottom:8px}
.summary .row{display:flex;gap:4px;align-items:baseline}
.summary .label{font-size:11px;color:#8a8173;background:#ede9e0;padding:2px 5px;border-radius:4px}
.summary .val{font-size:13px;font-weight:600;color:#3a332a}
.hint{font-size:12px;color:#8a8173;line-height:1.4;margin:0}
.panel-scroll{flex:1;overflow-y:auto;padding:16px;background:#f9f6f1}
.panel-scroll::-webkit-scrollbar{width:6px}
.panel-scroll::-webkit-scrollbar-thumb{background:rgba(0,0,0,.25);border-radius:3px}
.plan-card{border-radius:12px;border:1px solid #e0ddd6;background:#f9f6f1;box-shadow:0 8px 16px rgba(0,0,0,.06);padding:16px;margin-bottom:16px}
.plan-top{display:grid;grid-template-columns:84px 1fr;grid-gap:12px;align-items:flex-start;margin-bottom:12px}
.thumb-wrap{width:84px;height:84px;border-radius:6px;overflow:hidden;background:#ddd;box-shadow:0 4px 10px rgba(0,0,0,.1)}
.thumb-wrap img{width:100%;height:100%;object-fit:cover;display:block}
.text-wrap .tag{font-size:11px;font-weight:600;color:#fff;background:#c15e4a;border-radius:5px;padding:3px 6px;line-height:1.2;display:inline-block;margin-bottom:6px}
.text-wrap .title{font-size:14px;font-weight:700;color:#3a332a;line-height:1.4;margin-bottom:4px}
.text-wrap .subtitle{font-size:12px;font-weight:500;color:#3a332a;margin-bottom:8px;word-break:keep-all}
.desc-main{font-size:12px;color:#4a443a;line-height:1.4;margin-bottom:8px;word-break:keep-all}
.info-list{list-style:none;padding:0;margin:0 0 8px 0;font-size:12px;color:#4a443a;line-height:1.4;word-break:keep-all}
.info-list li{margin-bottom:2px}
.info-list strong{color:#3a332a;font-weight:600;font-size:12px;margin-right:4px}
.tip-line{font-size:12px;line-height:1.4;color:#8a5f00;background:#fff8df;border:1px solid #e6d29a;border-radius:4px;padding:6px 8px;word-break:keep-all}
.plan-foot{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-top:12px}
.more-btn{appearance:none;border:0;background:#3a332a;color:#fff;font-size:12px;font-weight:600;line-height:1.2;border-radius:6px;padding:8px 10px;cursor:pointer;text-decoration:none}
.more-btn:active{opacity:.8}
.fav-btn{display:inline-flex;align-items:center;gap:4px;border:1px solid #c62828;background:#fff;color:#c62828;font-size:12px;font-weight:600;line-height:1.2;border-radius:6px;padding:8px 10px;cursor:pointer;transition:all .15s}
.fav-btn.on{background:#ffe7eb;border-color:#ff8da1;color:#e40050}
.fav-btn:active{opacity:.8}
</style>
