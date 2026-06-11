import Image from "next/image";

export default function CharitySection() {
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="relative min-h-[420px] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/stockity/src/home/images/charity/charity-d-63d410ad0ec0d753.webp"
            alt="Stockity Charity"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(21,23,35,0.9)] via-[rgba(21,23,35,0.7)] to-[rgba(21,23,35,0.3)]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-[540px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#53BB48]/15 border border-[#53BB48]/30 rounded-full px-4 py-1.5 mb-6">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 14S2 10.5 2 5.5A3.5 3.5 0 0 1 8 3.3 3.5 3.5 0 0 1 14 5.5C14 10.5 8 14 8 14z" fill="#53BB48"/>
              </svg>
              <span className="text-sm font-semibold text-[#53BB48]">Social Impact</span>
            </div>

            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-[#F4F4F6] leading-tight mb-4">
              Stockity cares and stays{" "}
              <span className="text-[#0C8DF8]">active</span>
            </h2>
            <p className="text-[#82889B] text-lg mb-8 leading-relaxed">
              We support environmental protection, animal welfare, sports, and many
              other initiatives. Read more to see how we give back to communities.
            </p>
            <a href="#" className="btn-primary">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
