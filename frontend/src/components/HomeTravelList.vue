<script setup>
import { ref, onMounted, watch } from 'vue'
import { getPlansForLocale } from '@/data/plansLoader.js'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })


const favoredNames = ref(new Set())

function loadFavoredFromStorage() {
  try {
    const raw = localStorage.getItem('favTitles')
    if (raw) {
      favoredNames.value = new Set(JSON.parse(raw))
    }
  } catch {
    favoredNames.value = new Set()
  }
}

function saveFavoredToStorage() {
  localStorage.setItem('favTitles', JSON.stringify([...favoredNames.value]))
}

function toggleFavorite(card) {
  if (!card?.title) return
  if (favoredNames.value.has(card.title)) {
    favoredNames.value.delete(card.title)
  } else {
    favoredNames.value.add(card.title)
  }
  saveFavoredToStorage()
}

function isFavored(card) {
  return !!card?.title && favoredNames.value.has(card.title)
}

const imageURLMap = {
  'src/assets/tokyo/cafe/yanaka-ginza.jpg': new URL('@/assets/tokyo/cafe/yanaka-ginza.jpg', import.meta.url).href,
  'src/assets/tokyo/nature/shinjuku-park.jpg': new URL('@/assets/tokyo/nature/shinjuku-park.jpg', import.meta.url).href,
  'src/assets/tokyo/nature/takao-mountain.jpg': new URL('@/assets/tokyo/nature/takao-mountain.jpg', import.meta.url).href,
  'src/assets/tokyo/photo/tokyo-gov-observatory.jpg': new URL('@/assets/tokyo/photo/tokyo-gov-observatory.jpg', import.meta.url).href,
  'src/assets/tokyo/photo/golden-gai.jpg': new URL('@/assets/tokyo/photo/golden-gai.jpg', import.meta.url).href,
  'src/assets/tokyo/photo/shibuya-sky.jpg': new URL('@/assets/tokyo/photo/shibuya-sky.jpg', import.meta.url).href,
  'src/assets/tokyo/food/motomura-gyukatsu.jpg': new URL('@/assets/tokyo/food/motomura-gyukatsu.jpg', import.meta.url).href,
  'src/assets/tokyo/food/ramen-jiro.jpg': new URL('@/assets/tokyo/food/ramen-jiro.jpg', import.meta.url).href,
  'src/assets/tokyo/food/rokkakai.jpg': new URL('@/assets/tokyo/food/rokkakai.jpg', import.meta.url).href,
  'src/assets/tokyo/shopping/kabukicho-tower.jpg': new URL('@/assets/tokyo/shopping/kabukicho-tower.jpg', import.meta.url).href,
  'src/assets/tokyo/shopping/harajuku-street.jpg': new URL('@/assets/tokyo/shopping/harajuku-street.jpg', import.meta.url).href,
  'src/assets/tokyo/trip/kawagoe.jpg': new URL('@/assets/tokyo/trip/kawagoe.jpg', import.meta.url).href,
  'src/assets/tokyo/spa/niwano-yu.jpg': new URL('@/assets/tokyo/spa/niwano-yu.jpg', import.meta.url).href,
  'src/assets/tokyo/festival/sumida-fireworks.jpg': new URL('@/assets/tokyo/festival/sumida-fireworks.jpg', import.meta.url).href,

  'src/assets/osaka/cafe/nakazakicho.jpg': new URL('@/assets/osaka/cafe/nakazakicho.jpg', import.meta.url).href,
  'src/assets/osaka/nature/nagai-park.jpg': new URL('@/assets/osaka/nature/nagai-park.jpg', import.meta.url).href,
  'src/assets/osaka/photo/abenoharukas.jpg': new URL('@/assets/osaka/photo/abenoharukas.jpg', import.meta.url).href,
  'src/assets/osaka/food/shinsekai.jpg': new URL('@/assets/osaka/food/shinsekai.jpg', import.meta.url).href,
  'src/assets/osaka/food/inano.jpg': new URL('@/assets/osaka/food/inano.jpg', import.meta.url).href,
  'src/assets/osaka/shopping/americamura.jpg': new URL('@/assets/osaka/shopping/americamura.jpg', import.meta.url).href,
  'src/assets/osaka/shopping/nakatsu.jpg': new URL('@/assets/osaka/shopping/nakatsu.jpg', import.meta.url).href,
  'src/assets/osaka/trip/ikoma_sanjo.jpg': new URL('@/assets/osaka/trip/ikoma_sanjo.jpg', import.meta.url).href,
  'src/assets/osaka/spa/spa_suminoe.jpg': new URL('@/assets/osaka/spa/spa_suminoe.jpg', import.meta.url).href,
  'src/assets/osaka/spa/arima_onsen.jpg': new URL('@/assets/osaka/spa/arima_onsen.jpg', import.meta.url).href,
  'src/assets/osaka/festival/tenjin_matsuri.jpg': new URL('@/assets/osaka/festival/tenjin_matsuri.jpg', import.meta.url).href,
  'src/assets/osaka/festival/naniwa_yukiyoe_matsuri.jpg': new URL('@/assets/osaka/festival/naniwa_yukiyoe_matsuri.jpg', import.meta.url).href,

  'src/assets/nagoya/cafe/aitovillage.jpg': new URL('@/assets/nagoya/cafe/aitovillage.jpg', import.meta.url).href,
  'src/assets/nagoya/nature/asuke.jpg': new URL('@/assets/nagoya/nature/asuke.jpg', import.meta.url).href,
  'src/assets/nagoya/photo/endoji.jpg': new URL('@/assets/nagoya/photo/endoji.jpg', import.meta.url).href,
  'src/assets/nagoya/food/ramuchi.jpg': new URL('@/assets/nagoya/food/ramuchi.jpg', import.meta.url).href,
  'src/assets/nagoya/food/yamamoto.jpg': new URL('@/assets/nagoya/food/yamamoto.jpg', import.meta.url).href,
  'src/assets/nagoya/shopping/osu.jpg': new URL('@/assets/nagoya/shopping/osu.jpg', import.meta.url).href,
  'src/assets/nagoya/culture/science_museum.jpg': new URL('@/assets/nagoya/culture/science_museum.jpg', import.meta.url).href,
  'src/assets/nagoya/trip/inuyama_castle.jpg': new URL('@/assets/nagoya/trip/inuyama_castle.jpg', import.meta.url).href,
  'src/assets/nagoya/trip/shirakawago.jpg': new URL('@/assets/nagoya/trip/shirakawago.jpg', import.meta.url).href,
  'src/assets/nagoya/spa/gero_onsen.jpg': new URL('@/assets/nagoya/spa/gero_onsen.jpg', import.meta.url).href,
  'src/assets/nagoya/festival/nabana_no_sato.jpg': new URL('@/assets/nagoya/festival/nabana_no_sato.jpg', import.meta.url).href,

  'src/assets/fukuoka/cafe/futamigaura.jpg': new URL('@/assets/fukuoka/cafe/futamigaura.jpg', import.meta.url).href,
  'src/assets/fukuoka/walk/ohori_park.jpg': new URL('@/assets/fukuoka/walk/ohori_park.jpg', import.meta.url).href,
  'src/assets/fukuoka/walk/mojiko_retro.jpg': new URL('@/assets/fukuoka/walk/mojiko_retro.jpg', import.meta.url).href,
  'src/assets/fukuoka/nature/nokonoshima.jpg': new URL('@/assets/fukuoka/nature/nokonoshima.jpg', import.meta.url).href,
  'src/assets/fukuoka/nature/senjo_hara_park.jpg': new URL('@/assets/fukuoka/nature/senjo_hara_park.jpg', import.meta.url).href,
  'src/assets/fukuoka/nature/chofu_garden.jpg': new URL('@/assets/fukuoka/nature/chofu_garden.jpg', import.meta.url).href,
  'src/assets/fukuoka/photo/hinoyama_ropeway.jpg': new URL('@/assets/fukuoka/photo/hinoyama_ropeway.jpg', import.meta.url).href,
  'src/assets/fukuoka/culture/kanmon_museum.jpg': new URL('@/assets/fukuoka/culture/kanmon_museum.jpg', import.meta.url).href,

  'src/assets/sapporo/cafe/maruyama_koen.jpg': new URL('@/assets/sapporo/cafe/maruyama_koen.jpg', import.meta.url).href,
  'src/assets/sapporo/nature/odori_park.jpg': new URL('@/assets/sapporo/nature/odori_park.jpg', import.meta.url).href,
  'src/assets/sapporo/photo/moiwa_yama.jpg': new URL('@/assets/sapporo/photo/moiwa_yama.jpg', import.meta.url).href,
  'src/assets/sapporo/food/nijo_ichiba.jpg': new URL('@/assets/sapporo/food/nijo_ichiba.jpg', import.meta.url).href,
  'src/assets/sapporo/shopping/tanukikoji.jpg': new URL('@/assets/sapporo/shopping/tanukikoji.jpg', import.meta.url).href,
  'src/assets/sapporo/culture/sapporo_beer_museum.jpg': new URL('@/assets/sapporo/culture/sapporo_beer_museum.jpg', import.meta.url).href,
  'src/assets/sapporo/trip/blue_pond.jpg': new URL('@/assets/sapporo/trip/blue_pond.jpg', import.meta.url).href,
  'src/assets/sapporo/trip/seven_stars_tree.jpg': new URL('@/assets/sapporo/trip/seven_stars_tree.jpg', import.meta.url).href,
  'src/assets/sapporo/festival/snow_festival.jpg': new URL('@/assets/sapporo/festival/snow_festival.jpg', import.meta.url).href,
  'src/assets/sapporo/festival/beer_garden.jpg': new URL('@/assets/sapporo/festival/beer_garden.jpg', import.meta.url).href,
}

