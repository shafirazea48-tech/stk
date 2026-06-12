"use client";
import { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import type { Locale } from "@/lib/i18n/translations";

type PricingT = {
  pageTitle: string;
  pageSubtitle: string;
  mostPopular: string;
  topFeaturesLabel: string;
  features: string[];
  profitability: string;
  assets: string;
  cashback: string;
  tradesOnDemo: string;
  withdrawals: string;
  inviteFriends: string;
  depositBonuses: string;
  registration: string;
  get: string;
  vipFastWithdrawTitle: string;
  vipFastWithdrawDesc: string;
  vipRiskFreeTitle: string;
  vipRiskFreeDesc: string;
  platCashbackTitle: string;
  platCashbackDesc: string;
  platInsuranceTitle: string;
  platInsuranceDesc: string;
};

const t: Record<Locale, PricingT> = {
  en: {
    pageTitle: "Statuses",
    pageSubtitle: "More trading advantages and benefits with each status. Check in cards below",
    mostPopular: "MOST POPULAR",
    topFeaturesLabel: "TOP FEATURES",
    features: [
      "Risk-free trades to protect your investments from losses",
      "Free access to VIP tournaments",
      "Personal manager",
      "Insurance for your deposits if your balance reaches 0",
      "Multi-window trading",
      "Crypto calendar",
      "Monthly Cashback Plus of 5% for unsuccessful trades",
      "High priority support",
      "Deposit insurance",
    ],
    profitability: "profitability",
    assets: "assets",
    cashback: "cashback",
    tradesOnDemo: "trades on demo",
    withdrawals: "Withdrawals",
    inviteFriends: "Invite Friends",
    depositBonuses: "Deposit bonuses",
    registration: "Registration",
    get: "Get",
    vipFastWithdrawTitle: "Fast withdraw",
    vipFastWithdrawDesc: "Get your funds in 4 hours or less",
    vipRiskFreeTitle: "Risk-free trades",
    vipRiskFreeDesc: "Profit from successful trades and forget the unsuccessful",
    platCashbackTitle: "Cashback Plus",
    platCashbackDesc: "Additional 5% compensation for unsuccessful trades every month",
    platInsuranceTitle: "Deposit insurance",
    platInsuranceDesc: "Use your money with more certainty. Increased deposit insurance can help",
  },
  id: {
    pageTitle: "Status",
    pageSubtitle: "Lebih banyak keuntungan dan manfaat trading dengan setiap status. Lihat kartu di bawah",
    mostPopular: "TERPOPULER",
    topFeaturesLabel: "FITUR UNGGULAN",
    features: [
      "Trading bebas risiko untuk melindungi investasi Anda dari kerugian",
      "Akses gratis ke turnamen VIP",
      "Manajer pribadi",
      "Asuransi deposit jika saldo Anda mencapai 0",
      "Trading multi-jendela",
      "Kalender kripto",
      "Cashback Plus bulanan 5% untuk trading yang tidak berhasil",
      "Dukungan prioritas tinggi",
      "Asuransi deposit",
    ],
    profitability: "profitabilitas",
    assets: "aset",
    cashback: "cashback",
    tradesOnDemo: "trading demo",
    withdrawals: "Penarikan",
    inviteFriends: "Undang Teman",
    depositBonuses: "Bonus Deposit",
    registration: "Daftar",
    get: "Dapatkan",
    vipFastWithdrawTitle: "Penarikan cepat",
    vipFastWithdrawDesc: "Dapatkan dana Anda dalam 4 jam atau kurang",
    vipRiskFreeTitle: "Trading bebas risiko",
    vipRiskFreeDesc: "Untung dari trading sukses dan lupakan yang tidak berhasil",
    platCashbackTitle: "Cashback Plus",
    platCashbackDesc: "Kompensasi tambahan 5% untuk trading yang tidak berhasil setiap bulan",
    platInsuranceTitle: "Asuransi deposit",
    platInsuranceDesc: "Gunakan uang Anda dengan lebih yakin. Asuransi deposit yang ditingkatkan dapat membantu",
  },
  es: {
    pageTitle: "Estados",
    pageSubtitle: "Más ventajas y beneficios de trading con cada estado. Consulta las tarjetas a continuación",
    mostPopular: "MÁS POPULAR",
    topFeaturesLabel: "CARACTERÍSTICAS PRINCIPALES",
    features: [
      "Operaciones sin riesgo para proteger tus inversiones de pérdidas",
      "Acceso gratuito a torneos VIP",
      "Gerente personal",
      "Seguro de depósito si tu saldo llega a 0",
      "Trading multi-ventana",
      "Calendario de criptomonedas",
      "Cashback Plus mensual del 5% para operaciones fallidas",
      "Soporte de alta prioridad",
      "Seguro de depósito",
    ],
    profitability: "rentabilidad",
    assets: "activos",
    cashback: "cashback",
    tradesOnDemo: "operaciones demo",
    withdrawals: "Retiros",
    inviteFriends: "Invitar amigos",
    depositBonuses: "Bonos de depósito",
    registration: "Registro",
    get: "Obtener",
    vipFastWithdrawTitle: "Retiro rápido",
    vipFastWithdrawDesc: "Recibe tus fondos en 4 horas o menos",
    vipRiskFreeTitle: "Operaciones sin riesgo",
    vipRiskFreeDesc: "Gana en operaciones exitosas y olvida las fallidas",
    platCashbackTitle: "Cashback Plus",
    platCashbackDesc: "Compensación adicional del 5% por operaciones fallidas cada mes",
    platInsuranceTitle: "Seguro de depósito",
    platInsuranceDesc: "Usa tu dinero con más confianza. El seguro de depósito ampliado puede ayudar",
  },
  pt: {
    pageTitle: "Status",
    pageSubtitle: "Mais vantagens e benefícios de trading com cada status. Confira os cartões abaixo",
    mostPopular: "MAIS POPULAR",
    topFeaturesLabel: "DESTAQUES",
    features: [
      "Operações sem risco para proteger seus investimentos de perdas",
      "Acesso gratuito a torneios VIP",
      "Gerente pessoal",
      "Seguro de depósito se seu saldo chegar a 0",
      "Trading multi-janela",
      "Calendário de criptomoedas",
      "Cashback Plus mensal de 5% para operações malsucedidas",
      "Suporte de alta prioridade",
      "Seguro de depósito",
    ],
    profitability: "rentabilidade",
    assets: "ativos",
    cashback: "cashback",
    tradesOnDemo: "operações demo",
    withdrawals: "Saques",
    inviteFriends: "Convidar amigos",
    depositBonuses: "Bônus de depósito",
    registration: "Cadastro",
    get: "Obter",
    vipFastWithdrawTitle: "Saque rápido",
    vipFastWithdrawDesc: "Receba seus fundos em 4 horas ou menos",
    vipRiskFreeTitle: "Operações sem risco",
    vipRiskFreeDesc: "Lucre com operações bem-sucedidas e esqueça as malsucedidas",
    platCashbackTitle: "Cashback Plus",
    platCashbackDesc: "Compensação adicional de 5% por operações malsucedidas todo mês",
    platInsuranceTitle: "Seguro de depósito",
    platInsuranceDesc: "Use seu dinheiro com mais segurança. O seguro de depósito ampliado pode ajudar",
  },
};

const CheckIcon = ({ checked }: { checked: boolean }) =>
  checked ? (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="9" cy="9" r="9" fill="rgba(9,144,255,0.15)" />
      <path d="M5 9l3 3 5-5" stroke="#0c8df8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <path d="M5.5 5.5l7 7M12.5 5.5l-7 7" stroke="rgba(130,136,155,0.5)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );

const GemIcon = ({ color }: { color: string }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" fill={color} opacity="0.25" />
    <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" stroke={color} strokeWidth="1.5" />
    <path d="M18 3L32 11H4L18 3Z" fill={color} opacity="0.4" />
  </svg>
);

export default function PricingPageContent({ locale }: { locale: Locale }) {
  const tr = t[locale];
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const tiers = [
    {
      id: "free", name: "Free", accentColor: "#82889b", cardBg: "#161d30",
      border: "1px solid rgba(255,255,255,0.10)", mostPopular: false, gemColor: "#82889b",
      mainStat: null,
      statBoxes: [{ value: "30", label: tr.tradesOnDemo }, { value: "100+", label: tr.assets }],
      topFeatures: null,
      rows: [
        { label: tr.withdrawals, value: "—" },
        { label: tr.inviteFriends, value: "—" },
        { label: tr.depositBonuses, value: "—" },
      ],
      checkedFeatures: [] as number[], cta: tr.registration,
    },
    {
      id: "standard", name: "Standard", accentColor: "#c0c8d8", cardBg: "#161d30",
      border: "1px solid rgba(255,255,255,0.10)", mostPopular: false, gemColor: "#c0c8d8",
      mainStat: { value: "up to 85%", label: tr.profitability },
      statBoxes: [{ value: "120+", label: tr.assets }],
      topFeatures: null,
      rows: [
        { label: tr.withdrawals, value: "3 days" },
        { label: tr.inviteFriends, value: "up to $50", linkColor: "#0c8df8" },
        { label: tr.depositBonuses, value: "up to 100%" },
      ],
      checkedFeatures: [] as number[], cta: tr.get,
    },
    {
      id: "gold", name: "Gold", accentColor: "#f5c842", cardBg: "#161d30",
      border: "1px solid rgba(255,255,255,0.10)", mostPopular: false, gemColor: "#f5c842",
      mainStat: { value: "up to 90%", label: tr.profitability },
      statBoxes: [{ value: "130+", label: tr.assets }, { value: "3%", label: tr.cashback }],
      topFeatures: null,
      rows: [
        { label: tr.withdrawals, value: "24 hours" },
        { label: tr.inviteFriends, value: "up to $50", linkColor: "#0c8df8" },
        { label: tr.depositBonuses, value: "up to 150%" },
      ],
      checkedFeatures: [] as number[], cta: tr.get,
    },
    {
      id: "vip", name: "VIP", accentColor: "#0c8df8",
      cardBg: "linear-gradient(160deg, #0d2144 0%, #071528 100%)",
      border: "1px solid rgba(12,141,248,0.3)", mostPopular: true, gemColor: "#4da6ff",
      mainStat: { value: "up to 90%", label: tr.profitability },
      statBoxes: [{ value: "140+", label: tr.assets }, { value: "7%", label: tr.cashback }],
      topFeatures: [
        { color: "#0c8df8", title: tr.vipFastWithdrawTitle, desc: tr.vipFastWithdrawDesc },
        { color: "#0c8df8", title: tr.vipRiskFreeTitle, desc: tr.vipRiskFreeDesc },
      ],
      rows: [
        { label: tr.withdrawals, value: "4 hours" },
        { label: tr.inviteFriends, value: "up to $850", linkColor: "#4da6ff" },
        { label: tr.depositBonuses, value: "up to 200%" },
      ],
      checkedFeatures: [0, 1, 2, 3, 4, 5] as number[], cta: tr.get,
    },
    {
      id: "platinum", name: "Platinum", accentColor: "#a78bfa",
      cardBg: "linear-gradient(160deg, #1e1040 0%, #120a2e 100%)",
      border: "1px solid rgba(167,139,250,0.3)", mostPopular: false, gemColor: "#a78bfa",
      mainStat: { value: "up to 90%", label: tr.profitability },
      statBoxes: [{ value: "140+", label: tr.assets }, { value: "10%", label: tr.cashback }],
      topFeatures: [
        { color: "#a78bfa", title: tr.platCashbackTitle, desc: tr.platCashbackDesc },
        { color: "#a78bfa", title: tr.platInsuranceTitle, desc: tr.platInsuranceDesc },
      ],
      rows: [
        { label: tr.withdrawals, value: "4 hours" },
        { label: tr.inviteFriends, value: "up to $850", linkColor: "#a78bfa" },
        { label: tr.depositBonuses, value: "up to 300%" },
      ],
      checkedFeatures: [0, 1, 2, 3, 4, 5, 6, 7, 8] as number[], cta: tr.get,
    },
  ];

  const tierIcons = [
    { id: "free", color: "#82889b", label: "Free" },
    { id: "standard", color: "#c0c8d8", label: "Standard" },
    { id: "gold", color: "#f5c842", label: "Gold" },
    { id: "vip", color: "#4da6ff", label: "VIP" },
    { id: "platinum", color: "#a78bfa", label: "Platinum" },
  ];

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const scrollCenter = el.scrollLeft + el.offsetWidth / 2;
      let closestIdx = 0, closestDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - scrollCenter);
        if (dist < closestDist) { closestDist = dist; closestIdx = i; }
      });
      setActiveSlide(closestIdx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSlide = (idx: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const card = cards[idx] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2, behavior: "smooth" });
    setActiveSlide(idx);
  };

  const scrollSlider = (dir: "prev" | "next") =>
    scrollToSlide(Math.max(0, Math.min(tiers.length - 1, activeSlide + (dir === "next" ? 1 : -1))));

  return (
    <>
      <Header locale={locale} />
      <main style={{ minHeight: "100vh", backgroundColor: "#0e1120", paddingTop: "calc(5.55556vw + 60px)", paddingBottom: "5.55556vw", boxSizing: "border-box" }}>
        <div style={{ padding: "0 3.70370vw", marginBottom: "3.70370vw" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <h1 style={{ fontSize: "clamp(32px, 3.88889vw, 64px)", fontWeight: 800, color: "#f4f4f6", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {tr.pageTitle}
              </h1>
              <p style={{ margin: "12px 0 0", fontSize: "clamp(14px, 1.11111vw, 18px)", color: "#82889b", lineHeight: 1.6 }}>
                {tr.pageSubtitle}
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
              {(["←", "→"] as const).map((a) => (
                <button key={a} onClick={() => scrollSlider(a === "←" ? "prev" : "next")}
                  style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#f4f4f6", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="tier-indicators" style={{ display: "none" }}>
          {tierIcons.map((ti, i) => (
            <button key={ti.id} onClick={() => scrollToSlide(i)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: "6px 8px", borderRadius: 10, opacity: activeSlide === i ? 1 : 0.4, transition: "opacity 0.2s" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: activeSlide === i ? `${ti.color}25` : "rgba(255,255,255,0.05)", border: `2px solid ${activeSlide === i ? ti.color : "transparent"}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                <GemIcon color={ti.color} />
              </div>
              <span style={{ fontSize: 10, fontWeight: activeSlide === i ? 700 : 400, color: activeSlide === i ? ti.color : "#82889b", whiteSpace: "nowrap" }}>{ti.label}</span>
            </button>
          ))}
        </div>

        <div ref={sliderRef} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, padding: "0 3.70370vw", alignItems: "stretch" }} className="pricing-grid">
          {tiers.map((tier, idx) => {
            const isVIP = tier.id === "vip", isPlatinum = tier.id === "platinum", isDark = isVIP || isPlatinum;
            const textPrimary = "#f4f4f6", textSub = isDark ? "rgba(255,255,255,0.55)" : "#82889b";
            const divider = isDark ? (isPlatinum ? "rgba(167,139,250,0.2)" : "rgba(12,141,248,0.2)") : "rgba(255,255,255,0.07)";
            const borderRad = idx === 0 ? "16px 0 0 16px" : idx === 4 ? "0 16px 16px 0" : "0";
            return (
              <div key={tier.id} style={{ background: tier.cardBg, borderTop: tier.border, borderBottom: tier.border, borderLeft: tier.border, borderRight: idx < 4 ? "none" : tier.border, borderRadius: borderRad, padding: "clamp(20px, 2.08333vw, 36px)", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 0, position: "relative", overflow: "visible" }}>
                {tier.mostPopular && (
                  <div className="most-popular-badge" style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(90deg,#0990ff,#00eaff)", borderRadius: 20, padding: "4px 18px", fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: "0.08em", whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(9,144,255,0.4)" }}>
                    {tr.mostPopular}
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <GemIcon color={tier.gemColor} />
                  <span style={{ fontSize: "clamp(18px, 1.52778vw, 26px)", fontWeight: 800, color: textPrimary, letterSpacing: "-0.01em" }}>{tier.name}</span>
                  {isPlatinum && (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="#a78bfa" strokeWidth="1.3" /><text x="6.5" y="13" fontSize="10" fill="#a78bfa" fontWeight="700">i</text></svg>
                  )}
                </div>
                {tier.topFeatures && (
                  <div style={{ marginBottom: 20 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: textSub, margin: "0 0 10px", textTransform: "uppercase" }}>{tr.topFeaturesLabel}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {tier.topFeatures.map((f) => (
                        <div key={f.title} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div style={{ width: 32, height: 32, borderRadius: 8, background: `${f.color}20`, border: `1px solid ${f.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5 6.5-7" stroke={f.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </div>
                          <div>
                            <p style={{ margin: 0, fontSize: "clamp(15px, 1.11111vw, 17px)", fontWeight: 700, color: textPrimary, lineHeight: 1.3 }}>{f.title}</p>
                            <p style={{ margin: "2px 0 0", fontSize: "clamp(13px, 0.97222vw, 15px)", color: textSub, lineHeight: 1.45 }}>{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ height: 1, background: divider, margin: "16px 0" }} />
                  </div>
                )}
                {tier.mainStat && (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.05)", borderRadius: 10, padding: "12px 14px", display: "inline-block", width: "100%", boxSizing: "border-box" }}>
                      <p style={{ margin: 0, fontSize: "clamp(22px, 2.08333vw, 36px)", fontWeight: 800, color: textPrimary, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{tier.mainStat.value}</p>
                      <p style={{ margin: "4px 0 0", fontSize: "clamp(14px, 1.04167vw, 16px)", color: textSub }}>{tier.mainStat.label}</p>
                    </div>
                  </div>
                )}
                {tier.statBoxes.length > 0 && (
                  <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                    {tier.statBoxes.map((s) => (
                      <div key={s.label} style={{ flex: 1, background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.05)", borderRadius: 10, padding: "12px 14px", boxSizing: "border-box" }}>
                        <p style={{ margin: 0, fontSize: "clamp(20px, 1.80556vw, 30px)", fontWeight: 800, color: textPrimary, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{s.value}</p>
                        <p style={{ margin: "4px 0 0", fontSize: "clamp(14px, 1.04167vw, 16px)", color: textSub }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 16, borderBottom: `1px solid ${divider}`, marginBottom: 16 }}>
                  {tier.rows.map((row) => (
                    <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                      {"linkColor" in row && row.linkColor ? (
                        <a href="#" style={{ fontSize: "clamp(15px, 1.11111vw, 17px)", color: row.linkColor, textDecoration: "none", fontWeight: 500 }}>{row.label}</a>
                      ) : (
                        <span style={{ fontSize: "clamp(15px, 1.11111vw, 17px)", color: textSub }}>{row.label}</span>
                      )}
                      <span style={{ fontSize: "clamp(15px, 1.11111vw, 17px)", color: textPrimary, fontWeight: 600, whiteSpace: "nowrap" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, flexGrow: 1, marginBottom: 20 }}>
                  {tr.features.map((feat, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <CheckIcon checked={tier.checkedFeatures.includes(i)} />
                      <span style={{ fontSize: "clamp(14px, 1.04167vw, 16px)", color: tier.checkedFeatures.includes(i) ? textPrimary : textSub, lineHeight: 1.45 }}>{feat}</span>
                    </div>
                  ))}
                </div>
                <button style={{ width: "100%", padding: "14px 0", borderRadius: 10, border: "none", background: "#0c8df8", color: "#fff", fontSize: "clamp(14px, 1.11111vw, 18px)", fontWeight: 700, cursor: "pointer", letterSpacing: "0.01em", transition: "opacity 0.15s" }}>
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
      </main>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 16px !important; padding: 0 24px !important; }
          .pricing-grid > div { border-radius: 16px !important; border-right: 1px solid rgba(255,255,255,0.10) !important; }
        }
        @media (max-width: 768px) {
          .tier-indicators { display: flex !important; flex-direction: row !important; justify-content: center !important; gap: 4px !important; padding: 0 16px 20px !important; }
          .pricing-grid { display: flex !important; flex-direction: row !important; gap: 16px !important; padding: 0 20px !important; overflow-x: auto !important; scroll-snap-type: x mandatory !important; -webkit-overflow-scrolling: touch !important; scrollbar-width: none !important; }
          .pricing-grid::-webkit-scrollbar { display: none !important; }
          .pricing-grid > div { min-width: 280px !important; max-width: 320px !important; border-radius: 16px !important; border: 1px solid rgba(255,255,255,0.10) !important; scroll-snap-align: center !important; }
          .most-popular-badge { font-size: 9px !important; padding: 3px 12px !important; }
        }
      `}</style>
    </>
  );
}
