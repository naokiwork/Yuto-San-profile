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

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Cloudflare Workers Next.js Portfolio",
    description: "A personal portfolio website built with Next.js (App Router) static export and deployed on Cloudflare Workers Builds. Demonstrates responsive design, accessibility, and smooth interactions.",
    imageAlt: "Portfolio website screenshot",
    imageUrl: "", // Placeholder
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare Workers"],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Code", href: "https://github.com/Yuto-San/Yuto-San-profile" },
    ],
  },
  {
    id: "project-2",
    title: "Fuzzy Control System Design",
    description: "Doctoral research focusing on advanced control design methodologies for Takagi–Sugeno (T–S) fuzzy systems, enhancing stability and performance under real-world constraints.",
    imageAlt: "Fuzzy control system diagram",
    imageUrl: "", // Placeholder
    tech: ["Control Theory", "Fuzzy Logic", "Lyapunov Stability", "LMI"],
    links: [
      { label: "Read More", href: "#" },
      { label: "Research Paper", href: "#" },
    ],
  },
  // Add more projects here
];

export const repos: Repo[] = [
  {
    name: "Yuto-San-profile",
    description: "My personal portfolio website built with Next.js and Cloudflare Workers.",
    language: "TypeScript",
    stars: 5,
    href: "https://github.com/Yuto-San/Yuto-San-profile",
  },
  {
    name: "fuzzy-control-system",
    description: "Implementation and simulation of Takagi–Sugeno fuzzy control systems.",
    language: "MATLAB",
    stars: 3,
    href: "https://github.com/Yuto-San/fuzzy-control-system",
  },
  {
    name: "neural-network-playground",
    description: "A simple playground for experimenting with neural networks in Python.",
    language: "Python",
    stars: 4,
    href: "https://github.com/Yuto-San/neural-network-playground",
  },
  // Add more repositories here
];

export const profile = {
  name: "Yuto Asai",
  role: "Assistant Professor, Aoyama Gakuin University",
  bio: "Specializing in Systems and Control Engineering, with a focus on Fuzzy Control Systems, Nonlinear System Control, and Robust Control. Passionate about building impactful solutions and sharing knowledge.",
  socialLinks: {
    github: "https://github.com/Yuto-San",
    linkedin: "#",
    email: "mailto:your.email@example.com",
  },
};
