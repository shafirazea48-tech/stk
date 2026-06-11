import Image from "next/image";

const features = [
  {
    text: "Intuitive interface",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" fill="white" opacity="0.9"/>
        <rect x="11" y="2" width="7" height="7" rx="1.5" fill="white" opacity="0.5"/>
        <rect x="2" y="11" width="7" height="7" rx="1.5" fill="white" opacity="0.5"/>
        <rect x="11" y="11" width="7" height="7" rx="1.5" fill="white" opacity="0.9"/>
      </svg>
    ),
  },
  {
    text: "140+ assets",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 14l4-5 3 3 4-7 5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
      </svg>
    ),
  },
  {
    text: "Secure transactions",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 5.5v5c0 4 3 7 7 7.5 4-.5 7-3.5 7-7.5v-5L10 2z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" fill="white" fillOpacity="0.15" opacity="0.9"/>
        <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: "Licensed and regulated",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="1.6" opacity="0.9"/>
        <path d="M10 6.5v3.5l2 2" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.9"/>
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#000",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/stockity/src/core/images/trade-smart/main_section_desktop-2e3a00c62a20cf21.webp"
          alt="Trading platform"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Very subtle left darkening for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      {/* Main content — centered column */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 40px",
          maxWidth: 1440,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(40px, 5.5vw, 80px)",
            fontWeight: 900,
            color: "#ebebeb",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(24px, 2.5vw, 36px)",
          }}
        >
          Stockity.
          <br />
          Making investing clear
        </h1>

        {/* CTA Button */}
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(90deg,#0990ff,#0C8DF8)",
            color: "#fff",
            fontWeight: 800,
            fontSize: "clamp(15px,1.2vw,18px)",
            borderRadius: 12,
            padding: "clamp(14px,1.2vw,18px) clamp(40px,5vw,80px)",
            textDecoration: "none",
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
            marginBottom: "clamp(32px,3.5vw,56px)",
            minWidth: "clamp(220px,20vw,320px)",
          }}
        >
          Register Now
        </a>

        {/* Feature chips — 4 in a row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(6px,0.5vw,8px)",
            justifyContent: "center",
            width: "100%",
            maxWidth: 900,
          }}
        >
          {features.map((f) => (
            <div
              key={f.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: "10px 16px",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                {f.icon}
              </span>
              <span
                style={{
                  fontSize: "clamp(12px,0.95vw,14px)",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {f.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
