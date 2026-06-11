import Image from "next/image";

export default function PartnerSection() {
  return (
    <section id="partner" className="relative py-0 overflow-hidden">
      <div className="relative min-h-[420px] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/stockity/src/core/images/partner/section_partner_desktop-2b5dcbed303e6b5a.webp"
            alt="Stockity licensed platform"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(21,23,35,0.9)] to-[rgba(21,23,35,0.5)]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-[540px]">
            {/* Regulation badge */}
            <div className="inline-flex items-center gap-2 bg-[#0C8DF8]/15 border border-[#0C8DF8]/30 rounded-full px-4 py-1.5 mb-6">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l-7 3.5v4c0 4 3 7.5 7 8.5 4-1 7-4.5 7-8.5v-4L8 1z" fill="#0C8DF8" fillOpacity="0.3" stroke="#0C8DF8" strokeWidth="1"/>
                <path d="M5 8l2 2 4-4" stroke="#0C8DF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-semibold text-[#0C8DF8]">Regulated &amp; Licensed</span>
            </div>

            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-[#F4F4F6] leading-tight mb-8">
              Stockity is a{" "}
              <span className="text-[#0C8DF8]">licensed and regulated</span>{" "}
              online platform
            </h2>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🏛️", text: "Official license", sub: "Reg.No. 700726" },
                { icon: "🌍", text: "Global presence", sub: "170+ countries" },
                { icon: "🔐", text: "Segregated funds", sub: "Client protection" },
                { icon: "📋", text: "AML compliant", sub: "Full compliance" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="bg-[rgba(35,39,55,0.8)] border border-[#393F56] rounded-xl p-3 flex items-center gap-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-[#F4F4F6]">{item.text}</p>
                    <p className="text-xs text-[#82889B]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="btn-primary">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
