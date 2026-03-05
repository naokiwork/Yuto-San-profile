"use client";
import type { Metadata } from 'next';
import Image from 'next/image';
import { profile, projects, repos, Publication, publicationsData } from '../../data';
import AcademicIDList from './components/AcademicIDList';
import ProjectCard from './components/ProjectCard';
import RepositoryItem from './components/RepositoryItem';
import SectionHeading from './components/SectionHeading';
import TabNav from './components/TabNav';
import PublicationList from './components/PublicationList';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaMapMarkerAlt, FaUniversity, FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Reveal from './components/Reveal';
import React from 'react'; // React is implicitly imported by Next.js components
import Button from './components/Button';

// Custom Components for Apple.com style
const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (<div className={`mx-auto px-4 max-w-md-container ${className}`}>{children}</div>);
const Module: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (<section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>);

const ResearchFocusCard: React.FC<{ title: string; claim: string; keywords: string[]; linkHref: string }> = ({ title, claim, keywords, linkHref }) => (
  <Reveal>
    <div className="bg-card border border-border rounded-lg shadow-sm p-6 flex flex-col items-start h-full">
      <h3 className="text-h3 font-semibold text-foreground mb-2 leading-tight">{title}</h3>
      <p className="text-muted text-body flex-grow mb-4">{claim}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((keyword, index) => (
          <span key={index} className="bg-muted/[0.08] text-muted-2 text-xs px-2 py-0.5 rounded-full border border-border">{keyword}</span>
        ))}
      </div>
      <div className="mt-auto">
        <Button variant="link" size="sm" href={linkHref} alt={`Read more about ${title}`}>
          Read more <FaExternalLinkAlt className="inline-block ml-1 w-3 h-3" />
        </Button>
      </div>
    </div>
  </Reveal>
);

const ProjectFilter: React.FC<{ tags: string[]; selectedTag: string; onSelectTag: (tag: string) => void }> = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Button
          key={tag}
          variant={selectedTag === tag ? 'primary' : 'secondary'}
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
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: '0px 0px -50% 0px', // When section midpoint crosses the viewport center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const sections = ['overview', 'research', 'publications', 'projects', 'code', 'contact'];

  const academicIDs = [
    { icon: <FaGraduationCap className="text-muted-2" />, href: "#", label: "Google Scholar" },
    { icon: <FaUniversity className="text-muted-2" />, href: "#", label: "ResearchGate" },
    { icon: <FaGraduationCap className="text-muted-2" />, href: "#", label: "ORCID" },
  ];


  const filteredProjects = selectedTag === 'All' ? projects : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <>
      {/* Hero Section */}
      <Module id="overview" className="md:min-h-[calc(100vh-var(--space-5xl))] flex items-center">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <Reveal>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-small text-muted-2 uppercase tracking-wide font-semibold mb-2">Systems & Control / Robotics / Aerospace</p>
              <h1 className="text-display font-bold text-foreground mb-4 leading-tight">Control theory <span className="text-accent">→</span> real systems.</h1>
              <Reveal delay={200}>
                <p className="text-h3 text-muted max-w-prose mb-8">Bridging the gap between theoretical control engineering and practical robotic and aerospace applications.</p>
              </Reveal>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button href="#projects" className="flex-grow sm:flex-grow-0">
                  View Projects
                </Button>
                <Button variant="secondary" href="#contact" className="flex-grow sm:flex-grow-0">
                  Contact
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Abstract Gradient Card with Initials */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent-2 to-accent rounded-lg flex items-center justify-center text-white text-display font-bold leading-none select-none overflow-hidden shadow-lg">
              <span className="relative z-10">Y.A</span>
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            </div>
          </Reveal>
        </Container>
      </Module>

      {/* Trust Strip */}
      <Module className="bg-card border-t border-b border-border text-foreground">
        <Container>
          <h2 className="sr-only">Trust Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 text-center">
            <Reveal>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold text-accent">10+</span>
                <span className="text-small text-muted">Awards Received</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold text-accent">20+</span>
                <span className="text-small text-muted">Papers Published</span>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold text-accent">30+</span>
                <span className="text-small text-muted">Open-Source Repos</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Module>

      {/* Research Focus */}
      <Module id="research">
        <Container>
          <Reveal>
            <SectionHeading title="Research Focus" subtitle="My areas of expertise and active investigation." className="text-center" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {profile.researchFocus.map((focus, index) => (
              <ResearchFocusCard key={index} {...focus} />
            ))}
          </div>
        </Container>
      </Module>

      {/* Publications */}
      <Module id="publications" className="bg-muted/[0.05]">
        <Container>
          <Reveal>
            <SectionHeading title="Publications" subtitle="Recent academic contributions and papers." className="text-center" />
          </Reveal>
          <PublicationList publications={publicationsData} />
        </Container>
      </Module>

      {/* Project Gallery */}
      <Module id="projects">
        <Container>
          <Reveal>
            <SectionHeading title="Projects Gallery" subtitle="Showcasing my work with real-world applications." className="text-center" />
          </Reveal>
          <div className="flex flex-wrap gap-2 mt-12 mb-8 justify-center">
            <ProjectFilter tags={['All', ...new Set(projects.flatMap(p => p.tags))]} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </Module>

      {/* Open-Source Contributions */}
      <Module id="code" className="bg-muted/[0.05]">
        <Container>
          <Reveal>
            <SectionHeading title="Open-Source Contributions" subtitle="Exploring my public code repositories on GitHub." className="text-center" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {repos.map((repo) => (
              <RepositoryItem key={repo.name} repo={repo} />
            ))}
          </div>
        </Container>
      </Module>

      {/* Get In Touch */}
      <Module id="contact">
        <Container className="text-center">
          <Reveal>
            <SectionHeading title="Get In Touch" subtitle="I'm always open to collaborations and new opportunities." />
          </Reveal>
          <p className="text-body text-foreground max-w-prose mx-auto mb-8 mt-12">Feel free to reach out via email or connect with me on social media.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="secondary" href={`mailto:${profile.socials.email}`} alt={`Email ${profile.socials.email}`}>
              <FaEnvelope className="text-muted-2" /> {profile.socials.email}
            </Button>
            <Button variant="secondary" href={profile.socials.github} target="_blank" rel="noopener noreferrer" alt="GitHub Profile">
              <FaGithub className="text-muted-2" /> GitHub
            </Button>
            <Button variant="secondary" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" alt="LinkedIn Profile">
              <FaLinkedin className="text-muted-2" /> LinkedIn
            </Button>
          </div>
          <div className="mt-16">
            <AcademicIDList academicIDs={academicIDs} />
          </div>
        </Container>
      </Module>
    </>
  );
}