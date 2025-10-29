<!-- src/components/FavoriteCardItem.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import i18n from '@/i18n'
import { useI18n } from 'vue-i18n'

// 부모에서 카드 데이터 내려줌
// 예: { title, subtitle, img, bottomDesc, content:{hours,fee,address,tip}, link }
const props = defineProps({
  card: {
    type: Object,
    required: true,
  }
})

// 이 카드가 현재 내가 찜한 상태인지
const isFav = ref(false)

// 1) 초기 로딩 시 내 찜 목록에서 이 카드가 이미 있는지 확인
onMounted(async () => {
  try {
    const res = await fetch('/api/favorites/my', {
      credentials: 'include',
    })
    if (!res.ok) return
    const list = await res.json()

    // DB에 있는 travelName이 현재 카드의 title과 같으면 '찜함'
    isFav.value = list.some(f => f.travelName === props.card.title)
  } catch (err) {
    console.error('check favorite fail:', err)
  }
})

// 2) 찜 토글
async function toggleFavorite() {
  // 서버로 보낼 payload (백엔드 FavoriteEntity 필드랑 1:1 매칭)
  const payload = {
    travelName: props.card.title,
    travelSubtitle: props.card.subtitle,
    travelImage: props.card.img,
    bottomDesc: props.card.bottomDesc,
    hours: props.card.content?.hours,
    fee: props.card.content?.fee,
    address: props.card.content?.address,
    tip: props.card.content?.tip,
    link: props.card.link,
  }

  try {
    const res = await fetch('/api/favorites/toggle', {
      method: 'POST',
      credentials: 'include', // 세션 쿠키 같이 보내기
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      // 서버에서 토글 성공 -> 프론트 표시도 토글
      isFav.value = !isFav.value
    } else {
      alert('찜 처리 중 오류가 발생했습니다.')
    }
  } catch (err) {
    console.error('toggleFavorite error:', err)
    alert('서버 오류로 찜할 수 없습니다.')
  }
}
</script>

<template>
  <div class="travel-card">
    <!-- 썸네일 -->
    <div class="thumb-wrap">
      <img :src="card.img" :alt="card.title" class="thumb" />
    </div>

    <!-- 텍스트 정보 -->
    <div class="info">
      <div class="tag">{{ card.tag }}</div>

      <h3 class="title">{{ card.title }}</h3>
      <div class="subtitle">{{ card.subtitle }}</div>

      <p class="desc">
        {{ card.bottomDesc }}
      </p>

      <ul class="meta">
        <li v-if="card.content?.hours">
          <strong>영업시간:</strong> {{ card.content.hours }}
        </li>
        <li v-if="card.content?.fee">
          <strong>입장료:</strong> {{ card.content.fee }}
        </li>
        <li v-if="card.content?.address">
          <strong>주소:</strong> {{ card.content.address }}
        </li>
      </ul>

      <div v-if="card.content?.tip" class="tip-box">
        💡 {{ card.content.tip }}
      </div>

      <!-- 버튼 영역 -->
      <div class="actions">
        <a
            class="more-btn"
            :href="card.link"
            target="_blank"
            rel="noopener noreferrer"
        >
          자세히 보기
        </a>

        <button class="fav-btn" @click="toggleFavorite">
          <span v-if="isFav">💗 찜함</span>
          <span v-else>🤍 찜하기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.travel-card {
  display: flex;
  flex-wrap: nowrap;
  border: 1px solid #e0ddd6;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0,0,0,.06);
  padding: 16px;
  gap: 16px;
  max-width: 620px;
  background: #fffdf8;
  font-family: system-ui, -apple-system, "Noto Sans KR", sans-serif;
}

.thumb-wrap {
  flex-shrink: 0;
}
.thumb {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,.1);
}

.info {
  flex: 1;
  min-width: 0;
  color: #3a332a;
}

.tag {
  display: inline-block;
  background: #7a3e2e;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.2;
  padding: 3px 6px;
  border-radius: 4px;
  margin-bottom: 6px;
}

.title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #2a2017;
}
.subtitle {
  font-size: 13px;
  font-weight: 500;
  color: #5a5146;
  margin-bottom: 8px;
}

.desc {
  font-size: 13px;
  line-height: 1.4;
  color: #4a4338;
  margin: 0 0 8px;
}

.meta {
  list-style: none;
  padding: 0;
  margin: 0 0 8px;
  font-size: 12px;
  line-height: 1.4;
  color: #4a4338;
}
.meta li {
  margin-bottom: 4px;
}
.meta strong {
  font-weight: 600;
  margin-right: 4px;
  color: #3a332a;
}

.tip-box {
  background: #fff8df;
  border: 1px solid #e6d29a;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.4;
  color: #8a5f00;
  padding: 6px 8px;
  margin-bottom: 12px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.more-btn {
  appearance: none;
  border: 0;
  background: #2f271f;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  border-radius: 6px;
  padding: 8px 10px;
  text-decoration: none;
  cursor: pointer;
}
.more-btn:active { opacity: .8; }

.fav-btn {
  appearance: none;
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
.fav-btn:active { opacity: .8; }

@media (max-width: 480px) {
  .travel-card {
    flex-direction: column;
    max-width: 100%;
  }

  .thumb {
    width: 100%;
    height: 180px;
    border-radius: 10px;
  }
}
</style>
