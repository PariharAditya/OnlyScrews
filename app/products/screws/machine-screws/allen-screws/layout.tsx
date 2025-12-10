import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allen Screws - Socket Head Cap Screws | Screw Bazar",
  description:
    "High-strength Allen screws (socket head cap screws) for industrial applications. Precision-machined with hex socket drive. Available in various grades, materials, and sizes.",
  keywords: [
    "allen screws",
    "socket head cap screws",
    "hex socket screws",
    "allen key screws",
    "SHCS",
    "industrial allen screws",
    "stainless steel allen screws",
  ],
  openGraph: {
    title: "Allen Screws - Socket Head Cap Screws | Screw Bazar",
    description:
      "High-strength Allen screws for precision industrial applications",
    url: "https://www.screwbazar.com/products/screws/machine-screws/allen-screws",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.screwbazar.com/products/screws/machine-screws/allen-screws",
  },
};

export default function AllenScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
