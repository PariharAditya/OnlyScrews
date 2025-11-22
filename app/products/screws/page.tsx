"use client";

import dynamic from 'next/dynamic';

// Dynamically import the screws Index component from the screws folder with no SSR
const ScrewsIndex = dynamic(
  () => import('../../screws/client/pages/Index'),
  { ssr: false }
);

export default function ScrewsPage() {
  return (
    <div className="pt-[44px]">
      <ScrewsIndex />
    </div>
  );
}
