import React from "react";
import { motion } from "framer-motion";

const collaborators = [
  "/images/C1.png",
  "/images/C2.png",
  "/images/C3.png",
  "/images/C4.png",
  "/images/C5.png",
  "/images/C6.png",
  "/images/C7.png",
  "/images/C8.png",
  "/images/C9.png",
  "/images/C10.png",
  "/images/C11.png",
  "/images/C12.png",
];

export default function CollaborationPage() {
  return (
    <section
      className="relative w-full min-h-screen px-6 md:px-20 py-24 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #E4DDD3, #dcd5cb, #cfc7bc)",
        color: "#003f3a",
      }}
    >
      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] text-[#007d74] uppercase">
            Worked With
          </p>

          <h1 className="text-[42px] md:text-[64px] font-black mt-3 leading-tight">
            <span
              style={{
                background: "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              COLLABORATIONS
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-[#336b67] text-sm md:text-base leading-relaxed">
            A collection of creators, brands, and businesses I’ve worked with
            through video editing, reels, AI content, and motion graphics.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collaborators.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.04 }}
              className="rounded-2xl overflow-hidden border border-[#00A198]/20 bg-white/20 backdrop-blur-md shadow-lg h-[220px] md:h-[260px] flex items-center justify-center p-4"
            >
              <img
                src={image}
                alt={`collaboration-${index}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}