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

  // Mobile accordion states
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

  // Mobile version (accordion style)
  if (isMobile) {
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
              {mainCat.categories.length > 0 && (
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

            {/* Categories */}
            {expandedMainCat === mainCat.slug && (
              <div className="pl-4 mt-2 space-y-2">
                {mainCat.categories.map((category) => (
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
                          aria-label={`Toggle ${category.name} submenu`}
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
                          <div key={subcat.slug}>
                            <div className="flex items-center justify-between">
                              <Link
                                href={`/products/${mainCat.slug}/${category.slug}/${subcat.slug}`}
                                className="text-gray-500 hover:text-purple-600 text-xs flex-1"
                                onClick={onItemClick}
                              >
                                {subcat.name}
                              </Link>
                              {subcat.types && subcat.types.length > 0 && (
                                <button
                                  onClick={() =>
                                    setExpandedSubcat(
                                      expandedSubcat === subcat.slug
                                        ? null
                                        : subcat.slug
                                    )
                                  }
                                  className="p-1"
                                  aria-label={`Toggle ${subcat.name} types`}
                                >
                                  <ChevronRight
                                    className={`w-3 h-3 transition-transform ${
                                      expandedSubcat === subcat.slug
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                  />
                                </button>
                              )}
                            </div>

                            {/* Types */}
                            {expandedSubcat === subcat.slug && subcat.types && (
                              <div className="pl-4 mt-1 space-y-1">
                                {subcat.types.map((type, idx) => (
                                  <Link
                                    key={idx}
                                    href={`/products/${mainCat.slug}/${
                                      category.slug
                                    }/${subcat.slug}?type=${type
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="block text-gray-400 hover:text-purple-600 text-xs"
                                    onClick={onItemClick}
                                  >
                                    • {type}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
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
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredCategory(null);
        setHoveredSubcategory(null);
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
      {isOpen && hierarchy.length > 0 && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-200 z-50">
          <div className="py-2">
            {hierarchy.map((mainCat) => (
              <div
                key={mainCat.slug}
                className="relative"
                onMouseEnter={() => setHoveredCategory(mainCat.slug)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Link
                  href={`/products/${mainCat.slug}`}
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-700 font-medium">
                    {mainCat.mainCategory}
                  </span>
                  {mainCat.categories.length > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </Link>

                {/* Subcategory Menu */}
                {hoveredCategory === mainCat.slug &&
                  mainCat.categories.length > 0 && (
                    <div className="absolute left-full top-0 ml-1 w-72 bg-white shadow-xl rounded-lg border border-gray-200">
                      <div className="py-2">
                        {mainCat.categories.map((category) => (
                          <div
                            key={category.slug}
                            className="relative"
                            onMouseEnter={() =>
                              setHoveredSubcategory(category.slug)
                            }
                            onMouseLeave={() => setHoveredSubcategory(null)}
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
                                <div className="absolute left-full top-0 ml-1 w-64 bg-white shadow-xl rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
                                  <div className="py-2">
                                    {category.subcategories.map((subcat) => (
                                      <div key={subcat.slug}>
                                        <Link
                                          href={`/products/${mainCat.slug}/${category.slug}/${subcat.slug}`}
                                          className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                                        >
                                          <span className="text-gray-700 text-sm font-medium">
                                            {subcat.name}
                                          </span>
                                        </Link>

                                        {/* Types (if any) */}
                                        {subcat.types &&
                                          subcat.types.length > 0 && (
                                            <div className="pl-6 pb-2">
                                              {subcat.types.map((type, idx) => (
                                                <Link
                                                  key={idx}
                                                  href={`/products/${
                                                    mainCat.slug
                                                  }/${category.slug}/${
                                                    subcat.slug
                                                  }?type=${type
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")}`}
                                                  className="block px-4 py-1.5 hover:bg-gray-50 transition-colors"
                                                >
                                                  <span className="text-gray-600 text-xs">
                                                    • {type}
                                                  </span>
                                                </Link>
                                              ))}
                                            </div>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
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
      )}
    </div>
  );
}
