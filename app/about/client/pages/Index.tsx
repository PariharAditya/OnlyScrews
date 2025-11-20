import { useState } from "react";
import Carousel from "@/components/carousel/Carousel";
import { TeamIcon, CheckIcon, MissionIcon } from "@/components/carousel/Icons";
import type { CarouselSlide } from "@/components/carousel/Carousel";

const defaultSlides: CarouselSlide[] = [
  { id: "team", title: "OUR TEAM", description: 'Our team believes that "tougher proposition makes better performance easier."', icon: <TeamIcon /> },
  { id: "choose", title: "WHY CHOOSE US?", description: "The range of fasteners we offer comply with BS, IS & DIN standards.", icon: <CheckIcon /> },
  { id: "mission", title: "OUR MISSION", description: "We set new benchmarks of excellence through commitment and precision.", icon: <MissionIcon /> },
];

export default function Index() {
  const [slides] = useState<CarouselSlide[]>(defaultSlides);

  return (
    <div className="bg-black pt-24 pb-24">
      <Carousel slides={slides} autoPlay={true} autoPlayInterval={6000} />
    </div>
  );
}
