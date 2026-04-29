import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Linkedin,
  X,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getProjects } from "../data/projects";
import type { Locale } from "../data/i18n";
import type { CaseStudySection } from "../data/i18n/types";
import { getLocalizedPath } from "../utils/localePaths";

type ExpandedImage = {
  src: string;
  alt: string;
  caption?: string;
};

function SectionEyebrow({ children }: { children?: string }) {
  if (!children) return null;

  return (
    <span
      className="text-[11px] tracking-[0.28em] uppercase text-[#B9F53E]/50 block mb-8"
      style={{ fontWeight: 700 }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2
      className="text-white/85 mb-10"
      style={{
        fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
        fontWeight: 800,
        lineHeight: 1.15,
        letterSpacing: "-0.03em",
      }}
    >
      {children}
    </h2>
  );
}

function TextSection({
  section,
}: {
  section: Extract<CaseStudySection, { type: "text" }>;
}) {
  return (
    <section
      className="py-24 lg:py-32 border-b border-[#20231F]"
      style={{ background: "#0C0D0C" }}
    >
      <div className="max-w-[980px] mx-auto px-6 lg:px-10">
        <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
        <SectionTitle>{section.title}</SectionTitle>

        <div className="flex flex-col gap-7">
          {section.body.map((paragraph, index) => (
            <p
              key={index}
              className="text-white/42"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.9,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection({
  section,
}: {
  section: Extract<CaseStudySection, { type: "quote" }>;
}) {
  return (
    <section
      className="py-24 lg:py-32 border-b border-[#20231F]"
      style={{ background: "#141514" }}
    >
      <div className="max-w-[1050px] mx-auto px-6 lg:px-10">
        <blockquote
          className="text-white/85"
          style={{
            fontSize: "clamp(1.55rem, 3vw, 2.7rem)",
            fontWeight: 800,
            lineHeight: 1.18,
            letterSpacing: "-0.04em",
          }}
        >
          “{section.quote}”
        </blockquote>

        {section.author && (
          <p
            className="text-white/30 mt-8"
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            {section.author}
          </p>
        )}
      </div>
    </section>
  );
}

function BulletsSection({
  section,
}: {
  section: Extract<CaseStudySection, { type: "bullets" }>;
}) {
  return (
    <section
      className="py-24 lg:py-32 border-b border-[#20231F]"
      style={{ background: "#0C0D0C" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="max-w-[720px] mb-16 lg:mb-20">
          <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
          <SectionTitle>{section.title}</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
          {section.items.map((item, index) => (
            <div key={index} className="py-9 border-t border-[#20231F]">
              <span
                className="text-[11px] tracking-[0.18em] text-white/15 block mb-5"
                style={{ fontWeight: 700 }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3
                className="text-white/75 mb-4"
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>

              <p
                className="text-white/32"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.85,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection({
  section,
}: {
  section: Extract<CaseStudySection, { type: "stats" }>;
}) {
  return (
    <section
      className="py-20 lg:py-24 border-b border-[#20231F]"
      style={{ background: "#141514" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="border border-[#20231F] rounded-2xl p-6 lg:p-8"
              style={{ background: "#0C0D0C" }}
            >
              <strong
                className="block text-[#B9F53E] mb-3"
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.7rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {item.value}
              </strong>

              <span
                className="text-white/35"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightSection({
  section,
  locale,
}: {
  section: Extract<CaseStudySection, { type: "highlight" }>;
  locale: Locale;
}) {
  return (
    <section
      className="py-24 lg:py-32 border-b border-[#20231F]"
      style={{ background: "#0C0D0C" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div
          className="rounded-[28px] border border-[#20231F] p-8 lg:p-12"
          style={{ background: "#141514" }}
        >
          <span
            className="text-[11px] tracking-[0.26em] uppercase text-[#B9F53E]/50 block mb-7"
            style={{ fontWeight: 700 }}
          >
            {locale === "en" ? "Highlight" : "Destaque"}
          </span>

          <h2
            className="text-white/85 mb-7"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            {section.title}
          </h2>

          <p
            className="text-white/42"
            style={{
              fontSize: "16px",
              lineHeight: 1.9,
            }}
          >
            {section.body}
          </p>
        </div>
      </div>
    </section>
  );
}

function getImageText(
  image: Extract<CaseStudySection, { type: "imageGrid" }>["images"][number],
  section: Extract<CaseStudySection, { type: "imageGrid" }>
) {
  return `${section.title ?? ""} ${image.alt} ${image.caption ?? ""}`.toLowerCase();
}

function isWideImage(
  image: Extract<CaseStudySection, { type: "imageGrid" }>["images"][number],
  section: Extract<CaseStudySection, { type: "imageGrid" }>
) {
  const text = getImageText(image, section);

  return (
    text.includes("dashboard") ||
    text.includes("web") ||
    text.includes("admin") ||
    text.includes("gestão") ||
    text.includes("gestao") ||
    text.includes("management") ||
    text.includes("painel") ||
    text.includes("simulation") ||
    text.includes("simulação") ||
    text.includes("simulacao") ||
    text.includes("platform") ||
    text.includes("plataforma")
  );
}

function shouldSpanFullRow(
  image: Extract<CaseStudySection, { type: "imageGrid" }>["images"][number],
  section: Extract<CaseStudySection, { type: "imageGrid" }>
) {
  const text = getImageText(image, section);

  return (
    text.includes("dashboard") ||
    text.includes("admin") ||
    text.includes("gestão") ||
    text.includes("gestao") ||
    text.includes("management") ||
    text.includes("painel")
  );
}

function ImageLightbox({
  image,
  onClose,
}: {
  image: ExpandedImage | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-md px-4 py-6 lg:px-10 lg:py-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 lg:right-8 lg:top-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/75 hover:bg-white/20 hover:text-white transition-colors duration-300"
        aria-label="Fechar imagem ampliada"
      >
        <X size={20} strokeWidth={1.8} />
      </button>

      <figure
        className="max-w-[min(96vw,1440px)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex max-h-[82vh] items-center justify-center">
          <ImageWithFallback
            src={image.src}
            alt={image.alt}
            className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl"
          />
        </div>

        {image.caption && (
          <figcaption
            className="mx-auto mt-5 max-w-[900px] text-center text-white/55"
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            {image.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

function ImageGridSection({
  section,
  locale,
  onOpenImage,
}: {
  section: Extract<CaseStudySection, { type: "imageGrid" }>;
  locale: Locale;
  onOpenImage: (image: ExpandedImage) => void;
}) {
  const expandLabel = locale === "en" ? "expand" : "ampliar";

  return (
    <section
      className="py-20 lg:py-28 border-b border-[#20231F]"
      style={{ background: "#0C0D0C" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {section.title && (
          <div className="max-w-[760px] mb-12 lg:mb-14">
            <SectionEyebrow>Interface</SectionEyebrow>
            <SectionTitle>{section.title}</SectionTitle>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {section.images.map((image, index) => {
            const isWide = isWideImage(image, section);
            const spanFullRow = shouldSpanFullRow(image, section);

            return (
              <figure
                key={index}
                className={[
                  "self-start overflow-hidden rounded-2xl border border-[#20231F]",
                  spanFullRow ? "md:col-span-2" : "",
                ].join(" ")}
                style={{ background: "#141514" }}
              >
                <button
                  type="button"
                  onClick={() => onOpenImage(image)}
                  className="group block w-full cursor-zoom-in text-left"
                  aria-label={`${expandLabel}: ${image.alt}`}
                >
                  {isWide ? (
                    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden p-3 lg:p-5">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-contain opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.01]"
                      />

                      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-white/55 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                        {expandLabel}
                      </span>
                    </div>
                  ) : (
                    <div className="relative flex h-[460px] items-center justify-center overflow-hidden p-4 sm:h-[520px] lg:h-[560px] lg:p-6">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-auto max-w-full object-contain opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.015]"
                      />

                      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-white/55 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                        {expandLabel}
                      </span>
                    </div>
                  )}
                </button>

                {image.caption && (
                  <figcaption
                    className="border-t border-[#20231F] px-5 py-4 text-white/32"
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LinksSection({
  section,
}: {
  section: Extract<CaseStudySection, { type: "links" }>;
}) {
  return (
    <section
      className="py-24 lg:py-32 border-b border-[#20231F]"
      style={{ background: "#0C0D0C" }}
    >
      <div className="max-w-[980px] mx-auto px-6 lg:px-10">
        <SectionEyebrow>Links</SectionEyebrow>
        <SectionTitle>{section.title}</SectionTitle>

        <div className="flex flex-col gap-4">
          {section.items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-[#20231F] px-6 py-5 hover:border-[#B9F53E]/40 transition-colors duration-300"
              style={{ background: "#141514" }}
            >
              <span
                className="text-white/65 group-hover:text-[#B9F53E] transition-colors duration-300"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="text-white/25 group-hover:text-[#B9F53E] transition-colors duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyBlock({
  section,
  locale,
  onOpenImage,
}: {
  section: CaseStudySection;
  locale: Locale;
  onOpenImage: (image: ExpandedImage) => void;
}) {
  switch (section.type) {
    case "text":
      return <TextSection section={section} />;

    case "quote":
      return <QuoteSection section={section} />;

    case "bullets":
      return <BulletsSection section={section} />;

    case "stats":
      return <StatsSection section={section} />;

    case "highlight":
      return <HighlightSection section={section} locale={locale} />;

    case "imageGrid":
      return (
        <ImageGridSection
          section={section}
          locale={locale}
          onOpenImage={onOpenImage}
        />
      );

    case "links":
      return <LinksSection section={section} />;

    default:
      return null;
  }
}

type CaseStudyProps = {
  locale?: Locale;
};

export function CaseStudy({ locale = "pt" }: CaseStudyProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [expandedImage, setExpandedImage] = useState<ExpandedImage | null>(null);

  const projects = getProjects(locale);
  const isEnglish = locale === "en";
  const casesPath = getLocalizedPath(locale, "cases");
  const contactPath = getLocalizedPath(locale, "contact");

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  const labels = {
    projectNotFound: isEnglish ? "Project not found" : "Projeto não encontrado",
    backToCases: isEnglish ? "All Projects" : "Todos os Cases",
    role: isEnglish ? "Role" : "Função",
    scope: isEnglish ? "Scope" : "Escopo",
    platform: isEnglish ? "Platform" : "Plataforma",
    year: isEnglish ? "Year" : "Ano",
    overview: isEnglish ? "Overview" : "Visão geral",
    context: isEnglish ? "Context" : "Contexto",
    problem: isEnglish ? "Problem" : "Problema",
    outcome: isEnglish ? "Outcome" : "Resultado",
    challenge: isEnglish ? "Challenge" : "Desafio",
    process: isEnglish ? "Process" : "Processo",
    approach: isEnglish ? "Approach" : "Abordagem",
    continueExploring: isEnglish ? "Continue exploring" : "Continue explorando",
    nextProject: isEnglish ? "Next project" : "Próximo projeto",
    nextProjectDescription: isEnglish
      ? "Explore another project to see how I approach different product challenges."
      : "Explore outro projeto para ver como eu abordo diferentes desafios de produto.",
    viewNextCase: isEnglish ? "View next case" : "Ver próximo case",
    contactEyebrow: isEnglish ? "Contact" : "Entre em contato",
    contactTitle: isEnglish ? "Let's talk" : "Vamos conversar",
    contactDescription: isEnglish
      ? "Open to opportunities, freelance projects and conversations about digital products that need clarity, structure and strong execution."
      : "Aberto a oportunidades, freelas e conversas sobre produtos digitais que precisem de clareza, estrutura e boa execução.",
    contactButton: isEnglish ? "Get in touch" : "Entrar em contato",
    linkedin: "LinkedIn",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, locale]);

  if (!project) {
    return (
      <section
        className="pt-44 pb-32 text-center"
        style={{ background: "#0C0D0C" }}
      >
        <h1
          className="text-white/80 mb-6"
          style={{ fontSize: "2rem", fontWeight: 700 }}
        >
          {labels.projectNotFound}
        </h1>

        <Link
          to={casesPath}
          className="text-[13px] tracking-[0.1em] uppercase text-white/40 hover:text-[#B9F53E] transition-colors"
        >
          {labels.backToCases}
        </Link>
      </section>
    );
  }

  const nextProject =
    projects[(projectIndex + 1) % projects.length] ?? projects[0];

  const caseStudy = project.caseStudy;

  const heroTitle = caseStudy?.headline ?? project.name;
  const heroIntro = caseStudy?.intro ?? project.subtitle;

  const heroMeta =
    caseStudy?.meta ?? [
      { label: labels.role, value: project.role },
      { label: labels.scope, value: project.scope },
      { label: labels.platform, value: project.platform },
      { label: labels.year, value: project.year },
    ];

  const scrollToContact = () => {
    navigate(contactPath);
  };

  return (
    <>
      <section className="pt-32 pb-0 lg:pt-40" style={{ background: "#0C0D0C" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <Link
            to={casesPath}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-white/30 hover:text-[#B9F53E] transition-colors duration-400 mb-14"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            {labels.backToCases}
          </Link>

          <div className="mb-16 lg:mb-20">
            {caseStudy?.heroLabel && (
              <span
                className="text-[11px] tracking-[0.28em] uppercase text-[#B9F53E]/55 block mb-7"
                style={{ fontWeight: 700 }}
              >
                {caseStudy.heroLabel}
              </span>
            )}

            <h1
              className="text-white mb-8 max-w-[1080px]"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 5.6rem)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-0.06em",
              }}
            >
              {project.name}
            </h1>

            <p
              className="text-white/55 max-w-[860px] mb-12"
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.55rem)",
                fontWeight: 500,
                lineHeight: 1.5,
                letterSpacing: "-0.02em",
              }}
            >
              {heroTitle}
            </p>

            <p
              className="text-white/38 max-w-[760px] mb-14"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.8,
              }}
            >
              {heroIntro}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-7 border-t border-b border-[#20231F] py-7">
              {heroMeta.map((meta) => (
                <div key={meta.label}>
                  <span
                    className="text-[10px] tracking-[0.22em] uppercase text-white/20 block mb-2"
                    style={{ fontWeight: 600 }}
                  >
                    {meta.label}
                  </span>

                  <span
                    className="text-white/55 text-[13px]"
                    style={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    {meta.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-[1440px] mx-auto overflow-hidden"
          style={{ background: "#141514" }}
        >
          <div className="aspect-[16/8] overflow-hidden">
            <ImageWithFallback
              src={project.coverImage}
              alt={project.name}
              className="w-full h-full object-cover opacity-85"
            />
          </div>
        </div>
      </section>

      {caseStudy?.sections?.length ? (
        caseStudy.sections.map((section, index) => (
          <CaseStudyBlock
            key={`${section.type}-${index}`}
            section={section}
            locale={locale}
            onOpenImage={setExpandedImage}
          />
        ))
      ) : (
        <>
          <section
            className="py-28 lg:py-36 border-b border-[#20231F]"
            style={{ background: "#0C0D0C" }}
          >
            <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
              <SectionEyebrow>{labels.overview}</SectionEyebrow>
              <SectionTitle>{labels.overview}</SectionTitle>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {[
                  { label: labels.context, text: project.overview.context },
                  { label: labels.problem, text: project.overview.problem },
                  { label: labels.role, text: project.overview.role },
                  { label: labels.outcome, text: project.overview.outcome },
                ].map((item) => (
                  <div key={item.label} className="border-t border-[#20231F] pt-7">
                    <span
                      className="text-[11px] tracking-[0.18em] uppercase text-white/20 block mb-4"
                      style={{ fontWeight: 600 }}
                    >
                      {item.label}
                    </span>

                    <p
                      className="text-white/40"
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        lineHeight: 1.85,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            className="py-28 lg:py-36 border-b border-[#20231F]"
            style={{ background: "#0C0D0C" }}
          >
            <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
              <div className="flex flex-col lg:flex-row gap-20 lg:gap-28">
                <div className="lg:w-[36%]">
                  <SectionEyebrow>{labels.challenge}</SectionEyebrow>
                  <SectionTitle>{labels.challenge}</SectionTitle>
                </div>

                <div className="lg:w-[64%]">
                  <p
                    className="text-white/40"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: 1.9,
                    }}
                  >
                    {project.challenge}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="py-28 lg:py-36 border-b border-[#20231F]"
            style={{ background: "#0C0D0C" }}
          >
            <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
              <div className="mb-20 lg:mb-24">
                <SectionEyebrow>{labels.approach}</SectionEyebrow>
                <SectionTitle>{labels.process}</SectionTitle>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                {project.process.map((step, index) => (
                  <div key={index} className="flex gap-7">
                    <span
                      className="text-[#20231F] shrink-0 mt-1"
                      style={{
                        fontSize: "32px",
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3
                        className="text-white/75 mb-4"
                        style={{
                          fontSize: "17px",
                          fontWeight: 700,
                          lineHeight: 1.3,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="text-white/30"
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: 1.85,
                        }}
                      >
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {nextProject && nextProject.slug !== project.slug && (
        <section className="py-24 lg:py-32" style={{ background: "#0C0D0C" }}>
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
            <span
              className="text-[11px] tracking-[0.25em] uppercase text-[#B9F53E]/50 block mb-6"
              style={{ fontWeight: 500 }}
            >
              {labels.continueExploring}
            </span>

            <h2
              className="text-white/80 mb-4"
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {labels.nextProject}
            </h2>

            <p
              className="text-white/30 mb-14 max-w-[480px]"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.8,
              }}
            >
              {labels.nextProjectDescription}
            </p>

            <Link
              to={`${casesPath}/${nextProject.slug}`}
              className="group flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
            >
              <div
                className="w-full lg:w-[55%] overflow-hidden rounded-lg"
                style={{ background: "#141514" }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={nextProject.image}
                    alt={nextProject.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              <div className="w-full lg:w-[45%]">
                <span
                  className="text-[11px] tracking-[0.2em] uppercase text-white/20 mb-3 block"
                  style={{ fontWeight: 500 }}
                >
                  {nextProject.platform}
                </span>

                <h3
                  className="text-white/80 group-hover:text-[#B9F53E] transition-colors duration-400 mb-2"
                  style={{
                    fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {nextProject.name}
                </h3>

                <span
                  className="text-white/30 mb-6 block"
                  style={{ fontSize: "14px", fontWeight: 400 }}
                >
                  {nextProject.subtitle}
                </span>

                <span
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-white/40 group-hover:text-[#B9F53E] transition-colors duration-300"
                  style={{ fontWeight: 500 }}
                >
                  {labels.viewNextCase}
                  <ArrowRight
                    size={13}
                    strokeWidth={1.5}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section
        className="py-28 lg:py-36 relative overflow-hidden"
        style={{ background: "#141514" }}
      >
        <div className="absolute top-[20%] right-[15%] w-[200px] h-[200px] rounded-full bg-[#B9F53E]/[0.02] blur-[80px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 text-center">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[#B9F53E]/50 block mb-8"
            style={{ fontWeight: 500 }}
          >
            {labels.contactEyebrow}
          </span>

          <h2
            className="text-white max-w-[500px] mx-auto mb-8"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            {labels.contactTitle}
          </h2>

          <p
            className="max-w-[520px] mx-auto text-white/35 mb-14"
            style={{
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            {labels.contactDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 bg-[#B9F53E] text-[#0C0D0C] px-8 py-4 rounded-lg text-[13px] tracking-[0.1em] uppercase hover:brightness-110 transition-all duration-300 cursor-pointer"
              style={{ fontWeight: 700 }}
            >
              {labels.contactButton}
              <ArrowRight
                size={14}
                strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase text-white/30 hover:text-[#B9F53E] transition-colors duration-300"
              style={{ fontWeight: 500 }}
            >
              <Linkedin size={14} strokeWidth={1.5} />
              {labels.linkedin}
            </a>
          </div>
        </div>
      </section>

      <ImageLightbox
        image={expandedImage}
        onClose={() => setExpandedImage(null)}
      />
    </>
  );
}