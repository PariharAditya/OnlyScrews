"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/products/1.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen text-white px-4 sm:px-6 lg:px-8">
        {/* Buttons Container - Responsive */}
        <div className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start sm:ml-[52%] max-w-md">
          <Link
            href="/products"
            className="bg-green-600 hover:bg-green-700 text-white font-sans font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All
          </Link>
          <Link
            href="/bulk-enquiry"
            className="border-2 border-white hover:bg-white/20 text-white font-sans font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Inquire
          </Link>
        </div>
      </div>
    </section>
  );
}
