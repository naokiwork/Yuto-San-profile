import { Award } from '../../../data/index';
import SectionHeading from './SectionHeading';

interface AwardListProps {
  awards: Award[];
}

export default function AwardList({ awards }: AwardListProps) {
  return (
    <section id="awards" className="bg-dark-900 rounded-2xl p-8 shadow-3xl space-y-6">
      <SectionHeading title="Awards & Honors" subtitle="Recognitions for academic and research excellence." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map(award => (
          <div key={award.id} className="bg-dark-800 p-4 rounded-md shadow-md">
            <h4 className="text-light text-md font-medium">{award.name}</h4>
            <p className="text-light-400 text-sm">{award.organization} ({award.year})</p>
          </div>
        ))}
      </div>
    </section>
  );
}