"use client";

import { useState, useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  category: string;
  href: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockProducts: SearchResult[] = [
  {
    id: "1",
    title: "Hex Bolts",
    category: "Bolts",
    href: "/products/hex-bolts",
  },
  {
    id: "2",
    title: "Wood Screws",
    category: "Screws",
    href: "/products/wood-screws",
  },
  {
    id: "3",
    title: "Lock Nuts",
    category: "Nuts",
    href: "/products/lock-nuts",
  },
  {
    id: "4",
    title: "Flat Washers",
    category: "Washers",
    href: "/products/flat-washers",
  },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="font-sans w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Close search"
            >
              <FiX />
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto p-4">
          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.href}
                  onClick={onClose}
                  className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="font-heading font-medium text-gray-900">
                    {result.title}
                  </div>
                  <div className="font-sans text-sm text-gray-500">
                    {result.category}
                  </div>
                </Link>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="font-sans text-center text-gray-500 py-8">
              No results found for &ldquo;{searchQuery}&rdquo;
            </div>
          ) : (
            <div className="font-sans text-center text-gray-500 py-8">
              Start typing to search products
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
