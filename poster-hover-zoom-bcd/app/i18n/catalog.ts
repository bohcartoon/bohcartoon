export type Locale =
  | "it-IT"
  | "de-DE"
  | "zh-CN"
  | "es-ES"
  | "bn-BD"
  | "pt-BR"
  | "hi-IN"
  | "ar-SA"
  | "fr-FR"
  | "ko-KR"
  | "ru-RU"
  | "ja-JP";

export interface Copy {
  navAll: string;
  navFilms: string;
  navReels: string;
  navExtras: string;
  navFaq: string;
  featherTitle: string;
  featherDescription: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  film: string;
  reel: string;
  extras: string;
  extrasDescription: string;
  short: string;
  other: string;
  ageGenre: string;
  bullyingDescription: string;
  watchNow: string;
  faqTitle: string;
  faq: [string, string][];
  newsletterActivate: string;
  newsletterLoading: string;
  newsletterError: string;
  copyright: string;
}

export const copy: Record<Locale, Copy> = {
  "it-IT": {
    navAll: "Tutti",
    navFilms: "Film",
    navReels: "Reel",
    navExtras: "Extra",
    navFaq: "FAQ",
    featherTitle: "Il volo della cicogna",
    featherDescription: "Piuma è una giovane cicogna albina. Bianca tra cicogne nere, fa fatica a stare al sole e a stare con gli altri. Quando il suo stormo parte per la migrazione, lei non riesce a seguirlo. Rimasta sola, dovrà trovare un altro modo per volare e un altro cielo a cui appartenere.",
    countdownDays: "Giorni",
    countdownHours: "Ore",
    countdownMinutes: "Minuti",
    film: "Film",
    reel: "Reel",
    extras: "Contenuti extra",
    extrasDescription: "Qui trovi tutti i contenuti extra di bohcartoon!",
    short: "Short",
    other: "Altro...",
    ageGenre: "7+ · Animazione · Drammatico",
    bullyingDescription: "Questo cane non aveva amici e si sentiva emarginato, ma un giorno...",
    watchNow: "GUARDA ORA",
    faqTitle: "Domande frequenti",
    faq: [
      [
        "Cos’è bohcartoon?",
        "bohcartoon è una casa di produzione indipendente nata nel 2022 e presentata al pubblico nel 2023 con il primo episodio di bohcartoon story, disponibile sul canale ufficiale del brand.",
      ],
      [
        "Dove posso vedere FEATHER?",
        "FEATHER è disponibile esclusivamente sul sito ufficiale di bohcartoon.",
      ],
      [
        "Quanto costa bohcartoon?",
        "bohcartoon è completamente gratuito e non richiede registrazione.",
      ],
    ],
    newsletterActivate: "Attiva le notifiche newsletter",
    newsletterLoading: "Attivazione…",
    newsletterError: "Non è stato possibile attivare le notifiche. Riprova più tardi.",
    copyright: "Tutti i diritti riservati",
  },
  "de-DE": {
    navAll: "Alle",
    navFilms: "Filme",
    navReels: "Reels",
    navExtras: "Extras",
    navFaq: "FAQ",
    featherTitle: "Der Flug des Storches",
    featherDescription: "Piuma ist ein junger Albino-Storch. Als weißer Vogel unter schwarzen Störchen fällt es ihr schwer, in der Sonne und mit den anderen zurechtzukommen. Als ihr Schwarm zur Migration aufbricht, kann sie nicht folgen. Allein muss sie einen anderen Weg zum Fliegen und einen Himmel finden, zu dem sie gehört.",
    countdownDays: "Tage",
    countdownHours: "Stunden",
    countdownMinutes: "Minuten",
    film: "Filme",
    reel: "Reels",
    extras: "Zusatzinhalte",
    extrasDescription: "Hier findest du alle zusätzlichen Inhalte von bohcartoon!",
    short: "Kurzfilme",
    other: "Weitere...",
    ageGenre: "7+ · Animation · Drama",
    bullyingDescription: "Dieser Hund hatte keine Freunde und fühlte sich ausgegrenzt, doch eines Tages...",
    watchNow: "JETZT ANSEHEN",
    faqTitle: "Häufig gestellte Fragen",
    faq: [
      [
        "Was ist bohcartoon?",
        "bohcartoon ist eine unabhängige Produktionsfirma, die 2022 gegründet und 2023 mit der ersten Folge von bohcartoon story öffentlich vorgestellt wurde. Sie ist auf dem offiziellen Kanal der Marke verfügbar.",
      ],
      [
        "Wo kann ich FEATHER ansehen?",
        "FEATHER ist ausschließlich auf der offiziellen Website von bohcartoon verfügbar.",
      ],
      [
        "Was kostet bohcartoon?",
        "bohcartoon ist komplett kostenlos und erfordert keine Registrierung.",
      ],
    ],
    newsletterActivate: "Newsletter-Benachrichtigungen aktivieren",
    newsletterLoading: "Wird aktiviert…",
    newsletterError: "Benachrichtigungen konnten nicht aktiviert werden. Bitte versuche es später erneut.",
    copyright: "Alle Rechte vorbehalten",
  },
  "zh-CN": {
    navAll: "全部",
    navFilms: "电影",
    navReels: "短片",
    navExtras: "花絮",
    navFaq: "常见问题",
    featherTitle: "白鹳的飞翔",
    featherDescription: "Piuma 是一只年轻的白化鹳。在一群黑鹳中，她因白色羽毛而显得格格不入，也难以适应阳光和同伴。迁徙季来临时，鹳群启程了，她却无法跟上。独自留下的她必须找到新的飞行方式，以及真正属于自己的天空。",
    countdownDays: "天",
    countdownHours: "小时",
    countdownMinutes: "分钟",
    film: "电影",
    reel: "短片",
    extras: "幕后内容",
    extrasDescription: "这里可以找到 bohcartoon 的所有额外内容！",
    short: "短片",
    other: "更多作品…",
    ageGenre: "7+ · 动画 · 剧情",
    bullyingDescription: "这只小狗没有朋友，感到孤单和被排斥，但有一天……",
    watchNow: "立即观看",
    faqTitle: "常见问题",
    faq: [
      [
        "bohcartoon 是什么？",
        "bohcartoon 是一家独立制作公司，成立于 2022 年，并于 2023 年通过首集《bohcartoon story》正式亮相。该剧集可在品牌官方频道观看。",
      ],
      [
        "在哪里可以观看 FEATHER？",
        "FEATHER 仅可在 bohcartoon 官方网站观看。",
      ],
      [
        "bohcartoon 收费吗？",
        "bohcartoon 完全免费，无需注册。",
      ],
    ],
    newsletterActivate: "开启资讯推送通知",
    newsletterLoading: "正在开启…",
    newsletterError: "暂时无法开启通知，请稍后重试。",
    copyright: "保留所有权利",
  },
  "es-ES": {
    navAll: "Todo",
    navFilms: "Películas",
    navReels: "Cortos",
    navExtras: "Extras",
    navFaq: "Preguntas frecuentes",
    featherTitle: "El vuelo de la cigüeña",
    featherDescription: "Piuma es una joven cigüeña albina. Blanca entre cigüeñas negras, le cuesta estar al sol y relacionarse con las demás. Cuando su bandada parte para migrar, no consigue seguirla. Sola, tendrá que encontrar otra forma de volar y otro cielo al que pertenecer.",
    countdownDays: "Días",
    countdownHours: "Horas",
    countdownMinutes: "Minutos",
    film: "Películas",
    reel: "Cortos",
    extras: "Contenido extra",
    extrasDescription: "¡Aquí encontrarás todo el contenido extra de bohcartoon!",
    short: "Cortos",
    other: "Más...",
    ageGenre: "7+ · Animación · Drama",
    bullyingDescription: "Este perro no tenía amigos y se sentía excluido, pero un día...",
    watchNow: "VER AHORA",
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["¿Qué es bohcartoon?", "bohcartoon es una productora independiente fundada en 2022 y presentada al público en 2023 con el primer episodio de bohcartoon story, disponible en el canal oficial de la marca."],
      ["¿Dónde puedo ver FEATHER?", "FEATHER está disponible exclusivamente en el sitio oficial de bohcartoon."],
      ["¿Cuánto cuesta bohcartoon?", "bohcartoon es completamente gratis y no requiere registrarse."],
    ],
    newsletterActivate: "Activar avisos de la newsletter",
    newsletterLoading: "Activando…",
    newsletterError: "No se pudieron activar las notificaciones. Inténtalo de nuevo más tarde.",
    copyright: "Todos los derechos reservados",
  },
  "bn-BD": {
    navAll: "সব",
    navFilms: "চলচ্চিত্র",
    navReels: "শর্টস",
    navExtras: "অতিরিক্ত",
    navFaq: "সাধারণ প্রশ্ন",
    featherTitle: "সারসের উড়ান",
    featherDescription: "পিউমা একটি তরুণ অ্যালবিনো সারস। কালো সারসদের মাঝে সাদা হওয়ায় রোদে থাকা ও অন্যদের সঙ্গে মিশতে তার কষ্ট হয়। তার ঝাঁক পরিযানে রওনা হলে সে তাদের সঙ্গে যেতে পারে না। একা হয়ে তাকে উড়ার নতুন পথ এবং নিজের করে নেওয়ার মতো নতুন আকাশ খুঁজে নিতে হবে।",
    countdownDays: "দিন",
    countdownHours: "ঘণ্টা",
    countdownMinutes: "মিনিট",
    film: "চলচ্চিত্র",
    reel: "শর্টস",
    extras: "অতিরিক্ত কনটেন্ট",
    extrasDescription: "এখানে bohcartoon-এর সব অতিরিক্ত কনটেন্ট পাবেন!",
    short: "শর্টস",
    other: "আরও...",
    ageGenre: "৭+ · অ্যানিমেশন · নাটক",
    bullyingDescription: "এই কুকুরটির কোনো বন্ধু ছিল না, সে নিজেকে সবার থেকে বিচ্ছিন্ন মনে করত, কিন্তু একদিন...",
    watchNow: "এখনই দেখুন",
    faqTitle: "সাধারণ প্রশ্ন",
    faq: [
      ["bohcartoon কী?", "bohcartoon একটি স্বাধীন প্রযোজনা প্রতিষ্ঠান, যা ২০২২ সালে প্রতিষ্ঠিত হয় এবং ২০২৩ সালে bohcartoon story-এর প্রথম পর্ব দিয়ে সবার সামনে আসে। পর্বটি ব্র্যান্ডের অফিসিয়াল চ্যানেলে দেখা যায়।"],
      ["FEATHER কোথায় দেখতে পারি?", "FEATHER শুধুমাত্র bohcartoon-এর অফিসিয়াল ওয়েবসাইটে দেখা যায়।"],
      ["bohcartoon দেখতে কত খরচ?", "bohcartoon সম্পূর্ণ বিনামূল্যে, কোনো নিবন্ধনের প্রয়োজন নেই।"],
    ],
    newsletterActivate: "নিউজলেটার পুশ বিজ্ঞপ্তি চালু করুন",
    newsletterLoading: "চালু হচ্ছে…",
    newsletterError: "বিজ্ঞপ্তি চালু করা যায়নি। পরে আবার চেষ্টা করুন।",
    copyright: "সর্বস্বত্ব সংরক্ষিত",
  },
  "pt-BR": {
    navAll: "Tudo",
    navFilms: "Filmes",
    navReels: "Curtas",
    navExtras: "Extras",
    navFaq: "Perguntas frequentes",
    featherTitle: "O voo da cegonha",
    featherDescription: "Piuma é uma jovem cegonha albina. Branca entre cegonhas negras, tem dificuldade para ficar ao sol e conviver com as outras. Quando seu bando parte para a migração, ela não consegue acompanhá-lo. Sozinha, terá de encontrar outra maneira de voar e um céu ao qual possa pertencer.",
    countdownDays: "Dias",
    countdownHours: "Horas",
    countdownMinutes: "Minutos",
    film: "Filmes",
    reel: "Curtas",
    extras: "Conteúdos extras",
    extrasDescription: "Aqui você encontra todos os conteúdos extras de bohcartoon!",
    short: "Curtas",
    other: "Mais...",
    ageGenre: "7+ · Animação · Drama",
    bullyingDescription: "Este cão não tinha amigos e se sentia excluído, mas um dia...",
    watchNow: "ASSISTA AGORA",
    faqTitle: "Perguntas frequentes",
    faq: [
      ["O que é bohcartoon?", "bohcartoon é uma produtora independente fundada em 2022 e apresentada ao público em 2023 com o primeiro episódio de bohcartoon story, disponível no canal oficial da marca."],
      ["Onde posso assistir a FEATHER?", "FEATHER está disponível exclusivamente no site oficial da bohcartoon."],
      ["Quanto custa bohcartoon?", "bohcartoon é totalmente gratuito e não exige cadastro."],
    ],
    newsletterActivate: "Ativar notificações da newsletter",
    newsletterLoading: "Ativando…",
    newsletterError: "Não foi possível ativar as notificações. Tente novamente mais tarde.",
    copyright: "Todos os direitos reservados",
  },
  "hi-IN": {
    navAll: "सभी",
    navFilms: "फ़िल्में",
    navReels: "लघु फ़िल्में",
    navExtras: "अतिरिक्त",
    navFaq: "अक्सर पूछे जाने वाले सवाल",
    featherTitle: "सारस की उड़ान",
    featherDescription: "पिउमा एक युवा अल्बिनो सारस है। काले सारसों के बीच सफ़ेद होने के कारण उसे धूप में रहना और दूसरों के साथ घुलना-मिलना मुश्किल लगता है। जब उसका झुंड प्रवास पर निकलता है, तो वह उनके साथ नहीं जा पाती। अकेले उसे उड़ने का नया रास्ता और अपना आसमान ढूँढ़ना होगा।",
    countdownDays: "दिन",
    countdownHours: "घंटे",
    countdownMinutes: "मिनट",
    film: "फ़िल्में",
    reel: "लघु फ़िल्में",
    extras: "अतिरिक्त सामग्री",
    extrasDescription: "यहाँ bohcartoon की सभी अतिरिक्त सामग्री देखें!",
    short: "लघु फ़िल्में",
    other: "और देखें...",
    ageGenre: "7+ · एनीमेशन · ड्रामा",
    bullyingDescription: "इस कुत्ते का कोई दोस्त नहीं था और वह खुद को अकेला महसूस करता था, लेकिन एक दिन...",
    watchNow: "अभी देखें",
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faq: [
      ["bohcartoon क्या है?", "bohcartoon एक स्वतंत्र प्रोडक्शन कंपनी है, जिसकी शुरुआत 2022 में हुई और 2023 में bohcartoon story के पहले एपिसोड के साथ इसे दर्शकों के सामने लाया गया। यह एपिसोड ब्रांड के आधिकारिक चैनल पर उपलब्ध है।"],
      ["FEATHER कहाँ देख सकते हैं?", "FEATHER केवल bohcartoon की आधिकारिक वेबसाइट पर उपलब्ध है।"],
      ["bohcartoon देखने का कितना खर्च है?", "bohcartoon पूरी तरह मुफ़्त है और इसके लिए पंजीकरण की ज़रूरत नहीं है।"],
    ],
    newsletterActivate: "न्यूज़लेटर सूचनाएँ चालू करें",
    newsletterLoading: "चालू हो रहा है…",
    newsletterError: "सूचनाएँ चालू नहीं हो सकीं। कृपया बाद में फिर कोशिश करें।",
    copyright: "सर्वाधिकार सुरक्षित",
  },
  "ar-SA": {
    navAll: "الكل",
    navFilms: "الأفلام",
    navReels: "المقاطع القصيرة",
    navExtras: "إضافات",
    navFaq: "الأسئلة الشائعة",
    featherTitle: "رحلة اللقلق",
    featherDescription: "بيوما لقلق ألبينو صغير. وبريشها الأبيض بين طيور اللقلق السوداء، يصعب عليها البقاء تحت الشمس والتأقلم مع الآخرين. عندما ينطلق سربها في الهجرة، لا تستطيع اللحاق به. وحيدةً، عليها أن تجد طريقة أخرى للطيران وسماءً تنتمي إليها.",
    countdownDays: "أيام",
    countdownHours: "ساعات",
    countdownMinutes: "دقائق",
    film: "الأفلام",
    reel: "المقاطع القصيرة",
    extras: "محتوى إضافي",
    extrasDescription: "تجد هنا كل المحتوى الإضافي من bohcartoon!",
    short: "مقاطع قصيرة",
    other: "المزيد...",
    ageGenre: "+7 · رسوم متحركة · دراما",
    bullyingDescription: "لم يكن لهذا الكلب أصدقاء وكان يشعر بأنه منبوذ، لكن في أحد الأيام...",
    watchNow: "شاهد الآن",
    faqTitle: "الأسئلة الشائعة",
    faq: [
      ["ما هي bohcartoon؟", "bohcartoon شركة إنتاج مستقلة تأسست عام 2022 وقدمت نفسها للجمهور عام 2023 مع الحلقة الأولى من bohcartoon story، والمتاحة على القناة الرسمية للعلامة."],
      ["أين يمكنني مشاهدة FEATHER؟", "يتوفر FEATHER حصريًا على الموقع الرسمي لـ bohcartoon."],
      ["كم تبلغ تكلفة bohcartoon؟", "bohcartoon مجانية تمامًا ولا تتطلب التسجيل."],
    ],
    newsletterActivate: "تفعيل إشعارات النشرة الإخبارية",
    newsletterLoading: "جارٍ التفعيل…",
    newsletterError: "تعذر تفعيل الإشعارات. يُرجى المحاولة مرة أخرى لاحقًا.",
    copyright: "جميع الحقوق محفوظة",
  },
  "fr-FR": {
    navAll: "Tout",
    navFilms: "Films",
    navReels: "Courts-métrages",
    navExtras: "Bonus",
    navFaq: "FAQ",
    featherTitle: "Le vol de la cigogne",
    featherDescription: "Piuma est une jeune cigogne albinos. Blanche parmi les cigognes noires, elle a du mal à supporter le soleil et à vivre avec les autres. Lorsque son groupe part en migration, elle ne parvient pas à le suivre. Seule, elle devra trouver une autre façon de voler et un ciel où elle pourra trouver sa place.",
    countdownDays: "Jours",
    countdownHours: "Heures",
    countdownMinutes: "Minutes",
    film: "Films",
    reel: "Courts-métrages",
    extras: "Contenus bonus",
    extrasDescription: "Retrouvez ici tous les contenus bonus de bohcartoon !",
    short: "Courts-métrages",
    other: "Autres...",
    ageGenre: "7+ · Animation · Drame",
    bullyingDescription: "Ce chien n'avait pas d'amis et se sentait exclu, mais un jour...",
    watchNow: "REGARDER",
    faqTitle: "Questions fréquentes",
    faq: [
      ["Qu’est-ce que bohcartoon ?", "bohcartoon est une société de production indépendante fondée en 2022 et présentée au public en 2023 avec le premier épisode de bohcartoon story, disponible sur la chaîne officielle de la marque."],
      ["Où puis-je regarder FEATHER ?", "FEATHER est disponible exclusivement sur le site officiel de bohcartoon."],
      ["Combien coûte bohcartoon ?", "bohcartoon est entièrement gratuit et ne nécessite aucune inscription."],
    ],
    newsletterActivate: "Activer les notifications de la newsletter",
    newsletterLoading: "Activation…",
    newsletterError: "Impossible d’activer les notifications. Réessayez plus tard.",
    copyright: "Tous droits réservés",
  },
  "ko-KR": {
    navAll: "전체",
    navFilms: "영화",
    navReels: "숏폼",
    navExtras: "추가 콘텐츠",
    navFaq: "자주 묻는 질문",
    featherTitle: "황새의 비행",
    featherDescription: "피우마는 어린 알비노 황새입니다. 검은 황새들 사이에서 하얀 피우마는 햇볕 아래에 있기도, 다른 이들과 어울리기도 어렵습니다. 무리가 이동을 시작했을 때 피우마는 따라가지 못합니다. 홀로 남은 피우마는 새로운 비행 방법과 자신이 속할 하늘을 찾아야 합니다.",
    countdownDays: "일",
    countdownHours: "시간",
    countdownMinutes: "분",
    film: "영화",
    reel: "숏폼",
    extras: "추가 콘텐츠",
    extrasDescription: "bohcartoon의 모든 추가 콘텐츠를 여기에서 만나보세요!",
    short: "숏폼",
    other: "더 보기...",
    ageGenre: "7세 이상 · 애니메이션 · 드라마",
    bullyingDescription: "이 강아지는 친구가 없어 소외감을 느꼈지만, 어느 날...",
    watchNow: "지금 보기",
    faqTitle: "자주 묻는 질문",
    faq: [
      ["bohcartoon은 무엇인가요?", "bohcartoon은 2022년에 설립된 독립 제작사로, 2023년 bohcartoon story의 첫 번째 에피소드와 함께 대중에게 공개되었습니다. 해당 에피소드는 브랜드 공식 채널에서 볼 수 있습니다."],
      ["FEATHER는 어디에서 볼 수 있나요?", "FEATHER는 bohcartoon 공식 웹사이트에서만 볼 수 있습니다."],
      ["bohcartoon은 유료인가요?", "bohcartoon은 완전히 무료이며 회원가입이 필요하지 않습니다."],
    ],
    newsletterActivate: "뉴스레터 알림 받기",
    newsletterLoading: "활성화 중…",
    newsletterError: "알림을 활성화하지 못했습니다. 나중에 다시 시도해 주세요.",
    copyright: "모든 권리 보유",
  },
  "ru-RU": {
    navAll: "Все",
    navFilms: "Фильмы",
    navReels: "Короткометражки",
    navExtras: "Дополнительно",
    navFaq: "Вопросы и ответы",
    featherTitle: "Полёт аиста",
    featherDescription: "Пиума — молодой аист-альбинос. Среди чёрных аистов ей, белой, трудно находиться на солнце и общаться с остальными. Когда стая отправляется в миграцию, она не может лететь вместе с ней. Оставшись одна, Пиума должна найти другой способ летать и небо, которое станет ей домом.",
    countdownDays: "Дни",
    countdownHours: "Часы",
    countdownMinutes: "Минуты",
    film: "Фильмы",
    reel: "Короткометражки",
    extras: "Дополнительные материалы",
    extrasDescription: "Здесь собраны все дополнительные материалы bohcartoon!",
    short: "Короткометражки",
    other: "Ещё...",
    ageGenre: "7+ · Анимация · Драма",
    bullyingDescription: "У этой собаки не было друзей, и она чувствовала себя одинокой, но однажды...",
    watchNow: "СМОТРЕТЬ",
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      ["Что такое bohcartoon?", "bohcartoon — независимая студия, основанная в 2022 году и представленная публике в 2023 году первым эпизодом bohcartoon story. Он доступен на официальном канале бренда."],
      ["Где можно посмотреть FEATHER?", "FEATHER доступен только на официальном сайте bohcartoon."],
      ["Сколько стоит bohcartoon?", "bohcartoon полностью бесплатен, регистрация не требуется."],
    ],
    newsletterActivate: "Включить уведомления рассылки",
    newsletterLoading: "Включение…",
    newsletterError: "Не удалось включить уведомления. Попробуйте позже.",
    copyright: "Все права защищены",
  },
  "ja-JP": {
    navAll: "すべて",
    navFilms: "映画",
    navReels: "ショート",
    navExtras: "特典",
    navFaq: "よくある質問",
    featherTitle: "コウノトリの飛翔",
    featherDescription: "ピウマは若いアルビノのコウノトリ。黒い仲間の中で白い彼女は、日差しの下で過ごすことも、みんなと一緒にいることも苦手です。群れが渡りに出発しても、彼女はついていけません。ひとり残されたピウマは、飛ぶための別の方法と、自分の居場所となる空を探します。",
    countdownDays: "日",
    countdownHours: "時間",
    countdownMinutes: "分",
    film: "映画",
    reel: "ショート",
    extras: "特典コンテンツ",
    extrasDescription: "bohcartoonの特典コンテンツはこちら！",
    short: "ショート",
    other: "その他...",
    ageGenre: "7歳以上 · アニメーション · ドラマ",
    bullyingDescription: "この犬には友達がおらず、仲間外れだと感じていました。でもある日……",
    watchNow: "今すぐ見る",
    faqTitle: "よくある質問",
    faq: [
      ["bohcartoonとは？", "bohcartoonは2022年に設立された独立系制作会社です。2023年に『bohcartoon story』の第1話で一般公開され、そのエピソードは公式チャンネルで視聴できます。"],
      ["FEATHERはどこで見られますか？", "FEATHERはbohcartoonの公式サイトでのみ視聴できます。"],
      ["bohcartoonは有料ですか？", "bohcartoonは完全無料で、登録も必要ありません。"],
    ],
    newsletterActivate: "ニュースレター通知を有効にする",
    newsletterLoading: "有効にしています…",
    newsletterError: "通知を有効にできませんでした。しばらくしてからもう一度お試しください。",
    copyright: "無断転載を禁じます",
  },
};

