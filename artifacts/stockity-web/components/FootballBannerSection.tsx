import { getT, Locale } from "@/lib/i18n/translations";

export default function FootballBannerSection({ locale }: { locale?: Locale }) {
  const t = getT(locale ?? "en");
  return (
    <div style={{ padding: "0 3.7037vw", boxSizing: "border-box" }}>

      {/* ── DESKTOP ── */}
      <section
        className="hidden md:flex"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: "1.5vw",
          minHeight: "clamp(280px, 28vw, 520px)",
          boxSizing: "border-box",
          alignItems: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/football-bg.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "clamp(32px, 3.7vw, 64px) clamp(24px, 3.7vw, 64px)",
            maxWidth: "clamp(320px, 42vw, 700px)",
          }}
        >
          <p style={{ fontSize: "clamp(11px,0.97vw,16px)", fontWeight: 700, color: "#4db8ff", letterSpacing: "0.06em", marginBottom: "clamp(10px,1.2vw,20px)" }}>
            10.06 – 24.06
          </p>
          <h2 style={{ fontSize: "clamp(28px,3.24vw,58px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "clamp(10px,1.2vw,22px)", fontFamily: "'Nunito Sans',sans-serif", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            {t.football.heading}
          </h2>
          <p style={{ fontSize: "clamp(13px,1.1vw,18px)", color: "rgba(255,255,255,0.9)", lineHeight: 1.6, marginBottom: "clamp(18px,2.3vw,40px)", maxWidth: "clamp(260px,30vw,500px)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            {t.football.text}
          </p>
          <a href="/go" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontFamily: "'Nunito Sans',sans-serif", display: "inline-block", minWidth: "clamp(100px,12vw,180px)" }}>
            {t.football.cta}
          </a>
          <p style={{ marginTop: "clamp(8px,1vw,16px)", fontSize: "14px", color: "#ffffff" }}>
            {t.football.risk}
          </p>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section
        className="flex md:hidden"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: "5vw",
          boxSizing: "border-box",
          flexDirection: "column",
          minHeight: "155vw",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/football-mobile-bg.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 60%",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        <div style={{ padding: "8vw 6vw 0", position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ fontSize: "3.8vw", fontWeight: 700, color: "#4db8ff", letterSpacing: "0.06em", marginBottom: "3vw" }}>
            10.06 – 24.06
          </p>
          <h2 style={{ fontSize: "7vw", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "4vw", fontFamily: "'Nunito Sans',sans-serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)", whiteSpace: "nowrap" }}>
            {t.football.heading}
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.55, marginBottom: "6vw", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
            {t.football.text}
          </p>
          <a
            href="/go"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontFamily: "'Nunito Sans',sans-serif", display: "block", textAlign: "center", width: "100%", boxSizing: "border-box" }}
          >
            {t.football.cta}
          </a>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "18vw", background: "linear-gradient(to bottom, transparent 0%, rgba(5,10,30,0.75) 100%)", zIndex: 1, pointerEvents: "none" }} />

        <p style={{ position: "absolute", bottom: "4vw", left: 0, right: 0, fontSize: "14px", color: "rgba(255,255,255,0.65)", textAlign: "center", zIndex: 2 }}>
          {t.football.risk}
        </p>
      </section>

    </div>
  );
}
