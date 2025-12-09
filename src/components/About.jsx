// src/components/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import resume from "../assets/resume.pdf";
import avatar from "../assets/avatar.jpeg"; // <-- replace with your image (avatar.png / profile.webp etc.)

/**
 * About — uses framer-motion variants + useInView.
 * Animates when scrolled into view or when navbar dispatches 'nav-scroll-to' for id === 'about'.
 * Replaces the big 'M' with a responsive image.
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

  const rootRef = useRef(null);
  const inView = useInView(rootRef, { amount: 0.2, once: true });
  const shouldReduceMotion = useReducedMotion();

  // allow nav clicks to force-play the animation even if not yet scrolled into view
  const [forcePlay, setForcePlay] = useState(false);

  useEffect(() => {
    const onNav = (e) => {
      if (e?.detail?.id === "about") {
        setForcePlay(true);
        // clear after a short while to allow re-trigger if user navigates again
        setTimeout(() => setForcePlay(false), 900);
      }
    };
    window.addEventListener("nav-scroll-to", onNav);
    return () => window.removeEventListener("nav-scroll-to", onNav);
  }, []);

  // numeric counters animation (keeps prior behavior)
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    const play = inView || forcePlay;
    if (!play) return;
    const duration = 700;
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      setCounts(stats.map((s) => Math.round(s.value * t)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, forcePlay]);

  const entry = shouldReduceMotion
    ? {}
    : {
        avatar: {
          hidden: { scale: 0.96, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.52, ease: [0.2, 1, 0.36, 1] } },
        },
        body: {
          hidden: { opacity: 0, y: 12 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { when: "beforeChildren", staggerChildren: 0.12, duration: 0.52, ease: [0.2, 1, 0.36, 1] },
          },
        },
        child: {
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.46, ease: [0.2, 1, 0.36, 1] } },
        },
      };

  const playAnim = shouldReduceMotion ? true : inView || forcePlay;

  return (
    <section id="about" ref={rootRef} className="w-full bg-black text-white py-8 md:py-10" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
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

              {/* motion image replaces the big 'M' */}
              <motion.img
                src={avatar}
                alt="Profile avatar"
                className="avatar relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover border border-white/6 shadow-sm"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.04))" }}
                variants={entry.avatar}
                initial="hidden"
                animate={playAnim ? "visible" : "hidden"}
                loading="lazy"
                draggable={false}
              />
            </div>

            <div className="mt-3 flex items-center gap-3 sm:hidden">
              <a href="#projects" aria-label="View projects" className="inline-flex items-center justify-center text-sm px-3 py-2 rounded-full font-semibold" style={{ background: "linear-gradient(90deg,#C00000,#A30000)", boxShadow: "0 8px 18px rgba(192,20,20,0.10)" }} title="Projects">
                Projects
              </a>

              <a href={resume} download aria-label="Download CV" className="inline-flex items-center justify-center text-sm px-3 py-2 rounded-full border border-white/6 bg-white/3" title="Download CV">
                CV
              </a>
            </div>

            <div className="mt-3 w-full hidden sm:flex sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full font-semibold" style={{ background: "linear-gradient(90deg,#C00000,#A30000)", boxShadow: "0 8px 20px rgba(192,20,20,0.12)" }} aria-label="View projects">
                Projects
              </a>

              <a href={resume} download className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full border border-white/6 bg-white/3" aria-label="Download CV">
                Download CV
              </a>
            </div>

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

            <motion.div
              className="about-body"
              variants={entry.body}
              initial="hidden"
              animate={playAnim ? "visible" : "hidden"}
            >
              <motion.p className="mt-3 text-gray-300 text-sm sm:text-base max-w-prose leading-relaxed" variants={entry.child}>
                I am a passionate 3D Animator specializing in character and quadruped animation, with a strong focus on performance, body mechanics, storytelling and etc. I love bringing characters to life through clean, high-quality animation and attention to detail. Alongside animation, I am also a creative Video Editor with a sharp sense of pacing, rhythm, and visual flow. I enjoy crafting engaging edits that enhance storytelling and leave a lasting impact.
              </motion.p>

              <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3" variants={entry.child}>
                {education.map((e) => (
                  <article key={e.title} className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-b from-white/3 to-transparent border border-white/6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-transform flex items-center min-h-[84px]">
                    <div className="flex-none w-7 flex justify-center items-start pt-1 sm:pt-0">
                      <div className="w-2 h-2 rounded-full bg-rose-300 shadow-sm" aria-hidden />
                    </div>

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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-spin-slow { animation: spin 28s linear infinite; }
        }
        @keyframes spin { from { transform: rotate(0) } to { transform: rotate(360deg) } }
        /* ensure avatar image behaves well on very small devices */
        @media (max-width: 420px) {
          .avatar { width: 72px !important; height: 72px !important; }
        }
      `}</style>
    </section>
  );
}
