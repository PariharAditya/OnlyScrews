"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function SelfDrillingScrewsPage() {
  const selfDrillingScrews = [
    { title: "PAN SDS", slug: "pan-sds", image: "/images/products/screws/self drilling screws/Pan Self-Drilling Screw.png" },
    { title: "Hex SDS", slug: "hex-sds", image: "/images/products/screws/self drilling screws/Hex Self-Drilling Screw.png" },
    { title: "CSK SDS", slug: "csk-sds", image: "/images/products/screws/self drilling screws/CSK Self-Drilling Screw.png" },
    { title: "Truss Phillips SDS", slug: "truss-phillips-sds", image: "/images/products/screws/self drilling screws/Wafer Head Self-Drilling Screw.png" },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Self Drilling Screws"
        description="Self-drilling screws with integrated drill points that eliminate the need for pre-drilling. Designed for quick installation in metal, wood, and composite materials with various head styles."
      >
        {selfDrillingScrews.map((screw) => (
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
