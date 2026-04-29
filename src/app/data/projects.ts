import { dictionaries, type Locale } from "./i18n";
import type { ProjectData } from "./i18n/types";

export type { ProjectData };

export const getProjects = (locale: Locale = "pt"): ProjectData[] => {
  return dictionaries[locale].projects;
};

export const getProjectBySlug = (slug: string, locale: Locale = "pt") => {
  return getProjects(locale).find((project) => project.slug === slug);
};

export const getFeaturedProjects = (locale: Locale = "pt") => {
  return getProjects(locale).filter((project) => project.featured);
};

// Compatibilidade temporária com páginas antigas
export const allProjects: ProjectData[] = getProjects("pt");