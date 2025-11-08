'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Contact component
const ContactContent = dynamic(() => import('./client/pages/Contact'), {
  ssr: false,
});

export default function ContactPage() {
  return <ContactContent />;
}