// fallback 이미지 한 장 골라서 지정
const FALLBACK_IMG = new URL('@/assets/carousel/carousel1.jpg', import.meta.url).href

function normalizeCard(card) {
  // card.img가 문자열이면 거기서 매핑 URL 찾아서 덮어씌움
  const fixedImg =
      (card?.img && imageURLMap[card.img]) ? imageURLMap[card.img] : FALLBACK_IMG

  return {
    ...card,
    img: fixedImg,
  }
}

const travels = ref([])

function buildHomeTravels() {
  const plans = getPlansForLocale()

  const list = []
  if (plans.tokyo?.cafe?.[0])    list.push(plans.tokyo.cafe[0])
  if (plans.tokyo?.photo?.[2])   list.push(plans.tokyo.photo[2])
  if (plans.osaka?.cafe?.[0])    list.push(plans.osaka.cafe[0])
  if (plans.osaka?.food?.[0])    list.push(plans.osaka.food[0])
  if (plans.nagoya?.trip?.[1])   list.push(plans.nagoya.trip[1])
  if (plans.fukuoka?.walk?.[0])  list.push(plans.fukuoka.walk[0])
  if (plans.sapporo?.photo?.[0]) list.push(plans.sapporo.photo[0])
  if (plans.fukuoka?.cafe?.[0])  list.push(plans.fukuoka.cafe[0])

  travels.value = list.slice(0, 8).map(normalizeCard)
}

