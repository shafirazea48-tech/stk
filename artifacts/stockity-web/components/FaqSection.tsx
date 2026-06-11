"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I start?",
    answer: (
      <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" as const, gap: 10 }}>
        {["Register in seconds", "Deposit easily", "Learn for free", "Predict assets moves", "Withdraw anytime"].map(
          (step, i) => (
            <li key={step} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#82889B", fontSize: "1.62037vw", lineHeight: "2.31481vw" }}>
              <span
                style={{
                  flexShrink: 0,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "rgba(12,141,248,0.15)",
                  color: "#0C8DF8",
                  fontSize: 12,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 1,
                }}
              >
                {i + 1}
              </span>
              {step}
            </li>
          )
        )}
      </ol>
    ),
  },
  {
    question: "How fast will I get my withdrawals?",
    answer: (
      <p style={{ color: "#82889B", fontSize: "1.62037vw", lineHeight: "2.31481vw" }}>
        All requests are processed within{" "}
        <span style={{ color: "#0C8DF8", fontWeight: 600 }}>1-2 hours</span>. Our
        financial team works around the clock to ensure fast and secure transactions.
      </p>
    ),
  },
  {
    question: "Can I practice first?",
    answer: (
      <p style={{ color: "#82889B", fontSize: "1.62037vw", lineHeight: "2.31481vw" }}>
        Yes! You get a{" "}
        <span style={{ color: "#0C8DF8", fontWeight: 600 }}>$10,000 demo account</span>{" "}
        completely free. Use it to practice trading strategies, explore assets, and test
        strategies — all with no real money at risk.
      </p>
    ),
  },
  {
    question: "Are there any special events?",
    answer: (
      <p style={{ color: "#82889B", fontSize: "1.62037vw", lineHeight: "2.31481vw" }}>
        Of course! Subscribe to our e-mails to get notified about new activities you can
        participate in. We regularly host tournaments, contests, and exclusive promotions
        for our users.
      </p>
    ),
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{
      transition: "transform 0.25s",
      transform: open ? "rotate(180deg)" : "none",
      flexShrink: 0,
    }}
  >
    <path d="M6 9l6 6 6-6" stroke="#82889B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{ background: "#000" }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Mobile */}
      <div className="block md:hidden" style={{ padding: "0 4.44444vw 11.1111vw" }}>
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "13.3333vw",
            lineHeight: "14.4444vw",
            color: "#fff",
            textAlign: "center",
            padding: "11.1111vw 0 6.66667vw",
          }}
        >
          FAQ
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.22222vw" }}>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "3.33333vw",
                overflow: "hidden",
              }}
              itemScope
              itemType="https://schema.org/Question"
              itemProp="mainEntity"
            >
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "5.55556vw 4.44444vw",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "3.33333vw",
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  style={{ fontSize: "4.44444vw", lineHeight: "6.11111vw", fontWeight: 700, color: "#F4F4F6", flex: 1, fontFamily: "'Nunito Sans', sans-serif" }}
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <ChevronIcon open={openIndex === index} />
              </button>

              {openIndex === index && (
                <div
                  style={{ padding: "0 4.44444vw 4.44444vw" }}
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text" className="faq-mobile-answer" style={{ fontSize: "3.88889vw", lineHeight: "5.55556vw", color: "#82889B", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block" style={{ padding: "0 1.85185vw 9.25926vw" }}>
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            fontSize: "5.09259vw",
            lineHeight: "5.55556vw",
            color: "#fff",
            textAlign: "center",
            padding: "9.25926vw 0 3.7037vw",
          }}
        >
          FAQ
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.925926vw" }}>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.925926vw",
                overflow: "hidden",
              }}
              itemScope
              itemType="https://schema.org/Question"
              itemProp="mainEntity"
            >
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.85185vw 1.85185vw",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "0.925926vw",
                  boxSizing: "border-box",
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  style={{
                    fontSize: "1.85185vw",
                    lineHeight: "2.31481vw",
                    fontWeight: 700,
                    color: "#F4F4F6",
                    flex: 1,
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <ChevronIcon open={openIndex === index} />
              </button>

              {openIndex === index && (
                <div
                  style={{ padding: "0 1.85185vw 1.85185vw" }}
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text" style={{ fontSize: "1.62037vw", lineHeight: "2.31481vw", color: "#82889B" }}>{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .faq-mobile-answer p,
        .faq-mobile-answer li,
        .faq-mobile-answer span {
          font-size: 3.88889vw !important;
          line-height: 5.55556vw !important;
        }
      `}</style>
    </section>
  );
}
