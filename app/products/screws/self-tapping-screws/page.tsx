"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function SelfTappingScrewsPage() {
  const selfTappingScrews = [
    { title: "STS Pan Phillips", slug: "pan-phillips-sts", image: "/images/products/screws/self tapping screws/STS Pan (+).png" },
    { title: "STS CSK Phillips", slug: "csk-phillips-sts", image: "/images/products/screws/self tapping screws/STS CSK (+).png" },
    { title: "STS WW Pan Phillips", slug: "ww-pan-phillips-sts", image: "/images/products/screws/self tapping screws/STS WW Pan (+).png" },
    { title: "STS Pan B Type", slug: "pan-b-type-sts", image: "/images/products/screws/self tapping screws/STS Pan B type.png" },
    { title: "STS CSK B Type", slug: "csk-b-type-sts", image: "/images/products/screws/self tapping screws/STS CSK B Type.png" },
    { title: "Torx STS", slug: "torx-sts", href: "/products/screws/self-tapping-screws/torx-sts", image: "/images/products/screws/self tapping screws/Torx STS.png" },
  ];

  return (
    <div className=" pt-[54px]">
      <ProductCategoryLayout
        title="Self Tapping Screws"
        description="Self-tapping screws that create their own threads as they're driven into materials. Perfect for sheet metal, plastic, and wood applications with multiple drive options for different needs."
      >
        {selfTappingScrews.map((screw) => (
          <ProductCategoryCard
            key={screw.slug}
            title={screw.title}
            imageSrc={screw.image}
            href={screw.href ?? `/category/${screw.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
