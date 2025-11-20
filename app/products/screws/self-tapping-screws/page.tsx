"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function SelfTappingScrewsPage() {
  const selfTappingScrews = [
    { title: "Slotted STS", slug: "slotted-sts", image: "/images/products/screws/self tapping screws/slotted sts.png" },
    { title: "Phillip STS", slug: "phillip-sts", image: "/images/products/screws/self tapping screws/Phillips STS.png" },
    { title: "Hex STS", slug: "hex-sts", image: "/images/products/screws/self tapping screws/Hex sts.png" },
    { title: "Allen STS", slug: "allen-sts", image: "/images/products/screws/self tapping screws/Allen STS.png" },
    { title: "Torx STS", slug: "pan-torx-sts", image: "/images/products/screws/self tapping screws/Torx STS.png" },
  ];

  return (
    <div className="-mt-[144px] pt-[54px]">
      <ProductCategoryLayout
        title="Self Tapping Screws"
        description="Self-tapping screws that create their own threads as they're driven into materials. Perfect for sheet metal, plastic, and wood applications with multiple drive options for different needs."
      >
        {selfTappingScrews.map((screw) => (
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
