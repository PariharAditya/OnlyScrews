"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";
import { image } from "framer-motion/client";

const NUT_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function NutsPage() {
  const nuts = [
    { title: "Hex Nut", slug: "hex-nut" , image : "/images/products/nuts/Hex Nut.png" },
    { title: "Cage Nut", slug: "cage-nut" , image : "/images/products/nuts/Cage Nut.png" },
    { title: "Square Weld Nut", slug: "square-weld-nut", image : "/images/products/nuts/Square Weld Nut.png" },
    { title: "Flange Nut", slug: "flange-nut" , image : "/images/products/nuts/Flange Nut.png" },
    { title: "Wing Nut", slug: "wing-nut" , image : "/images/products/nuts/Wing Nut.png" },
    { title: "Square Nut", slug: "square-nut" , image : "/images/products/nuts/Sqaure Nut.png" },
    { title: "Dome Nut", slug: "dome-nut" , image : "/images/products/nuts/Dome Nut.png" },
    { title: "Insert Nut (LF)", slug: "insert-nut-lf" , image : "/images/products/nuts/Insert Nut (LF).png" },
    { title: "Insert Nut (RF)", slug: "insert-nut-rf" , image : "/images/products/nuts/Insert Nut (RF).png" },
    { title: "Keps (K) Nut", slug: "keps-k-nut" , image : "/images/products/nuts/Keps(K) Nut.png" },
    { title: "Flange Nyloc Nut", slug: "flange-nyloc-nut" , image : "/images/products/nuts/Flange Nyloc  Nut.png" },
    { title: "Lock Nut", slug: "lock-nut" , image : "/images/products/nuts/Lock nut.png" },
    { title: "Prongs Tee Nut", slug: "prongs-tee-nut" , image : "/images/products/nuts/Pronge Tee Nut.png" },
    { title: "Nyloc Nut", slug: "nyloc-nut"  , image : "/images/products/nuts/Nyloc Nut.png" },
    { title: "Long Nut", slug: "long-nut", image : "/images/products/nuts/Long Nut.png" },
    { title: "Insert (D) Nut", slug: "insert-d-nut" , image : "/images/products/nuts/Insert (D) Nut.png" },
    { title: "Metal Lock Nut", slug: "metal-lock-nut" , image : "/images/products/nuts/Metal Lock Nut.png" },
    { title: "Rivet Nut", slug: "rivet-nut" , image : "/images/products/nuts/Rivet Nut.png" },
    { title: "Profile (T) Nut", slug: "profile-t-nut" , image : "/images/products/nuts/Profile (T) Nut.png" },
    { title: "Weld Nut", slug: "weld-nut" , image : "/images/products/nuts/Weld Nut.png" },
    { title: "Shear Nut", slug: "shear-nut", image : "/images/products/nuts/Shear Nut.png" },
    { title: "Profile side Nut", slug: "profile-side-nut" , image : "/images/products/nuts/Profile side Nut.png" },
    { title: "Semi Hex Nut (LF)", slug: "semi-hex-nut-lf" , image : "/images/products/nuts/Semi Hex LF.png" },
    { title: "Semi Hex Nut (RF)", slug: "semi-hex-nut-rf" , image : "/images/products/nuts/Semi Hex RF.png" },
    { title: "Full Hex Nut (LF)", slug: "full-hex-nut-lf", image : "/images/products/nuts/Full hex LF.png" },
    { title: "Full Hex Nut (RF)", slug: "full-hex-nut-rf" , image : "/images/products/nuts/Full hex RF.png" },
  ];

  return (
    <div className="pt-[54px]">
      <ProductCategoryLayout
        title="Nuts"
        description="Nuts deliver secure fastening with bolts or screws, offering strength, stability, and easy adjustment—ideal for machinery, construction, and general assemblies requiring dependable, long-lasting connections."
      >
        {nuts.map((nut) => (
          <ProductCategoryCard
            key={nut.slug}
            title={nut.title}
            imageSrc={nut.image}
            href={`/category/${nut.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
