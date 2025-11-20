"use client";

import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import { productData } from "@/lib/productData";

export default function CategoryPage({ params }: Readonly<{ params: { slug: string } }>) {
  const product = productData[params.slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail
        title={product.title}
        images={product.images}
        materials={product.materials}
        about={product.about}
        specifications={product.specifications}
      />
      <Footer />
    </>
  );
}
