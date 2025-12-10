// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { label } from "framer-motion/client";
import Education from "./Education";

/**
 * Navbar using framer-motion's animate() for smooth scrolling.
 * Dispatches CustomEvent('nav-scroll-to', { detail: { id } }) so sections can react.
 */

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education"},
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const PANEL_TRANS_MS = 360;
const PANEL_BUFFER_MS = 80;
const PANEL_CLOSE_DELAY = PANEL_TRANS_MS + PANEL_BUFFER_MS;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const computeTop = (el) => {
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const topNav = document.querySelector("nav.sticky");
    const navH = topNav ? topNav.getBoundingClientRect().height : 0;
    return Math.round(rect.top + window.pageYOffset - navH);
  };

  // Use framer-motion animate(...) to smoothly scroll (interruptible)
  const smoothScrollTo = (targetY, options = {}) => {
    const startY = window.pageYOffset || document.documentElement.scrollTop;
    // cancel previous animations by creating a new one (framer handles interruption)
    animate(startY, targetY, {
      duration: options.duration ?? 0.6,
      ease: options.ease ?? [0.22, 1, 0.36, 1], // easeOut-ish
      onUpdate: (v) => window.scrollTo({ top: v }),
    });
  };

  // robust scroll fallback (still kept, but using smoothScrollTo for attempts)
  const robustScrollToElement = (id, maxAttempts = 6) => {
    const el = document.getElementById(id);
    if (!el) return;
    let attempt = 0;

    const tryScroll = () => {
      attempt += 1;
      const target = computeTop(el);
      smoothScrollTo(target, { duration: 0.52 });

      setTimeout(() => {
        const cur = window.pageYOffset || document.documentElement.scrollTop;
        const delta = Math.abs(cur - target);
        if (delta > 36 && attempt < maxAttempts) {
          const backoff = 120 * attempt;
          setTimeout(tryScroll, backoff);
        }
      }, 380);
    };

    tryScroll();
  };

  // Desktop anchor (click): scroll + dispatch event for sections
  const handleDesktopAnchor = (e, id) => {
    e && e.preventDefault?.();
    const el = document.getElementById(id);
    if (!el) return;
    const target = computeTop(el);
    smoothScrollTo(target, { duration: 0.56 });

    // dispatch so About.jsx (and others) can run entry animations
    try {
      window.dispatchEvent(new CustomEvent("nav-scroll-to", { detail: { id } }));
    } catch {}
  };

  // Mobile: close panel, then update history and scroll (with framer animation)
  const handleMobileNavClick = (e, id) => {
    if (window.innerWidth >= 768) return;
    e.preventDefault();

    setOpen(false);

    setTimeout(() => {
      try {
        history.pushState(null, "", `#${id}`);
      } catch {}
      try {
        window.dispatchEvent(new CustomEvent("nav-scroll-to", { detail: { id } }));
      } catch {}
      robustScrollToElement(id);
    }, PANEL_CLOSE_DELAY);
  };

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-black">
      <style>{`
        .hamburger { width: 26px; height: 18px; position: relative; display: inline-block; }
        .hamburger .bar { position: absolute; left: 0; right: 0; height: 2px; background: white; border-radius: 2px; transform-origin: center; transition: transform 320ms cubic-bezier(.2,.9,.2,1), opacity 220ms ease, top 320ms cubic-bezier(.2,.9,.2,1); }
        .hamburger .bar.top { top: 0; } .hamburger .bar.mid { top: 8px; } .hamburger .bar.bot { top: 16px; }
        .hamburger.open .bar.top { transform: translateY(8px) rotate(45deg); } .hamburger.open .bar.mid { opacity: 0; transform: scaleX(0.2); } .hamburger.open .bar.bot { transform: translateY(-8px) rotate(-45deg); }
        .hamburger.open { transform-origin: center; animation: pop 260ms ease; } @keyframes pop { 0% { transform: scale(0.98) } 60% { transform: scale(1.02) } 100% { transform: scale(1) } }
        .panel-animate { transform-origin: top center; transition: transform ${PANEL_TRANS_MS}ms cubic-bezier(.2,.9,.2,1), opacity ${PANEL_TRANS_MS}ms ease, max-height ${PANEL_TRANS_MS}ms ease; }
        .panel-open { transform: translateY(0) scale(1); opacity: 1; } .panel-closed { transform: translateY(-6px) scale(0.995); opacity: 0; }
        .nav-link { transform: translateY(6px); opacity: 0; transition: transform 360ms cubic-bezier(.2,.9,.2,1), opacity 360ms ease; } .nav-link.show { transform: translateY(0); opacity: 1; }
        @media (prefers-reduced-motion: reduce) { .hamburger .bar, .panel-animate, .nav-link { transition: none !important; animation: none !important; } }
      `}</style>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-3 flex items-center justify-between bg-black border-b border-[#ffffff08]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            try { history.pushState(null, "", "#home"); } catch {}
            const el = document.getElementById("home");
            if (el) smoothScrollTo(computeTop(el), { duration: 0.6 });
            try { window.dispatchEvent(new CustomEvent("nav-scroll-to", { detail: { id: "home" } })); } catch {}
          }}
          className="flex items-center gap-3 text-white no-underline"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center border shadow-[0_6px_24px_rgba(163,10,10,0.12)] transform hover:-translate-y-0.5 transition"
            style={{
              background: "linear-gradient(135deg,#A30000,#C00000)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <span className="font-extrabold text-lg tracking-tight" style={{ color: "white", textShadow: "0 6px 18px rgba(183,40,40,0.12)" }}>
              P_
            </span>
          </div>

          <h1 className="font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-rose-400 to-red-700">
            Port_folio
          </h1>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleDesktopAnchor(e, item.id); }}
              className="group relative text-sm font-medium text-gray-200/85 hover:text-white px-2 py-1 transition"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-[3px] w-full transform scale-x-0 origin-left rounded-sm group-hover:scale-x-100 transition-transform duration-300" style={{ background: "linear-gradient(90deg,#FF7A5A,#C00000)" }} />
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            title={open ? "Close menu" : "Open menu"}
          >
            <span className={`hamburger ${open ? "open" : ""}`} aria-hidden>
              <span className="bar top" />
              <span className="bar mid" />
              <span className="bar bot" />
            </span>
          </button>
        </div>
      </div>

      <div
        ref={panelRef}
        tabIndex={-1}
        className={`md:hidden w-full border-b border-[#ffffff06] overflow-hidden panel-animate ${open ? "panel-open" : "panel-closed"} `}
        style={{
          maxHeight: open ? "480px" : "0px",
          background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))",
          backdropFilter: open ? "blur(6px) saturate(1.05)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleMobileNavClick(e, item.id)}
                className={`block text-lg font-semibold text-white/95 tracking-wide px-3 py-2 rounded-lg hover:bg-white/3 nav-link ${open ? "show" : ""}`}
                style={{ transitionDelay: `${open ? i * 70 + 120 : 0}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
