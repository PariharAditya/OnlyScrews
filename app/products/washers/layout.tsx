import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Washers - Flat, Spring, Lock & More | Screw Bazar",
  description:
    "Wide selection of washers including flat washers, spring washers, lock washers, fender washers, and specialty washers. All sizes and materials available.",
  keywords: [
    "washers fasteners",
    "flat washers",
    "spring washers",
    "lock washers",
    "fender washers",
    "buy washers online",
    "stainless steel washers",
  ],
  openGraph: {
    title: "Washers - Flat, Spring, Lock & More | Screw Bazar",
    description:
      "Quality washers for load distribution and locking applications",
    url: "https://www.screwbazar.com/products/washers",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/washers",
  },
};

export default function WashersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
