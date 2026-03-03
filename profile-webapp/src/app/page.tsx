"use client";

import { profile, projects, repos } from '../../data';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import RepositoryItem from './components/RepositoryItem';
import SectionHeading from './components/SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaAward, FaBookOpen } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import AcademicIDList from './components/AcademicIDList';
import Reveal from './components/Reveal';
import React from 'react';

const ResearchFocusCard: React.FC<{ title: string; claim: string; keywords: string[]; linkHref: string }> = ({ title, claim, keywords, linkHref }) => (
  <Reveal>
    <div className="bg-card border border-border rounded-md shadow-sm p-6 space-y-4 flex flex-col h-full transition-transform hover:translate-y-[-2px]">
      <FaGraduationCap className="text-accent text-5xl mb-4" />
      <h3 className="text-h3 font-bold text-foreground tracking-tight">{title}</h3>
      <p className="text-small text-muted leading-relaxed flex-grow">{claim}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {keywords.map(keyword => (
          <span key={keyword} className="bg-background text-muted-2 text-micro px-3 py-1 rounded-full border border-border">
            {keyword}
          </span>
        ))}
      </div>
      <Button href={linkHref} variant="link" size="sm" className="mt-4 self-start">
        Read More
      </Button>
    </div>
  </Reveal>
);

interface PublicationData {
  id: string;
  title: string;
  venue: string;
  year: number;
  links: { label: string; href: string }[];
  tags: string[];
}

const publicationsData: PublicationData[] = [
  {
    id: 'pub1',
    title: 'Advanced Fuzzy Control for Networked Systems',
    venue: 'IEEE Transactions on Automatic Control',
    year: 2025,
    links: [{ label: 'Paper', href: '#' }],
    tags: ['Fuzzy Control', 'Networked Systems'],
  },
  {
    id: 'pub2',
    title: 'Robust Output Feedback Control Design',
    venue: 'Automatica',
    year: 2024,
    links: [{ label: 'Paper', href: '#' }],
    tags: ['Robust Control', 'Output Feedback'],
  },
  {
    id: 'pub3',
    title: 'LMI-based Observer Synthesis',
    venue: 'International Journal of Control',
    year: 2023,
    links: [{ label: 'Paper', href: '#' }],
    tags: ['LMI', 'Observers'],
  },
];

