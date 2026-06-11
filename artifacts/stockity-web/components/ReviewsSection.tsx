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

  const totalDots = reviews.length;

  return (
    <section className="py-24 bg-[#151723]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-[#F4F4F6] text-center mb-14">
          Millions of <span className="text-[#0C8DF8]">users trust us</span>{" "}
          already
        </h2>

        {/* Desktop: 3 cards visible */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 mb-8">
          {visibleReviews().map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-8">
          <ReviewCard review={reviews[current]} />
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() =>
              setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
            }
            className="w-8 h-8 rounded-full bg-[#232737] border border-[#393F56] flex items-center justify-center text-[#82889B] hover:text-[#F4F4F6] hover:border-[#0C8DF8] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-[#0C8DF8]"
                  : "w-2.5 h-2.5 bg-[#393F56] hover:bg-[#82889B]"
              }`}
            />
          ))}

          <button
            onClick={() => setCurrent((c) => (c + 1) % reviews.length)}
            className="w-8 h-8 rounded-full bg-[#232737] border border-[#393F56] flex items-center justify-center text-[#82889B] hover:text-[#F4F4F6] hover:border-[#0C8DF8] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[0];
}) {
  return (
    <div className="bg-[#232737] border border-[#393F56] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#0C8DF8]/40 transition-colors">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Subtitle */}
      <p className="font-black text-base text-[#F4F4F6]">{review.subtitle}</p>

      {/* Comment */}
      <p className="text-sm text-[#82889B] leading-relaxed flex-1">{review.comment}</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#393F56]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
          style={{ backgroundColor: review.color }}
        >
          {review.initials}
        </div>
        <div>
          <p className="font-bold text-sm text-[#F4F4F6]">{review.name}</p>
          <p className="text-xs text-[#82889B]">
            {review.flag} {review.country}
          </p>
        </div>
      </div>
    </div>
  );
}
