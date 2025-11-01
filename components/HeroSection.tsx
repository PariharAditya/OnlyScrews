'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/products/1-Photoroom.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen text-white px-4">
      
        
        {/* Buttons positioned at bottom */}
        {/* Buttons Container */}
        <div className="absolute" style={{ left: '62.5%', bottom: '10%' }}>
          <Link
            href="/shop"
            className="bg-green-600 hover:bg-green-700 text-white font-sans font-semibold px-8 py-2.5 rounded-lg transition-colors duration-300 text-base inline-block mr-10"
            style={{ minWidth: '160px', textAlign: 'center' }}
          >
            View All
          </Link>
          <Link
            href="/bulk-enquiry"
            className="border-2 border-white hover:bg-white/20 text-white font-sans font-semibold px-8 py-2.5 rounded-lg transition-colors duration-300 text-base inline-block"
            style={{ minWidth: '160px', textAlign: 'center' }}
          >
            Inquire
          </Link>
        </div>
      </div>
    </section>
  );
}
