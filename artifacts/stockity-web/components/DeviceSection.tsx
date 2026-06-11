import Image from "next/image";

export default function DeviceSection() {
  return (
    <section className="py-24 bg-[#151723]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-[#F4F4F6] text-center leading-tight mb-14">
          Invest wherever you want, on{" "}
          <span className="text-[#0C8DF8]">any device</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Mobile App card */}
          <div className="bg-[#232737] border border-[#393F56] rounded-3xl overflow-hidden relative hover:border-[#0C8DF8]/40 transition-all group">
            <div className="p-8">
              <h3 className="text-2xl font-black text-[#F4F4F6] mb-6">
                Mobile Apps
              </h3>

              {/* App store buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#151723] border border-[#393F56] rounded-xl px-4 py-3 hover:bg-[#393F56]/60 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.5 12.5c0-2.8 2.2-3.3 2.3-3.4-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-.9C6.2 7.2 4.2 8.2 3.2 10c-2.1 3.7-.5 9.1 1.5 12.1 1 1.4 2.1 3 3.6 3 1.5-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.9s2.6-1.5 3.5-2.9c1.1-1.6 1.5-3.2 1.6-3.3-.1 0-3.3-1.3-3.3-4.4z" fill="white"/>
                    <path d="M15.3 5.4C16 4.5 16.5 3.2 16.3 2c-1.1.1-2.5.8-3.3 1.7-.7.8-1.3 2.1-1.1 3.2 1.2.1 2.5-.6 3.4-1.5z" fill="white"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-[#82889B] leading-none">Download on the</p>
                    <p className="text-sm font-bold text-[#F4F4F6]">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#151723] border border-[#393F56] rounded-xl px-4 py-3 hover:bg-[#393F56]/60 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 1.7L13.8 12 3.6 22.3c-.5-.3-.9-1-.9-2.2V3.9c0-1.1.4-1.9.9-2.2zM14.8 13l2.2 2.2-10.9 6.2 8.7-8.4zM20 10.7c.7.4 1.1 1 1.1 1.6s-.4 1.2-1.1 1.6l-1.9 1.1-2.3-2.3 2.3-2.3 1.9 1.1zM6.1 2.6l10.9 6.2L14.8 11l-8.7-8.4z" fill="#00C853"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-[#82889B] leading-none">Get it on</p>
                    <p className="text-sm font-bold text-[#F4F4F6]">Google Play</p>
                  </div>
                </a>
              </div>

              {/* QR code link */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/images/stockity/src/core/images/device/qr-code_en-12d10e19e65f695a.svg"
                    alt="QR Code"
                    width={44}
                    height={44}
                  />
                </div>
                <a href="#" className="text-sm text-[#0C8DF8] hover:underline font-semibold">
                  Download Android APK &gt;
                </a>
              </div>
            </div>

            {/* Mobile app image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <Image
                src="/images/stockity/src/core/images/device/mob_desktop-873a8cb8ab00908e.webp"
                alt="Stockity mobile app"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Web Platform card */}
          <div className="bg-[#232737] border border-[#393F56] rounded-3xl overflow-hidden relative hover:border-[#0C8DF8]/40 transition-all group">
            <div className="p-8">
              <h3 className="text-2xl font-black text-[#F4F4F6] mb-4">
                Web Platform
              </h3>
              <p className="text-[#82889B] mb-6">
                Access full trading features directly in your browser — no downloads needed
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#151723] border border-[#393F56] rounded-xl px-5 py-3 text-sm font-bold text-[#F4F4F6] hover:bg-[#393F56]/60 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#0C8DF8" strokeWidth="1.5"/>
                  <ellipse cx="9" cy="9" rx="3" ry="7" stroke="#0C8DF8" strokeWidth="1.2"/>
                  <path d="M2 9h14" stroke="#0C8DF8" strokeWidth="1.2"/>
                </svg>
                Open Web Platform
              </a>
            </div>

            {/* Web platform image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <Image
                src="/images/stockity/src/core/images/device/web_desktop-358cd5506175c9cf.webp"
                alt="Stockity web platform"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
