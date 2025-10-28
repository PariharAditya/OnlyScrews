'use client';

import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Screws',
    slug: 'screws'
  },
  {
    id: '2',
    name: 'Metal Nuts',
    slug: 'nuts'
  },
  {
    id: '3',
    name: 'Washers',
    slug: 'washers'
  },
  {
    id: '4',
    name: 'Rivets and Riveting Tools',
    slug: 'rivets'
  },
  {
    id: '5',
    name: 'Anchor Bolts',
    slug: 'anchor-bolts'
  },
  {
    id: '6',
    name: 'Self Clinching Fasteners',
    slug: 'self-clinching-fasteners'
  },
  {
    id: '7',
    name: 'Spacers and Standoffs',
    slug: 'spacers-standoffs'
  },
  {
    id: '8',
    name: 'Locking Elements',
    slug: 'locking-elements'
  },
  {
    id: '9',
    name: 'Thread Repair and Tools',
    slug: 'thread-repair-tools'
  },
  {
    id: '10',
    name: 'Other Items',
    slug: 'other-items'
  },
  {
    id: '11',
    name: 'Special Products',
    slug: 'special-products'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Products</h1>
        
        <div className="flex flex-col space-y-4 max-w-3xl">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop/${category.slug}`}
              className="group flex items-center py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex-1">
                <h2 className="font-sans text-gray-900 group-hover:text-[#1a5f7a] transition-colors">
                  {category.name}
                </h2>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-[#1a5f7a] group-hover:transform group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-gray-600 max-w-3xl">
          <p className="mb-4">
            We have an extensive range of fasteners with over 60,000 parts in ready stock. Click on the above links for the relevant pages.
          </p>
          <p>
            Please email us at sales@onlyscrews.com with your requirements.
          </p>
        </div>
      </div>
    </div>
  );
}