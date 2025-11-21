"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductHierarchy {
  mainCategory: string;
  slug: string;
  categories: {
    name: string;
    slug: string;
    subcategories: {
      name: string;
      slug: string;
    }[];
  }[];
}

interface ProductDropdownProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function ProductDropdown({
  isMobile = false,
  onItemClick,
}: ProductDropdownProps) {
  const [hierarchy, setHierarchy] = useState<ProductHierarchy[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMainCat, setExpandedMainCat] = useState<string | null>(null);

  useEffect(() => {
    async function loadHierarchy() {
      try {
        const res = await fetch("/api/products/hierarchy");
        const data = await res.json();
        if (data.success) {
          setHierarchy(data.data);
        }
      } catch (error) {
        console.error("Failed to load hierarchy:", error);
      }
    }
    loadHierarchy();
  }, []);

  const fallbackMenu = [
    { label: "Screws", href: "/products/screws" },
    { label: "Bolts", href: "/products/bolts" },
    { label: "Nuts", href: "/products/nuts" },
    { label: "Anchors", href: "/products/anchors" },
    { label: "Washers", href: "/products/washers" },
    { label: "Spacers", href: "/products/spacers" },
    { label: "Stand-Offs", href: "/products/stand-offs" },
    { label: "Rivets and Dowels", href: "/products/rivets" },
  ];

  // Mobile version (accordion style)
  if (isMobile) {
    if (hierarchy.length === 0) {
      return (
        <div className="space-y-2">
          {fallbackMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-purple-600 text-sm py-2"
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="block text-sm text-purple-600 hover:text-purple-700 font-medium pt-2"
            onClick={onItemClick}
          >
            View All Products →
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {hierarchy.map((mainCat) => (
          <div key={mainCat.slug} className="border-b border-gray-100 pb-2">
            <div className="flex items-center justify-between">
              <Link
                href={`/products/${mainCat.slug}`}
                className="text-gray-700 hover:text-purple-600 text-sm flex-1"
                onClick={onItemClick}
              >
                {mainCat.mainCategory}
              </Link>
              {mainCat.categories.length > 0 && mainCat.categories.some(cat => cat.subcategories.length > 0) && (
                <button
                  onClick={() =>
                    setExpandedMainCat(
                      expandedMainCat === mainCat.slug ? null : mainCat.slug
                    )
                  }
                  className="p-1"
                  aria-label={`Toggle ${mainCat.mainCategory} submenu`}
                >
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      expandedMainCat === mainCat.slug ? "rotate-90" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Items directly under main category */}
            {expandedMainCat === mainCat.slug && (
              <div className="pl-4 mt-2 space-y-1">
                {mainCat.categories.length === 1 && mainCat.categories[0].slug.endsWith('-items') ? (
                  // Flat structure: show items directly
                  mainCat.categories[0].subcategories.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/category/${item.slug}`}
                      className="block text-gray-600 hover:text-purple-600 text-sm py-1"
                      onClick={onItemClick}
                    >
                      {item.name}
                    </Link>
                  ))
                ) : (
                  // Hierarchical structure: show categories, then items
                  mainCat.categories.map((category) => (
                    <div key={category.slug} className="mb-3">
                      <div className="text-gray-700 font-medium text-sm mb-1">
                        {category.name}
                      </div>
                      <div className="pl-3 space-y-1">
                        {category.subcategories.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/category/${item.slug}`}
                            className="block text-gray-600 hover:text-purple-600 text-xs py-1"
                            onClick={onItemClick}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}

        <Link
          href="/products"
          className="block text-sm text-purple-600 hover:text-purple-700 font-medium pt-2"
          onClick={onItemClick}
        >
          View All Products →
        </Link>
      </div>
    );
  }

  // Desktop version (hover dropdowns)
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          setIsOpen(false);
          setHoveredCategory(null);
        }, 100);
      }}
    >
      {/* Main Products Link */}
      <Link
        href="/products"
        className="text-gray-700 hover:text-[#1a5f7a] transition-colors duration-300 font-medium"
      >
        Products
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 top-full pt-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
        >
          <div className="w-64 bg-white shadow-xl rounded-lg border border-gray-200">
            <div className="py-2">
              {hierarchy.length === 0 ? (
                <>
                  {fallbackMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  {hierarchy.map((mainCat) => (
                    <div
                      key={mainCat.slug}
                      className="relative group/item"
                      onMouseEnter={() => setHoveredCategory(mainCat.slug)}
                    >
                      <Link
                        href={`/products/${mainCat.slug}`}
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-700 font-medium">
                          {mainCat.mainCategory}
                        </span>
                        {mainCat.categories.length > 0 && mainCat.categories.some(cat => cat.subcategories.length > 0) && (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                      </Link>

                      {/* Items submenu */}
                      {hoveredCategory === mainCat.slug &&
                        mainCat.categories.length > 0 && (
                          <div
                            className="absolute left-full top-0 pl-2 z-50"
                            onMouseEnter={() =>
                              setHoveredCategory(mainCat.slug)
                            }
                          >
                            <div className="w-72 bg-white shadow-xl rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
                              <div className="py-2">
                                {mainCat.categories.length === 1 && mainCat.categories[0].slug.endsWith('-items') ? (
                                  // Flat structure: show items directly
                                  mainCat.categories[0].subcategories.map((item) => (
                                    <Link
                                      key={item.slug}
                                      href={`/category/${item.slug}`}
                                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                                    >
                                      <span className="text-gray-700 text-sm">
                                        {item.name}
                                      </span>
                                    </Link>
                                  ))
                                ) : (
                                  // Hierarchical structure: show categories with items
                                  mainCat.categories.map((category) => (
                                    <div key={category.slug} className="mb-2">
                                      <div className="px-4 py-2 bg-gray-50">
                                        <span className="text-gray-900 font-semibold text-sm">
                                          {category.name}
                                        </span>
                                      </div>
                                      {category.subcategories.map((item) => (
                                        <Link
                                          key={item.slug}
                                          href={`/category/${item.slug}`}
                                          className="block px-6 py-2 hover:bg-gray-50 transition-colors"
                                        >
                                          <span className="text-gray-700 text-sm">
                                            {item.name}
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  ))
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* View All Products Link */}
            <div className="border-t border-gray-200 px-4 py-3">
              <Link
                href="/products"
                className="text-sm text-[#1a5f7a] hover:text-[#134b61] font-medium"
              >
                View All Products →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
