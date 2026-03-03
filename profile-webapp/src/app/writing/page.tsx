import { getWritingData } from "@/lib/data";
import Link from "next/link";

export default async function WritingPage() {
  const writing = await getWritingData();
  const publishedWriting = writing.filter((item: any) => item.isPublished);

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-github-lightgray mb-8 text-center">
        My Writings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publishedWriting.map((item: any) => (
          <div key={item.id} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-github-lightgray mb-2">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-github-blue text-white text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/writing/${item.slug}`}
              className="text-github-blue hover:underline"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
