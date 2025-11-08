"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "./blogData";

const ALL_FILTERS = [
  "All posts",
  "Screws",
  "Bolts",
  "Washers",
  "Nylon",
  "Stainless Steel 304",
  "Industrial nuts and bolts",
  "Durable",
  "Guide",
  "DIY",
  "Corrosion resistance",
  "Precision Engineered fasteners",
  "hex head bolts",
  "Machine screws",
  "Spacers",
  "High-Tesile",
];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("All posts");

  const filteredPosts =
    activeFilter === "All posts"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) =>
          post.tags.some(
            (tag) =>
              tag.toLowerCase() === activeFilter.toLowerCase() ||
              post.category.toLowerCase() === activeFilter.toLowerCase()
          )
        );

  return (
    <div className="min-h-screen bg-white -mt-[144px] pt-[55px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Blogs
        </h1>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4 items-start">
            {ALL_FILTERS.slice(0, 9).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#16a34a] text-white"
                    : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {ALL_FILTERS.slice(9).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#16a34a] text-white"
                    : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts found for this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
