"use client";
import { profile, projects, repos, publicationsData } from '@/data';

import AcademicIDList from '@/components/AcademicIDList';
import ProjectCard from '@/components/ProjectCard';
import RepositoryItem from '@/components/RepositoryItem';
import SectionHeading from '@/components/SectionHeading';
import PublicationList from '@/components/PublicationList';
import ResearchFocusCard from '@/components/ResearchFocusCard';

import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaUniversity, FaArrowDown } from '@/components/icons';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import React from 'react';
import Button from '@/components/Button';

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (<div className={`mx-auto px-4 max-w-md-container ${className}`}>{children}</div>);
const Module: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (<section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>);

const ProjectFilter: React.FC<{ tags: string[]; selectedTag: string; onSelectTag: (tag: string) => void }> = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Button
          key={tag}
          variant={selectedTag === tag ? 'cta-primary' : 'secondary'}
          size="sm"
          onClick={() => onSelectTag(tag)}
          alt={`Filter projects by ${tag}`}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default function Home() {
  const [selectedTag, setSelectedTag] = useState('All');

  const academicIDs = [
    { icon: <FaGraduationCap className="text-text-muted" />, href: "#", label: "Google Scholar" },
    { icon: <FaUniversity className="text-text-muted" />, href: "#", label: "ResearchGate" },
    { icon: <FaGraduationCap className="text-text-muted" />, href: "#", label: "ORCID" },
  ];

  const filteredProjects = selectedTag === 'All' ? projects : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <>
      {/* Hero Section */}
      <Module id="overview" className="md:min-h-[calc(100vh-theme(spacing.20))] flex items-center bg-bg-base relative overflow-hidden">
        <div className="absolute inset-0 radial-gradient-vignette"></div>
        <Container className="grid grid-cols-1 gap-8 items-center text-center relative z-10">
          <Reveal>
            <h1 className="text-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-300 mb-4 leading-tight">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-h3 text-text-secondary mb-4">{profile.title} at {profile.affiliation}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-h3 text-text-primary max-w-prose mx-auto mb-8">{profile.bio}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="cta-primary" href="#projects" alt="View My Projects" className="flex-grow sm:flex-grow-0">
                View Projects <FaArrowDown className="ml-2" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-wrap gap-4 justify-center text-text-secondary">
              <Button variant="secondary" href={profile.socials.github} target="_blank" rel="noopener noreferrer" alt="GitHub Profile">
                <FaGithub className="text-text-secondary" /> GitHub
              </Button>
              <Button variant="secondary" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" alt="LinkedIn Profile">
                <FaLinkedin className="text-text-secondary" /> LinkedIn
              </Button>
              <Button variant="secondary" href={`mailto:${profile.socials.email}`} alt={`Email ${profile.socials.email}`}>
                <FaEnvelope className="text-text-secondary" /> Email
              </Button>
            </div>
          </Reveal>
        </Container>
      </Module>

      {/* Research Focus */}
      <Module id="research" className="bg-bg-base">
        <Container className="max-w-md-container">
          <Reveal>
            <SectionHeading title="Research Focus" subtitle="My areas of expertise and active investigation." className="text-text-primary" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {profile.researchFocus.map((focus, index) => (
              <ResearchFocusCard key={index} {...focus} />
            ))}
          </div>
        </Container>
      </Module>

      {/* Publications */}
      <Module id="publications" className="bg-bg-elevated">
        <Container className="max-w-md-container">
          <Reveal>
            <SectionHeading title="Publications" subtitle="Recent academic contributions and papers." className="text-text-primary" />
          </Reveal>
          <PublicationList publications={publicationsData} className="bg-bg-elevated" />
        </Container>
      </Module>

      {/* Project Gallery */}
      <Module id="projects" className="bg-bg-base">
        <Container className="max-w-md-container">
          <Reveal>
            <SectionHeading title="Projects Gallery" subtitle="Showcasing my work with real-world applications." className="text-text-primary" />
          </Reveal>
          <div className="flex flex-wrap gap-2 mt-12 mb-8 justify-center">
            <ProjectFilter tags={['All', ...new Set(projects.flatMap(p => p.tags))]} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 bg-bg-base">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </Module>

      {/* Open-Source Contributions */}
      <Module id="code" className="bg-bg-elevated">
        <Container className="max-w-md-container">
          <Reveal>
            <SectionHeading title="Open-Source Contributions" subtitle="Exploring my public code repositories on GitHub." className="text-text-primary" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 bg-bg-elevated">
            {repos.map((repo) => (
              <RepositoryItem key={repo.name} repo={repo} />
            ))}
          </div>
        </Container>
      </Module>

      {/* Get In Touch */}
      <Module id="contact" className="bg-bg-base">
        <Container className="text-center max-w-md-container">
          <Reveal>
            <SectionHeading title="Get In Touch" subtitle="I'm always open to collaborations and new opportunities." className="text-text-primary" />
          </Reveal>
          <p className="text-body text-text-primary max-w-prose mx-auto mb-8 mt-12">Feel free to reach out via email or connect with me on social media.</p>
          <div className="flex flex-wrap justify-center gap-6 bg-bg-base">
            <Button variant="secondary" href={`mailto:${profile.socials.email}`} alt={`Email ${profile.socials.email}`}>
              <FaEnvelope className="text-text-secondary" /> Email
            </Button>
            <Button variant="secondary" href={profile.socials.github} target="_blank" rel="noopener noreferrer" alt="GitHub Profile">
              <FaGithub className="text-text-secondary" /> GitHub
            </Button>
            <Button variant="secondary" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" alt="LinkedIn Profile">
              <FaLinkedin className="text-text-secondary" /> LinkedIn
            </Button>
          </div>
          <div className="mt-16">
            <AcademicIDList academicIDs={academicIDs} className="bg-bg-base" />
          </div>
        </Container>
      </Module>
    </>
  );
}
