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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingRepos(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar - Profile Card */}
        <aside className="md:col-span-4 lg:col-span-3 space-y-6">
          <ProfileCard profile={profile} />
          <AcademicIDList socials={profile.socials} />
        </aside>

        {/* Right Content Area */}
        <main className="md:col-span-8 lg:col-span-9 space-y-6">
          {/* Overview Section (Hero) */}
          <section id="overview" className="bg-panel border border-border rounded-lg shadow-md p-6 space-y-4">
            <h2 className="text-xl font-semibold text-text0">Overview</h2>
            <p className="text-text1">{profile.bio}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {profile.highlights?.map((highlight, index) => (
                <span key={index} className="bg-gray-700 text-text1 text-xs px-3 py-1 rounded-full border border-border">
                  {highlight}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
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
          <section id="projects" className="bg-panel border border-border rounded-lg shadow-md p-6 space-y-4">
            <SectionHeading title="Featured Projects" subtitle="" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="bg-panel border border-border rounded-lg shadow-md p-6 space-y-4">
            <SectionHeading title="Publications" subtitle="" />
            <PublicationList publications={[]} /> {/* Placeholder for publications */}
          </section>

          {/* GitHub Repositories Section */}
          <section id="repositories" className="bg-panel border border-border rounded-lg shadow-md p-6 space-y-4">
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
          <section id="contact" className="bg-panel border border-border rounded-lg shadow-md p-6 space-y-4">
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
