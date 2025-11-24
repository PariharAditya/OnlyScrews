"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function PhillipMachineScrewsPage() {
  const phillipScrews = [
    { title: "Pan Head Phillips", slug: "pan-head-phillips", image: "/images/products/screws/machine screws/phillip machine screws/Pan head phillips.png" },
    { title: "CSK Head Phillips", slug: "csk-head-phillips", image: "/images/products/screws/machine screws/phillip machine screws/CSK head phillips.png" },
    { title: "Truss Head Phillips", slug: "truss-head-phillips", image: "/images/products/screws/machine screws/phillip machine screws/Truss head phillips.png" },
    { title: "WW Pan Phillips", slug: "ww-pan-phillips", image: "/images/products/screws/machine screws/phillip machine screws/WW Pan head phillips.png" },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Phillip Machine Screws"
        description="Phillips drive machine screws offering excellent torque transfer and ease of use. Available in multiple head styles including pan, countersunk, truss, and wide washer configurations."
      >
        {phillipScrews.map((screw) => (
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
