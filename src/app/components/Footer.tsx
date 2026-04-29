import { Linkedin, Mail, Github } from "lucide-react";
import { useLocation } from "react-router";
import { dictionaries } from "../data/i18n";
import { getLocaleFromPath } from "../utils/localePaths";

export function Footer() {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const copy = dictionaries[locale].site.footer;

  return (
    <footer
      className="py-16 border-t border-[#20231F]"
      style={{ background: "#0C0D0C" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <span
              className="tracking-[0.14em] text-[11px] text-white/70 uppercase block mb-2"
              style={{ fontWeight: 700 }}
            >
              Lucas Fernandes
            </span>
            <span className="text-[11px] text-white/25" style={{ fontWeight: 400 }}>
              {copy.role}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-[#B9F53E] transition-colors duration-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@lucasfernandes.design"
              className="text-white/25 hover:text-[#B9F53E] transition-colors duration-400"
              aria-label="Email"
            >
              <Mail size={17} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-[#B9F53E] transition-colors duration-400"
              aria-label="GitHub"
            >
              <Github size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <p
          className="text-[10px] text-white/12 tracking-[0.04em]"
          style={{ fontWeight: 400 }}
        >
          &copy; {new Date().getFullYear()} Lucas Fernandes. {copy.rights}
        </p>
      </div>
    </footer>
  );
}