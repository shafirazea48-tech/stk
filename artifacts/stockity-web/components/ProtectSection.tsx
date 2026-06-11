import Image from "next/image";

export default function ProtectSection() {
  return (
    <section style={{ background: "#000", padding: "80px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 26px" }}>
        <h2
          style={{
            fontSize: "clamp(28px,3vw,44px)",
            fontWeight: 900,
            color: "#F4F4F6",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Everything you want in a platform
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {/* Card 1: Fund protection */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.07)",
              minHeight: 380,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/images/stockity/src/core/images/protect/card_3_desktop-467ada6d994d3f16.webp"
                alt="Fund protection"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
                }}
              />
            </div>
            <div style={{ position: "relative", zIndex: 10, padding: "32px 28px" }}>
              <h3
                style={{
                  fontSize: "clamp(20px,2vw,28px)",
                  fontWeight: 900,
                  color: "#F4F4F6",
                  lineHeight: 1.25,
                }}
              >
                High-level{" "}
                <span style={{ color: "#0C8DF8" }}>fund protection</span>
                {" "}and transactions
              </h3>
            </div>
          </div>

          {/* Card 2: No hidden fees */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.07)",
              minHeight: 380,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 28,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 70% 30%, rgba(12,141,248,0.08) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            {/* Chart */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 16,
                position: "relative",
                zIndex: 1,
              }}
            >
              <svg viewBox="0 0 320 180" fill="none" style={{ width: "100%", maxWidth: 320 }}>
                {[0, 45, 90, 135, 180].map((y) => (
                  <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                ))}
                <path
                  d="M0 160 L40 125 L80 138 L130 90 L170 105 L210 55 L260 68 L300 22 L320 35 L320 180 L0 180Z"
                  fill="url(#pg)"
                  opacity="0.35"
                />
                <path
                  d="M0 160 L40 125 L80 138 L130 90 L170 105 L210 55 L260 68 L300 22 L320 35"
                  stroke="#0C8DF8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {[[210, 55], [300, 22]].map(([cx, cy]) => (
                  <circle key={`${cx},${cy}`} cx={cx} cy={cy} r="5" fill="#0C8DF8"/>
                ))}
                <defs>
                  <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#0C8DF8"/>
                    <stop offset="1" stopColor="#0C8DF8" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontSize: "clamp(20px,2vw,28px)",
                  fontWeight: 900,
                  color: "#F4F4F6",
                  lineHeight: 1.25,
                }}
              >
                Transparent investing
                <br />
                <span style={{ color: "#0C8DF8" }}>with no hidden fees</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
