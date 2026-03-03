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
    <div className="bg-panel border border-border rounded-lg shadow-md p-6 text-center space-y-4">
      {/* Placeholder for profile image */}
      <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto flex items-center justify-center text-text1 text-4xl font-bold mb-4">
        Y.A.
      </div>
      <h1 className="text-2xl font-bold text-text0">{profile.name}</h1>
      <p className="text-text1 text-sm">{profile.role}</p>
      <p className="text-text1 text-sm leading-relaxed">{profile.bio}</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-text1 hover:text-link"><FaGithub size={20} /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text1 hover:text-link"><FaLinkedin size={20} /></a>
        <a href={profile.socials.email} className="text-text1 hover:text-link"><FaEnvelope size={20} /></a>
      </div>
    </div>
  );
};

export default ProfileCard;
