"use client";

import { useState } from "react";
import Link from "next/link";

const StockityIcon = () => (
  <svg width="18" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.296 2.01a.526.526 0 0 0-.588-.59L6.314 2.776a.527.527 0 0 0-.304.895l1.6 1.03a.659.659 0 0 1 .11 1.019l-6.075 6.087a3.757 3.757 0 0 0 0 5.305 3.737 3.737 0 0 0 5.293 0l6.074-6.087a.656.656 0 0 1 1.017.11l1.023 1.598a.525.525 0 0 0 .892-.305l1.352-10.416Z" fill="url(#ha)"/>
    <path d="M3.244 29.31a3.757 3.757 0 0 1 0-5.306l7.141-7.156a3.737 3.737 0 0 1 5.293 0 3.757 3.757 0 0 1 0 5.305l-7.14 7.156a3.737 3.737 0 0 1-5.294 0Z" fill="url(#hb)"/>
    <path d="M1.05 12.573a3.756 3.756 0 0 0 1.37 5.124l7.006 4.054.012.007a3.755 3.755 0 0 1 1.816 3.82c-.141.908-.733 1.677-1.358 2.35l5.536-5.55a3.756 3.756 0 0 0-.534-6.124L7.892 12.2l-.012-.007a3.755 3.755 0 0 1-1.816-3.82c.141-.908.733-1.677 1.358-2.35l-5.536 5.55a3.742 3.742 0 0 0-.836 1Z" fill="#0C8DF8"/>
    <defs>
      <linearGradient id="ha" x1="13.685" y1="5.927" x2="-9.029" y2="27.046" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/>
      </linearGradient>
      <linearGradient id="hb" x1="6.104" y1="26.604" x2="18.351" y2="14.232" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/>
      </linearGradient>
    </defs>
  </svg>
);

const StockityWordmark = () => (
  <svg width="85" height="29" viewBox="0 0 94 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.86 24.274c-1.057 0-2.114-.12-3.17-.363-1.058-.242-1.975-.597-2.751-1.064-.463-.259-.752-.605-.868-1.037a2.05 2.05 0 0 1 .075-1.297c.165-.415.43-.71.793-.882.363-.173.8-.13 1.313.13.66.397 1.396.691 2.205.881.81.19 1.61.286 2.404.286 1.19 0 2.04-.19 2.552-.57.528-.399.793-.892.793-1.48 0-.501-.182-.899-.545-1.193-.364-.294-1-.545-1.908-.752l-2.8-.623C1.83 15.62.27 13.924.27 11.226c0-1.159.297-2.17.892-3.035.594-.882 1.42-1.565 2.478-2.05 1.073-.484 2.312-.726 3.716-.726.925 0 1.834.121 2.726.363.892.225 1.677.562 2.354 1.012.413.26.669.597.768 1.012.1.415.066.812-.1 1.193-.148.38-.412.648-.792.804-.364.156-.818.095-1.363-.181a6.797 6.797 0 0 0-1.734-.649 8.503 8.503 0 0 0-1.883-.208c-1.041 0-1.85.217-2.429.649-.561.415-.842.96-.842 1.634 0 .502.173.908.52 1.22.347.31.95.562 1.809.752l2.8.622c3.205.727 4.807 2.37 4.807 4.93 0 1.14-.297 2.144-.892 3.008-.578.848-1.404 1.514-2.478 1.998-1.057.467-2.313.7-3.766.7Zm15.11 0c-3.42 0-5.129-1.738-5.129-5.214v-4.877h-1.04c-.975 0-1.462-.484-1.462-1.453 0-.985.487-1.478 1.461-1.478h1.041V9.28c0-1.331.628-1.997 1.883-1.997 1.24 0 1.859.666 1.859 1.997v1.972h2.354c.958 0 1.437.493 1.437 1.478 0 .969-.48 1.453-1.437 1.453h-2.354v4.721c0 .727.157 1.271.47 1.635.33.363.851.544 1.562.544.247 0 .479-.025.693-.077a4.22 4.22 0 0 1 .595-.104.649.649 0 0 1 .57.233c.149.173.223.528.223 1.064 0 .432-.066.804-.198 1.115-.132.294-.364.51-.694.649-.215.086-.512.155-.892.207-.363.07-.677.104-.942.104Zm9.894 0c-1.305 0-2.445-.268-3.42-.804a5.75 5.75 0 0 1-2.23-2.309c-.528-1.003-.792-2.187-.792-3.554 0-1.349.264-2.516.793-3.502a5.542 5.542 0 0 1 2.23-2.309c.974-.536 2.114-.804 3.42-.804 1.304 0 2.436.268 3.394.804a5.5 5.5 0 0 1 2.255 2.31c.545.985.817 2.152.817 3.501 0 1.367-.272 2.551-.817 3.554a5.705 5.705 0 0 1-2.255 2.309c-.958.536-2.09.804-3.395.804Zm0-2.931c.793 0 1.437-.303 1.933-.908.512-.605.768-1.548.768-2.828 0-1.262-.256-2.187-.768-2.775-.496-.606-1.14-.908-1.933-.908-.793 0-1.437.302-1.933.908-.495.588-.743 1.513-.743 2.775 0 1.28.248 2.223.744 2.828.495.605 1.14.908 1.932.908Z" fill="white"/>
    <path d="M46.282 24.274c-1.321 0-2.478-.268-3.469-.804a5.664 5.664 0 0 1-2.255-2.335c-.528-1.003-.793-2.187-.793-3.554 0-1.366.265-2.542.793-3.528a5.377 5.377 0 0 1 2.255-2.257c.991-.536 2.148-.804 3.469-.804.512 0 1.057.07 1.635.208a5.74 5.74 0 0 1 1.71.648c.413.208.67.502.768.882.1.364.075.727-.074 1.09a1.444 1.444 0 0 1-.67.804c-.297.156-.652.121-1.065-.104-.66-.363-1.305-.544-1.932-.544-.975 0-1.735.32-2.28.96-.529.622-.793 1.513-.793 2.671 0 1.142.264 2.041.793 2.698.545.64 1.305.96 2.28.96.297 0 .61-.035.941-.104.33-.086.661-.225.991-.415.413-.225.769-.25 1.066-.078.314.173.529.441.644.805.116.345.124.709.025 1.09-.1.38-.347.674-.743.881a6.652 6.652 0 0 1-1.685.623 6.732 6.732 0 0 1-1.611.207Zm8.042-.052c-1.256 0-1.884-.666-1.884-1.997V7.465c0-1.332.628-1.998 1.884-1.998 1.239 0 1.858.666 1.858 1.997v9.054h.05l3.592-4.177c.364-.432.694-.752.992-.96.297-.224.71-.337 1.238-.337.512 0 .909.139 1.19.415.28.26.421.597.421 1.012 0 .398-.165.787-.495 1.167l-3.172 3.71 3.593 4.332c.314.415.446.822.396 1.22-.033.38-.198.7-.495.96-.298.241-.678.362-1.14.362-.578 0-1.033-.112-1.363-.337-.314-.225-.652-.57-1.016-1.038l-3.742-4.358h-.049v3.736c0 1.331-.62 1.997-1.858 1.997Z" fill="white"/>
    <path d="M67.397 8.917c-.694 0-1.23-.164-1.61-.493-.364-.346-.546-.83-.546-1.452 0-.64.182-1.125.546-1.453.38-.346.916-.519 1.61-.519 1.42 0 2.131.657 2.131 1.972 0 1.297-.71 1.945-2.13 1.945Zm0 15.28c-.611 0-1.082-.182-1.412-.545-.314-.38-.471-.908-.471-1.583v-8.872c0-1.435.628-2.153 1.883-2.153.595 0 1.05.19 1.363.571.33.363.495.89.495 1.582v8.872c0 .675-.156 1.202-.47 1.583-.314.363-.777.544-1.388.544Zm10.719.077c-3.42 0-5.13-1.738-5.13-5.214v-4.877h-1.04c-.975 0-1.462-.484-1.462-1.453 0-.985.487-1.478 1.462-1.478h1.04V9.28c0-1.331.628-1.997 1.884-1.997 1.239 0 1.858.666 1.858 1.997v1.972h2.354c.958 0 1.437.493 1.437 1.478 0 .969-.479 1.453-1.437 1.453h-2.354v4.721c0 .727.157 1.271.47 1.635.331.363.852.544 1.562.544.248 0 .479-.025.694-.077.215-.052.413-.087.594-.104a.649.649 0 0 1 .57.233c.149.173.223.528.223 1.064 0 .432-.066.804-.198 1.115-.132.294-.363.51-.694.649-.214.086-.512.155-.892.207-.363.07-.677.104-.941.104Zm7.862 4.618c-.66 0-1.132-.26-1.413-.779-.264-.501-.247-1.09.05-1.764l1.313-3.06-4.039-9.703c-.264-.674-.264-1.262 0-1.764.281-.518.835-.778 1.66-.778.447 0 .802.113 1.066.338.28.207.537.613.768 1.219l2.528 6.744 2.626-6.77c.231-.588.487-.986.768-1.193.297-.225.694-.338 1.19-.338.627 0 1.065.26 1.313.778.264.502.256 1.081-.025 1.739L87.96 27.386c-.248.588-.528.986-.842 1.193-.298.208-.678.312-1.14.312Z" fill="white"/>
  </svg>
);

const navItems = [
  {
    label: "For users",
    children: [
      { label: "Statuses", href: "#" },
      { label: "Tournaments", href: "#" },
    ],
  },
  {
    label: "Information",
    children: [
      { label: "Client Agreement", href: "#" },
      { label: "AML Policy", href: "#" },
      { label: "Copy Trading Agreement", href: "#" },
    ],
  },
  { label: "About us", href: "#" },
  { label: "Help Center", href: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  return (
    <header
      style={{ backgroundColor: "rgba(21,23,35,0.95)", backdropFilter: "blur(12px)" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#232737]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <StockityIcon />
          <StockityWordmark />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[#82889B] hover:text-[#F4F4F6] transition-colors rounded-lg hover:bg-[#232737]"
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-[200px]">
                    <div className="bg-[#232737] border border-[#393F56] rounded-xl shadow-xl overflow-hidden py-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[#F4F4F6] hover:bg-[#393F56] transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-[#82889B] hover:text-[#F4F4F6] transition-colors rounded-lg hover:bg-[#232737]"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language */}
          <div className="flex items-center gap-0 border border-[#393F56] rounded-lg overflow-hidden text-sm font-semibold">
            <button className="px-3 py-1.5 bg-[#0C8DF8] text-white">EN</button>
            <button className="px-3 py-1.5 text-[#82889B] hover:text-white hover:bg-[#232737] transition-colors">ID</button>
          </div>
          <a
            href="#"
            className="px-4 py-2 text-sm font-bold text-[#F4F4F6] rounded-lg border border-[#393F56] hover:bg-[#232737] transition-colors"
          >
            Log in
          </a>
          <a href="#" className="btn-primary text-sm !py-2 !px-4 !rounded-lg">
            Register
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 text-[#F4F4F6] rounded-lg hover:bg-[#232737]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#151723] border-t border-[#232737] px-4 py-4 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#82889B] hover:text-[#F4F4F6] rounded-lg"
                  onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform ${mobileOpenDropdown === item.label ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {mobileOpenDropdown === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-[#F4F4F6] hover:bg-[#232737] rounded-lg"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-semibold text-[#82889B] hover:text-[#F4F4F6] rounded-lg"
              >
                {item.label}
              </a>
            )
          )}
          <div className="pt-3 flex flex-col gap-2">
            <div className="flex gap-0 border border-[#393F56] rounded-lg overflow-hidden w-fit text-sm font-semibold">
              <button className="px-4 py-2 bg-[#0C8DF8] text-white">EN</button>
              <button className="px-4 py-2 text-[#82889B]">ID</button>
            </div>
            <div className="flex gap-2">
              <a href="#" className="flex-1 text-center py-2 text-sm font-bold text-[#F4F4F6] rounded-lg border border-[#393F56]">
                Log in
              </a>
              <a href="#" className="flex-1 text-center btn-primary text-sm !py-2 !rounded-lg">
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
