// src/components/Skill.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

/**
 * Skills — Animated Neon Dots Map (Motion UI)
 * Improved centering: computes average skill column and recenters overlay so capsules appear centered
 * on all screen sizes (phones/tablets/laptops) without hard-coded nudges.
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
  const shouldReduceMotion = useReducedMotion();

  // overlay translate percent computed from skill centroid
  const [overlayTranslate, setOverlayTranslate] = useState(0); // percent, e.g. -8 means translateX(-8%)

  // responsive clamping bucket (affects how tightly we clamp extreme translations)
  const [bucket, setBucket] = useState("large"); // small | medium | large

 // CENTROID + FIXED MOBILE OFFSET
useEffect(() => {
  function computeBucket() {
    const w = window.innerWidth;
    if (w <= 420) return "small";
    if (w <= 1024) return "medium";
    return "large";
  }

  function recompute() {
    const bucket = computeBucket();
    setBucket(bucket);

    // 👉 MOBILE FIX: Force stable left alignment, do NOT use centroid
    if (bucket === "small") {
      setOverlayTranslate(-20);   // adjust to -18 / -22 / -25 if you want more left
      return;
    }

    // 👉 TABLET + LAPTOP: Use centroid alignment
    const avg = skills.reduce(
      (acc, s) => acc + (s.col / (COLS - 1)) * 100,
      0
    ) / skills.length;

    let desired = 50 - avg;

    const clampValues = { medium: 10, large: 6 };
    const maxAbs = clampValues[bucket];

    if (desired > maxAbs) desired = maxAbs;
    if (desired < -maxAbs) desired = -maxAbs;

    setOverlayTranslate(Math.round(desired * 10) / 10);
  }

  recompute();
  window.addEventListener("resize", recompute);
  return () => window.removeEventListener("resize", recompute);
}, [skills]);


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
    if (shouldReduceMotion) return;
    const ids = computeGlow(skill.col, skill.row, GLOW_RADIUS);
    setGlowSet(new Set(ids));
  }
  function handleLeave() {
    if (shouldReduceMotion) return;
    setGlowSet(new Set());
  }
  // mobile tap toggles glow briefly
  function handleTap(skill) {
    if (shouldReduceMotion) return;
    const ids = computeGlow(skill.col, skill.row, GLOW_RADIUS);
    setGlowSet(new Set(ids));
    // fade after short delay
    window.setTimeout(() => setGlowSet(new Set()), 700);
  }

  // small helper to convert grid coordinate to percentage position
  // supports clamping to keep nodes from hitting absolute edge
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const posStyle = (c, r) => {
    const left = (c / (COLS - 1)) * 100;
    const top = (r / (ROWS - 1)) * 100;

    // clamp tighter on small screens
    const clampBounds = bucket === "small" ? [8, 92] : bucket === "medium" ? [5, 95] : [2, 98];
    const leftClamped = clamp(left, clampBounds[0], clampBounds[1]);
    return { left: `${leftClamped}%`, top: `${top}%` };
  };

  // compute dot id from col,row using same indexing as dots array in the component
  function computeDotId(col, row, cols) {
    return row * cols + col;
  }

  // entrance animation control (animate when in view)
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.12, once: true });

  // framer variants
  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const nodeInitial = { opacity: 0, y: 8, scale: 0.98 };
  const nodeVisible = { opacity: 1, y: 0, scale: 1, transition: { duration: 0.46, ease: [0.2, 1, 0.36, 1] } };

  return (
    <section id="skills" className="w-full bg-black text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* compact header: title + subtitle + small stat */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-red-400">Skills</h2>
          </div>

          <div className="hidden md:flex items-center">
            <div className="p-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
              <FaBolt className="w-5 h-5 text-rose-300 opacity-80" />
            </div>
          </div>
        </div>

        {/* map area */}
        <motion.div
          ref={containerRef}
          className="relative w-full p-6 bg-transparent border-none overflow-hidden"
          style={{
            // small padding on phones so clamped nodes have breathing room
            paddingLeft: bucket === "small" ? 12 : undefined,
            paddingRight: bucket === "small" ? 12 : undefined,
          }}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
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
              // compute scale & styles based on glow
              const scale = isGlowing && !shouldReduceMotion ? 1.6 : 1;
              const bg = isGlowing
                ? "radial-gradient(circle, rgba(255,180,180,1), rgba(163,0,0,0.9))"
                : "rgba(255,255,255,0.06)";
              const boxShadow = isGlowing
                ? "0 6px 28px rgba(220,70,70,0.45), 0 0 10px rgba(255,90,90,0.6)"
                : "none";

              return (
                <motion.span
                  key={d.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    ...posStyle(d.c, d.r),
                    width: DOT_SIZE,
                    height: DOT_SIZE,
                    transformOrigin: "center",
                    pointerEvents: "none",
                  }}
                  animate={shouldReduceMotion ? {} : { scale, background: bg, boxShadow }}
                  transition={shouldReduceMotion ? {} : { duration: 0.28, ease: [0.2, 0.9, 0.2, 1] }}
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
                {/* absolute container for nodes (they sit above dots)
                    We translate the whole overlay by overlayTranslate% so the
                    skill centroid lines up visually with center. */}
                <div
                  className="absolute inset-0 px-3 sm:px-0"
                  style={{
                    transform: overlayTranslate ? `translateX(${overlayTranslate}%)` : undefined,
                    willChange: overlayTranslate ? "transform" : undefined,
                  }}
                >
                  {skills.map((s) => {
                    const style = {
                      ...posStyle(s.col, s.row),
                      transform: "translate(-50%, -50%)",
                    };

                    // indicator if the node's own base dot is in glowSet (used for button shadow)
                    const ownDotId = computeDotId(s.col, s.row, COLS);
                    const hasGlow = glowSet.size && glowSet.has?.(ownDotId);

                    // whileHover/whileTap
                    const hoverProps = shouldReduceMotion
                      ? {}
                      : {
                          whileHover: { y: -6, scale: 1.03, transition: { duration: 0.18 } },
                          whileTap: { scale: 0.98, y: -2, transition: { duration: 0.12 } },
                        };

                    return (
                      <motion.button
                        key={s.name}
                        onMouseEnter={() => handleEnter(s)}
                        onMouseLeave={handleLeave}
                        onFocus={() => handleEnter(s)}
                        onBlur={handleLeave}
                        onClick={() => handleTap(s)}
                        className={`absolute z-20 flex items-center gap-2 sm:gap-3 p-1.5 sm:p-3 rounded-full backdrop-blur-sm
                          focus:outline-none focus:ring-2 focus:ring-rose-300
                          ${shouldReduceMotion ? "bg-white/6 border border-white/6" : "bg-white/5 border border-white/8"} text-xs sm:text-sm
                          min-w-[72px] sm:min-w-[120px] max-w-[140px] sm:max-w-[220px]`}
                        style={{
                          ...style,
                          boxShadow: hasGlow ? "0 12px 40px rgba(163,0,0,0.12)" : "0 8px 28px rgba(0,0,0,0.28)",
                          transformOrigin: "center center",
                        }}
                        aria-label={`${s.name} skill button`}
                        title={`${s.name} — ${s.pct}%`}
                        initial={nodeInitial}
                        animate={inView ? nodeVisible : nodeInitial}
                        {...hoverProps}
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
                          <div className="text-[11px] text-gray-400 mt-0.5">
                            {s.tag} • {s.pct}%
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* utilities */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          span[style] { transition: none !important; transform: none !important; }
          button { transition: none !important; }
        }

        @media (max-width: 420px) {
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
