"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const categories = [
  { name: "Bolts", image: "/images/categories/bolts.png" },
  { name: "Machine Screws", image: "/images/categories/machine-screws.png" },
  {
    name: "Clinching Fasteners",
    image: "/images/categories/clinching-fasteners.png",
  },
  { name: "Allen Screws", image: "/images/categories/allen-screws.png" },
  { name: "Washers", image: "/images/Washers.png" },
  { name: "Nylon", image: "/images/categories/nylon.png" },
  { name: "Nuts", image: "/images/categories/nuts.png" },
  { name: "PCB Fasteners", image: "/images/categories/pcb-fasteners.png" },
];

export default function CategoriesSection() {
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
          transform: `translateY(${scrollY * 0.25}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2F61feb74e32ed4195a4cbd55149a401bd%2Fb66521bb13234db2b75617a0f01640df"
          alt="Categories Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="w-full h-full opacity-240 scale-110"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          <h1
            className="hero-title"
            style={{
              color: "rgb(17, 24, 39)",
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: "48px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Your One-Stop Catalog for Every Fastening Need
          </h1>
          <p
            className="hero-subtitle mt-4 md:mt-6"
            style={{
              color: "rgb(75, 85, 99)",
              maxWidth: "768px",
              font: "400 20px / 28px Montserrat, sans-serif",
            }}
          >
            From bolts and screws to high-performance nylon fasteners — all
            under one roof.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
          {categories.map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="relative bg-[#2c3e50] rounded-3xl p-8 md:p-10 aspect-square flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden shadow-lg">
                {/* Category image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#c4ff0e] text-center py-4 px-4 rounded-b-3xl">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    {category.name}
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
