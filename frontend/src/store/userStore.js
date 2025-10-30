// src/store/userStore.js
import { defineStore } from 'pinia'

// ===== LocalStorage: 단일(언어 무관) 키 & 마이그레이션 =====
const LS_KEY_CANON = 'tabivito:favorites'     // 최종 통합 키 (JP/KR 공통)
const LS_KEY_KR    = 'tabivito:favorites:kr'  // 예전 키(있다면)
const LS_KEY_JP    = 'tabivito:favorites:jp'  // 예전 키(있다면)

/** 안전한 값 선택 도우미 */
const pick = (...candidates) => {
    for (const v of candidates) {
        if (v !== undefined && v !== null && v !== '') return v
    }
    return null
}

function uniqByKey(arr) {
    const map = new Map()
    for (const it of arr || []) {
        const key = it?.key || it?.id || it?.travelName
        if (!key) continue
        if (!map.has(key)) map.set(key, it)
    }
    return Array.from(map.values())
}

/** 다양한 입력 구조를 -> 표준 구조로 정규화 */
function toCanonical(p) {
    if (!p || typeof p !== 'object') return null

    // id/키 후보
    const id =
        p.id ??
        p.placeId ??
        p.slug ??
        // content 내부 id 가능성
        p.content?.id ??
        null

    // 이름 후보
    const travelName = pick(
        p.travelName, p.name, p.title, p.content?.name, p.content?.title
    )

    if (!travelName) return null

    // 원본 이미지 경로(상대/절대 구분 없이 비교용)
    const imgRaw = pick(p.imgRaw, p.imageRaw, p.rawImg, p.content?.imgRaw)

    // 이미지 후보
    const travelImage = pick(
        p.travelImage, p.image, p.imageUrl, p.img, p.thumbnail, p.cover,
        p.content?.image, p.content?.imageUrl, p.content?.img, p.content?.thumbnail, p.content?.cover
    )

    const travelSubtitle = pick(
        p.travelSubtitle, p.subtitle, p.subTitle, p.bottomDesc, p.content?.subtitle, p.content?.subTitle, p.content?.bottomDesc
    )

    // 상세 정보가 content 안에 들어있는 케이스 커버
    const hours   = pick(p.hours,   p.content?.hours)
    const fee     = pick(p.fee,     p.content?.fee)
    const address = pick(p.address, p.content?.address)
    const tip     = pick(p.tip,     p.content?.tip)
    const desc    = pick(p.desc,    p.content?.desc, p.description, p.content?.description)
    const link    = pick(p.link,    p.url, p.href, p.content?.link, p.content?.url, p.content?.href)

    // 매칭 안정성을 위해 city/region이 있으면 같이 보관
    const city    = pick(p.city, p.content?.city, p.region, p.content?.region)

    // 고유 매칭 키 생성: id가 있으면 그걸, 없으면 name(+city) 조합
    // 🔑 키 우선순위: id/slug → link → imgRaw → travelImage → name(+city)
        const key = pick(
           id,
           p.slug,
           link,
           imgRaw,
           travelImage,
           [travelName, city].filter(Boolean).join('::') || travelName
         )

    return {
        key,           // 내부 고유키 (로컬 중복 제거/매칭에 사용)
        id: id ?? null,
        travelName,
        travelSubtitle: travelSubtitle ?? null,
        travelImage: travelImage ?? null,
        imgRaw: imgRaw ?? null,
        hours:   hours ?? null,
        fee:     fee ?? null,
        address: address ?? null,
        tip:     tip ?? null,
        desc:    desc ?? null,
        link:    link ?? null,
        city:    city ?? null,
    }
}

function loadLocalFavorites() {
    try { return JSON.parse(localStorage.getItem(LS_KEY_CANON) || '[]') }
    catch { return [] }
}

function saveLocalFavorites(list) {
    localStorage.setItem(LS_KEY_CANON, JSON.stringify(list || []))
}

/** 앱 시작 시 1회: 과거 언어별 키를 통합 키로 병합 + 누락 필드 보정 */
function migrateFavoritesOnce() {
    try {
        const canon = JSON.parse(localStorage.getItem(LS_KEY_CANON) || '[]')
        const kr    = JSON.parse(localStorage.getItem(LS_KEY_KR)    || '[]')
        const jp    = JSON.parse(localStorage.getItem(LS_KEY_JP)    || '[]')

        // 과거 데이터도 toCanonical로 보정
        const normalizeList = (arr) =>
            (arr || [])
                .map(toCanonical)
                .filter(Boolean)

        const merged = uniqByKey([
            ...normalizeList(canon),
            ...normalizeList(kr),
            ...normalizeList(jp),
        ])

        localStorage.setItem(LS_KEY_CANON, JSON.stringify(merged))
        localStorage.removeItem(LS_KEY_KR)
        localStorage.removeItem(LS_KEY_JP)
    } catch {/* noop */}
}

export const useUserStore = defineStore('user', {
    state: () => ({
        me: null,          // 로그인 사용자 (있으면 세션 기반)
        loaded: false,     // me 로딩 여부
        favorites: [],     // [{ key, travelName, travelSubtitle, travelImage, hours, ... }]
    }),

    actions: {
        /** 앱 시작 시 한번만 호출 (main.js에서 이미 호출 중) */
        async fetchMeOnce() {
            if (this.loaded) return

            migrateFavoritesOnce()

            // 로그인 정보는 서버에서 가져오되, 찜은 항상 로컬 사용
            try {
                const res = await fetch('/api/auth/me', { credentials: 'include' })
                const text = res.ok ? await res.text() : ''
                this.me = text ? JSON.parse(text) : null
            } catch {
                this.me = null
            } finally {
                // 로컬 찜 로드
                this.favorites = loadLocalFavorites()
                this.loaded = true
            }
        },

        async refetchMe() {
            this.loaded = false
            await this.fetchMeOnce()
        },

        async logout() {
            try {
                await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
            } catch { /* ignore */ }
            this.me = null
            this.loaded = false
            this.favorites = loadLocalFavorites() // 로컬 유지
        },

        /** 로컬에서 찜 목록 가져오기 (언제든 호출 가능) */
        loadFavorites() {
            this.favorites = loadLocalFavorites()
        },

        /**
         * 찜 토글 (100% 로컬)
         * - 다양한 입력 구조를 toCanonical()로 표준화해서 저장
         * - 같은 장소 매칭은 key(id>name+city) 기준으로
         */
        toggleFavorite(placeData) {
            const canon = toCanonical(placeData)
            if (!canon) return

            const exists = this.favorites.some(f => f.key === canon.key)
            const next = exists
                ? this.favorites.filter(f => f.key !== canon.key)
                : uniqByKey([...this.favorites, canon])

            this.favorites = next
            saveLocalFavorites(next)
        },

        /** 카드/리스트에서 찜 여부 확인 */
        isFavorite(item) {
            const canon = toCanonical(item)
            if (!canon) return false
            return this.favorites.some(f => f.key === canon.key)
        },

        /** (선택) 전체 초기화 */
        clearFavorites() {
            this.favorites = []
            saveLocalFavorites([])
        },
    },
})
