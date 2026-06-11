export default function JoinSection() {
  return (
    <section className="py-24 bg-[#151723]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-[#232737] border border-[#393F56] p-12 sm:p-16 text-center">
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 50%, #0C8DF8 0%, transparent 70%)",
            }}
          />

          {/* Decorative dots */}
          <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-[#0C8DF8] opacity-50" />
          <div className="absolute top-12 left-16 w-1 h-1 rounded-full bg-[#0C8DF8] opacity-30" />
          <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-[#0C8DF8] opacity-50" />
          <div className="absolute bottom-12 right-16 w-1 h-1 rounded-full bg-[#0C8DF8] opacity-30" />

          <div className="relative z-10">
            <h2 className="text-[clamp(28px,4vw,52px)] font-black text-[#F4F4F6] leading-tight mb-8 max-w-[600px] mx-auto">
              Join the{" "}
              <span className="text-[#0C8DF8]">3,5+ million investors</span>{" "}
              using Stockity
            </h2>

            <a
              href="#"
              className="btn-primary text-lg !py-4 !px-12 !rounded-xl"
            >
              Start Now
            </a>

            {/* Mini stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-14">
              {[
                { value: "3.5M+", label: "Active investors" },
                { value: "$10", label: "Min. deposit" },
                { value: "1-2h", label: "Withdrawal time" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-[#F4F4F6]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-[#82889B] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
