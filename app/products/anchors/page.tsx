"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const ANCHOR_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function AnchorsPage() {
  const anchors = [
    { title: "Wedge Anchor", slug: "wedge-anchor" },
    { title: "Pin-Type Anchor", slug: "pin-type-anchor" },
    { title: "Tam Anchor", slug: "tam-anchor" },
    { title: "Taper Anchor", slug: "taper-anchor" },
    { title: "Sleeve Anchor", slug: "sleeve-anchor" },
    { title: "Shield Anchor", slug: "shield-anchor" },
    { title: "Drop-In Anchor", slug: "drop-in-anchor" },
  ];

  return (
    <div className="-mt-[144px] pt-[50px]">
      <ProductCategoryLayout
        title="Anchors"
        description="Anchors offer firm, reliable holding in concrete, brick, or drywall—designed to secure screws or bolts tightly for heavy-duty fixtures, installations, and structural applications."
      >
        {anchors.map((anchor) => (
          <ProductCategoryCard
            key={anchor.slug}
            title={anchor.title}
            imageSrc={ANCHOR_IMAGE}
            href={`/category/${anchor.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
