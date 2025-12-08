// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/** Minimal job timeline — clean, professional */

const experiences = [
  {
    role: "3D Animator",
    company: "Tata Elxsi Pvt Ltd.",
    period: "Dec 2021 — Nov 2022",
    color: "from-red-600 to-rose-500",
  },
  {
    role: "3D Animator",
    company: "88 Pictures Pvt Ltd.",
    period: "Nov 2022 — Oct 2023",
    color: "from-rose-500 to-red-500",
  },
  {
    role: "3D Animator",
    company: "Ankita Media & Entertainments Ltd.",
    period: "Oct 2023 — Feb 2024",
    color: "from-red-500 to-rose-600",
  },
  {
    role: "Video Editor",
    company: "Scratchpad.inc",
    period: "Aug 2024 — Present",
    color: "from-rose-600 to-red-600",
  },
];

const orbVariants = {
  float: (i) => ({
    y: [0, -8, 0],
    transition: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
  }),
};

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.16 });

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full bg-black text-white py-10 md:py-14 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mt-4 text-2xl md:text-2xl font-bold uppercase tracking-wide text-red-400">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* center line */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-red-600/40 via-rose-500/20 to-red-600/30 -translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => {
              const left = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, x: left ? -30 : 30 }}
                  animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className={`relative md:flex md:items-center ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Orb */}
                  <div className="md:w-1/2 md:flex md:items-center md:justify-end">
                    <div className="hidden md:flex pr-6">
                      <motion.div
                        custom={idx}
                        variants={orbVariants}
                        animate="float"
                        className={`h-4 w-4 rounded-full bg-gradient-to-br ${exp.color}`}
                        style={{
                          boxShadow: "0 6px 20px rgba(160, 32, 32, 0.12)",
                        }}
                      />
                      <div
                        className={`ml-3 mt-1 h-0.5 w-12 rounded bg-gradient-to-r ${exp.color}`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="md:w-1/2">
                    <article className="relative bg-gradient-to-b from-white/4 to-transparent border border-white/6 rounded-2xl p-5 sm:p-6 backdrop-blur-sm hover:shadow-md transition-transform">
                      <h3 className="text-lg font-semibold text-rose-100">
                        {exp.role}
                      </h3>

                      <p className="text-sm text-rose-100/80 mt-1">
                        {exp.company} •{" "}
                        <span className="text-gray-400">{exp.period}</span>
                      </p>
                    </article>
                  </div>

                  {/* Mobile connector */}
                  <div className="md:hidden flex justify-center mt-3">
                    <div
                      className={`h-1 w-10 rounded bg-gradient-to-r ${exp.color}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .slow-spin { animation: spin 28s linear infinite; }
        }
        @keyframes spin { from { transform: rotate(0) } to { transform: rotate(360deg) } }
      `}</style>
    </section>
  );
}
