// src/store/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        me: null,
        loaded: false,
        favorites: [], // 서버에서 받아온 찜 목록
    }),

    actions: {
        /**
         * 세션 유저 1회 로드
         * - 이미 loaded면 다시 안 긁어옴
         * - 응답이 비어있거나 401이면 me = null
         */
        async fetchMeOnce() {
            if (this.loaded) return

            try {
                const res = await fetch('/api/auth/me', {
                    credentials: 'include',
                })

                if (!res.ok) {
                    // 로그인 안 돼있거나 401 등
                    this.me = null
                    this.favorites = []
                    this.loaded = true
                    return
                }

                // body가 비어있을 수도 있으므로 text()로 먼저 받는다
                const text = await res.text()

                if (!text) {
                    // 빈 바디면 로그인된 사용자 정보 없음으로 처리
                    this.me = null
                    this.favorites = []
                    this.loaded = true
                    return
                }

                // 여기까지 왔으면 text는 JSON string일 것
                this.me = JSON.parse(text)
                this.loaded = true

                // 로그인된 경우만 서버 찜 불러오기
                if (this.me) {
                    await this.loadFavorites()
                }
            } catch (err) {
                console.error('fetchMeOnce error:', err)
                this.me = null
                this.favorites = []
                this.loaded = true
            }
        },

        /**
         * 강제로 다시 현재 유저/즐겨찾기 갱신하고 싶을 때 쓸 수 있는 함수
         * (header에서 logout 뒤에 다시 불러올 때 같은 상황에서 유용)
         */
        async refetchMe() {
            this.loaded = false
            await this.fetchMeOnce()
        },

        /**
         * 로그아웃
         */
        async logout() {
            try {
                await fetch('/api/auth/logout', {
                    method: 'POST',
                    credentials: 'include',
                })
            } catch (err) {
                console.warn('logout request failed (ignored):', err)
            }

            this.me = null
            this.loaded = false
            this.favorites = []
        },

        /**
         * 서버에서 내 찜 목록 가져오기
         * - 로그인 안 된 상태면 그냥 빈 배열 세팅
         * - 서버 에러나 빈 응답이어도 터지지 않게 방어
         */
        async loadFavorites() {
            if (!this.me) {
                // 로그인 안 되어 있으면 서버 안 두드리고 비운다
                this.favorites = []
                return
            }

            try {
                const res = await fetch('http://localhost:8080/api/favorites/my', {
                    credentials: 'include',
                })

                if (!res.ok) {
                    console.warn('찜 목록 불러오기 실패 (status ' + res.status + ')')
                    this.favorites = []
                    return
                }

                const text = await res.text()

                if (!text) {
                    // 서버가 200인데 바디 없음 -> 그냥 빈 리스트 취급
                    this.favorites = []
                    return
                }

                const data = JSON.parse(text)
                // 예상: [{ travelName, travelSubtitle, travelImage, ... }]
                if (Array.isArray(data)) {
                    this.favorites = data
                } else {
                    this.favorites = []
                }
            } catch (err) {
                console.error('찜 목록 불러오기 에러:', err)
                this.favorites = []
            }
        },

        /**
         * 찜 토글
         * - 백엔드에 travelName 등 보내고
         * - 성공하면 favorites 다시 불러옴
         *
         * placeData 예시:
         * {
         *   name, subtitle, image,
         *   hours, fee, address, tip, desc, link
         * }
         */
        async toggleFavorite(placeData) {
            if (!this.me) {
                // 로그인 안 되어있는데 찜 누른 케이스라면
                // 여기서 바로 return만 할지, 아니면 UI에서 로그인 유도할지
                console.warn('로그인 필요: toggleFavorite skipped')
                return
            }

            try {
                const res = await fetch('http://localhost:8080/api/favorites/toggle', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        travelName: placeData.name,
                        travelSubtitle: placeData.subtitle,
                        travelImage: placeData.image,

                        hours: placeData.hours ?? null,
                        fee: placeData.fee ?? null,
                        address: placeData.address ?? null,
                        tip: placeData.tip ?? null,
                        desc: placeData.desc ?? null,
                        link: placeData.link ?? null,
                    }),
                })

                if (res.ok) {
                    await this.loadFavorites()
                } else {
                    console.warn('찜 토글 실패 (status ' + res.status + ')')
                }
            } catch (err) {
                console.error('찜 토글 에러:', err)
            }
        },


        isFavorite(item) {
            const nameToCheck = item?.name || item?.title
            if (!nameToCheck) return false
            return this.favorites.some(f => f.travelName === nameToCheck)
        },
    },
})
