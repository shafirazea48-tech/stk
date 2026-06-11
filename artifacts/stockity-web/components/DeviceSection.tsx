import Image from "next/image";

export default function DeviceSection() {
  return (
    <section style={{ background: "#000", padding: "80px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 26px" }}>
        <h2
          style={{
            fontSize: "clamp(28px,3.5vw,48px)",
            fontWeight: 900,
            color: "#F4F4F6",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: 56,
          }}
        >
          Invest wherever you want, on{" "}
          <span style={{ color: "#0C8DF8" }}>any device</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {/* Mobile App card */}
          <div
            style={{
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "32px 28px" }}>
              <h3
                style={{
                  fontSize: "clamp(20px,1.8vw,26px)",
                  fontWeight: 900,
                  color: "#F4F4F6",
                  marginBottom: 24,
                }}
              >
                Mobile Apps
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#111",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    padding: "10px 16px",
                    textDecoration: "none",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.5 12.5c0-2.8 2.2-3.3 2.3-3.4-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-.9C6.2 7.2 4.2 8.2 3.2 10c-2.1 3.7-.5 9.1 1.5 12.1 1 1.4 2.1 3 3.6 3 1.5-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.9s2.6-1.5 3.5-2.9c1.1-1.6 1.5-3.2 1.6-3.3-.1 0-3.3-1.3-3.3-4.4z"/>
                    <path d="M15.3 5.4C16 4.5 16.5 3.2 16.3 2c-1.1.1-2.5.8-3.3 1.7-.7.8-1.3 2.1-1.1 3.2 1.2.1 2.5-.6 3.4-1.5z"/>
                  </svg>
                  <div>
                    <p style={{ fontSize: 10, color: "#82889B", lineHeight: 1 }}>Download on the</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#F4F4F6" }}>App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#111",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    padding: "10px 16px",
                    textDecoration: "none",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 1.7L13.8 12 3.6 22.3c-.5-.3-.9-1-.9-2.2V3.9c0-1.1.4-1.9.9-2.2z" fill="#00C853"/>
                    <path d="M14.8 13l2.2 2.2-10.9 6.2 8.7-8.4z" fill="#FFCA28"/>
                    <path d="M20 10.7c.7.4 1.1 1 1.1 1.6s-.4 1.2-1.1 1.6l-1.9 1.1-2.3-2.3 2.3-2.3 1.9 1.1z" fill="#FF5722"/>
                    <path d="M6.1 2.6l10.9 6.2L14.8 11l-8.7-8.4z" fill="#4FC3F7"/>
                  </svg>
                  <div>
                    <p style={{ fontSize: 10, color: "#82889B", lineHeight: 1 }}>Get it on</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#F4F4F6" }}>Google Play</p>
                  </div>
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "#fff",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/images/stockity/src/core/images/device/qr-code_en-12d10e19e65f695a.svg"
                    alt="QR Code"
                    width={40}
                    height={40}
                  />
                </div>
                <a href="#" style={{ fontSize: 13, color: "#0C8DF8", textDecoration: "none", fontWeight: 600 }}>
                  Download Android APK &rsaquo;
                </a>
              </div>
            </div>
            <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
              <Image
                src="/images/stockity/src/core/images/device/mob_desktop-873a8cb8ab00908e.webp"
                alt="Stockity mobile app"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Web Platform card */}
          <div
            style={{
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "32px 28px" }}>
              <h3
                style={{
                  fontSize: "clamp(20px,1.8vw,26px)",
                  fontWeight: 900,
                  color: "#F4F4F6",
                  marginBottom: 12,
                }}
              >
                Web Platform
              </h3>
              <p style={{ color: "#82889B", fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>
                Access full trading features directly in your browser — no downloads needed
              </p>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "10px 20px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#F4F4F6",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#0C8DF8" strokeWidth="1.4"/>
                  <ellipse cx="8" cy="8" rx="2.5" ry="6" stroke="#0C8DF8" strokeWidth="1.1"/>
                  <path d="M2 8h12" stroke="#0C8DF8" strokeWidth="1.1"/>
                </svg>
                Open Web Platform
              </a>
            </div>
            <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
              <Image
                src="/images/stockity/src/core/images/device/web_desktop-358cd5506175c9cf.webp"
                alt="Stockity web platform"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
