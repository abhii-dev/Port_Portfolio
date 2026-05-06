import React, { useState } from "react";

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

export default function Projects() {
  const [active, setActive] = useState("AI");

  return (
    <section
      className="relative w-full px-6 md:px-20 py-28 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #E4DDD3, #dcd5cb, #cfc7bc)",
        color: "#003f3a",
      }}
    >
      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[4px] text-[#007d74] uppercase">
            My Work
          </p>

          <h1 className="text-[42px] md:text-[64px] font-black mt-3 leading-tight">
            <span
              style={{
                background: "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VIDEO EDITING
            </span>
          </h1>
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition duration-300 ${
                active === key
                  ? "bg-gradient-to-r from-[#004f4a] to-[#00A198] text-white shadow-md scale-105"
                  : "bg-white/30 border border-[#00A198]/20 text-[#007d74] hover:scale-105"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* ACTIVE CATEGORY TITLE */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {active} Editing
          </h2>

          <div className="mt-2 w-16 h-[2px] mx-auto bg-gradient-to-r from-[#004f4a] to-[#00A198]" />
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections[active].map((video, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-[#00A198]/20 bg-white/30 backdrop-blur-md hover:scale-[1.03] transition duration-300 shadow-lg"
            >
              <video
                src={video}
                muted
                loop
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-[9/16] bg-black object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}