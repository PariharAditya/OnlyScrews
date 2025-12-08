'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Index component with ssr: false
const FAQContent = dynamic(() => import('./client/pages/Index'), {
  ssr: false,
});

export default function FAQClientWrapper() {
  return <FAQContent />;
}
