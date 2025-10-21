'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-[#1a5f7a] text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Your One-Stop Solution for Industrial Fasteners
          </h1>
          <p className="text-lg mb-8 text-gray-100">
            Discover our comprehensive range of high-quality fasteners for all your industrial needs. From standard to custom solutions, we've got you covered.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/products"
              className="bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              View Products
            </Link>
            <Link 
              href="/bulk-enquiry"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1a5f7a] transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/hero-fasteners.jpg"
              alt="Industrial Fasteners"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
