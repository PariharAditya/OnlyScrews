"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function MachineScrewsPage() {
  const machineScrews = [
    { title: "Allen Screws", slug: "allen-screws", href: "/products/screws/machine-screws/allen-screws", image: "/images/products/screws/machine screws/Allen Button Head BHCS.png" },
    { title: "Torx Machine Screws", slug: "torx-machine-screws", href: "/products/screws/machine-screws/torx-machine-screws", image: "/images/products/screws/machine screws/CSK Torx Machine Screw.png" },
    { title: "Philip Machine Screws", slug: "philip-machine-screws", href: "/category/philip-machine-screws", image: "/images/products/screws/machine screws/Phillips Machine Screw.png" },
    { title: "Slotted Machine Screws", slug: "slotted-machine-screws", href: "/category/slotted-machine-screws", image: "/images/products/screws/machine screws/Slotted Machine Screw.png" },
    { title: "SEMS Screws", slug: "sems-screws", href: "/products/screws/machine-screws/sems-screws", image: "/images/products/screws/Machine Screw.png" },
  ];

  return (
    <div className="-mt-[144px] pt-[54px]">
      <ProductCategoryLayout
        title="Machine Screws"
        description="Precision-engineered machine screws designed for secure fastening in threaded holes. Available in various drive types including Allen, Torx, Philip, and Slotted configurations for versatile applications."
      >
        {machineScrews.map((screw) => (
          <ProductCategoryCard
            key={screw.slug}
            title={screw.title}
            imageSrc={screw.image}
            href={screw.href ?? `/category/${screw.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
