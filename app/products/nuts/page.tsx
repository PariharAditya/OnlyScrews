"use client";

import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const NUT_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function NutsPage() {
  const nuts = [
    { title: "Hex Nut", slug: "hex-nut" },
    { title: "Cage Nut", slug: "cage-nut" },
    { title: "Square Weld Nut", slug: "square-weld-nut" },
    { title: "Flange Nut", slug: "flange-nut" },
    { title: "Wing Nut", slug: "wing-nut" },
    { title: "Square Nut", slug: "square-nut" },
    { title: "Dome Nut", slug: "dome-nut" },
    { title: "Insert Nut (LF)", slug: "insert-nut-lf" },
    { title: "Insert Nut (RF)", slug: "insert-nut-rf" },
    { title: "Keps (K) Nut", slug: "keps-k-nut" },
    { title: "Flange Nyloc Nut", slug: "flange-nyloc-nut" },
    { title: "Lock Nut", slug: "lock-nut" },
    { title: "Prongs Tee Nut", slug: "prongs-tee-nut" },
    { title: "Nyloc Nut", slug: "nyloc-nut" },
    { title: "Long Nut", slug: "long-nut" },
    { title: "Insert (D) Nut", slug: "insert-d-nut" },
    { title: "Metal Lock Nut", slug: "metal-lock-nut" },
    { title: "Rivet Nut", slug: "rivet-nut" },
    { title: "Profile (T) Nut", slug: "profile-t-nut" },
    { title: "Weld Nut", slug: "weld-nut" },
    { title: "Shear Nut", slug: "shear-nut" },
    { title: "Profile side Nut", slug: "profile-side-nut" },
    { title: "Semi Hex Nut (LF)", slug: "semi-hex-nut-lf" },
    { title: "Semi Hex Nut (RF)", slug: "semi-hex-nut-rf" },
    { title: "Full Hex Nut (LF)", slug: "full-hex-nut-lf" },
    { title: "Full Hex Nut (RF)", slug: "full-hex-nut-rf" },
  ];

  return (
    <div className="-mt-[144px] pt-[54px]">
      <ProductCategoryLayout
        title="Nuts"
        description="Nuts deliver secure fastening with bolts or screws, offering strength, stability, and easy adjustment—ideal for machinery, construction, and general assemblies requiring dependable, long-lasting connections."
      >
        {nuts.map((nut) => (
          <ProductCategoryCard
            key={nut.slug}
            title={nut.title}
            imageSrc={NUT_IMAGE}
            href={`/category/${nut.slug}`}
          />
        ))}
      </ProductCategoryLayout>
    </div>
  );
}
