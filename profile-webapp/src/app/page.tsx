"use client";

import { profile, projects, repos } from '../../data';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import RepositoryItem from './components/RepositoryItem';
import SectionHeading from './components/SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import PublicationList from './components/PublicationList';
import AcademicIDList from './components/AcademicIDList';

export default function Home() {
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [theme, setTheme] = useState('apple'); // State to track current theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'apple';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const timer = setTimeout(() => {
      setLoadingRepos(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const isGitHubTheme = theme === 'github';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`grid grid-cols-1 gap-6 ${isGitHubTheme ? 'md:grid-cols-12' : ''}`}>
        {/* Left Sidebar - Profile Card (visible only in GitHub theme on desktop) */}
        {isGitHubTheme && (
          <aside className="md:col-span-4 lg:col-span-3 space-y-6">
            <ProfileCard profile={profile} />
            <AcademicIDList socials={profile.socials} />
          </aside>
        )}

        {/* Right Content Area */}
        <main className={`${isGitHubTheme ? 'md:col-span-8 lg:col-span-9' : ''} space-y-14 md:space-y-20`}>
          {/* Overview Section (Hero) */}
          <section id="overview" className="bg-panel border border-border rounded-[var(--radius)] shadow-md p-6 lg:p-10 space-y-4">
            {!isGitHubTheme && ( // Show ProfileCard in Apple theme here
              <div className="mb-8">
                <ProfileCard profile={profile} />
              </div>
            )}
            <h2 className="text-3xl font-bold text-text0 mb-4">Overview</h2>
            <p className="text-text1 text-lg leading-relaxed max-w-prose mx-auto">{profile.bio}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {profile.highlights?.map((highlight, index) => (
                <span key={index} className="bg-bg1 text-text1 text-xs px-3 py-1 rounded-full border border-border">
                  {highlight}
                </span>
              ))}
            </div>
            {!isGitHubTheme && ( // Show AcademicIDList in Apple theme here
              <div className="mt-8">
                <AcademicIDList socials={profile.socials} />
              </div>
            )}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:underline flex items-center"
                aria-label="GitHub Profile"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:underline flex items-center"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href={profile.socials.email}
                className="text-link hover:underline flex items-center"
                aria-label="Email Me"
              >
                <FaEnvelope className="mr-2" /> Email
              </a>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section id="projects" className="bg-panel border border-border rounded-[var(--radius)] shadow-md p-6 lg:p-10 space-y-4">
            <SectionHeading title="Featured Projects" subtitle="" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="bg-panel border border-border rounded-[var(--radius)] shadow-md p-6 lg:p-10 space-y-4">
            <SectionHeading title="Publications" subtitle="" />
            <PublicationList publications={[]} /> {/* Placeholder for publications */}
          </section>

          {/* GitHub Repositories Section */}
          <section id="repositories" className="bg-panel border border-border rounded-[var(--radius)] shadow-md p-6 lg:p-10 space-y-4">
            <SectionHeading title="GitHub Repositories" subtitle="" />
            <div className="space-y-4">
              {loadingRepos && (
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-bg1 p-4 rounded-md animate-pulse h-24 border border-border"></div>
                ))
              )}
              {!loadingRepos && repos.map((repo) => (
                <RepositoryItem key={repo.name} repo={repo} />
              ))}
            </div>
          </section>

          {/* Get In Touch Section */}
          <section id="contact" className="bg-panel border border-border rounded-[var(--radius)] shadow-md p-6 lg:p-10 space-y-4">
            <SectionHeading title="Get In Touch" subtitle="" />
            <p className="text-text1 text-center">Have a question or want to collaborate? Feel free to reach out.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href={profile.socials.email}
                className="flex items-center text-link hover:underline"
                aria-label="Email Me"
              >
                <FaEnvelope className="mr-2" /> {profile.socials.email.replace("mailto:", "")}
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-link hover:underline"
                aria-label="GitHub Profile"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-link hover:underline"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
