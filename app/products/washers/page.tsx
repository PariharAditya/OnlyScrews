"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const NUT_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function WashersPage() {
  const washers = [
    { title: "Plain Washer", slug: "plain-washer", image:"/images/products/washers/Plain Washer.png" },
    { title: "Fibre Washer", slug: "fibre-washer" , image:"/images/products/washers/Fibre Washer.png" },
    { title: "Nylon Plain Washer", slug: "nylon-round-plain-washer" , image:"/images/products/washers/Nylon Plain Washer.png" },
    { title: "Spring Washer", slug: "spring-washer", image:"/images/products/washers/Spring Washer.png"  },
    { title: "Wave Washer", slug: "wave-washer", image:"/images/products/washers/Wave Washer.png"  },
    { title: "Ext-Star Washer", slug: "ext-star-washer" , image:"/images/products/washers/Ext-Star Washer.png"  },
    { title: "Wedge-Lock Washer", slug: "wedge-lock-washer" , image:"/images/products/washers/Wedge Lock Washer.png"  },
    { title: "Taper Washer", slug: "taper-washer" ,  image:"/images/products/washers/Taper Washer.png"  },
     { title: "Ext-Tooth Washer", slug: "ext-tooth-washer" , image:"/images/products/washers/Ext- Tooth Washer.png"  },
    { title: "Int-Tooth Washer", slug: "int-tooth-washer" , image:"/images/products/washers/Int-Tooth Washer.png"  },
    { title: "Int-Star Washer", slug: "int-star-washer", image:"/images/products/washers/Int-Star Washer.png"  },
    { title: "Circlip type A ", slug: "circlip-type-a" , image:"/images/products/washers/Circlip Type A.png"  },
    { title: "Circlip type B", slug: "circlip-type-b" , image:"/images/products/washers/Circlip Type B.png"  },
    { title: "Circlip type E", slug: "circlip-type-e" , image:"/images/products/washers/Circlip Type E.png"  },
     { title: "Conical Disc Washer", slug: "conical-disc-washer" , image:"/images/products/washers/conical disc washer.png"  },
   
    ];

  return (
    <div className=" pt-[54px]">
      <ProductCategoryLayout
        title="Washers"
        description="Washers ensure secure, even fastening by distributing load and preventing surface damage—essential for improving grip, reducing vibration, and enhancing the longevity of assemblies."
      >
        {washers.map((washer) => (
          <ProductCategoryCard
            key={washer.slug}
            title={washer.title}
            imageSrc={washer.image}
            href={`/category/${washer.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
