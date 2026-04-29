import type { Locale } from "../data/i18n";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function getLocalizedPath(
  locale: Locale,
  path: "home" | "about" | "cases" | "contact"
) {
  const paths = {
    pt: {
      home: "/",
      about: "/sobre",
      cases: "/cases",
      contact: "/contato",
    },
    en: {
      home: "/en",
      about: "/en/about",
      cases: "/en/cases",
      contact: "/en/contact",
    },
  };

  return paths[locale][path];
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  const ptToEn: Record<string, string> = {
    "/": "/en",
    "/sobre": "/en/about",
    "/contato": "/en/contact",
    "/cases": "/en/cases",
  };

  const enToPt: Record<string, string> = {
    "/en": "/",
    "/en/about": "/sobre",
    "/en/contact": "/contato",
    "/en/cases": "/cases",
  };

  if (targetLocale === "en") {
    if (ptToEn[pathname]) return ptToEn[pathname];

    if (pathname.startsWith("/cases/")) {
      return `/en${pathname}`;
    }

    if (pathname === "/en" || pathname.startsWith("/en/")) {
      return pathname;
    }

    return `/en${pathname}`;
  }

  if (enToPt[pathname]) return enToPt[pathname];

  if (pathname.startsWith("/en/cases/")) {
    return pathname.replace(/^\/en/, "");
  }

  if (pathname === "/en") return "/";

  if (pathname.startsWith("/en/")) {
    const ptPath = pathname.replace(/^\/en/, "");
    return ptPath === "" ? "/" : ptPath;
  }

  return pathname;
}