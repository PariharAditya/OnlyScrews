import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { BLOG_POSTS, BLOG_CONTENT } from "../blogData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface BlogDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Blog Post Not Found | Screw Bazar",
    };
  }

  return {
    title: `${post.title} | Screw Bazar Blog`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "fasteners",
      "screws",
      "bolts",
      "hardware",
      "blog",
      "guide",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.screwbazar.com/blog/${id}`,
      type: "article",
      images: post.image ? [{ url: post.image, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `https://www.screwbazar.com/blog/${id}`,
    },
  };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);
  const content = BLOG_CONTENT[id as keyof typeof BLOG_CONTENT];

  if (!post || !content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100 p-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to blogs
          </Link>
        </div>

        <article className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-xl aspect-video mb-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="w-full h-full object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>

            <div className="bg-black/85 rounded-b-xl px-4 py-3 -mt-0.5">
              <p className="text-white text-base font-medium leading-tight">
                {post.title}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content.mainTitle}
            </h1>

            <div className="bg-lime-100 border-l-4 border-[#16a34a] px-4 py-4 mb-8">
              <p className="text-gray-800 leading-relaxed">{content.intro}</p>
            </div>

            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {content.conclusion.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {content.conclusion.text}
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#16a34a] hover:underline font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
