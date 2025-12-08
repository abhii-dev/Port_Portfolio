// src/components/About.jsx
import React, { useEffect, useRef, useState } from "react";
import resume from "../assets/resume.pdf"

/**
 * About — Compact mobile CTAs (text-only pills)
 * - Mobile: small text-only pills, side-by-side (not full-width)
 * - sm+ : original labeled pills remain
 */

export default function About() {
  const stats = [
    { label: "Years", value: 4 },
    { label: "Projects", value: 0 },
  ];

  const education = [
    {
      title: "KLE Society's of BBA & BCA College",
      period: "2015 – 2018",
      course: "Bachelors of Computer Application",
    },
    {
      title: "Arena Animation Jayanagar Bangalore",
      period: "2018 – 2021",
      course: "Arena Animation international Programming",
      note: "Specialized in 3D Rigging & Animation",
    },
  ];

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 700;
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      setCounts(stats.map((s) => Math.round(s.value * t)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [visible]);

  return (
    <section id="about" ref={ref} className="w-full bg-[#020203] text-white py-8 md:py-10" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* avatar + CTAs */}
          <div className="col-span-12 md:col-span-4 flex flex-col items-center md:items-start">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center">
              <div
                className="absolute -z-10 rounded-full"
                style={{
                  width: "160px",
                  height: "160px",
                  background: "radial-gradient(circle, rgba(195,30,30,0.06), transparent 45%)",
                  filter: "blur(10px)",
                }}
                aria-hidden
              />
              <div
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center overflow-hidden border border-white/6 shadow-sm"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.04))" }}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-rose-200 select-none">M</span>
              </div>
            </div>

            {/* MOBILE: small text-only pills, side-by-side (not full-width) */}
            <div className="mt-3 flex items-center gap-3 sm:hidden">
              <a
                href="#projects"
                aria-label="View projects"
                className="inline-flex items-center justify-center text-sm px-3 py-2 rounded-full font-semibold"
                style={{ background: "linear-gradient(90deg,#C00000,#A30000)", boxShadow: "0 8px 18px rgba(192,20,20,0.10)" }}
                title="Projects"
              >
                Projects
              </a>

              <a
                href={resume}
                download
                aria-label="Download CV"
                className="inline-flex items-center justify-center text-sm px-3 py-2 rounded-full border border-white/6 bg-white/3"
                title="Download CV"
              >
                CV
              </a>
            </div>

            {/* DESKTOP/TABLET: labeled CTAs (sm+) */}
            <div className="mt-3 w-full hidden sm:flex sm:flex-row gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full font-semibold"
                style={{ background: "linear-gradient(90deg,#C00000,#A30000)", boxShadow: "0 8px 20px rgba(192,20,20,0.12)" }}
                aria-label="View projects"
              >
                Projects
              </a>

              <a
                href={resume}
                download
                className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full border border-white/6 bg-white/3"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>

            {/* compact stats visible on mobile as a small row */}
            <div className="mt-3 w-full">
              <div className="flex gap-2 justify-center md:justify-start">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex-1 text-center p-2 rounded-lg bg-white/3 border border-white/6">
                    <div className="font-bold text-rose-200 text-sm sm:text-base">{counts[i]}+</div>
                    <div className="text-[11px] text-gray-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* main content */}
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="about-heading" className="text-2xl font-bold uppercase tracking-wide text-red-400">
                  About
                </h2>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <div className="h-8 w-px bg-white/6 mr-3" aria-hidden />
              </div>
            </div>

            <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-prose leading-relaxed">
             I am a passionate 3D Animator specializing in character and quadruped animation, with a strong focus on performance, body mechanics, storytelling and etc. I love bringing characters to life through clean, high-quality animation and attention to detail. Alongside animation, I am also a creative Video Editor with a sharp sense of pacing, rhythm, and visual flow. I enjoy crafting engaging edits that enhance storytelling and leave a lasting impact.
            </p>

            {/* education cards (responsive) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {education.map((e, idx) => (
                <article
                  key={e.title}
                  className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-b from-white/3 to-transparent border border-white/6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-transform flex items-center min-h-[84px]"
                >
                  {/* left dot column - consistent width */}
                  <div className="flex-none w-7 flex justify-center items-start pt-1 sm:pt-0">
                    <div className="w-2 h-2 rounded-full bg-rose-300 shadow-sm" aria-hidden />
                  </div>

                  {/* content column */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-rose-200 truncate">{e.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-0.5 truncate">{e.course}</p>
                      </div>

                      <time className="text-[11px] sm:text-xs text-gray-400 whitespace-nowrap ml-3">{e.period}</time>
                    </div>

                    {e.note && <p className="mt-1 text-[12px] sm:text-sm text-gray-300 line-clamp-2">{e.note}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* small motion helper (respects reduced motion prefs) */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-spin-slow { animation: spin 28s linear infinite; }
        }
        @keyframes spin { from { transform: rotate(0) } to { transform: rotate(360deg) } }
      `}</style>
    </section>
  );
}
