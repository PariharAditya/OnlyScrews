import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  onSlideChange?: (index: number) => void;
}

export default function Carousel({
  slides,
  autoPlay = false,
  autoPlayInterval = 5000,
  onSlideChange,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
    onSlideChange?.(nextIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
    onSlideChange?.(prevIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    onSlideChange?.(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const visibleSlides = [
    slides[currentIndex],
    slides[(currentIndex + 1) % slides.length],
    slides[(currentIndex + 2) % slides.length],
  ];

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div
        className="relative w-full overflow-hidden bg-black"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F61feb74e32ed4195a4cbd55149a401bd%2F3fa43ee4ea9347889ed7aef03b20ef61?format=webp&width=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c4ff0d] via-transparent to-transparent"></div>
        </div>

        <div className="relative px-6 py-12 md:px-16 lg:px-24 md:py-16">
          {/* Slides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch auto-rows-fr">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all flex items-center justify-center hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Visible Slides */}
            {visibleSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`transition-all duration-300 h-full ${
                  isTransitioning ? "opacity-75" : "opacity-100"
                }`}
              >
                <div className="bg-[#3a3a3a] backdrop-blur-sm rounded-2xl p-6 md:p-8 h-full border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10 relative">
                  {/* Title */}
                  <div
                    className="inline-block bg-[#c4ff0d] text-black rounded-full px-5 py-2 mb-6 font-bold text-sm md:text-base whitespace-nowrap uppercase tracking-wide"
                  >
                    {slide.title}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-6 text-white/90 flex items-center justify-center">
                    {slide.icon}
                  </div>

                  {/* Description */}
                  <p
                    className="text-white/90 text-sm md:text-base leading-relaxed"
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={handleNext}
              className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all flex items-center justify-center hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Heading and Description */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Your One-Stop Catalog for Every Fastening Need
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                From bolts and screws to high-performance nylon fasteners — all
                under one roof.
              </p>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 items-center">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-[#c4ff0d] w-8"
                      : "bg-white/30 hover:bg-white/50 w-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* View All Button */}
            <Link href="/products">
              <button className="px-8 md:px-10 py-3 rounded-full border-2 border-[#c4ff0d] text-[#c4ff0d] font-semibold hover:bg-[#c4ff0d] hover:text-black transition-all whitespace-nowrap text-sm md:text-base cursor-pointer">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
