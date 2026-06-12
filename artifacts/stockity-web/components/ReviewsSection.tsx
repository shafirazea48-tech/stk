"use client";

import { useState } from "react";
import { getT, Locale } from "@/lib/i18n/translations";

const reviews = [
  {
    id: 1,
    subtitle: "Free education",
    comment:
      '"Started using Stockity to get a feel for the market, and I\'m surprised how smooth everything runs. No bugs, no weird delays. I\'m still learning, but the tutorials and tips inside the app actually help. Feels like a solid place to grow trading skills without pressure"',
    name: "Rizky",
    country: "Indonesia",
    flagCode: "id",
    photo: "/images/stockity/src/core/images/review/people_1.webp",
  },
  {
    id: 2,
    subtitle: "Clear trading tools",
    comment:
      '"What I appreciate most is that Stockity lets me trade at my own pace. The tools are clear, and I\'ve learned a lot just by practicing in demo mode. It feels structured and calm, without unnecessary distractions."',
    name: "Agus",
    country: "Indonesia",
    flagCode: "id",
    photo: "/images/stockity/src/core/images/review/people_2.webp",
  },
  {
    id: 3,
    subtitle: "Dedicated support team",
    comment:
      '"I had a question about my withdrawal, and support got back to me within an hour. They were polite and clear, which I really appreciated. Most importantly, my issue was resolved without back and forth"',
    name: "Carlos",
    country: "Mexico",
    flagCode: "mx",
    photo: "/images/stockity/src/core/images/review/people_3.webp",
  },
  {
    id: 4,
    subtitle: "Bought a bicycle for grandson",
    comment:
      '"Trading on Stockity feels more straightforward than on other platforms I\'ve tried. I made a small profit in the beginning and gradually built it up over time. Eventually, it was enough to buy a bicycle for my grandson. Now I\'m saving for another family gift"',
    name: "Linh",
    country: "Vietnam",
    flagCode: "vn",
    photo: "/images/stockity/src/core/images/review/people_4.webp",
  },
  {
    id: 5,
    subtitle: "Reliable platform",
    comment:
      '"I was mostly looking for a platform that works consistently. Stockity feels reliable, especially when it comes to deposits and withdrawals. Everything is straightforward, and that\'s exactly what I need."',
    name: "Amina",
    country: "Kenya",
    flagCode: "ke",
    photo: "/images/stockity/src/core/images/review/people_5.webp",
  },
  {
    id: 6,
    subtitle: "Easy market access",
    comment:
      '"Stockity gives me quick access to all the assets I want to trade. I can switch between markets in a few taps and see everything clearly. I feel in control, even when trying new strategies."',
    name: "Lucas",
    country: "Argentina",
    flagCode: "ar",
    photo: "/images/stockity/src/core/images/review/people_6.webp",
  },
  {
    id: 7,
    subtitle: "Copy top traders",
    comment:
      '"I didn\'t know where to start, so I tried Copy Trading. I can pick experienced traders and follow their steps. It\'s reassuring and actually helps me understand the market faster."',
    name: "Sofia",
    country: "Argentina",
    flagCode: "ar",
    photo: "/images/stockity/src/core/images/review/people_7.webp",
  },
];

function FlagImg({ code, size = 24 }: { code: string; size?: number }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={code}
      width={size}
      height={Math.round(size * 0.67)}
      style={{ objectFit: "cover", borderRadius: 2, flexShrink: 0 }}
    />
  );
}

function Avatar({ photo, size }: { photo: string; size: string }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        background: "#333",
      }}
    >
      <img
        src={photo}
        alt="reviewer"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      style={{
        background: "#161616",
        borderRadius: "1.38889vw",
        padding: "2.31481vw",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Avatar + title row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.925926vw", marginBottom: "1.38889vw" }}>
        <Avatar photo={review.photo} size="3.24074vw" />
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 800,
            fontSize: "1.2963vw",
            color: "#f4f4f6",
            lineHeight: 1.3,
          }}
        >
          {review.subtitle}
        </p>
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 400,
          fontSize: "0.972222vw",
          color: "#82889B",
          lineHeight: 1.75,
          flex: 1,
          marginBottom: "1.85185vw",
        }}
      >
        {review.comment}
      </p>

      {/* Flag + name */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.694444vw" }}>
        <FlagImg code={review.flagCode} size={22} />
        <span
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "0.925926vw",
            color: "#82889B",
          }}
        >
          {review.name}, {review.country}
        </span>
      </div>
    </div>
  );
}

function MobileReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      style={{
        background: "#161616",
        borderRadius: "4.44444vw",
        padding: "6.66667vw",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "3.33333vw", marginBottom: "4.44444vw" }}>
        <Avatar photo={review.photo} size="11.1111vw" />
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 800,
            fontSize: "4.44444vw",
            color: "#f4f4f6",
            lineHeight: 1.3,
          }}
        >
          {review.subtitle}
        </p>
      </div>
      <p
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontSize: "3.88889vw",
          color: "#82889B",
          lineHeight: 1.75,
          marginBottom: "5.55556vw",
        }}
      >
        {review.comment}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "2.22222vw" }}>
        <FlagImg code={review.flagCode} size={20} />
        <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "3.33333vw", color: "#82889B" }}>
          {review.name}, {review.country}
        </span>
      </div>
    </div>
  );
}

const DESKTOP_PER_PAGE = 4;

export default function ReviewsSection({ locale }: { locale?: Locale }) {
  const [page, setPage] = useState(0);
  const [mobileCurrent, setMobileCurrent] = useState(0);
  const t = getT(locale ?? "en");

  const pageCount = Math.ceil(reviews.length / DESKTOP_PER_PAGE);
  const visibleReviews = reviews.slice(
    page * DESKTOP_PER_PAGE,
    (page + 1) * DESKTOP_PER_PAGE
  );

  return (
    <section style={{ background: "#0d0d0d" }}>
      {/* ── DESKTOP ── */}
      <div className="hidden md:block" style={{ padding: "9.25926vw 1.85185vw" }}>
        <h2
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "3.7037vw",
            lineHeight: "4.16667vw",
            color: "#f4f4f6",
            textAlign: "center",
            marginBottom: "3.7037vw",
          }}
        >
          {locale === "id" ? (
            t.reviews.heading
          ) : (
            <>Millions of{" "}<span style={{ color: "#0C8DF8" }}>users trust us</span> already</>
          )}
        </h2>

        {/* 4-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0.925926vw",
            marginBottom: "2.31481vw",
          }}
        >
          {visibleReviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.694444vw" }}>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? "1.85185vw" : "0.694444vw",
                height: "0.694444vw",
                borderRadius: 999,
                background: i === page ? "#0C8DF8" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="block md:hidden" style={{ padding: "13.3333vw 4.44444vw" }}>
        <h2
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "7.77778vw",
            lineHeight: "9.44444vw",
            color: "#f4f4f6",
            textAlign: "center",
            marginBottom: "8.88889vw",
          }}
        >
          {locale === "id" ? (
            t.reviews.heading
          ) : (
            <>Millions of{" "}<span style={{ color: "#0C8DF8" }}>users trust us</span> already</>
          )}
        </h2>

        <MobileReviewCard review={reviews[mobileCurrent]} />

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "2.22222vw", marginTop: "6.66667vw" }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileCurrent(i)}
              style={{
                width: i === mobileCurrent ? "5.55556vw" : "2.22222vw",
                height: "2.22222vw",
                borderRadius: 999,
                background: i === mobileCurrent ? "#0C8DF8" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
