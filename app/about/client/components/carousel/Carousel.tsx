import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F61feb74e32ed4195a4cbd55149a401bd%2F3fa43ee4ea9347889ed7aef03b20ef61?format=webp&width=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-lime via-transparent to-transparent"></div>
        </div>

        <div className="relative px-4 py-12 md:px-12 md:py-16">
          {/* Slides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch auto-rows-fr">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center hover:scale-110 transition-transform"
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
                <div className="bg-dark-card/80 backdrop-blur-sm rounded-lg p-6 md:p-8 h-full border border-white/10 hover:border-lime/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                  {/* Title */}
                  <div
                    className="inline-block text-black rounded-full px-4 py-2 mb-6 font-bold text-sm md:text-base whitespace-nowrap"
                    style={{ backgroundColor: '#BCFF83' }}
                  >
                    {slide.title}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-6 text-white/70 flex items-center justify-center">
                    {slide.icon}
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Heading and Description */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Your One-Stop Catalog for Every Fastening Need
              </h2>
              <p className="text-white/70 text-sm md:text-base">
                From bolts and screws to high-performance nylon fasteners — all
                under one roof.
              </p>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  style={idx === currentIndex ? { backgroundColor: '#BCFF83' } : undefined}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* View All Button */}
            <a 
              href="/products"
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block text-center"
              style={{ borderColor: '#BCFF83', color: '#BCFF83' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#BCFF83';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#BCFF83';
              }}
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
