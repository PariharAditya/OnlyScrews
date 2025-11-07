"use client";

import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiX, FiClock, FiTrendingUp } from 'react-icons/fi';
import { BsGrid } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  href: string;
  image?: string;
  price?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: '1', name: 'Screws', icon: '/icons/screws.png' },
  { id: '2', name: 'Bolts', icon: '/icons/bolts.png' },
  { id: '3', name: 'Nuts', icon: '/icons/nuts.png' },
  { id: '4', name: 'Washers', icon: '/icons/washers.png' },
  { id: '5', name: 'Anchors', icon: '/icons/anchors.png' },
  { id: '6', name: 'Spacers', icon: '/icons/spacers.png' },
];

const popularSearches = [
  'Hex Bolts',
  'Wood Screws',
  'Lock Nuts',
  'Flat Washers',
  'Anchor Bolts',
  'Machine Screws'
];

const mockProducts: SearchResult[] = [
  { 
    id: '1', 
    title: 'Hex Bolts', 
    category: 'Bolts', 
    href: '/products/hex-bolts',
    image: '/products/hex-bolts.png',
    price: '₹2.50'
  },
  { 
    id: '2', 
    title: 'Wood Screws', 
    category: 'Screws', 
    href: '/products/wood-screws',
    image: '/products/wood-screws.png',
    price: '₹1.80'
  },
  { 
    id: '3', 
    title: 'Lock Nuts', 
    category: 'Nuts', 
    href: '/products/lock-nuts',
    image: '/products/lock-nuts.png',
    price: '₹1.20'
  },
  { 
    id: '4', 
    title: 'Flat Washers', 
    category: 'Washers', 
    href: '/products/flat-washers',
    image: '/products/flat-washers.png',
    price: '₹0.80'
  },
  { 
    id: '5', 
    title: 'Anchor Bolts', 
    category: 'Anchors', 
    href: '/products/anchor-bolts',
    image: '/products/anchor-bolts.png',
    price: '₹3.50'
  },
  { 
    id: '6', 
    title: 'Spacers', 
    category: 'Spacers', 
    href: '/products/spacers',
    image: '/products/spacers.png',
    price: '₹1.50'
  }
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (searchQuery) {
      // In a real application, this would be an API call
      const filtered = mockProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const newRecent = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      setRecentSearches(newRecent);
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center" onClick={onClose}>
      <div
        ref={modalRef}
        className="bg-white w-full max-w-3xl mx-4 mt-4 rounded-lg shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b relative">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX className="text-xl" />
              </button>
            )}
          </div>
          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close search"
          >
            <FiX className="text-2xl text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          {!searchQuery ? (
            <div className="p-6">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BsGrid />
                  Product Categories
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      href={`/products/${category.name.toLowerCase()}`}
                      onClick={onClose}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={category.icon}
                          alt={category.name}
                          width={40}
                          height={40}
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Searches */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FiTrendingUp />
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(term)}
                      className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <FiClock />
                    Recent Searches
                  </h3>
                  <div className="space-y-2">
                    {recentSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(term)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4">
              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={result.href}
                      onClick={onClose}
                      className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
                    >
                      {result.image && (
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={result.image}
                            alt={result.title}
                            width={64}
                            height={64}
                            className="object-contain p-2"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{result.title}</div>
                        <div className="text-sm text-gray-500">{result.category}</div>
                        {result.price && (
                          <div className="text-sm font-medium text-purple-600 mt-1">
                            {result.price}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <div className="text-lg mb-2">No results found</div>
                  <div className="text-sm">
                    We couldn&apos;t find any products matching &quot;{searchQuery}&quot;
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
