import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface ProfileCardProps {
  profile: {
    name: string;
    role: string;
    bio: string;
    socials: { github: string; linkedin: string; email: string; };
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-panel border border-border rounded-[var(--radius)] shadow-md p-6 text-center space-y-4">
      {/* Placeholder for profile image */}
      <div className="w-32 h-32 rounded-full bg-bg1 border border-border mx-auto flex items-center justify-center mb-4 overflow-hidden">
        {/* <Image src="/path/to/profile.jpg" alt="Profile of {profile.name}" width={128} height={128} objectFit="cover" /> */}
        <span className="text-text1 text-5xl font-bold">Y.A.</span>
      </div>
      <h1 className="text-2xl font-bold text-text0 tracking-tight">{profile.name}</h1>
      <p className="text-text1 text-base">{profile.role}</p>
      <p className="text-text1 text-sm leading-relaxed mt-2 max-w-prose mx-auto">{profile.bio}</p>
      <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-border">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-text1 hover:text-link transition-colors"><FaGithub size={24} /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text1 hover:text-link transition-colors"><FaLinkedin size={24} /></a>
        <a href={profile.socials.email} className="text-text1 hover:text-link transition-colors"><FaEnvelope size={24} /></a>
      </div>
    </div>
  );
};

export default ProfileCard;
