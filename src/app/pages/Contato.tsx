import { useEffect } from "react";
import { motion } from "motion/react";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { dictionaries, type Locale } from "../data/i18n";
import { contactLinks } from "../utils/contactLinks";
import { WhatsAppIcon } from "../components/ui/whatsAppIcon";

type ContatoProps = {
  locale?: Locale;
};

export function Contato({ locale = "pt" }: ContatoProps) {
  const copy = dictionaries[locale].site.contact;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locale]);

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "#0C0D0C" }}
    >
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #B9F53E 0%, transparent 60%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="text-white/[0.02] select-none"
          style={{
            fontSize: "clamp(8rem, 24vw, 20rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          LUCAS
        </motion.div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 w-full py-32 lg:py-40 relative z-10">
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
            className="text-white mb-16 max-w-[1100px]"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.045em",
            }}
          >
            <span className="block">{copy.titleLine1}</span>
            <span className="block text-[#B9F53E]">{copy.titleLine2}</span>
          </h1>

          <div className="max-w-[760px]">
            <motion.p
              className="text-white/50 mb-10"
              style={{
                fontSize: "19px",
                fontWeight: 400,
                lineHeight: 1.75,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.paragraph1}
            </motion.p>

            <motion.p
              className="text-white/30 mb-20"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.8,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {copy.paragraph2}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-white/5 border border-[#20231F] rounded-xl px-7 py-4 text-[13px] tracking-[0.08em] uppercase text-white/60 hover:bg-[#B9F53E] hover:border-[#B9F53E] hover:text-[#0C0D0C] hover:scale-105 transition-all duration-400"
              style={{ fontWeight: 700 }}
            >
              <Linkedin size={16} strokeWidth={2} />
              {copy.linkedin}
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-400"
              />
            </a>

            <a
              href={contactLinks.email}
              className="group inline-flex items-center gap-2.5 bg-[#B9F53E] border border-[#B9F53E] rounded-xl px-7 py-4 text-[13px] tracking-[0.08em] uppercase text-[#0C0D0C] hover:brightness-110 hover:scale-105 hover:gap-3 transition-all duration-400"
              style={{ fontWeight: 800 }}
            >
              <Mail size={16} strokeWidth={2} />
              {copy.email}
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>

            <a
              href={contactLinks.whatsapp(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-white/5 border border-[#20231F] rounded-xl px-7 py-4 text-[13px] tracking-[0.08em] uppercase text-white/60 hover:bg-[#B9F53E] hover:border-[#B9F53E] hover:text-[#0C0D0C] hover:scale-105 transition-all duration-400"
              style={{ fontWeight: 700 }}
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-400"
              />
            </a>
          </motion.div>

          <motion.p
            className="text-[#B9F53E]/80"
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {copy.closing}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}