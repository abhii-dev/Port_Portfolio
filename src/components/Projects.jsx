import React, { useState } from "react";

const sections = {
  "3D Animation": [
    "/videos/3d/v1.mp4",
    "/videos/3d/v2.mp4",
    "/videos/3d/v3.mp4",
  ],
  "Video Editing": [
    "/videos/video/e1.mp4",
    "/videos/video/e2.mp4",
    "/videos/video/e3.mp4",
  ],
  "Motion Graphics": [
    "/videos/motion/m1.mp4",
    "/videos/motion/m2.mp4",
    "/videos/motion/m3.mp4",
  ],
};

export default function Projects() {
  const [active, setActive] = useState("3D Animation");

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

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[4px] text-[#007d74] uppercase">
            My Work
          </p>

          <h1 className="text-[56px] md:text-[64px] font-black mt-3">
            <span
              style={{
                background: "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PROJECTS
            </span>
          </h1>
        </div>

        {/* 🔥 TABS */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                active === key
                  ? "bg-gradient-to-r from-[#004f4a] to-[#00A198] text-white shadow-md"
                  : "bg-white/30 border border-[#00A198]/20 text-[#007d74] hover:scale-105"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* 🔥 ACTIVE CATEGORY TITLE */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {active}
          </h2>
          <div className="mt-2 w-16 h-[2px] mx-auto bg-gradient-to-r from-[#004f4a] to-[#00A198]" />
        </div>

        {/* 🔥 VIDEO GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {sections[active].map((video, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-[#00A198]/20 bg-white/30 backdrop-blur-md hover:scale-[1.02] transition"
            >
              <video
                src={video}
                muted
                loop
                controls
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}