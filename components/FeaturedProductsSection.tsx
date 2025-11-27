"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  image: string;
  title: string;
}

const FeaturedProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      image:
        "images/products/bolts/NYLON HEX BOLT.png",
      title: "Nylon Hex Bolt",
    },
    {
      id: 2,
      image:
        "images/productdata/bolts/Hex bolt ss.png",
      title:
        "Stainless Steel Hex Bolt",
    },
    {
      id: 3,
      image:
        "images/productdata/bolts/Flange bolt ss.png",
      title:
        "Flange Bolt",
    },
    {
      id: 4,
      image:
        "images/productdata/bolts/wing bolt ss.png",
      title: "Wing Bolt",
    },
    {
      id: 5,
      image:
        "images/productdata/bolts/dome bolt ss.png",
      title: "Dome Bolt",
    },
    {
      id: 6,
      image:
        "images/productdata/bolts/carriage  bolt ss.png",
      title: "Carriage Bolt",
    },
    {
      id: 7,
      image:
        "images/productdata/screws/allen screws/Allen bolt ss.png",
      title: "SHCS Machine Screw",
    },
    {
      id: 8,
      image:
        "images/productdata/screws/allen screws/Allen csk bolt ms.png",
      title: "Allen CSK Machine Screw",
    },
    {
      id: 9,
      image:
        "images/productdata/screws/allen screws/Button head bolt ms.png",
      title: "Button Head Machine Screw",
    },
    {
      id: 10,
      image:
        "images/productdata/screws/allen screws/Grub ss.png",
      title: "GRUB Screw",
    },

    
  {
      id: 11,
      image:
        "images/productdata/screws/allen screws/JCB ss.png",
      title: "JCB Screw",
    },

    {
      id: 12,
      image:
        "images/productdata/screws/allen screws/Pan Torx Machine Screw ss.png",
      title: "Pan Torx Machine Screw",
    },

    {
      id: 13,
      image:
        "images/productdata/screws/self tapping screws/STS CSK (+) ss.png",
      title: "STS CSK (+)",
    },

    {
      id: 14,
      image:
        "images/productdata/screws/self tapping screws/STS Pan (+) ss.png",
      title: "STS PAN (+)",
    },

    {
      id: 15,
      image:
        "images/productdata/screws/self tapping screws/STS CSK B Type ss.png",
      title: "STS CSK B Type",
    },

    {
      id: 16,
      image:
        "images/productdata/screws/self tapping screws/STS Pan B type ss.png",
      title: "STS PAN B Type",
    },

     {
      id: 17,
      image:
        "images/productdata/screws/self tapping screws/STS WW Pan (+) ss.png",
      title: "STS WW Pan (+)",
    },
     
    {
      id: 18,
      image:
        "images/productdata/screws/self tapping screws/Pan Torx STS ss.png",
      title: "Pan Torx STS",
    },
     
    {
      id: 19,
      image:
        "images/productdata/screws/self tapping screws/CSK Torx STS ss.png",
      title: "CSK Torx STS",
    },

    {
      id: 20,
      image:
        "images/productdata/screws/self drilling screws/Pan Self-Drilling Screw ss.png",
      title: "Pan Self-Drilling Screws",
    },

     {
      id: 21,
      image:
        "images/productdata/screws/self drilling screws/Hex Self-Drilling Screw ss.png",
      title: "Hex Self-Drilling Screws",
    },

    {
      id: 22,
      image:
        "images/productdata/screws/self drilling screws/CSK Self-Drilling Screw ss.png",
      title: "CSK Self-Drilling Screws",
    },

    {
      id: 23,
      image:
        "images/productdata/screws/self drilling screws/Hex Self-Drilling Screw ss.png",
      title: "Hex Self-Drilling Screws",
    },

    {
      id: 24,
      image:
        "images/productdata/screws/self drilling screws/Hex Self-Drilling Screw ss.png",
      title: "Hex Self-Drilling Screws",
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
        <div className="mb-8 md:mb-12 flex items-center justify-between">
          <h2 className="flex-1 text-4xl md:text-5xl font-bold text-[#BCFF83] text-center">
            Our Featured Products
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-2 border border-gray-700 rounded-md hover:border-[#BCFF83] hover:bg-[#BCFF83] hover:text-black transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 border border-gray-700 rounded-md hover:border-[#BCFF83] hover:bg-[#BCFF83] hover:text-black transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slideProducts, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {slideProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col items-center"
                    >
                      {/* Card container for image only (dark background to match grid) */}
                      <div className="w-[280px] rounded-lg bg-black shadow-[0_6px_20px_rgba(0,0,0,0.6)] border border-neutral-800 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-[160px] object-contain block bg-transparent"
                        />
                      </div>

                      {/* Text separate below the card */}
                      <div className="mt-3 px-4 text-[15px] text-white font-medium max-w-[280px] text-center">
                        {product.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="px-8 py-3 border-2 border-[#BCFF83] bg-[#BCFF83] text-black rounded-lg font-semibold hover:bg-transparent hover:text-[#BCFF83] transition-all duration-300">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
