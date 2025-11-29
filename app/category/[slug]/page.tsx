"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import { productData } from "@/lib/productData";

export default function CategoryPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = use(params);
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
