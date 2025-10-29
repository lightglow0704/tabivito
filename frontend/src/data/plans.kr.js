export const krPlans = {
    /* =========================================================
       🗼 TOKYO — 도쿄 여행 테마별 플랜
    ========================================================= */
    tokyo: {
        /* ---------------------------------------------------------
           ☕ CAFE · 디저트 탐방
           NS 감성, 로컬 카페 중심
        --------------------------------------------------------- */
        cafe: [
            {
                tag: '도쿄 카페·디저트',              // 카드 상단 뱃지
                title: '야나카 긴자',          // 큰 제목
                subtitle: '다이토구',          // 지역명(소제목)
                img: 'src/assets/tokyo/cafe/yanaka-ginza.jpg', // 썸네일

                content: {
                    hours: '점포별 상이 (대체로 10:00~18:00)', // 영업시간
                    fee: '무료',                               // 입장료
                    address: '3-13-1 Yanaka, Taito City, Tokyo 110-0001', // 주소
                    tip: '고양이 모양 크로켓 ‘네코메 크로켓’이 유명하며, 골목 끝 석양이 포토 명소로 인기가 높음.', // 팁
                },

                bottomDesc:
                    '전통 간식가게, 고양이 소품점, 레트로 상점이 모인 도쿄의 옛 정취 가득한 상점가 거리.',

                link: 'https://www.gotokyo.org/kr/spot/170/index.html', // 자세히 보기 눌렀을 때 열릴 곳
            },
        ],

        /* ---------------------------------------------------------
           🚶‍♀️ 조용한 산책 / 소도시 탐방
           일본 감성 그대로 즐기기
        --------------------------------------------------------- */
        walk: [

        ],

        /* ---------------------------------------------------------
           🌿 자연 · 공원에서 힐링
           무료 / 저가 명소 위주 추천
        --------------------------------------------------------- */
        nature: [
            {
                tag: '도쿄 자연·공원',
                title: '신주쿠 중앙 공원',
                subtitle: '신주쿠 구',
                img: 'src/assets/tokyo/nature/shinjuku-park.jpg',

                content: {
                    hours: '24시간',
                    fee: '무료 입장',
                    address: '2 Chome-11 Nishishinjuku, Shinjuku City, Tokyo 160-0023',
                    tip: '신주쿠 공원은 입장료 500엔인 반면 중앙공원은 무료 입장이 가능함.',
                },

                bottomDesc:
                    '도쿄 신주쿠 서쪽 고층빌딩 숲 속에 자리한 넓고 조용한 도시 속 오아시스 공원.',

                link: 'https://www.gotokyo.org/kr/spot/75/index.html',
            },
            {
                tag: '도쿄 자연·공원',
                title: '타카오산',
                subtitle: '하치오지 시',
                img: 'src/assets/tokyo/nature/takao-mountain.jpg',

                content: {
                    hours: '07:00 ~ 18:30',
                    fee: '무료 입장 (케이블 이용료 500엔)',
                    address: '2205 Takaomachi, Hachioji, Tokyo 193-0844',
                    tip: '등산 후 주변에 소바 집, 온천 등 즐길 거리 즐비.',
                },

                bottomDesc: '세계에서 방문객이 가장 많은 산 중 하나로, 사계절 내내 풍경이 아름다운 도쿄 근교 명소.',

                link: 'https://www.gotokyo.org/kr/spot/38/index.html',
            },
        ],

        /* ---------------------------------------------------------
           📸 사진감성 / 야경 스폿
           포토존, 전망대 중심
        --------------------------------------------------------- */
        photo: [
            {
                tag: '도쿄 사진·야경',
                title: '도쿄 도청 전망대',
                subtitle: '신주쿠구',
                img: 'src/assets/tokyo/photo/tokyo-gov-observatory.jpg',

                content: {
                    hours: '09:30 ~ 22:00',
                    fee: '입장 무료',
                    address: '2 Chome-8-1 Nishishinjuku, Shinjuku City, Tokyo 163-8001',
                    tip: '노을질 때 방문하면 인생사진 획득!',
                },

                bottomDesc: '무료로 도쿄 스카이라인을 감상할 수 있으며, 날씨가 좋을 땐 후지산까지 보이는 전망 명소.',
                link: 'https://www.gotokyo.org/kr/spot/74/index.html', // 구글 지도 공식 링크
            },
            {
                tag: '도쿄 사진·야경',
                title: '신주쿠 골든가이',
                subtitle: '신주쿠구',
                img: 'src/assets/tokyo/photo/golden-gai.jpg',
                content: {
                    hours: '24시간 영업 (가게별 시간 상이)',
                    fee: '무료 입장',
                    address: 'Kabukicho, Shinjuku City, Tokyo 160-0021',
                    tip: '밤에 감성 사진찍기 좋으나 치안은 안좋기로 유명하니 조심하기.',
                },
                bottomDesc: '수십 개의 미니 바들이 옹기종기 자리한 레트로한 밤거리로, 친구나 둘이 가볍게 한 잔하기 좋은 감성 공간.',
                link: 'https://www.gotokyo.org/kr/spot/62/index.html',
            },
            {
                tag: '도쿄 사진·야경',
                title: '시부야 스카이',
                subtitle: '시부야구',
                img: 'src/assets/tokyo/photo/shibuya-sky.jpg',
                content: {
                    hours: '10:00 ~ 22:30',
                    fee: '2,500엔',
                    address: '2 Chome-24-12 Shibuya Scramble Square, 14F・45F, Shibuya City, Tokyo 150-6145',
                    tip: '노을 시간에 맞춰서 가면 베스트, 사전예약 후 방문 필수!',
                },
                bottomDesc: '시부야 스크램블 스퀘어 꼭대기에 위치한 전망대로, 도쿄 전경과 석양·야경을 한눈에 감상할 수 있는 인기 포토 스팟.',
                link: 'https://www.gotokyo.org/kr/spot/1749/index.html',
            }
        ],

        /* ---------------------------------------------------------
           🍱 가성비 맛집 / 현지 밥집
           1000엔대 로컬 식당
        --------------------------------------------------------- */
        food: [
            {
                tag: '도쿄 맛집',
                title: '모토무라 규카츠 신주쿠 본점',
                subtitle: '신주쿠구',
                img: 'src/assets/tokyo/food/motomura-gyukatsu.jpg',
                content: {
                    hours: '11:00 ~ 21:00',
                    fee: '약 2000엔',
                    address: '1 Chome-25-3 Kabukicho, Shinjuku City, Tokyo 160-0021',
                    tip: '반찬 안먹는다면 꼭 말해서 300엔 절약!',
                },
                bottomDesc: '일본 여행 시 꼭 먹어야 하는 음식으로 꼽히는 규카츠의 대표 맛집.',
                link: 'https://www.gyukatsu-motomura.com/shop/shinjuku-minamiguchi',
            },
            {
                tag: '도쿄 맛집',
                title: '라멘 지로 카부키초점',
                subtitle: '신주쿠구',
                img: 'src/assets/tokyo/food/ramen-jiro.jpg',
                content: {
                    hours: '11:30 ~ 02:30 (매주 수요일 휴무)',
                    fee: '약 1000엔',
                    address: '2 Chome-37-5 Kabukicho, Shinjuku City, Tokyo 160-0021',
                    tip: '음식 빨리 먹어야 하고 남기면 혼날 수 있으니 주의!',
                },
                bottomDesc: '두껍고 거친 면과 진한 간장 돼지뼈 국물, 산처럼 쌓인 숙주로 유명한 하드코어 라멘집.',
                link: 'https://www.ramen-jiro.com/kabujiro.html',
            },
            {
                tag: '도쿄 맛집',
                title: '육화카이 (六花界)',
                subtitle: '치요다구',
                img: 'src/assets/tokyo/food/rokkakai.jpg',
                content: {
                    hours: '17:00 ~ 23:00',
                    fee: '2000엔 ~ 6000엔',
                    address: '2 Chome-13-24 Kajicho, Chiyoda City, Tokyo',
                    tip: '일본어 회화 가능자 강추! 오로지 400엔 니혼슈만 취급하고 있음!',
                },
                bottomDesc: '2000엔, 3000엔대의 가격으로 야키니쿠를 즐길 수 있는 가성비 로컬 고깃집. 현지인들과 어울리며 한잔하기 좋은 공간.',
                link: 'https://tabelog.com/kr/tokyo/A1310/A131002/13094625/',
            }
        ],

        /* ---------------------------------------------------------
           🛍️ 소소한 쇼핑 / 기념품
           빈티지, 문구점, 레코드샵
        --------------------------------------------------------- */
        shopping: [
            {
                tag: '도쿄 쇼핑·기념품',
                title: '가부키초 타워',
                subtitle: '신주쿠구',
                img: 'src/assets/tokyo/shopping/kabukicho-tower.jpg',
                content: {
                    hours: '시설별 상이 (일부 24시간 운영)',
                    fee: '입장 무료 (시설별 요금 상이)',
                    address: '1 Chome-29-1 Kabukicho, Shinjuku City, Tokyo 160-0021, Japan',
                    tip: '2층 “푸드코트 거리”에는 일본 전역의 이자카야들이 모여 있으며, 저녁 무렵 방문 시 야경과 함께 즐기기 좋음.',
                },
                bottomDesc: '2023년에 개관한 신주쿠의 랜드마크 타워로, 현지인과 관광객 모두 즐겨 찾는 복합문화공간.',
                link: 'https://www.gotokyo.org/kr/spot/1855/index.html',
            },
            {
                tag: '도쿄 쇼핑·기념품',
                title: '하라주쿠 쇼핑거리',
                subtitle: '시부야구 진구마에',
                img: 'src/assets/tokyo/shopping/harajuku-street.jpg',
                content: {
                    hours: '점포별 상이 (대부분 11:00~20:00)',
                    fee: '무료',
                    address: '1 Chome-17 Jingumae, Shibuya City, Tokyo 150-0001, Japan',
                    tip: '베이프, 화이트 마운테니어링, 노스페이스 스탠다드 등 하이엔드 스트릿 브랜드와 빈티지숍, 공존. 카페·디저트숍도 많아 산책 겸 쇼핑 코스로 인기.',
                },
                bottomDesc: '10~30대 젊은층을 중심으로 최신 스트릿 브랜드와 감각적 편집숍이 모여 있는 패션 거리.',
                link: 'https://www.gotokyo.org/kr/story/walks-and-tours/harajuku/index.html',
            }
        ],

        /* ---------------------------------------------------------
           🎨 문화 · 예술 산책
           전시, 북카페, 공방 체험
        --------------------------------------------------------- */
        culture: [

        ],

        /* ---------------------------------------------------------
           🚆 근교 1일 여행
           도쿄→가마쿠라 / 오사카→교토 등
        --------------------------------------------------------- */
        trip: [
            {
                tag: '도쿄 근교 1일 여행',
                title: '가와고에 (川越)',
                subtitle: '사이타마현 가와고에시',
                img: 'src/assets/tokyo/trip/kawagoe.jpg',
                content: {
                    hours: '상점 대부분 10:00~18:00',
                    fee: '무료 (일부 박물관·사찰 유료)',
                    address: 'Kawagoe-shi, Saitama, Japan',
                    tip: '‘종탑(時の鐘)’ 앞 거리에서 전통 건물과 유카타 차림 사진 찍기 인기. 고구마(さつまいも) 간식이 지역 명물.',
                },
                bottomDesc: '에도시대 풍의 거리와 전통 간식, 상점이 어우러진 “작은 에도”라 불리는 고풍스러운 소도시.',
                link: 'https://www.gotokyo.org/kr/destinations/beyond-tokyo/kawagoe.html',
            }

        ],

        /* ---------------------------------------------------------
           ♨️ 온천에서 힐링하고 싶어요
           지역 온천, 당일 입욕 정보
        --------------------------------------------------------- */
        spa: [
            {
                tag: '도쿄 온천',
                title: '도시마엔 니와노유',
                subtitle: '네리마구',
                img: 'src/assets/tokyo/spa/niwano-yu.jpg',
                content: {
                    hours: '10:00~23:00 (입장 마감 22:00)',
                    fee: '성인 2,500엔 (주말·공휴일 2,750엔)',
                    address: 'Kouyama, Nerima-ku, Tokyo 176-0022',
                    tip: '조용한 분위기를 위해 13세 미만 입장 불가. 오후 시간대 방문 시 온천과 사우나 모두 여유롭게 이용 가능.',
                },
                bottomDesc: '천연 온천수와 일본식 정원을 함께 즐길 수 있는 도심 속 힐링 스파. 실내·노천탕, 사우나, 완비.',
                link: 'https://www.gotokyo.org/kr/spot/590/index.html',
            }
        ],

        /* ---------------------------------------------------------
           🎆 축제 · 이벤트 즐기기
           벚꽃 / 불꽃 / 눈축제 등 시즌 한정
        --------------------------------------------------------- */
        festival: [
            {
                tag: '도쿄 축제·이벤트',
                title: '스미다강 불꽃놀이',
                subtitle: '스미다구',
                img: 'src/assets/tokyo/festival/sumida-fireworks.jpg',
                content: {
                    hours: '19:00 ~ 20:30',
                    fee: '무료 (무료 관람 구역 다수)',
                    address: 'Tokyo, Taito City, along the Sumida River',
                    tip: '시작 전 강변에 자리를 잡는 것이 관람의 관건. 유카타 차림으로 축제 분위기 즐기기 최적.',
                },
                bottomDesc: '매년 7월 마지막 토요일, 약 2만 발의 불꽃이 도쿄 하늘을 수놓는 대표 여름 축제.',
                link: 'https://www.japan.travel/ko/spot/385/',
            }

        ],
    }, // 👈 tokyo 닫음

    /* =========================================================
       🐙 OSAKA — 오사카 여행 테마별 플랜
    ========================================================= */
    osaka: {
        /* ---------------------------------------------------------
           ☕ CAFE · 디저트 탐방
           NS 감성, 로컬 카페 중심
        --------------------------------------------------------- */
        cafe: [
            {
                tag: '오사카 카페·디저트',
                title: '나카자키초',
                subtitle: '오사카 기타구',
                img: 'src/assets/osaka/cafe/nakazakicho.jpg',
                content: {
                    hours: '점포별 상이 (대체로 10:00~19:00)',
                    fee: '무료',
                    address: 'Nakazaki, Kita Ward, Osaka',
                    tip: '골목길 따라 포토존·로컬 카페 다수. 주말엔 플리마켓도 열림.',
                },
                bottomDesc: '오래된 가옥을 개조한 카페·빈티지숍이 많은 감성 동네로, 조용한 산책 코스로 인기.',
                link: 'https://namu.wiki/w/%ED%82%A4%ED%83%80%EA%B5%AC(%EC%98%A4%EC%82%AC%EC%B9%B4%EC%8B%9C)',
            }
        ],

        /* ---------------------------------------------------------
           🚶‍♀️ 조용한 산책 / 소도시 탐방
           일본 감성 그대로 즐기기
        --------------------------------------------------------- */
        walk: [

        ],

        /* ---------------------------------------------------------
           🌿 자연 · 공원에서 힐링
           무료 / 저가 명소 위주 추천
        --------------------------------------------------------- */
        nature: [
            {
                tag: '오사카 자연',
                title: '나가이 자연·공원',
                subtitle: '오사카 아베노구',
                img: 'src/assets/osaka/nature/nagai-park.jpg',
                content: {
                    hours: '09:00~17:00',
                    fee: '무료',
                    address: '1-23 Nagai Park, Abeno-ku, Osaka',
                    tip: '봄엔 벚꽃, 가을엔 단풍 산책로로 현지 주민에게 사랑받는 명소.',
                },
                bottomDesc: '도심 속 대형 공원으로 벚꽃 시즌과 저녁 산책 코스로 인기.',
                link: 'https://nagaipark.com/',
            }

        ],

        /* ---------------------------------------------------------
           📸 사진감성 / 야경 스폿
           포토존, 전망대 중심
        --------------------------------------------------------- */
        photo: [
            {
                tag: '오사카 사진·야경',
                title: '아베노 하루카스',
                subtitle: '오사카 덴노지구',
                img: 'src/assets/osaka/photo/abenoharukas.jpg',
                content: {
                    hours: '10:00~20:00',
                    fee: '입장료 1,500엔',
                    address: '1-1-43 Abenosuji, Abeno-ku, Osaka',
                    tip: '하루카스 300 전망대에서 해질녘 뷰 추천.',
                },
                bottomDesc: '백화점·레스토랑·전망대가 결합된 대형 복합시설로 현지 쇼핑객과 관광객이 모두 즐겨 찾는 명소.',
                link: 'https://namu.wiki/w/%EC%95%84%EB%B2%A0%EB%85%B8%ED%95%98%EB%A3%A8%EC%B9%B4%EC%8A%A4',
            }
        ],

        /* ---------------------------------------------------------
           🍱 가성비 맛집 / 현지 밥집
           1000엔대 로컬 식당
        --------------------------------------------------------- */
        food: [
            {
                tag: '오사카 맛집',
                title: '신세카이',
                subtitle: '오사카 나니와구',
                img: 'src/assets/osaka/food/shinsekai.jpg',
                content: {
                    hours: '상점별 상이',
                    fee: '무료',
                    address: '1 Chome-18-6 Ebisuhigashi, Naniwa-ku, Osaka',
                    tip: '저녁 시간대 현지인들로 북적이며, 통천각 야경 추천.',
                },
                bottomDesc: '오사카 옛 정취가 남은 거리로, 쿠시카츠와 저렴한 이자카야가 즐비한 지역.',
                link: 'https://namu.wiki/w/%EC%8B%A0%EC%84%B8%EC%B9%B4%EC%9D%B4',
            },
            {
                tag: '오사카 맛집',
                title: '이나노 (고기우동)',
                subtitle: '오사카시 주오구',
                img: 'src/assets/osaka/food/inano.jpg',
                content: {
                    hours: '월·화·수·일 11:00~20:00 / 금·토 11:00~22:00 (목요일 휴무)',
                    fee: '고기우동 (900엔)',
                    address: '〒542-0074 오사카부 오사카시 주오구 센니치마에 1-8-2',
                    tip: '현지인들이 즐겨 찾는 우동집으로, 영어 메뉴 없음.',
                },
                bottomDesc: '고급 육수로 만든 명물 고기우동이 인기인 우동 전문점.',
                link: 'https://tabelog.com/kr/hyogo/A2803/A280304/28061253/',
            }

        ],

        /* ---------------------------------------------------------
           🛍️ 소소한 쇼핑 / 기념품
           빈티지, 문구점, 레코드샵
        --------------------------------------------------------- */
        shopping: [
            {
                tag: '오사카 쇼핑·기념품',
                title: '아메리카무라',
                subtitle: '오사카시 주오구',
                img: 'src/assets/osaka/shopping/americamura.jpg',
                content: {
                    hours: '11:00~20:00 (점포별 상이)',
                    fee: '무료',
                    address: 'Nishishinsaibashi, Chuo Ward, Osaka',
                    tip: '시부야 하라주쿠 분위기의 오사카 버전. 카페 “비글” 근처 포토존 인기.',
                },
                bottomDesc:
                    '독특한 패션숍, 그래피티, 스트리트 문화가 공존하는 젊은이들의 거리.',
                link: 'https://osaka-info.jp/spot/america-mura-american-village/',
            },
            {
                tag: '오사카 쇼핑·기념품',
                title: '나카츠',
                subtitle: '오사카시 기타구',
                img: 'src/assets/osaka/shopping/nakatsu.jpg',
                content: {
                    hours: '점포별 상이',
                    fee: '무료',
                    address: 'Nakatsu, Kita-ku, Osaka',
                    tip: '여행 중 하루 쉬어가기 좋은 감성 동네. 혼자 카페 탐방에도 추천.',
                },
                bottomDesc:
                    '조용한 주택가에 예쁜 카페·소품샵·공방이 모인 힐링 동네.',
                link: 'https://namu.wiki/w/%EB%82%98%EC%B9%B4%EC%B8%A0%EC%8B%9C',
            }
        ],

        /* ---------------------------------------------------------
           🎨 문화 · 예술 산책
           전시, 북카페, 공방 체험
        --------------------------------------------------------- */
        culture: [

        ],

        /* ---------------------------------------------------------
           🚆 근교 1일 여행
           도쿄→가마쿠라 / 오사카→교토 등
        --------------------------------------------------------- */
        trip: [
            {
                tag: '오사카 근교 1일 여행',
                title: '이코마산상 유원지',
                subtitle: '나라현 이코마시',
                img: 'src/assets/osaka/trip/ikoma_sanjo.jpg',
                content: {
                    hours: '10:00~17:00 (계절·요일별 변동)',
                    fee: '입장 무료 (놀이기구별 요금 있음)',
                    address: '2312-1 Nabatacho, Ikoma, Nara Prefecture',
                    tip: '케이블카 타고 오르는 길이 이색적이며, 해질녘 전망대 야경은 꼭 관람 추천.',
                },
                bottomDesc:
                    '100년 넘은 전통 유원지로, 케이블카를 타고 올라가면 오사카 전경이 한눈에 보이는 가족형 놀이공원.',
                link: 'https://www.ikomasanjou.com/', // 실제 위치 구글 지도 링크
            }

        ],

        /* ---------------------------------------------------------
           ♨️ 온천에서 힐링하고 싶어요
           지역 온천, 당일 입욕 정보
        --------------------------------------------------------- */
        spa: [
            {
                tag: '오사카 온천',
                title: '스파 스미노에',
                subtitle: '오사카 스미노에구',
                img: 'src/assets/osaka/spa/spa_suminoe.jpg',
                content: {
                    hours: '10:00~24:00',
                    fee: '성인 750엔 / 주말 850엔',
                    address: '1-1-10 Suminoe, Suminoe-ku, Osaka',
                    tip: '외국인 거의 없고 조용한 현지 스파. 시내에서 20분 거리로 접근성 좋고, 밤 시간대 추천.',
                },
                bottomDesc:
                    '현지 주민들이 즐겨 찾는 천연온천으로, 노천탕·사우나·식당이 결합된 실속형 힐링 스파.',
                link: 'https://spasuminoe.jp/',
            },
            {
                tag: '오사카 온천',
                title: '아리마온천',
                subtitle: '효고현 고베시 기타구',
                img: 'src/assets/osaka/spa/arima_onsen.jpg',
                content: {
                    hours: '8:00~22:00 (입장 마감 21:30)',
                    fee: '입욕료 약 800엔',
                    address: '292-2 Arimacho, Kita Ward, Kobe, Hyogo 651-1401, Japan',
                    tip: '산 속 마을 분위기와 도보 탐방 가능. 금천·은천 두 종류의 온천을 모두 즐길 수 있어 체감 차이도 흥미로움.',
                },
                bottomDesc:
                    '일본 3대 고온천지 중 하나로, 금천(金泉)과 은천(銀泉)을 동시에 즐길 수 있는 전통 온천 마을.',
                link: 'https://namu.wiki/w/%EC%95%84%EB%A6%AC%EB%A7%88%EC%98%A8%EC%B2%9C',
            },

        ],

        /* ---------------------------------------------------------
           🎆 축제 · 이벤트 즐기기
           벚꽃 / 불꽃 / 눈축제 등 시즌 한정
        --------------------------------------------------------- */
        festival: [
            {
                tag: '오사카 축제·이벤트',
                title: '텐진 마츠리',
                subtitle: '오사카시 기타구',
                img: 'src/assets/osaka/festival/tenjin_matsuri.jpg',
                content: {
                    hours: '매년 7월 24~25일',
                    fee: '무료 (유료 관람석 있음)',
                    address: 'Osaka Tenmangu Shrine',
                    tip: '강가 자리 선점 중요. 유카타 착용하고 현지 여름 축제 분위기 체험에 최고.',
                },
                bottomDesc:
                    '일본 3대 축제 중 하나. 배 행렬과 약 5천여 발의 불꽃놀이가 장관을 이루는 오사카 최대 여름 행사.',
                link: 'https://www.japan.travel/ko/spot/30/',
            },
            {
                tag: '오사카 축제·이벤트',
                title: '나니와 유키요에 마츠리',
                subtitle: '오사카시 나니와구',
                img: 'src/assets/osaka/festival/naniwa_yukiyoe_matsuri.jpg',
                content: {
                    hours: '7월~8월 중 주말',
                    fee: '무료',
                    address: 'Shinsekai, Naniwa-ku, Osaka',
                    tip: '불꽃보다 로컬 감성의 여름 분위기 중심. 저녁 노을 무렵 방문 추천.',
                },
                bottomDesc:
                    '전통 거리 ‘신세카이’ 일대에서 열리는 레트로 감성의 여름 축제. 길거리 음식과 이자카야 행사가 중심.',
                link: 'https://www.yodohanabi.com/',
            },

        ],
    }, // 👈 osaka 닫음


    /* =========================================================
       🐉 NAGOYA — 나고야 여행 테마별 플랜
    ========================================================= */
    nagoya: {
        /* ---------------------------------------------------------
          ☕ CAFE · 디저트 탐방
          NS 감성, 로컬 카페 중심
       --------------------------------------------------------- */
        cafe: [
            {
                tag: '나고야 카페·디저트',
                title: '에이토빌리지',
                subtitle: '나고야시 나카무라구',
                img: 'src/assets/nagoya/cafe/aitovillage.jpg',
                content: {
                    hours: '점포별 상이 (대체로 11:00~19:00)',
                    fee: '무료',
                    address: 'Nakamura-ku, Nagoya-shi, Aichi Prefecture, Japan (around Noritake-hondōri ~ Marunouchi area)',
                    tip: '주말 오후 산책 코스로 추천. 노을 질 무렵 길거리 조명과 오래된 건물 외벽이 사진 잘 나옴.',
                },
                bottomDesc:
                    '옛 상가 건물을 개조한 로컬 숍·갤러리·카페가 모여 있는 신흥 감성 거리. 외국인보다 현지 예술인과 학생들이 많아 조용한 분위기.',
                link: 'https://namu.wiki/w/%EB%82%98%EC%B9%B4%EB%AC%B4%EB%9D%BC%EA%B5%AC',
            },
        ],

        /* ---------------------------------------------------------
           🚶‍♀️ 조용한 산책 / 소도시 탐방
           일본 감성 그대로 즐기기
        --------------------------------------------------------- */
        walk: [

        ],

        /* ---------------------------------------------------------
           🌿 자연 · 공원에서 힐링
           무료 / 저가 명소 위주 추천
        --------------------------------------------------------- */
        nature: [
            {
                tag: "나고야 자연·공원",
                title: "산슈 아라스케 (San-shu Asuke)",
                subtitle: "아이치현 도요타시 아스케초",
                img: "src/assets/nagoya/nature/asuke.jpg",
                content: {
                    hours: "상시 개방 (야간 라이트업 기간 11월 초~하순 17:00~21:00)",
                    fee: "무료",
                    address: "Asuke-cho, Toyota, Aichi, Japan",
                    tip: "라이트업 시즌엔 도요타시에서 임시 셔틀버스 운행. 삼각대 금지 구역 있으니 주의."
                },
                bottomDesc: "일본 단풍 100선 중 하나로, 약 4,000그루의 단풍이 강을 따라 붉게 물드는 명소. 가을엔 현지인도 일부러 찾아오는 인기 스팟.",
                link: "https://www.japan.travel/en/spot/136/"
            }

        ],

        /* ---------------------------------------------------------
           📸 사진감성 / 야경 스폿
           포토존, 전망대 중심
        --------------------------------------------------------- */
        photo: [
            {
                tag: "나고야 사진·야경",
                title: "엔도지 상점가 (Endoji Shopping Street)",
                subtitle: "나고야시 나카무라구",
                img: "src/assets/nagoya/photo/endoji.jpg",
                content: {
                    hours: "점포별 상이 (대체로 10:00~18:00)",
                    fee: "무료",
                    address: "1 Chome-6 Noritake, Nakamura Ward, Nagoya, Aichi, Japan",
                    tip: "오후 3~5시 골목의 노을빛이 예쁘며, 필름카메라 촬영 명소로도 유명."
                },
                bottomDesc: "오래된 찻집과 빈티지 간판이 남아 있는 현지 상점가로, 관광객보다 주민이 많아 ‘로컬 감성’을 느낄 수 있는 장소.",
                link: "https://www.nagoya-info.jp/ko/spot/detail/45/"
            }

        ],

        /* ---------------------------------------------------------
           🍱 가성비 맛집 / 현지 밥집
           1000엔대 로컬 식당
        --------------------------------------------------------- */
        food: [
            {
                tag: "나고야 맛집",
                title: "라무치이 (La Muchi)",
                subtitle: "나고야시 나카구 사카에",
                img: "src/assets/nagoya/food/ramuchi.jpg",
                content: {
                    hours: "11:00~15:30 / 17:30~22:30 (일요일 휴무)",
                    fee: "미소카츠 약 2000엔",
                    address: "3-15-6 Sakae, Naka-ku, Nagoya, Aichi 460-0008, Japan",
                    tip: "밥·양배추·된장국 리필 가능. 점심시간엔 줄이 길어 11시대 방문 추천."
                },
                bottomDesc: "부드러운 흑돼지에 진한 미소소스를 올린 나고야식 ‘미소카츠’ 전문점. 파묻힐 만큼 듬뿍 올린 ‘네기다쿠 미소카츠’가 인기 메뉴.",
                link: "https://www.tripadvisor.co.kr/Restaurant_Review-g14134968-d1976261-Reviews-Ramuchii-Sakae_Naka_Nagoya_Aichi_Prefecture_Tokai_Chubu.html"
            },
            {
                tag: "나고야 맛집",
                title: "야마모토 (山本屋總本家)",
                subtitle: "나고야시 나카구 사카에",
                img: "src/assets/nagoya/food/yamamoto.jpg",
                content: {
                    hours: "11:00~21:00",
                    fee: "약 1000엔",
                    address: "3-12-19 Sakae, Naka-ku, Nagoya, Aichi 460-0008, Japan",
                    tip: "국물이 매우 뜨거우므로 주의. 뚝배기를 접시처럼 사용해 먹는 것이 전통 나고야 스타일."
                },
                bottomDesc: "‘미소니코미우동(味噌煮込みうどん)’ 전문점. 된장국물에 굵은 면을 넣어 끓이는 나고야 대표 소울푸드.",
                link: "https://yamamotoya.co.jp/"
            }
        ],

        /* ---------------------------------------------------------
           🛍️ 소소한 쇼핑 / 기념품
           빈티지, 문구점, 레코드샵
        --------------------------------------------------------- */
        shopping: [
            {
                tag: "나고야 쇼핑·기념품",
                title: "오스 상점가 (Osu Shopping Street)",
                subtitle: "나고야시 나카구 오스",
                img: "src/assets/nagoya/shopping/osu.jpg",
                content: {
                    hours: "점포별 상이 (대체로 10:00~19:00)",
                    fee: "무료",
                    address: "Osu 2–3 Chome, Naka Ward, Nagoya, Aichi, Japan",
                    tip: "“OSU 301빌딩” 내 중고카메라점과 레트로 액세서리 숍 추천. 주말엔 거리 퍼포먼스도 열림."
                },
                bottomDesc: "400여 점포가 이어진 복고풍 아케이드 거리. 빈티지 의류, 전통 간식, 기념품, 중고카메라 등 다양한 상점이 모여 있으며 현지 젊은층에게도 인기.",
                link: "https://namu.wiki/w/%EC%98%A4%EC%8A%A4(%EC%9D%BC%EB%B3%B8)"
            }
        ],

        /* ---------------------------------------------------------
           🎨 문화 · 예술 산책
           전시, 북카페, 공방 체험
        --------------------------------------------------------- */
        culture: [
            {
                "tag": "나고야 문화·예술",
                "title": "나고야시 과학관 (Nagoya City Science Museum)",
                "subtitle": "나고야시 나카구 사카에",
                "img": "src/assets/nagoya/culture/science_museum.jpg",
                "content": {
                    "hours": "09:30~17:00 (월요일 휴무)",
                    "fee": "일반 400엔 / 플라네타리움 포함 800엔",
                    "address": "2-17-1 Sakae, Naka Ward, Nagoya, Aichi, Japan (Shirakawa Park)",
                    "tip": "플라네타리움 예약은 당일 현장 구매만 가능. 저녁 회차는 빠르게 매진되므로 오전 방문 추천."
                },
                "bottomDesc": "세계 최대 규모의 플라네타리움으로 유명한 과학관. 내부는 실제 우주복, 번개 실험, 지진 체험 등 다양한 체험형 전시로 구성되어 있다.",
                "link": "https://aichinow.pref.aichi.jp/ko/spots/detail/16/"
            }
        ],

        /* ---------------------------------------------------------
           🚆 근교 1일 여행
           도쿄→가마쿠라 / 오사카→교토 등
        --------------------------------------------------------- */
        trip: [
            {
                "tag": "나고야 근교 1일 여행",
                "title": "이누야마성 (Inuyama Castle)",
                "subtitle": "아이치현 이누야마시",
                "img": "src/assets/nagoya/trip/inuyama_castle.jpg",
                "content": {
                    "hours": "09:00~17:00",
                    "fee": "어른 550엔",
                    "address": "65-2 Kitakoken, Inuyama, Aichi, Japan",
                    "tip": "마을 골목의 고고메판토도리는 필름사진 명소. 벚꽃철엔 성을 배경으로 강변 산책 추천."
                },
                "bottomDesc": "일본에서 가장 오래된 목조 천수각 중 하나로, 성 주변에는 전통 간식과 유카타 체험, 수공예점들이 즐비해 주말엔 현지인 데이트 코스로도 인기.",
                "link": "https://namu.wiki/w/%EC%9D%B4%EB%88%84%EC%95%BC%EB%A7%88%20%EC%84%B1"
            },
            {
                "tag": "나고야 근교 1일 여행",
                "title": "시라카와고 (Shirakawa-go)",
                "subtitle": "기후현 시라카와촌",
                "img": "src/assets/nagoya/trip/shirakawago.jpg",
                "content": {
                    "hours": "상점별 상이 (대체로 09:00~17:00)",
                    "fee": "마을 자체 무료 (전통 가옥 내부 관람 400엔~)",
                    "address": "Ogimachi, Shirakawa Village, Gifu, Japan",
                    "tip": "전망대 ‘오기마치성 터’에서 마을 전경을 내려다보면 엽서 같은 사진 가능."
                },
                "bottomDesc": "합장형(갓쇼즈쿠리) 초가집이 모여 있는 전통 마을. 겨울에는 눈 내린 지붕 위로 조명이 비치는 풍경이 특히 유명하다.",
                "link": "https://namu.wiki/w/%EC%8B%9C%EB%9D%BC%EC%B9%B4%EC%99%80%EA%B3%A0"
            }
        ],

        /* ---------------------------------------------------------
           ♨️ 온천에서 힐링하고 싶어요
           지역 온천, 당일 입욕 정보
        --------------------------------------------------------- */
        spa: [
            {
                "tag": "나고야 온천",
                "title": "게로온천 (Gero Onsen)",
                "subtitle": "기후현 게로시",
                "img": "src/assets/nagoya/spa/gero_onsen.jpg",
                "content": {
                    "hours": "시설별 상이 (일반적으로 09:00~22:00)",
                    "fee": "족욕 무료, 온천탕 600~1,500엔",
                    "address": "Yunoshima, Gero, Gifu, Japan",
                    "tip": "‘사사라다케(ささら竹橋)’ 다리 부근 야간 조명은 사진 명소. 겨울엔 김이 피어오르는 거리 풍경이 인상적."
                },
                "bottomDesc": "일본 3대 명온천 중 하나로 꼽히는 게로온천은 강가 노천탕과 족욕 거리가 조성되어 있으며, 현지인과 여행객 모두에게 인기 있는 힐링 명소.",
                "link": "https://www.japan.travel/ko/spot/2033/"
            }

        ],

        /* ---------------------------------------------------------
           🎆 축제 · 이벤트 즐기기
           벚꽃 / 불꽃 / 눈축제 등 시즌 한정
        --------------------------------------------------------- */
        festival: [
            {
                "tag": "미에 축제·이벤트",
                "title": "나바나노사토 (Nabana no Sato)",
                "subtitle": "미에현 쿠와나시",
                "img": "src/assets/nagoya/festival/nabana_no_sato.jpg",
                "content": {
                    "hours": "10:00~21:00",
                    "fee": "2,500엔",
                    "address": "270 Komae, Nagashima-cho, Kuwana, Mie, Japan",
                    "tip": "주말엔 혼잡하므로 평일 저녁 추천. 삼각대 사용 가능한 구역 있음. ‘빛의 터널’ 구간은 필수 감상 포인트."
                },
                "bottomDesc": "일본 최대 규모의 일루미네이션 명소로, 테마별 빛의 터널과 음악 연동 쇼가 유명하다. 겨울철에는 후지산 모티브의 파란빛 조명 공연이 압권.",
                "link": "https://ikidane-nippon.com/ko/spots/nabana-no-sato"
            }

        ],
    }, // 👈 sapporo 닫음

    /* =========================================================
       🍜 FUKUOKA — 후쿠오카 여행 테마별 플랜
    ========================================================= */
    fukuoka: {
        /* ---------------------------------------------------------
           ☕ CAFE · 디저트 탐방
           NS 감성, 로컬 카페 중심
        --------------------------------------------------------- */
        cafe: [
            {
                tag: '후쿠오카 카페·디저트',
                title: '후타미가우라 (二見ヶ浦)',
                subtitle: '이토시마시',
                img: 'src/assets/fukuoka/cafe/futamigaura.jpg',
                content: {
                    hours: '주요 관광지 및 카페: 보통 10:00~18:00 (일몰 시간까지 운영)',
                    fee: '무료',
                    address: 'Shimasakurai, Itoshima, Fukuoka 819-1304, Japan',
                    tip: '해안에서 흐르는 노을 풍경이 아름답고, 해질 무렵에 찍는 사진이 특히 인상적입니다. '
                        + '주차장이 마련되어 있으며 버스 등 대중교통으로도 접근 가능하여 차량 없이도 방문할 수 있습니다. '
                        + '주변에 감성 카페와 레스토랑이 밀집해 있어 해변 산책 후 휴식하기에 좋습니다.',
                },
                bottomDesc: '후쿠오카 근교 인기 해안 드라이브 명소로, 하얀 모래 해변과 ‘천사의 날개’ 조형물로 유명한 포토 스팟.',
                link: 'https://sakuraijinja.com/futamigaura/',
            },


        ],

        /* ---------------------------------------------------------
           🚶‍♀️ 조용한 산책 / 소도시 탐방
           일본 감성 그대로 즐기기
        --------------------------------------------------------- */
        walk: [
            {
                tag: '후쿠오카 산책',
                title: '오호리 공원 (大濠公園)',
                subtitle: '후쿠오카시 추오구',
                img: 'src/assets/fukuoka/walk/ohori_park.jpg',
                content: {
                    hours: '공원 자체는 연중무휴 24시간 개방. 보트 대여소 및 카페: 10:00~17:00 운영',
                    fee: '일반 250엔, 어린이 120엔',
                    address: '1 Ohorikoen, Chuo Ward, Fukuoka 810-0051, Japan',
                    tip: '도심 속에 있지만 넓은 호수와 산책로가 있어 여유롭게 힐링할 수 있는 명소입니다. '
                        + '지하철역에서 거의 바로 접근 가능해 교통이 매우 편리하며, '
                        + '공원 내에는 미술관, 일본정원, 카페 등이 있어 관광과 휴식을 동시에 즐길 수 있습니다.',
                },
                bottomDesc: '후쿠오카 중심의 대형 호수공원으로 산책·보트·자전거 타기에 최적. 여유로운 도심 힐링 코스로 인기.',
                link: 'https://www.fukuoka-now.com/kr/article/ohori-park/',
            },
            {
                tag: '후쿠오카 산책',
                title: '모지코 레트로 (門司港レトロ)',
                subtitle: '후쿠오카현 기타큐슈시 모지구',
                img: 'src/assets/fukuoka/walk/mojiko_retro.jpg',
                content: {
                    hours: '주요 관광지 및 상점: 10:00~18:00 (일부 상점은 19:00까지)',
                    fee: '전망실 등 유료 시설 어른 300엔 / 초중학생 150엔',
                    address: 'Minatomachi, Moji Ward, Kitakyushu, Fukuoka 801-0852 일본',
                    tip: '역사적인 항구 거리와 근대 건축이 조화된 관광지로, 기차역·전망타워·구 세관 등 볼거리가 다양하다. '
                        + '바닷가 카페나 전망 좋은 레스토랑이 많아 휴식하기 좋으며, '
                        + '역이나 주요 도로에서 접근성이 뛰어나 일정 조정이 쉽다.',
                },
                bottomDesc: '항구의 옛 정취와 근대 건축이 어우러진 관광·야경 명소. 카페, 기념품점, 전시관이 밀집한 인기 산책 코스.',
                link: 'https://www.mojiko-retro.net/', // 공식 사이트
            },

        ],

        /* ---------------------------------------------------------
           🌿 자연 · 공원에서 힐링
           무료 / 저가 명소 위주 추천
        --------------------------------------------------------- */
        nature: [
            {
                tag: '후쿠오카 자연·공원',
                title: '노코노시마 (能古島, Nokonoshima Island)',
                subtitle: '후쿠오카시 니시구',
                img: 'src/assets/fukuoka/nature/nokonoshima.jpg',
                content: {
                    hours: '평일 및 토요일: 09:00~17:30 / 일요일 및 공휴일: 09:00~18:30',
                    fee: '어른(고등학생 이상) 1,200엔 / 어린이(초·중학생) 600엔 / 유아(3세 이상) 400엔',
                    address: 'Noko, Nishi Ward, Fukuoka 819-0012, Japan',
                    tip: '후쿠오카 시내에서 페리를 타고 이동 가능하며, 여유롭게 반나절 정도 잡으면 충분히 즐길 수 있습니다. '
                        + '산책과 카페, 해변 분위기를 함께 느낄 수 있어 “느긋한 섬 여행” 코스로 추천됩니다. '
                        + '관광 명소보다는 자연과 여유 중심의 힐링 여행지로, 일몰 시간대의 전망대 풍경이 특히 아름답습니다.',
                },
                bottomDesc: '후쿠오카 앞바다에 위치한 노코노시마는 계절별 꽃밭과 해변 카페, 전망대가 어우러진 섬으로, 힐링과 여유로운 여행을 즐길 수 있는 명소.',
                link: 'https://www.crossroadfukuoka.jp/kr/spot/12460',
            },
            {
                tag: '후쿠오카 자연·공원',
                title: '센조가하라 공원 (戦場ヶ原公園)',
                subtitle: '야마구치현 시모노세키시',
                img: 'src/assets/fukuoka/nature/senjo_hara_park.jpg',
                content: {
                    hours: '연중무휴 24시간 개방. 벚꽃 시즌(4월 초) 및 가을 단풍 시즌(11월 초)에 특히 인기.',
                    fee: '무료',
                    address: '5 Chome-38 Ushirodacho, Shimonoseki, Yamaguchi 751-0826 일본',
                    tip: '시모노세키의 언덕 위 공원으로, 벚꽃 시즌에 특히 아름다운 풍경을 자랑한다. 전망대에서 모지코와 해협의 한눈에 들어오는 뷰가 매력적이다.',
                },
                bottomDesc: '벚꽃길과 해협 전망이 어우러진 자연 산책 명소로, 봄철 사진 명소로 특히 인기 있다.',
                link: 'https://www.sparkle.travel/ko/place/828a6df2-dc5c-11ee-9b39-c7c8948f11a7',
            },
            {
                tag: '후쿠오카 자연·공원',
                title: '죠후 정원 (長府庭園)',
                subtitle: '야마구치현 시모노세키시 조후 지역',
                img: 'src/assets/fukuoka/nature/chofu_garden.jpg',
                content: {
                    hours: '09:00~17:00 (입장 마감 16:30) / 월요일 휴무 (공휴일인 경우 다음날 휴관)',
                    fee: '어른 210엔 / 초중학생 100엔 (단체 및 고령자 할인 있음)',
                    address: '8-11 Chofukuromon Higashimachi, Shimonoseki, Yamaguchi 752-0986 일본',
                    tip: '약 3만㎡ 규모의 일본 전통 정원으로, 계절마다 색다른 풍경을 즐길 수 있다. '
                        + '고요하고 품격 있는 분위기로 조용한 시간을 보내기 좋으며, '
                        + '정원 내 전시관과 갤러리 등 문화 공간도 마련되어 있어 산책과 문화 감상을 함께 즐길 수 있다.',
                },
                bottomDesc: '도심 속 대형 정원으로 벚꽃과 단풍철 산책 코스로 인기가 높다.',
                link: 'https://s-kanrikousha.com/teientop.html',
            },

        ],

        /* ---------------------------------------------------------
           📸 사진감성 / 야경 스폿
           포토존, 전망대 중심
        --------------------------------------------------------- */
        photo: [
            {
                tag: '후쿠오카 사진·야경',
                title: '히노야마 전망대 (火の山ロープウェイ跡)',
                subtitle: '야마구치현 시모노세키시',
                img: 'src/assets/fukuoka/photo/hinoyama_ropeway.jpg',
                content: {
                    hours: '전망대는 연중무휴 24시간 개방 / 야경 조명은 밤 시간대 운영',
                    fee: '전망대 무료 (공원 산책만 하면 무료) / 과거 로프웨이 이용요금: 편도 310엔, 왕복 520엔 (현재 폐지)',
                    address: 'Mukuno, Shimonoseki, Yamaguchi 750-0000, Japan',
                    tip: '봄 벚꽃 시즌(3월 말~4월 초)에는 약 320그루의 소메이요시노 벚꽃이 만개하며, '
                        + '야간 라이트업도 진행됩니다. '
                        + '교통이 편리하고 주차장이 무료이며, JR 시모노세키역에서 버스로 약 15분 거리입니다. '
                        + '전망대에서 바라보는 간몬해협과 시모노세키 시내의 야경이 매우 아름답습니다.',
                },
                bottomDesc: '예전 로프웨이 터로, 현재는 간몬해협과 시모노세키 시내를 한눈에 볼 수 있는 전망 명소. 벚꽃 시즌에는 야경과 함께 최고의 포토스팟으로 유명.',
                link: 'https://namu.wiki/w/%EC%8B%9C%EB%AA%A8%EB%85%B8%EC%84%B8%ED%82%A4%EC%8B%9C%20%ED%9E%88%EB%85%B8%EC%95%BC%EB%A7%88%20%EB%A1%9C%ED%94%84%EC%9B%A8%EC%9D%B4',
            },

        ],

        /* ---------------------------------------------------------
           🍱 가성비 맛집 / 현지 밥집
           1000엔대 로컬 식당
        --------------------------------------------------------- */
        food: [

        ],

        /* ---------------------------------------------------------
           🛍️ 소소한 쇼핑 / 기념품
           빈티지, 문구점, 레코드샵
        --------------------------------------------------------- */
        shopping: [

        ],

        /* ---------------------------------------------------------
           🎨 문화 · 예술 산책
           전시, 북카페, 공방 체험
        --------------------------------------------------------- */
        culture: [
            {
                tag: '후쿠오카 문화·예술',
                title: '간몬해협 뮤지엄 (関門海峡ミュージアム)',
                subtitle: '기타큐슈시 모지구',
                img: 'src/assets/fukuoka/culture/kanmon_museum.jpg',
                content: {
                    hours: '09:00~17:00 (입장 마감 16:30) / 월요일 휴관 (공휴일인 경우 다음날 휴관)',
                    fee: '어른 500엔 / 초중생 200엔 / 유아·해교 어린이 플라자 100엔',
                    address: '1-3-3 Nishikaigan, Moji Ward, Kitakyushu, Fukuoka 801-0841, Japan',
                    tip: '시모노세키와 모지코를 잇는 해협의 역사와 문화를 체험할 수 있는 박물관입니다. '
                        + '과거의 로프웨이 흔적과 전망 포인트가 있어 “역사+풍경”을 동시에 즐길 수 있으며, '
                        + '전망대에서 바다를 한눈에 볼 수 있어 가족 여행지로도 추천됩니다.',
                },
                bottomDesc: '해협의 역사와 해상문화를 전시한 박물관으로, 바다 전망이 아름답고 가족 단위 체험에도 인기.',
                link: 'https://mojiko-retoro9.jp/spot/kanmon_kaikyo_museum/', // 공식 사이트
            },



        ],

        /* ---------------------------------------------------------
           🚆 근교 1일 여행
           도쿄→가마쿠라 / 오사카→교토 등
        --------------------------------------------------------- */
        trip: [

        ],

        /* ---------------------------------------------------------
           ♨️ 온천에서 힐링하고 싶어요
           지역 온천, 당일 입욕 정보
        --------------------------------------------------------- */
        spa: [

        ],

        /* ---------------------------------------------------------
           🎆 축제 · 이벤트 즐기기
           벚꽃 / 불꽃 / 눈축제 등 시즌 한정
        --------------------------------------------------------- */
        festival: [

        ],
    }, // 👈 fukuoka 닫음


    /* =========================================================
       🦊 SAPPORO — 삿포로 여행 테마별 플랜
    ========================================================= */
    sapporo: {
        /* ---------------------------------------------------------
           ☕ CAFE · 디저트 탐방
           NS 감성, 로컬 카페 중심
        --------------------------------------------------------- */
        cafe: [
            {
                "tag": "삿포로 카페·디저트",
                "title": "마루야마 공원 상점가 (Maruyama Koen mae Café Street)",
                "subtitle": "삿포로시 추오구",
                "img": "src/assets/sapporo/cafe/maruyama_koen.jpg",
                "content": {
                    "hours": "점포별 상이",
                    "fee": "무료",
                    "address": "Maruyama Koen mae, Sapporo, Hokkaido, Japan",
                    "tip": "현지 젊은 층의 데이트 코스로 인기. 주말 브런치 장소로도 유명."
                },
                "bottomDesc": "신사 근처의 감성 카페거리로, 갤러리·베이커리·찻집이 모여 있는 조용한 분위기의 동네. 봄철 벚꽃 시즌에는 야외 좌석이 인상적이다.",
                "link": "https://www.sapporo.travel/ko/spot/facility/maruyama_park/"
            }

        ],

        /* ---------------------------------------------------------
           🚶‍♀️ 조용한 산책 / 소도시 탐방
           일본 감성 그대로 즐기기
        --------------------------------------------------------- */
        walk: [

        ],

        /* ---------------------------------------------------------
           🌿 자연 · 공원에서 힐링
           무료 / 저가 명소 위주 추천
        --------------------------------------------------------- */
        nature: [
            {
                "tag": "삿포로 자연·공원",
                "title": "오도리 공원 (Odori Park)",
                "subtitle": "삿포로시 추오구",
                "img": "src/assets/sapporo/nature/odori_park.jpg",
                "content": {
                    "hours": "상시 개방",
                    "fee": "무료",
                    "address": "Odorinishi, Chuo-ku, Sapporo, Hokkaido, Japan",
                    "tip": "현지인 점심 피크닉 명소. 겨울엔 눈축제, 여름엔 노천 비어가든 개최."
                },
                "bottomDesc": "삿포로 중심부를 가로지르는 녹지대로, 사계절 축제(눈축제, 여름 맥주가든 등)가 열리는 시민의 쉼터. 봄에는 벚꽃, 여름엔 분수, 겨울엔 조명으로 계절마다 다른 매력을 느낄 수 있다.",
                "link": "https://odori-park.jp/"
            }
        ],

        /* ---------------------------------------------------------
           📸 사진감성 / 야경 스폿
           포토존, 전망대 중심
        --------------------------------------------------------- */
        photo: [
            {
                "tag": "삿포로 사진·야경",
                "title": "모이와산 (Mt. Moiwa)",
                "subtitle": "삿포로시 미나미구",
                "img": "src/assets/sapporo/photo/moiwa_yama.jpg",
                "content": {
                    "hours": "10:30~22:00",
                    "fee": "왕복 1,800엔",
                    "address": "Minami-ku, Sapporo, Hokkaido, Japan",
                    "tip": "저녁 7~8시 사이 야경이 가장 아름다움. ‘연인의 성지’로 불리며 포토존으로도 인기."
                },
                "bottomDesc": "케이블카와 로프웨이로 정상까지 올라가면 삿포로 시내 전경과 석양, 야경이 한눈에 보인다. 일본 3대 야경 중 하나로 꼽히며, 사계절 모두 색다른 분위기를 느낄 수 있는 명소.",
                "link": "https://ko-72987.site-translation.com/"
            }
        ],

        /* ---------------------------------------------------------
           🍱 가성비 맛집 / 현지 밥집
           1000엔대 로컬 식당
        --------------------------------------------------------- */
        food: [
            {
                "tag": "삿포로 맛집",
                "title": "니조 시장 (Nijo Ichiba)",
                "subtitle": "삿포로시 추오구",
                "img": "src/assets/sapporo/food/nijo_ichiba.jpg",
                "content": {
                    "hours": "7:00~18:00",
                    "fee": "2,000엔 ~ 5,000엔 (카이센동 기준)",
                    "address": "Minami 3-jo Higashi, Chuo-ku, Sapporo, Hokkaido, Japan",
                    "tip": "아침 시간대 방문 필수! 시장 내 ‘돈부리 차야’가 인기."
                },
                "bottomDesc": "100년 이상의 역사를 지닌 전통 재래시장으로, 신선한 해산물과 덮밥(카이센동)으로 유명하다. 게·연어알·성게 등 홋카이도산 해산물을 합리적인 가격에 맛볼 수 있다.",
                "link": "https://nijomarket.com/en/top_en/"
            }

        ],

        /* ---------------------------------------------------------
           🛍️ 소소한 쇼핑 / 기념품
           빈티지, 문구점, 레코드샵
        --------------------------------------------------------- */
        shopping: [
            {
                "tag": "삿포로 쇼핑·기념품",
                "title": "다누키코지 상점가 (Tanukikoji Shopping Street)",
                "subtitle": "삿포로시 추오구",
                "img": "src/assets/sapporo/shopping/tanukikoji.jpg",
                "content": {
                    "hours": "점포별 상이 (대체로 10:00~20:00)",
                    "fee": "무료",
                    "address": "Minami 2–3 Jo Nishi, Chuo-ku, Sapporo, Hokkaido, Japan",
                    "tip": "아침보다 저녁 시간대에 활기 넘침. 7번가 근처 라멘골목 방문 추천."
                },
                "bottomDesc": "길이 약 900m에 달하는 아케이드형 상점가로, 의류·기념품·로컬 푸드 골목 등이 이어져 있어 현지인과 관광객 모두 즐겨 찾는 인기 명소.",
                "link": "https://tanukikoji.or.jp/"
            }

        ],

        /* ---------------------------------------------------------
           🎨 문화 · 예술 산책
           전시, 북카페, 공방 체험
        --------------------------------------------------------- */
        culture: [
            {
                "tag": "삿포로 문화·예술",
                "title": "삿포로 맥주 박물관 (Sapporo Beer Museum)",
                "subtitle": "삿포로시 히가시구",
                "img": "src/assets/sapporo/culture/sapporo_beer_museum.jpg",
                "content": {
                    "hours": "11:30~20:30",
                    "fee": "입장 무료 (시음 유료 500엔)",
                    "address": "Kita 7 Higashi 9, Sapporo, Hokkaido, Japan",
                    "tip": "‘Sapporo Beer Garden’ 식사 세트 추천. 예약 시 웨이팅 줄임."
                },
                "bottomDesc": "일본 맥주의 시작점으로 알려진 박물관으로, 시음존과 레트로한 전시관이 있어 현지인과 관광객 모두 즐겨 찾는 명소. 삿포로 클래식 맥주를 직접 맛볼 수 있다.",
                "link": "https://www.sapporobeer.jp/brewery/s_museum/"
            }


        ],

        /* ---------------------------------------------------------
           🚆 근교 1일 여행
           도쿄→가마쿠라 / 오사카→교토 등
        --------------------------------------------------------- */
        trip: [
            {
                "tag": "홋카이도 근교 1일 여행",
                "title": "아오이 이케 (Blue Pond)",
                "subtitle": "홋카이도 가미카와군 미에이쵸",
                "img": "src/assets/sapporo/trip/blue_pond.jpg",
                "content": {
                    "hours": "상시 개방",
                    "fee": "무료",
                    "address": "Shirogane, Biei, Kamikawa District, Hokkaido 071-0235, Japan",
                    "tip": "비 오는 직후엔 물색이 탁해질 수 있으므로 날씨 좋은 날 오전 방문 추천."
                },
                "bottomDesc": "맑은 날이면 에메랄드 블루빛의 물결이 펼쳐지는 인공 호수로, 사진 명소로 유명하다. 주변 산과 나무가 반사되어 신비로운 풍경을 자아낸다.",
                "link": "https://www.biei-hokkaido.jp/ja/shirogane-blue-pond"
            },
            {
                "tag": "홋카이도 근교 1일 여행",
                "title": "세븐스타의 나무 (Seven Stars Tree)",
                "subtitle": "홋카이도 비에이",
                "img": "src/assets/sapporo/trip/seven_stars_tree.jpg",
                "content": {
                    "hours": "상시 개방",
                    "fee": "무료",
                    "address": "Hokusei, Biei, Kamikawa District, Hokkaido, Japan",
                    "tip": "근처 ‘켄과 메리의 나무’도 함께 둘러보기 좋음. 드라이브나 자전거 코스로 추천."
                },
                "bottomDesc": "언덕 위 외딴 나무 한 그루로, 세븐스타 담배 광고에 등장하며 유명해진 포토 스팟. 사계절마다 분위기가 달라 사진 애호가들에게 인기가 많다.",
                "link": "https://www.biei-hokkaido.jp/ja/"
            }

        ],

        /* ---------------------------------------------------------
           ♨️ 온천에서 힐링하고 싶어요
           지역 온천, 당일 입욕 정보
        --------------------------------------------------------- */
        spa: [

        ],

        /* ---------------------------------------------------------
           🎆 축제 · 이벤트 즐기기
           벚꽃 / 불꽃 / 눈축제 등 시즌 한정
        --------------------------------------------------------- */
        festival: [
            {
                "tag": "삿포로 축제·이벤트",
                "title": "삿포로 눈축제 (Sapporo Snow Festival)",
                "subtitle": "삿포로시 오도리공원·스스키노 일대",
                "img": "src/assets/sapporo/festival/snow_festival.jpg",
                "content": {
                    "hours": "매년 2월 초 (약 1주일간)",
                    "fee": "무료",
                    "address": "Odori Park, Susukino, Sapporo, Hokkaido, Japan",
                    "tip": "저녁 조명 시간(17:00~21:00)에 가장 아름다움. 추우니 방한용품 필수!"
                },
                "bottomDesc": "세계적으로 유명한 눈과 얼음 조각 축제로, 15m 이상의 대형 조각과 조명 쇼가 펼쳐지는 삿포로 최대의 겨울 이벤트. 매년 200만 명 이상이 찾는 대표 축제.",
                "link": "https://namu.wiki/w/%EC%82%BF%ED%8F%AC%EB%A1%9C%20%EB%88%88%20%EC%B6%95%EC%A0%9C"
            },
            {
                "tag": "삿포로 축제·이벤트",
                "title": "삿포로 오도리 비어가든 (Sapporo Odori Beer Garden)",
                "subtitle": "삿포로시 오도리공원",
                "img": "src/assets/sapporo/festival/beer_garden.jpg",
                "content": {
                    "hours": "매년 7월 중순~8월 중순",
                    "fee": "무료 입장 (음료 유료)",
                    "address": "Odori Park, Sapporo, Hokkaido, Japan",
                    "tip": "해질녘(17~19시)에 현지 직장인들로 붐빔. 자리 확보는 오후 4시 전 추천."
                },
                "bottomDesc": "일본 최대 규모의 야외 맥주 축제로, 삿포로·아사히·기린·산토리 등 브랜드별 구역에서 생맥주와 다양한 음식 즐기기 가능. 여름 삿포로의 대표 낭만 이벤트.",
                "link": "https://www.sapporo.travel/ko/event/event-list/sapporo-odori-beer-garden/"
            }

        ],
    },



} // 👈 allPlans 전체 닫음

export default krPlans
