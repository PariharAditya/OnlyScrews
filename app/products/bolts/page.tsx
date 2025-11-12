"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const BOLT_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function BoltsPage() {
  const bolts = [
    { title: "Hex Bolt", slug: "hex-bolt" },
    { title: "Dome Bolt", slug: "dome-bolt" },
    { title: "Flange Button Head Bolt", slug: "flange-button-head-bolt" },
    { title: "Wing Bolt", slug: "wing-bolt" },
    { title: "Hex Bolt Half Threaded", slug: "hex-bolt-half-threaded" },
    { title: "Allen Bolt", slug: "allen-bolt" },
    { title: "Shoulder Bolt", slug: "shoulder-bolt" },
    { title: "Coach Bolt", slug: "coach-bolt" },
    { title: "Flange Bolt", slug: "flange-bolt" },
    { title: "Nylon Hex Bolt", slug: "nylon-hex-bolt" },
  ];

  return (
    <div className="-mt-[144px] pt-[44px]">
      <ProductCategoryLayout
        title="Bolts"
        description="Bolts provide strong, reliable fastening for heavy-duty applications—ideal for joining metal, wood, or structural components where high strength and durability are essential."
      >
        {bolts.map((bolt) => (
          <ProductCategoryCard
            key={bolt.slug}
            title={bolt.title}
            imageSrc={BOLT_IMAGE}
            href={`/category/${bolt.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
