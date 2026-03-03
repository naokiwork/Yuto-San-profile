"use client";

import { profile, projects, repos } from '../../data';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import RepositoryItem from './components/RepositoryItem';
import SectionHeading from './components/SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loadingRepos, setLoadingRepos] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingRepos(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-24 pt-20">
      {/* Hero Section */}
      <section className="relative text-center py-20 px-4 sm:px-8 bg-gradient-to-br from-dark-900 to-dark-700 rounded-3xl shadow-3xl overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold text-light mb-4 leading-tight">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-accent mb-6 font-semibold">
          {profile.role}
        </p>
        <p className="text-lg text-light-400 max-w-3xl mx-auto mb-10">
          {profile.bio}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button href="#projects" size="lg" variant="primary">
            View Projects
          </Button>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary transition-colors duration-200 text-3xl"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary transition-colors duration-200 text-3xl"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href={profile.socials.email}
            className="text-light hover:text-primary transition-colors duration-200 text-3xl"
            aria-label="Email Me"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      <section className="bg-panel rounded-2xl p-8 shadow-3xl space-y-6">
        <SectionHeading title="Research Focus" subtitle="Key themes from my work across academia and practice." />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-light-300 text-sm leading-relaxed list-disc list-inside">
          {profile.highlights?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="space-y-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Highlighted works showcasing my skills and expertise."
        />
        <div className="flex justify-center">
          <p className="text-light-400 max-w-3xl text-center">
            Each project blends rigorous control theory with production-quality web tooling—mirroring
            the precision expected in advanced engineering research.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* GitHub Repositories Section */}
      <section id="repositories">
        <SectionHeading
          title="GitHub Repositories"
          subtitle="A selection of my public repositories."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loadingRepos && (
            // Skeleton loader
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-panel p-6 rounded-lg shadow-md animate-pulse h-40"></div>
            ))
          )}
          {!loadingRepos && repos.map((repo) => (
            <RepositoryItem key={repo.name} repo={repo} />
          ))}
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="text-center bg-gradient-to-br from-dark-900 to-dark-700 p-12 rounded-3xl shadow-xl border border-white/10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to collaborate? Feel free to reach out."
        />
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <a
            href={profile.socials.email}
            className="flex items-center text-light hover:text-primary transition-colors duration-200 text-xl"
            aria-label="Email Me"
          >
            <FaEnvelope className="mr-2" /> {profile.socials.email.replace("mailto:", "")}
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-light hover:text-primary transition-colors duration-200 text-xl"
            aria-label="GitHub Profile"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-light hover:text-primary transition-colors duration-200 text-xl"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
