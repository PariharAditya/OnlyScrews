"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { productData } from '@/lib/productData';
import { productHierarchy } from '@/lib/productHierarchy';

interface ProductSuggestion {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Category fallback images that exist in the project
const categoryFallbacks: Record<string, string> = {
  'Screws': '/images/Screws.png',
  'Bolts': '/images/Bolts.png',
  'Nuts': '/images/Nuts.png',
  'Washers': '/images/Washers.png',
  'Anchors': '/images/Anchors.png',
  'Spacers': '/images/Screws.png',
  'Stand-Offs': '/images/Screws.png',
  'Rivets and Dowels': '/images/Screws.png',
  'Products': '/images/Screws.png',
};

// Build searchable product list from productHierarchy (only items that exist in product listings)
function buildProductList(): ProductSuggestion[] {
  const products: ProductSuggestion[] = [];
  
  // Extract all slugs from productHierarchy
  productHierarchy.forEach((mainCat) => {
    const mainCategory = mainCat.mainCategory;
    
    mainCat.categories?.forEach((cat) => {
      cat.subcategories?.forEach((subcat) => {
        const slug = subcat.slug;
        const data = productData[slug];
        
        // Only include if productData exists for this slug
        if (data && data.title && Array.isArray(data.images) && data.images.length > 0) {
          // Get the first image and encode the path to handle spaces
          const rawImage = data.images[0];
          const image = rawImage.split('/').map((part: string, idx: number) => idx === 0 ? part : encodeURIComponent(part)).join('/');

          products.push({
            slug,
            title: data.title,
            category: mainCategory,
            image,
            description: data.about?.substring(0, 100) + '...' || '',
          });
        }
      });
    });
  });
  
  return products;
}

export default function NavbarSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Build product list once
  const allProducts = useMemo(() => buildProductList(), []);

  // Filter products based on query
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return allProducts
      .filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.slug.toLowerCase().includes(searchTerm)
      )
      .slice(0, 8); // Limit to 8 suggestions
  }, [query, allProducts]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0 && suggestions[selectedIndex]) {
      e.preventDefault();
      window.location.href = `/category/${suggestions[selectedIndex].slug}`;
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  const clearSearch = () => {
    setQuery('');
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div className="relative flex-1 max-w-md mx-4">
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#BCFF83] focus:ring-1 focus:ring-[#BCFF83] text-gray-900 placeholder-gray-500"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dropdown Suggestions */}
      {isOpen && query.trim() && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto"
        >
          {suggestions.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {suggestions.map((product, index) => (
                <Link
                  key={product.slug}
                  href={`/category/${product.slug}`}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className={`flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors ${
                    index === selectedIndex ? 'bg-[#BCFF83]/20' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain p-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Use category fallback (no encoding needed for fallbacks)
                        const fallback = categoryFallbacks[product.category] || '/images/Screws.png';
                        if (!target.src.endsWith(fallback)) {
                          target.src = fallback;
                        }
                      }}
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {product.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.category}
                    </div>
                    <div className="text-xs text-gray-400 truncate mt-0.5">
                      {product.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <div className="text-sm mb-1">No products found for "{query}"</div>
              <div className="text-xs text-gray-400">Try searching for screws, bolts, nuts, washers...</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
