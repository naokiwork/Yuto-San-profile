import SectionHeading from './SectionHeading';

// Minimal local type definition for Publication
interface Publication {
  id: string;
  title: string;
}

interface PublicationListProps {
  publications?: Publication[]; // Publications are optional
}

export default function PublicationList({ publications }: PublicationListProps) {
  return (
    <section id="publications" className="bg-dark-900 rounded-2xl p-8 shadow-3xl space-y-6">
      <SectionHeading title="Publications" subtitle="My academic publications." />
      <p className="text-light-500 text-center">Publications coming soon.</p>
    </section>
  );
}
