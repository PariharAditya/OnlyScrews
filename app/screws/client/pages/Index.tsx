import { ProductCategoryLayout } from "@/components/product-categories/ProductCategoryLayout";
import { ProductCategoryCard } from "@/components/product-categories/ProductCategoryCard";

const IMAGE = "https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2Fad24b2afc10f4bd090d15f12d85c4b8b?format=webp&width=800";

export default function Index() {
  const cards = [
    { title: "Machine Screws", slug: "machine-screws" },
    { title: "Self tapping Screws", slug: "self-tapping-screws" },
    { title: "Self Drilling Screws", slug: "self-drilling-screws" },
  ];

  return (
    <ProductCategoryLayout
      title="Screws"
      description="Built for strength and precision. From machine to self-tapping and self-drilling — made to fit every need."
    >
      {cards.map((c) => (
        <ProductCategoryCard
          key={c.slug}
          title={c.title}
          imageSrc={IMAGE}
          href={`/category/${c.slug}`}
        />
      ))}
    </ProductCategoryLayout>
  );
}
