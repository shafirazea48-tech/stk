export default function FootballBannerSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundImage: "url('/images/football-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "clamp(280px, 28vw, 520px)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle left-side dark gradient so text is readable */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(5,15,50,0.72) 0%, rgba(5,15,50,0.45) 45%, transparent 75%)",
        pointerEvents: "none",
      }}/>

      {/* Text content — left aligned */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(32px, 3.7vw, 64px) clamp(24px, 3.7vw, 64px)",
          maxWidth: "clamp(320px, 42vw, 700px)",
        }}
      >
        <p style={{
          fontSize: "clamp(11px, 0.97vw, 16px)",
          fontWeight: 700,
          color: "#4db8ff",
          letterSpacing: "0.06em",
          marginBottom: "clamp(10px, 1.2vw, 20px)",
        }}>
          10.06 – 24.06
        </p>

        <h2 style={{
          fontSize: "clamp(28px, 3.24vw, 58px)",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.1,
          marginBottom: "clamp(10px, 1.2vw, 22px)",
          fontFamily: "'Nunito Sans', sans-serif",
        }}>
          Football Power Battle
        </h2>

        <p style={{
          fontSize: "clamp(13px, 1.1vw, 18px)",
          color: "rgba(255,255,255,0.8)",
          lineHeight: 1.6,
          marginBottom: "clamp(18px, 2.3vw, 40px)",
          maxWidth: "clamp(260px, 30vw, 500px)",
        }}>
          Trade 5 regional indices with boosted profitability and compete for the top rankings
        </p>

        <a
          href="#"
          className="btn-primary"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            display: "inline-block",
            minWidth: "clamp(100px, 12vw, 180px)",
          }}
        >
          Try it!
        </a>

        <p style={{
          marginTop: "clamp(8px, 1vw, 16px)",
          fontSize: "clamp(10px, 0.69vw, 12px)",
          color: "rgba(255,255,255,0.35)",
        }}>
          Risk warning: your capital might be at risk
        </p>
      </div>
    </section>
  );
}
