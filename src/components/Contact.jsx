import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      className="relative w-full overflow-hidden py-36 px-6 md:px-20"
      style={{
        background:
          "radial-gradient(circle at top, #f0ebe3 0%, #e4ddd3 40%, #cfc7bc 100%)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#00A198]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-[#007d74]/10 blur-3xl rounded-full"></div>
      </div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#004f4a 1px, transparent 1px), linear-gradient(to right, #004f4a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* TOP DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#00A198]" />

          <div className="relative flex items-center justify-center">

            <div className="absolute w-5 h-5 rounded-full bg-[#00A198]/30 animate-ping"></div>

            <div className="relative w-3 h-3 rounded-full bg-[#004f4a] border border-white shadow-lg"></div>

          </div>

          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#00A198]" />

        </motion.div>

        {/* BIG HEADING */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[70px] md:text-[140px] font-black leading-[0.85] tracking-tight"
        >
          <span className="text-[#003f3a]">THANK</span>

          <br />

          <span
            style={{
              background:
                "linear-gradient(to bottom, #004f4a, #00A198)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="drop-shadow-[0_10px_30px_rgba(0,161,152,0.25)]"
          >
            YOU
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-[#005f59] max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed"
        >
          Thanks for exploring my work and creative journey. I’m always excited
          to collaborate on cinematic edits, motion graphics, storytelling,
          and visually impactful projects.
        </motion.p>

        {/* MAIN CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-24"
        >
          {/* Glow */}
          <div className="absolute inset-0 blur-3xl bg-[#00A198]/10 rounded-[40px]" />

          {/* Card */}
          <div className="relative rounded-[40px] border border-white/30 bg-white/20 backdrop-blur-2xl shadow-2xl overflow-hidden">

            {/* TOP SECTION */}
            <div className="px-10 py-12 md:px-16 md:py-14 border-b border-white/10">

              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* LEFT */}
                <div className="text-center lg:text-left">
                  <h2
                    className="text-4xl md:text-5xl font-black"
                    style={{
                      background:
                        "linear-gradient(to bottom, #004f4a, #00A198)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    MANJUNATH G
                  </h2>

                  <p className="mt-4 text-[#006b65] text-lg">
                    Video Editor • 3D Animator • Motion Designer
                  </p>
                </div>

                {/* RIGHT DESIGN */}
                <div className="flex items-center gap-5">

                  {/* Line */}
                  <div className="hidden md:block w-24 h-[1px] bg-gradient-to-r from-transparent to-[#00A198]" />

                  {/* Animated Circle */}
                  <div className="relative flex items-center justify-center">

                    <div className="absolute w-20 h-20 rounded-full border border-[#00A198]/20 animate-pulse"></div>

                    <div className="absolute w-14 h-14 rounded-full border border-[#00A198]/30"></div>

                    <div className="w-4 h-4 rounded-full bg-gradient-to-b from-[#004f4a] to-[#00A198] shadow-[0_0_20px_rgba(0,161,152,0.7)]"></div>

                  </div>

                  {/* Line */}
                  <div className="hidden md:block w-24 h-[1px] bg-gradient-to-l from-transparent to-[#00A198]" />

                </div>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="grid md:grid-cols-2">

              {/* PHONE */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="tel:+919539647418"
                className="group relative p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00A198]/0 via-transparent to-[#00A198]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#00A198]/10 flex items-center justify-center mb-6">
                  <Phone
                    size={28}
                    className="text-[#004f4a]"
                  />
                </div>

                <p className="relative z-10 text-xs tracking-[4px] uppercase text-[#007d74]">
                  Contact
                </p>

                <h3 className="relative z-10 mt-4 text-2xl md:text-3xl font-black text-[#003f3a]">
                  90193 13710
                </h3>
              </motion.a>

              {/* EMAIL */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="mailto:manjug8693@gmail.com"
                className="group relative p-10 md:p-12 flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00A198]/0 via-transparent to-[#00A198]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#00A198]/10 flex items-center justify-center mb-6">
                  <Mail
                    size={28}
                    className="text-[#004f4a]"
                  />
                </div>

                <p className="relative z-10 text-xs tracking-[4px] uppercase text-[#007d74]">
                  Email
                </p>

                <h3 className="relative z-10 mt-4 text-xl md:text-2xl font-black text-[#003f3a] break-all">
                  manjug8693@gmail.com
                </h3>

                <p className="relative z-10 mt-3 text-[#006b65] text-sm">
                  Let’s build something visually amazing
                </p>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}