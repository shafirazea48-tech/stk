"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const WebIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6" stroke="#0C8DF8" strokeWidth="1.4"/>
    <ellipse cx="8" cy="8" rx="2.5" ry="6" stroke="#0C8DF8" strokeWidth="1.1"/>
    <path d="M2 8h12" stroke="#0C8DF8" strokeWidth="1.1"/>
  </svg>
);

/* Original SVG icons from stockity CSS */
const GooglePlayIcon = ({ size = "1.85185vw" }: { size?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
    <path d="m20.89 20.723-12.111 7.05c-.256.117-1.043.608-1.99.35l10.54-11.064 3.56 3.664Zm-4.531-4.769L5.512 27.291s-.431-.236-.431-1.57V6.29c0-.518.064-.973.49-1.574l10.788 11.24Zm9.305-1.942c1.88 1.067 1.429 3.242.093 4.004-1.819 1.037-3.112 1.772-3.495 1.999l-3.88-4.04 3.763-3.952 3.519 1.989ZM6.789 3.876c.947-.259 1.734.232 1.99.349l12.11 7.05-3.56 3.665L6.79 3.876Z" fill="#fff"/>
  </svg>
);

const AppleIcon = ({ size = "1.85185vw" }: { size?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
    <path d="M16.508 9.39c1.237 0 3.59-1.692 6.016-1.44a7.338 7.338 0 0 1 5.768 3.093 7.08 7.08 0 0 0-3.405 5.95 6.852 6.852 0 0 0 4.218 6.304 15.658 15.658 0 0 1-2.194 4.433c-1.292 1.917-2.648 3.79-4.799 3.825-2.09.047-2.793-1.22-5.19-1.22-2.42 0-3.169 1.184-5.173 1.267-2.049.075-3.614-2.046-4.954-3.946-2.678-3.878-4.763-10.93-1.968-15.73a7.691 7.691 0 0 1 6.465-3.908c2.05-.042 3.955 1.373 5.216 1.373Zm6.04-8.994a6.943 6.943 0 0 1-1.61 5.002 5.946 5.946 0 0 1-4.678 2.194 6.61 6.61 0 0 1 1.653-4.818A7.186 7.186 0 0 1 22.55.396Z" fill="#fff"/>
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
        {/* Section title */}
        <p
          style={{
            boxSizing: "border-box",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "3.7037vw",
            lineHeight: "4.16667vw",
            padding: "8.33333vw 1.85185vw 3.24074vw",
            textAlign: "center",
            width: "100%",
          }}
        >
          Invest wherever you want, on{" "}
          <span style={{ color: "#0C8DF8" }}>any device</span>
        </p>

        {/* Two cards */}
        <div
          style={{
            display: "flex",
            gap: "0.925926vw",
            padding: "0 1.85185vw",
            paddingBottom: "9.25926vw",
          }}
        >
          {/* Card 1: Mobile Apps */}
          <div
            style={{
              flex: 1,
              borderRadius: "2.31481vw",
              minHeight: "47.6852vw",
              overflow: "hidden",
              position: "relative",
              background: "#161616",
              boxSizing: "border-box",
            }}
          >
            {/* Phone image — covers full card as background */}
            <div style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/images/stockity/src/core/images/device/mob_desktop-873a8cb8ab00908e.webp"
                alt="Stockity mobile app"
                fill
                style={{ objectFit: "cover", objectPosition: "center bottom" }}
                unoptimized
              />
            </div>

            {/* Content overlay — full card height, flex column */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2.77778vw",
                zIndex: 2,
              }}
            >
              {/* Card subtitle */}
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

              {/* Store buttons row */}
              <div style={{ display: "flex", gap: "1.38889vw", width: "100%" }}>
                <a
                  href="#"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.925926vw",
                    background: "rgba(20,20,20,0.7)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "0.925926vw",
                    height: "4.62963vw",
                    padding: "1.38889vw 4.62963vw",
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                >
                  <GooglePlayIcon size="1.85185vw" />
                  <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: "1.15741vw", color: "#f4f4f6" }}>
                    Google Play
                  </span>
                </a>
                <a
                  href="#"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.925926vw",
                    background: "rgba(20,20,20,0.7)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "0.925926vw",
                    height: "4.62963vw",
                    padding: "1.38889vw 4.62963vw",
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                >
                  <AppleIcon size="1.85185vw" />
                  <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: "1.15741vw", color: "#f4f4f6" }}>
                    App Store
                  </span>
                </a>
              </div>

              {/* QR code + download link — pushed to bottom */}
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "0.925926vw",
                }}
              >
                <img
                  src="/images/stockity/src/core/images/device/qr-code_en-12d10e19e65f695a.svg"
                  alt="QR Code"
                  style={{ width: "6.94444vw", height: "6.94444vw" }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Web Version */}
          <div
            style={{
              flex: 1,
              borderRadius: "2.31481vw",
              minHeight: "47.6852vw",
              overflow: "hidden",
              position: "relative",
              background: "#161616",
              boxSizing: "border-box",
            }}
          >
            {/* Laptop image — covers full card as background */}
            <div style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/images/stockity/src/core/images/device/web_desktop-358cd5506175c9cf.webp"
                alt="Stockity web platform"
                fill
                style={{ objectFit: "cover", objectPosition: "center bottom" }}
                unoptimized
              />
            </div>

            {/* Content overlay — full card height, flex column */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2.77778vw",
                zIndex: 2,
              }}
            >
              {/* Card subtitle */}
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
                Web Version
              </p>

              {/* Open button */}
              <a
                href="#"
                style={{
                  width: "100%",
                  maxWidth: "352px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(20,20,20,0.7)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "0.925926vw",
                  height: "4.62963vw",
                  padding: "1.38889vw 4.62963vw",
                  textDecoration: "none",
                  boxSizing: "border-box",
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15741vw",
                  color: "#f4f4f6",
                }}
              >
                Open
              </a>
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
                  backgroundImage: "url('/images/stockity/src/core/images/device/mob_desktop-873a8cb8ab00908e.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "4.44444vw",
                  overflow: "hidden",
                  minHeight: "160vw",
                }}
              >
                {/* Card content overlaid at top */}
                <div style={{ padding: "8.88889vw 6.66667vw 6.66667vw" }}>
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

                  {/* Google Play — centered icon + label */}
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2.77778vw",
                      background: "#252525",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "3.33333vw",
                      padding: "3.33333vw 5.55556vw",
                      textDecoration: "none",
                      width: "100%",
                      boxSizing: "border-box",
                      marginBottom: "3.33333vw",
                    }}
                  >
                    <GooglePlayIcon size="7.22222vw" />
                    <span style={{ fontSize: "4.44444vw", fontWeight: 700, color: "#fff", fontFamily: "'Nunito Sans', sans-serif" }}>Google Play</span>
                  </a>

                  {/* App Store — centered icon + label */}
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2.77778vw",
                      background: "#252525",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "3.33333vw",
                      padding: "3.33333vw 5.55556vw",
                      textDecoration: "none",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <AppleIcon size="7.22222vw" />
                    <span style={{ fontSize: "4.44444vw", fontWeight: 700, color: "#fff", fontFamily: "'Nunito Sans', sans-serif" }}>App Store</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 2: Web Platform */}
            <div style={{ minWidth: "100%", boxSizing: "border-box" }}>
              <div
                style={{
                  backgroundImage: "url('/images/stockity/src/core/images/device/web_desktop-358cd5506175c9cf.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "4.44444vw",
                  overflow: "hidden",
                  minHeight: "160vw",
                }}
              >
                {/* Card content overlaid at top */}
                <div style={{ padding: "8.88889vw 6.66667vw 6.66667vw" }}>
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
                      background: "rgba(20,20,20,0.92)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "3.33333vw",
                      padding: "4.44444vw 5.55556vw",
                      textDecoration: "none",
                      width: "100%",
                      boxSizing: "border-box",
                      fontSize: "5vw",
                      fontWeight: 700,
                      color: "#f4f4f6",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    <WebIcon />
                    Open Web Platform
                  </a>
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
