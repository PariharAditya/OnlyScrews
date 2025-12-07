// SEO utilities for generating structured data and meta tags

export interface ProductSEO {
  name: string
  description: string
  image: string
  sku?: string
  brand?: string
  category?: string
  price?: number
  currency?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  url: string
}

export function generateProductSchema(product: ProductSEO) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku || product.name.toLowerCase().replace(/\s+/g, '-'),
    brand: {
      '@type': 'Brand',
      name: product.brand || 'ScrewBazar',
    },
    category: product.category || 'Industrial Fasteners',
    offers: {
      '@type': 'Offer',
      price: product.price || 0,
      priceCurrency: product.currency || 'INR',
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      url: product.url,
      seller: {
        '@type': 'Organization',
        name: 'ScrewBazar',
      },
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://screwbazar.com/#organization',
    name: 'ScrewBazar',
    url: 'https://screwbazar.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://screwbazar.com/icon',
      width: 192,
      height: 192,
    },
    description: 'Leading supplier of industrial fasteners, screws, nuts, bolts, washers, and anchors in India',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      // Add your social media profiles here
      'https://www.facebook.com/screwbazar',
      'https://www.linkedin.com/company/screwbazar',
      'https://twitter.com/screwbazar',
    ],
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://screwbazar.com/#website',
    url: 'https://screwbazar.com',
    name: 'ScrewBazar',
    description: 'Buy high-quality screws, nuts, bolts, washers, anchors & industrial fasteners online in India',
    publisher: {
      '@id': 'https://screwbazar.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://screwbazar.com/products?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://screwbazar.com/#localbusiness',
    name: 'ScrewBazar',
    image: 'https://screwbazar.com/icon',
    url: 'https://screwbazar.com',
    telephone: '+91-XXXXXXXXXX', // Add your phone number
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      // Add complete address when available
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add latitude/longitude when available
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  }
}

// Generate comprehensive meta tags for product pages
export function generateProductMetaTags(product: ProductSEO) {
  return {
    title: `${product.name} - Buy Online | ScrewBazar`,
    description: product.description || `Buy ${product.name} online from ScrewBazar. High-quality industrial fasteners with fast delivery across India.`,
    keywords: `${product.name}, buy ${product.name}, ${product.category}, industrial fasteners, screws, nuts, bolts, India`,
    openGraph: {
      title: `${product.name} - ScrewBazar`,
      description: product.description,
      type: 'product',
      url: product.url,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      siteName: 'ScrewBazar',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - ScrewBazar`,
      description: product.description,
      images: [product.image],
    },
  }
}

// Generate meta tags for category pages
export function generateCategoryMetaTags(categoryName: string, categorySlug: string) {
  return {
    title: `${categoryName} - Buy Online | ScrewBazar`,
    description: `Browse our wide range of ${categoryName.toLowerCase()} available online. High-quality industrial fasteners with fast delivery across India. Bulk orders available.`,
    keywords: `${categoryName}, buy ${categoryName}, industrial fasteners, ${categorySlug}, India, online shopping`,
    openGraph: {
      title: `${categoryName} - ScrewBazar`,
      description: `Browse our wide range of ${categoryName.toLowerCase()}. High-quality products, fast delivery.`,
      type: 'website',
      url: `https://screwbazar.com/category/${categorySlug}`,
    },
  }
}
