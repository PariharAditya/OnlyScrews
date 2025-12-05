import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="block mb-4 sm:mb-6">
              <div className="flex flex-col space-y-2">
                <div className="relative w-[140px] h-[40px] sm:w-[160px] sm:h-[45px] md:w-[180px] md:h-[50px]">
                  <Image
                    src="/SB.jpg"
                    alt="Screw Bazar Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
            <p className="font-sans text-sm mb-6">
            Engineered Fasteners for Unmatched Performance
            </p>
            <div className="space-y-2 text-sm font-sans">
              <p className="text-blue-600">screwbazar@gmail.com</p>
              <p className="mt-4">1800-833-2218</p>
              <p className="text-sm text-gray-500">(9am-5pm)</p>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-heading font-medium mb-4">Links</h3>
            <ul className="space-y-2">

              <li>
                <Link
                  href="/products"
                  className="font-sans text-sm hover:text-gray-900 transition-colors"
                >
                  Products
                </Link>
              </li>

               <li>
                <Link
                  href="/about"
                  className="font-sans text-sm hover:text-gray-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-sans text-sm hover:text-gray-900 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              
              <li>
                <Link
                  href="/bulk-enquiry/"
                  className="font-sans text-sm hover:text-gray-900 transition-colors"
                >
                  Bulk/Custom Inquiry
                </Link>
              </li>

              <li>
                <Link
                  href="/contact/"
                  className="font-sans text-sm hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq/"
                  className="font-sans text-sm hover:text-gray-900 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-heading font-medium mb-4">Newsletter</h3>
            <p className="font-sans text-sm mb-4">
              Sign up to our newsletter to receive exclusive offers.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="E-mail"
                className="px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
              />
              <button className="font-heading bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-900 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-sans text-sm hover:text-gray-900">
              © {currentYear} - screwbazar.com
            </Link>
            
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}
