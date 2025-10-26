'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// Mock products data (replace with actual API call)
const mockProducts: Record<string, Product[]> = {
  screws: [
    {
      id: 's1',
      name: 'Wood Screws',
      description: 'High-quality steel wood screws for carpentry',
      price: 199,
      image: '/images/Screws.png',
      category: 'screws'
    },
    {
      id: 's2',
      name: 'Sheet Metal Screws',
      description: 'Self-tapping screws for metal sheets',
      price: 299,
      image: '/images/Screws.png',
      category: 'screws'
    },
  ],
  nuts: [
    {
      id: 'n1',
      name: 'Hex Nuts',
      description: 'Standard hexagonal nuts for general use',
      price: 149,
      image: '/images/Nuts.png',
      category: 'nuts'
    },
    {
      id: 'n2',
      name: 'Lock Nuts',
      description: 'Self-locking nuts for secure fastening',
      price: 249,
      image: '/images/Nuts.png',
      category: 'nuts'
    },
  ],
  bolts: [
    {
      id: 'b1',
      name: 'Hex Bolts',
      description: 'Standard hexagonal head bolts',
      price: 299,
      image: '/images/Bolts.png',
      category: 'bolts'
    },
    {
      id: 'b2',
      name: 'Carriage Bolts',
      description: 'Round-headed bolts with square neck',
      price: 349,
      image: '/images/Bolts.png',
      category: 'bolts'
    },
  ],
  washers: [
    {
      id: 'w1',
      name: 'Flat Washers',
      description: 'Standard flat washers for even load distribution',
      price: 99,
      image: '/images/Washers.png',
      category: 'washers'
    },
    {
      id: 'w2',
      name: 'Lock Washers',
      description: 'Split lock washers for vibration resistance',
      price: 129,
      image: '/images/Washers.png',
      category: 'washers'
    },
  ],
  anchors: [
    {
      id: 'a1',
      name: 'Wall Anchors',
      description: 'Plastic wall anchors for drywall and masonry',
      price: 179,
      image: '/images/Anchors.png',
      category: 'anchors'
    },
    {
      id: 'a2',
      name: 'Concrete Anchors',
      description: 'Heavy-duty anchors for concrete applications',
      price: 249,
      image: '/images/Anchors.png',
      category: 'anchors'
    },
  ],
};

const categoryNames: Record<string, string> = {
  screws: 'Screws',
  nuts: 'Nuts',
  bolts: 'Bolts',
  washers: 'Washers',
  anchors: 'Anchors',
  'special-fasteners': 'Special Fasteners',
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // In a real app, this would be an API call
    setProducts(mockProducts[category] || []);
  }, [category]);

  const sortProducts = (products: Product[]) => {
    return [...products].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });
  };

  const sortedProducts = sortProducts(products);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            {categoryNames[category] || 'Products'}
          </h1>
          <p className="font-sans text-lg text-gray-600">
            Explore our selection of high-quality {categoryNames[category]?.toLowerCase() || 'products'}
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex justify-end mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">{product.name}</h3>
                <p className="font-sans text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-heading text-2xl font-bold text-gray-900">₹{product.price}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="font-sans text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}