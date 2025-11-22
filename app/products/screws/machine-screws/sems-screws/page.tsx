"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function SemsScrewsPage() {
  const semscrews = [
    { title: "Pan SEM", slug: "pan-sem", image: "/images/products/screws/machine screws/allen screws/Pan SEMS.png" },
    { title: "Hex SEM", slug: "hex-sem", image: "/images/products/screws/machine screws/allen screws/Hex SEMS.png" },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="SEMS Screws"
        description="SEMS (Pre-assembled Screw and Washer) screws combining screws with captive washers for efficient assembly. Available in pan head and hex head configurations for various fastening needs."
      >
        {semscrews.map((screw) => (
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
