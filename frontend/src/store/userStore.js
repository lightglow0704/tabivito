// src/store/userStore.js
import { defineStore } from 'pinia'

const LS_BASE   = 'tabivito:favorites'
const LS_OLD_KR = 'tabivito:favorites:kr'
const LS_OLD_JP = 'tabivito:favorites:jp'

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

function toCanonical(p) {
    if (!p || typeof p !== 'object') return null

    const id = pick(p.id, p.placeId, p.slug, p.content?.id)
    const travelName = pick(p.travelName, p.name, p.title, p.content?.name, p.content?.title)
    if (!travelName) return null

    const imgRaw = pick(p.imgRaw, p.imageRaw, p.rawImg, p.content?.imgRaw)
    const travelImage = pick(
        p.travelImage, p.image, p.imageUrl, p.img, p.thumbnail, p.cover,
        p.content?.image, p.content?.imageUrl, p.content?.img, p.content?.thumbnail, p.content?.cover
    )
    const travelSubtitle = pick(
        p.travelSubtitle, p.subtitle, p.subTitle, p.bottomDesc,
        p.content?.subtitle, p.content?.subTitle, p.content?.bottomDesc
    )
    const hours   = pick(p.hours,   p.content?.hours)
    const fee     = pick(p.fee,     p.content?.fee)
    const address = pick(p.address, p.content?.address)
    const tip     = pick(p.tip,     p.content?.tip)
    const desc    = pick(p.desc,    p.content?.desc, p.description, p.content?.description)
    const link    = pick(p.link,    p.url, p.href, p.content?.link, p.content?.url, p.content?.href)
    const city    = pick(p.city,    p.content?.city, p.region, p.content?.region)

    const key = pick(
        id, p.slug, link, imgRaw, travelImage,
        [travelName, city].filter(Boolean).join('::') || travelName
    )

    return {
        key,
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

const keyFor = (username) => `${LS_BASE}:${username ?? 'guest'}`

function readFromLS(key) {
    try {
        return JSON.parse(localStorage.getItem(key) || '[]')
    } catch {
        return []
    }
}
function writeToLS(key, list) {
    localStorage.setItem(key, JSON.stringify(list || []))
}

/** (선택) 과거 언어별 키들을 guest 키로 병합. 게스트 키는 화면에선 읽지 않음 */
function migrateOldKeysToGuest() {
    try {
        const guestKey   = keyFor(null)
        const oldKR      = readFromLS(LS_OLD_KR)
        const oldJP      = readFromLS(LS_OLD_JP)
        const oldGlobal  = readFromLS(LS_BASE)
        const curGuest   = readFromLS(guestKey)
        const normalize  = (arr) => (arr || []).map(toCanonical).filter(Boolean)
        const merged     = uniqByKey([
            ...normalize(curGuest),
            ...normalize(oldGlobal),
            ...normalize(oldKR),
            ...normalize(oldJP),
        ])
        writeToLS(guestKey, merged)
        localStorage.removeItem(LS_OLD_KR)
        localStorage.removeItem(LS_OLD_JP)
    } catch { /* noop */ }
}

export const useUserStore = defineStore('user', {
    state: () => ({
        me: null,       // { username, ... } | null
        loaded: false,
        favorites: [],  // 현재 로그인 사용자에 대한 즐겨찾기만 보관
    }),

    actions: {
        async fetchMeOnce() {
            if (this.loaded) return
            migrateOldKeysToGuest()
            try {
                const res  = await fetch('/api/auth/me', { credentials: 'include' })
                const text = res.ok ? await res.text() : ''
                this.me    = text ? JSON.parse(text) : null
            } catch {
                this.me = null
            } finally {
                // ✅ 비로그인: 아무 것도 읽지 않음
                this.favorites = this._loadForCurrentUser()
                this.loaded = true
            }
        },

        async refetchMe() {
            this.loaded = false
            await this.fetchMeOnce()
        },

        /** ✅ 로그인 상태일 때만 로드. 비로그인: [] */
        _loadForCurrentUser() {
            if (!this.me || !this.me.username) return []
            return readFromLS(keyFor(this.me.username))
        },

        _saveForCurrentUser(list) {
            if (!this.me || !this.me.username) return
            writeToLS(keyFor(this.me.username), list)
            this.favorites = list
        },

        /** ✅ 외부에서 호출해도 비로그인은 빈 배열 유지 */
        loadFavorites() {
            this.favorites = this._loadForCurrentUser()
        },

        /** 로그아웃: 화면·상태 초기화(게스트 즐겨찾기는 화면에서 사용 안 함) */
        async logout() {
            try {
                await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
            } catch { /* ignore */ }
            this.me = null
            this.favorites = []   // 화면에선 항상 빈 배열
            this.loaded = true
        },

        /** 회원탈퇴: 해당 유저 키 삭제 후 상태 초기화 */
        onAccountDeleted() {
            const username = this.me?.username ?? null
            if (username) localStorage.removeItem(keyFor(username))
            this.me = null
            this.favorites = []
            this.loaded = true
        },

        /** 즐겨찾기 토글: 비로그인 차단 */
        toggleFavorite(placeData) {
            if (!this.me) return 'NEED_LOGIN'
            const canon = toCanonical(placeData)
            if (!canon) return
            const exists = this.favorites.some(f => f.key === canon.key)
            const next = exists
                ? this.favorites.filter(f => f.key !== canon.key)
                : uniqByKey([...this.favorites, canon])
            this._saveForCurrentUser(next)
            return 'OK'
        },

        isFavorite(item) {
            const c = toCanonical(item)
            if (!c) return false
            return this.favorites.some(f => f.key === c.key)
        },

        clearFavorites() {
            this._saveForCurrentUser([])
        },
    },
})
