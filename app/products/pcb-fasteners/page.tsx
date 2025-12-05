"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function PCBFastenersPage() {
  const components = [
    { 
      title: "Screws", 
      slug: "screws",
      href: "/products/screws",
      image: "/images/products/screws/Machine Screw.png" 
    },
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
        title="PCB Fasteners"
        description="PCB fasteners provide secure mounting solutions for printed circuit boards, including screws, nuts, and stand-offs designed for electronics assembly with precise spacing and reliable connections."
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
