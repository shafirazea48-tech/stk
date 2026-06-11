"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I start?",
    answer: (
      <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" as const, gap: 10 }}>
        {["Register in seconds", "Deposit easily", "Learn for free", "Predict assets moves", "Withdraw anytime"].map(
          (step, i) => (
            <li key={step} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#82889B", fontSize: 14 }}>
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
      <p style={{ color: "#82889B", fontSize: 14, lineHeight: 1.65 }}>
        All requests are processed within{" "}
        <span style={{ color: "#0C8DF8", fontWeight: 600 }}>1-2 hours</span>. Our
        financial team works around the clock to ensure fast and secure transactions.
      </p>
    ),
  },
  {
    question: "Is there a demo account?",
    answer: (
      <p style={{ color: "#82889B", fontSize: 14, lineHeight: 1.65 }}>
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
      <p style={{ color: "#82889B", fontSize: 14, lineHeight: 1.65 }}>
        Of course! Subscribe to our e-mails to get notified about new activities you can
        participate in. We regularly host tournaments, contests, and exclusive promotions
        for our users.
      </p>
    ),
  },
];

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
            fontSize: "8.88889vw",
            lineHeight: "10vw",
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
                border: `1px solid ${openIndex === index ? "rgba(12,141,248,0.35)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "3.33333vw",
                overflow: "hidden",
                transition: "border-color 0.2s",
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
                  padding: "4.44444vw",
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
                <span
                  style={{
                    width: "7.22222vw",
                    height: "7.22222vw",
                    borderRadius: "50%",
                    background: openIndex === index ? "#0C8DF8" : "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: openIndex === index ? "rotate(180deg)" : "none",
                    transition: "transform 0.25s, background 0.2s",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div
                  style={{ padding: "0 4.44444vw 4.44444vw" }}
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text" style={{ fontSize: "3.88889vw", lineHeight: "5.55556vw", color: "#82889B", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.answer}</div>
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
            fontSize: "3.7037vw",
            lineHeight: "4.16667vw",
            color: "#fff",
            textAlign: "center",
            padding: "11.5741vw 0 2.77778vw",
          }}
        >
          FAQ
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.925926vw", maxWidth: "74.0741vw", margin: "0 auto" }}>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              style={{
                background: "#161616",
                border: `1px solid ${openIndex === index ? "rgba(12,141,248,0.35)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.2s",
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
                  padding: "1.38889vw 1.85185vw",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "0.925926vw",
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  style={{ fontSize: "1.85185vw", lineHeight: "2.31481vw", fontWeight: 700, color: "#F4F4F6", flex: 1 }}
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    width: "2.31481vw",
                    height: "2.31481vw",
                    borderRadius: "50%",
                    background: openIndex === index ? "#0C8DF8" : "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: openIndex === index ? "rotate(180deg)" : "none",
                    transition: "transform 0.25s, background 0.2s",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div
                  style={{ padding: "0 1.85185vw 1.85185vw" }}
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text" style={{ fontSize: "1.38889vw", lineHeight: "1.85185vw", color: "#82889B" }}>{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
