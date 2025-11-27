"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProductHierarchy } from "@/types/product";
import { fetchProductHierarchy } from "@/services/products";

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
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMainCat, setExpandedMainCat] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcat, setExpandedSubcat] = useState<string | null>(null);

  useEffect(() => {
    async function loadHierarchy() {
      const data = await fetchProductHierarchy();
      setHierarchy(data);
    }
    loadHierarchy();
  }, []);

  // Fallback static menu if database is unavailable
  const fallbackMenu = [
    { label: "Screws", href: "/products/screws" },
    { label: "Bolts", href: "/products/bolts" },
    { label: "Anchors", href: "/products/anchors" },
    { label: "Nuts", href: "/products/nuts" },
    { label: "Washers", href: "/products/washers" },
    { label: "Spacers", href: "/products/spacers" },
    { label: "Stand-off", href: "/products/standoff" },
    { label: "Rivets and Dowels", href: "/products/rivets" },
  ];

  // Mobile version
  if (isMobile) {
    return (
      <div className="space-y-2">
        {hierarchy.map((mainCat) => {
          // Check if category should be flattened
          const shouldFlatten =
            mainCat.isFlat ||
            (mainCat.categories.length === 1 &&
              mainCat.categories[0].name === mainCat.mainCategory);

          // Get subcategories directly if flattened
          const subcategories = shouldFlatten
            ? mainCat.categories[0].subcategories
            : null;

          return (
            <div key={mainCat.slug} className="border-b border-gray-100 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href={`/products/${mainCat.slug}`}
                  className="text-gray-700 hover:text-purple-600 text-sm flex-1"
                  onClick={onItemClick}
                >
                  {mainCat.mainCategory}
                </Link>
                {(subcategories || mainCat.categories.length > 0) && (
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

              {expandedMainCat === mainCat.slug && (
                <div className="pl-4 mt-2 space-y-2">
                  {/* Flat structure - show subcategories directly */}
                  {shouldFlatten
                    ? subcategories?.map((subcat) => (
                        <Link
                          key={subcat.slug}
                          href={`/category/${subcat.slug}`}
                          className="block text-gray-600 hover:text-purple-600 text-sm py-1"
                          onClick={onItemClick}
                        >
                          {subcat.name}
                        </Link>
                      ))
                    : /* Hierarchical structure - show categories then subcategories */
                      mainCat.categories.map((category) => (
                        <div key={category.slug}>
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/products/${mainCat.slug}/${category.slug}`}
                              className="text-gray-600 hover:text-purple-600 text-sm flex-1"
                              onClick={onItemClick}
                            >
                              {category.name}
                            </Link>
                            {category.subcategories.length > 0 && (
                              <button
                                onClick={() =>
                                  setExpandedCategory(
                                    expandedCategory === category.slug
                                      ? null
                                      : category.slug
                                  )
                                }
                                className="p-1"
                              >
                                <ChevronRight
                                  className={`w-3 h-3 transition-transform ${
                                    expandedCategory === category.slug
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Subcategories */}
                          {expandedCategory === category.slug && (
                            <div className="pl-4 mt-2 space-y-2">
                              {category.subcategories.map((subcat) => (
                                <Link
                                  key={subcat.slug}
                                  href={`/category/${subcat.slug}`}
                                  className="block text-gray-500 hover:text-purple-600 text-xs py-1"
                                  onClick={onItemClick}
                                >
                                  {subcat.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                </div>
              )}
            </div>
          );
        })}

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
          setHoveredSubcategory(null);
        }, 100);
      }}
    >
      <Link
        href="/products"
        className="text-gray-700 hover:text-[#1a5f7a] transition-colors duration-300 font-medium"
      >
        Products
      </Link>

      {isOpen && (
        <div
          className="absolute left-0 top-full pt-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
        >
          <div className="w-64 bg-white shadow-xl rounded-lg border border-gray-200">
            <div className="py-2">
              {hierarchy.map((mainCat) => {
                const shouldFlatten =
                  mainCat.isFlat ||
                  (mainCat.categories.length === 1 &&
                    mainCat.categories[0].name === mainCat.mainCategory);

                const subcategories = shouldFlatten
                  ? mainCat.categories[0].subcategories
                  : null;

                return (
                  <div
                    key={mainCat.slug}
                    className="relative group/item"
                    onMouseEnter={() => {
                      setHoveredCategory(mainCat.slug);
                      setHoveredSubcategory(null);
                    }}
                  >
                    <Link
                      href={`/products/${mainCat.slug}`}
                      className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">
                        {mainCat.mainCategory}
                      </span>
                      {(subcategories || mainCat.categories.length > 0) && (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </Link>

                    {hoveredCategory === mainCat.slug && (
                      <div
                        className="absolute left-full top-0 pl-2 z-50"
                        onMouseEnter={() => setHoveredCategory(mainCat.slug)}
                      >
                        {/* Flat structure - show subcategories directly */}
                        {shouldFlatten ? (
                          <div className="w-72 bg-white shadow-xl rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
                            <div className="py-2">
                              {subcategories?.map((subcat) => (
                                <Link
                                  key={subcat.slug}
                                  href={`/category/${subcat.slug}`}
                                  className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                                >
                                  <span className="text-gray-700 text-sm">
                                    {subcat.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* Hierarchical structure - existing nested menu */
                          <div className="w-72 bg-white shadow-xl rounded-lg border border-gray-200">
                            <div className="py-2">
                              {mainCat.categories.map((category) => (
                                <div
                                  key={category.slug}
                                  className="relative group/subitem"
                                  onMouseEnter={() =>
                                    setHoveredSubcategory(category.slug)
                                  }
                                >
                                  <Link
                                    href={`/products/${mainCat.slug}/${category.slug}`}
                                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors"
                                  >
                                    <span className="text-gray-700 text-sm">
                                      {category.name}
                                    </span>
                                    {category.subcategories.length > 0 && (
                                      <ChevronRight className="w-3 h-3 text-gray-400" />
                                    )}
                                  </Link>

                                  {/* Third Level Menu */}
                                  {hoveredSubcategory === category.slug &&
                                    category.subcategories.length > 0 && (
                                      <div
                                        className="absolute left-full top-0 pl-2 z-50"
                                        onMouseEnter={() =>
                                          setHoveredSubcategory(category.slug)
                                        }
                                      >
                                        <div className="w-64 bg-white shadow-xl rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
                                          <div className="py-2">
                                            {category.subcategories.map(
                                              (subcat) => (
                                                <Link
                                                  key={subcat.slug}
                                                  href={`/category/${subcat.slug}`}
                                                  className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                                                >
                                                  <span className="text-gray-700 text-sm">
                                                    {subcat.name}
                                                  </span>
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

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
