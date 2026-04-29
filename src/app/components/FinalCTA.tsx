import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-32 lg:py-44 relative overflow-hidden"
      style={{ background: "#f7f6f4" }}
    >
      {/* Subtle decorative */}
      <div className="absolute top-[10%] left-[10%] w-[200px] h-[200px] rounded-full opacity-[0.02] bg-[#1a1a1a]" />
      <div className="absolute bottom-[15%] right-[8%] w-[280px] h-[280px] rounded-full opacity-[0.02] border border-[#1a1a1a]" />

      <div className="max-w-[1280px] mx-auto px-8 lg:px-12 text-center">
        <span
          className="text-[11px] tracking-[0.25em] uppercase text-[#bbb] block mb-8"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          Get in touch
        </span>
        <h2
          className="text-[#1a1a1a] max-w-[600px] mx-auto mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Let's build thoughtful digital products
        </h2>
        <p
          className="max-w-[520px] mx-auto text-[#888] mb-14"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          I'm open to product design opportunities, freelance collaborations and
          digital projects that value clarity, usability and strong visual
          execution.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:hello@lucasfernandes.design"
            className="group flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-4 text-[13px] tracking-[0.1em] uppercase hover:bg-[#333] transition-all duration-400"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Let's Connect
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] tracking-[0.1em] uppercase text-[#999] hover:text-[#555] transition-colors duration-300 underline underline-offset-4 decoration-[#ddd] hover:decoration-[#999]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
