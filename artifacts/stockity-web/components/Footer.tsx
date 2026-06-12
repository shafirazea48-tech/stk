const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1.8c2.67 0 2.987.01 4.04.058 2.71.124 3.977 1.41 4.1 4.1.049 1.052.059 1.369.059 4.039 0 2.672-.01 2.988-.058 4.04-.124 2.687-1.387 3.977-4.1 4.1-1.053.048-1.368.058-4.04.058-2.672 0-2.988-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1C1.81 12.985 1.8 12.67 1.8 10c0-2.671.01-2.987.058-4.039.124-2.69 1.387-3.977 4.1-4.101C6.012 1.81 6.328 1.8 10 1.8zm0-1.8C7.284 0 6.943.012 5.878.06 2.246.227.227 2.243.061 5.877.012 6.943 0 7.284 0 10c0 2.717.012 3.057.06 4.123.167 3.632 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20c2.717 0 3.057-.012 4.122-.06 3.629-.167 5.652-2.182 5.817-5.817C19.988 13.057 20 12.717 20 10c0-2.716-.012-3.057-.06-4.122C19.775 2.249 17.76.228 14.123.06 13.057.012 12.717 0 10 0zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.469a3.334 3.334 0 1 1 0-6.668 3.334 3.334 0 0 1 0 6.668zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" fill="currentColor"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10.061C20 4.505 15.523 0 10 0S0 4.505 0 10.061c0 5.022 3.657 9.184 8.438 9.939v-7.03H5.898v-2.91h2.54V7.846c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.887h2.773l-.443 2.908h-2.33V20C16.343 19.245 20 15.083 20 10.061z" fill="currentColor"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm4.93 6.64l-1.68 7.922c-.124.553-.473.687-.955.428l-2.6-1.914-1.254 1.207c-.139.138-.255.255-.521.255l.185-2.628 4.782-4.32c.209-.186-.045-.29-.323-.104L5.633 12.31 3.073 11.51c-.554-.173-.566-.554.116-.82l9.081-3.5c.46-.167.864.113.66.45z" fill="currentColor"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.582 5.15a2.495 2.495 0 0 0-1.755-1.767C16.254 3 10 3 10 3s-6.254 0-7.827.418A2.495 2.495 0 0 0 .418 5.15C0 6.729 0 10.024 0 10.024s0 3.296.418 4.874a2.495 2.495 0 0 0 1.755 1.768C3.746 17.083 10 17.083 10 17.083s6.254 0 7.827-.417a2.495 2.495 0 0 0 1.755-1.768C20 13.32 20 10.024 20 10.024s0-3.295-.418-4.874zM8.003 12.917V7.132l5.23 2.892-5.23 2.893z" fill="currentColor"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 8.3a7.17 7.17 0 0 1-4.2-1.35v6.13a5.57 5.57 0 1 1-5.57-5.57c.15 0 .3.01.45.02v2.75a2.85 2.85 0 1 0 2.4 2.8V2.5h2.72a4.45 4.45 0 0 0 4.2 4.2V8.3z" fill="currentColor"/>
  </svg>
);

const socialLinks = [
  { name: "Instagram", href: "#", icon: <InstagramIcon /> },
  { name: "Facebook", href: "#", icon: <FacebookIcon /> },
  { name: "Telegram", href: "#", icon: <TelegramIcon /> },
  { name: "YouTube", href: "#", icon: <YouTubeIcon /> },
  { name: "TikTok", href: "#", icon: <TikTokIcon /> },
];

