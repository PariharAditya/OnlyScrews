"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";
import { image } from "framer-motion/dist/types/client";

const ANCHOR_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function AnchorsPage() {
  const anchors = [
    { title: "Wedge Anchor", slug: "wedge-anchor", image : "/images/products/anchors/Wedge Anchor.png" },
    { title: "Pin-Type Anchor", slug: "pin-type-anchor" , image : "/images/products/anchors/Pin-Type Anchor.png" },
    { title: "Tam Anchor", slug: "tam-anchor" , image : "/images/products/anchors/Tam Anchor.png" },
    { title: "Taper Anchor", slug: "taper-anchor" , image : "/images/products/anchors/Taper Anchor.png" },
    { title: "Sleeve Anchor", slug: "sleeve-anchor" , image : "/images/products/anchors/Sleeve Anchor.png" },
    { title: "Shield Anchor", slug: "shield-anchor" , image : "/images/products/anchors/Shield Anchor.png" },
    { title: "Drop-In Anchor", slug: "drop-in-anchor", image : "/images/products/anchors/Drop-In Anchor.png" },
  ];

  return (
    <div className=" pt-[50px]">
      <ProductCategoryLayout
        title="Anchors"
        description="Anchors offer firm, reliable holding in concrete, brick, or drywall—designed to secure screws or bolts tightly for heavy-duty fixtures, installations, and structural applications."
      >
        {anchors.map((anchor) => (
          <ProductCategoryCard
            key={anchor.slug}
            title={anchor.title}
            imageSrc={anchor.image}
            href={`/category/${anchor.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
