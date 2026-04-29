const highlights = [
  {
    title: "UX & UI for real products",
    description:
      "Designing with attention to user flow, interaction logic and visual execution.",
  },
  {
    title: "Mobile and desktop experiences",
    description:
      "Creating interfaces that adapt to different contexts, platforms and levels of complexity.",
  },
  {
    title: "Systems-oriented mindset",
    description:
      "Bringing consistency, scalability and structure to growing products.",
  },
];

export function ProfessionalSnapshot() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-[700px] mb-20">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[#bbb] block mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Expertise
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
            What I bring to product design
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
            My work combines UX reasoning, UI refinement and structured product
            thinking. I'm especially interested in designing digital experiences
            that translate complexity into clarity—whether through workflows,
            dashboards, onboarding, content organization or interface systems.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`py-8 lg:py-0 lg:px-10 ${
                i > 0
                  ? "border-t md:border-t-0 md:border-l border-[#eee]"
                  : ""
              } ${i === 0 ? "lg:pl-0" : ""} ${
                i === highlights.length - 1 ? "lg:pr-0" : ""
              }`}
            >
              <h3
                className="text-[#1a1a1a] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {h.title}
              </h3>
              <p
                className="text-[#999]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