onMounted(() => {
  loadFavoredFromStorage()
  buildHomeTravels()
})

watch(locale, () => {
  buildHomeTravels()
})
</script>

<template>
  <section class="travel-section fullbleed">
    <div class="container">
      <h2 class="title">{{ t('travelList.sectionTitle') }}</h2>

      <div class="grid">
        <article class="card" v-for="(item, i) in travels" :key="i">
          <div class="thumb">
            <img :src="item.img" :alt="item.title" />
          </div>

          <div class="content">
            <p class="subtitle">
              {{ item.tag }} · {{ item.subtitle }}
            </p>

            <h3 class="name">{{ item.title }}</h3>

            <p class="desc">
              {{ item.bottomDesc }}
            </p>

            <ul class="info-list">
              <li v-if="item.content?.hours">
                <strong>{{ t('travelList.hours') }}</strong> {{ item.content.hours }}
              </li>
              <li v-if="item.content?.fee">
                <strong>{{ t('travelList.fee') }}</strong> {{ item.content.fee }}
              </li>
              <li v-if="item.content?.address">
                <strong>{{ t('travelList.address') }}</strong> {{ item.content.address }}
              </li>
            </ul>

            <div v-if="item.content?.tip" class="tip-line">
              💡 {{ item.content.tip }}
            </div>

            <div class="btn-row">
              <a
                  v-if="item.link"
                  class="detail"
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                {{ t('travelList.detailLink') }}
              </a>

              <button
                  v-else
                  class="detail detail-disabled"
                  disabled
              >
                {{ t('travelList.detailLink') }}
              </button>

              <button
                  class="fav"
                  :class="{ active: isFavored(item) }"
                  @click="toggleFavorite(item)"
              >
                {{
                  isFavored(item)
                      ? t('travelList.favDone')
                      : t('travelList.favAdd')
                }}
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* (스타일은 방금 버전이랑 동일하니까 그대로 둔다) */
.travel-section.fullbleed {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 42px 0 60px;
  background: #fff;
}

