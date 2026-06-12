export type Locale = "en" | "id" | "es";

const en = {
  header: {
    nav: {
      forUsers: "For users",
      statuses: "Statuses",
      tournaments: "Tournaments",
      information: "Information",
      clientAgreement: "Client Agreement",
      amlPolicy: "AML Policy",
      copyTradingAgreement: "Copy Trading Agreement",
      aboutUs: "About us",
    },
    login: "Log in",
    register: "Register",
  },
  hero: {
    heading: "Stockity. Making investing clear",
    register: "Register Now",
    watch: "Watch",
    features: [
      "Intuitive interface",
      "140+ assets",
      "Secure transactions",
      "Licensed and regulated",
    ],
  },
  tradersNeeds: {
    headingStart: "A platform designed with ",
    headingHighlight: "users in mind",
    subheading: "Explore the market at your own pace",
    cta: "Start now",
    rating: "4.8 Rating",
    ratingShort: "Rating",
  },
  usable: {
    heading: "Usable, reliable, secure. Works just as you expect",
    cta: "Start trading",
  },
  assets: {
    heading: "140+ assets to explore",
    cta: "Start now",
  },
  protect: {
    heading: "Everything you want in a platform",
    card1Before: "High-level ",
    card1Highlight: "fund protection",
    card1After: " and transactions",
    card2Before: "Transparent investing",
    card2Highlight: "with no hidden fees",
  },
  copytrading: {
    heading: "Learn from the experts",
    text: "Study successful investment strategies and apply them to your routine",
    cta: "Start now",
  },
  withdraw: {
    heading: "Deposit & withdraw using local payment methods",
    cta: "Show more",
  },
  device: {
    heading: "Invest wherever you want, on any device",
    mobileApps: "Mobile Apps",
    webVersion: "Web Version",
    webPlatform: "Web Platform",
    open: "Open",
    openWebPlatform: "Open Web Platform",
  },
  charity: {
    heading: "We invest in more than trading. Stockity is socially active",
    text: "We support environmental protection, animal welfare, sports, and many other initiatives. Read more to see how we give back to communities",
    textMobile: "We support environmental protection, animal welfare, sports, and many other initiatives.",
    cta: "Learn more",
  },
  partner: {
    heading: "Stockity is a licensed and regulated online platform",
    cta: "Learn more",
  },
  reviews: {
    heading: "Millions of users trust us already",
  },
  faq: {
    heading: "FAQ",
    items: [
      {
        question: "How do I start?",
        type: "steps" as const,
        steps: [
          "Register in seconds",
          "Deposit easily",
          "Learn for free",
          "Predict assets moves",
          "Withdraw anytime",
        ],
      },
      {
        question: "How fast will I get my withdrawals?",
        type: "highlight" as const,
        before: "All requests are processed within ",
        highlight: "1-2 hours",
        after: ". Our financial team works around the clock to ensure fast and secure transactions.",
      },
      {
        question: "Can I practice first?",
        type: "highlight" as const,
        before: "Yes! You get a ",
        highlight: "$10,000 demo account",
        after: " completely free. Use it to practice trading strategies, explore assets, and test strategies — all with no real money at risk.",
      },
      {
        question: "Are there any special events?",
        type: "plain" as const,
        text: "Of course! Subscribe to our e-mails to get notified about new activities you can participate in. We regularly host tournaments, contests, and exclusive promotions for our users.",
      },
    ],
  },
  join: {
    headingStart: "Join the ",
    headingHighlight: "3,5+ million",
    headingEnd: " investors using Stockity",
    headingMobile1: "Join the ",
    headingMobile2: "3,5+\u00a0million",
    headingMobile3: " investors using",
    cta: "Start Now",
  },
  football: {
    heading: "Football Power Battle",
    text: "Trade 5 regional indices with boosted profitability and compete for the top rankings",
    cta: "Try it!",
    risk: "Risk warning: your capital might be at risk",
  },
  earth: {
    label: "users from 130+ countries trust us",
  },
  footer: {
    contacts: "Contacts",
    disclaimer:
      "Stockity provides services only to adult users. Online trading may involve significant financial risks including the risk of losing all funds on your trading account. Please, estimate all the risks and get advice from an independent financial advisor before using Stockity services. We also recommend not to invest funds you can\u2019t afford. Stockity isn\u2019t responsible for any losses (direct, indirect, or consequential) resulting from the actions of a client on the platform.",
    copyright: "\u00a9 2022-2026 Stockity. All rights reserved",
    links: [
      { label: "About us", href: "/about" },
      { label: "Affiliate program", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Client Agreement", href: "/agreement" },
      { label: "AML policy", href: "/aml-policy" },
    ],
  },
};

const id: typeof en = {
  header: {
    nav: {
      forUsers: "Fitur",
      statuses: "Status Akun",
      tournaments: "Turnamen",
      information: "Informasi",
      clientAgreement: "Perjanjian Klien",
      amlPolicy: "Kebijakan AML",
      copyTradingAgreement: "Perjanjian Copy Trading",
      aboutUs: "Tentang Kami",
    },
    login: "Masuk",
    register: "Daftar",
  },
  hero: {
    heading: "Stockity. Investasi jadi lebih mudah",
    register: "Mulai Gratis",
    watch: "Lihat Video",
    features: [
      "Tampilan yang simpel",
      "140+ aset pilihan",
      "Transaksi terjamin",
      "Legal & terpercaya",
    ],
  },
  tradersNeeds: {
    headingStart: "Platform yang dibuat khusus buat ",
    headingHighlight: "kamu",
    subheading: "Eksplorasi pasar sesuka kamu, kapan pun dan di mana pun",
    cta: "Coba Sekarang",
    rating: "Rating 4.8",
    ratingShort: "Rating",
  },
  usable: {
    heading: "Praktis, andal, aman. Persis seperti yang kamu mau",
    cta: "Mulai Trading",
  },
  assets: {
    heading: "140+ aset siap dijelajahi",
    cta: "Coba Sekarang",
  },
  protect: {
    heading: "Semua yang kamu butuhkan dalam satu platform",
    card1Before: "Perlindungan ",
    card1Highlight: "dana berlapis",
    card1After: " dan transaksi yang aman",
    card2Before: "Investasi transparan,",
    card2Highlight: "nol biaya tersembunyi",
  },
  copytrading: {
    heading: "Belajar dari sang",
    text: "Ikuti strategi trader sukses dan langsung terapkan ke portofoliomu",
    cta: "Coba Sekarang",
  },
  withdraw: {
    heading: "Deposit & tarik dana pakai metode pembayaran lokal",
    cta: "Lihat Semua",
  },
  device: {
    heading: "Trading di mana aja, pakai perangkat apa aja",
    mobileApps: "Aplikasi Mobile",
    webVersion: "Versi Web",
    webPlatform: "Platform Web",
    open: "Buka",
    openWebPlatform: "Buka via Browser",
  },
  charity: {
    heading: "Kami lebih dari sekadar platform trading. Stockity peduli dan aktif berkontribusi",
    text: "Kami mendukung pelestarian lingkungan, kesejahteraan hewan, dunia olahraga, dan berbagai inisiatif sosial lainnya. Yuk, lihat bagaimana kami nyata berkontribusi untuk komunitas",
    textMobile: "Kami mendukung lingkungan, kesejahteraan hewan, olahraga, dan banyak inisiatif sosial lainnya.",
    cta: "Selengkapnya",
  },
  partner: {
    heading: "Stockity adalah platform online yang legal dan teregulasi",
    cta: "Selengkapnya",
  },
  reviews: {
    heading: "Jutaan trader sudah percaya Stockity",
  },
  faq: {
    heading: "Pertanyaan Umum",
    items: [
      {
        question: "Gimana cara mulainya?",
        type: "steps" as const,
        steps: [
          "Daftar dalam hitungan detik",
          "Deposit dengan mudah",
          "Belajar gratis tanpa batas",
          "Prediksi pergerakan aset",
          "Tarik kapan pun kamu mau",
        ],
      },
      {
        question: "Berapa lama proses penarikan dana?",
        type: "highlight" as const,
        before: "Semua permintaan diproses dalam ",
        highlight: "1\u20132 jam",
        after: ". Tim keuangan kami siaga 24 jam untuk memastikan transaksimu berjalan cepat dan aman.",
      },
      {
        question: "Bisa latihan dulu sebelum pakai uang sungguhan?",
        type: "highlight" as const,
        before: "Tentu! Kamu langsung dapat ",
        highlight: "akun demo senilai $10.000",
        after: " secara gratis. Latih strategimu, kenali berbagai aset, semua tanpa risiko kehilangan uang.",
      },
      {
        question: "Ada event atau promo khusus nggak?",
        type: "plain" as const,
        text: "Ada dong! Daftarkan emailmu biar kamu nggak ketinggalan info event terbaru. Kami rutin bikin turnamen, kontes, dan promo eksklusif yang sayang untuk dilewatkan.",
      },
    ],
  },
  join: {
    headingStart: "Bergabung bersama ",
    headingHighlight: "3,5+ juta",
    headingEnd: " investor pengguna Stockity",
    headingMobile1: "Bergabung bersama ",
    headingMobile2: "3,5+\u00a0juta",
    headingMobile3: " investor pengguna",
    cta: "Mulai Sekarang",
  },
  football: {
    heading: "Duel Sepak Bola",
    text: "Trading 5 indeks regional dengan imbal hasil lebih tinggi dan raih posisi puncak leaderboard",
    cta: "Ikut Sekarang!",
    risk: "Peringatan: trading berisiko, modal bisa berkurang",
  },
  earth: {
    label: "pengguna dari 130+ negara telah mempercayai kami",
  },
  footer: {
    contacts: "Kontak",
    disclaimer:
      "Stockity hanya melayani pengguna yang sudah berusia dewasa. Trading online mengandung risiko finansial yang signifikan, termasuk kemungkinan kehilangan seluruh dana di akun trading kamu. Harap pertimbangkan seluruh risiko dan konsultasikan dengan penasihat keuangan independen sebelum menggunakan layanan Stockity. Jangan investasikan dana yang tidak siap kamu tanggung risikonya. Stockity tidak bertanggung jawab atas kerugian apa pun, baik langsung maupun tidak langsung, akibat tindakan klien di platform.",
    copyright: "\u00a9 2022\u20132026 Stockity. Hak cipta dilindungi.",
    links: [
      { label: "Tentang Kami", href: "/id/about" },
      { label: "Program Afiliasi", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Perjanjian Klien", href: "/agreement" },
      { label: "Kebijakan AML", href: "/aml-policy" },
    ],
  },
};

const es: typeof en = {
  header: {
    nav: {
      forUsers: "Funciones",
      statuses: "Estados",
      tournaments: "Torneos",
      information: "Información",
      clientAgreement: "Acuerdo de Cliente",
      amlPolicy: "Política AML",
      copyTradingAgreement: "Acuerdo de Copy Trading",
      aboutUs: "Sobre nosotros",
    },
    login: "Iniciar sesión",
    register: "Registrarse",
  },
  hero: {
    heading: "Stockity. Invierte de forma más inteligente",
    register: "Comenzar gratis",
    watch: "Ver video",
    features: [
      "Interfaz sencilla",
      "140+ activos",
      "Transacciones seguras",
      "Legal y regulado",
    ],
  },
  tradersNeeds: {
    headingStart: "Una plataforma hecha para ",
    headingHighlight: "ti",
    subheading: "Explora el mercado a tu ritmo, cuando y donde quieras",
    cta: "Comenzar ahora",
    rating: "Calificación 4.8",
    ratingShort: "Calificación",
  },
  usable: {
    heading: "Fácil, fiable y seguro. Exactamente como lo esperabas",
    cta: "Empezar a operar",
  },
  assets: {
    heading: "Más de 140 activos para explorar",
    cta: "Comenzar ahora",
  },
  protect: {
    heading: "Todo lo que necesitas en una sola plataforma",
    card1Before: "Protecci\u00f3n ",
    card1Highlight: "de fondos de alto nivel",
    card1After: " y operaciones seguras",
    card2Before: "Inversi\u00f3n transparente,",
    card2Highlight: "sin tarifas ocultas",
  },
  copytrading: {
    heading: "Aprende de los",
    text: "Sigue las estrategias de los traders m\u00e1s exitosos y apl\u00edcalas a tu portafolio",
    cta: "Comenzar ahora",
  },
  withdraw: {
    heading: "Deposita y retira con m\u00e9todos de pago locales",
    cta: "Ver m\u00e1s",
  },
  device: {
    heading: "Opera donde quieras, con cualquier dispositivo",
    mobileApps: "Apps M\u00f3viles",
    webVersion: "Versi\u00f3n Web",
    webPlatform: "Plataforma Web",
    open: "Abrir",
    openWebPlatform: "Abrir en el navegador",
  },
  charity: {
    heading: "Vamos m\u00e1s all\u00e1 del trading. Stockity se compromete con la comunidad",
    text: "Apoyamos la protecci\u00f3n del medioambiente, el bienestar animal, el deporte y muchas otras iniciativas. Conoce c\u00f3mo contribuimos a la sociedad",
    textMobile: "Apoyamos el medioambiente, el bienestar animal, el deporte y muchas otras iniciativas sociales.",
    cta: "Saber m\u00e1s",
  },
  partner: {
    heading: "Stockity es una plataforma online legal y regulada",
    cta: "Saber m\u00e1s",
  },
  reviews: {
    heading: "Millones de traders ya conf\u00edan en Stockity",
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "\u00bfC\u00f3mo empiezo?",
        type: "steps" as const,
        steps: [
          "Reg\u00edstrate en segundos",
          "Deposita f\u00e1cilmente",
          "Aprende gratis",
          "Predice el movimiento de activos",
          "Retira cuando quieras",
        ],
      },
      {
        question: "\u00bfCu\u00e1nto tarda un retiro?",
        type: "highlight" as const,
        before: "Todos los pedidos se procesan en ",
        highlight: "1-2 horas",
        after: ". Nuestro equipo financiero trabaja las 24 horas para garantizar operaciones r\u00e1pidas y seguras.",
      },
      {
        question: "\u00bfPuedo practicar antes de operar con dinero real?",
        type: "highlight" as const,
        before: "\u00a1Claro! Obtienes una ",
        highlight: "cuenta demo de $10,000",
        after: " completamente gratis. Practica estrategias, explora activos y aprende sin arriesgar tu dinero.",
      },
      {
        question: "\u00bfHay eventos o promociones especiales?",
        type: "plain" as const,
        text: "\u00a1Por supuesto! Suscr\u00edbete a nuestros correos para enterarte de nuevas actividades. Organizamos torneos, concursos y promociones exclusivas de forma regular.",
      },
    ],
  },
  join: {
    headingStart: "\u00danete a los ",
    headingHighlight: "3,5+ millones",
    headingEnd: " de inversores que usan Stockity",
    headingMobile1: "\u00danete a los ",
    headingMobile2: "3,5+\u00a0millones",
    headingMobile3: " de inversores que usan",
    cta: "Comenzar ahora",
  },
  football: {
    heading: "Batalla de F\u00fatbol",
    text: "Opera 5 \u00edndices regionales con mayor rentabilidad y compite por los primeros puestos del ranking",
    cta: "\u00a1Participar ahora!",
    risk: "Aviso de riesgo: tu capital puede estar en riesgo",
  },
  earth: {
    label: "usuarios de m\u00e1s de 130 pa\u00edses conf\u00edan en nosotros",
  },
  footer: {
    contacts: "Contacto",
    disclaimer:
      "Stockity solo presta servicios a usuarios adultos. El trading online puede implicar riesgos financieros significativos, incluida la p\u00e9rdida total de los fondos de tu cuenta. Eval\u00faa todos los riesgos y consulta a un asesor financiero independiente antes de usar Stockity. No inviertas dinero que no puedas permitirte perder. Stockity no se responsabiliza de ninguna p\u00e9rdida, directa o indirecta, derivada de las acciones del cliente en la plataforma.",
    copyright: "\u00a9 2022\u20132026 Stockity. Todos los derechos reservados.",
    links: [
      { label: "Sobre nosotros", href: "/es/about" },
      { label: "Programa de afiliados", href: "#" },
      { label: "Pol\u00edtica de privacidad", href: "#" },
      { label: "Acuerdo de Cliente", href: "/agreement" },
      { label: "Pol\u00edtica AML", href: "/aml-policy" },
    ],
  },
};

export const translations: Record<Locale, typeof en> = { en, id, es };

export function getT(locale: Locale) {
  return translations[locale];
}
