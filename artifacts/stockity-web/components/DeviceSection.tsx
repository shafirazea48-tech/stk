"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const GooglePlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3.6 1.7L13.8 12 3.6 22.3c-.5-.3-.9-1-.9-2.2V3.9c0-1.1.4-1.9.9-2.2z" fill="#00C853"/>
    <path d="M14.8 13l2.2 2.2-10.9 6.2 8.7-8.4z" fill="#FFCA28"/>
    <path d="M20 10.7c.7.4 1.1 1 1.1 1.6s-.4 1.2-1.1 1.6l-1.9 1.1-2.3-2.3 2.3-2.3 1.9 1.1z" fill="#FF5722"/>
    <path d="M6.1 2.6l10.9 6.2L14.8 11l-8.7-8.4z" fill="#4FC3F7"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M17.5 12.5c0-2.8 2.2-3.3 2.3-3.4-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-.9C6.2 7.2 4.2 8.2 3.2 10c-2.1 3.7-.5 9.1 1.5 12.1 1 1.4 2.1 3 3.6 3 1.5-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.9s2.6-1.5 3.5-2.9c1.1-1.6 1.5-3.2 1.6-3.3-.1 0-3.3-1.3-3.3-4.4z"/>
    <path d="M15.3 5.4C16 4.5 16.5 3.2 16.3 2c-1.1.1-2.5.8-3.3 1.7-.7.8-1.3 2.1-1.1 3.2 1.2.1 2.5-.6 3.4-1.5z"/>
  </svg>
);

const WebIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6" stroke="#0C8DF8" strokeWidth="1.4"/>
    <ellipse cx="8" cy="8" rx="2.5" ry="6" stroke="#0C8DF8" strokeWidth="1.1"/>
    <path d="M2 8h12" stroke="#0C8DF8" strokeWidth="1.1"/>
  </svg>
);

