import { Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import { ErrorBoundary } from "../components/ErrorBoundary";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata = {
  title: "ScrewBazar - Buy Screws, Nuts, Bolts & Industrial Fasteners Online India",
  description:
    "Buy high-quality screws, nuts, bolts, washers, anchors & industrial fasteners online. Self-tapping screws, machine screws, nylon fasteners, PCB hardware. Fast delivery across India. Bulk orders available.",
  keywords: "screws, nuts, bolts, fasteners, industrial fasteners, self-tapping screws, machine screws, hex bolts, washers, anchors, nylon fasteners, PCB fasteners, buy screws online, fasteners India, hardware supplier",
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://screwbazar.com"),
  openGraph: {
    title: "ScrewBazar - Buy Screws, Nuts, Bolts & Industrial Fasteners Online",
    description: "India's trusted supplier for industrial fasteners, screws, nuts, bolts, washers & anchors. Fast delivery, bulk orders available.",
    url: "https://screwbazar.com",
    siteName: "ScrewBazar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://screwbazar.com/icon",
        width: 192,
        height: 192,
        alt: "ScrewBazar - Industrial Fasteners Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScrewBazar - Buy Screws, Nuts, Bolts & Industrial Fasteners",
    description: "India's trusted supplier for industrial fasteners. Fast delivery, bulk orders available.",
    images: ["https://screwbazar.com/icon"],
  },
  alternates: {
    canonical: "https://screwbazar.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "msapplication-TileColor": "#bcff1d",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ScrewBazar",
  },
};

export const viewport = {
  themeColor: "#1a5f7a",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://screwbazar.com/#organization",
        name: "ScrewBazar",
        url: "https://screwbazar.com",
        logo: {
          "@type": "ImageObject",
          url: "https://screwbazar.com/icon",
          width: 192,
          height: 192,
        },
        description:
          "Leading supplier of industrial fasteners, screws, nuts, bolts, washers, and anchors in India",
        sameAs: ["https://www.facebook.com/screwbazar", "https://www.instagram.com/screwbazar"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          telephone: "+91-89519-34668",
          url: "https://screwbazar.com/contact",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressLocality: "India",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://screwbazar.com/#localbusiness",
        name: "ScrewBazar - Industrial Fasteners",
        image: "https://screwbazar.com/icon",
        url: "https://screwbazar.com",
        telephone: "+91-89519-34668",
        description:
          "Your trusted partner for industrial fasteners, screws, nuts, bolts, washers, and anchors. Bulk orders with expert guidance.",
        priceRange: "₹₹",
        areaServed: "IN",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          telephone: "+91-89519-34668",
          contactOption: "TollFree",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://screwbazar.com/#website",
        url: "https://screwbazar.com",
        name: "ScrewBazar",
        description:
          "Industrial Fasteners & Hardware Supplier - Screws, Nuts, Bolts, Washers, Anchors",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://screwbazar.com/products?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Product",
        "@id": "https://screwbazar.com/products#fasteners",
        name: "Industrial Fasteners - Screws, Nuts & Bolts",
        description:
          "Wide selection of industrial-grade fasteners including screws, nuts, bolts, washers, and anchors. Fast delivery within 2 days.",
        image: "https://screwbazar.com/icon",
        brand: {
          "@type": "Brand",
          name: "ScrewBazar",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "10",
          highPrice: "10000",
          availability: "https://schema.org/InStock",
          url: "https://screwbazar.com/products",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "250",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${nunitoSans.variable} font-sans`}
      >
        <ErrorBoundary>
          <Navbar />
          <div>{children}</div>
          <WhatsAppButton />
        </ErrorBoundary>
      </body>
    </html>
  );
}
