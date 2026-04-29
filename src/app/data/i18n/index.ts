import type { Locale } from "./types";

import {
  auralizeProjectPt,
  arvorarProjectPt,
  asavacProjectPt,
} from "./pt/projects";

import {
  auralizeProjectEn,
  arvorarProjectEn,
  asavacProjectEn,
} from "./en/projects";

import { sitePt } from "./pt/site";
import { siteEn } from "./en/site";

export const dictionaries = {
  pt: {
    site: sitePt,
    projects: [auralizeProjectPt, arvorarProjectPt, asavacProjectPt],
  },
  en: {
    site: siteEn,
    projects: [auralizeProjectEn, arvorarProjectEn, asavacProjectEn],
  },
};

export type { Locale };