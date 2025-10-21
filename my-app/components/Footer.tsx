import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Screw Bazar</h2>
                <p className="text-gray-300 font-medium">Industrial Fasteners & Hardware</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed font-medium">
              Your trusted partner for high-quality industrial fasteners, screws, nuts, bolts, 
              washers, and anchors. Specializing in bulk orders with expert guidance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 font-bold">📞</span>
                <span className="text-gray-200 font-semibold">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 font-bold">✉️</span>
                <span className="text-gray-200 font-semibold">info@screwbazar.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 font-bold">📍</span>
                <span className="text-gray-200 font-semibold">Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/bulk-enquiry" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Bulk Enquiry
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/categories/screws" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Screws
                </Link>
              </li>
              <li>
                <Link href="/categories/nuts" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Nuts
                </Link>
              </li>
              <li>
                <Link href="/categories/bolts" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Bolts
                </Link>
              </li>
              <li>
                <Link href="/categories/washers" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Washers
                </Link>
              </li>
              <li>
                <Link href="/categories/anchors" className="text-gray-300 hover:text-white font-medium transition-colors text-lg">
                  Anchors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-semibold text-lg">
            © {currentYear} Screw Bazar. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-white font-medium transition-colors text-lg"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-gray-400 hover:text-white font-medium transition-colors text-lg"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
