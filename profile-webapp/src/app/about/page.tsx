import { getProfileData } from "@/lib/data";
import Link from "next/link";

export default async function AboutPage() {
  const profile = await getProfileData();

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-github-lightgray mb-8 text-center">
        About Me
      </h1>

      <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-github-lightgray mb-4">Biography</h2>
        <p className="text-github-gray text-lg mb-4">{profile.bioLong}</p>
        <p className="text-github-gray text-lg">Location: {profile.location}</p>
      </section>

      <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-github-lightgray mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(profile.skills as Record<string, string[]>).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-github-lightgray mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="bg-github-blue text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for Background/Achievements - add more data to profile.json if needed */}
      <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-github-lightgray mb-4">Background & Achievements</h2>
        <p className="text-github-gray text-lg">
          詳細な学歴や職務経歴、受賞歴などをここに記述します。
          現在は、青山学院大学理工学部電気電子工学科の助教として、システム・制御工学を専門に研究を行っています。
          IEEE CIS Japan Young Researcher Awardなど、複数の学術賞を受賞しています。
        </p>
      </section>

      <section className="text-center">
        <Link
          href="/contact"
          className="bg-github-blue hover:bg-github-green text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
}
