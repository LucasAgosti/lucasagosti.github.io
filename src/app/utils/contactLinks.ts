import type { Locale } from "../data/i18n";

const whatsappNumber = "5585989712353";

export const contactLinks = {
  linkedin: "https://www.linkedin.com/in/lucasagosti/",
  email: "mailto:lucasfernandesux@gmail.com",

  whatsapp: (locale: Locale = "pt") => {
    const message =
      locale === "en"
        ? "Hi Lucas! I saw your portfolio and would like to talk about a design project or work opportunity."
        : "Olá, Lucas! Vi seu portfólio e gostaria de conversar sobre um projeto ou oportunidade de trabalho.";

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  },
};