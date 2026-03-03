import { profile, projects, repos } from '../../../data';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import RepositoryItem from './components/RepositoryItem';
import SectionHeading from './components/SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [displayRepos, setDisplayRepos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingRepos(false);
      setDisplayRepos(true);
    }, 800); // Simulate loading for 800ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-20 bg-dark-800 rounded-lg shadow-xl mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-light mb-4 leading-tight">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-accent mb-6 font-semibold">
          {profile.role}
        </p>
        <p className="text-lg text-light-400 max-w-3xl mx-auto mb-10">
          {profile.bio}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="#projects" size="lg" variant="primary">
            View Projects
          </Button>
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary transition-colors duration-200 text-3xl"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary transition-colors duration-200 text-3xl"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href={profile.socialLinks.email}
            className="text-light hover:text-primary transition-colors duration-200 text-3xl"
            aria-label="Email Me"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects">
        <SectionHeading
          title="Featured Projects"
          subtitle="Highlighted works showcasing my skills and expertise."
        />
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
              <div key={index} className="bg-dark-700 p-6 rounded-lg shadow-md animate-pulse h-40"></div>
            ))
          )}
          {displayRepos && repos.map((repo) => (
            <RepositoryItem key={repo.name} repo={repo} />
          ))}
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="text-center bg-dark-800 p-12 rounded-lg shadow-xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to collaborate? Feel free to reach out."
        />
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <a
            href={profile.socialLinks.email}
            className="flex items-center text-light hover:text-primary transition-colors duration-200 text-xl"
            aria-label="Email Me"
          >
            <FaEnvelope className="mr-2" /> {profile.socialLinks.email.replace("mailto:", "")}
          </a>
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-light hover:text-primary transition-colors duration-200 text-xl"
            aria-label="GitHub Profile"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href={profile.socialLinks.linkedin}
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
