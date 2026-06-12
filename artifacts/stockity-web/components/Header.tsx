"use client";

import { useState } from "react";
import Image from "next/image";

const StockityLogo = () => (
  <svg
    viewBox="0 0 123 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: "2.77778vw", minHeight: 28, width: "auto" }}
  >
    <g>
      <path d="M21.6 2.5a.66.66 0 0 0-.735-.738L8.087 3.47a.659.659 0 0 0-.38 1.119l2 1.288a.824.824 0 0 1 .137 1.274L2.26 14.757a4.697 4.697 0 0 0 0 6.631 4.671 4.671 0 0 0 6.616 0l7.593-7.609a.82.82 0 0 1 1.271.138l1.279 1.997a.656.656 0 0 0 1.115-.381L21.6 2.5Z" fill="url(#ha)"/>
      <path d="M4.055 36.638a4.697 4.697 0 0 1 0-6.633l8.926-8.944a4.671 4.671 0 0 1 6.616 0 4.697 4.697 0 0 1 0 6.632l-8.925 8.945a4.671 4.671 0 0 1-6.617 0Z" fill="url(#hb)"/>
      <path d="M1.313 15.717a4.695 4.695 0 0 0 1.713 6.405l8.757 5.068.015.009a4.694 4.694 0 0 1 2.27 4.775c-.176 1.135-.916 2.096-1.697 2.938l6.92-6.938a4.695 4.695 0 0 0-.668-7.655l-8.756-5.068-.015-.009a4.694 4.694 0 0 1-2.27-4.775c.176-1.135.916-2.097 1.697-2.939L2.358 14.59a4.677 4.677 0 0 0-1.045 1.127Z" fill="#0C8DF8"/>
      <defs>
        <linearGradient id="ha" x1="17.106" y1="7.408" x2="-11.286" y2="33.808" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/>
        </linearGradient>
        <linearGradient id="hb" x1="7.63" y1="33.255" x2="22.939" y2="17.79" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/>
        </linearGradient>
      </defs>
    </g>
    <text x="30" y="30" fontFamily="'Nunito Sans', sans-serif" fontWeight="800" fontSize="26" fill="white">Stockity</text>
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" style={{ display: "inline", marginLeft: 4 }}>
    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const navItems = [
  {
    label: "For users",
    children: [
      { label: "Statuses", href: "/pricing" },
      { label: "Tournaments", href: "/tournaments" },
    ],
  },
  {
    label: "Information",
    children: [
      { label: "Client Agreement", href: "/agreement" },
      { label: "AML Policy", href: "/aml-policy" },
      { label: "Copy Trading Agreement", href: "/copy-trading-agreement" },
    ],
  },
  { label: "About us", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  return (
    <header style={{ backgroundColor: "#000", position: "fixed", top: 0, left: 0, right: 0, zIndex: 260 }}>
      {/* Desktop header — md breakpoint = 768px, matching original */}
      <div
        className="hidden md:flex"
        style={{
          width: "100%",
          padding: "1.38889vw 1.85185vw",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
            marginRight: "6.01852vw",
            gap: "0.462963vw",
          }}
        >
          <StockityLogo />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.2vw", flex: 1 }}>
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.555556vw 0.925926vw",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#fff",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "0.555556vw",
                    transition: "color 0.15s",
                    whiteSpace: "nowrap",
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  {item.label}
                  <ChevronDown />
                </button>
                {openDropdown === item.label && (
                  <div style={{ position: "absolute", top: "100%", left: 0, paddingTop: 4, width: "max-content", zIndex: 100 }}>
                    <div
                      style={{
                        background: "#1a1a1a",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 12,
                        overflow: "hidden",
                        padding: "4px 0",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                      }}
                    >
                      {item.children!.map((child, idx) => (
                        <a
                          key={child.label}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "10px 16px",
                            fontSize: "20px",
                            fontWeight: 400,
                            fontFamily: "'Nunito Sans', sans-serif",
                            color: "#fff",
                            textDecoration: "none",
                            transition: "background 0.1s",
                            whiteSpace: "nowrap",
                            borderBottom: idx < item.children!.length - 1 ? "1px solid rgba(255,255,255,0.3)" : "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
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
                style={{
                  padding: "0.555556vw 0.925926vw",
                  fontSize: "20px",
                  fontWeight: 700,
                  fontFamily: "'Nunito Sans', sans-serif",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "0.555556vw",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                }}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.694444vw", flexShrink: 0, marginLeft: "auto" }}>
          <button
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              padding: "0.462963vw 1.38889vw",
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "'Nunito Sans', sans-serif",
              color: "#fff",
              background: "none",
              border: "2px solid #0c8df8",
              borderRadius: "0.694444vw",
              cursor: "pointer",
              whiteSpace: "nowrap",
              maxHeight: "2.77778vw",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#48a9fa")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#0c8df8")}
          >
            Log in
          </button>
          <button
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              gap: "0.462963vw",
              padding: "0.462963vw 1.38889vw",
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "'Nunito Sans', sans-serif",
              color: "#fff",
              background: "#0c8df8",
              border: "none",
              borderRadius: "0.694444vw",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#48a9fa")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0c8df8")}
          >
            <Image
              src="/images/stockity/src/core/images/register-arrow.svg"
              alt=""
              width={20}
              height={20}
              style={{ flexShrink: 0 }}
              unoptimized
            />
            Register
          </button>
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="EN"
              style={{ height: "1.85185vw", minHeight: 20, width: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile header bar — shown below 768px */}
      <div
        className="flex md:hidden"
        style={{
          width: "100%",
          padding: "3.33333vw 4.44444vw",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          gap: "2.22222vw",
          position: "relative",
          zIndex: 300,
        }}
      >
        {/* Left: hamburger + S icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "3.33333vw" }}>
          <button
            style={{ padding: 0, color: "#fff", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          {/* S icon only — no text on mobile */}
          <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <svg viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: "7.22222vw", minHeight: 24, width: "auto" }}>
              <path d="M21.6 2.5a.66.66 0 0 0-.735-.738L8.087 3.47a.659.659 0 0 0-.38 1.119l2 1.288a.824.824 0 0 1 .137 1.274L2.26 14.757a4.697 4.697 0 0 0 0 6.631 4.671 4.671 0 0 0 6.616 0l7.593-7.609a.82.82 0 0 1 1.271.138l1.279 1.997a.656.656 0 0 0 1.115-.381L21.6 2.5Z" fill="url(#mhi1)"/>
              <path d="M4.055 36.638a4.697 4.697 0 0 1 0-6.633l8.926-8.944a4.671 4.671 0 0 1 6.616 0 4.697 4.697 0 0 1 0 6.632l-8.925 8.945a4.671 4.671 0 0 1-6.617 0Z" fill="url(#mhi2)"/>
              <path d="M1.313 15.717a4.695 4.695 0 0 0 1.713 6.405l8.757 5.068.015.009a4.694 4.694 0 0 1 2.27 4.775c-.176 1.135-.916 2.096-1.697 2.938l6.92-6.938a4.695 4.695 0 0 0-.668-7.655l-8.756-5.068-.015-.009a4.694 4.694 0 0 1-2.27-4.775c.176-1.135.916-2.097 1.697-2.939L2.358 14.59a4.677 4.677 0 0 0-1.045 1.127Z" fill="#0C8DF8"/>
              <defs>
                <linearGradient id="mhi1" x1="17.106" y1="7.408" x2="-11.286" y2="33.808" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/>
                </linearGradient>
                <linearGradient id="mhi2" x1="7.63" y1="33.255" x2="22.939" y2="17.79" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0C8DF8"/><stop offset="1" stopColor="#033A68"/>
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>

        {/* Right: Log in + Register buttons + flag */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.22222vw" }}>
          <button
            style={{
              padding: "1.94444vw 3.88889vw",
              fontSize: "16px",
              fontWeight: 700,
              color: "#fff",
              background: "none",
              border: "1.5px solid rgba(255,255,255,0.5)",
              borderRadius: "1.94444vw",
              cursor: "pointer",
              fontFamily: "'Nunito Sans', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Log in
          </button>
          <button
            style={{
              padding: "1.94444vw 3.88889vw",
              fontSize: "16px",
              fontWeight: 700,
              color: "#fff",
              background: "#0c8df8",
              border: "none",
              borderRadius: "1.94444vw",
              cursor: "pointer",
              fontFamily: "'Nunito Sans', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Register
          </button>
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="EN"
            style={{ height: "5.55556vw", minHeight: 18, width: "auto", borderRadius: 2 }}
          />
        </div>
      </div>

      {/* Mobile side drawer — z-index below header (260) so header stays on top */}
      {mobileOpen && (
        <div className="md:hidden">
          {/* Backdrop — covers page but stays below header */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.55)",
              zIndex: 240,
            }}
            onClick={() => setMobileOpen(false)}
          />
          {/* Side panel */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "87vw",
              height: "100dvh",
              background: "#0d1020",
              zIndex: 250,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            {/* Spacer matching mobile header height so nav items start below it */}
            <div style={{ height: "16vw", flexShrink: 0 }} />

            {/* Nav items with dividers */}
            <nav style={{ flex: 1 }}>
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <button
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "5.55556vw 4.44444vw",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#fff",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg
                        width="20" height="20" viewBox="0 0 12 12" fill="none"
                        style={{ transform: mobileOpenDropdown === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}
                      >
                        <path d="M2.5 4.5L6 8l3.5-3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {mobileOpenDropdown === item.label && (
                      <div style={{ background: "#0a0d18" }}>
                        {item.children!.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            style={{
                              display: "block",
                              padding: "4.44444vw 8.88889vw",
                              fontSize: "16px",
                              color: "rgba(255,255,255,0.65)",
                              textDecoration: "none",
                              borderBottom: "1px solid rgba(255,255,255,0.06)",
                              fontFamily: "'Nunito Sans', sans-serif",
                            }}
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
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "5.55556vw 4.44444vw",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#fff",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
