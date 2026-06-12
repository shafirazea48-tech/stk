import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Pelajari tentang Stockity — platform trading berlisensi dan teregulasi yang melayani 3,5 juta investor di 170+ negara dengan trading yang transparan, adil, dan aman.",
  alternates: {
    canonical: "/id/about",
    languages: {
      en: "/about",
      id: "/id/about",
      "x-default": "/about",
    },
  },
  openGraph: {
    title: "Tentang Stockity",
    description:
      "Pelajari tentang Stockity — platform trading berlisensi dan teregulasi yang melayani 3,5 juta investor di 170+ negara.",
    url: "/id/about",
    locale: "id_ID",
  },
};

export default function AboutPageId() {
  return (
    <>
      <Header locale="id" />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#0e1120",
          paddingTop: "calc(5.55556vw + 60px)",
          paddingBottom: "6.94444vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 3.70370vw",
            boxSizing: "border-box",
          }}
        >
          {/* Tentang kami */}
          <section style={{ marginBottom: "5.55556vw" }}>
            <h1
              style={{
                fontSize: "clamp(32px, 3.47222vw, 56px)",
                fontWeight: 800,
                color: "#f4f4f6",
                textAlign: "center",
                margin: "0 0 2.77778vw",
                letterSpacing: "-0.02em",
              }}
            >
              Tentang kami
            </h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.38889vw" }}>
              <p style={{ fontSize: "14px", color: "#c0c8d8", lineHeight: 1.75, margin: 0 }}>
                Selamat datang di Stockity, platform trading mutakhir yang dirancang untuk memberdayakan
                para trader dengan alat dan layanan terbaik di pasar keuangan. Di Stockity, kami berupaya
                memberikan pengalaman trading yang tak tertandingi, memastikan klien kami memiliki akses
                ke tutorial komprehensif bernilai tinggi, alat analitik terkemuka, dan dukungan sepanjang
                waktu. Kami memahami bahwa kesuksesan seorang trader bergantung pada kualitas platform
                tradingnya, itulah mengapa kami sangat menekankan penyampaian layanan berkualitas tinggi
                dan mendengarkan umpan balik para trader kami.
              </p>

              <p style={{ fontSize: "14px", color: "#c0c8d8", lineHeight: 1.75, margin: 0 }}>
                Stockity berdedikasi untuk melayani trader dari semua tingkatan, mulai dari pemula hingga
                profesional berpengalaman. Kami berkomitmen untuk menciptakan lingkungan trading yang aman
                dan teregulasi di mana klien kami dapat berkembang. Dengan mendorong komunikasi terbuka,
                kami bertujuan untuk memahami dan memenuhi kebutuhan unik setiap trader, menyediakan
                alat yang mereka butuhkan untuk sukses di dunia pasar keuangan yang dinamis.
              </p>

              <p style={{ fontSize: "14px", color: "#c0c8d8", lineHeight: 1.75, margin: 0 }}>
                Platform kami menawarkan kondisi trading yang kompetitif, termasuk akses ke berbagai
                aset keuangan dan ketentuan trading yang menguntungkan. Kami bangga menjadi mitra
                terpercaya bagi para trader di seluruh dunia, memastikan pengalaman mereka bersama
                Stockity menguntungkan dan menyenangkan.
              </p>
            </div>
          </section>

          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "0 0 5.55556vw" }} />

          {/* Regulasi */}
          <section>
            <h2
              style={{
                fontSize: "clamp(28px, 2.77778vw, 48px)",
                fontWeight: 800,
                color: "#f4f4f6",
                textAlign: "center",
                margin: "0 0 2.77778vw",
                letterSpacing: "-0.02em",
              }}
            >
              Regulasi
            </h2>

            <p style={{ fontSize: "14px", color: "#c0c8d8", lineHeight: 1.75, margin: "0 0 2.77778vw" }}>
              Untuk memperkuat komitmen kami terhadap keamanan pelanggan dan integritas pasar, Stockity
              mematuhi semua peraturan dan standar industri yang relevan. Selain itu, kami beroperasi
              dalam kemitraan dengan Trusted by Traders (TBT), badan regulasi independen dan tidak
              memihak yang berdedikasi untuk melindungi hak-hak trader. Kemitraan ini memastikan klien
              kami mendapatkan perlindungan yang lebih baik dan risiko yang diminimalkan, mengetahui
              bahwa platform kami memenuhi standar praktik trading tertinggi. Untuk informasi lebih
              lanjut tentang Trusted by Traders, silakan kunjungi{" "}
              <a
                href="https://trustedbytraders.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0c8df8", textDecoration: "none" }}
              >
                Trusted by Traders
              </a>
              .
            </p>

            <div style={{ display: "flex", justifyContent: "center", margin: "2.77778vw 0" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: "24px 40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                  <text x="50%" y="38" textAnchor="middle" fontSize="36" fontWeight="900"
                    fill="url(#tbtGradId)" fontFamily="'Nunito Sans', sans-serif">TBT</text>
                  <defs>
                    <linearGradient id="tbtGradId" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0990ff" />
                      <stop offset="1" stopColor="#00eaff" />
                    </linearGradient>
                  </defs>
                </svg>
                <span style={{ fontSize: 11, color: "#82889b", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Trusted by Traders
                </span>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: "#c0c8d8", lineHeight: 1.75, margin: 0 }}>
              Dengan memilih Stockity, Anda bermitra dengan platform yang menjunjung tinggi transparansi,
              keadilan, dan standar praktik trading tertinggi. Untuk pertanyaan apa pun, silakan hubungi
              kami di{" "}
              <a
                href="mailto:support@stockity.com"
                style={{ color: "#0c8df8", textDecoration: "none" }}
              >
                support@stockity.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer locale="id" />
    </>
  );
}
