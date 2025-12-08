// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="max-w-6xl mx-auto w-full px-6 py-3 flex items-center justify-between bg-black border-b border-[#ffffff08]">

        {/* Logo */}
        <a href="#intro" className="flex items-center gap-3 text-white no-underline">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center border shadow-[0_6px_24px_rgba(163,10,10,0.12)] transform hover:-translate-y-0.5 transition"
            style={{
              background: "linear-gradient(135deg,#A30000,#C00000)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <span
              className="font-extrabold text-lg tracking-tight"
              style={{
                color: "white",
                textShadow: "0 6px 18px rgba(183,40,40,0.12)",
              }}
            >
              P_
            </span>
          </div>

          <h1
            className="font-bold text-lg md:text-xl bg-clip-text text-transparent 
                       bg-gradient-to-r from-rose-200 via-rose-400 to-red-700"
          >
            Port_folio
          </h1>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative text-sm font-medium text-gray-200/85 hover:text-white px-2 py-1 transition"
            >
              <span className="relative z-10">{item.label}</span>

              <span
                className="absolute left-0 -bottom-1 h-[3px] w-full transform scale-x-0 origin-left rounded-sm
                           group-hover:scale-x-100 transition-transform duration-300"
                style={{
                  background: "linear-gradient(90deg,#FF7A5A,#C00000)",
                }}
              />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 pointer-events-none transition-all duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
      >
        <div
          className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.85))" }}
          onClick={() => setOpen(false)}
        />

        <div
          className={`relative z-50 w-full h-full flex flex-col items-center justify-center transform transition-transform duration-500 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav
            className="flex flex-col items-center gap-6 px-6 py-6 w-full max-w-md rounded-xl"
            style={{
              background: "linear-gradient(180deg, rgba(163,0,0,0.03), rgba(192,0,0,0.02))",
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block text-2xl font-semibold text-white/95 tracking-wide transform transition duration-400 hover:scale-105"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span
                  className="inline-block px-4 py-2 rounded-lg"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                    boxShadow: "0 8px 28px rgba(3,2,2,0.45)",
                    border: "1px solid rgba(255,255,255,0.03)",
                  }}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-8 text-xs text-gray-300/70" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.35)" }}>
            Tap anywhere outside to close — Esc also closes.
          </div>
        </div>
      </div>
    </nav>
  );
}
