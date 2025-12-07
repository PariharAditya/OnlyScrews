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
  title: "ScrewBazar - Industrial Fasteners & Hardware Supplier",
  description:
    "Your trusted partner for industrial fasteners, screws, nuts, bolts, washers, and anchors. Bulk orders with expert guidance.",
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://screwbazar.com"),
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
