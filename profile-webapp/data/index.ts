export interface Project {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  imageUrl?: string;
  tech: string[];
  links: { label: string; href: string }[];
}

export interface Repo {
  name: string;
  description: string;
  language: string;
  stars?: number;
  href: string;
}

export const profile = {
  name: "Yuto Asai",
  role: "Assistant Professor, Aoyama Gakuin University",
  bio: "Systems and Control Engineer focused on nonlinear fuzzy systems, Lyapunov stability, and impactful research-to-practice work in robotics and aerospace applications.",
  highlights: [
    "Specializes in Takagi–Sugeno fuzzy modeling, robust output feedback control, and observer-based designs.",
    "Doctoral research dedicated to relaxing restrictive LMIs for wider applicability in uncertain nonlinear systems.",
    "Multiple awards: IEEE CIS Japan Young Researcher Award, SICE Outstanding Student Award, institutional excellence honors.",
  ],
  socials: {
    github: "https://github.com/Yuto-San",
    linkedin: "https://www.linkedin.com/in/yuto-asai/",
    email: "mailto:yuto.asai@yamagaku.ac.jp",
  },
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Cloudflare Workers Portfolio",
    description: "Next.js App Router static export served via Cloudflare Workers; highlights portfolio narrative, research themes, and technical stories with bold UI.",
    imageAlt: "Simplified hero UI",
    tech: ["Next.js", "React", "Tailwind CSS", "Workers"],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Read Story", href: "#" },
    ],
  },
  {
    id: "project-2",
    title: "Fuzzy Control Research",
    description: "Doctoral work on Takagi–Sugeno fuzzy control with guaranteed cost + H∞ hybrid design to expand disturbance rejection capabilities.",
    imageAlt: "Fuzzy control diagram",
    tech: ["Fuzzy Logic", "H∞ Control", "Lyapunov Stability"],
    links: [
      { label: "Paper", href: "#" },
      { label: "Appendix", href: "#" },
    ],
  },
  {
    id: "project-3",
    title: "Observer-Based Output Feedback",
    description: "Framework for constructing observers to estimate states when measurements are limited, ensuring stability via Lyapunov proofs.",
    imageAlt: "Observer schematic",
    tech: ["Observers", "Nonlinear Control", "Lyapunov"],
    links: [
      { label: "Detail", href: "#" },
      { label: "Simulations", href: "#" },
    ],
  },
];

export const repos: Repo[] = [
  {
    name: "Yuto-San-profile",
    description: "This very portfolio site showcasing research, projects, and publications.",
    language: "TypeScript",
    stars: 7,
    href: "https://github.com/Yuto-San/Yuto-San-profile",
  },
  {
    name: "fuzzy-control-system",
    description: "Toolbox that demonstrates Takagi–Sugeno modeling and simulations for nonlinear systems.",
    language: "MATLAB",
    stars: 3,
    href: "https://github.com/Yuto-San/fuzzy-control-system",
  },
  {
    name: "neural-network-playground",
    description: "Collection of Python experiments exploring neural nets for control-inspired tasks.",
    language: "Python",
    stars: 4,
    href: "https://github.com/Yuto-San/neural-network-playground",
  },
];
