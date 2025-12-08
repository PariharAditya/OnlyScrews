import { MetadataRoute } from 'next'

/**
 * Generate comprehensive schema.org structured data for ScrewBazar
 * This enables rich snippets, knowledge panels, and enhanced search results
 */

export function generateComprehensiveSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization Schema - Shows company info in search
      {
        '@type': 'Organization',
        '@id': 'https://screwbazar.com/#organization',
        name: 'ScrewBazar',
        alternateName: 'Screw Bazar',
        url: 'https://screwbazar.com',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://screwbazar.com/#logo',
          url: 'https://screwbazar.com/apple-touch-icon.png',
          width: 180,
          height: 180,
          caption: 'ScrewBazar Logo',
        },
        image: {
          '@id': 'https://screwbazar.com/#logo',
        },
        description:
          'ScrewBazar is India\'s leading supplier of industrial fasteners including screws, nuts, bolts, washers, and anchors with fast delivery and bulk order support.',
        sameAs: [
          'https://www.facebook.com/screwbazar',
          'https://www.linkedin.com/company/screwbazar',
          'https://www.instagram.com/screwbazar',
          'https://twitter.com/screwbazar',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+91-XXXXXXXXXX',
            email: 'support@screwbazar.com',
            areaServed: 'IN',
            availableLanguage: ['en', 'hi'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'Sales',
            telephone: '+91-XXXXXXXXXX',
            email: 'sales@screwbazar.com',
            areaServed: 'IN',
          },
        ],
      },

      // Local Business Schema - Shows on Google Maps and local search
      {
        '@type': 'LocalBusiness',
        '@id': 'https://screwbazar.com/#localbusiness',
        name: 'ScrewBazar',
        image: 'https://screwbazar.com/apple-touch-icon.png',
        url: 'https://screwbazar.com',
        telephone: '+91-XXXXXXXXXX',
        email: 'support@screwbazar.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Your Street Address',
          addressLocality: 'Your City',
          addressRegion: 'State',
          postalCode: 'XXXXXX',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 'YOUR_LATITUDE',
          longitude: 'YOUR_LONGITUDE',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '10:00',
            closes: '17:00',
          },
        ],
        priceRange: '₹₹',
        // Aggregate ratings if you have reviews
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '245',
          bestRating: '5',
          worstRating: '1',
        },
      },

      // WebSite Schema - Enables site search feature
      {
        '@type': 'WebSite',
        '@id': 'https://screwbazar.com/#website',
        url: 'https://screwbazar.com',
        name: 'ScrewBazar',
        description: 'Buy industrial fasteners, screws, nuts, bolts, washers, and anchors online',
        publisher: {
          '@id': 'https://screwbazar.com/#organization',
        },
        // Site search support in Google Search Box
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://screwbazar.com/products?search={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },

      // BreadcrumbList Schema - Shows breadcrumb navigation in search
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://screwbazar.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://screwbazar.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: 'https://screwbazar.com/products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Categories',
            item: 'https://screwbazar.com/category',
          },
        ],
      },
    ],
  }
}

// Product Collection Schema - Shows product categories in search
export function generateProductCollectionSchema() {
  const categories = [
    {
      name: 'Self-Tapping Screws',
      slug: 'self-tapping-screws',
      description: 'Premium self-tapping screws for metal, wood, and plastic applications',
      image: 'https://screwbazar.com/images/self-tapping-screws.jpg',
    },
    {
      name: 'Hex Bolts',
      slug: 'hex-bolts',
      description: 'Industrial grade hex bolts in stainless steel and zinc-plated finishes',
      image: 'https://screwbazar.com/images/hex-bolts.jpg',
    },
    {
      name: 'Nylon Fasteners',
      slug: 'nylon-fasteners',
      description: 'Lightweight nylon fasteners for electronics and insulation applications',
      image: 'https://screwbazar.com/images/nylon-fasteners.jpg',
    },
    {
      name: 'Washers',
      slug: 'washers',
      description: 'Flat, spring, and lock washers in various sizes and materials',
      image: 'https://screwbazar.com/images/washers.jpg',
    },
    {
      name: 'Anchors',
      slug: 'anchors',
      description: 'Wall anchors and expansion anchors for construction and DIY projects',
      image: 'https://screwbazar.com/images/anchors.jpg',
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://screwbazar.com/category#collection',
    name: 'ScrewBazar Product Categories',
    description: 'Browse our complete range of industrial fasteners and hardware',
    url: 'https://screwbazar.com/category',
    hasPart: categories.map((category, index) => ({
      '@type': 'Product',
      '@id': `https://screwbazar.com/category/${category.slug}#product`,
      position: index + 1,
      name: category.name,
      description: category.description,
      image: category.image,
      url: `https://screwbazar.com/category/${category.slug}`,
    })),
  }
}

// Rich Snippets for FAQPage - Shows FAQ in search results
export function generateFAQSchema() {
  const faqs = [
    {
      question: 'What is the delivery time?',
      answer: 'We offer fast delivery across India. Standard orders are delivered within 2-3 business days. Express delivery is available for urgent orders.',
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes, we offer attractive bulk discounts. For large quantities, please contact our sales team at sales@screwbazar.com for custom quotes.',
    },
    {
      question: 'What materials do you use?',
      answer: 'We provide fasteners in various materials including stainless steel, mild steel, zinc-plated, and nylon to suit different applications.',
    },
    {
      question: 'Is there a warranty on products?',
      answer: 'All our products are tested for quality. We provide customer satisfaction guarantee and accept returns within 7 days of purchase.',
    },
    {
      question: 'How can I place a bulk order?',
      answer: 'For bulk orders, visit our Bulk Enquiry page or contact our sales team. We provide customized solutions for large quantities.',
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://screwbazar.com/faq#faqpage',
    url: 'https://screwbazar.com/faq',
    name: 'ScrewBazar - Frequently Asked Questions',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Review/AggregateRating Schema - Shows star ratings in search
export function generateReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    '@id': 'https://screwbazar.com/#rating',
    name: 'ScrewBazar Customer Reviews',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '245',
    reviewCount: '245',
  }
}

// SiteLink Schema - Shows quick links in Google search
export function generateSiteLinkSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://screwbazar.com',
    potentialAction: [
      {
        '@type': 'BuyAction',
        target: 'https://screwbazar.com/products/self-tapping-screws',
      },
      {
        '@type': 'BuyAction',
        target: 'https://screwbazar.com/products/hex-bolts',
      },
      {
        '@type': 'ContactAction',
        target: 'https://screwbazar.com/contact',
      },
      {
        '@type': 'SearchAction',
        target: 'https://screwbazar.com/products?search={search_term}',
      },
    ],
  }
}
