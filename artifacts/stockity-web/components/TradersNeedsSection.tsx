export default function TradersNeedsSection() {
  const stars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <section id="traders-needs" className="bg-[#151723] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-[#F4F4F6] leading-tight mb-4">
              A platform designed with{" "}
              <span className="text-[#0C8DF8]">users in mind</span>
            </h2>
            <p className="text-[#82889B] text-lg mb-8">
              Explore the market at your own pace
            </p>
            <a href="#" className="btn-primary">
              Start now
            </a>

            {/* Rating */}
            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="text-5xl font-black text-[#F4F4F6]">4.8</p>
                <p className="text-sm text-[#82889B] mt-1">Rating</p>
              </div>
              <div className="flex gap-1">
                {stars.map((i) => (
                  <svg
                    key={i}
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill={i < 5 ? "#FFC107" : "none"}
                    stroke="#FFC107"
                    strokeWidth="1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                number: "3.5M+",
                label: "investors worldwide",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="12" cy="10" r="4" stroke="#0C8DF8" strokeWidth="2"/>
                    <circle cx="22" cy="10" r="4" stroke="#0C8DF8" strokeWidth="2" opacity="0.6"/>
                    <path d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#0C8DF8" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 18c3.314 0 6 2.686 6 6" stroke="#0C8DF8" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                ),
              },
              {
                number: "140+",
                label: "assets to trade",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 24l6-8 5 5 6-10 7 6" stroke="#0C8DF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                number: "$10",
                label: "minimum deposit",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="#0C8DF8" strokeWidth="2"/>
                    <path d="M16 8v2M16 22v2M12 12h5a3 3 0 0 1 0 6h-2a3 3 0 0 0 0 6h5" stroke="#0C8DF8" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                number: "170+",
                label: "countries available",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="#0C8DF8" strokeWidth="2"/>
                    <ellipse cx="16" cy="16" rx="5" ry="12" stroke="#0C8DF8" strokeWidth="1.5"/>
                    <path d="M4 16h24" stroke="#0C8DF8" strokeWidth="1.5"/>
                    <path d="M6 10h20M6 22h20" stroke="#0C8DF8" strokeWidth="1.5"/>
                  </svg>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#232737] rounded-2xl p-6 border border-[#393F56] hover:border-[#0C8DF8]/40 transition-colors"
              >
                <div className="mb-3">{stat.icon}</div>
                <p className="text-3xl font-black text-[#F4F4F6]">{stat.number}</p>
                <p className="text-sm text-[#82889B] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
