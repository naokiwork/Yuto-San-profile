"use client";

import { profile, projects, repos } from '../../data';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import RepositoryItem from './components/RepositoryItem';
import SectionHeading from './components/SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import AcademicIDList from './components/AcademicIDList';

const ResearchFeatureCard: React.FC<{ title: string; description: string; keywords: string[] }> = ({ title, description, keywords }) => (
  <div className="bg-panel p-6 rounded-[var(--radius)] shadow-md border border-border flex flex-col items-center text-center">
    <FaGraduationCap className="text-accent text-4xl mb-4" />
    <h3 className="text-xl font-semibold text-text0 mb-2 tracking-tight">{title}</h3>
    <p className="text-text1 text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap justify-center gap-2 mt-auto">
      {keywords.map(keyword => (
        <span key={keyword} className="bg-bg1 text-text1 text-xs px-3 py-1 rounded-full border border-border">
          {keyword}
        </span>
      ))}
    </div>
  </div>
);

export default function Home() {
  const [loadingRepos, setLoadingRepos] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingRepos(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const researchFeatures = [
    {
      title: "Nonlinear Systems via T–S Fuzzy Modeling",
      description: "Approaches to model complex nonlinear systems using Takagi–Sugeno fuzzy rules, enabling linear control design methods.",
      keywords: ["Fuzzy Logic", "Nonlinear Control", "Modeling"],
    },
    {
      title: "Output Feedback Control",
      description: "Designs robust control strategies using only output measurements, crucial for systems where full state information is unavailable.",
      keywords: ["Observers", "State Estimation", "LMI"],
    },
    {
      title: "Robust Control / H∞ / Guaranteed Cost",
      description: "Ensuring system stability and performance despite uncertainties and external disturbances, utilizing advanced H∞ and guaranteed cost techniques.",
      keywords: ["Uncertainty", "Disturbance Rejection", "Optimization"],
    },
  ];

  return (
    <div className="space-y-section-mobile md:space-y-section-desktop">
      {/* Hero Section */}
      <section id="overview" className="text-center py-16 md:py-24 bg-bg1 rounded-[var(--radius)] shadow-md border border-border">
        <h1 className="text-hero-clamp font-extrabold text-text0 mb-4 tracking-tight leading-tight">{profile.name}</h1>
        <p className="text-2xl md:text-3xl text-text1 mb-6 tracking-tight">{profile.role}</p>
        <p className="text-lg text-text1 max-w-3xl mx-auto leading-relaxed mb-10">{profile.bio}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="#projects" variant="primary" size="lg">
            View Projects
          </Button>
          <Button href="#contact" variant="link" size="lg">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Research Focus Section */}
      <section id="research" className="bg-panel rounded-[var(--radius)] shadow-md border border-border p-section-mobile md:p-section-desktop space-y-8">
        <SectionHeading title="Research Focus" subtitle="Key themes from my work across academia and practice." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchFeatures.map((feature, index) => (
            <ResearchFeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-panel rounded-[var(--radius)] shadow-md border border-border p-section-mobile md:p-section-desktop space-y-8">
        <SectionHeading title="Featured Projects" subtitle="Highlighted works showcasing my skills and expertise." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="bg-panel rounded-[var(--radius)] shadow-md border border-border p-section-mobile md:p-section-desktop space-y-8">
        <SectionHeading title="Publications" subtitle="My academic publications." />
        <p className="text-text1 text-center text-lg">Publications will appear here soon.</p>
      </section>

      {/* GitHub Repositories Section */}
      <section id="repositories" className="bg-panel rounded-[var(--radius)] shadow-md border border-border p-section-mobile md:p-section-desktop space-y-8">
        <SectionHeading title="GitHub Repositories" subtitle="A selection of my public repositories." />
        <div className="space-y-4">
          {loadingRepos ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-bg1 p-4 rounded-[var(--radius)] animate-pulse h-24 border border-border"></div>
            ))
          ) : repos.length > 0 ? (
            repos.map((repo) => (
              <RepositoryItem key={repo.name} repo={repo} />
            ))
          ) : (
            <p className="text-text1 text-center text-lg">Repositories will appear here.</p>
          )}
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="bg-bg1 rounded-[var(--radius)] shadow-md border border-border p-section-mobile md:p-section-desktop text-center space-y-8">
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
      <section className="p-section-mobile md:p-section-desktop">
        <AcademicIDList socials={profile.socials} />
      </section>

    </div>
  );
}