const footerLinks = [
  { label: "About us", href: "#" },
  { label: "Affiliate program", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Client Agreement", href: "/agreement" },
  { label: "AML policy", href: "/aml-policy" },
];

const LOGO_PNG = "/images/stockity-logo-trimmed.png";

const SocialIcon = ({ name, href, icon }: { name: string; href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    aria-label={name}
    style={{
      width: "2.08333vw",
      height: "2.08333vw",
      minWidth: 28,
      minHeight: 28,
      borderRadius: "0.462963vw",
      background: "#1a1a2e",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#f4f4f6",
      textDecoration: "none",
    }}
  >
    <span style={{ display: "flex", width: "1.04167vw", height: "1.04167vw", minWidth: 14, minHeight: 14 }}>{icon}</span>
  </a>
);

const SocialIconMobile = ({ name, href, icon }: { name: string; href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    aria-label={name}
    style={{
      width: "10.2222vw",
      height: "10.2222vw",
      borderRadius: "2.22222vw",
      background: "#1a1a2e",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#f4f4f6",
      textDecoration: "none",
    }}
  >
    <span style={{ display: "flex", width: "5vw", height: "5vw" }}>{icon}</span>
  </a>
);

export default function Footer() {
  return (
    <footer style={{ background: "#000" }}>
      {/* ===== MOBILE footer (< 768px) ===== */}
      <div
        className="block md:hidden"
        style={{ boxSizing: "border-box", width: "100%", padding: "11.1111vw 6.66667vw" }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginBottom: "11.1111vw" }}>
          <img
            src={LOGO_PNG}
            alt="Stockity"
            style={{ height: "9.72222vw", width: "auto" }}
          />
        </a>

        {/* Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: "4.44444vw",
            marginBottom: "11.1111vw",
          }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "4.16667vw",
                color: "#f4f4f6",
                textDecoration: "underline",
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contacts */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6.66667vw", marginBottom: "11.1111vw" }}>
          <p style={{ fontSize: "4.44444vw", color: "#f4f4f6", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>
            Contacts
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.11111vw" }}>
            <p style={{ fontSize: "4.16667vw", color: "#f4f4f6" }}>Email</p>
            <a href="mailto:support@stockity.com" style={{ fontSize: "4.16667vw", color: "#f4f4f6", textDecoration: "none" }}>
              support@stockity.com
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.11111vw" }}>
            <p style={{ fontSize: "3.88889vw", color: "#f4f4f6", fontWeight: 600 }}>VERTE SECURITIES LIMITED</p>
            <p style={{ fontSize: "3.88889vw", color: "#82889b", lineHeight: 1.6 }}>
              International Business Centre, Suite 8, Pot 820/104, Route Elluk, Port Vila, Vanuatu
            </p>
          </div>
          <p style={{ fontSize: "3.88889vw", color: "#82889b" }}>Reg No. 700726</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4.44444vw" }}>
            {socialLinks.map((s) => (
              <SocialIconMobile key={s.name} name={s.name} href={s.href} icon={s.icon} />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "6.66667vw" }}>
          <p style={{ fontSize: "3.88889vw", color: "#82889b", lineHeight: 1.8, marginBottom: "4.44444vw" }}>
            Stockity provides services only to adult users. Online trading may involve significant
            financial risks including the risk of losing all funds on your trading account. Please,
            estimate all the risks and get advice from an independent financial advisor before using
            Stockity services. We also recommend not to invest funds you can&apos;t afford.
            Stockity isn&apos;t responsible for any losses (direct, indirect, or consequential)
            resulting from the actions of a client on the platform.
          </p>
          <p style={{ fontSize: "3.88889vw", color: "rgb(130, 136, 155)" }}>
            © 2022-2026 Stockity. All rights reserved
          </p>
        </div>
      </div>

      {/* ===== DESKTOP footer (>= 768px) ===== */}
      <div
        className="hidden md:block"
        style={{ boxSizing: "border-box", width: "100%", padding: "3.24074vw 1.85185vw" }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={LOGO_PNG}
            alt="Stockity"
            style={{ height: "2.77778vw", minHeight: 28, width: "auto" }}
          />
        </a>

        {/* Content row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "2.77778vw",
            marginBottom: "3.24074vw",
          }}
        >
          {/* Left: Links grid + disclaimer + copyright */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.31481vw", maxWidth: "56.1343vw" }}>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(3, auto)",
                gridTemplateColumns: "repeat(3, 1fr)",
                rowGap: "0.925926vw",
                columnGap: "4.62963vw",
              }}
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#f4f4f6",
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Disclaimer */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                color: "#82889b",
              }}
            >
              Stockity provides services only to adult users. Online trading may involve significant
              financial risks including the risk of losing all funds on your trading account. Please,
              estimate all the risks and get advice from an independent financial advisor before using
              Stockity services. We also recommend not to invest funds you can&apos;t afford.
              Stockity isn&apos;t responsible for any losses (direct, indirect, or consequential)
              resulting from the actions of a client on the platform.
            </p>
            {/* Copyright */}
            <p style={{ fontSize: "14px", lineHeight: "24px", color: "rgb(130, 136, 155)" }}>
              © 2022-2026 Stockity. All rights reserved
            </p>
          </div>

          {/* Right: Contacts */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.38889vw",
              maxWidth: "18.0556vw",
              minWidth: 200,
            }}
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#f4f4f6",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
              }}
            >
              Contacts
            </p>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.277778vw" }}>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "#f4f4f6" }}>Email</p>
              <a
                href="mailto:support@stockity.com"
                style={{ fontSize: "14px", lineHeight: "24px", color: "#f4f4f6", textDecoration: "none" }}
              >
                support@stockity.com
              </a>
            </div>

            {/* Address */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.277778vw" }}>
              <p style={{ fontSize: "14px", lineHeight: "24px", color: "#f4f4f6", fontWeight: 600 }}>
                VERTE SECURITIES LIMITED
              </p>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "#82889b" }}>
                International Business Centre, Suite 8, Pot 820/104, Route Elluk, Port Vila, Vanuatu
              </p>
            </div>

            {/* Reg No */}
            <p style={{ fontSize: "14px", lineHeight: "22px", color: "#82889b" }}>Reg No. 700726</p>

            {/* Socials */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.925926vw" }}>
              {socialLinks.map((s) => (
                <SocialIcon key={s.name} name={s.name} href={s.href} icon={s.icon} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
