const principles = [
  {
    num: "01",
    title: "User-centered thinking",
    description:
      "I design around real user needs, behaviors and contexts, making decisions that improve understanding, flow and usability.",
  },
  {
    num: "02",
    title: "Systems and consistency",
    description:
      "I build interfaces with structure and coherence, creating scalable foundations that support product growth and team alignment.",
  },
  {
    num: "03",
    title: "Product-driven decisions",
    description:
      "I connect UX and UI choices to product goals, making sure the experience supports both user value and business direction.",
  },
  {
    num: "04",
    title: "Visual clarity",
    description:
      "I care deeply about hierarchy, rhythm and interface refinement, shaping experiences that feel intuitive, balanced and polished.",
  },
];

export function DesignApproach() {
  return (
    <section id="approach" className="py-32 lg:py-40 bg-white">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-12">
        {/* Section header */}
        <div className="max-w-[680px] mb-20 lg:mb-28">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[#bbb] block mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Philosophy
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
            My Design Approach
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
            I approach design as a balance between usability, product clarity
            and visual consistency. Every project is an opportunity to turn
            complexity into experiences that feel intuitive, purposeful and
            well-crafted.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 lg:gap-y-20">
          {principles.map((p) => (
            <div key={p.num} className="group">
              <div className="flex items-start gap-5">
                <span
                  className="text-[11px] tracking-[0.15em] text-[#ccc] mt-1 shrink-0"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {p.num}
                </span>
                <div>
                  <div className="w-8 h-[1px] bg-[#e0e0e0] mb-5 group-hover:w-12 group-hover:bg-[#999] transition-all duration-500" />
                  <h3
                    className="text-[#1a1a1a] mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
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
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
