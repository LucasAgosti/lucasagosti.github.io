export type Locale = "pt" | "en";

export type CaseStudySection =
  | {
      type: "text";
      eyebrow?: string;
      title: string;
      body: string[];
    }
  | {
      type: "highlight";
      title: string;
      body: string;
    }
  | {
      type: "quote";
      quote: string;
      author?: string;
    }
  | {
      type: "bullets";
      eyebrow?: string;
      title: string;
      items: {
        title: string;
        text: string;
      }[];
    }
  | {
      type: "stats";
      items: {
        value: string;
        label: string;
      }[];
    }
  | {
      type: "imageGrid";
      title?: string;
      images: {
        src: string;
        alt: string;
        caption?: string;
      }[];
    }
  | {
      type: "links";
      title: string;
      items: {
        label: string;
        url: string;
      }[];
    };

export interface ProjectData {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  platform: string;
  description: string;
  image: string;
  accent: string;
  featured: boolean;
  role: string;
  scope: string;
  year: string;
  coverImage: string;

  overview: {
    context: string;
    problem: string;
    role: string;
    outcome: string;
  };

  challenge: string;
  goals: string;
  process: { title: string; text: string }[];
  solution: string;
  solutionImages: string[];
  decisions: { title: string; text: string }[];
  results: string;
  resultsSecondary: string;
  learnings: string;

  caseStudy?: {
    heroLabel?: string;
    headline: string;
    intro: string;
    meta: {
      label: string;
      value: string;
    }[];
    sections: CaseStudySection[];
  };
}