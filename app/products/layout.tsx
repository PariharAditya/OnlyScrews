import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products - Screws, Bolts, Nuts & Fasteners | Screw Bazar",
  description:
    "Browse our complete range of fasteners including screws, bolts, nuts, anchors, spacers, rivets, washers and more. Premium quality fasteners for industrial and DIY projects.",
  keywords: [
    "all fasteners",
    "product catalog",
    "screws bolts nuts",
    "hardware products",
    "fastener categories",
    "industrial fasteners",
    "construction hardware",
  ],
  openGraph: {
    title: "All Products - Screw Bazar",
    description:
      "Explore our complete range of premium fasteners and hardware products",
    url: "https://www.screwbazar.com/products",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
