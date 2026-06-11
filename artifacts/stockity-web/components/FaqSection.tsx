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
      style={{ background: "#000", padding: "80px 0" }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 26px" }}>
        <h2
          style={{
            fontSize: "clamp(28px,3.5vw,48px)",
            fontWeight: 900,
            color: "#F4F4F6",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          FAQ
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  style={{ fontSize: "clamp(14px,1.1vw,17px)", fontWeight: 700, color: "#F4F4F6", flex: 1 }}
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    width: 32,
                    height: 32,
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
                  style={{ padding: "0 24px 24px" }}
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
