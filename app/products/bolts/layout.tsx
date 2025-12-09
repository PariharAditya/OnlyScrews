import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bolts - Hex, Carriage, Eye & More | Screw Bazar",
  description:
    "Quality bolts for industrial and construction use. Shop hex bolts, carriage bolts, eye bolts, U-bolts, and anchor bolts in various grades, sizes, and materials.",
  keywords: [
    "bolts online India",
    "hex bolts",
    "carriage bolts",
    "eye bolts",
    "anchor bolts",
    "stainless steel bolts",
    "industrial bolts",
  ],
  openGraph: {
    title: "Bolts - Hex, Carriage, Eye & More | Screw Bazar",
    description: "Premium bolts for industrial and construction applications",
    url: "https://www.screwbazar.com/products/bolts",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/bolts",
  },
};

export default function BoltsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
