"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  { name: "Nylon Spacers", image: "/images/products/nylon-spacers.png" },
  { name: "Nylon Washers", image: "/images/products/nylon-washers.png" },
  { name: "Nylon Nuts", image: "/images/products/nylon-nuts.png" },
  { name: "Nylon Bolts", image: "/images/products/nylon-bolts.png" },
  {
    name: "Nylon Machine Screws",
    image: "/images/products/nylon-machine-screws.png",
  },
];

export default function NylonRangeSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Image - Extends beyond viewport with Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2F61feb74e32ed4195a4cbd55149a401bd%2Fb66521bb13234db2b75617a0f01640df"
          alt="Nylon Range Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="w-full h-full opacity-120 scale-110"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header - Left Aligned */}
        <div className="text-left mb-12 md:mb-16 max-w-4xl">
          <h1
            className="text-black mb-6"
            style={{ font: "400 70px / 1.1 Montserrat, sans-serif" }}
          >
            Introducing Nylon Range
          </h1>
          <h2
            className="text-gray-900 mb-6"
            style={{ font: "600 24px / 32px Montserrat, sans-serif" }}
          >
            Strong, Lightweight, and Durable for Demanding Application
          </h2>
          <div
            className="w-full border-t-2 border-black"
            style={{ marginBottom: "32px" }}
          ></div>
          <p
            className="text-gray-700 leading-relaxed font-normal text-lg"
            style={{
              fontFamily: '"Nunito Sans", sans-serif',
              lineHeight: "1.8",
            }}
          >
            Our Nylon Fastener Range offers exceptional mechanical strength with
            minimal weight, making it ideal for high-performance industrial and
            electrical environments. Resistant to corrosion, moisture, and
            vibration, these components — including nylon spacers, nuts, bolts,
            washers, and machine screws — deliver long-lasting reliability where
            metal fasteners may fail. Perfect for precision assemblies and
            non-conductive applications.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-12 md:mt-16">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="relative bg-black rounded-3xl p-8 md:p-10 aspect-square flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="object-contain w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#c4ff0e] text-center py-4 px-4">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
