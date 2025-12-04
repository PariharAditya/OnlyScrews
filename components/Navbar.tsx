"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import Logo from './Logo';
import NavbarSearch from './NavbarSearch';
import CallButton from './CallButton';
import ProductDropdown from './ProductDropdown';

interface NavLink {
  href: string;
  label: string;
  isDropdown?: boolean;
  children?: { href: string; label: string; }[];
}

const mainLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { 
    href: '/products', 
    label: 'Products',
    isDropdown: true,
    children: [
      { href: '/products/screws', label: 'Screws' },
      { href: '/products/bolts', label: 'Bolts' },
      { href: '/products/anchors', label: 'Anchors' },
      { href: '/products/nuts', label: 'Nuts' },
      { href: '/products/washers', label: 'Washers' },
      { href: '/products/spacers', label: 'Spacers' },
      { href: '/products/standoff', label: 'Stand-off' },
      { href: '/products/rivets', label: 'Rivets and Dowels' },
    ]
  },
  { href: '/bulk-enquiry', label: 'Bulk/Custom Inquiry' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
  { 
    href: '/contact', 
    label: 'Contact & FAQs',
    isDropdown: true,
    children: [
      { href: '/contact', label: 'Contact Us' },
      { href: '/faq', label: 'FAQs' },
    ]
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [secondMessage, setSecondMessage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prev) => prev === 0 ? 1 : 0);
      setSecondMessage((prev) => prev === 0 ? 1 : 0);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white z-50 shadow-md">
      {/* Promo Banner */}
      <div className="bg-black text-white py-2 px-8 sm:px-12 text-center relative z-40">
        <button 
          onClick={() => setCurrentMessage(prev => prev === 0 ? 1 : 0)} 
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-800 rounded-full p-1 sm:p-1.5"
        >
          &lt;
        </button>
        <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out px-2">
          {currentMessage === 0 
            ? "Exclusive range of Nylon & Industrial Fasteners — Request a quote today 💡"
            : "Custom bulk orders & quotations available via WhatsApp and Call 📞"
          }
        </p>
        <button 
          onClick={() => setCurrentMessage(prev => prev === 0 ? 1 : 0)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-800 rounded-full p-1.5"
        >
          &gt;
        </button>
      </div>

      {/* Logo and Navigation */}
      <div className="border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[120px] h-[35px] sm:w-[150px] sm:h-[42px] md:w-[180px] md:h-[50px]">
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
                  link.label === 'Products' ? (
                    <ProductDropdown key={link.href} />
                  ) : (
                    <div key={link.href} className="relative group">
                      <button className="font-sans text-gray-700 hover:text-[#BCFF83] transition-colors">
                        {link.label}
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-[#BCFF83] hover:text-black transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-gray-700 hover:text-[#BCFF83] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right section: Search Bar (desktop) + Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Inline Search Bar (desktop only) */}
              <div className="hidden lg:block">
                <NavbarSearch />
              </div>

              {/* Mobile Menu Button (hidden on lg) */}
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
          {/* Mobile Search Bar */}
          <div className="pb-4 border-b border-gray-100">
            <NavbarSearch />
          </div>
          
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
                    className="font-sans text-gray-700 hover:text-[#BCFF83] font-medium flex items-center justify-between w-full"
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
                  className="font-sans text-gray-700 hover:text-[#BCFF83] font-medium block"
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
      <div className="bg-black text-white py-2 px-8 sm:px-12 text-center relative">
        <button 
          onClick={() => setSecondMessage(prev => prev === 0 ? 1 : 0)}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-800 rounded-full p-1 sm:p-1.5"
        >
          &lt;
        </button>
        <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out px-2">
          {secondMessage === 0 
            ? "Quick Quotation Support | Nationwide Delivery | Quality Fasteners"
            : "Explore. Inquire. Get Quotation — Fasteners Made Simple"
          }
        </p>
        <button 
          onClick={() => setSecondMessage(prev => prev === 0 ? 1 : 0)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-800 rounded-full p-1.5"
        >
          &gt;
        </button>
      </div>
      <CallButton />
    </nav>
  );
}
