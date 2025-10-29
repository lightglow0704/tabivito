<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const props = defineProps({
  images: { type: Array, default: () => [] },
  interval: { type: Number, default: 5000 },
})

const idx = ref(0)
let timer

function next() {
  idx.value = (idx.value + 1) % props.images.length
}
function prev() {
  idx.value = (idx.value - 1 + props.images.length) % props.images.length
}

onMounted(() => {
  if (props.images.length > 1) {
    timer = setInterval(next, props.interval)
  }
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template class="inline">
  <section class="hero">
    <div class="slider">
      <div class="frame">

        <!-- 모든 슬라이드 -->
        <div
            v-for="(src, i) in images"
            :key="i"
            class="slide"
            :class="{ active: i === idx }"
        >
          <img :src="src" alt="" />
        </div>

        <!-- 텍스트 영역 -->
        <div class="caption">
          <h2>{{ t('hero.line1') }}</h2>

          <p class="line">{{ t('hero.line2') }}</p>
          <p class="line">{{ t('hero.line3') }}</p>
        </div>

        <!-- 좌우 버튼 (접근성 라벨도 다국어) -->
        <button
            class="nav left"
            @click="prev"
            :aria-label="t('hero.prev')"
        />
        <button
            class="nav right"
            @click="next"
            :aria-label="t('hero.next')"
        />
      </div>

      <!-- 인디케이터 -->
      <div v-if="images.length > 1" class="dots">
        <button
            v-for="(s, i) in images"
            :key="i"
            :class="{ on: i === idx }"
            @click="idx = i"
        />
      </div>
    </div>
  </section>
</template>


<style scoped>
/* hero 전체를 화면폭에 맞게 */
.hero {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}

.slider {
  width: 100%;
}

/* 캐러셀 프레임 (이미지랑 텍스트 올라가는 영역) */
.frame {
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 9;
  max-height: 720px;
  overflow: hidden;
  background: #000;
  border-radius: 14px;
}

/* 태블릿/노트북 이하에서는 조금 덜 와이드 */
@media (max-width: 1024px) {
  .frame {
    aspect-ratio: 16 / 9;
    border-radius: 0;
  }
}

/* 모바일에서는 세로 길이 늘려서 텍스트 안 잘리게 */
@media (max-width: 600px) {
  .frame {
    aspect-ratio: 3 / 4;
    max-height: none;
  }
}

/* ---------------------------------
   이미지 어둡게 하는 전체 오버레이
---------------------------------- */


/* 각 슬라이드 */
.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}
.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 텍스트 오버레이 */
.caption {
  position: absolute;
  left: 6%;
  top: 12%;
  color: #fff;
  max-width: 90%;
  z-index: 2;
}

/* 제목 */
.caption h2 {
  font-size: clamp(24px, 4vw, 56px);
  line-height: 1.25;
  margin: 0 0 12px;
  font-weight: 900;
  color: #fff;
}

/* 본문 라인 */
.caption .line {
  margin: 10px 0 16px;
  opacity: 0.95;
  font-size: 20px;
  line-height: 1.4;
  color: #fff;
}

/* 📱 모바일에서 텍스트/여백 줄이기 */
@media (max-width: 600px) {
  .caption {
    left: 5%;
    top: 8%;
    right: 5%;
    max-width: 90%;
  }

  .caption h2 {
    font-size: 24px;
    line-height: 1.3;
    margin-bottom: 8px;
  }

  .caption .line {
    font-size: 14px;
    line-height: 1.5;
    margin: 8px 0 12px;
  }
}

/* ==========================
   좌우 내비게이션 버튼
   ========================== */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.25s ease;
  padding: 0;
}

/* 위치 조정 */
.nav.left  { left: 20px; }
.nav.right { right: 20px; }

/* 화살표 */
.nav::before {
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  border-top: 2.5px solid #333;
  border-left: 2.5px solid #333;
}

/* 왼쪽 버튼 */
.nav.left::before {
  transform: rotate(-45deg);
  margin-left: 11px;
}

/* 오른쪽 버튼 */
.nav.right::before {
  transform: rotate(135deg);
  margin-right: 5px;
}

/* hover 시 */
.nav:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.07);
}

/* 모바일 대응 */
@media (max-width: 600px) {
  .nav {
    bottom: 12px;
    top: auto;
    transform: none;
    width: 40px;
    height: 40px;
  }

  .nav.left  { left: 12px; }
  .nav.right { right: 12px; }
}

/* ==========================
   인디케이터 (아래 점)
   ========================== */
.dots {
  margin: 10px 0 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dots button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: 0;
  cursor: pointer;
}

.dots button.on {
  background: #333;
}


body, p, h1, h2, h3, h4, h5, h6 {
  white-space: pre-line;
}

</style>
