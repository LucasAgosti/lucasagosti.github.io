import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { dictionaries, type Locale } from "../data/i18n";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

type SobreProps = {
  locale?: Locale;
};

export function Sobre({ locale = "pt" }: SobreProps) {
  const copy = dictionaries[locale].site.about;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locale]);

  return (
    <>
      <section
        className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden"
        style={{ background: "#0C0D0C" }}
      >
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#B9F53E]/[0.04] blur-[140px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span
              className="text-[11px] tracking-[0.28em] uppercase text-[#B9F53E]/60 block mb-12"
              style={{ fontWeight: 700 }}
            >
              {copy.eyebrow}
            </span>

            <h1
              className="text-white max-w-[1000px] mb-12"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              {copy.heroTitleBefore}{" "}
              <span className="text-[#B9F53E]">{copy.heroTitleHighlight}</span>{" "}
              {copy.heroTitleAfter}
            </h1>

            <p
              className="text-white/40 max-w-[720px]"
              style={{
                fontSize: "clamp(16px, 1.4vw, 18px)",
                fontWeight: 400,
                lineHeight: 1.75,
              }}
            >
              {copy.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-28 lg:py-36 border-t border-[#20231F]"
        style={{ background: "#0C0D0C" }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-28">
            <Reveal className="lg:w-[58%]">
              <p
                className="text-white/75 mb-10"
                style={{
                  fontSize: "clamp(19px, 2vw, 24px)",
                  fontWeight: 500,
                  lineHeight: 1.55,
                  letterSpacing: "-0.015em",
                }}
              >
                {copy.intro1}
              </p>

              <p
                className="text-white/35"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.85,
                }}
              >
                {copy.intro2}
              </p>
            </Reveal>

            <Reveal delay={0.2} className="lg:w-[42%] flex items-start justify-center">
              <div className="w-full aspect-square rounded-2xl bg-[#0C0D0C]/60 border border-[#20231F] flex items-center justify-center relative overflow-hidden group hover:border-[#B9F53E]/20 transition-all duration-700">
                <div className="absolute inset-0 bg-[#B9F53E]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span
                  className="text-[11px] tracking-[0.22em] uppercase text-white/12 group-hover:text-white/15 relative z-10 transition-colors duration-700"
                  style={{ fontWeight: 600 }}
                >
                  {copy.visualPlaceholder}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="py-28 lg:py-36 border-t border-[#20231F]"
        style={{ background: "#0C0D0C" }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <Reveal>
            <h2
              className="text-white/90 max-w-[800px] mb-20"
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
              }}
            >
              {copy.expertiseTitle}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {copy.expertiseBlocks.map((block, i) => (
              <Reveal key={block.title} delay={0.12 * i}>
                <div>
                  <h3
                    className="text-white/85 mb-5"
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {block.title}
                  </h3>
                  <p
                    className="text-white/35"
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: 1.85,
                    }}
                  >
                    {block.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-32 lg:py-40 border-t border-[#20231F] relative overflow-hidden"
        style={{ background: "#0C0D0C" }}
      >
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#B9F53E]/[0.03] blur-[160px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
          <Reveal>
            <span
              className="text-[11px] tracking-[0.28em] uppercase text-[#B9F53E]/50 block mb-12"
              style={{ fontWeight: 700 }}
            >
              {copy.thinkingEyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-white/50 max-w-[800px] mb-12"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.85,
              }}
            >
              {copy.thinkingParagraph1}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p
              className="text-white/30 max-w-[740px]"
              style={{
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.85,
              }}
            >
              {copy.thinkingParagraph2}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}