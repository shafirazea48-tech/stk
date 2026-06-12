export default function FootballBannerSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "clamp(280px, 28vw, 520px)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image with brightness boost */}
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
          filter: "brightness(1.55) saturate(1.15)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

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
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}>
          Football Power Battle
        </h2>

        <p style={{
          fontSize: "clamp(13px, 1.1vw, 18px)",
          color: "rgba(255,255,255,0.9)",
          lineHeight: 1.6,
          marginBottom: "clamp(18px, 2.3vw, 40px)",
          maxWidth: "clamp(260px, 30vw, 500px)",
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
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
          color: "rgba(255,255,255,0.5)",
        }}>
          Risk warning: your capital might be at risk
        </p>
      </div>
    </section>
  );
}
