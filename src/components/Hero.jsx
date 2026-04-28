export default function Hero() {
  return (
    <section className="w-full h-screen overflow-hidden relative"
      style={{
        background: "linear-gradient(to bottom, #E4DDD3, #dcd5cb, #cfc7bc)"
      }}
    >
      
      <div className="w-full h-full flex items-center justify-center relative">
        
        <div className="relative text-center">
          
          {/* Big Heading */}
          <h1 className="text-[180px] font-black leading-[0.85] tracking-tight select-none transform scale-y-[3.6] mb-40">
            
            <span
              style={{
                background: "linear-gradient(to bottom, #003f3a, #007d74, #00A198)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PORTFOLIO
            </span>

          </h1>

        </div>

        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 w-full h-48"
          style={{
            background: "linear-gradient(to top, #E4DDD3, rgba(228,221,211,0.8), transparent)"
          }}
        ></div>

        {/* Bottom Text */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center">
          <p
            className="text-lg font-extrabold"
            style={{ color: "#004f4a" }}
          >
            // Video Editor
          </p>
          <p
            className="text-lg font-extrabold"
            style={{ color: "#004f4a" }}
          >
            Visual Designer
          </p>
        </div>

      </div>
    </section>
  );
}