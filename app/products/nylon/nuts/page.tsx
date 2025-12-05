"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function NylonNutsPage() {
  const nuts = [
    { 
      title: "Hex Nut", 
      slug: "hex-nut",
      image: "/images/products/nuts/Hex Nut.png" 
    },
    { 
      title: "Dome Nut", 
      slug: "dome-nut",
      image: "/images/products/nuts/Dome Nut.png" 
    },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Nylon Nuts"
        description="High-quality nylon nuts offering excellent corrosion resistance, electrical insulation, and lightweight durability for industrial and electronic applications."
      >
        {nuts.map((nut) => (
          <ProductCategoryCard
            key={nut.slug}
            title={nut.title}
            imageSrc={nut.image}
            href={`/category/${nut.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
