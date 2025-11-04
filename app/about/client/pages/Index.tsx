import { useState } from "react";
import Carousel from "@/components/carousel/Carousel";
import { TeamIcon, CheckIcon, MissionIcon } from "@/components/carousel/Icons";
import type { CarouselSlide } from "@/components/carousel/Carousel";

const defaultSlides: CarouselSlide[] = [
  {
    id: "team",
    title: "OUR TEAM",
    description:
      'Our team believes that "tougher proposition makes better performance easier." Every member contributes expertise, effort, and passion to make our unit strong and reliable.',
    icon: <TeamIcon />,
  },
  {
    id: "choose",
    title: "WHY CHOOSE US?",
    description:
      "The range of fasteners offered by us are in strictly in compliance with BS, IS & DIN certification as well as are known for corrosion resistance and high durability finish.",
    icon: <CheckIcon />,
  },
  {
    id: "mission",
    title: "OUR MISSION",
    description:
      "We strive to set new benchmarks of excellence in the fasteners industry through commitment, innovation, and precision.",
    icon: <MissionIcon />,
  },
  {
    id: "team-2",
    title: "QUALITY ASSURANCE",
    description:
      "Every fastener undergoes rigorous quality testing to ensure it meets our high standards and customer expectations.",
    icon: <TeamIcon />,
  },
  {
    id: "innovation",
    title: "INNOVATION",
    description:
      "We continuously invest in research and development to bring cutting-edge fastening solutions to the market.",
    icon: <CheckIcon />,
  },
];

export default function Index() {
  const [slides, setSlides] = useState<CarouselSlide[]>(defaultSlides);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const handleEditSlide = (index: number, field: "title" | "description", value: string) => {
    const newSlides = [...slides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    setSlides(newSlides);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full px-0 py-8 md:py-16">
        {/* Carousel Component */}
        <Carousel
          slides={slides}
          autoPlay={false}
          onSlideChange={handleSlideChange}
        />

        {/* Edit Panel */}
        {false && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-lime">
                Slide {currentSlideIndex + 1}
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={slides[currentSlideIndex]?.title || ""}
                    onChange={(e) =>
                      handleEditSlide(currentSlideIndex, "title", e.target.value)
                    }
                    className="w-full px-4 py-2 rounded-lg bg-dark-card border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-lime"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Description
                  </label>
                  <textarea
                    value={slides[currentSlideIndex]?.description || ""}
                    onChange={(e) =>
                      handleEditSlide(
                        currentSlideIndex,
                        "description",
                        e.target.value
                      )
                    }
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-dark-card border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-lime resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Slide Preview */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-lime">Preview</h3>
              <div className="bg-dark-card/80 rounded-lg p-8 border border-white/10">
                <div className="inline-block bg-lime text-black rounded-full px-4 py-2 mb-6 font-bold text-sm">
                  {slides[currentSlideIndex]?.title}
                </div>
                <div className="w-16 h-16 mb-6 text-white/70">
                  {currentSlideIndex === 0 && <TeamIcon />}
                  {currentSlideIndex === 1 && <CheckIcon />}
                  {currentSlideIndex === 2 && <MissionIcon />}
                  {currentSlideIndex === 3 && <TeamIcon />}
                  {currentSlideIndex === 4 && <CheckIcon />}
                </div>
                <p className="text-white/80 leading-relaxed">
                  {slides[currentSlideIndex]?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Slides List */}
        {isEditing && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-lime">All Slides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`p-4 rounded-lg text-left transition-all ${
                    currentSlideIndex === idx
                      ? "bg-lime text-black"
                      : "bg-dark-card border border-white/20 text-white hover:border-lime/50"
                  }`}
                >
                  <p className="font-bold">{slide.title}</p>
                  <p
                    className={`text-sm mt-2 ${
                      currentSlideIndex === idx
                        ? "text-black/70"
                        : "text-white/60"
                    }`}
                  >
                    {slide.description.substring(0, 60)}...
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
