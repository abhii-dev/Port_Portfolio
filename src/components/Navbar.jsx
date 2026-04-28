import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
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

  const smoothScrollTo = (targetY, options = {}) => {
    const startY = window.pageYOffset || document.documentElement.scrollTop;

    animate(startY, targetY, {
      duration: options.duration ?? 0.6,
      ease: options.ease ?? [0.22, 1, 0.36, 1],
      onUpdate: (v) => window.scrollTo({ top: v }),
    });
  };

  const robustScrollToElement = (id, maxAttempts = 6) => {
    const el = document.getElementById(id);
    if (!el) return;
    let attempt = 0;

    const tryScroll = () => {
      attempt++;
      const target = computeTop(el);
      smoothScrollTo(target, { duration: 0.52 });

      setTimeout(() => {
        const cur = window.pageYOffset || document.documentElement.scrollTop;
        const delta = Math.abs(cur - target);
        if (delta > 36 && attempt < maxAttempts) {
          setTimeout(tryScroll, 120 * attempt);
        }
      }, 380);
    };

    tryScroll();
  };

  const handleDesktopAnchor = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const target = computeTop(el);
    smoothScrollTo(target, { duration: 0.56 });

    try {
      window.dispatchEvent(new CustomEvent("nav-scroll-to", { detail: { id } }));
    } catch {}
  };

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
    <nav
      ref={navRef}
      className="sticky top-0 z-50"
      style={{
        background: "linear-gradient(to bottom right, #E4DDD3, #f7f3ee)",
      }}
    >
      <style>{`
        .hamburger { width: 26px; height: 18px; position: relative; display: inline-block; }
        .hamburger .bar { position: absolute; left: 0; right: 0; height: 2px; background: #00A198; border-radius: 2px; transition: all 0.3s ease; }
        .hamburger .bar.top { top: 0; }
        .hamburger .bar.mid { top: 8px; }
        .hamburger .bar.bot { top: 16px; }
        .hamburger.open .bar.top { transform: translateY(8px) rotate(45deg); }
        .hamburger.open .bar.mid { opacity: 0; }
        .hamburger.open .bar.bot { transform: translateY(-8px) rotate(-45deg); }

        .panel-animate { transition: all 0.35s ease; }
        .panel-open { opacity: 1; }
        .panel-closed { opacity: 0; }

        .nav-link { transform: translateY(6px); opacity: 0; transition: all 0.3s ease; }
        .nav-link.show { transform: translateY(0); opacity: 1; }
      `}</style>

      {/* Top Bar */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-3 flex items-center justify-between border-b border-[#d6cec4]">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("home");
            if (el) smoothScrollTo(computeTop(el));
          }}
          className="flex items-center gap-3"
        >
          {/* Icon */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
            style={{
              background: "linear-gradient(to bottom, #00A198, #007d74)",
            }}
          >
            <span className="font-extrabold text-white">P_</span>
          </div>

          {/* Text */}
          <h1
            className="font-bold text-lg"
            style={{
              background: "linear-gradient(to bottom, #00A198, #004f4a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio
          </h1>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleDesktopAnchor(e, item.id)}
              className="group relative text-sm font-medium px-2 py-1"
              style={{ color: "#555" }}
            >
              {item.label}
              <span
                className="absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(90deg,#00A198,#66cfc6)",
                }}
              />
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className={`hamburger ${open ? "open" : ""}`}>
              <span className="bar top" />
              <span className="bar mid" />
              <span className="bar bot" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div
        className={`md:hidden overflow-hidden ${
          open ? "panel-open" : "panel-closed"
        }`}
        style={{
          maxHeight: open ? "400px" : "0px",
          background:
            "linear-gradient(to bottom right, #E4DDD3, #f7f3ee)",
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleMobileNavClick(e, item.id)}
              className={`text-lg nav-link ${
                open ? "show" : ""
              }`}
              style={{
                color: "#004f4a",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}