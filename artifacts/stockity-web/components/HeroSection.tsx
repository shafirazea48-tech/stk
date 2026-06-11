import Image from "next/image";

const FeatureCard = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <button className="flex items-center gap-2 px-4 py-3 bg-[rgba(35,39,55,0.85)] hover:bg-[#232737] border border-[#393F56] rounded-xl transition-colors text-left">
    <span className="text-[#0C8DF8] shrink-0">{icon}</span>
    <span className="text-sm font-semibold text-[#F4F4F6]">{text}</span>
  </button>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stockity/src/core/images/trade-smart/main_section_desktop-2e3a00c62a20cf21.webp"
          alt="Trading platform background"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151723] via-[rgba(21,23,35,0.85)] to-[rgba(21,23,35,0.3)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151723] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-[600px]">
          {/* Main title */}
          <h1 className="text-[clamp(36px,5.5vw,68px)] font-black leading-[1.05] text-[#F4F4F6] mb-8">
            Stockity.
            <br />
            Making investing
            <br />
            <span className="text-[#0C8DF8]">clear</span>
          </h1>

          {/* CTA Button */}
          <a
            href="#"
            className="btn-primary text-base !py-3.5 !px-8 !rounded-xl mb-10 inline-block"
          >
            Register Now
          </a>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-3 max-w-[500px]">
            <FeatureCard
              text="Intuitive interface"
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="7" height="7" rx="2" fill="currentColor" />
                  <rect x="11" y="2" width="7" height="7" rx="2" fill="currentColor" opacity="0.5" />
                  <rect x="2" y="11" width="7" height="7" rx="2" fill="currentColor" opacity="0.5" />
                  <rect x="11" y="11" width="7" height="7" rx="2" fill="currentColor" />
                </svg>
              }
            />
            <FeatureCard
              text="140+ assets"
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 14l4-4 3 3 4-6 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              }
            />
            <FeatureCard
              text="Secure transactions"
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 5.5v5c0 4 3 7.5 7 8.5 4-1 7-4.5 7-8.5v-5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
                  <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <FeatureCard
              text="Licensed and regulated"
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
