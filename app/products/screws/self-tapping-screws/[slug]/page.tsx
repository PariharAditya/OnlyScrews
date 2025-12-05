"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import { productData } from "@/lib/productData";

// Valid slugs for self-tapping screws (non-torx)
const validSlugs = [
  "pan-phillips-sts",
  "csk-phillips-sts", 
  "ww-pan-phillips-sts",
  "pan-b-type-sts",
  "csk-b-type-sts"
];

export default function SelfTappingScrewProductPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = use(params);
  
  // Check if slug is valid for this category (exclude torx-sts as it has its own route)
  if (!validSlugs.includes(slug)) {
    notFound();
  }
  
  const product = productData[slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail
        title={product.title}
        slug={slug}
        images={product.images}
        materials={product.materials}
        about={product.about}
        specifications={product.specifications}
      />
      <Footer />
    </>
  );
}
