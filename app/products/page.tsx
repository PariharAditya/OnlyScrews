"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

export default function ProductsPage() {
  const productCategories = [
    { 
      title: "Screws", 
      slug: "screws", 
      image: "/images/products/screws/Machine Screw.png" 
    },
    { 
      title: "Bolts", 
      slug: "bolts", 
      image: "/images/products/bolts/FLANGE BOLT.png" 
    },
    { 
      title: "Nuts", 
      slug: "nuts", 
      image: "/images/products/nuts/Flange Nut.png" 
    },
    { 
      title: "Anchors", 
      slug: "anchors", 
      image: "/images/products/anchors/Shield Anchor.png" 
    },
    { 
      title: "Spacers", 
      slug: "spacers", 
      image: "/images/products/spacers/Hex Spacer.png" 
    },
    { 
      title: "Stand-Offs", 
      slug: "stand-offs", 
      image: "/images/products/standoffs/Blind Stand Off.png" 
    },
    { 
      title: "Rivets and Dowels", 
      slug: "rivets", 
      image: "/images/products/rivets/Blind.png" 
    },
    { 
      title: "Washers", 
      slug: "washers", 
      image: "/images/products/washers/Circlip type A.png" 
    },
  ];

  return (
    <div className=" pt-[44px]">
      <ProductCategoryLayout
        title="Our Products"
        description="Explore our comprehensive range of high-quality industrial fasteners. We offer bulk quantities at competitive prices for all your fastening needs."
      >
        {productCategories.map((category) => (
          <ProductCategoryCard
            key={category.slug}
            title={category.title}
            imageSrc={category.image}
            href={`/products/${category.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
