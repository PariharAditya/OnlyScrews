"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function ClinchingFastenersPage() {
  const components = [
    { 
      title: "Nuts", 
      slug: "nuts",
      href: "/products/nuts",
      image: "/images/products/nuts/Flange Nut.png"
    },
    { 
      title: "Stand-Offs", 
      slug: "stand-offs",
      href: "/products/stand-offs",
      image: "/images/products/standoffs/Blind Stand Off.png"
    },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Clinching Fasteners"
        description="Clinching fasteners are permanently installed into sheet metal, creating strong, reusable threads without welding or special tools. Perfect for thin materials where traditional fasteners won't work."
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
