export default {
    header: {
        login: "로그인",
        signup: "회원가입",
        mypage: "마이페이지",
        logout: "로그아웃",
        withdraw: "회원탈퇴",

        // (선택) 헤더에서 confirm / alert에 쓰는 텍스트가 있다면 여기도 둘 수 있어
        confirmDelete: "정말 탈퇴하시겠습니까?",
        deleted: "탈퇴되었습니다.",
        deleteFail: "탈퇴 실패",
    },

    hero: {
        line1: "일본의 숨겨진 명소를\n쉽게 찾아보세요",
        line2: "TABIVITO로 떠나는 나만의 여행",
        line3: "TABIVITO는 여행자들이 직접 다녀온\n좋은 장소를 공유하는 사이트입니다.",

        // HomeCarousel 좌우 버튼 접근성 라벨
        prev: "이전 슬라이드",
        next: "다음 슬라이드",
    },

    /**
     * 메인 지도 / 추천 패널 영역에서 쓰는 텍스트들
     * (SelectMap.vue / 지도 우측 패널)
     */
    main: {
        mapAlt: "일본 지도",
        recommendTitle: "추천 플랜",
        cityLabel: "도시",
        styleLabel: "취향",
        mapPick: "지도 선택",

        hintHTML:
            "지도의 핀을 누르면 해당 도시의 모든 추천이 나타나요.\n(취향과 상관 없이 전부)",

        // 카드 정보 라벨
        hours: "영업시간",
        fee: "입장료",
        address: "주소",
        more: "자세히 보기",

        fav: "찜하기",
        favored: "찜함",

        city: {
            tokyo: "도쿄",
            osaka: "오사카",
            nagoya: "나고야",
            fukuoka: "후쿠오카",
            sapporo: "삿포로",
        },
    },

    /**
     * 홈 하단 추천 카드 리스트(HomeTravelList.vue)
     */
    travelList: {
        sectionTitle: "추천 명소",
        detailLink: "자세히 보기",
        favAdd: "🤍 찜하기",
        favDone: "💖 찜됨",
        hours: "영업시간:",
        fee: "입장료:",
        address: "주소:",
    },

    /**
     * TripFlowSection.vue (여행 방식 소개)
     */
    how: {
        headline: "장소를 한눈에,\n그리고 한 번에!",
        lead: "다른 곳에서는 할 수 없었던 일이 타비비토에서는 가능합니다.\n여행 전이든 여행 중이든 내가 계획한 일정을 간편하게 수정하고 꺼내보세요.",

        step1Num: "1",
        step1Text: "마음에 드는 도시",
        step2Num: "2",
        step2Text: "당신이 원하는 여행장소",

        cta: "나만의 장소 찾기",
        planeIcon: "✈",

        // 카드 예시 (TripFlowSection 오른쪽 카드들)
        card1: {
            title: "구로몬 시장",
            desc: "다양한 먹거리와 활기가 있는 부엌 시장",
        },
        card2: {
            title: "나카자키쵸",
            desc: "사진 찍기 좋은 감성 동네",
        },
        card3: {
            title: "텐진바시스지 상점가",
            desc: "먹거리 가득한 아케이드형 상점 거리",
        },
    },

    selectTabi: {
        backToHome: "홈 화면으로",
        question: "이번엔 어디로\n도망가볼까?",
        desc: "맘 끌리는 도시를 한 곳 골라주세요.",
        nextBtn: "다음",
        alertPickCity: "어디로 갈지 먼저 골라주세요!",
    },

    selectPlace: {
        backToFirst: "첫 번째 질문",
        question: "어떤 여행이 좋아요?",
        desc: "지금 느낌에 가장 가까운 걸 골라주세요.",
        chosenCity: "선택한 도시:",
        nextBtn: "선택 완료",
        alertPickStyle: "어떤 스타일의 여행을 원하는지 골라주세요!",

        opt: {
            cafe: {
                label: "☕   카페·디저트 탐방",
                sub: "NS 감성, 로컬 카페 중심",
            },
            walk: {
                label: "🚶‍♀️   조용한 산책 / 소도시 탐방",
                sub: "일본 감성 그대로 즐기기",
            },
            nature: {
                label: "🌿   자연·공원에서 힐링",
                sub: "무료 / 저가 명소 위주 추천",
            },
            photo: {
                label: "📷   사진감성 / 야경 스폿",
                sub: "포토존, 전망대 중심",
            },
            food: {
                label: "🍜   가성비 맛집 / 현지 밥집",
                sub: "1000엔대 로컬 식당",
            },
            shopping: {
                label: "🛍️   소소한 쇼핑 / 기념품",
                sub: "빈티지, 문구점, 레코드샵",
            },
            culture: {
                label: "🎭   문화·예술 산책",
                sub: "전시, 북카페, 공방 체험",
            },
            trip: {
                label: "🚉   근교 1일 여행",
                sub: "도쿄→가마쿠라 / 오사카→고베 등",
            },
            spa: {
                label: "♨️   온천에서 힐링하고 싶어요",
                sub: "지역 온천, 당일 입욕 정보",
            },
            festival: {
                label: "🎆   축제·이벤트를 즐기고 싶어요",
                sub: "벚꽃 / 불꽃 / 눈축제 등 시즌 한정",
            },
        },
    },


    mypage: {
        title: "내가 찜한 곳",
        empty: "아직 찜한 곳이 없어요 🥲",
        tag: "내 찜 장소",
        unfav: "찜 해제",
    },

    login: {
        title: "로그인",
        usernamePH: "아이디",
        passwordPH: "비밀번호",
        submit: "로그인",
        invalid: "아이디 또는 비밀번호가 올바르지 않습니다.",
        fail: "로그인 실패",
    },

    signup: {
        title: "회원가입",
        username: {
            ph: "아이디 (6~20자, 영문 + 숫자 필수)",
            checking: "확인 중…",
            checkBtn: "아이디 중복 체크",
            ruleHint: "아이디 형식이 올바르지 않습니다. (6~20자, 영문 + 숫자 필수)",
            ruleInvalid: "아이디 형식이 올바르지 않습니다. (6~20자, 영문 + 숫자 필수)",
            needCheck: "아이디 중복 체크를 해주세요.",
            ok: "아이디 중복 체크가 완료되었습니다.",
            dup: "이미 사용 중인 아이디입니다.",
            checkFail: "중복 확인 실패(네트워크 오류)",
        },
        namePH: "이름",
        emailPH: "이메일(선택)",
        passwordPH: "비밀번호",
        confirmPH: "비밀번호 확인",
        submit: "가입",
        successAlert: "회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.",
        failMsg: "실패: {reason}",
        networkErr: "네트워크 오류",
        err: {
            usernameRule: "아이디 형식이 올바르지 않습니다. (6~20자, 영문 + 숫자 필수)",
            nameRequired: "이름을 입력하세요",
            emailInvalid: "이메일 형식이 올바르지 않아요",
            passwordShort: "비밀번호는 4자 이상",
            confirmMismatch: "비밀번호 확인이 일치하지 않아요",
        },
    },




    footer: {
        rights: "© TABIVITO. All rights reserved.",
        address: "서울특별시 영등포구 영등포동5가 32번지 4층 5층",
        contactLabel: "고객센터:",
        emailLabel: "이메일:",
    },
}

