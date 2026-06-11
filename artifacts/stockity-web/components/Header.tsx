"use client";

import { useState } from "react";

const StockityLogo = () => (
  <svg width="105" height="36" viewBox="0 0 123 42" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{display:'inline',marginLeft:4}}>
    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GBFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="2" fill="#012169"/>
    <path d="M0 0L24 16M24 0L0 16" stroke="white" strokeWidth="3.2"/>
    <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="2"/>
    <path d="M12 0V16M0 8H24" stroke="white" strokeWidth="5.3"/>
    <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3.2"/>
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
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  return (
    <header
      style={{ backgroundColor: "#000", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 26px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <StockityLogo />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}
          className="hidden lg:flex">
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
                    padding: "8px 14px",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.75)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 8,
                    transition: "color 0.15s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >
                  {item.label}
                  <ChevronDown />
                </button>
                {openDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      paddingTop: 4,
                      minWidth: 220,
                      zIndex: 100,
                    }}
                  >
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
                      {item.children!.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "10px 16px",
                            fontSize: 14,
                            color: "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            transition: "background 0.1s, color 0.1s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "rgba(255,255,255,0.8)";
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
                  padding: "8px 14px",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  borderRadius: 8,
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: 8, flexShrink: 0 }}>
          <a
            href="#"
            style={{
              padding: "9px 20px",
              fontSize: 15,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.25)",
              borderRadius: 10,
              transition: "border-color 0.15s, background 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Log in
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 20px",
              fontSize: 15,
              fontWeight: 800,
              color: "#fff",
              background: "linear-gradient(90deg,#0990ff,#0C8DF8)",
              borderRadius: 10,
              textDecoration: "none",
              whiteSpace: "nowrap",
              border: "none",
            }}
          >
            Register
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginLeft: 8,
              padding: "6px 12px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            <GBFlag />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>EN</span>
            <ChevronDown />
          </div>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden"
          style={{ padding: 8, color: "#fff", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "#0d0d0d",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px",
          }}
          className="lg:hidden"
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} style={{ marginBottom: 4 }}>
                <button
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.8)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 8,
                    textAlign: "left",
                  }}
                  onClick={() =>
                    setMobileOpenDropdown(
                      mobileOpenDropdown === item.label ? null : item.label
                    )
                  }
                >
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{
                      transform:
                        mobileOpenDropdown === item.label
                          ? "rotate(180deg)"
                          : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    <path
                      d="M2.5 4.5L6 8l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {mobileOpenDropdown === item.label && (
                  <div style={{ paddingLeft: 16, paddingBottom: 4 }}>
                    {item.children!.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "8px 12px",
                          fontSize: 14,
                          color: "rgba(255,255,255,0.7)",
                          textDecoration: "none",
                          borderRadius: 6,
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
                  display: "block",
                  padding: "10px 12px",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  borderRadius: 8,
                  marginBottom: 4,
                }}
              >
                {item.label}
              </a>
            )
          )}
          <div style={{ paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <a
                href="#"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Log in
              </a>
              <a
                href="#"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px",
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#fff",
                  background: "linear-gradient(90deg,#0990ff,#0C8DF8)",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
