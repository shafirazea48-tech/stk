import Image from "next/image";

const features = [
  {
    text: "Intuitive interface",
    icon: "/images/stockity/src/core/images/trade-smart/icon_1.svg",
  },
  {
    text: "140+ assets",
    icon: "/images/stockity/src/core/images/trade-smart/icon_2.svg",
  },
  {
    text: "Secure transactions",
    icon: "/images/stockity/src/core/images/trade-smart/icon_3.svg",
  },
  {
    text: "Licensed and regulated",
    icon: null,
  },
];

const LicensedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* Full-section background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/images/stockity/src/core/images/trade-smart/main_section_desktop-2e3a00c62a20cf21.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "80.3819vw",
        }}
      />

      {/* Hero content — left column, matching original max-width: 62.963vw */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "3.7037vw",
          paddingTop: "6.48148vw",
          boxSizing: "border-box",
          minHeight: "80.3819vw",
        }}
      >
        {/* Left column */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "62.963vw",
            width: "100%",
            paddingTop: "5.6713vw",
            paddingLeft: "2.02546vw",
            paddingRight: "2.02546vw",
          }}
        >
          {/* Title — exact 5.09259vw from lp-ds-font-black-3xl */}
          <h1
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "5.09259vw",
              lineHeight: "5.09259vw",
            }}
          >
            Stockity.
            <br />
            Making investing clear
          </h1>

          {/* CTA button — btn-base style, margin-top: 2.77778vw */}
          <div style={{ marginTop: "2.77778vw" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(90deg, #0990ff 0%, #00d7eb 100%)",
                color: "#fff",
                fontWeight: 700,
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1.15741vw",
                lineHeight: "1.38889vw",
                borderRadius: "0.925926vw",
                padding: "1.11111vw 4.62963vw",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: "0 10px 60px 0 rgba(93,139,192,.5)",
                minWidth: "20vw",
              }}
            >
              Register Now
            </a>
          </div>

          {/* Feature chips — margin-top: 4.62963vw, display flex at ≥1325px */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.462963vw",
              width: "100%",
              marginTop: "4.62963vw",
              padding: "0 0.462963vw",
              justifyContent: "center",
            }}
          >
            {features.map((f) => (
              <div
                key={f.text}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.462963vw",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "0.694444vw",
                  height: "2.77778vw",
                  padding: "0.694444vw 0.925926vw",
                  flex: "1 1 0",
                  justifyContent: "center",
                  minWidth: 0,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", flexShrink: 0, width: "1.38889vw", height: "1.38889vw" }}>
                  {f.icon ? (
                    <img
                      src={f.icon}
                      alt=""
                      style={{ width: "1.38889vw", height: "1.38889vw", minWidth: 14 }}
                    />
                  ) : (
                    <LicensedIcon />
                  )}
                </span>
                <span
                  style={{
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    color: "#f4f4f6",
                    fontWeight: 700,
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.833333vw",
                    lineHeight: "1.11111vw",
                  }}
                >
                  {f.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <style>{`
        @media (max-width: 767px) {
          .hero-content-left {
            max-width: 100% !important;
            padding-top: 55.5556vw !important;
            padding-left: 4.44444vw !important;
            padding-right: 4.44444vw !important;
          }
          .hero-title {
            font-size: 11.6667vw !important;
            line-height: 11.6667vw !important;
          }
          .hero-btn {
            width: 100% !important;
            font-size: 5.55556vw !important;
            padding: 2.77778vw 4vw !important;
            border-radius: 2.22222vw !important;
          }
          .hero-chips {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.22222vw !important;
            margin-top: 8.88889vw !important;
          }
          .hero-chip {
            height: 17.7778vw !important;
            border-radius: 3.33333vw !important;
            gap: 2.22222vw !important;
            padding: 3.33333vw 4.44444vw !important;
          }
          .hero-chip-icon {
            width: 6.66667vw !important;
            height: 6.66667vw !important;
          }
          .hero-chip-text {
            font-size: 3.33333vw !important;
            line-height: 4.44444vw !important;
            text-align: left !important;
            white-space: normal !important;
            max-width: 26.6667vw !important;
          }
        }
      `}</style>
    </section>
  );
}
