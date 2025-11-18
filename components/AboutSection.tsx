'use client';

import { Users, Star, Target } from 'lucide-react';

const aboutItems = [
  {
    id: "team",
    title: "OUR TEAM",
    description:
      'Our team believes that "tougher proposition makes better performance easier." Every member contributes expertise, effort, and passion to make our unit strong and reliable.',
    icon: Users,
    color: "bg-[#bcff83]",
  },
  {
    id: "choose",
    title: "WHY CHOOSE US?",
    description:
      "The range of fasteners offered by us are in strictly in compliance with BS, IS & DIN certification as well as are known for corrosion resistance and high durability finish.",
    icon: Star,
    color: "bg-[#bcff83]",
  },
  {
    id: "mission",
    title: "OUR MISSION",
    description:
      "We strive to set new benchmarks of excellence in the fasteners industry through commitment, innovation, and precision.",
    icon: Target,
    color: "bg-[#bcff83]",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {aboutItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-start space-y-4">
                  <span className={`${item.color} text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider`}>
                    {item.title}
                  </span>
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
