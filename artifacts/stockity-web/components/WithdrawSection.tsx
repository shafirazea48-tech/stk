const paymentMethods = [
  {
    name: "Visa",
    logo: (
      <svg viewBox="0 0 750 471" fill="none" style={{ height: 28 }}>
        <path d="M278.2 334.2L304 138.6H342L316.2 334.2H278.2Z" fill="white"/>
        <path d="M448.3 142.1C440.5 139.1 428.3 136 413.3 136C375.7 136 349.5 155 349.3 182.3C349.1 202.3 367.5 213.3 381.4 220C395.7 226.9 400.5 231.3 400.5 237.5C400.3 247.1 389.3 251.3 379 251.3C365.1 251.3 357.7 249.3 346.1 244.1L341.5 242L336.5 275.5C346.3 280.1 364.5 284 383.5 284.2C423.5 284.2 449.1 265.5 449.4 236.3C449.6 220.1 439.8 207.7 418.7 197.5C405.9 191 398.1 186.6 398.1 179.8C398.3 173.7 405.1 167.4 420.4 167.4C433.1 167.2 442.5 170.1 449.5 173.1L452.9 174.6L448.3 142.1Z" fill="white"/>
        <path d="M543.5 138.6H513.5C505.1 138.6 498.7 141 495.1 149.6L438.8 334.2H478.8L487 309H533.5L538.1 334.2H573.5L543.5 138.6ZM497.8 281.5C500.7 273.3 511.5 244.1 511.5 244.1C511.3 244.5 514.5 235.7 516.5 230.3L519.2 243C519.2 243 526.5 276.9 528 281.5H497.8Z" fill="white"/>
        <path d="M222.7 138.6L185.5 265.3L181.5 244.5C174.5 222.1 154.5 197.9 132 185.3L165.5 334H205.5L267.5 138.6H222.7Z" fill="white"/>
        <path d="M153.6 138.6H91.3L90.5 141.8C138.3 153.8 169.8 181.8 181.5 244.5L169.5 149.6C167.5 141.2 161.3 138.8 153.6 138.6Z" fill="#EEB609"/>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    logo: (
      <svg viewBox="0 0 152 96" fill="none" style={{ height: 34 }}>
        <circle cx="57" cy="48" r="45" fill="#EB001B"/>
        <circle cx="95" cy="48" r="45" fill="#F79E1B"/>
        <path d="M76 15.7a45 45 0 0 1 0 64.6A45 45 0 0 1 76 15.7z" fill="#FF5F00"/>
      </svg>
    ),
  },
  {
    name: "Bank Transfer",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg viewBox="0 0 60 40" fill="none" style={{ height: 28 }}>
          <rect x="1" y="10" width="58" height="26" rx="4" fill="#1a3a5c" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <path d="M30 5L6 14h48L30 5Z" fill="#0C8DF8"/>
          <rect x="8" y="20" width="9" height="10" fill="#0C8DF8" rx="1.5" opacity="0.8"/>
          <rect x="22" y="20" width="9" height="10" fill="#0C8DF8" rx="1.5" opacity="0.8"/>
          <rect x="36" y="20" width="9" height="10" fill="#0C8DF8" rx="1.5" opacity="0.8"/>
        </svg>
        <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>Bank Transfer</span>
      </div>
    ),
  },
  {
    name: "Skrill",
    logo: (
      <div style={{ background: "#862165", borderRadius: 8, padding: "6px 14px" }}>
        <span style={{ color: "#fff", fontWeight: 900, fontSize: 18 }}>Skrill</span>
      </div>
    ),
  },
  {
    name: "Neteller",
    logo: (
      <div
        style={{
          background: "#1D262C",
          borderRadius: 8,
          border: "1.5px solid #5AAC44",
          padding: "6px 12px",
        }}
      >
        <span style={{ color: "#5AAC44", fontWeight: 900, fontSize: 15 }}>NETELLER</span>
      </div>
    ),
  },
  {
    name: "Crypto",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg viewBox="0 0 40 40" fill="none" style={{ height: 34 }}>
          <circle cx="20" cy="20" r="18" fill="#F7931A"/>
          <path d="M26.5 17.8c.4-2.6-1.6-4-4.3-4.9l.9-3.5-2.2-.5-.8 3.4c-.6-.1-1.2-.3-1.7-.4l.8-3.5-2.2-.5-.9 3.5-3.5-.9-.6 2.3s1.6.4 1.5.4c.9.2 1 .8 1 1.2l-2.5 10c-.1.3-.4.6-1 .5h-1.5l-1 2.5 3.4.8-1 4 2.2.5 1-4 1.8.4-1 4 2.2.5 1-3.9c4.1.8 7.2-.4 8.4-3.9 1-3-0-4.4-2.1-5.4 1.5-.4 2.6-1.4 2.9-3.4zm-5.4 7.5c-.8 2.9-5.5 1.3-7.1 1l1.3-5c1.6.4 6.7 1.2 5.8 4zm.8-7.5c-.6 2.6-4.7 1.3-6 .9l1.1-4.5c1.3.3 5.6.9 4.9 3.6z" fill="white"/>
        </svg>
        <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>Crypto</span>
      </div>
    ),
  },
];

export default function WithdrawSection() {
  return (
    <section style={{ background: "#0d0d0d", padding: "80px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 26px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(28px,3.5vw,48px)",
              fontWeight: 900,
              color: "#F4F4F6",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Deposit &amp; withdraw using{" "}
            <span style={{ color: "#0C8DF8" }}>local payment methods</span>
          </h2>
          <p style={{ color: "#82889B", fontSize: "clamp(14px,1.2vw,18px)" }}>
            Fast and secure transactions — your funds arrive within 1-2 hours
          </p>
        </div>

        {/* Payment logos */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 140,
                height: 84,
              }}
            >
              {method.logo}
            </div>
          ))}
        </div>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {[
            { title: "1-2 hours", desc: "Withdrawal processing time" },
            { title: "Secure", desc: "SSL encrypted transactions" },
            { title: "No extra fees", desc: "On deposits and withdrawals" },
          ].map((item) => (
            <div key={item.title}>
              <p style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: 900, color: "#F4F4F6", marginBottom: 6 }}>
                {item.title}
              </p>
              <p style={{ fontSize: 14, color: "#82889B" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
