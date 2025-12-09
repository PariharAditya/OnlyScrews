import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anchors - Wall, Concrete, Drop-In & More | Screw Bazar",
  description:
    "Premium anchors for secure mounting in concrete, brick, drywall, and more. Shop expansion anchors, drop-in anchors, sleeve anchors, wedge anchors, and chemical anchors.",
  keywords: [
    "wall anchors",
    "concrete anchors",
    "expansion anchors",
    "drop-in anchors",
    "sleeve anchors",
    "wedge anchors",
    "buy anchors India",
  ],
  openGraph: {
    title: "Anchors - Wall, Concrete, Drop-In & More | Screw Bazar",
    description: "Reliable anchors for secure mounting in any substrate",
    url: "https://www.screwbazar.com/products/anchors",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/anchors",
  },
};

export default function AnchorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
