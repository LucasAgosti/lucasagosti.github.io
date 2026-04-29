import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { dictionaries, type Locale } from "../data/i18n";
import { getProjects } from "../data/projects";
import { getLocalizedPath } from "../utils/localePaths";

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

type HomeProps = {
  locale?: Locale;
};

export function Home({ locale = "pt" }: HomeProps) {
  const copy = dictionaries[locale].site.home;
  const projects = getProjects(locale);
  const featuredCases = projects.filter((project) => project.featured).slice(0, 3);

  const casesPath = getLocalizedPath(locale, "cases");
  const contactPath = getLocalizedPath(locale, "contact");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locale]);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0C0D0C" }}
      >
        <div className="absolute top-[15%] right-[8%] w-[400px] h-[400px] rounded-full bg-[#B9F53E]/[0.04] blur-[140px] pointer-events-none" />

        <div className="absolute top-[25%] right-[5%] pointer-events-none hidden lg:block opacity-[0.03]">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
            <circle cx="120" cy="120" r="110" stroke="#B9F53E" strokeWidth="3" />
            <circle
              cx="120"
              cy="120"
              r="80"
              stroke="#B9F53E"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <circle cx="120" cy="120" r="50" fill="#B9F53E" opacity="0.15" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 w-full pt-32 pb-24 lg:pt-40 lg:pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span
              className="text-[11px] tracking-[0.24em] uppercase text-[#B9F53E]/60 block mb-12"
              style={{ fontWeight: 600 }}
            >
              {copy.hero.eyebrow}
            </span>

            <div className="relative mb-12">
              <h1
                className="text-white max-w-[1100px] relative z-10"
                style={{
                  fontSize: "clamp(3rem, 9vw, 7rem)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                }}
              >
                {copy.hero.beforeHighlight}{" "}
                <span className="relative inline-block">
                  <span className="text-[#B9F53E]">{copy.hero.highlight}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[3px] bg-[#B9F53E]/40"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  />
                </span>{" "}
                {copy.hero.afterHighlight}
              </h1>
            </div>

            <p
              className="text-white/40 max-w-[680px]"
              style={{
                fontSize: "clamp(16px, 1.3vw, 18px)",
                fontWeight: 400,
                lineHeight: 1.75,
              }}
            >
              {copy.hero.description}
            </p>
          </motion.div>

          <motion.div
            className="mt-24 lg:mt-32 h-[1px] bg-gradient-to-r from-[#B9F53E]/30 via-[#20231F] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </section>

      <section
        className="py-28 lg:py-36 border-b border-[#20231F]"
        style={{ background: "#0C0D0C" }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <Reveal>
            <h2
              className="text-white/90 max-w-[920px] mb-20"
              style={{
                fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
              }}
            >
              {copy.credibility.title}
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-white/35 max-w-[720px] mb-20"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.8,
              }}
            >
              {copy.credibility.description}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
            {copy.credibility.items.map((item, i) => (
              <Reveal key={item} delay={0.05 * i}>
                <div className="group flex items-center gap-3 cursor-default">
                  <div className="w-1 h-1 rounded-full bg-[#B9F53E]/40 group-hover:bg-[#B9F53E] transition-colors duration-400" />
                  <span
                    className="text-[13px] tracking-[0.02em] text-white/45 group-hover:text-white/70 transition-colors duration-400"
                    style={{ fontWeight: 500 }}
                  >
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-36 lg:py-48 relative overflow-hidden border-b border-[#20231F]"
        style={{ background: "#0C0D0C" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B9F53E]/[0.03] blur-[180px] pointer-events-none" />

        <div className="absolute bottom-[8%] right-[6%] pointer-events-none hidden lg:block opacity-[0.04]">
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
            <rect
              x="40"
              y="40"
              width="240"
              height="240"
              stroke="#B9F53E"
              strokeWidth="4"
              strokeDasharray="16 16"
            />
            <rect x="80" y="80" width="160" height="160" stroke="#B9F53E" strokeWidth="3" />
            <circle cx="160" cy="160" r="60" fill="#B9F53E" opacity="0.1" />
            <path d="M160 100L160 220M100 160L220 160" stroke="#B9F53E" strokeWidth="2" opacity="0.6" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
          <Reveal>
            <span
              className="text-[10px] tracking-[0.28em] uppercase text-[#B9F53E]/50 block mb-12"
              style={{ fontWeight: 700 }}
            >
              {copy.manifesto.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h2
              className="text-white max-w-[1000px] mb-16"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              {copy.manifesto.titleBefore}
              <br />
              <span className="text-[#B9F53E]">{copy.manifesto.titleHighlight}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            <p
              className="text-white/50 max-w-[720px] mb-10"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.85,
              }}
            >
              {copy.manifesto.paragraph1}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p
              className="text-white/30 max-w-[680px]"
              style={{
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.85,
              }}
            >
              {copy.manifesto.paragraph2}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-28 lg:py-36 border-b border-[#20231F]" style={{ background: "#0C0D0C" }}>
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
              {copy.expertise.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {copy.expertise.blocks.map((block, i) => (
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

      <section className="py-28 lg:py-36 border-b border-[#20231F]" style={{ background: "#0C0D0C" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <Reveal>
            <span
              className="text-[11px] tracking-[0.24em] uppercase text-[#B9F53E]/50 block mb-5"
              style={{ fontWeight: 600 }}
            >
              {copy.cases.eyebrow}
            </span>
            <h2
              className="text-white mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              {copy.cases.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="text-white/35 max-w-[640px] mb-20"
              style={{
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.8,
              }}
            >
              {copy.cases.description}
            </p>
          </Reveal>

          <div className="flex flex-col">
            {featuredCases.map((project, i) => (
              <Reveal key={project.slug} delay={0.05 * i}>
                <Link
                  to={`${casesPath}/${project.slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 py-8 border-t border-[#20231F] hover:border-[#B9F53E]/40 hover:bg-white/[0.01] transition-all duration-500 cursor-pointer px-6 -mx-6 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-5 mb-3">
                      <h3
                        className="text-white/80 group-hover:text-[#B9F53E] transition-colors duration-500 shrink-0"
                        style={{
                          fontSize: "clamp(20px, 1.8vw, 26px)",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {project.name}
                      </h3>
                      <span
                        className="text-white/25 group-hover:text-white/35 hidden md:inline text-[14px] truncate transition-colors duration-500"
                        style={{ fontWeight: 400 }}
                      >
                        {project.description}
                      </span>
                    </div>

                    <p className="text-white/25 text-[14px] md:hidden mb-2" style={{ fontWeight: 400 }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span
                        className="text-[11px] tracking-[0.06em] text-white/30 group-hover:text-white/40 transition-colors duration-500"
                        style={{ fontWeight: 500 }}
                      >
                        {project.role}
                      </span>
                      <span
                        className="text-[11px] text-white/20 group-hover:text-white/25 transition-colors duration-500"
                        style={{ fontWeight: 400 }}
                      >
                        {project.scope}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-white/20 group-hover:text-[#B9F53E] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-500 shrink-0"
                  />
                </Link>
              </Reveal>
            ))}
            <div className="border-t border-[#20231F]" />
          </div>

          <Reveal delay={0.3}>
            <div className="mt-14">
              <Link
                to={casesPath}
                className="inline-flex items-center gap-2 text-[#B9F53E] hover:brightness-110 hover:gap-3 hover:tracking-[0.06em] transition-all duration-400 group"
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                {copy.cases.viewAll}
                <ArrowUpRight size={16} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform duration-400" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28 lg:py-36 border-b border-[#20231F]" style={{ background: "#0C0D0C" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <Reveal>
            <span
              className="text-[11px] tracking-[0.24em] uppercase text-[#B9F53E]/50 block mb-5"
              style={{ fontWeight: 600 }}
            >
              {copy.experiments.eyebrow}
            </span>
            <h2
              className="text-white/90 max-w-[700px] mb-8"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
              }}
            >
              {copy.experiments.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p
              className="text-white/35 max-w-[680px] mb-8"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.8 }}
            >
              {copy.experiments.paragraph1}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p
              className="text-white/25 max-w-[640px] mb-20"
              style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.85 }}
            >
              {copy.experiments.paragraph2}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.experiments.projects.map((proj, i) => (
              <Reveal key={proj.slug} delay={0.1 * i}>
                <div className="group border border-[#20231F] rounded-2xl p-8 lg:p-9 hover:border-[#B9F53E]/30 transition-all duration-500 relative overflow-hidden bg-[#0C0D0C]/40">
                  <div className="absolute inset-0 bg-[#B9F53E]/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <h3
                        className="text-white/85 group-hover:text-white transition-colors duration-500"
                        style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {proj.name}
                      </h3>
                      <span
                        className="text-[9px] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border border-[#B9F53E]/30 text-[#B9F53E]/70 group-hover:border-[#B9F53E]/50 group-hover:text-[#B9F53E] transition-all duration-500"
                        style={{ fontWeight: 700 }}
                      >
                        {proj.status}
                      </span>
                    </div>

                    <p
                      className="text-white/30 mb-10 group-hover:text-white/40 transition-colors duration-500"
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: 1.75,
                      }}
                    >
                      {proj.desc}
                    </p>

                    <Link
                      to={`${casesPath}/${proj.slug}`}
                      className="inline-flex items-center gap-2 bg-[#B9F53E] text-[#0C0D0C] px-7 py-3.5 rounded-lg text-[12px] tracking-[0.12em] uppercase hover:brightness-110 hover:gap-3 transition-all duration-400"
                      style={{ fontWeight: 800 }}
                    >
                      {copy.experiments.accessProject}
                      <ArrowUpRight size={15} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-40" style={{ background: "#0C0D0C" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <Reveal>
            <span
              className="text-[11px] tracking-[0.24em] uppercase text-[#B9F53E]/50 block mb-6"
              style={{ fontWeight: 600 }}
            >
              {copy.contact.eyebrow}
            </span>
            <h2
              className="text-white mb-10"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              {copy.contact.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p
              className="text-white/45 max-w-[680px] mb-12"
              style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.8 }}
            >
              {copy.contact.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              to={contactPath}
              className="inline-flex items-center gap-2.5 bg-[#B9F53E] text-[#0C0D0C] px-9 py-4 rounded-xl text-[13px] tracking-[0.12em] uppercase hover:brightness-110 hover:gap-3.5 transition-all duration-400"
              style={{ fontWeight: 800 }}
            >
              {copy.contact.button}
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}