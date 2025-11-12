"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const NUT_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function WashersPage() {
  const washers = [
    { title: "Plain Washer", slug: "plain-washer" },
    { title: "Fibre Washer", slug: "fibre-washer" },
    { title: "Nylon Plain Washer", slug: "nylon-round-plain-washer" },
    { title: "Spring Washer", slug: "spring-washer" },
    { title: "Wave Washer", slug: "wave-washer" },
    { title: "Ext-Star Washer", slug: "ext-star-washer" },
    { title: "Wedge-Lock Washer", slug: "wedge-lock-washer" },
    { title: "Taper Washer", slug: "taper-washer" },
     { title: "Ext-Tooth Washer", slug: "ext-tooth-washer" },
    { title: "Int-Tooth Washer", slug: "int-tooth-washer" },
    { title: "Int-Star Washer", slug: "int-star-washer" },
    { title: "Circlip type A ", slug: "circlip-type-a" },
    { title: "Circlip type B", slug: "circlip-type-b" },
    { title: "Circlip type E", slug: "circlip-type-e" },
   
    ];

  return (
    <div className="-mt-[144px] pt-[54px]">
      <ProductCategoryLayout
        title="Washers"
        description="Washers ensure secure, even fastening by distributing load and preventing surface damage—essential for improving grip, reducing vibration, and enhancing the longevity of assemblies."
      >
        {washers.map((washer) => (
          <ProductCategoryCard
            key={washer.slug}
            title={washer.title}
            imageSrc={NUT_IMAGE}
            href={`/category/${washer.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
