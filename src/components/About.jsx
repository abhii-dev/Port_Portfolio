import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
} from "lucide-react";

import avatar from "../assets/avatar.jpeg";

export default function About() {
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

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#004f4a 1px, transparent 1px), linear-gradient(to right, #004f4a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative group">

            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-b from-[#00A198]/30 to-transparent blur-2xl rounded-[40px]"></div>

            {/* Card */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl">

              <img
                src={avatar}
                alt="profile"
                className="w-[350px] md:w-[420px] h-[520px] object-cover object-[center_25%] group-hover:scale-105 transition-all duration-700"
              />

              {/* Floating Design */}
              <div className="absolute bottom-6 left-6">

                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl">

                  {/* Animated Dot */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-5 h-5 rounded-full bg-[#00A198]/30 animate-ping"></div>

                    <div className="relative w-3 h-3 rounded-full bg-[#00A198] border border-white"></div>
                  </div>

                  {/* Lines */}
                  <div className="flex flex-col gap-[5px]">
                    <div className="w-14 h-[2px] rounded-full bg-gradient-to-r from-[#004f4a] to-[#00A198]" />

                    <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#00A198] to-transparent" />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Top Design */}
          <div className="flex items-center gap-3 mb-8">

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#00A198]" />

            <div className="relative w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-[#00A198] animate-ping opacity-40"></div>

              <div className="relative w-3 h-3 rounded-full bg-[#004f4a] border border-white"></div>
            </div>

            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#00A198]" />

          </div>

          {/* Heading */}
          <h1 className="text-[60px] md:text-[90px] font-black leading-[0.9] tracking-tight">
            <span
              style={{
                background:
                  "linear-gradient(to bottom, #003f3a, #007d74, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="drop-shadow-[0_10px_30px_rgba(0,161,152,0.25)]"
            >
              MANJUNATH G
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-[#005f59] text-[16px] md:text-[17px] leading-relaxed max-w-2xl">
            I am a passionate 3D Animator with a strong focus on character and
            quadruped animation, dedicated to bringing stories to life through
            expressive motion. With hands-on industry experience across
            multiple studios, I specialize in animation, cinematic editing,
            visual storytelling, and immersive motion design.
          </p>

          <p className="mt-5 text-[#005f59] text-[16px] md:text-[17px] leading-relaxed max-w-2xl">
            Skilled in Autodesk Maya, After Effects, Premiere Pro, and
            Photoshop, I aim to craft visually engaging experiences with high
            attention to detail, creativity, and storytelling impact.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { num: "4+", label: "Years Experience" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/30 shadow-xl"
              >
                <h3
                  className="text-3xl font-black"
                  style={{
                    background:
                      "linear-gradient(to bottom, #004f4a, #00A198)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.num}
                </h3>

                <p className="mt-2 text-sm text-[#006b65] font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* EDUCATION + EXPERIENCE */}
      <div className="max-w-7xl mx-auto mt-36 grid lg:grid-cols-2 gap-16 relative z-10">

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-[35px] p-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-10">

            <div className="w-14 h-14 rounded-2xl bg-[#00A198]/10 flex items-center justify-center">
              <GraduationCap className="text-[#004f4a]" size={28} />
            </div>

            <h2
              className="text-3xl font-black"
              style={{
                background:
                  "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EDUCATION
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "KLE Society’s of BBA & BCA College",
                place: "Bachelor of Computer Application",
                year: "2015 - 2018",
              },
              {
                title: "Arena Animation Jayanagar Bangalore",
                place: "3D Rigging & Animation",
                year: "2018 - 2021",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/20 border border-white/20 hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-[#004f4a]">
                    {item.title}
                  </h3>

                  <span className="text-xs px-4 py-2 rounded-full bg-[#00A198] text-white font-semibold whitespace-nowrap">
                    {item.year}
                  </span>
                </div>

                <p className="text-[#006b65] text-sm mt-3">
                  {item.place}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-[35px] p-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-10">

            <div className="w-14 h-14 rounded-2xl bg-[#00A198]/10 flex items-center justify-center">
              <Briefcase className="text-[#004f4a]" size={28} />
            </div>

            <h2
              className="text-3xl font-black"
              style={{
                background:
                  "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EXPERIENCE
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Tata Elxsi Pvt Ltd",
                place: "3D Animator",
                year: "Dec 2021 - Nov 2022",
              },
              {
                title: "88 Pictures Pvt Ltd",
                place: "3D Animator",
                year: "Nov 2022 - Oct 2023",
              },
              {
                title: "Ankita Media & Entertainments Ltd",
                place: "3D Animator",
                year: "Oct 2023 - Feb 2024",
              },
              {
                title: "Scratchpad.inc",
                place: "Video Editor",
                year: "Aug 2024 - Present",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/20 border border-white/20 hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-[#004f4a]">
                    {item.title}
                  </h3>

                  <span className="text-xs px-4 py-2 rounded-full bg-[#00A198] text-white font-semibold whitespace-nowrap">
                    {item.year}
                  </span>
                </div>

                <p className="text-[#006b65] text-sm mt-3">
                  {item.place}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}