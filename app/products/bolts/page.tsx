"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const DEFAULT_BOLT_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function BoltsPage() {
  const bolts = [
    { title: "Hex Bolt", slug: "hex-bolt", image: "/images/products/bolts/HEX BOLT.png" },
    { title: "Dome Bolt", slug: "dome-bolt", image: "/images/products/bolts/DOME BOLT.png" },
    { title: "Flange Button Head Bolt", slug: "flange-button-head-bolt", image: "/images/products/bolts/FLANGE BUTTON HEAD BOLT.png" },
    { title: "Wing Bolt", slug: "wing-bolt", image: "/images/products/bolts/WING BOLT.png" },
    { title: "Hex Bolt Half Threaded", slug: "hex-bolt-half-threaded", image: "/images/products/bolts/HEX BOLT HALF THREADED.png"},
    { title: "Allen Bolt", slug: "allen-bolt", image: "/images/productdata/screws/allen screws/Allen bolt ms.png" },
    { title: "Shoulder Bolt", slug: "shoulder-bolt", image: "/images/products/bolts/SHOULDER BOLT.png" },
    { title: "Coach Bolt", slug: "coach-bolt", image: "/images/products/bolts/COACH BOLT.png" },
    { title: "Flange Bolt", slug: "flange-bolt", image: "/images/products/bolts/FLANGE BOLT.png" },
    { title: "Nylon Hex Bolt", slug: "nylon-hex-bolt", image: "/images/products/bolts/NYLON HEX BOLT.png" },
    { title: "Allen CSK  Bolt", slug: "allen-csk-bolt", image: "/images/products/bolts/ALLEN CSK BOLT.png" },
    { title: "U-Bolt", slug: "u-bolt", image: "/images/products/bolts/U BOLT.png" },
    { title: "T-Bolt", slug: "t-bolt", image: "/images/products/bolts/T BOLT.png"},
    { title: "Carriage Bolt", slug: "carriage-bolt", image: "/images/products/bolts/CARRIAGE BOLT.png" },
    { title: "Button Head Bolt", slug: "button-head-bolt", image: "/images/products/bolts/BUTTON HEAD BOLT.png" },
    { title: "Eye Bolt", slug: "eye-bolt", image: "/images/products/bolts/EYE BOLT.png" },
    { title: "J-Bolt", slug: "j-bolt", image: "/images/products/bolts/J BOLT.png" },
    { title: "Hook Bolt", slug: "hook-bolt", image: "/images/products/bolts/HOOK BOLT.png"},
  ];

  return (
    <div className=" pt-[44px]">
      <ProductCategoryLayout
        title="Bolts"
        description="Bolts provide strong, reliable fastening for heavy-duty applications—ideal for joining metal, wood, or structural components where high strength and durability are essential."
      >
        {bolts.map((bolt) => (
          <ProductCategoryCard
            key={bolt.slug}
            title={bolt.title}
            imageSrc={bolt.image}
            href={`/category/${bolt.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
