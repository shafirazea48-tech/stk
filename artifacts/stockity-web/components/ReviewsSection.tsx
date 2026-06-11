"use client";

import { useState } from "react";

const reviews = [
  {
    id: 1,
    subtitle: "Free education",
    comment:
      '"Started using Stockity to get a feel for the market, and I\'m surprised how smooth everything runs. No bugs, no weird delays. I\'m still learning, but the tutorials and tips inside the app actually help. Feels like a solid place to grow trading skills without pressure"',
    name: "Rizky",
    country: "Indonesia",
    flag: "🇮🇩",
    initials: "R",
    color: "#0C8DF8",
  },
  {
    id: 2,
    subtitle: "Clear trading tools",
    comment:
      '"What I appreciate most is that Stockity lets me trade at my own pace. The tools are clear, and I\'ve learned a lot just by practicing in demo mode. It feels structured and calm, without unnecessary distractions."',
    name: "Agus",
    country: "Indonesia",
    flag: "🇮🇩",
    initials: "A",
    color: "#53BB48",
  },
  {
    id: 3,
    subtitle: "Dedicated support team",
    comment:
      '"I had a question about my withdrawal, and support got back to me within an hour. They were polite and clear, which I really appreciated. Most importantly, my issue was resolved without back and forth"',
    name: "Carlos",
    country: "Mexico",
    flag: "🇲🇽",
    initials: "C",
    color: "#FF7E27",
  },
  {
    id: 4,
    subtitle: "Bought a bicycle for grandson",
    comment:
      '"Trading on Stockity feels more straightforward than on other platforms I\'ve tried. I made a small profit in the beginning and gradually built it up over time. Eventually, it was enough to buy a bicycle for my grandson. Now I\'m saving for another family gift"',
    name: "Linh",
    country: "Vietnam",
    flag: "🇻🇳",
    initials: "L",
    color: "#EE6B4E",
  },
  {
    id: 5,
    subtitle: "Reliable platform",
    comment:
      '"I was mostly looking for a platform that works consistently. Stockity feels reliable, especially when it comes to deposits and withdrawals. Everything is straightforward, and that\'s exactly what I need."',
    name: "Amina",
    country: "Kenya",
    flag: "🇰🇪",
    initials: "A",
    color: "#0C8DF8",
  },
  {
    id: 6,
    subtitle: "Easy market access",
    comment:
      '"Stockity gives me quick access to all the assets I want to trade. I can switch between markets in a few taps and see everything clearly. I feel in control, even when trying new strategies."',
    name: "Lucas",
    country: "Argentina",
    flag: "🇦🇷",
    initials: "L",
    color: "#53BB48",
  },
  {
    id: 7,
    subtitle: "Copy top traders",
    comment:
      '"I didn\'t know where to start, so I tried Copy Trading. I can pick experienced traders and follow their steps. It\'s reassuring and actually helps me understand the market faster."',
    name: "Sofia",
    country: "Argentina",
    flag: "🇦🇷",
    initials: "S",
    color: "#FF7E27",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      style={{
        background: "#161616",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div style={{ display: "flex", gap: 3 }}>
        {[0,1,2,3,4].map((i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <p style={{ fontSize: 15, fontWeight: 800, color: "#F4F4F6" }}>{review.subtitle}</p>
      <p style={{ fontSize: 13, color: "#82889B", lineHeight: 1.65, flex: 1 }}>{review.comment}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingTop: 12,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: review.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 900,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {review.initials}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#F4F4F6" }}>{review.name}</p>
          <p style={{ fontSize: 12, color: "#82889B" }}>
            {review.flag} {review.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const VISIBLE = 3;

  const visibleReviews = () => {
    const result = [];
    for (let i = 0; i < Math.min(VISIBLE, reviews.length); i++) {
      result.push(reviews[(current + i) % reviews.length]);
    }
    return result;
  };

  return (
    <section style={{ background: "#0d0d0d", padding: "80px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 26px" }}>
        <h2
          style={{
            fontSize: "clamp(28px,3.5vw,48px)",
            fontWeight: 900,
            color: "#F4F4F6",
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          Millions of{" "}
          <span style={{ color: "#0C8DF8" }}>users trust us</span> already
        </h2>

        {/* Desktop: 3 cards */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 32 }}
        >
          {visibleReviews().map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden" style={{ marginBottom: 32 }}>
          <ReviewCard review={reviews[current]} />
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#82889B",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s",
                width: i === current ? 24 : 10,
                height: 10,
                background: i === current ? "#0C8DF8" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}

          <button
            onClick={() => setCurrent((c) => (c + 1) % reviews.length)}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#82889B",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
