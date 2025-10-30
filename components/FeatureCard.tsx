'use client';

import { useState, ReactNode } from 'react';

interface FeatureCardProps {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <article
      className={`bg-white p-10 rounded-xl text-center ${
        isHovered 
          ? 'shadow-xl -translate-y-2' 
          : 'shadow-md translate-y-0'
      } transition-all duration-300 cursor-pointer outline-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsHovered(!isHovered);
        }
      }}
    >
      <div className="text-5xl mb-5">
        {icon}
      </div>
      <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="font-sans text-gray-600 leading-relaxed">
        {description}
      </p>
    </article>
  );
}
