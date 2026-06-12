"use client";

import { useState } from "react";
import { getT, Locale } from "@/lib/i18n/translations";

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

function FaqAnswer({ item, mobile }: { item: ReturnType<typeof getT>["faq"]["items"][number]; mobile?: boolean }) {
  const fs = mobile ? "3.88889vw" : "1.62037vw";
  const lh = mobile ? "5.55556vw" : "2.31481vw";
  const base: React.CSSProperties = { color: "#82889B", fontSize: fs, lineHeight: lh };

  if (item.type === "steps") {
    return (
      <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {item.steps.map((step, i) => (
          <li key={step} style={{ display: "flex", alignItems: "flex-start", gap: 10, ...base }}>
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
        ))}
      </ol>
    );
  }

  if (item.type === "highlight") {
    return (
      <p style={base}>
        {item.before}
        <span style={{ color: "#0C8DF8", fontWeight: 600 }}>{item.highlight}</span>
        {item.after}
      </p>
    );
  }

  return <p style={base}>{item.text}</p>;
}

export default function FaqSection({ locale }: { locale?: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = getT(locale ?? "en");
  const faqs = t.faq.items;

  return (
    <section style={{ background: "#000" }}>
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
          {t.faq.heading}
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
                >
                  {faq.question}
                </span>
                <ChevronIcon open={openIndex === index} />
              </button>

              {openIndex === index && (
                <div style={{ padding: "0 4.44444vw 4.44444vw" }}>
                  <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    <FaqAnswer item={faq} mobile />
                  </div>
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
          {t.faq.heading}
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
                >
                  {faq.question}
                </span>
                <ChevronIcon open={openIndex === index} />
              </button>

              {openIndex === index && (
                <div style={{ padding: "0 1.85185vw 1.85185vw" }}>
                  <div>
                    <FaqAnswer item={faq} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
