"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function AllenScrewsPage() {
  const allenScrews = [
    { title: "SHCS Machine Screws", slug: "shcs-machine-screws", image: "/images/products/screws/machine screws/allen screws/Allen Cap SHCS.png" },
    { title: "BHCS Machine Screws", slug: "bhcs-machine-screws", image: "/images/products/screws/machine screws/allen screws/Allen Button Head BHCS.png" },
    { title: "CSK Machine Screws", slug: "csk-machine-screws", image: "/images/products/screws/machine screws/allen screws/Allen CSK Machine Screw.png" },
    { title: "GRUB Screws", slug: "grub-screws", image: "/images/products/screws/machine screws/allen screws/GRUB Screws.png" },
    { title: "JCB Screws", slug: "jcb-screws", image: "/images/products/screws/machine screws/allen screws/JCB screw.png" },
  ];

  return (
    <div className=" pt-[54px]">
      <ProductCategoryLayout
        title="Allen Screws"
        description="Premium Allen head machine screws featuring socket head cap screws (SHCS), button head cap screws (BHCS), countersunk, and grub screws. Perfect for applications requiring high torque and a clean, professional finish."
      >
        {allenScrews.map((screw) => (
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
