export default {
    header: {
        login: "ログイン",
        signup: "新規登録",
        mypage: "マイページ",
        logout: "ログアウト",
        withdraw: "退会",

        // 한국어판과 대응되도록 추가
        confirmDelete: "本当に退会しますか？",
        deleted: "退会が完了しました。",
        deleteFail: "退会に失敗しました。",
    },

    hero: {
        line1: "日本の隠れた名所を\nかんたんに見つけましょう",
        line2: "TABIVITOで行く、あなただけの旅",
        line3: "TABIVITOは、実際に旅をしながら本当に\n良かった場所を紹介するサイトです。",

        prev: "前のスライド",
        next: "次のスライド",
    },

    /**
     * 지도 / 추천 패널에서 쓰는 텍스트들
     */
    main: {
        mapAlt: "日本地図",
        recommendTitle: "おすすめプラン",
        cityLabel: "都市",
        styleLabel: "タイプ",
        mapPick: "マップ選択",

        hintHTML:
            "地図のピンを押すと、その都市のおすすめが全部表示されます。\n（好み関係なく全部）",

        hours: "営業時間",
        fee: "入場料", // '料金' vs '入場料' 중 너가 원하는 표현 선택 가능
        address: "住所",
        more: "詳しく見る",

        fav: "お気に入りに追加",
        favored: "お気に入り済み",

        city: {
            tokyo: "東京",
            osaka: "大阪",
            nagoya: "名古屋",
            fukuoka: "福岡",
            sapporo: "札幌",
        },
    },

    /**
     * 홈 하단 추천 카드 리스트(HomeTravelList.vue)
     */
    travelList: {
        sectionTitle: "おすすめスポット",
        detailLink: "詳しく見る",
        favAdd: "🤍 お気に入りに追加",
        favDone: "💖 お気に入り済み",
        hours: "営業時間：",
        fee: "入場料：",
        address: "住所：",
    },

    /**
     * TripFlowSection.vue (여행 방식 소개)
     */
    how: {
        headline: "場所をひと目で、\nそして一気に！",
        lead: "ほかのサービスではできなかったことが、TABIVITOならできます。\n旅行前でも旅行中でも、自分のプランをいつでも簡単に修正して取り出せます。",

        step1Num: "1",
        step1Text: "気に入った都市",
        step2Num: "2",
        step2Text: "あなたが行きたいスポット",

        cta: "自分だけのスポット探し",
        planeIcon: "✈",

        card1: {
            title: "黒門市場",
            desc: "多彩なグルメと活気にあふれた台所市場",
        },
        card2: {
            title: "中崎町",
            desc: "写真映えするおしゃれな街並み",
        },
        card3: {
            title: "天神橋筋商店街",
            desc: "食べ歩きが楽しめるアーケード型商店街",
        },
    },

    selectTabi: {
        backToHome: "ホームに戻る",
        question: "次はどこに\n逃げちゃおう？",
        desc: "気になる都市をひとつ選んでください。",
        nextBtn: "次へ",
        alertPickCity: "行きたいエリアを選んでください！",
    },

    selectPlace: {
        backToFirst: "最初の質問へ戻る",
        question: "どんな旅がしたい？",
        desc: "いまの気分に一番近いものを選んでください。",
        chosenCity: "選んだ都市:",
        nextBtn: "これにする",
        alertPickStyle: "どんなスタイルの旅をしたいか選んでください！",

        opt: {
            cafe: {
                label: "☕   カフェ・スイーツ巡り",
                sub: "ローカルカフェやレトロ喫茶",
            },
            walk: {
                label: "🚶‍♀️   のんびり街歩き / ローカル散策",
                sub: "静かな路地や下町の雰囲気を楽しみたい",
            },
            nature: {
                label: "🌿   自然・公園でリラックス",
                sub: "無料スポット・癒し系スポット中心",
            },
            photo: {
                label: "📷   写真・夜景スポット",
                sub: "映える展望台やフォトスポット",
            },
            food: {
                label: "🍜   ローカル飯・コスパ重視ごはん",
                sub: "1000円台のごはん中心",
            },
            shopping: {
                label: "🛍️   ちょっとしたショッピング / おみやげ",
                sub: "古着・雑貨・レコード・文房具など",
            },
            culture: {
                label: "🎭   文化・アートさんぽ",
                sub: "展示・ブックカフェ・工房体験",
            },
            trip: {
                label: "🚉   日帰り小旅行",
                sub: "東京→鎌倉 / 大阪→神戸 など近郊プラン",
            },
            spa: {
                label: "♨️   温泉でととのいたい",
                sub: "日帰り入浴できる温泉スポット",
            },
            festival: {
                label: "🎆   お祭り・イベントを楽しみたい",
                sub: "花火 / 雪まつり / 桜 など季節限定",
            },
        },
    },


    mypage: {
        title: "お気に入りリスト",
        empty: "まだお気に入りがありません 🥲",
        tag: "お気に入り",
        unfav: "お気に入り解除",
    },

    login: {
        title: "ログイン",
        usernamePH: "ユーザーID",
        passwordPH: "パスワード",
        submit: "ログイン",
        fail: "ログインに失敗しました",
    },

    signup: {
        title: "新規登録",
        username: {
            ph: "ユーザーID（6～20文字、英字+数字 必須）",
            checking: "確認中…",
            checkBtn: "ID重複チェック",
            ruleHint: "ID形式が正しくありません。（6～20文字、英字+数字 必須）",
            ruleInvalid: "ID形式が正しくありません。（6～20文字、英字+数字 必須）",
            needCheck: "IDの重複チェックをしてください。",
            ok: "このIDは使用できます。",
            dup: "このIDはすでに使われています。",
            checkFail: "重複チェックに失敗しました（ネットワークエラー）",
        },
        namePH: "お名前",
        emailPH: "メールアドレス（任意）",
        passwordPH: "パスワード",
        confirmPH: "パスワード確認",
        submit: "登録する",
        successAlert: "登録が完了しました！ ログインページへ移動します。",
        failMsg: "失敗: {reason}",
        networkErr: "ネットワークエラー",
        err: {
            usernameRule: "ID形式が正しくありません。（6～20文字、英字+数字 必須）",
            nameRequired: "お名前を入力してください",
            emailInvalid: "メールアドレスの形式が正しくありません",
            passwordShort: "パスワードは4文字以上で入力してください",
            confirmMismatch: "パスワード確認が一致しません",
        },
    },



    footer: {
        rights: "© TABIVITO. All rights reserved.",
        address: "ソウル特別市 永登浦区 永登浦洞5街 32番地 4F・5F",
        contactLabel: "カスタマー:",
        emailLabel: "メール:",
    },
}
