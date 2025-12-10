import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

/**
 * src/components/Education.jsx
 * Redesigned, standalone Education component with header and an aesthetic layout
 * - Dark theme to match About.jsx
 * - Responsive two-column grid that collapses to single column on small screens
 * - Left timeline-like period badges and translucent cards
 * - Framer-motion entrance animation (optional `variants` prop)
 */

const EDUCATION = [
  {
    title: "KLE Society's of BBA & BCA College",
    period: "2015 – 2018",
    course: "Bachelors of Computer Application",
  },
  {
    title: "Arena Animation Jayanagar, Bangalore",
    period: "2018 – 2021",
    course: "Arena Animation International Program",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.46, ease: [0.2, 1, 0.36, 1] },
  }),
};

export default function Education({ variants }) {
  return (
    <section id="education" className="w-full bg-black text-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-2xl font-bold tracking-wide text-red-400 uppercase">Education</h3>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="p-2 rounded-full bg-gradient-to-b from-white/4 to-transparent border border-white/6 shadow-sm">
              <FaGraduationCap className="w-5 h-5 text-rose-200" />
            </div>
          </div>
        </header>

        {/* Grid / timeline layout */}
        <div className="relative">
          {/* vertical line for timeline on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-3 bottom-3 w-px bg-white/6" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((e, idx) => (
              <motion.article
                key={e.title}
                className={`relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-white/4 to-transparent border border-white/8 shadow-md hover:shadow-lg transition-transform`}
                custom={idx}
                variants={variants || cardVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-start gap-4">
                  {/* Period badge - floats left on small screens, aligned to center on md */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-b from-rose-600 to-rose-400 shadow-md ring-1 ring-white/10">
                      <span className="text-xs font-semibold text-white">{e.period.split(' – ')[0]}</span>
                    </div>

                    <div className="mt-3 text-[11px] text-gray-300 hidden md:block">{e.period}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-rose-200 truncate">{e.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 truncate">{e.course}</p>
                      </div>

                      <div className="md:hidden text-[11px] text-gray-400 whitespace-nowrap ml-3">{e.period}</div>
                    </div>

                    {e.note && (
                      <p className="mt-3 text-[13px] sm:text-sm text-gray-300 leading-relaxed line-clamp-3">{e.note}</p>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* small visual tweaks to keep cards consistent with About section */
        @media (min-width: 768px) {
          /* nudge timeline badges over the central line */
          section#education .grid > *:nth-child(odd) { transform: translateX(-24px); }
          section#education .grid > *:nth-child(even) { transform: translateX(24px); }
        }

        @media (prefers-reduced-motion: no-preference) {
          .animate-spin-slow { animation: spin 28s linear infinite; }
        }

        @keyframes spin { from { transform: rotate(0) } to { transform: rotate(360deg) } }
      `}</style>
    </section>
  );
}
