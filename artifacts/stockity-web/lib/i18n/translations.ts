export type Locale = "en" | "id";

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
      forUsers: "Untuk pengguna",
      statuses: "Status",
      tournaments: "Turnamen",
      information: "Informasi",
      clientAgreement: "Client Agreement",
      amlPolicy: "AML Policy",
      copyTradingAgreement: "Copy Trading Agreement",
      aboutUs: "Tentang kami",
    },
    login: "Masuk",
    register: "Daftar",
  },
  hero: {
    heading: "Stockity. Investasi yang Lebih Jelas",
    register: "Daftar Sekarang",
    watch: "Tonton",
    features: [
      "Antarmuka intuitif",
      "140+ aset",
      "Transaksi aman",
      "Berlisensi & teregulasi",
    ],
  },
  tradersNeeds: {
    headingStart: "Platform yang dirancang untuk ",
    headingHighlight: "pengguna",
    subheading: "Jelajahi pasar sesuai kecepatan Anda",
    cta: "Mulai sekarang",
    rating: "Rating 4.8",
    ratingShort: "Rating",
  },
  usable: {
    heading: "Mudah digunakan, andal, aman. Bekerja sesuai yang Anda harapkan",
    cta: "Mulai trading",
  },
  assets: {
    heading: "140+ aset untuk dijelajahi",
    cta: "Mulai sekarang",
  },
  protect: {
    heading: "Semua yang Anda inginkan dalam satu platform",
    card1Before: "Perlindungan ",
    card1Highlight: "dana tingkat tinggi",
    card1After: " dan transaksi aman",
    card2Before: "Investasi transparan",
    card2Highlight: "tanpa biaya tersembunyi",
  },
  copytrading: {
    heading: "Belajar dari para ahli",
    text: "Pelajari strategi investasi yang sukses dan terapkan dalam aktivitas Anda",
    cta: "Mulai sekarang",
  },
  withdraw: {
    heading: "Deposit & tarik menggunakan metode pembayaran lokal",
    cta: "Lihat lainnya",
  },
  device: {
    heading: "Investasi di mana saja, dengan perangkat apa pun",
    mobileApps: "Aplikasi Mobile",
    webVersion: "Versi Web",
    webPlatform: "Platform Web",
    open: "Buka",
    openWebPlatform: "Buka Platform Web",
  },
  charity: {
    heading: "Kami berinvestasi lebih dari sekadar trading. Stockity aktif secara sosial",
    text: "Kami mendukung perlindungan lingkungan, kesejahteraan hewan, olahraga, dan banyak inisiatif lainnya. Baca selengkapnya untuk melihat bagaimana kami berkontribusi pada komunitas",
    textMobile: "Kami mendukung perlindungan lingkungan, kesejahteraan hewan, olahraga, dan banyak inisiatif lainnya.",
    cta: "Pelajari lebih lanjut",
  },
  partner: {
    heading: "Stockity adalah platform online berlisensi dan teregulasi",
    cta: "Pelajari lebih lanjut",
  },
  reviews: {
    heading: "Jutaan pengguna sudah mempercayai kami",
  },
  faq: {
    heading: "FAQ",
    items: [
      {
        question: "Bagaimana cara memulai?",
        type: "steps" as const,
        steps: [
          "Daftar dalam hitungan detik",
          "Deposit dengan mudah",
          "Belajar secara gratis",
          "Prediksi pergerakan aset",
          "Tarik kapan saja",
        ],
      },
      {
        question: "Seberapa cepat penarikan saya diproses?",
        type: "highlight" as const,
        before: "Semua permintaan diproses dalam ",
        highlight: "1-2 jam",
        after: ". Tim keuangan kami bekerja sepanjang waktu untuk memastikan transaksi yang cepat dan aman.",
      },
      {
        question: "Bisakah saya berlatih terlebih dahulu?",
        type: "highlight" as const,
        before: "Ya! Anda mendapatkan ",
        highlight: "akun demo $10.000",
        after: " sepenuhnya gratis. Gunakan untuk berlatih strategi trading, menjelajahi aset, dan menguji strategi \u2014 semua tanpa risiko uang nyata.",
      },
      {
        question: "Apakah ada acara khusus?",
        type: "plain" as const,
        text: "Tentu saja! Berlangganan email kami untuk mendapatkan notifikasi tentang aktivitas baru yang dapat Anda ikuti. Kami secara rutin mengadakan turnamen, kontes, dan promosi eksklusif untuk pengguna kami.",
      },
    ],
  },
  join: {
    headingStart: "Bergabunglah dengan ",
    headingHighlight: "3,5+ juta",
    headingEnd: " investor yang menggunakan Stockity",
    headingMobile1: "Bergabunglah dengan ",
    headingMobile2: "3,5+\u00a0juta",
    headingMobile3: " investor yang menggunakan",
    cta: "Mulai Sekarang",
  },
  football: {
    heading: "Pertarungan Sepak Bola",
    text: "Perdagangkan 5 indeks regional dengan profitabilitas lebih tinggi dan bersaing untuk posisi teratas",
    cta: "Coba Sekarang!",
    risk: "Peringatan risiko: modal Anda mungkin berisiko",
  },
  earth: {
    label: "pengguna dari 130+ negara mempercayai kami",
  },
  footer: {
    contacts: "Kontak",
    disclaimer:
      "Stockity hanya menyediakan layanan untuk pengguna dewasa. Trading online dapat melibatkan risiko keuangan yang signifikan termasuk risiko kehilangan semua dana di akun trading Anda. Harap perkirakan semua risiko dan dapatkan saran dari penasihat keuangan independen sebelum menggunakan layanan Stockity. Kami juga merekomendasikan untuk tidak menginvestasikan dana yang tidak mampu Anda tanggung kerugiannya. Stockity tidak bertanggung jawab atas kerugian apa pun (langsung, tidak langsung, atau konsekuensial) yang diakibatkan oleh tindakan klien di platform.",
    copyright: "\u00a9 2022-2026 Stockity. Semua hak dilindungi",
    links: [
      { label: "Tentang kami", href: "/id/about" },
      { label: "Program afiliasi", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Client Agreement", href: "/agreement" },
      { label: "AML policy", href: "/aml-policy" },
    ],
  },
};

export const translations: Record<Locale, typeof en> = { en, id };

export function getT(locale: Locale) {
  return translations[locale];
}
