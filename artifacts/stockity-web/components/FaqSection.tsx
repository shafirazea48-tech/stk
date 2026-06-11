"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I start?",
    answer: (
      <ol className="list-none space-y-1.5">
        {[
          "Register in seconds",
          "Deposit easily",
          "Learn for free",
          "Predict assets moves",
          "Withdraw anytime",
        ].map((step, i) => (
          <li key={step} className="flex items-start gap-3 text-[#82889B]">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0C8DF8]/20 text-[#0C8DF8] text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    ),
  },
  {
    question: "How fast will I get my withdrawals?",
    answer: (
      <p className="text-[#82889B]">
        All requests are processed within{" "}
        <span className="text-[#0C8DF8] font-semibold">1-2 hours</span>. Our
        financial team works around the clock to ensure fast and secure
        transactions.
      </p>
    ),
  },
  {
    question: "Is there a demo account?",
    answer: (
      <p className="text-[#82889B]">
        Yes! You get a{" "}
        <span className="text-[#0C8DF8] font-semibold">$10,000 demo account</span>{" "}
        completely free. Use it to practice trading strategies, explore assets,
        and test strategies — all with no real money at risk.
      </p>
    ),
  },
  {
    question: "Are there any special events?",
    answer: (
      <p className="text-[#82889B]">
        Of course! Subscribe to our e-mails to get notified about new activities
        you can participate in. We regularly host tournaments, contests, and
        exclusive promotions for our users.
      </p>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 bg-[#0d0f1a]"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-[#F4F4F6] text-center mb-12">
          FAQ
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`bg-[#232737] border rounded-2xl overflow-hidden transition-colors ${
                openIndex === index
                  ? "border-[#0C8DF8]/50"
                  : "border-[#393F56] hover:border-[#51576C]"
              }`}
              itemScope
              itemType="https://schema.org/Question"
              itemProp="mainEntity"
            >
              <button
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span
                  className="font-bold text-base sm:text-lg text-[#F4F4F6] pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index
                      ? "bg-[#0C8DF8] rotate-180"
                      : "bg-[#393F56]"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 5l4 4 4-4"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div
                  className="px-5 sm:px-6 pb-5 sm:pb-6"
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
