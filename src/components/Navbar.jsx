import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-[#E4DDD3]/70 backdrop-blur-2xl border-b border-white/20"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-[#00A198]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 cursor-pointer"
        >

          {/* LOGO ICON */}
          <div className="relative">

            <div className="absolute inset-0 bg-[#00A198]/30 blur-xl rounded-2xl"></div>

            <div
              className="relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20"
              style={{
                background:
                  "linear-gradient(to bottom, #00A198, #004f4a)",
              }}
            >
              <span className="font-black text-white text-lg">
                P
              </span>
            </div>
          </div>

          {/* LOGO TEXT */}
          <div className="flex flex-col leading-none">

            <h1
              className="text-2xl font-black tracking-tight"
              style={{
                background:
                  "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PORTFOLIO
            </h1>

            {/* MINI DESIGN */}
            <div className="flex items-center gap-2 mt-1">

              <div className="w-8 h-[1px] bg-gradient-to-r from-[#00A198] to-transparent" />

              <div className="relative flex items-center justify-center">

                <div className="absolute w-3 h-3 rounded-full bg-[#00A198]/30 animate-ping"></div>

                <div className="relative w-2 h-2 rounded-full bg-[#00A198]"></div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE DESIGN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-5"
        >

          {/* Line */}
          <div className="hidden md:block w-24 h-[1px] bg-gradient-to-r from-transparent to-[#00A198]" />

          {/* Animated Circle */}
          <div className="relative flex items-center justify-center">

            <div className="absolute w-16 h-16 rounded-full border border-[#00A198]/20 animate-pulse"></div>

            <div className="absolute w-10 h-10 rounded-full border border-[#00A198]/30"></div>

            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#004f4a] to-[#00A198] shadow-[0_0_20px_rgba(0,161,152,0.7)]"></div>

          </div>

          {/* Line */}
          <div className="hidden md:block w-24 h-[1px] bg-gradient-to-l from-transparent to-[#00A198]" />

        </motion.div>
      </div>
    </nav>
  );
}