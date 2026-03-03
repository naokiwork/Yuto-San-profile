interface ResearchCardProps {
  title: string;
  summary: string;
  keywords: string[];
  applications?: string;
}

export default function ResearchCard({ title, summary, keywords, applications }: ResearchCardProps) {
  return (
    <div className="bg-dark-800 rounded-lg p-6 shadow-lg border border-dark-700 hover:border-primary-light transition-colors duration-200">
      <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
      <p className="text-light-300 text-sm mb-4">{summary}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {keywords.map((keyword) => (
          <span key={keyword} className="bg-dark-700 text-light-400 px-3 py-1 rounded-full text-xs">
            {keyword}
          </span>
        ))}
      </div>
      {applications && (
        <p className="text-primary-light text-xs mt-3 italic">Applications: {applications}</p>
      )}
    </div>
  );
}