const assetCategories = [
  {
    name: "Currencies",
    items: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CHF", "USD/CAD"],
    color: "#0C8DF8",
  },
  {
    name: "Stocks",
    items: ["Apple", "Tesla", "Amazon", "Google", "Microsoft", "Meta"],
    color: "#53BB48",
  },
  {
    name: "Crypto",
    items: ["Bitcoin", "Ethereum", "Solana", "BNB", "XRP", "Cardano"],
    color: "#FF7E27",
  },
  {
    name: "Commodities",
    items: ["Gold", "Silver", "Oil", "Natural Gas", "Platinum", "Copper"],
    color: "#FFC107",
  },
];

export default function AssetsSection() {
  return (
    <section style={{ background: "#0d0d0d", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 26px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(28px,3.5vw,52px)",
              fontWeight: 900,
              color: "#F4F4F6",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            <span style={{ color: "#0C8DF8" }}>140+ assets</span> to explore
          </h2>
          <p
            style={{
              color: "#82889B",
              fontSize: "clamp(14px,1.2vw,18px)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Trade currencies, stocks, crypto, commodities and more — all in one platform
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {assetCategories.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 20px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${cat.color}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 14l4-5 3 3 4-7 5 4"
                    stroke={cat.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  color: "#F4F4F6",
                  marginBottom: 14,
                }}
              >
                {cat.name}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {cat.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "#82889B",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: cat.color,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#" className="btn-primary" style={{ fontSize: 16, padding: "14px 40px" }}>
            Start now
          </a>
        </div>
      </div>
    </section>
  );
}
