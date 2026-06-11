const StockityIcon = () => (
  <svg width="18" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.296 2.01a.526.526 0 0 0-.588-.59L6.314 2.776a.527.527 0 0 0-.304.895l1.6 1.03a.659.659 0 0 1 .11 1.019l-6.075 6.087a3.757 3.757 0 0 0 0 5.305 3.737 3.737 0 0 0 5.293 0l6.074-6.087a.656.656 0 0 1 1.017.11l1.023 1.598a.525.525 0 0 0 .892-.305l1.352-10.416Z" fill="url(#fa)"/>
    <path d="M3.244 29.31a3.757 3.757 0 0 1 0-5.306l7.141-7.156a3.737 3.737 0 0 1 5.293 0 3.757 3.757 0 0 1 0 5.305l-7.14 7.156a3.737 3.737 0 0 1-5.294 0Z" fill="url(#fb)"/>
    <path d="M1.05 12.573a3.756 3.756 0 0 0 1.37 5.124l7.006 4.054.012.007a3.755 3.755 0 0 1 1.816 3.82c-.141.908-.733 1.677-1.358 2.35l5.536-5.55a3.756 3.756 0 0 0-.534-6.124L7.892 12.2l-.012-.007a3.755 3.755 0 0 1-1.816-3.82c.141-.908.733-1.677 1.358-2.35l-5.536 5.55a3.742 3.742 0 0 0-.836 1Z" fill="#0C8DF8"/>
    <defs>
      <linearGradient id="fa" x1="13.685" y1="5.927" x2="-9.029" y2="27.046" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/>
      </linearGradient>
      <linearGradient id="fb" x1="6.104" y1="26.604" x2="18.351" y2="14.232" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/>
      </linearGradient>
    </defs>
  </svg>
);

const footerLinks = [
  {
    title: "For users",
    links: [
      { label: "Statuses", href: "#" },
      { label: "Tournaments", href: "#" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Client Agreement", href: "#" },
      { label: "AML Policy", href: "#" },
      { label: "Copy Trading Agreement", href: "#" },
      { label: "About us", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "Telegram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4.64 6.8l-1.68 7.93c-.12.55-.47.68-.94.42l-2.6-1.91-1.25 1.2c-.14.14-.26.25-.52.25l.18-2.62 4.76-4.3c.21-.18-.05-.28-.32-.1L5.59 12.43 3.02 11.6c-.55-.17-.56-.55.11-.82l9.06-3.49c.46-.17.86.11.71.82z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm2.5 6.67h-1.67c-.55 0-.83.28-.83.83v1.17H12.5l-.33 2.5H10v7.5H7.5v-7.5H6.67V8.67H7.5V7.5c0-1.93 1.07-3.33 3.33-3.33h1.67v2.5z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <rect x="1" y="4" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 7.5l5 2.5-5 2.5V7.5z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* ===== MOBILE footer (< 768px) ===== */}
      <div
        className="block md:hidden"
        style={{ boxSizing: "border-box", width: "100%", padding: "11.1111vw 6.66667vw" }}
      >
        {/* column-reverse: right section first, then links, then logo last */}

        {/* Registration + Socials */}
        <div style={{ marginBottom: "11.1111vw" }}>
          <div style={{ marginBottom: "6.66667vw" }}>
            <p style={{ fontSize: "3.33333vw", color: "#82889B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2.22222vw" }}>
              Registration
            </p>
            <p style={{ fontSize: "4.44444vw", fontWeight: 600, color: "#F4F4F6" }}>Reg.No. 700726</p>
          </div>
          <div>
            <p style={{ fontSize: "3.33333vw", color: "#82889B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4.44444vw" }}>
              Follow us
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4.44444vw" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  style={{
                    width: "10.2222vw",
                    height: "10.2222vw",
                    borderRadius: "2.22222vw",
                    background: "#222",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#82889B",
                    textDecoration: "none",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links — single column, each group stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4.44444vw", marginBottom: "11.1111vw" }}>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                style={{
                  fontSize: "3.33333vw",
                  fontWeight: 700,
                  color: "#F4F4F6",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "3.33333vw",
                }}
              >
                {section.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "2.77778vw" }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{ fontSize: "4.16667vw", color: "#82889B", textDecoration: "none" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo + description */}
        <div style={{ marginBottom: "6.66667vw" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "1.11111vw", textDecoration: "none", marginBottom: "4.44444vw" }}>
            <StockityIcon />
            <span style={{ fontSize: "5.55556vw", fontWeight: 900, color: "#F4F4F6" }}>Stockity</span>
          </a>
          <p style={{ fontSize: "3.88889vw", color: "#82889B", lineHeight: 1.65 }}>
            A modern trading platform for beginners and professionals.
          </p>
        </div>

        {/* Bottom disclaimer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "6.66667vw" }}>
          <p style={{ fontSize: "3.05556vw", color: "rgba(130,136,155,0.6)", lineHeight: 1.8, marginBottom: "4.44444vw" }}>
            Online trading may involve significant financial risks including the risk of losing
            all funds on your trading account. Please, estimate all the risks and get advice from
            an independent financial advisor before using Stockity services. We also recommend
            not to invest funds you can&apos;t afford. Stockity isn&apos;t responsible for any
            losses (direct, indirect, or consequential) resulting from the actions of a client
            on the platform.
          </p>
          <p style={{ fontSize: "3.33333vw", color: "rgba(130,136,155,0.6)" }}>
            © 2022-2026 Stockity. All rights reserved
          </p>
        </div>
      </div>

      {/* ===== DESKTOP footer (>= 768px) ===== */}
      <div
        className="hidden md:block"
        style={{ boxSizing: "border-box", width: "100%", padding: "3.24074vw 1.85185vw" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 0,
            marginTop: "2.77778vw",
            marginBottom: "3.24074vw",
          }}
        >
          {/* Left: Logo + Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6.01852vw", maxWidth: "56.1343vw" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.925926vw", textDecoration: "none" }}>
              <StockityIcon />
              <span style={{ fontSize: 18, fontWeight: 900, color: "#F4F4F6" }}>Stockity</span>
            </a>
            <p style={{ fontSize: 13, color: "#82889B", lineHeight: 1.65, maxWidth: 220 }}>
              A modern trading platform for beginners and professionals.
            </p>
            {/* Links: 3 columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                columnGap: "0.578704vw",
                rowGap: "0.925926vw",
              }}
            >
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#F4F4F6",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 16,
                    }}
                  >
                    {section.title}
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} style={{ fontSize: 13, color: "#82889B", textDecoration: "none" }}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Registration + Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.38889vw", maxWidth: "18.0556vw" }}>
            <div style={{ marginBottom: "1.38889vw" }}>
              <p style={{ fontSize: 11, color: "#82889B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
                Registration
              </p>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#F4F4F6" }}>Reg.No. 700726</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#82889B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                Follow us
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.925926vw" }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "#222",
                      border: "1px solid rgba(255,255,255,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#82889B",
                      textDecoration: "none",
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28 }}>
          <p
            style={{
              fontSize: 11,
              color: "rgba(130,136,155,0.6)",
              lineHeight: 1.8,
              marginBottom: 12,
              maxWidth: 900,
            }}
          >
            Online trading may involve significant financial risks including the risk of losing
            all funds on your trading account. Please, estimate all the risks and get advice from
            an independent financial advisor before using Stockity services. We also recommend
            not to invest funds you can&apos;t afford. Stockity isn&apos;t responsible for any
            losses (direct, indirect, or consequential) resulting from the actions of a client
            on the platform.
          </p>
          <p style={{ fontSize: 12, color: "rgba(130,136,155,0.6)" }}>
            © 2022-2026 Stockity. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
