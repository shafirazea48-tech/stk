const paymentMethods = [
  {
    name: "Visa",
    logo: (
      <svg viewBox="0 0 80 26" fill="none" className="h-7">
        <path d="M31.5 0.8L27.2 25.2H33.4L37.7 0.8H31.5ZM53.5 0.8L47.9 17.1L47.2 13.5L47.2 13.5L45.1 3.1C45.1 3.1 44.8 0.8 41.9 0.8H32.5L32.4 1.2C32.4 1.2 35.1 1.8 38.3 3.7L43.5 25.2H50L60.2 0.8H53.5ZM71.8 0.8H65.4C62.9 0.8 62.4 2.6 62.4 2.6L52.8 25.2H59.7L61.1 21.2H69.5L70.3 25.2H76.5L71.8 0.8ZM63 16.2L66.5 6.8L68.5 16.2H63ZM22.6 0.8L13 17.4L12.1 12.5C10.6 7.7 6.2 2.5 1.3 0.1L7.9 25.2H14.8L25.5 0.8H22.6Z" fill="#1A1F71"/>
        <path d="M5.1 0.8H-0.1L-0.2 1.2C3.5 2.1 6.8 3.8 9.2 6.2C12.1 9 13.1 12.5 13.1 12.5L11.9 3.1C11.7 1.1 10 0.8 5.1 0.8Z" fill="#F9A533"/>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    logo: (
      <svg viewBox="0 0 52 32" fill="none" className="h-7">
        <circle cx="19" cy="16" r="15" fill="#EB001B"/>
        <circle cx="33" cy="16" r="15" fill="#F79E1B"/>
        <path d="M26 5.7a15 15 0 0 1 0 20.6A15 15 0 0 1 26 5.7z" fill="#FF5F00"/>
      </svg>
    ),
  },
  {
    name: "Bank Transfer",
    logo: (
      <svg viewBox="0 0 60 32" fill="none" className="h-7 w-auto">
        <rect x="1" y="8" width="58" height="20" rx="3" fill="#E8F5FF" stroke="#0C8DF8" strokeWidth="2"/>
        <path d="M30 4L8 12h44L30 4Z" fill="#0C8DF8"/>
        <rect x="9" y="16" width="8" height="8" fill="#0C8DF8" rx="1"/>
        <rect x="22" y="16" width="8" height="8" fill="#0C8DF8" rx="1"/>
        <rect x="35" y="16" width="8" height="8" fill="#0C8DF8" rx="1"/>
        <rect x="48" y="16" width="5" height="8" fill="#0C8DF8" rx="1"/>
      </svg>
    ),
  },
  {
    name: "Skrill",
    logo: (
      <div className="px-3 py-1 bg-[#862165] rounded-lg">
        <span className="text-white font-black text-lg">Skrill</span>
      </div>
    ),
  },
  {
    name: "Neteller",
    logo: (
      <div className="px-3 py-1 bg-[#1D262C] rounded-lg border border-[#5AAC44]">
        <span className="text-[#5AAC44] font-black text-base">NETELLER</span>
      </div>
    ),
  },
  {
    name: "Crypto",
    logo: (
      <svg viewBox="0 0 40 32" fill="none" className="h-7 w-auto">
        <circle cx="20" cy="16" r="14" fill="#F7931A"/>
        <path d="M25.5 14.3c.3-2.1-1.3-3.2-3.5-3.9l.7-2.8-1.7-.4-.7 2.8-1.4-.3.7-2.8-1.7-.4-.7 2.8-2.8-.7-.5 1.9s1.3.3 1.2.3c.7.2.8.6.8 1l-2 8c-.1.2-.3.5-.8.4 0 .1-1.2-.3-1.2-.3l-.8 2 2.7.7-.8 3 1.7.4.8-3 1.4.3-.8 3 1.7.4.8-3.1c3.3.6 5.7-.3 6.7-3.1.8-2.2 0-3.5-1.7-4.3 1.2-.3 2.1-1.1 2.4-2.7zm-4.3 6c-.6 2.3-4.4 1.1-5.7.8l1-4c1.3.3 5.3 1 4.7 3.2zm.6-6c-.5 2.1-3.8 1-4.8.8l.9-3.6c1 .2 4.4.7 3.9 2.8z" fill="white"/>
      </svg>
    ),
  },
];

export default function WithdrawSection() {
  return (
    <section id="withdraw" className="py-24 bg-[#0d0f1a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-[#F4F4F6] leading-tight">
            Deposit &amp; withdraw using{" "}
            <span className="text-[#0C8DF8]">local payment methods</span>
          </h2>
          <p className="text-[#82889B] text-lg mt-4">
            Fast and secure transactions — your funds arrive within 1-2 hours
          </p>
        </div>

        {/* Payment methods grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="bg-[#232737] border border-[#393F56] rounded-2xl px-8 py-6 flex items-center justify-center hover:border-[#0C8DF8]/50 hover:bg-[#232737]/80 transition-all min-w-[140px] h-[80px]"
            >
              {method.logo}
            </div>
          ))}
        </div>

        {/* Withdraw feature bullets */}
        <div className="grid sm:grid-cols-3 gap-6 mt-14 max-w-3xl mx-auto">
          {[
            { icon: "⚡", title: "1-2 hours", desc: "Withdrawal processing time" },
            { icon: "🔒", title: "Secure", desc: "SSL encrypted transactions" },
            { icon: "💳", title: "No extra fees", desc: "on deposits and withdrawals" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-black text-lg text-[#F4F4F6]">{item.title}</p>
              <p className="text-sm text-[#82889B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
