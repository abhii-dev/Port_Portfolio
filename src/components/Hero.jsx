import React, { useEffect, useRef, useState } from "react";

export default function Hero({
  name = "Manjunath G",
  subtitle = "3D Animator / Video Editor / Motion Designer ",
}) {
  const rootRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("touchmove", (ev) => {
      if (ev.touches && ev.touches[0]) onMove(ev.touches[0]);
    });
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const tilt = (v) =>
    `translate3d(${v.x * 20}px, ${v.y * 20}px, 0) rotateX(${v.y * 6}deg) rotateY(${v.x * 6}deg)`;

  return (
    <header
      id="home"
      ref={rootRef}
      className="relative min-h-screen w-full bg-[#030203] text-white overflow-hidden flex items-center"
      aria-label="Hero — Manjunath G."
    >
      {/* background glow blobs (Deep Crimson theme) */}
      <div className="absolute inset-0 -z-30">
        <div
          aria-hidden
          className="absolute left-[-14%] top-[-12%] w-[40rem] h-[40rem] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(163,0,0,0.10), rgba(192,0,0,0.04), transparent)",
          }}
        />
        <div
          aria-hidden
          className="absolute right-[-12%] bottom-[-8%] w-[36rem] h-[36rem] rounded-full blur-[90px] animation-delay-2000"
          style={{
            background:
              "radial-gradient(circle at 82% 78%, rgba(192,0,0,0.09), rgba(163,0,0,0.03), transparent)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10">
        {/* grid is positioned so absolute holo can be placed relative to it */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
          {/* LEFT — TEXT BLOCK (first child) */}
          <div className="space-y-6 max-w-xl relative z-20">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-10 h-10 rounded-full"
                style={{
                  background: "linear-gradient(135deg,#A30000,#C00000)",
                  boxShadow: "0 10px 30px rgba(163,10,10,0.12)",
                  border: "1px solid rgba(255,255,255,0.03)",
                }}
              />
              <div className="text-xs text-gray-400 uppercase tracking-wider">Cinematic • Motion • 3D</div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight relative">
              <span
                className="bg-clip-text text-transparent inline-block transform-gpu text-white"
              >
                {name}
              </span>

              <span
                className="ml-3 inline-block text-sm align-super font-semibold tracking-wide px-2 py-1 rounded-md backdrop-blur-sm"
                style={{ background: "rgba(18,8,8,0.28)", border: "1px solid rgba(255,255,255,0.03)", color: "#ffcfcf" }}
              >
                {subtitle}
              </span>

              <span className="absolute -right-8 -top-6 text-[10px] font-mono opacity-60 rotate-3" style={{ color: "rgba(255,120,90,0.55)" }}>
                v.2025.12
              </span>
            </h1>

            <p className="text-gray-300/80 text-base md:text-lg max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum consequuntur reprehenderit ex corrupti perspiciatis laborum modi quo neque eaque sunt.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#projects"
                className="relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm transform-gpu transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(90deg,#C00000,#A30000,#7A0000)",
                  boxShadow: "0 20px 50px rgba(192,30,30,0.12)",
                }}
              >
                See Projects
                <span className="ml-3 inline-block w-3 h-3 rounded-full" style={{ background: "white", opacity: 0.9 }} />
              </a>

              <a href="#contact" className="text-sm transition" style={{ color: "rgba(255,190,185,0.92)" }}>
                Contact
              </a>
            </div>

            {/* Tools / tags — last item has inline margin to avoid wrap issue */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Autodesk Maya", "Photoshop", "After Effects", "Premiere Pro", "Basic Blender"].map((t) => (
                <div
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(18,8,8,0.22)",
                    border: "1px solid rgba(255,255,255,0.03)",
                    color: "#ffcfcf",
                    marginTop: t === "Basic Blender" ? "0.5rem" : undefined,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* HOLO — placed as second grid child.
              On small screens: absolute (behind left content)
              On lg+: becomes static in the second column (right) */
          }
          <div
          className={
            "pointer-events-none " +
            "absolute left-1/2 top-36 -translate-x-1/2 -z-10 w-[18rem] h-[18rem] " +
            "sm:top-32 sm:w-[20rem] sm:h-[20rem] md:top-28 md:w-[22rem] md:h-[22rem] " +
            "lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:-z-0 lg:w-[22rem] lg:h-[28rem] lg:ml-40"
          }
          style={{ transform: tilt(mouse) }}
        >

            {/* ambient deep-crimson glow layer (fades softly into page) */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                mixBlendMode: "screen",
                filter: "blur(40px) saturate(120%)",
                opacity: 0.32,
              }}
            >
              <svg viewBox="0 0 480 520" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                <defs>
                  <radialGradient id="ambientGlowDeep" cx="50%" cy="36%" r="50%">
                    <stop offset="0%" stopColor="#ffecec" stopOpacity="0.44" />
                    <stop offset="28%" stopColor="#ffd6cf" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#030203" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#ambientGlowDeep)" />
              </svg>
            </div>

            {/* holo rings SVG */}
            <svg
              viewBox="0 0 240 240"
              width="100%"
              height="100%"
              className="relative z-10 transform-gpu"
              style={{ mixBlendMode: "screen", filter: "drop-shadow(0 12px 40px rgba(163,20,20,0.06))" }}
            >
              <defs>
                <radialGradient id="coreGradDeep" cx="50%" cy="45%" r="50%">
                  <stop offset="0%" stopColor="#fff2f2" stopOpacity="0.96" />
                  <stop offset="40%" stopColor="#ffdcd9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#030203" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="ringGradADeep" x1="0" x2="1">
                  <stop offset="0%" stopColor="#A30000" stopOpacity="0.96" />
                  <stop offset="60%" stopColor="#C00000" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7A0000" stopOpacity="0.14" />
                </linearGradient>

                <linearGradient id="ringGradBDeep" x1="0" x2="1">
                  <stop offset="0%" stopColor="#D79A94" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#EFCBC5" stopOpacity="0.12" />
                </linearGradient>

                <filter id="bloomDeep" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle cx="120" cy="120" r="26" fill="url(#coreGradDeep)" className="core-pulse" />

              <g transform="translate(120,120)">
                <g className="ring-1 ring-rotate" transform="rotate(0)">
                  <circle r="64" fill="none" stroke="url(#ringGradADeep)" strokeWidth="2.2" strokeLinecap="round" filter="url(#bloomDeep)" opacity="0.96" />
                </g>

                <g className="ring-2 ring-rotate-rev" transform="rotate(0)">
                  <circle r="88" fill="none" stroke="url(#ringGradBDeep)" strokeWidth="1.6" strokeDasharray="6 120" strokeLinecap="round" opacity="0.82" />
                </g>

                <g className="ring-3 ring-rotate" transform="rotate(0)">
                  <circle r="46" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.7" />
                </g>

                <g className="pulse-ring" transform="rotate(0)">
                  <circle r="110" fill="none" stroke="rgba(163,40,40,0.02)" strokeWidth="2" />
                </g>
              </g>

              <g>
                <circle cx="36" cy="60" r="1.9" fill="#fff4f4" opacity="0.7" className="particle" />
                <circle cx="188" cy="78" r="1.6" fill="#ffd9d6" opacity="0.6" className="particle" />
                <circle cx="146" cy="186" r="1.4" fill="#ffd0cb" opacity="0.55" className="particle" />
              </g>
            </svg>
          </div>

          {/* NOTE: we removed the previous 'right column wrapper' so the holo above acts as second grid child on lg */}
        </div>
      </div>

      {/* bottom border */}
      <div className="absolute left-0 right-0 bottom-0 h-12 pointer-events-none -z-20 bg-gradient-to-t from-[#000000] to-transparent" />

      <style>{`
        @keyframes ringRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ringRotateRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .ring-rotate { animation: ringRotate 18s linear infinite; transform-origin: 0 0; }
        .ring-rotate-rev { animation: ringRotateRev 28s linear infinite; transform-origin: 0 0; }

        @keyframes corePulse { 0% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.04); opacity: 0.85; } 100% { transform: scale(1); opacity: 0.95; } }
        .core-pulse { animation: corePulse 3.6s ease-in-out infinite; transform-origin: 120px 120px; }

        @keyframes pulseScale { 0% { transform: scale(0.98); opacity: 0.06; } 50% { transform: scale(1.06); opacity: 0.12; } 100% { transform: scale(0.98); opacity: 0.06; } }
        .pulse-ring { animation: pulseScale 6s ease-in-out infinite; transform-origin: 0 0; }

        @keyframes twinkle { 0% { opacity: 0.2; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1.2); } 100% { opacity: 0.2; transform: scale(0.9); } }
        .particle { animation: twinkle 3.5s infinite linear; }

        .scale-x-0 { transform: scaleX(0); }
        .scale-x-100 { transform: scaleX(1); }
      `}</style>
    </header>
  );
}
