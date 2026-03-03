import { getWritingData } from "@/lib/data";
import { notFound } from 'next/navigation';
import Link from "next/link";
import { remark } from 'remark';
import html from 'remark-html';

export default async function WritingDetailPage({ params }: { params: { slug: string } }) {
  const writing = await getWritingData();
  const post = writing.find((item: any) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="py-8">
      <h1 className="text-5xl font-bold text-github-lightgray mb-4">
        {post.title}
      </h1>
      <p className="text-github-gray text-base mb-6">
        Published on: {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      <div className="prose prose-invert max-w-none text-github-gray">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>

      <div className="flex flex-wrap gap-2 mt-6 mb-8">
        {post.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-github-blue text-white text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link href="/writing" className="text-github-blue hover:underline">
        &larr; Back to Writings
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  const writing = await getWritingData();
  return writing.filter((item: any) => item.isPublished).map((item: any) => ({
    slug: item.slug,
  }));
}
