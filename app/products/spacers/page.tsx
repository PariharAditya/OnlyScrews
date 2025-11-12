"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const SPACER_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function SpacersPage() {
  const spacers = [
    { title: "Hex Spacer", slug: "hex-spacer" },
    { title: "Hex ET Spacer", slug: "hex-et-spacer" },
    { title: "Nylon Round Plain Spacer", slug: "nylon-round-plain-spacer" },
    { title: "Nylon Hex Spacer", slug: "nylon-hex-spacer" },
    { title: "Nylon ET Spacer", slug: "nylon-et-spacer" },
  ];

  return (
    <div className="-mt-[144px] pt-[44px]">
      <ProductCategoryLayout
        title="Spacers"
        description="Spacers maintain consistent gaps between parts, ensuring proper alignment and smooth assembly—perfect for electronics, machinery, and architectural applications requiring accuracy and balance."
      >
        {spacers.map((spacer) => (
          <ProductCategoryCard
            key={spacer.slug}
            title={spacer.title}
            imageSrc={SPACER_IMAGE}
            href={`/category/${spacer.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
