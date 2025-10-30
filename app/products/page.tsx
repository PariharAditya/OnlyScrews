'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductCategory {
  name: string;
  description: string;
  image: string;
  types: string[];
  href: string;
}

const categories: ProductCategory[] = [
  {
    name: 'Screws',
    description: 'High-quality screws for various industrial applications',
    image: '/images/Screws.png',
    types: [
      'Wood Screws',
      'Machine Screws',
      'Self-Drilling Screws',
      'Sheet Metal Screws',
      'Drywall Screws'
    ],
    href: '/products/screws'
  },
  {
    name: 'Nuts',
    description: 'Wide range of nuts for secure fastening',
    image: '/images/Nuts.png',
    types: [
      'Hex Nuts',
      'Lock Nuts',
      'Wing Nuts',
      'Cap Nuts',
      'Flange Nuts'
    ],
    href: '/products/nuts'
  },
  {
    name: 'Bolts',
    description: 'Durable bolts for heavy-duty applications',
    image: '/images/Bolts.png',
    types: [
      'Hex Bolts',
      'Carriage Bolts',
      'U-Bolts',
      'Eye Bolts',
      'Anchor Bolts'
    ],
    href: '/products/bolts'
  },
  {
    name: 'Washers',
    description: 'Essential washers for load distribution',
    image: '/images/Washers.png',
    types: [
      'Flat Washers',
      'Lock Washers',
      'Spring Washers',
      'Fender Washers',
      'Wave Washers'
    ],
    href: '/products/washers'
  },
  {
    name: 'Anchors',
    description: 'Reliable anchoring solutions',
    image: '/images/Anchors.png',
    types: [
      'Wedge Anchors',
      'Sleeve Anchors',
      'Drop-In Anchors',
      'Chemical Anchors',
      'Concrete Screws'
    ],
    href: '/products/anchors'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-[#1a5f7a] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold text-center mb-4">Our Products</h1>
          <p className="font-sans text-xl text-center max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality industrial fasteners. 
            We offer bulk quantities at competitive prices.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.href}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2">{category.name}</h3>
                <p className="font-sans text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-1">
                  {category.types.map((type) => (
                    <div key={type} className="font-sans flex items-center text-sm text-gray-500">
                      <span className="mr-2">•</span>
                      {type}
                    </div>
                  ))}
                </div>
                <div className="font-heading mt-4 text-[#1a5f7a] font-medium group-hover:underline">
                  View Products →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-800 mb-4">Need Help Choosing?</h2>
          <p className="font-sans text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the right fasteners for your application.
          </p>
          <Link 
            href="/bulk-enquiry"
            className="font-heading inline-block bg-[#1a5f7a] text-white px-8 py-3 rounded-md hover:bg-[#134b61] transition-colors font-medium"
          >
            Request Expert Guidance
          </Link>
        </div>
      </div>
    </div>
  );
}
