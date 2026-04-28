import React from "react";
import avatar from "../assets/avatar.jpeg";

export default function About() {
  return (
    <section
      className="relative w-full px-6 md:px-20 py-24 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #E4DDD3, #dcd5cb, #cfc7bc)",
        color: "#003f3a",
      }}
    >
      {/* NOISE */}
    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ===== MAIN SECTION ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-[360px] h-[480px] overflow-hidden rounded-2xl shadow-md">
            <img
              src={avatar}
              alt="profile"
              className="w-full h-full object-cover object-[center_25%]"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center max-w-[520px]">

          <p className="text-xs tracking-[4px] text-[#007d74] uppercase">
            About Me
          </p>

          <h1 className="text-[56px] md:text-[64px] font-black leading-[1.1] mt-3">
            <span
              style={{
                background: "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MANJUNATH G
            </span>
          </h1>

          <p className="mt-5 text-[#005f59] text-[15px] leading-relaxed">
            I am a passionate 3D Animator with a strong focus on character and quadruped animation, dedicated to bringing stories 
            to life through expressive motion. With hands-on experience in the animation industry, I have worked across multiple studios, 
            refining my skills in animation, video editing, and visual storytelling.
            I am proficient in tools like Autodesk Maya, After Effects, Premiere Pro, and Photoshop, 
            and I strive to deliver high-quality work with attention to detail and creativity. Currently, 
            I’m expanding my expertise in video editing while continuously improving my animation craft.
          </p>

          {/* STATS */}
          <div className="flex gap-6 mt-8">
            {[
              { num: "4+", label: "Experience" },
            ].map((item, i) => (
              <div
                key={i}
                className="px-6 py-4 rounded-xl bg-white/30 border border-[#00A198]/20"
              >
                <h3
                  className="text-xl font-bold"
                  style={{
                    background: "linear-gradient(to bottom, #004f4a, #00A198)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.num}
                </h3>
                <p className="text-xs text-[#007d74]">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== EDUCATION + EXPERIENCE ===== */}
      <div className="max-w-6xl mx-auto mt-28 grid md:grid-cols-2 gap-16 relative z-10">

        {/* EDUCATION */}
        <div>
          <h2 className="text-2xl font-semibold mb-10 pl-4 border-l-2 border-[#00A198]">
            <span
              style={{
                background: "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EDUCATION
            </span>
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "KLE Society’s of BBA & BCA College",
                place: "Bachelors of Computer Application",
                year: "2015 - 2018",
              },
              {
                title: "Arena Animation Jayanagar Bangalore",
                place: "3D Rigging & Animation",
                year: "2018 - 2021",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-xs px-3 py-1 rounded bg-[#00A198] text-white">
                    {item.year}
                  </span>
                </div>

                <p className="text-[#006b65] text-sm mt-2">
                  {item.place}
                </p>

                <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-[#00A198] to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <h2 className="text-2xl font-semibold mb-10 pl-4 border-l-2 border-[#00A198]">
            <span
              style={{
                background: "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EXPERIENCE
            </span>
          </h2>

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
              <div key={i}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-xs px-3 py-1 rounded bg-[#00A198] text-white">
                    {item.year}
                  </span>
                </div>

                <p className="text-[#006b65] text-sm mt-2">
                  {item.place}
                </p>

                <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-[#00A198] to-transparent" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}