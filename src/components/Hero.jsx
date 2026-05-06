import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
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

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#004f4a 1px, transparent 1px), linear-gradient(to right, #004f4a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* Top Design */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-3">

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#00A198]" />

            <div className="relative w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-[#00A198] animate-ping opacity-40"></div>

              <div className="relative w-3 h-3 rounded-full bg-[#004f4a] border border-white"></div>
            </div>

            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#00A198]" />

          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[80px] sm:text-[120px] md:text-[180px] font-black leading-[0.8] tracking-tight select-none"
        >
          <span
            style={{
              background:
                "linear-gradient(to bottom, #003f3a, #007d74, #00A198)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="drop-shadow-[0_10px_30px_rgba(0,161,152,0.25)]"
          >
            PORTFOLIO
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-8 max-w-2xl text-[#004f4a]/80 text-lg md:text-xl font-medium leading-relaxed"
        >
          Creating cinematic edits, immersive animations, and stunning motion
          graphics that turn ideas into visual experiences.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            "Video Editor",
            "3D Animator",
            "Motion Graphics",
          ].map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-white/40 backdrop-blur-md border border-[#00665f]/20 shadow-lg hover:scale-105 transition-all duration-300"
            >
              <p className="text-[#004f4a] font-bold text-sm md:text-base">
                // {skill}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            delay: 1.2,
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute bottom-10 flex flex-col items-center"
        >
          <p className="text-[#004f4a]/70 text-sm font-medium mb-2">
            Scroll Down
          </p>

          <ChevronDown
            size={30}
            className="text-[#004f4a]/80"
          />
        </motion.div>
      </div>
    </section>
  );
}