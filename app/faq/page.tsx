'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Index component
const FAQContent = dynamic(() => import('./client/pages/Index'), {
  ssr: false,
});

export default function FAQPage() {
  return <FAQContent />;
}
