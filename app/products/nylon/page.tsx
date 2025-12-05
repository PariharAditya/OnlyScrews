"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function NylonPage() {
  const components = [
    {
      title: "Nylon Nuts",
      slug: "nuts",
      image: "/images/products/nylon-nuts.png",
      href: "/products/nylon/nuts",
    },
    {
      title: "Nylon Bolts",
      slug: "bolts",
      image: "/images/products/nylon-bolts.png",
      href: "/category/hex-bolt",
    },
    {
      title: "Nylon Spacers",
      slug: "spacers",
      image: "/images/products/nylon-spacers.png",
      href: "/products/spacers",
    },
    {
      title: "Nylon Washers",
      slug: "washers",
      image: "/images/products/nylon-washers.png",
      href: "/category/plain-washer",
    },
    {
      title: "Nylon Phillip Machine Screws",
      slug: "phillip-screws",
      image: "/images/products/nylon-machine-screws.png",
      href: "/products/nylon/phillip-screws",
    },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Nylon Fasteners"
        description="Our Nylon Fastener Range offers exceptional mechanical strength with minimal weight, making it ideal for high-performance industrial and electrical environments. Resistant to corrosion, moisture, and vibration."
      >
        {components.map((component) => (
          <ProductCategoryCard
            key={component.slug}
            title={component.title}
            imageSrc={component.image}
            href={component.href}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
