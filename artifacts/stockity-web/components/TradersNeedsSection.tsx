export default function TradersNeedsSection() {
  const stats = [
    { number: "3.5M+", label: "investors worldwide" },
    { number: "140+", label: "assets to trade" },
    { number: "$10", label: "minimum deposit" },
    { number: "170+", label: "countries available" },
  ];

  return (
    <section style={{ background: "#0d0d0d", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 26px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: "clamp(28px,3.5vw,52px)",
              fontWeight: 900,
              color: "#F4F4F6",
              lineHeight: 1.15,
              marginBottom: 16,
              maxWidth: 640,
            }}
          >
            A platform designed with{" "}
            <span style={{ color: "#0C8DF8" }}>users in mind</span>
          </h2>
          <p style={{ color: "#82889B", fontSize: "clamp(14px,1.2vw,18px)", marginBottom: 40 }}>
            Explore the market at your own pace
          </p>

          {/* Rating row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 56,
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "clamp(40px,4vw,60px)",
                  fontWeight: 900,
                  color: "#F4F4F6",
                  lineHeight: 1,
                }}
              >
                4.8
              </span>
              <p style={{ color: "#82889B", fontSize: 14, marginTop: 4 }}>Rating</p>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#FFC107">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              width: "100%",
              maxWidth: 900,
              marginBottom: 48,
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(32px,3vw,44px)",
                    fontWeight: 900,
                    color: "#F4F4F6",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {stat.number}
                </p>
                <p style={{ fontSize: 14, color: "#82889B" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="#" className="btn-primary" style={{ fontSize: 16, padding: "14px 40px" }}>
            Start now
          </a>
        </div>
      </div>
    </section>
  );
}
