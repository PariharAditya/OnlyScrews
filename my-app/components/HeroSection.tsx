'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface NavigationItem {
  name: string;
  href: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/categories' },
    { name: 'Bulk Enquiry', href: '/bulk-enquiry' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-black py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle size={14} />
                <span>info@screwbazar.com</span>
              </div>
            </div>
            <div className="text-sm">
              Serving Industrial Hubs Nationwide
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/SB.jpg" 
              alt="logo"    
              width={800} 
              height={800}
              className="w-auto h-20 lg:h-20 object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/bulk-enquiry"
              className="btn-secondary"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/bulk-enquiry"
                className="block btn-secondary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
