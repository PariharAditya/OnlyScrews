'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Index component
const AboutContent = dynamic(() => import('./client/pages/Index'), {
  ssr: false,
});

export default function AboutPage() {
  return <AboutContent />;
}