export default function DeviceSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const totalSlides = 2;

  function onTouchStart(e: React.TouchEvent) {
    startXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (diff > 40 && activeSlide < totalSlides - 1) setActiveSlide(activeSlide + 1);
    else if (diff < -40 && activeSlide > 0) setActiveSlide(activeSlide - 1);
  }

  return (
    <section id="device" style={{ background: "#000", overflow: "hidden" }}>
      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="hidden md:block">
        <p
          style={{
            boxSizing: "border-box",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "3.7037vw",
            lineHeight: "4.16667vw",
            padding: "11.5741vw 1.85185vw 3.24074vw",
            textAlign: "center",
            width: "100%",
          }}
        >
          Invest wherever you want, on{" "}
          <span style={{ color: "#0C8DF8" }}>any device</span>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            padding: "0 1.85185vw",
            paddingBottom: "9.25926vw",
          }}
        >
          {/* Card 1: Mobile Apps */}
          <div
            style={{
              borderRadius: "2.31481vw",
              minHeight: "47.6852vw",
              overflow: "hidden",
              position: "relative",
              background: "#161616",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "2.77778vw",
                paddingLeft: "2.77778vw",
                paddingRight: "2.77778vw",
              }}
            >
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "3.24074vw",
                  lineHeight: "3.7037vw",
                  color: "#fff",
                  marginBottom: "2.77778vw",
                  textAlign: "center",
                }}
              >
                Mobile Apps
              </p>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "1.38889vw", width: "100%" }}>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.694444vw", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "0.694444vw", padding: "0.694444vw 1.38889vw", textDecoration: "none" }}>
                  <GooglePlayIcon />
                  <div>
                    <p style={{ fontSize: "0.694444vw", color: "rgba(255,255,255,0.7)", lineHeight: 1 }}>Get it on</p>
                    <p style={{ fontSize: "0.925926vw", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Google Play</p>
                  </div>
                </a>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.694444vw", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "0.694444vw", padding: "0.694444vw 1.38889vw", textDecoration: "none" }}>
                  <AppleIcon />
                  <div>
                    <p style={{ fontSize: "0.694444vw", color: "rgba(255,255,255,0.7)", lineHeight: 1 }}>Download on the</p>
                    <p style={{ fontSize: "0.925926vw", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>App Store</p>
                  </div>
                </a>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", overflow: "hidden" }}>
              <Image src="/images/stockity/src/core/images/device/mob_desktop-873a8cb8ab00908e.webp" alt="Stockity mobile app" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
            </div>
          </div>

          {/* Card 2: Web Platform */}
          <div
            style={{
              borderRadius: "2.31481vw",
              minHeight: "47.6852vw",
              overflow: "hidden",
              position: "relative",
              background: "#161616",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "2.77778vw",
                paddingLeft: "2.77778vw",
                paddingRight: "2.77778vw",
              }}
            >
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "3.24074vw",
                  lineHeight: "3.7037vw",
                  color: "#fff",
                  marginBottom: "2.77778vw",
                  textAlign: "center",
                }}
              >
                Web Platform
              </p>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.694444vw", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "0.694444vw", padding: "0.694444vw 1.38889vw", fontSize: "0.925926vw", fontWeight: 700, color: "#f4f4f6", textDecoration: "none" }}>
                <WebIcon />
                Open Web Platform
              </a>
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", overflow: "hidden" }}>
              <Image src="/images/stockity/src/core/images/device/web_desktop-358cd5506175c9cf.webp" alt="Stockity web platform" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE SLIDER ───────────────────────────────────────── */}
      <div className="block md:hidden">
        {/* Title */}
        <p
          style={{
            boxSizing: "border-box",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "8.33333vw",
            lineHeight: "10.5556vw",
            padding: "11.1111vw 4.44444vw 6.66667vw",
            textAlign: "center",
          }}
        >
          Invest wherever you want, on{" "}
          <span style={{ color: "#0C8DF8" }}>any device</span>
        </p>

        {/* Swiper container */}
        <div
          style={{ overflow: "hidden", padding: "0 4.44444vw" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
              transform: `translateX(calc(-${activeSlide * 100}% - ${activeSlide * 0}px))`,
              willChange: "transform",
            }}
          >
            {/* Slide 1: Mobile Apps */}
            <div style={{ minWidth: "100%", boxSizing: "border-box" }}>
              <div
                style={{
                  background: "#161616",
                  borderRadius: "4.44444vw",
                  overflow: "hidden",
                  position: "relative",
                  minHeight: "133.333vw",
                }}
              >
                {/* Card content */}
                <div style={{ padding: "8.88889vw 6.66667vw 6.66667vw", position: "relative", zIndex: 2 }}>
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 900,
                      fontSize: "7.77778vw",
                      lineHeight: "10vw",
                      color: "#f4f4f6",
                      textAlign: "center",
                      marginBottom: "6.66667vw",
                    }}
                  >
                    Mobile Apps
                  </p>

                  {/* Google Play — full width */}
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3.33333vw",
                      background: "#111",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "3.33333vw",
                      padding: "3.88889vw 5.55556vw",
                      textDecoration: "none",
                      width: "100%",
                      boxSizing: "border-box",
                      marginBottom: "3.33333vw",
                    }}
                  >
                    <GooglePlayIcon />
                    <div>
                      <p style={{ fontSize: "3.05556vw", color: "#82889B", lineHeight: 1.2, fontFamily: "'Nunito Sans', sans-serif" }}>Get it on</p>
                      <p style={{ fontSize: "4.44444vw", fontWeight: 700, color: "#fff", fontFamily: "'Nunito Sans', sans-serif" }}>Google Play</p>
                    </div>
                  </a>

                  {/* App Store — full width */}
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3.33333vw",
                      background: "#111",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "3.33333vw",
                      padding: "3.88889vw 5.55556vw",
                      textDecoration: "none",
                      width: "100%",
                      boxSizing: "border-box",
                      marginBottom: "4.44444vw",
                    }}
                  >
                    <AppleIcon />
                    <div>
                      <p style={{ fontSize: "3.05556vw", color: "#82889B", lineHeight: 1.2, fontFamily: "'Nunito Sans', sans-serif" }}>Download on the</p>
                      <p style={{ fontSize: "4.44444vw", fontWeight: 700, color: "#fff", fontFamily: "'Nunito Sans', sans-serif" }}>App Store</p>
                    </div>
                  </a>

                  {/* Download APK link */}
                  <p style={{ textAlign: "center" }}>
                    <a
                      href="#"
                      style={{
                        color: "#f4f4f6",
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "3.88889vw",
                        fontWeight: 400,
                        textDecoration: "none",
                      }}
                    >
                      Download Android APK &gt;
                    </a>
                  </p>
                </div>

                {/* Phone image — fills bottom of card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "68vw",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/stockity/src/core/images/device/mob_desktop-873a8cb8ab00908e.webp"
                    alt="Stockity mobile app"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Slide 2: Web Platform */}
            <div style={{ minWidth: "100%", boxSizing: "border-box" }}>
              <div
                style={{
                  background: "#161616",
                  borderRadius: "4.44444vw",
                  overflow: "hidden",
                  position: "relative",
                  minHeight: "133.333vw",
                }}
              >
                {/* Card content */}
                <div style={{ padding: "8.88889vw 6.66667vw 6.66667vw", position: "relative", zIndex: 2 }}>
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 900,
                      fontSize: "7.77778vw",
                      lineHeight: "10vw",
                      color: "#f4f4f6",
                      textAlign: "center",
                      marginBottom: "6.66667vw",
                    }}
                  >
                    Web Platform
                  </p>

                  {/* Open button — full width */}
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2.22222vw",
                      background: "#111",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "3.33333vw",
                      padding: "3.88889vw 5.55556vw",
                      textDecoration: "none",
                      width: "100%",
                      boxSizing: "border-box",
                      fontSize: "4.44444vw",
                      fontWeight: 700,
                      color: "#f4f4f6",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    <WebIcon />
                    Open Web Platform
                  </a>
                </div>

                {/* Web platform image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "68vw",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/stockity/src/core/images/device/web_desktop-358cd5506175c9cf.webp"
                    alt="Stockity web platform"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.22222vw",
            padding: "5.55556vw 0 11.1111vw",
          }}
        >
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              style={{
                width: i === activeSlide ? "5.55556vw" : "2.22222vw",
                height: "2.22222vw",
                borderRadius: "1.11111vw",
                background: i === activeSlide ? "#0C8DF8" : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