interface ProjectFilterProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
  tags: string[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ currentFilter, setFilter, tags }) => {
  const filters = ['All', ...Array.from(new Set(tags))];
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-4 py-2 rounded-full text-small font-medium transition-colors border
            ${currentFilter === filter ? 'bg-accent text-card border-accent' : 'bg-background text-muted-2 border-border hover:bg-muted/10'}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default function Home() {
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [projectFilter, setProjectFilter] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingRepos(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const researchFocuses = [
    {
      title: "Nonlinear Systems via T–S Fuzzy Modeling",
      claim: "Novel approaches to model complex nonlinear systems using Takagi–Sugeno fuzzy rules, enabling advanced linear control design methods.",
      keywords: ["Fuzzy Logic", "Nonlinear Control", "Modeling"],
      linkHref: "#research-ts-fuzzy",
    },
    {
      title: "Robust Output Feedback Control",
      claim: "Designing robust control strategies using only output measurements, crucial for systems where full state information is unavailable or costly to acquire.",
      keywords: ["Observers", "State Estimation", "LMI"],
      linkHref: "#research-output-feedback",
    },
    {
      title: "Guaranteed Cost & H∞ Control",
      claim: "Ensuring system stability and performance despite uncertainties and external disturbances, utilizing advanced guaranteed cost and H∞ techniques.",
      keywords: ["Uncertainty", "Disturbance Rejection", "Optimization"],
      linkHref: "#research-robust-control",
    },
  ];

  const allProjectTags = projects.flatMap(p => p.tech);

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(project => project.tech.includes(projectFilter));

  return (
    <div className="space-y-section-mobile md:space-y-section-desktop">
      {/* Hero Section */}
      <section id="overview" className="relative bg-background rounded-lg shadow-sm border border-border p-section-mobile md:p-section-desktop overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <div className="md:w-3/5 text-center md:text-left space-y-4">
          <Reveal>
            <span className="inline-block bg-muted/10 text-muted-2 text-micro px-4 py-1 rounded-full border border-border mb-4">
              Systems & Control / Robotics / Aerospace
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-display font-extrabold text-foreground tracking-tight leading-tight">Control theory <span className="text-accent">→</span> real systems.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-h3 text-muted leading-normal max-w-prose">Bridging advanced theoretical concepts with practical, impactful engineering solutions for complex dynamic systems.</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
              <Button href="#projects" variant="primary" size="lg">
                View Projects
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Contact Me
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={400} className="md:w-2/5 flex justify-center items-center h-full">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent/20 to-link/20 rounded-md flex items-center justify-center shadow-md border border-border text-5xl font-bold text-foreground/20">
            Y.A.
          </div>
        </Reveal>
      </section>

      {/* Trust Strip */}
      <Reveal>
        <div className="bg-card border border-border rounded-md shadow-sm p-8 text-center flex flex-wrap justify-center gap-8 md:gap-16 mt-section-mobile md:mt-section-desktop">
          <div className="text-center">
            <p className="text-h2 font-bold text-foreground">15+</p>
            <p className="text-small text-muted">Awards & Honors</p>
          </div>
          <div className="text-center">
            <p className="text-h2 font-bold text-foreground">30+</p>
            <p className="text-small text-muted">Research Papers</p>
          </div>
          <div className="text-center">
            <p className="text-h2 font-bold text-foreground">5+</p>
            <p className="text-small text-muted">Open-Source Repos</p>
          </div>
        </div>
      </Reveal>

      {/* Research Focus Section */}
      <section id="research" className="bg-background rounded-lg shadow-sm border border-border p-section-mobile md:p-section-desktop space-y-8">
        <SectionHeading title="Research Focus" subtitle="Key themes from my work across academia and industry." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchFocuses.map((focus, index) => (
            <ResearchFocusCard key={index} {...focus} />
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="bg-background rounded-lg shadow-sm border border-border p-section-mobile md:p-section-desktop space-y-8">
        <SectionHeading title="Publications" subtitle="My academic contributions, categorized by year and type." />
        <div className="space-y-6">
          {publicationsData.length > 0 ? (
            publicationsData.sort((a, b) => b.year - a.year).map(pub => (
              <Reveal key={pub.id} delay={100}>
                <div className="bg-card border border-border rounded-md p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-grow space-y-1">
                    <h3 className="text-h3 font-semibold text-foreground tracking-tight">{pub.title}</h3>
                    <p className="text-small text-muted">{pub.venue} ({pub.year})</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pub.tags.map(tag => (
                        <span key={tag} className="bg-background text-muted-2 text-micro px-2 py-0.5 rounded-full border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 md:ml-4">
                    {pub.links.map(link => (
                      <Button key={link.label} href={link.href} variant="secondary" size="sm">
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))
          ) : (
            <p className="text-muted text-center text-body">Publications will appear here soon.</p>
          )}
        </div>
      </section>

      {/* Project Gallery Section */}
      <section id="projects" className="bg-background rounded-lg shadow-sm border border-border p-section-mobile md:p-section-desktop space-y-8">
        <SectionHeading title="Project Gallery" subtitle="Highlighted works showcasing my skills and expertise in control systems and web development." />
        <ProjectFilter currentFilter={projectFilter} setFilter={setProjectFilter} tags={allProjectTags} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 100} />
          ))}
        </div>
      </section>

      {/* Open-Source Contributions Section */}
      <section id="code" className="bg-background rounded-lg shadow-sm border border-border p-section-mobile md:p-section-desktop space-y-8">
        <SectionHeading title="Open-Source Contributions" subtitle="A selection of my public repositories and code projects." />
        <div className="space-y-4">
          {loadingRepos ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-bg1 p-4 rounded-md animate-pulse h-24 border border-border"></div>
            ))
          ) : repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.map((repo, index) => (
                <RepositoryItem key={repo.name} repo={repo} delay={index * 100} />
              ))}
            </div>
          ) : (
            <p className="text-muted text-center text-body">Open-source repositories will appear here.</p>
          )}
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="bg-background rounded-lg shadow-sm border border-border p-section-mobile md:p-section-desktop text-center space-y-8">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to collaborate? Feel free to reach out." />
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={profile.socials.email}
            className="flex items-center text-link hover:underline text-lg"
            aria-label="Email Me"
          >
            <FaEnvelope className="mr-2 text-2xl" /> {profile.socials.email.replace("mailto:", "")}
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-link hover:underline text-lg"
            aria-label="GitHub Profile"
          >
            <FaGithub className="mr-2 text-2xl" /> GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-link hover:underline text-lg"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="mr-2 text-2xl" /> LinkedIn
          </a>
        </div>
      </section>

      {/* Academic ID List */}
      <section id="academic-profiles" className="bg-background rounded-lg shadow-sm border border-border p-section-mobile md:p-section-desktop space-y-8">
        <AcademicIDList socials={profile.socials} />
      </section>
    </div>
  );
}
