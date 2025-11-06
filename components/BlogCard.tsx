import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/app/blog/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className="relative overflow-hidden rounded-xl aspect-video mb-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="bg-black/85 rounded-b-xl px-4 py-3 -mt-0.5 group-hover:bg-black transition-colors">
        <p className="text-white text-base font-medium leading-tight line-clamp-2">
          {post.title}
        </p>
      </div>
    </Link>
  );
}
