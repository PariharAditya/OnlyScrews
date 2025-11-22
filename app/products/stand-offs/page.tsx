"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";
import { image } from "framer-motion/dist/types/client";

const STANDOFF_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function StandoffsPage() {
  const standoffs = [
    { title: "Blind Stand Off", slug: "blind-stand-off", image: "/images/products/standoffs/Blind Stand Off.png" },
    { title: "Through hole Stand Off", slug: "through-hole-stand-off", image: "/images/products/standoffs/Through hole stand Off.png" },
 ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Stand-Offs"
        description="Standoffs create precise spacing between components, ensuring alignment, insulation, and stability—commonly used in electronics, panels, and mechanical assemblies for a clean, professional finish."
      >
        {standoffs.map((standoff) => (
          <ProductCategoryCard
            key={standoff.slug}
            title={standoff.title}
            imageSrc={standoff.image}
            href={`/category/${standoff.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
