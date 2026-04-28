import React from "react";

// IMPORT YOUR LOGOS
import maya from "../assets/maya.png";
import photoshop from "../assets/photoshop.png";
import aftereffects from "../assets/aftereffects.png";
import premiere from "../assets/premiere.png";
import blender from "../assets/blender.png";

const skills = [
  { name: "Autodesk Maya", level: 90, logo: maya },
  { name: "Photoshop", level: 92, logo: photoshop },
  { name: "After Effects", level: 93, logo: aftereffects },
  { name: "Premiere Pro", level: 94, logo: premiere },
  { name: "Basic Blender", level: 70, logo: blender },
];

export default function Skill() {
  return (
    <section
      className="relative w-full px-6 md:px-20 py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #cfc7bc, #dcd5cb, #E4DDD3)",
        color: "#003f3a",
      }}
    >
      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-20">
          <p className="text-xs tracking-[4px] text-[#007d74] uppercase">
            My Skills
          </p>

          <h1 className="text-[52px] md:text-[64px] font-black mt-3 leading-tight">
            <span
              style={{
                background: "linear-gradient(to bottom, #004f4a, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              WHAT I DO
            </span>
          </h1>
        </div>

        {/* SKILLS */}
        <div className="space-y-10">

          {skills.map((skill, i) => (
            <div key={i}>

              {/* TOP ROW */}
              <div className="flex justify-between items-center mb-3">

                <div className="flex items-center gap-4">
                  {/* LOGO */}
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />

                  <h3 className="text-lg font-semibold tracking-wide">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-sm text-[#007d74]">
                  {skill.level}%
                </span>
              </div>

              {/* BAR */}
              <div className="w-full h-[3px] bg-[#c8c1b7] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    background:
                      "linear-gradient(to right, #004f4a, #00A198)",
                  }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}