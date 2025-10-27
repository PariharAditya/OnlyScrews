'use client';
import Link from "next/link";
import { useState } from "react";
import { FiUser, FiSearch } from 'react-icons/fi';
import Logo from './Logo';
import SearchModal from './SearchModal';

interface NavLink {
  href: string;
  label: string;
}

const mainLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/bulk-enquiry', label: 'Bulk/Custom Inquiry' },
  { href: '/login', label: 'Login' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact & FAQ' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      {/* Promo Banner */}
      <div className="bg-[#111111] text-white py-2 px-4 text-center relative">
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">&lt;</button>
        <p className="font-sans text-sm">Use code "SCREWME10" to get 10% discount on orders above Rs. 999/-</p>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">&gt;</button>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto py-6 px-4">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="pt-1">
              <Logo />
            </div>

            {/* Desktop Navigation - centered */}
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-gray-800 hover:text-[#6A20CD] transition-colors text-[15px] ${
                    link.label === 'Shop' ? 'flex items-center' : ''
                  }`}
                >
                  {link.label}
                  {link.label === 'Shop' && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <button 
                className="hover:text-[#6A20CD]" 
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <FiSearch className="w-[22px] h-[22px]" />
              </button>

              {/* Replace Clerk login with normal user icon link */}
              <Link href="/login" className="hover:text-[#6A20CD]" aria-label="Login">
                <FiUser className="w-[22px] h-[22px]" />
              </Link>

              {/* Search Modal */}
              <SearchModal 
                isOpen={isSearchOpen} 
                onClose={() => setIsSearchOpen(false)} 
              />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
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
          isOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Secondary Banner */}
      <div className="bg-black text-white py-2 px-4 text-center relative">
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">&lt;</button>
        <p className="font-sans text-sm">Cash on Delivery is available on orders above ₹100 and below ₹599</p>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">&gt;</button>
      </div>
    </nav>
  );
}
