"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function TorxMachineScrewsPage() {
  const torxScrews = [
    { title: "Pan Torx", slug: "pan-torx", image: "/images/products/screws/machine screws/allen screws/Pan Torx Machine Screw.png" },
    { title: "CSK Torx", slug: "csk-torx", image: "/images/products/screws/machine screws/allen screws/Allen CSK Machine Screw.png" },
    { title: "Security Pan Torx", slug: "security-pan-torx", image: "/images/products/screws/machine screws/allen screws/Security Pan Torx Machine Screw.png" },
    { title: "Security CSK Torx", slug: "security-csk-torx", image: "/images/products/screws/machine screws/allen screws/Security CSK Torx Machine Screw.png" },
  ];

  return (
    <div className="-mt-[144px] pt-[54px]">
      <ProductCategoryLayout
        title="Torx Machine Screws"
        description="High-quality Torx machine screws with superior torque transfer and reduced cam-out. Available in pan head, countersunk, and security variants for enhanced tamper resistance."
      >
        {torxScrews.map((screw) => (
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
