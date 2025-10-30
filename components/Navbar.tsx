"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiUser, FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";

interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

const mainLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/screws", label: "Screws" },
      { href: "/products/bolts", label: "Bolts" },
      { href: "/products/anchor-bolts", label: "Anchors" },
      { href: "/products/nuts", label: "Nuts" },
      { href: "/products/washers", label: "Washers" },
      { href: "/products/spacers-standoffs", label: "Spacers" },
      { href: "/products/standoff", label: "Stand-off" },
      { href: "/products/rivets", label: "Rivets" },
    ],
  },
  { href: "/bulk-enquiry", label: "Bulk/Custom Inquiry" },
  { href: "/login", label: "Login" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact & FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      {/* Promo Banner */}
      <div className="bg-black text-white py-2 px-4 text-center relative z-40">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
          aria-label="Previous promo"
        >
          &lt;
        </button>
        <p className="font-sans text-sm">
          Use code{" "}
          <span className="font-mono font-bold">&ldquo;DEEZNUTS&rdquo;</span> to
          get 🤑 5% discount on orders above Rs. 499/-
        </p>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          aria-label="Next promo"
        >
          &gt;
        </button>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[180px] h-[50px]">
                <Image
                  src="/SB.jpg"
                  alt="Screw Bazar Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - centered */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative group py-4"
                  onMouseEnter={() => setHoveredMenu(link.label)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={link.href}
                    className="font-sans text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          hoveredMenu === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.children && hoveredMenu === link.label && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border border-gray-100 z-[70]">
                      <div className="py-2">
                        {link.children.map((child) => (
                          <div
                            key={child.href}
                            className="relative group/submenu"
                          >
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 flex items-center justify-between"
                            >
                              {child.label}
                              {child.children && (
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              )}
                            </Link>
                            {child.children && (
                              <div className="absolute left-full top-0 w-56 bg-white shadow-lg rounded-lg border border-gray-100 hidden group-hover/submenu:block z-[71]">
                                <div className="py-2">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.href}
                                      href={subChild.href}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                                    >
                                      {subChild.label}
                                    </Link>
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

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <button
                className="hover:text-purple-600"
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <FiSearch className="w-5 h-5" />
              </button>

              <Link
                href="/login"
                className="hover:text-purple-600"
                aria-label="Login"
              >
                <FiUser className="w-5 h-5" />
              </Link>

              {/* Search Modal */}
              <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
              />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {mainLinks.map((link) => (
            <div key={link.href} className="space-y-2">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  className="font-sans text-gray-700 hover:text-purple-600 font-medium"
                  onClick={() => !link.children && setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    onClick={() =>
                      setHoveredMenu(
                        hoveredMenu === link.label ? null : link.label
                      )
                    }
                    className="p-1"
                    aria-label={`Toggle ${link.label} submenu`}
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        hoveredMenu === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {link.children && hoveredMenu === link.label && (
                <div className="pl-4 space-y-2">
                  {link.children.map((child) => (
                    <div key={child.href} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={child.href}
                          className="font-sans text-gray-600 hover:text-purple-600 text-sm"
                          onClick={() => !child.children && setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                        {child.children && (
                          <button
                            onClick={() =>
                              setHoveredMenu(
                                hoveredMenu === child.label ? null : child.label
                              )
                            }
                            className="p-1"
                            aria-label={`Toggle ${child.label} submenu`}
                          >
                            <svg
                              className={`w-4 h-4 transform transition-transform ${
                                hoveredMenu === child.label ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                      {child.children && hoveredMenu === child.label && (
                        <div className="pl-4 space-y-2">
                          {child.children.map((subChild) => (
                            <Link
                              key={subChild.href}
                              href={subChild.href}
                              className="block font-sans text-gray-500 hover:text-purple-600 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {subChild.label}
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
      </div>

      {/* Secondary Banner */}
      <div className="bg-black text-white py-2 px-4 text-center relative">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
          aria-label="Previous promotion"
        >
          &lt;
        </button>
        <p className="font-sans text-sm">
          Free shipping on all orders above Rs.599😀
        </p>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          aria-label="Next promotion"
        >
          &gt;
        </button>
      </div>
    </nav>
  );
}
