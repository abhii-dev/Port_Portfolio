import React from "react";

export default function Contact() {
  return (
    <section
      className="relative w-full px-6 md:px-20 py-36 overflow-hidden text-center"
      style={{
        background: "linear-gradient(to bottom, #cfc7bc, #dcd5cb, #E4DDD3)",
        color: "#003f3a",
      }}
    >
      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* SOFT GLOW (adds character) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00A198]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ===== BIG THANK YOU ===== */}
        <h1 className="text-[64px] md:text-[88px] font-black leading-none tracking-tight">
          <span className="">THANK</span>
          <span
            className="mt-2 pl-5"
            style={{
              background: "linear-gradient(to bottom, #004f4a, #00A198)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
             YOU
          </span>
        </h1>

        <p className="mt-6 text-[#005f59] max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Thanks for checking out my work. I’m always open to creating
          something meaningful and visually impactful.
        </p>

        {/* ===== FLOATING CONTACT CARD ===== */}
        <div className="mt-20 relative">

          <div className="absolute inset-0 blur-2xl bg-[#00A198]/10 rounded-3xl" />

          <div className="relative bg-white/30 backdrop-blur-md border border-[#00A198]/20 rounded-3xl px-8 py-8 md:px-12 md:py-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">

            {/* NAME BLOCK */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Manjunath G</h3>
              <p className="text-sm text-[#006b65] mt-1">
                Video Editor & 3D Animator
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

              <div className="text-center">
                <p className="text-xs text-[#007d74] uppercase tracking-wider">
                  Contact
                </p>
                <a
                  href="tel:+919539647418"
                  className="text-lg font-semibold hover:opacity-70 transition"
                >
                  95396 47418
                </a>
              </div>

              <div className="hidden md:block w-[1px] h-10 bg-[#00A198]/30" />

              <div className="text-center">
                <p className="text-xs text-[#007d74] uppercase tracking-wider">
                  Email
                </p>
                <a
                  href="mailto:manjug8693@gmail.com"
                  className="text-lg font-semibold hover:opacity-70 transition"
                >
                  manjug8693@gmail.com
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}