import Image from "next/image";

export default function ProtectSection() {
  return (
    <section id="protect" className="py-24 bg-[#151723]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-[#F4F4F6] text-center mb-12">
          Everything you want in a platform
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Card 1: Fund protection */}
          <div className="relative overflow-hidden rounded-3xl bg-[#232737] border border-[#393F56] min-h-[380px] flex flex-col justify-end group hover:border-[#0C8DF8]/50 transition-all">
            <div className="absolute inset-0">
              <Image
                src="/images/stockity/src/core/images/protect/card_3_desktop-467ada6d994d3f16.webp"
                alt="Fund protection"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151723] via-[rgba(21,23,35,0.6)] to-transparent" />
            </div>
            <div className="relative z-10 p-8">
              <h3 className="text-[clamp(22px,2.5vw,30px)] font-black text-[#F4F4F6] leading-tight">
                High-level{" "}
                <span className="text-[#0C8DF8]">fund protection</span> and
                transactions
              </h3>
            </div>
          </div>

          {/* Card 2: No hidden fees */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2035] to-[#232737] border border-[#393F56] min-h-[380px] flex flex-col justify-between p-8 group hover:border-[#0C8DF8]/50 transition-all">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, #0C8DF8 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Decorative chart lines */}
            <div className="relative z-10 flex-1 flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 300 160"
                fill="none"
                className="w-full max-w-[300px]"
              >
                {/* Grid lines */}
                {[0, 40, 80, 120, 160].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="300"
                    y2={y}
                    stroke="#393F56"
                    strokeWidth="1"
                  />
                ))}
                {/* Chart area fill */}
                <path
                  d="M0 140 L30 110 L70 120 L110 80 L150 90 L190 50 L240 60 L280 20 L300 30 L300 160 L0 160Z"
                  fill="url(#protectGrad)"
                  opacity="0.3"
                />
                {/* Chart line */}
                <path
                  d="M0 140 L30 110 L70 120 L110 80 L150 90 L190 50 L240 60 L280 20 L300 30"
                  stroke="#0C8DF8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Dots */}
                {[
                  [190, 50],
                  [280, 20],
                ].map(([cx, cy]) => (
                  <circle
                    key={`${cx},${cy}`}
                    cx={cx}
                    cy={cy}
                    r="5"
                    fill="#0C8DF8"
                  />
                ))}
                <defs>
                  <linearGradient
                    id="protectGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop stopColor="#0C8DF8" />
                    <stop offset="1" stopColor="#0C8DF8" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-[clamp(22px,2.5vw,30px)] font-black text-[#F4F4F6] leading-tight">
                Transparent investing
                <br />
                <span className="text-[#0C8DF8]">with no hidden fees</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
