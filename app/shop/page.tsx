'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Screws',
    description: 'High-quality screws for all your needs',
    image: '/images/Screws.png',
    slug: 'screws'
  },
  {
    id: '2',
    name: 'Nuts',
    description: 'Wide variety of nuts for different applications',
    image: '/images/Nuts.png',
    slug: 'nuts'
  },
  {
    id: '3',
    name: 'Bolts',
    description: 'Durable bolts for industrial use',
    image: '/images/Bolts.png',
    slug: 'bolts'
  },
  {
    id: '4',
    name: 'Washers',
    description: 'Essential washers for proper fastening',
    image: '/images/Washers.png',
    slug: 'washers'
  },
  {
    id: '5',
    name: 'Anchors',
    description: 'Reliable anchors for secure mounting',
    image: '/images/Anchors.png',
    slug: 'anchors'
  }
];

export default function ShopPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of industrial fasteners and hardware. Quality products for every project.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop/${category.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-black transition-transform duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-contain p-4"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="font-sans text-sm text-gray-200">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-heading text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="font-sans text-gray-600">All products meet international quality standards</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-heading text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="font-sans text-gray-600">Quick shipping across India</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-heading text-xl font-semibold mb-2">Expert Support</h3>
            <p className="font-sans text-gray-600">Technical guidance available</p>
          </div>
        </div>
      </div>
    </div>
  );
}