"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import { productData } from "@/lib/productData";

// Valid slugs for torx self-tapping screws
const validSlugs = ["pan-torx-sts", "csk-torx-sts"];

export default function TorxSTSProductPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = use(params);
  
  // Check if slug is valid for this category
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
