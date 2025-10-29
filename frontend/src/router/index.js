// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Signup from '@/pages/Signup.vue'
import SelectTabi from '@/pages/SelectTabi.vue'
import SelectPlace from '@/pages/SelectPlace.vue'
import SelectMap from '@/pages/SelectMap.vue'
import MyPage from '@/pages/MyPage.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },

    // 한글 경로
    { path: '/로그인', component: Login },
    { path: '/회원가입', component: Signup },

    // 영어 경로
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },

    // 취향/여행 스타일 → 장소 추천 플로우
    { path: '/selectTabi', component: SelectTabi },
    { path: '/selectPlace', component: SelectPlace },
    { path: '/selectMap', component: SelectMap }, // 여기에서 실제 추천 결과(장소 카드들) 보여줄 거고 거기에 ❤️ 버튼 붙일거야

    // 내 찜 목록 / 내 정보
    { path: '/mypage', component: MyPage },

    // 잘못된 경로는 홈으로
    { path: '/:pathMatch(.*)*', redirect: '/home' },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
