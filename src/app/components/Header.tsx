import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import {
  getLocaleFromPath,
  getLocalizedPath,
  switchLocalePath,
} from "../utils/localePaths";

export function Header() {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const isEnglish = locale === "en";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ptPath = switchLocalePath(location.pathname, "pt");
  const enPath = switchLocalePath(location.pathname, "en");

  const navItems = [
    {
      label: isEnglish ? "HOME" : "INÍCIO",
      to: getLocalizedPath(locale, "home"),
      end: true,
    },
    {
      label: "BIO",
      to: getLocalizedPath(locale, "about"),
      end: false,
    },
    {
      label: "CASES",
      to: getLocalizedPath(locale, "cases"),
      end: false,
    },
    {
      label: isEnglish ? "CONTACT" : "FALA COMIGO",
      to: getLocalizedPath(locale, "contact"),
      end: false,
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[1000] border-b border-[#20231F]/80 backdrop-blur-xl"
        style={{ background: "rgba(12, 13, 12, 0.92)" }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between gap-8">
          <Link
            to={getLocalizedPath(locale, "home")}
            className="text-white/80 hover:text-[#B9F53E] transition-colors duration-300 shrink-0"
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.18em",
            }}
          >
            LUCAS FERNANDES
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "relative text-[11px] tracking-[0.22em] uppercase transition-colors duration-300",
                    isActive
                      ? "text-[#B9F53E]"
                      : "text-white/35 hover:text-white/70",
                  ].join(" ")
                }
                style={{ fontWeight: 800 }}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-2 h-px bg-[#B9F53E]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop language switch */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to={ptPath}
              className={[
                "text-[18px] lg:text-[20px] tracking-[0.08em] uppercase transition-colors duration-300",
                !isEnglish
                  ? "text-[#B9F53E]"
                  : "text-white/25 hover:text-white/55",
              ].join(" ")}
              style={{ fontWeight: 900 }}
              aria-current={!isEnglish ? "page" : undefined}
            >
              PT/BR
            </Link>

            <span className="text-white/15 text-[18px]">|</span>

            <Link
              to={enPath}
              className={[
                "text-[18px] lg:text-[20px] tracking-[0.08em] uppercase transition-colors duration-300",
                isEnglish
                  ? "text-[#B9F53E]"
                  : "text-white/25 hover:text-white/55",
              ].join(" ")}
              style={{ fontWeight: 900 }}
              aria-current={isEnglish ? "page" : undefined}
            >
              EN/US
            </Link>
          </div>

          {/* Mobile animated menu button */}
          <button
            type="button"
            className="md:hidden relative flex h-11 w-11 items-center justify-center text-white/75 hover:text-[#B9F53E] transition-colors duration-300"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <Menu
              size={29}
              strokeWidth={1.7}
              className={[
                "absolute transition-all duration-300 ease-out",
                isMenuOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100",
              ].join(" ")}
            />

            <X
              size={29}
              strokeWidth={1.6}
              className={[
                "absolute transition-all duration-300 ease-out",
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={[
          "md:hidden fixed inset-0 z-[999] overflow-y-auto transition-all duration-300 ease-out",
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2",
        ].join(" ")}
        style={{ background: "rgba(12, 13, 12, 0.98)" }}
      >
        <div className="min-h-screen pt-[72px] flex flex-col">
          <div className="flex-1 px-6 pt-12 pb-12 flex flex-col justify-between">
            <div>
              <nav className="flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "text-[13px] tracking-[0.22em] uppercase transition-all duration-300",
                        isActive
                          ? "text-[#B9F53E]"
                          : "text-white/45 hover:text-white/80",
                        isMenuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2",
                      ].join(" ")
                    }
                    style={{
                      fontWeight: 850,
                      transitionDelay: isMenuOpen ? `${index * 45}ms` : "0ms",
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div
                className={[
                  "mt-10 pt-8 border-t border-[#20231F] flex items-center gap-4 transition-all duration-300 ease-out",
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: isMenuOpen ? "180ms" : "0ms" }}
              >
                <Link
                  to={ptPath}
                  onClick={() => setIsMenuOpen(false)}
                  className={[
                    "text-[16px] tracking-[0.08em] uppercase transition-colors duration-300",
                    !isEnglish
                      ? "text-[#B9F53E]"
                      : "text-white/25 hover:text-white/55",
                  ].join(" ")}
                  style={{ fontWeight: 900 }}
                  aria-current={!isEnglish ? "page" : undefined}
                >
                  PT/BR
                </Link>

                <span className="text-white/15 text-[16px]">|</span>

                <Link
                  to={enPath}
                  onClick={() => setIsMenuOpen(false)}
                  className={[
                    "text-[16px] tracking-[0.08em] uppercase transition-colors duration-300",
                    isEnglish
                      ? "text-[#B9F53E]"
                      : "text-white/25 hover:text-white/55",
                  ].join(" ")}
                  style={{ fontWeight: 900 }}
                  aria-current={isEnglish ? "page" : undefined}
                >
                  EN/US
                </Link>
              </div>
            </div>

            <div
              className={[
                "mt-16 transition-all duration-300 ease-out",
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2",
              ].join(" ")}
              style={{ transitionDelay: isMenuOpen ? "240ms" : "0ms" }}
            >
              <p
                className="max-w-[320px] text-white/28"
                style={{
                  fontSize: "15px",
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                {isEnglish
                  ? "Product Designer creating digital products with structure, clarity and consistency."
                  : "Product Designer criando produtos digitais com estrutura, clareza e consistência."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}