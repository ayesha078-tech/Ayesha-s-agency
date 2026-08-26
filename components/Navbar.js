"use client";

import { useState } from "react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "#F2E9D8" }}>
      {/* striped awning bar */}
      <div
        className="w-full h-2.5"
        style={{
          background:
            "repeating-linear-gradient(90deg, #C6432E 0px, #C6432E 28px, #F2E9D8 28px, #F2E9D8 56px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-serif text-xl tracking-tight"
          style={{ color: "#231C15" }}
        >
          Ayesha's <span style={{ color: "#C6432E", fontStyle: "italic" }}>Agency</span>
        </a>

        {/* desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              style={{ color: "#231C15" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="font-bold px-5 py-2.5 rounded-md text-xs tracking-wide uppercase"
            style={{
              background: "#C6432E",
              color: "#F2E9D8",
              boxShadow: "3px 3px 0 #9E3222",
            }}
          >
            Get started
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="w-6 h-0.5 transition-transform duration-200"
            style={{
              background: "#231C15",
              transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            className="w-6 h-0.5 transition-opacity duration-200"
            style={{ background: "#231C15", opacity: open ? 0 : 1 }}
          />
          <span
            className="w-6 h-0.5 transition-transform duration-200"
            style={{
              background: "#231C15",
              transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: "1px solid #231C1520" }}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium pt-4"
              style={{ color: "#231C15" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-center font-bold px-5 py-3 rounded-md text-xs tracking-wide uppercase"
            style={{ background: "#C6432E", color: "#F2E9D8" }}
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}