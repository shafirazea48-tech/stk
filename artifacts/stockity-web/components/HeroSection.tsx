"use client";

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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* Desktop background image */}
      <div
        className="hero-bg"
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

      {/* Content row — trade-smart__content: flex row, justify-content: center, gap: 3.7037vw */}
      <div
        className="hero-content"
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
        {/* Left column — trade-smart__content_left */}
        <div
          className="hero-content-left"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "62.963vw",
            width: "100%",
            paddingTop: "5.6713vw",
            paddingLeft: "2.02546vw",
            paddingRight: "0",
          }}
        >
          {/* Title — trade-smart__title: text-align: center, 5.09259vw, line-height: 5.09259vw */}
          <h1
            className="hero-title"
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 900,
              fontSize: "5.09259vw",
              lineHeight: "5.09259vw",
              margin: 0,
            }}
          >
            Stockity.
            <br />
            Making investing clear
          </h1>

          {/* CTA button — trade-smart__btn: margin-top: 2.77778vw */}
          <div className="hero-btn-wrap" style={{ marginTop: "2.77778vw" }}>
            <a
              href="#"
              className="hero-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(90deg, #0990ff 0%, #00eaff 100%)",
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

          {/* Feature chips — trade-smart__cards */}
          <div
            className="hero-chips"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.462963vw",
              width: "100%",
              marginTop: "4.62963vw",
              padding: "0 0.462963vw",
            }}
          >
            {features.map((f) => (
              <div
                key={f.text}
                className="hero-chip"
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
                <span
                  className="hero-chip-icon"
                  style={{ display: "flex", alignItems: "center", flexShrink: 0, width: "1.38889vw", height: "1.38889vw" }}
                >
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
                  className="hero-chip-text"
                  style={{
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    color: "#ebebeb",
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

        {/* Right column — trade-smart__content_right: contains form card + padding-right: 6.94444vw */}
        <div
          className="hero-content-right"
          style={{
            boxSizing: "border-box",
            paddingRight: "6.94444vw",
            flexShrink: 0,
            paddingTop: "5.6713vw",
          }}
        >
          {/* trade-smart__form: bg #151723, width: 392px, border-radius: 1.38889vw, padding: 2.77778vw 1.38889vw */}
          <div
            className="hero-form"
            style={{
              boxSizing: "border-box",
              background: "#151723",
              borderRadius: "1.38889vw",
              width: 392,
              padding: "2.77778vw 1.38889vw",
              display: "flex",
              flexDirection: "column",
              gap: "1.11111vw",
            }}
          >
            {/* Form title — trade-smart__form_title: text-align center, margin-bottom 2.31481vw */}
            <p
              style={{
                textAlign: "center",
                color: "#f4f4f6",
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1.38889vw",
                lineHeight: "1.85185vw",
                marginBottom: "1.2037vw",
              }}
            >
              Create an account
            </p>

            {/* Country selector */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                gap: "0.694444vw",
                background: "#1e2438",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "0.694444vw",
                padding: "0.694444vw 0.925926vw",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.2vw" }}>🇮🇩</span>
              <span style={{ color: "#f4f4f6", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.972222vw", flex: 1 }}>Indonesia</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Email input */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                background: "#1e2438",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "0.694444vw",
                padding: "0.694444vw 0.925926vw",
              }}
            >
              <input
                type="email"
                placeholder="Email"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#f4f4f6",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.972222vw",
                  lineHeight: "1.38889vw",
                }}
              />
            </div>

            {/* Password input */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                background: "#1e2438",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "0.694444vw",
                padding: "0.694444vw 0.925926vw",
              }}
            >
              <input
                type="password"
                placeholder="Password"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#f4f4f6",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.972222vw",
                  lineHeight: "1.38889vw",
                }}
              />
              <EyeIcon />
            </div>

            {/* Terms checkbox */}
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.462963vw",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                style={{
                  marginTop: "0.185185vw",
                  width: "0.972222vw",
                  height: "0.972222vw",
                  accentColor: "#0c8df8",
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              />
              <span style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.833333vw", lineHeight: "1.11111vw" }}>
                I agree to the{" "}
                <a href="#" style={{ color: "#0c8df8", textDecoration: "none" }}>Terms of Service</a>
                {" "}and{" "}
                <a href="#" style={{ color: "#0c8df8", textDecoration: "none" }}>Privacy Policy</a>
              </span>
            </label>

            {/* Register button */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.462963vw",
                background: "linear-gradient(90deg, #0990ff 0%, #00eaff 100%)",
                color: "#fff",
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.972222vw",
                lineHeight: "1.38889vw",
                border: "none",
                borderRadius: "0.694444vw",
                padding: "0.925926vw 1.38889vw",
                cursor: "pointer",
                width: "100%",
                boxShadow: "0 10px 60px 0 rgba(93,139,192,.3)",
                marginTop: "0.462963vw",
              }}
            >
              <img
                src="/images/stockity/src/core/images/register-arrow.svg"
                alt=""
                width={16}
                height={16}
                style={{ flexShrink: 0 }}
              />
              Register
            </button>

            {/* Login link */}
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.833333vw", lineHeight: "1.11111vw" }}>
              Already have an account?{" "}
              <a href="#" style={{ color: "#0c8df8", textDecoration: "none" }}>Sign in</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Mobile: hide right column (form), bg on content_left */
        @media (max-width: 767px) {
          .hero-bg { display: none !important; }
          .hero-content {
            flex-direction: column !important;
            gap: 0 !important;
            padding-top: 0 !important;
            min-height: 167.778vw !important;
          }
          .hero-content-left {
            background-image: url('/images/stockity/src/core/images/trade-smart/main_section_mobile-707d361f38e2d6c3.webp') !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            max-width: 100% !important;
            min-height: 167.778vw !important;
            padding-top: 55.5556vw !important;
            padding-left: 4.44444vw !important;
            padding-right: 4.44444vw !important;
          }
          .hero-content-right { display: none !important; }
          .hero-form { display: none !important; }
          .hero-title {
            font-size: 11.6667vw !important;
            line-height: 11.6667vw !important;
          }
          .hero-btn {
            width: 100% !important;
            font-size: 5.55556vw !important;
            padding: 2.77778vw 4vw !important;
            border-radius: 2.22222vw !important;
            min-width: unset !important;
          }
          .hero-btn-wrap { width: 100%; }
          .hero-chips {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.22222vw !important;
            margin-top: 8.88889vw !important;
            padding: 0 !important;
          }
          .hero-chip {
            flex: unset !important;
            height: 17.7778vw !important;
            border-radius: 3.33333vw !important;
            gap: 2.22222vw !important;
            padding: 3.33333vw 4.44444vw !important;
            justify-content: flex-start !important;
          }
          .hero-chip-icon { width: 6.66667vw !important; height: 6.66667vw !important; }
          .hero-chip-icon img { width: 6.66667vw !important; height: 6.66667vw !important; }
          .hero-chip-text {
            font-size: 3.33333vw !important;
            line-height: 4.44444vw !important;
            text-align: left !important;
            white-space: normal !important;
            max-width: 26.6667vw !important;
          }
        }

        /* Tablet 768px–1324px: chips in 2-col grid */
        @media (min-width: 768px) and (max-width: 1324px) {
          .hero-chips { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; }
          .hero-chip { flex: unset !important; }
        }

        /* Desktop ≥1325px: chips as flex row, flex:1 per chip */
        @media (min-width: 1325px) {
          .hero-chips { display: flex !important; flex-wrap: nowrap !important; }
          .hero-chip { flex: 1 1 0 !important; width: auto !important; min-width: 0 !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
