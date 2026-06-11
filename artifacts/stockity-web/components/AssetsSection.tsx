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
    <section id="assets" className="py-24 bg-[#0d0f1a] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,5vw,60px)] font-black text-[#F4F4F6] leading-tight">
            <span className="text-[#0C8DF8]">140+ assets</span> to explore
          </h2>
          <p className="text-[#82889B] text-lg mt-4 max-w-xl mx-auto">
            Trade currencies, stocks, crypto, commodities and more — all in one platform
          </p>
        </div>

        {/* Asset category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {assetCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-[#232737] border border-[#393F56] rounded-2xl p-5 hover:border-[#0C8DF8]/50 transition-all hover:translate-y-[-2px]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${cat.color}20` }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 14l4-4 3 3 4-6 3 3"
                    stroke={cat.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[#F4F4F6] mb-3">{cat.name}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#82889B] flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#" className="btn-primary text-base !py-3.5 !px-10">
            Start now
          </a>
        </div>
      </div>
    </section>
  );
}
