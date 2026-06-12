"use client";

import { useState } from "react";

const features = [
  {
    text: "Intuitive interface",
    icon: "/images/stockity/src/core/images/trade-smart/icon_1.svg",
    href: "#usable",
  },
  {
    text: "140+ assets",
    icon: "/images/stockity/src/core/images/trade-smart/icon_2.svg",
    href: "#assets",
  },
  {
    text: "Secure transactions",
    icon: "/images/stockity/src/core/images/trade-smart/icon_3.svg",
    href: "#protect",
  },
  {
    text: "Licensed and regulated",
    icon: null,
    href: "#partner",
  },
];

const LicensedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

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
      {/* Background image */}
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
        }}
      />

      {/* Gradient overlay — bottom fade to black */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Content — centered */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          width: "100%",
          minHeight: "62vw",
          padding: "0 4.62963vw",
          paddingTop: "6.94444vw",
          paddingBottom: "7.40741vw",
        }}
      >
        {/* Title */}
        <h1
          className="hero-title"
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "5.09259vw",
            lineHeight: "5.55556vw",
            margin: 0,
            letterSpacing: "-0.02em",
            textShadow: "0 2px 40px rgba(0,0,0,0.4)",
          }}
        >
          Stockity.
          <br />
          <span style={{ color: "#fff" }}>Making investing clear</span>
        </h1>


        {/* CTA buttons */}
        <div
          className="hero-cta-row"
          style={{
            display: "flex",
            gap: "1.38889vw",
            alignItems: "center",
            marginTop: "3.24074vw",
          }}
        >
          <a href="#" className="btn-primary hero-btn">
            Register Now
          </a>
          <button
            onClick={() => setVideoOpen(true)}
            className="hero-btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.462963vw",
              color: "#fff",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.972222vw",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              opacity: 0.85,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
              <path d="M10 8l6 4-6 4V8z" fill="rgba(255,255,255,0.9)"/>
            </svg>
            Watch
          </button>
        </div>

        {/* Feature chips */}
        <div
          className="hero-chips"
          style={{
            display: "flex",
            gap: "0.694444vw",
            marginTop: "5.55556vw",
          }}
        >
          {features.map((f) => (
            <a
              key={f.text}
              href={f.href}
              className="hero-chip"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                gap: "0.462963vw",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "0.694444vw",
                height: "2.77778vw",
                padding: "0 0.925926vw",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <span
                className="hero-chip-icon"
                style={{ display: "flex", alignItems: "center", flexShrink: 0, width: "1.2963vw", height: "1.2963vw" }}
              >
                {f.icon ? (
                  <img src={f.icon} alt="" style={{ width: "1.2963vw", height: "1.2963vw" }} />
                ) : (
                  <LicensedIcon />
                )}
              </span>
              <span
                className="hero-chip-text"
                style={{
                  whiteSpace: "nowrap",
                  color: "#ebebeb",
                  fontWeight: 700,
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "0.833333vw",
                  lineHeight: 1,
                }}
              >
                {f.text}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-bg {
            background-image: url('/images/stockity/src/core/images/trade-smart/main_section_mobile-707d361f38e2d6c3.webp') !important;
          }
          .hero-content {
            min-height: 145vw !important;
            padding: 0 8.88889vw !important;
            padding-top: 28vw !important;
            padding-bottom: 13.3333vw !important;
            justify-content: flex-start !important;
          }
          .hero-tagline {
            font-size: 3.33333vw !important;
            margin-bottom: 4.44444vw !important;
          }
          .hero-title {
            font-size: 10vw !important;
            line-height: 11.1111vw !important;
          }
          .hero-sub {
            font-size: 3.88889vw !important;
            line-height: 5.55556vw !important;
            max-width: 100% !important;
            margin-top: 3.33333vw !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            gap: 3.33333vw !important;
            width: 100% !important;
            margin-top: 6.66667vw !important;
          }
          .hero-btn {
            width: 100% !important;
            font-size: 5.55556vw !important;
            padding: 3.88889vw 4vw !important;
            border-radius: 2.22222vw !important;
            justify-content: center !important;
          }
          .hero-btn-outline {
            font-size: 4.44444vw !important;
          }
          .hero-chips {
            flex-wrap: wrap !important;
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.22222vw !important;
            width: 100% !important;
            margin-top: 8.88889vw !important;
          }
          .hero-chip {
            height: 17.7778vw !important;
            border-radius: 3.33333vw !important;
            gap: 2.22222vw !important;
            padding: 3.33333vw 4.44444vw !important;
            justify-content: flex-start !important;
          }
          .hero-chip-icon {
            width: 6.66667vw !important;
            height: 6.66667vw !important;
          }
          .hero-chip-icon img {
            width: 6.66667vw !important;
            height: 6.66667vw !important;
          }
          .hero-chip-text {
            font-size: 3.33333vw !important;
            line-height: 4.44444vw !important;
            white-space: normal !important;
          }
        }
      `}</style>

      {/* Video Modal — lazy: video only mounts when open */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 900,
              borderRadius: 12,
              overflow: "hidden",
              background: "#000",
              boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setVideoOpen(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 10,
                background: "rgba(0,0,0,0.6)",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 20,
                lineHeight: 1,
              }}
              aria-label="Close"
            >
              ×
            </button>
            <video
              src="/videos/stockity-promo.mp4"
              controls
              autoPlay
              playsInline
              style={{ width: "100%", display: "block", maxHeight: "80vh" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
