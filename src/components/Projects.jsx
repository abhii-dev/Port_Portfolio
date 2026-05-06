import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Sparkles,
  Clapperboard,
  Film,
  Wand2,
} from "lucide-react";

const sections = {
  AI: [
    "/videos/ai/a1.mp4",
    "/videos/ai/a2.mp4",
    "/videos/ai/a3.mp4",
    "/videos/ai/a4.mp4",
    "/videos/ai/a5.mp4",
  ],

  Reels: [
    "/videos/reels/r1.mp4",
    "/videos/reels/r2.mp4",
    "/videos/reels/r3.mp4",
    "/videos/reels/r4.mp4",
    "/videos/reels/r5.mp4",
    "/videos/reels/r6.mp4",
  ],

  YouTube: [
    "/videos/youtube/y1.mp4",
    "/videos/youtube/y2.mp4",
    "/videos/youtube/y3.mp4",
    "/videos/youtube/y4.mp4",
    "/videos/youtube/y5.mp4",
    "/videos/youtube/y6.mp4",
  ],

  "Motion Graphics": [
    "/videos/motion/m1.mp4",
    "/videos/motion/m2.mp4",
  ],
};

const icons = {
  AI: <Sparkles size={18} />,
  Reels: <Clapperboard size={18} />,
  YouTube: <Film size={18} />,
  "Motion Graphics": <Wand2 size={18} />,
};

export default function Projects() {
  const [active, setActive] = useState("AI");

  return (
    <section
      className="relative w-full overflow-hidden py-28 px-6 md:px-20"
      style={{
        background:
          "radial-gradient(circle at top, #f0ebe3 0%, #e4ddd3 40%, #cfc7bc 100%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-[#00A198]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#007d74]/10 blur-3xl rounded-full"></div>
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#004f4a 1px, transparent 1px), linear-gradient(to right, #004f4a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >

          {/* TOP DESIGN */}
          <div className="flex items-center justify-center gap-4 mb-8">

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#00A198]" />

            <div className="relative flex items-center justify-center">

              <div className="absolute w-5 h-5 rounded-full bg-[#00A198]/30 animate-ping"></div>

              <div className="relative w-3 h-3 rounded-full bg-[#004f4a] border border-white shadow-lg"></div>

            </div>

            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#00A198]" />

          </div>

          {/* HEADING */}
          <h1 className="text-[55px] md:text-[95px] font-black leading-[0.9] tracking-tight">
            <span
              style={{
                background:
                  "linear-gradient(to bottom, #003f3a, #007d74, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VIDEO EDITING
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-8 max-w-3xl mx-auto text-[#005f59] text-[16px] md:text-[18px] leading-relaxed">
            Cinematic edits, reels, motion graphics and AI-generated visual
            experiences.
          </p>
        </motion.div>

        {/* TABS */}
        <div className="flex justify-center gap-5 mb-20 flex-wrap">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-7 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                active === key
                  ? "bg-gradient-to-r from-[#004f4a] to-[#00A198] text-white scale-105 shadow-2xl"
                  : "bg-white/30 border border-white/30 backdrop-blur-xl text-[#007d74] hover:scale-105"
              }`}
            >
              {icons[key]}
              {key}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-5xl font-black"
            style={{
              background:
                "linear-gradient(to bottom, #004f4a, #00A198)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {active} Projects
          </h2>

          <div className="mt-4 w-24 h-[3px] mx-auto rounded-full bg-gradient-to-r from-[#004f4a] to-[#00A198]" />
        </div>

        {/* VIDEO GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {sections[active].map((video, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group relative rounded-[28px] overflow-hidden border border-white/20 bg-white/20 backdrop-blur-xl shadow-2xl"
              >
                {/* VIDEO */}
                <video
                  key={video}
                  className="w-full h-full aspect-[9/16] bg-black object-contain"
                  controls
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controlsList="nodownload"
                >
                  <source src={video} type="video/mp4" />
                </video>

                {/* TOP LABEL */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                  <p className="text-white text-xs font-semibold">
                    {active}
                  </p>
                </div>

                {/* PLAY ICON */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center pointer-events-none">
                  <Play
                    size={18}
                    className="text-white fill-white ml-1"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}