/* 내부 컨테이너 */
.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 40px);
  box-sizing: border-box;
}

/* 타이틀 */
.title {
  font-size: 28px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 28px;
  color: #111;
  white-space: pre-line;
}

/* 그리드 */
.grid {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
@media (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

/* 카드 */
.card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 4px 14px rgba(0,0,0,.09);
  transition: transform .2s, box-shadow .2s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0,0,0,.16);
}

/* 썸네일 */
.thumb {
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  background: #f2f2f2;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 내용 */
.content {
  padding: 22px 22px 26px;
}

/* ===== 텍스트 공통 리셋 ===== */
.subtitle,
.name,
.desc,
.info-list,
.info-list strong,
.tip-line {
  white-space: pre-line;          /* 우리가 데이터에 넣은 \n 유지 */
  word-break: break-word;         /* 박스 밖으로 넘칠 때만 적당히 끊어 */
  overflow-wrap: break-word;      /* 너무 긴 단어/URL만 강제로 줄바꿈 */
}

/* 세부 텍스트 스타일 */
.subtitle {
  font-size: 14px;
  color: #666;
  margin: 0 0 8px;
  line-height: 1.4;
}

.name {
  font-size: 20px;
  font-weight: 800;
  color: #333;
  margin: 0 0 12px;
  line-height: 1.3;
}

.desc {
  font-size: 14px;
  color: #4a443a;
  line-height: 1.5;
  margin: 0 0 14px;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 13px;
  color: #4a443a;
  line-height: 1.4;
}
.info-list li {
  margin-bottom: 4px;
}
.info-list strong {
  color: #3a332a;
  font-weight: 600;
  font-size: 13px;
  margin-right: 4px;
}

.tip-line {
  font-size: 13px;
  line-height: 1.4;
  color: #8a5f00;
  background: #fff8df;
  border: 1px solid #e6d29a;
  border-radius: 4px;
  padding: 8px 10px;
  margin-bottom: 18px;
}

/* 버튼 행 */
.btn-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

/* 자세히 보기 버튼 */
.detail {
  display: inline-block;
  text-align: center;
  border: 0;
  background: #444;
  color: #fff;
  padding: 11px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  line-height: 1.2;
  font-weight: 500;
  text-decoration: none;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
}
.detail:hover {
  background: #222;
}
.detail-disabled {
  background: #aaa;
  cursor: not-allowed;
}

/* 찜 버튼 */
.fav {
  border: 1px solid #ddd;
  background: #fff;
  color: #444;
  padding: 11px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  line-height: 1.2;
  font-weight: 500;
  transition: all .18s ease;
  min-width: 92px;
  text-align: center;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
}
.fav.active {
  background: #ffe7eb;
  border-color: #ff8da1;
  color: #e40050;
}



</style>
