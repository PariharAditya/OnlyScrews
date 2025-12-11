"use client";

import { useState } from "react";
import Carousel from "./client/components/carousel/Carousel";
import { TeamIcon, CheckIcon, MissionIcon } from "./client/components/carousel/Icons";
import type { CarouselSlide } from "./client/components/carousel/Carousel";

const defaultSlides: CarouselSlide[] = [
  { id: "team", title: "OUR TEAM", description: 'Our team believes that "tougher proposition makes better performance easier."', icon: <TeamIcon /> },
  { id: "choose", title: "WHY CHOOSE US?", description: "The range of fasteners we offer comply with BS, IS & DIN standards.", icon: <CheckIcon /> },
  { id: "mission", title: "OUR MISSION", description: "We set new benchmarks of excellence through commitment and precision.", icon: <MissionIcon /> },
];

export default function AboutPage() {
  const [slides] = useState<CarouselSlide[]>(defaultSlides);

  return (
    <div className="bg-black pt-8 pb-24">
      <Carousel slides={slides} autoPlay={true} autoPlayInterval={6000} />
    </div>
  );
}
