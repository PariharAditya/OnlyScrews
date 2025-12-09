import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Premium Fastener Supplier Since [Year] | Screw Bazar",
  description: "Learn about Screw Bazar - India's trusted fastener supplier. Discover our commitment to quality, extensive product range, and customer-first approach in providing premium screws, bolts, and hardware.",
  keywords: [
    "about screw bazar",
    "fastener supplier India",
    "hardware company",
    "quality fasteners",
    "trusted screw supplier",
    "fastener manufacturer",
    "industrial hardware supplier"
  ],
  openGraph: {
    title: "About Us - Screw Bazar",
    description: "India's trusted supplier of premium fasteners and hardware",
    url: "https://www.screwbazar.com/about",
    type: "website"
  },
  alternates: {
    canonical: "https://www.screwbazar.com/about"
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
