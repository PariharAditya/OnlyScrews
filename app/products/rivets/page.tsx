"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const RIVETS_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function RivetsPage() {
  const rivets = [
    { title: "Solid Dowel Pin", slug: "solid-dowel-pin" , image: "/images/products/rivets/Solid Dowel Pin.png" },
    { title: "Spring Dowel Pin", slug: "spring-dowel-pin-cotter" , image: "/images/products/rivets/Spring Dowel Pin Cotter Pin Blind  POP Rivet.png" },
    { title: "Cotter Pin", slug: "cotter-pin-blind-pop-rivet" , image: "/images/products/rivets/Cotter Pin Blind  POP Rivet.png"  },
    { title: "Blind / POP Rivet", slug: "blind-pop-rivet" , image: "/images/products/rivets/Blind.png"  },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Rivets and Dowels"
        description="Rivets and Dowels provide permanent, vibration-resistant joints—ideal for metal, plastic, and composite materials where strong, tamper-proof fastening is needed for structural integrity and durability."
      >
        {rivets.map((rivet) => (
          <ProductCategoryCard
            key={rivet.slug}
            title={rivet.title}
            imageSrc={rivet.image}
            href={`/category/${rivet.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
