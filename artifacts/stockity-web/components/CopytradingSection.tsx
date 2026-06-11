import Image from "next/image";

export default function CopytradingSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#000" }}>
      <div
        style={{
          position: "relative",
          minHeight: "clamp(420px, 55vw, 720px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/stockity/src/core/images/copytrading/section_copytrading_desktop-7481b3aa75b4535e.webp"
            alt="Copy trading"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.2) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1440,
            margin: "0 auto",
            padding: "80px 26px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(12,141,248,0.12)",
                border: "1px solid rgba(12,141,248,0.25)",
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1l1.5 3 3.5.5-2.5 2.5.6 3.5L7 9l-3.1 1.5.6-3.5L2 4.5 5.5 4 7 1z" fill="#0C8DF8"/>
              </svg>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0C8DF8" }}>Copy Trading</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px,3.5vw,52px)",
                fontWeight: 900,
                color: "#F4F4F6",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Learn from the{" "}
              <span style={{ color: "#0C8DF8" }}>experts</span>
            </h2>
            <p
              style={{
                color: "#82889B",
                fontSize: "clamp(14px,1.2vw,18px)",
                lineHeight: 1.65,
                marginBottom: 36,
                maxWidth: 440,
              }}
            >
              Study successful investment strategies and apply them to your routine
            </p>

            <a href="#" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
              Start now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
