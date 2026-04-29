import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { getProjects } from "../data/projects";
import type { Locale } from "../data/i18n";
import { getLocalizedPath } from "../utils/localePaths";

type CasesProps = {
  locale?: Locale;
};

export function Cases({ locale = "pt" }: CasesProps) {
  const projects = getProjects(locale);
  const isEnglish = locale === "en";
  const casesPath = getLocalizedPath(locale, "cases");

  const copy = {
    eyebrow: isEnglish ? "Work" : "Trabalho",
    title: isEnglish ? "Projects" : "Cases",
    description: isEnglish
      ? "A selection of digital products and experiences where I worked with UX/UI, product vision and interface organization."
      : "Uma seleção de produtos e experiências digitais em que atuei com UX/UI, visão de produto e organização de interface.",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden"
        style={{ background: "#0C0D0C" }}
      >
        <div className="absolute top-[15%] right-[8%] w-[400px] h-[400px] rounded-full bg-[#B9F53E]/[0.04] blur-[140px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span
              className="text-[11px] tracking-[0.28em] uppercase text-[#B9F53E]/60 block mb-8"
              style={{ fontWeight: 700 }}
            >
              {copy.eyebrow}
            </span>

            <h1
              className="text-white mb-10"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.045em",
              }}
            >
              {copy.title}
            </h1>

            <p
              className="max-w-[720px] text-white/40"
              style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75 }}
            >
              {copy.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-t border-[#20231F]"
        style={{ background: "#0C0D0C" }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  to={`${casesPath}/${project.slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 py-9 border-t border-[#20231F] hover:border-[#B9F53E]/40 hover:bg-white/[0.015] transition-all duration-500 px-6 -mx-6 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-5 mb-3">
                      <h2
                        className="text-white/80 group-hover:text-[#B9F53E] transition-colors duration-500 shrink-0"
                        style={{
                          fontSize: "clamp(22px, 2vw, 28px)",
                          fontWeight: 700,
                          letterSpacing: "-0.025em",
                        }}
                      >
                        {project.name}
                      </h2>

                      <span
                        className="text-white/25 group-hover:text-white/40 hidden md:inline text-[15px] truncate transition-colors duration-500"
                        style={{ fontWeight: 400 }}
                      >
                        {project.description}
                      </span>
                    </div>

                    <p
                      className="text-white/25 group-hover:text-white/35 text-[15px] md:hidden mb-2 transition-colors duration-500"
                      style={{ fontWeight: 400 }}
                    >
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
                        {project.platform} · {project.year}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.5}
                    className="text-white/20 group-hover:text-[#B9F53E] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-500 shrink-0"
                  />
                </Link>
              </motion.div>
            ))}

            <div className="border-t border-[#20231F]" />
          </div>
        </div>
      </section>
    </>
  );
}