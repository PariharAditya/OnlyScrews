"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function TorxSTSPage() {
  const torxSTS = [
    { title: "Pan Torx STS", slug: "pan-torx-sts", image: "/images/products/screws/self tapping screws/Pan Torx Self Tapping Screw.png" },
    { title: "CSK Torx STS", slug: "csk-torx-sts", image: "/images/products/screws/self tapping screws/CSK Torx STS.png" },
  ];

  return (
    <div className="-mt-[144px] pt-[54px]">
      <ProductCategoryLayout
        title="Torx STS"
        description="Torx self-tapping screws offering superior torque transfer and reduced cam-out. Available in pan head and countersunk configurations for various fastening applications."
      >
        {torxSTS.map((screw) => (
          <ProductCategoryCard
            key={screw.slug}
            title={screw.title}
            imageSrc={screw.image}
            href={`/category/${screw.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
