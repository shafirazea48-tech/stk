export default function UsableSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C8DF8]/10 via-[#151723] to-[#151723]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #0C8DF8 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
        <p className="text-[clamp(14px,1.5vw,18px)] font-bold text-[#0C8DF8] uppercase tracking-widest mb-3">
          Usable, reliable, secure.
        </p>
        <h2 className="text-[clamp(32px,5vw,60px)] font-black text-[#F4F4F6] leading-tight mb-10">
          Works just as you expect
        </h2>

        {/* Feature highlights */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#0C8DF8" fillOpacity="0.1"/>
                  <path d="M13 20h14M20 13v14" stroke="#0C8DF8" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Easy to use",
              desc: "Clean interface designed for both beginners and professionals",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#0C8DF8" fillOpacity="0.1"/>
                  <path d="M12 20l5 5 11-11" stroke="#0C8DF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Always reliable",
              desc: "99.9% uptime so you never miss a trading opportunity",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#0C8DF8" fillOpacity="0.1"/>
                  <path d="M20 10l-9 4v7c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12v-7l-9-4z" stroke="#0C8DF8" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M16 20l3 3 5-5" stroke="#0C8DF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Fully secure",
              desc: "Bank-grade encryption protecting all your transactions",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 bg-[#232737] rounded-2xl border border-[#393F56]"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-[#F4F4F6] mb-2">{item.title}</h3>
              <p className="text-sm text-[#82889B]">{item.desc}</p>
            </div>
          ))}
        </div>

        <a href="#" className="btn-primary text-base !py-3.5 !px-10">
          Start trading
        </a>
      </div>
    </section>
  );
}
