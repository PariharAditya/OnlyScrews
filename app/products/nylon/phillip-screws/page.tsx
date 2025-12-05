"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function NylonPhillipScrewsPage() {
  const screws = [
    { 
      title: "Pan Head Phillips", 
      slug: "pan-head-phillips",
      image: "/images/productdata/screws/phillip machine screws/Pan head Phillips nylon.png" 
    },
    { 
      title: "CSK Head Phillips", 
      slug: "csk-head-phillips",
      image: "/images/productdata/screws/phillip machine screws/CSK Head phillips nylon.png" 
    },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Nylon Phillip Machine Screws"
        description="High-quality nylon Phillips machine screws with pan head and countersunk options, ideal for electronics and applications requiring electrical insulation."
      >
        {screws.map((screw) => (
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
