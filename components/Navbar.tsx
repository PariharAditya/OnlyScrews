"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiUser, FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";
import ProductDropdown from "./ProductDropdown";

interface NavLink {
  href: string;
  label: string;
  isDropdown?: boolean;
}

const mainLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", isDropdown: true },
  { href: "/bulk-enquiry", label: "Bulk/Custom Inquiry" },
  { href: "/sign-in", label: "Login" },
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
              {mainLinks.map((link) =>
                link.isDropdown ? (
                  <ProductDropdown key={link.href} />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
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
                href="/sign-in"
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
            <div key={link.href}>
              {link.isDropdown ? (
                <div>
                  <button
                    onClick={() =>
                      setHoveredMenu(
                        hoveredMenu === link.label ? null : link.label
                      )
                    }
                    className="font-sans text-gray-700 hover:text-purple-600 font-medium flex items-center justify-between w-full"
                  >
                    {link.label}
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
                  {hoveredMenu === link.label && (
                    <div className="mt-2">
                      <ProductDropdown
                        isMobile
                        onItemClick={() => setIsOpen(false)}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="font-sans text-gray-700 hover:text-purple-600 font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
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
