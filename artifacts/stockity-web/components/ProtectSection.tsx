"use client";

import { useState, useRef } from "react";

const CARD_WIDTH_VW = 90.5556;
const CARD_GAP_VW = 4.44444;

const cards = [
  {
    key: "fund",
    bgImage: "url('/images/stockity/src/core/images/protect/card_3_mobile-54a0fa1fcfbf9102.webp')",
    bgImageDesktop: "url('/images/stockity/src/core/images/protect/card_3_desktop-467ada6d994d3f16.webp')",
    hasAnimation: false,
    content: (
      <p
        style={{
          color: "#ebebeb",
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 900,
          fontSize: "6.66667vw",
          lineHeight: "8.88889vw",
          textAlign: "center",
          padding: "8.88889vw 4.44444vw 0",
        }}
      >
        High-level <span style={{ color: "#0C8DF8" }}>fund protection</span> and transactions
      </p>
    ),
    contentDesktop: (
      <p
        style={{
          textAlign: "center",
          color: "#fff",
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 900,
          fontSize: "2.77778vw",
          lineHeight: "3.24074vw",
          padding: "2.77778vw 2.77778vw 0",
        }}
      >
        High-level <span style={{ color: "#0C8DF8" }}>fund protection</span>
        {" "}and transactions
      </p>
    ),
  },
  {
    key: "fees",
    bgImage: null,
    bgImageDesktop: null,
    hasAnimation: true,
    content: (
      <p
        style={{
          color: "#ebebeb",
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 900,
          fontSize: "6.66667vw",
          lineHeight: "8.88889vw",
          textAlign: "center",
          padding: "0 4.44444vw 8.88889vw",
          marginTop: "auto",
        }}
      >
        Transparent investing<br />
        <span style={{ color: "#0C8DF8" }}>with no hidden fees</span>
      </p>
    ),
    contentDesktop: (
      <p
        style={{
          color: "#fff",
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 900,
          fontSize: "2.77778vw",
          lineHeight: "3.24074vw",
          textAlign: "center",
          padding: "0 2.77778vw 2.77778vw",
        }}
      >
        Transparent investing<br />
        <span style={{ color: "#0C8DF8" }}>with no hidden fees</span>
      </p>
    ),
  },
];

const ChartSVG = ({ height }: { height: string }) => (
  <svg viewBox="0 0 480 270" fill="none" preserveAspectRatio="xMidYMid meet"
    style={{ width: "100%", height, display: "block" }}>
    {[0, 54, 108, 162, 216, 270].map((y) => (
      <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
    ))}
    {[0, 80, 160, 240, 320, 400, 480].map((x) => (
      <line key={x} x1={x} y1="0" x2={x} y2="270" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
    ))}
    <defs>
      <linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#0990ff" stopOpacity="0.35" />
        <stop offset="1" stopColor="#0990ff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#0990ff" />
        <stop offset="1" stopColor="#00eaff" />
      </linearGradient>
    </defs>
    <path
      d="M0 240 L60 200 L120 215 L195 140 L255 160 L315 85 L390 105 L450 45 L480 60 L480 270 L0 270Z"
      fill="url(#pg1)"
    />
    <path
      d="M0 240 L60 200 L120 215 L195 140 L255 160 L315 85 L390 105 L450 45 L480 60"
      stroke="url(#lineGrad)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="340" y="75" fill="#fff" fontSize="16" fontFamily="sans-serif" opacity="0.6">$0</text>
    <text x="460" y="40" fill="#00eaff" fontSize="14" fontFamily="sans-serif" opacity="0.8">▲</text>
    {[[315, 85], [450, 45]].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#0990ff" stroke="#fff" strokeWidth="2" />
    ))}
  </svg>
);

export default function ProtectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goTo = (i: number) => setActiveIndex(Math.max(0, Math.min(cards.length - 1, i)));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section id="protect" style={{ background: "#000", overflow: "hidden" }}>

      {/* ── Desktop ── */}
      <div className="hidden md:block">
        <p
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "3.7037vw",
            lineHeight: "4.16667vw",
            padding: "14.8148vw 1.85185vw 7.40741vw",
            width: "100%",
          }}
        >
          Everything you want in a platform
        </p>

        <div
          style={{
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            padding: "0 1.85185vw",
            paddingBottom: "9.25926vw",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              boxSizing: "border-box",
              backgroundImage: cards[0].bgImageDesktop!,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "2.31481vw",
              minHeight: "38.1944vw",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              {cards[0].contentDesktop}
            </div>
          </div>

          {/* Card 2 — animated (no hidden fees) */}
          <div
            style={{
              boxSizing: "border-box",
              background: "linear-gradient(165deg, #17324f 7.44%, #010812 66.13%)",
              borderRadius: "2.31481vw",
              minHeight: "38.1944vw",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <ChartSVG height="28vw" />
            <div style={{ marginTop: "auto" }}>
              {cards[1].contentDesktop}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="block md:hidden">
        {/* Title */}
        <p
          style={{
            textAlign: "center",
            color: "#f4f4f6",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "8.33333vw",
            lineHeight: "10.5556vw",
            padding: "20vw 4.44444vw 6.66667vw",
          }}
        >
          Everything you want in a platform
        </p>

        {/* Swiper container */}
        <div
          style={{ overflow: "hidden", width: "100%" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Swiper wrapper — translate by active index */}
          <div
            style={{
              display: "flex",
              paddingLeft: "2.22222vw",
              gap: `${CARD_GAP_VW}vw`,
              transform: `translateX(calc(-${activeIndex} * (${CARD_WIDTH_VW}vw + ${CARD_GAP_VW}vw)))`,
              transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
          >
            {/* Card 1 — fund protection */}
            <div
              style={{
                flexShrink: 0,
                backgroundImage: cards[0].bgImage!,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "3.33333vw",
                width: `${CARD_WIDTH_VW}vw`,
                minHeight: "95.5556vw",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {cards[0].content}
            </div>

            {/* Card 2 — no hidden fees */}
            <div
              style={{
                flexShrink: 0,
                background: "linear-gradient(165deg, #17324f 7.44%, #010812 66.13%)",
                borderRadius: "3.33333vw",
                width: `${CARD_WIDTH_VW}vw`,
                minHeight: "95.5556vw",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <ChartSVG height="70vw" />
              <div style={{ marginTop: "auto" }}>
                {cards[1].content}
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
            gap: 28,
            marginTop: 16,
            marginBottom: "11.1111vw",
            height: 32,
          }}
        >
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: i === activeIndex ? "#0c8df8" : "#033a68",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "background 0.2s",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
