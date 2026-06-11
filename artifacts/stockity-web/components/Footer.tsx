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
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4.64 6.8l-1.68 7.93c-.12.55-.47.68-.94.42l-2.6-1.91-1.25 1.2c-.14.14-.26.25-.52.25l.18-2.62 4.76-4.3c.21-.18-.05-.28-.32-.1L5.59 12.43 3.02 11.6c-.55-.17-.56-.55.11-.82l9.06-3.49c.46-.17.86.11.71.82-.3.09-.26-.03-.26-.31z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm2.5 6.67h-1.67c-.55 0-.83.28-.83.83v1.17H12.5l-.33 2.5H10v7.5H7.5v-7.5H6.67V8.67H7.5V7.5c0-1.93 1.07-3.33 3.33-3.33h1.67v2.5z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1" y="4" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 7.5l5 2.5-5 2.5V7.5z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0f1a] border-t border-[#232737]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-10 mb-12">
          {/* Left: Logo */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <StockityIcon />
              <span className="text-lg font-black text-[#F4F4F6]">Stockity</span>
            </a>
            <p className="text-sm text-[#82889B] leading-relaxed max-w-[240px]">
              A modern trading platform for beginners and professionals.
            </p>
          </div>

          {/* Center: Links */}
          <div className="grid sm:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-bold text-[#F4F4F6] uppercase tracking-widest mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#82889B] hover:text-[#F4F4F6] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Reg number + socials */}
          <div>
            <div className="mb-6">
              <p className="text-xs text-[#82889B] uppercase tracking-widest mb-1">
                Registration
              </p>
              <p className="text-sm font-semibold text-[#F4F4F6]">
                Reg.No. 700726
              </p>
            </div>

            <div>
              <p className="text-xs text-[#82889B] uppercase tracking-widest mb-3">
                Follow us
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#232737] text-[#82889B] hover:text-[#F4F4F6] hover:bg-[#393F56] transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#232737] pt-8">
          {/* Risk disclaimer */}
          <p className="text-xs text-[#51576C] leading-relaxed mb-4 max-w-4xl">
            Online trading may involve significant financial risks including the
            risk of losing all funds on your trading account. Please, estimate
            all the risks and get advice from an independent financial advisor
            before using Stockity services. We also recommend not to invest
            funds you can&apos;t afford. Stockity isn&apos;t responsible for any
            losses (direct, indirect, or consequential) resulting from the
            actions of a client on the platform.
          </p>
          <p className="text-xs text-[#51576C]">
            © 2022-2026 Stockity. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
