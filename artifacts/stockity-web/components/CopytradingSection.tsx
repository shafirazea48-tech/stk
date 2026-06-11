import Image from "next/image";

export default function CopytradingSection() {
  return (
    <section id="copytrading" className="py-0 overflow-hidden">
      <div className="relative min-h-[500px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/stockity/src/core/images/copytrading/section_copytrading_desktop-7481b3aa75b4535e.webp"
            alt="Copy trading"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151723] via-[rgba(21,23,35,0.75)] to-[rgba(21,23,35,0.3)]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-[520px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0C8DF8]/15 border border-[#0C8DF8]/30 rounded-full px-4 py-1.5 mb-6">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.6l-3.7 1.9.7-4.1L2 5.5l4.2-.9L8 1z" fill="#0C8DF8"/>
              </svg>
              <span className="text-sm font-semibold text-[#0C8DF8]">Copy Trading</span>
            </div>

            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-[#F4F4F6] leading-tight mb-4">
              Learn from the{" "}
              <span className="text-[#0C8DF8]">experts</span>
            </h2>
            <p className="text-[#82889B] text-lg mb-8 leading-relaxed">
              Study successful investment strategies and apply them to your
              routine
            </p>

            <a href="#" className="btn-primary text-base !py-3.5 !px-8">
              Start now
            </a>

            {/* Stats */}
            <div className="mt-10 flex gap-8">
              {[
                { value: "1000+", label: "Expert traders" },
                { value: "70%", label: "Avg. success rate" },
                { value: "24/7", label: "Strategy updates" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-[#F4F4F6]">{stat.value}</p>
                  <p className="text-xs text-[#82889B] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
