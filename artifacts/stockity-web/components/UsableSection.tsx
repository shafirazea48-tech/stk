export default function UsableSection() {
  const items = [
    {
      title: "Easy to use",
      desc: "Clean interface designed for both beginners and professionals",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#0C8DF8" fillOpacity="0.12"/>
          <path d="M10 16h12M16 10v12" stroke="#0C8DF8" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Always reliable",
      desc: "99.9% uptime so you never miss a trading opportunity",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#0C8DF8" fillOpacity="0.12"/>
          <path d="M9 16l5 5 9-9" stroke="#0C8DF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Fully secure",
      desc: "Bank-grade encryption protecting all your transactions",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#0C8DF8" fillOpacity="0.12"/>
          <path d="M16 8l-8 3.5v6c0 5 3.5 9 8 10.5 4.5-1.5 8-5.5 8-10.5v-6L16 8z" stroke="#0C8DF8" strokeWidth="1.8" strokeLinejoin="round" fill="#0C8DF8" fillOpacity="0.1"/>
          <path d="M13 16l2.5 2.5 4-4" stroke="#0C8DF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background: "#000",
        padding: "80px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(12,141,248,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 26px",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "clamp(12px,1vw,14px)",
            fontWeight: 700,
            color: "#0C8DF8",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Usable, reliable, secure.
        </p>
        <h2
          style={{
            fontSize: "clamp(32px,4vw,56px)",
            fontWeight: 900,
            color: "#F4F4F6",
            lineHeight: 1.1,
            marginBottom: 48,
          }}
        >
          Works just as you expect
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            maxWidth: 900,
            margin: "0 auto 48px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {item.icon}
              <h3
                style={{ fontSize: 18, fontWeight: 800, color: "#F4F4F6" }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: "#82889B", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <a href="#" className="btn-primary" style={{ fontSize: 16, padding: "14px 40px" }}>
          Start trading
        </a>
      </div>
    </section>
  );
}
