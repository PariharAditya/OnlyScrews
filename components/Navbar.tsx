'use client';
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import Logo from './Logo';
import { useCart } from '@/contexts/CartContext';

interface NavLink {
  href: string;
  label: string;
}

const mainLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/bulk-enquiry', label: 'Bulk/Custom Inquiry' },
  { href: '/login', label: 'Login' },
  { href: '/sell', label: 'Sell With Us!' },
  { href: '/track-order', label: 'Track your Order' },
  { href: '/e-invoice', label: 'E-Invoice' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      {/* Promo Banner */}
      <div className="bg-[#111111] text-white py-2 px-4 text-center relative">
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">&lt;</button>
        <p className="text-sm">Use code "SCREWME10" to get 10% discount on orders above Rs. 999/-</p>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">&gt;</button>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-800 hover:text-[#6A20CD] transition-colors text-[15px] ${
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
              <button className="hover:text-[#6A20CD]" aria-label="Search">
                <FiSearch className="w-[22px] h-[22px]" />
              </button>

              {/* Replace Clerk login with normal user icon link */}
              <Link href="/login" className="hover:text-[#6A20CD]" aria-label="Login">
                <FiUser className="w-[22px] h-[22px]" />
              </Link>

              <Link href="/cart" className="relative hover:text-[#6A20CD]">
                <FiShoppingCart className="w-[22px] h-[22px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#6A20CD] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

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
              className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
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
        <p className="text-sm">Cash on Delivery is available on orders above ₹100 and below ₹599</p>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">&gt;</button>
      </div>
    </nav>
  );
}
