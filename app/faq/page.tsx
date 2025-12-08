'use client';

import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Dynamically import the Index component
const FAQContent = dynamic(() => import('./client/pages/Index'), {
  ssr: false,
});

// Metadata for FAQ page
export const metadata: Metadata = {
  title: 'FAQ - ScrewBazar | Frequently Asked Questions About Fasteners',
  description:
    'Answers to common questions about ScrewBazar fasteners, delivery, bulk orders, materials, warranty, and more.',
  keywords: 'fasteners faq, screw questions, bolt questions, fastener help, shipping, delivery, bulk orders',
  openGraph: {
    title: 'FAQ - ScrewBazar',
    description: 'Find answers to frequently asked questions about our products and services',
    type: 'website',
    url: 'https://screwbazar.com/faq',
  },
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: 'https://screwbazar.com/faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the delivery time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer fast delivery across India. Standard orders are delivered within 2-3 business days. Express delivery is available for urgent orders.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer bulk discounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer attractive bulk discounts. For large quantities, please contact our sales team at sales@screwbazar.com for custom quotes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What materials do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide fasteners in various materials including stainless steel, mild steel, zinc-plated, and nylon to suit different applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a warranty on products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All our products are tested for quality. We provide customer satisfaction guarantee and accept returns within 7 days of purchase.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I place a bulk order?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For bulk orders, visit our Bulk Enquiry page or contact our sales team. We provide customized solutions for large quantities.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent />
    </>
  );
}
