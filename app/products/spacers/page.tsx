"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";
import { image, img } from "framer-motion/dist/m";

const SPACER_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function SpacersPage() {
  const spacers = [
    { title: "Hex Spacer", slug: "hex-spacer" , image: "/images/products/spacers/Hex Spacer.png" },
    { title: "Hex ET Spacer", slug: "hex-et-spacer" , image: "/images/products/spacers/Hex ET Spacer.png" },
    { title: "Nylon Round Plain Spacer", slug: "nylon-round-plain-spacer" , image: "/images/products/spacers/Nylon Round Plain Spacer.png" },
    { title: "Nylon Hex Spacer", slug: "nylon-hex-spacer" , image: "/images/products/spacers/Nylon Hex Spacer.png" },
    { title: "Nylon ET Spacer", slug: "nylon-et-spacer" , imgage: "/images/products/spacers/Nylon ET Spacer.png" },
  ];

  return (
    <div className="-mt-[144px] pt-[44px]">
      <ProductCategoryLayout
        title="Spacers"
        description="Spacers maintain consistent gaps between parts, ensuring proper alignment and smooth assembly—perfect for electronics, machinery, and architectural applications requiring accuracy and balance."
      >
        {spacers.map((spacer) => (
          <ProductCategoryCard
            key={spacer.slug}
            title={spacer.title}
            imageSrc={spacer.image}
            href={`/category/${spacer.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