const timezoneLocales: Record<string, Locale> = {
  "Europe/Rome": "it-IT",
  "Europe/Berlin": "de-DE",
  "Asia/Shanghai": "zh-CN",
  "Asia/Urumqi": "zh-CN",
  "Asia/Chongqing": "zh-CN",
  "Asia/Harbin": "zh-CN",
  "Europe/Madrid": "es-ES",
  "Atlantic/Canary": "es-ES",
  "Asia/Dhaka": "bn-BD",
  "America/Sao_Paulo": "pt-BR",
  "America/Fortaleza": "pt-BR",
  "America/Manaus": "pt-BR",
  "America/Belem": "pt-BR",
  "America/Campo_Grande": "pt-BR",
  "America/Cuiaba": "pt-BR",
  "America/Porto_Velho": "pt-BR",
  "America/Boa_Vista": "pt-BR",
  "America/Rio_Branco": "pt-BR",
  "Atlantic/Noronha": "pt-BR",
  "Europe/Lisbon": "pt-BR",
  "Atlantic/Madeira": "pt-BR",
  "Atlantic/Azores": "pt-BR",
  "Asia/Kolkata": "hi-IN",
  "Asia/Calcutta": "hi-IN",
  "Asia/Riyadh": "ar-SA",
  "Europe/Paris": "fr-FR",
  "Asia/Seoul": "ko-KR",
  "Europe/Moscow": "ru-RU",
  "Europe/Kaliningrad": "ru-RU",
  "Europe/Samara": "ru-RU",
  "Asia/Yekaterinburg": "ru-RU",
  "Asia/Omsk": "ru-RU",
  "Asia/Novosibirsk": "ru-RU",
  "Asia/Krasnoyarsk": "ru-RU",
  "Asia/Irkutsk": "ru-RU",
  "Asia/Vladivostok": "ru-RU",
  "Asia/Sakhalin": "ru-RU",
  "Asia/Magadan": "ru-RU",
  "Asia/Kamchatka": "ru-RU",
  "Asia/Tokyo": "ja-JP",
};

export function detectLocale(
  languages: readonly string[],
  timeZone?: string,
): Locale {
  if (timeZone && timezoneLocales[timeZone]) return timezoneLocales[timeZone];
  return detectFromLanguage(languages);
}

function detectFromLanguage(languages: readonly string[]): Locale {
  for (const language of languages) {
    const locale = language.toLowerCase();
    if (locale.startsWith("it")) return "it-IT";
    if (locale.startsWith("de")) return "de-DE";
    if (locale.startsWith("zh")) return "zh-CN";
    if (locale.startsWith("es")) return "es-ES";
    if (locale.startsWith("bn")) return "bn-BD";
    if (locale.startsWith("pt")) return "pt-BR";
    if (locale.startsWith("hi")) return "hi-IN";
    if (locale.startsWith("ar")) return "ar-SA";
    if (locale.startsWith("fr")) return "fr-FR";
    if (locale.startsWith("ko")) return "ko-KR";
    if (locale.startsWith("ru")) return "ru-RU";
    if (locale.startsWith("ja")) return "ja-JP";
  }
  return "it-IT";
}
