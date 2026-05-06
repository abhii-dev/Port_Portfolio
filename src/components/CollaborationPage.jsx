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
];

export default function CollaborationPage() {
  return (
    <section
      className="relative w-full min-h-screen px-6 md:px-20 py-24 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #004f4a, #006b64, #00A198)",
        color: "#E4DDD3",
      }}
    >
      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-xs tracking-[4px] text-[#d8cfc2] uppercase">
            Worked With
          </p>

          <h1 className="text-[42px] md:text-[64px] font-black mt-3 leading-tight">
            <span
              style={{
                background: "linear-gradient(to bottom, #F5EFE6, #d8cfc2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              COLLABORATIONS
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-[#efe7dd] text-sm md:text-base leading-relaxed">
            A collection of creators, brands, and businesses I’ve worked with
            through video editing, reels, AI content, and motion graphics.
          </p>
        </div>

        {/* CIRCULAR / ARC STYLE LAYOUT */}
        <div className="relative h-[700px] w-full hidden md:block">
          
          {/* TOP LEFT */}
          <LogoCard image={collaborators[0]} className="top-0 left-[10%]" />

          {/* TOP CENTER */}
          <LogoCard
            image={collaborators[1]}
            className="top-0 left-1/2 -translate-x-1/2"
          />

          {/* TOP RIGHT */}
          <LogoCard image={collaborators[2]} className="top-0 right-[10%]" />

          {/* MIDDLE LEFT */}
          <LogoCard
            image={collaborators[3]}
            className="top-[230px] left-[18%]"
          />

          {/* CENTER */}
          <LogoCard
            image={collaborators[4]}
            className="top-[230px] left-1/2 -translate-x-1/2 scale-110"
          />

          {/* MIDDLE RIGHT */}
          <LogoCard
            image={collaborators[5]}
            className="top-[230px] right-[18%]"
          />

          {/* BOTTOM LEFT */}
          <LogoCard
            image={collaborators[6]}
            className="bottom-0 left-[24%]"
          />

          {/* BOTTOM RIGHT */}
          <LogoCard
            image={collaborators[7]}
            className="bottom-0 right-[24%]"
          />
        </div>

        {/* MOBILE */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {collaborators.map((image, index) => (
            <LogoCard key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCard({ image, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className={`absolute w-[180px] h-[180px] flex items-center justify-center ${className}`}
    >
      <img
        src={image}
        alt="brand"
        className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
      />
    </motion.div>
  );
}