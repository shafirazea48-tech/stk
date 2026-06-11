export default function JoinSection() {
  return (
    <section style={{ background: "#0d0d0d", padding: "80px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 26px" }}>
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            background: "#161616",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "80px 32px",
            textAlign: "center",
          }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(12,141,248,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,56px)",
                fontWeight: 900,
                color: "#F4F4F6",
                lineHeight: 1.15,
                marginBottom: 40,
                maxWidth: 640,
                margin: "0 auto 40px",
              }}
            >
              Join the{" "}
              <span style={{ color: "#0C8DF8" }}>3,5+ million investors</span>{" "}
              using Stockity
            </h2>

            <a
              href="#"
              className="btn-primary"
              style={{ fontSize: 18, padding: "18px 56px", borderRadius: 14 }}
            >
              Start Now
            </a>

            <div
              style={{
                marginTop: 56,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "24px 56px",
              }}
            >
              {[
                { value: "3.5M+", label: "Active investors" },
                { value: "$10", label: "Min. deposit" },
                { value: "1-2h", label: "Withdrawal time" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "clamp(24px,2.5vw,36px)", fontWeight: 900, color: "#F4F4F6" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 13, color: "#82889B", marginTop: 4 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
