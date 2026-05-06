import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "linear-gradient(to bottom right, #E4DDD3, #f7f3ee)",
      }}
    >
      <style>{`
        .hamburger {
          width: 26px;
          height: 18px;
          position: relative;
          display: inline-block;
        }

        .hamburger .bar {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: #00A198;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger .bar.top {
          top: 0;
        }

        .hamburger .bar.mid {
          top: 8px;
        }

        .hamburger .bar.bot {
          top: 16px;
        }

        .hamburger.open .bar.top {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open .bar.mid {
          opacity: 0;
        }

        .hamburger.open .bar.bot {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}</style>

      {/* Top Bar */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-3 flex items-center justify-between border-b border-[#d6cec4]">

        {/* Logo */}
        <div className="flex items-center gap-3">

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
    </nav>
  );
}