// src/components/Skill.jsx
import React, { useEffect, useMemo, useState } from "react";

/**
 * Skills — Animated Neon Dots Map (Motion UI) — with compact header
 * - Compact header restored: title + subtle subtitle + small stat
 * - Short guide inside map retained
 * - Interactive neon dots behavior preserved
 * - Tweak: smaller skill buttons on mobile to avoid overlap
 */

export default function Skill() {
  // configuration: tune these for density / layout
  const COLS = 14; // horizontal dots
  const ROWS = 6; // vertical dots
  const DOT_SIZE = 6; // px base size (CSS scales visually)
  const GLOW_RADIUS = 2.6; // radius in grid units (distance) for glow

  // skills with grid positions (col: 0..COLS-1, row: 0..ROWS-1)
  const skills = [
    { name: "Autodesk Maya", pct: 92, col: 3, row: 1, tag: "3D" },
    { name: "After Effects", pct: 90, col: 10, row: 1, tag: "Motion" },
    { name: "Blender", pct: 86, col: 7, row: 2, tag: "3D" },
    { name: "Premiere Pro", pct: 84, col: 11, row: 3, tag: "Editing" },
    { name: "Photoshop", pct: 80, col: 4, row: 3, tag: "Design" },
    { name: "3D Rigging", pct: 78, col: 8, row: 4, tag: "Rigging" },
  ];

  // precompute dots (flat array)
  const dots = useMemo(() => {
    const arr = [];
    let id = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        arr.push({ id: id++, c, r });
      }
    }
    return arr;
  }, [COLS, ROWS]);

  // set of dot ids currently glowing
  const [glowSet, setGlowSet] = useState(() => new Set());

  // reduced-motion flag
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // compute glow indices for a skill (col,row)
  function computeGlow(col, row, radius = GLOW_RADIUS) {
    const out = [];
    for (const d of dots) {
      const dx = d.c - col;
      const dy = d.r - row;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= radius) out.push(d.id);
    }
    return out;
  }

  // handlers: onHover / onLeave / onFocus / onBlur / onClick (mobile)
  function handleEnter(skill) {
    if (reduceMotion) return;
    const ids = computeGlow(skill.col, skill.row, GLOW_RADIUS);
    setGlowSet(new Set(ids));
  }
  function handleLeave() {
    if (reduceMotion) return;
    setGlowSet(new Set());
  }
  // mobile tap toggles glow briefly
  function handleTap(skill) {
    if (reduceMotion) return;
    const ids = computeGlow(skill.col, skill.row, GLOW_RADIUS);
    setGlowSet(new Set(ids));
    // fade after short delay
    window.setTimeout(() => setGlowSet(new Set()), 700);
  }

  // small helper to convert grid coordinate to percentage position
  const posStyle = (c, r) => {
    const left = (c / (COLS - 1)) * 100;
    const top = (r / (ROWS - 1)) * 100;
    return { left: `${left}%`, top: `${top}%` };
  };

  return (
    <section id="skills" className="w-full bg-black text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-25">
        {/* compact header: title + subtitle + small stat */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-red-400">Skills</h2>
          </div>
        </div>

        {/* map area */}
        <div className="relative w-full p-6 bg-transparent border-none overflow-visible">
          {/* decorative subtle background gradient/fog */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(400px 120px at 10% 10%, rgba(200,40,40,0.03), transparent 10%), radial-gradient(300px 90px at 90% 85%, rgba(100,30,140,0.02), transparent 12%)",
            }}
          />

          {/* dots layer */}
          <div className="absolute inset-0 pointer-events-none">
            {dots.map((d) => {
              const isGlowing = glowSet.has(d.id);
              return (
                <span
                  key={d.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full`}
                  style={{
                    ...posStyle(d.c, d.r),
                    width: DOT_SIZE,
                    height: DOT_SIZE,
                    background: isGlowing ? "radial-gradient(circle, rgba(255,180,180,1), rgba(163,0,0,0.9))" : "rgba(255,255,255,0.06)",
                    boxShadow: isGlowing ? "0 6px 28px rgba(220,70,70,0.45), 0 0 10px rgba(255,90,90,0.6)" : "none",
                    transition: reduceMotion ? "none" : "box-shadow 280ms ease, background 280ms ease, transform 260ms ease",
                    transform: isGlowing && !reduceMotion ? "scale(1.6)" : "scale(1)",
                  }}
                />
              );
            })}
          </div>

          {/* skill cards (nodes) overlay */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* left column - short subtle guide */}
              <div className="md:col-span-1 flex flex-col gap-2">
                <div className="text-sm text-gray-400">Explore — hover or tap a skill.</div>
              </div>

              {/* center/right - place relative nodes anchored over dots */}
              <div className="md:col-span-2 relative h-[260px] sm:h-[220px] md:h-[300px]">
                {/* absolute container for nodes (they sit above dots) */}
                <div className="absolute inset-0">
                  {skills.map((s, idx) => {
                    const style = {
                      ...posStyle(s.col, s.row),
                      transform: "translate(-50%, -50%)",
                    };
                    return (
                      <button
                        key={s.name}
                        onMouseEnter={() => handleEnter(s)}
                        onMouseLeave={() => handleLeave()}
                        onFocus={() => handleEnter(s)}
                        onBlur={() => handleLeave()}
                        onClick={() => handleTap(s)}
                        className={`absolute z-20 flex items-center gap-2 sm:gap-3 p-1.5 sm:p-3 rounded-full backdrop-blur-sm
                          transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300
                          ${reduceMotion ? "bg-white/6 border border-white/6" : "bg-white/5 border border-white/8"} text-xs sm:text-sm min-w-[86px] sm:min-w-[120px] max-w-[150px] sm:max-w-[220px]`}
                        style={{
                          ...style,
                          boxShadow: glowSet.size && glowSet.has?.(computeDotId(s.col, s.row, COLS)) ? "0 12px 40px rgba(163,0,0,0.12)" : "0 8px 28px rgba(0,0,0,0.28)",
                          transformOrigin: "center center",
                        }}
                        aria-label={`${s.name} skill button`}
                        title={`${s.name} — ${s.pct}%`}
                      >
                        <div
                          className="w-7 h-7 sm:w-9 sm:h-9 rounded-md flex items-center justify-center text-xs sm:text-sm font-semibold text-rose-200"
                          style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.04))",
                            border: "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          {s.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        <div className="min-w-0 text-left">
                          <div className="font-semibold text-white truncate text-xs sm:text-sm">{s.name}</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">{s.tag} • {s.pct}%</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* container end */}

      {/* utilities */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          span[style] { transition: none !important; transform: none !important; }
          button { transition: none !important; }
        }

        /* small additional mobile tweak (extra safety) */
        @media (max-width: 420px) {
          /* slightly reduce node padding on very small screens */
          button { padding: 0.35rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ----------------------
   Helper utilities
   ---------------------- */

// compute dot id from col,row using same indexing as dots array in the component
function computeDotId(col, row, cols) {
  return row * cols + col;
}
