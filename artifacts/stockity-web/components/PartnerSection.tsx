import Image from "next/image";

export default function PartnerSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#000" }}>
      <div
        style={{
          position: "relative",
          minHeight: "clamp(380px, 50vw, 640px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/stockity/src/core/images/partner/section_partner_desktop-2b5dcbed303e6b5a.webp"
            alt="Stockity licensed platform"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.2) 100%)",
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
                <path
                  d="M7 1l-6 3v3.5c0 3.5 2.6 6.5 6 7.5 3.4-1 6-4 6-7.5V4L7 1z"
                  fill="rgba(12,141,248,0.25)"
                  stroke="#0C8DF8"
                  strokeWidth="1"
                />
                <path d="M4.5 7l2 2 3.5-3.5" stroke="#0C8DF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0C8DF8" }}>Regulated &amp; Licensed</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px,3.5vw,52px)",
                fontWeight: 900,
                color: "#F4F4F6",
                lineHeight: 1.15,
                marginBottom: 32,
              }}
            >
              Stockity is a{" "}
              <span style={{ color: "#0C8DF8" }}>licensed and regulated</span>{" "}
              online platform
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginBottom: 36,
              }}
            >
              {[
                { icon: "🏛️", text: "Official license", sub: "Reg.No. 700726" },
                { icon: "🌍", text: "Global presence", sub: "170+ countries" },
                { icon: "🔐", text: "Segregated funds", sub: "Client protection" },
                { icon: "📋", text: "AML compliant", sub: "Full compliance" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    background: "rgba(22,22,22,0.8)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#F4F4F6" }}>{item.text}</p>
                    <p style={{ fontSize: 12, color: "#82889B" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
