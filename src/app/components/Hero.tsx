import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fafafa 0%, #ffffff 60%)" }}
    >
      {/* Subtle decorative element */}
      <div className="absolute top-[15%] right-[8%] w-[340px] h-[340px] rounded-full opacity-[0.03] border border-[#1a1a1a]" />
      <div className="absolute bottom-[20%] left-[5%] w-[180px] h-[180px] rounded-full opacity-[0.02] bg-[#1a1a1a]" />

      <div className="max-w-[1280px] mx-auto w-full px-8 lg:px-12 pt-32 pb-20">
        {/* Eyebrow */}
        <div className="mb-8">
          <span
            className="text-[12px] tracking-[0.25em] uppercase text-[#999]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Lucas Fernandes
          </span>
          <div className="w-12 h-[1px] bg-[#ddd] mt-4" />
        </div>

        {/* Headline */}
        <h1
          className="max-w-[820px] text-[#1a1a1a] mb-10"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Product Designer focused on{" "}
          <span className="italic text-[#444]">UX/UI</span> for mobile and
          desktop products
        </h1>

        {/* Supporting text */}
        <p
          className="max-w-[560px] text-[#777] mb-14"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.75,
          }}
        >
          I create digital products that are clear, scalable and visually
          refined. My work combines user-centered thinking, product logic and
          interface precision across mobile and desktop experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={() => scrollTo("projects")}
            className="group flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 text-[13px] tracking-[0.1em] uppercase hover:bg-[#333] transition-all duration-400 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            View Projects
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
          <button
            onClick={() => scrollTo("approach")}
            className="flex items-center gap-3 text-[#555] px-8 py-4 text-[13px] tracking-[0.1em] uppercase border border-[#ddd] hover:border-[#999] hover:text-[#1a1a1a] transition-all duration-400 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            About Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span
            className="text-[10px] tracking-[0.2em] uppercase text-[#999]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Scroll
          </span>
          <ArrowDown size={14} strokeWidth={1} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
