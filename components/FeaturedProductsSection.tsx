"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  image: string;
  title: string;
  slug: string;
}

const FeaturedProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      image: "images/products/bolts/NYLON HEX BOLT.png",
      title: "Nylon Hex Bolt",
      slug: "nylon-hex-bolt",
    },
    {
      id: 2,
      image: "images/productdata/bolts/Hex bolt ss.png",
      title: "Stainless Steel Hex Bolt",
      slug: "hex-bolt",
    },
    {
      id: 3,
      image: "images/productdata/bolts/Flange bolt ss.png",
      title: "Flange Bolt",
      slug: "flange-bolt",
    },
    {
      id: 4,
      image: "images/productdata/bolts/wing bolt ss.png",
      title: "Wing Bolt",
      slug: "wing-bolt",
    },
    {
      id: 5,
      image: "images/productdata/bolts/dome bolt ss.png",
      title: "Dome Bolt",
      slug: "dome-bolt",
    },
    {
      id: 6,
      image: "images/productdata/bolts/carriage  bolt ss.png",
      title: "Carriage Bolt",
      slug: "carriage-bolt",
    },
    {
      id: 7,
      image: "images/productdata/screws/allen screws/Allen bolt ss.png",
      title: "SHCS Machine Screw",
      slug: "shcs-machine-screws",
    },
    {
      id: 8,
      image: "images/productdata/screws/allen screws/Allen csk bolt ms.png",
      title: "Allen CSK Machine Screw",
      slug: "csk-machine-screws",
    },
    {
      id: 9,
      image: "images/productdata/screws/allen screws/Button head bolt ms.png",
      title: "Button Head Machine Screw",
      slug: "bhcs-machine-screws",
    },
    {
      id: 10,
      image: "images/productdata/screws/allen screws/Grub ss.png",
      title: "GRUB Screw",
      slug: "grub-screws",
    },
    {
      id: 11,
      image: "images/productdata/screws/allen screws/JCB ss.png",
      title: "JCB Screw",
      slug: "jcb-screws",
    },
    {
      id: 12,
      image: "images/productdata/screws/allen screws/Pan Torx Machine Screw ss.png",
      title: "Pan Torx Machine Screw",
      slug: "pan-torx",
    },
    {
      id: 13,
      image: "images/productdata/screws/self tapping screws/STS CSK (+) ss.png",
      title: "STS CSK (+)",
      slug: "csk-phillips-sts",
    },
    {
      id: 14,
      image: "images/productdata/screws/self tapping screws/STS Pan (+) ss.png",
      title: "STS PAN (+)",
      slug: "pan-phillips-sts",
    },
    {
      id: 15,
      image: "images/productdata/screws/self tapping screws/STS CSK B Type ss.png",
      title: "STS CSK B Type",
      slug: "csk-b-type-sts",
    },
    {
      id: 16,
      image: "images/productdata/screws/self tapping screws/STS Pan B type ss.png",
      title: "STS PAN B Type",
      slug: "pan-b-type-sts",
    },
    {
      id: 17,
      image: "images/productdata/screws/self tapping screws/STS WW Pan (+) ss.png",
      title: "STS WW Pan (+)",
      slug: "ww-pan-phillips-sts",
    },
    {
      id: 18,
      image: "images/productdata/screws/self tapping screws/Pan Torx STS ss.png",
      title: "Pan Torx STS",
      slug: "pan-torx-sts",
    },
    {
      id: 19,
      image: "images/productdata/screws/self tapping screws/CSK Torx STS ss.png",
      title: "CSK Torx STS",
      slug: "csk-torx-sts",
    },
    {
      id: 20,
      image: "images/productdata/screws/self drilling screws/Pan Self-Drilling Screw ss.png",
      title: "Pan Self-Drilling Screws",
      slug: "pan-sds",
    },
    {
      id: 21,
      image: "images/productdata/screws/self drilling screws/Hex Self-Drilling Screw ss.png",
      title: "Hex Self-Drilling Screws",
      slug: "hex-sds",
    },
    {
      id: 22,
      image: "images/productdata/screws/self drilling screws/CSK Self-Drilling Screw ss.png",
      title: "CSK Self-Drilling Screws",
      slug: "csk-sds",
    },
    {
      id: 23,
      image: "images/productdata/nuts/Wafer Head Self-Drilling Screw ss.png",
      title: "Truss Phillips Head Self-Drilling Screws",
      slug: "truss-phillips-sds",
    },
    {
      id: 24,
      image: "images/productdata/screws/phillip machine screws/Pan head Phillips nylon.png",
      title: "Nylon Pan Head Phillips",
      slug: "pan-head-phillips",
    },
    {
      id: 25,
      image: "images/productdata/screws/phillip machine screws/CSK Head phillips nylon.png",
      title: "Nylon CSK Head Phillips",
      slug: "csk-head-phillips",
    },
    {
      id: 26,
      image: "images/productdata/spacers/Nylon ET Spacer.png",
      title: "Nylon ET Spacer",
      slug: "nylon-et-spacer",
    },
    {
      id: 27,
      image: "images/productdata/spacers/Nylon Hex Spacer.png",
      title: "Nylon Hex Spacer",
      slug: "nylon-hex-spacer",
    },
    {
      id: 28,
      image: "images/productdata/spacers/Nylon Round Plain Spacer.png",
      title: "Nylon Round Plain Spacer",
      slug: "nylon-round-plain-spacer",
    },
    {
      id: 29,
      image: "images/productdata/nuts/Hex Nut ss.png",
      title: "Stainless Steel Hex Nut",
      slug: "hex-nut",
    },
    {
      id: 30,
      image: "images/productdata/nuts/Hex Nut Nylon.png",
      title: "Nylon Hex Nut",
      slug: "hex-nut",
    },
    {
      id: 31,
      image: "images/productdata/nuts/Nyloc Nut ss.png",
      title: "Nyloc Nut",
      slug: "nyloc-nut",
    },
    {
      id: 32,
      image: "images/productdata/nuts/Flange Nut ss.png",
      title: "Flange Nut",
      slug: "flange-nut",
    },
    {
      id: 33,
      image: "images/productdata/washers/Spring Washer ss.png",
      title: "Spring Washer",
      slug: "spring-washer",
    },
    {
      id: 34,
      image: "images/productdata/washers/Plain Washer.png",
      title: "Plain Washer",
      slug: "plain-washer",
    },
    {
      id: 35,
      image: "images/productdata/bolts/Blind Stand Off ss.png",
      title: "Blind Stand Off",
      slug: "blind-stand-off",
    },
    {
      id: 36,
      image: "images/productdata/bolts/Through Hole Stand Off ss.png",
      title: "Through Hole Stand Off",
      slug: "through-hole-stand-off",
    },
    {
      id: 37,
      image: "images/productdata/rivets&dowels/Blind POP Rivet ss.png",
      title: "Blind POP Rivet",
      slug: "blind-pop-rivet",
    },
    {
      id: 38,
      image: "images/productdata/anchors/Wedge Anchor ss.png",
      title: "Wedge Anchor",
      slug: "wedge-anchor",
    },
    {
      id: 39,
      image: "images/productdata/anchors/Pin-Type Anchor ss.png",
      title: "Pin-Type Anchor",
      slug: "pin-type-anchor",
    },
    {
      id: 40,
      image: "images/productdata/screws/allen screws/CSK Torx Machine Screw ss.png",
      title: "CSK Torx Machine Screw",
      slug: "csk-torx",
    },
  ];

  // Group products into slides (8 products per slide - 2 rows of 4)
  const productsPerSlide = 8;
  const slides = [];
  for (let i = 0; i < products.length; i += productsPerSlide) {
    slides.push(products.slice(i, i + productsPerSlide));
  }

  const scrollPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance slideshow effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isPaused, slides.length]);

  return (
    <section
      className="w-full bg-black py-12 sm:py-16 md:py-20 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="flex-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#BCFF83] text-center">
            Our Featured Products
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-1.5 sm:p-2 border border-gray-700 rounded-md hover:border-[#BCFF83] hover:bg-[#BCFF83] hover:text-black transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-1.5 sm:p-2 border border-gray-700 rounded-md hover:border-[#BCFF83] hover:bg-[#BCFF83] hover:text-black transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slideProducts, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full px-2 sm:px-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {slideProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/category/${product.slug}`}
                      className="flex flex-col items-center group"
                    >
                      {/* Card container for image only (dark background to match grid) */}
                      <div className="w-full max-w-[280px] rounded-lg bg-black shadow-[0_6px_20px_rgba(0,0,0,0.6)] border border-neutral-800 overflow-hidden transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(188,255,131,0.3)] group-hover:border-[#BCFF83] group-hover:scale-105">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-[100px] sm:h-[130px] md:h-[160px] object-contain block bg-transparent"
                        />
                      </div>

                      {/* Text separate below the card */}
                      <div className="mt-2 sm:mt-3 px-2 sm:px-4 text-xs sm:text-sm md:text-[15px] text-white font-medium max-w-full text-center group-hover:text-[#BCFF83] transition-colors duration-300 line-clamp-2">
                        {product.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link 
            href="/products"
            className="inline-block px-8 py-3 border-2 border-[#BCFF83] bg-[#BCFF83] text-black rounded-lg font-semibold hover:bg-transparent hover:text-[#BCFF83] hover:scale-105 transition-all duration-300"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
