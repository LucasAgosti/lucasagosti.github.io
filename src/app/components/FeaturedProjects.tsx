import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    slug: "auralize",
    name: "Auralize",
    subtitle: "Acoustic analysis ecosystem",
    meta: "Mobile app + desktop/web",
    description:
      "UX/UI design for technical workflows, measurement interfaces and simulation-oriented product structure.",
    image:
      "https://images.unsplash.com/photo-1511138743687-5c14e8cfcf47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGFuYWx5c2lzJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwxfHx8fDE3NzI5OTA1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    accent: "#f5f3f0",
  },
  {
    id: 2,
    slug: "smartdyn",
    name: "SmartDyn",
    subtitle: "Sports performance analytics platform",
    meta: "Tablet + web dashboard",
    description:
      "Designed to support data visualization, athlete monitoring and decision-making in high-complexity environments.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzI5OTA1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    accent: "#f0f3f5",
  },
  {
    id: 3,
    slug: "arvorar",
    name: "Arvorar",
    subtitle: "Visitor-centered mobile experience",
    meta: "Mobile app",
    description:
      "Focused on intuitive exploration, accessible content and a more engaging visitor journey.",
    image:
      "https://images.unsplash.com/photo-1763484592957-773be2064ee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBuYXR1cmUlMjBib3RhbmljYWwlMjBnYXJkZW4lMjB2aXNpdG9yfGVufDF8fHx8MTc3Mjk5MDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    accent: "#f2f5f0",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-32 lg:py-40"
      style={{ background: "#fafafa" }}
    >
      <div className="max-w-[1280px] mx-auto px-8 lg:px-12">
        {/* Section header */}
        <div className="max-w-[620px] mb-20 lg:mb-28">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[#bbb] block mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Work
          </span>
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Featured Projects
          </h2>
          <p
            className="text-[#888]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            A selection of projects across digital products, mobile apps and
            platform experiences—each one shaped by UX thinking, interface
            design and product structure.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div
                className="w-full lg:w-[58%] relative overflow-hidden cursor-pointer"
                style={{ background: project.accent }}
              >
                <Link to={`/projects/${project.slug}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                </Link>
              </div>

              {/* Info */}
              <div className="w-full lg:w-[42%] flex flex-col justify-center">
                <span
                  className="text-[11px] tracking-[0.2em] uppercase text-[#bbb] mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {project.meta}
                </span>
                <h3
                  className="text-[#1a1a1a] mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {project.name}
                </h3>
                <span
                  className="text-[#999] mb-6 block"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  {project.subtitle}
                </span>
                <p
                  className="text-[#888] mb-8"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group/btn flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#555] hover:text-[#1a1a1a] transition-colors duration-300 cursor-pointer self-start"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  View Case Study
                  <ArrowRight
                    size={13}
                    strokeWidth={1.5}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See all button */}
        <div className="flex justify-center mt-24 lg:mt-32">
          <Link
            to="/projects"
            className="flex items-center gap-3 text-[13px] tracking-[0.1em] uppercase text-[#555] border border-[#ddd] px-10 py-4 hover:border-[#999] hover:text-[#1a1a1a] transition-all duration-400"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            See All Projects
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}