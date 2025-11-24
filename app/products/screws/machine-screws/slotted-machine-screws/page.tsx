"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function SlottedMachineScrewsPage() {
  const slottedScrews = [
    { title: "CSK Slotted", slug: "csk-slotted", image: "/images/products/screws/machine screws/CSK Slotted.png" },
    { title: "Cheese Head Slotted", slug: "cheese-head-slotted", image: "/images/products/screws/machine screws/Cheese Head Slotted.png" },
    { title: "Round Head Slotted", slug: "round-head-slotted", image: "/images/products/screws/machine screws/Round Head Slotted.png" },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Slotted Machine Screws"
        description="Traditional slotted drive machine screws ideal for applications requiring a flush finish or vintage aesthetic. Available in countersunk, cheese head, and round head configurations."
      >
        {slottedScrews.map((screw) => (
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
