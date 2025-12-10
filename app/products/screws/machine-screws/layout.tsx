import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Screws - All Types & Sizes | Screw Bazar",
  description:
    "Precision machine screws for metal, plastic, and threaded holes. Available in Allen, Phillip, slotted, Torx drives. Multiple materials, head styles, and thread types.",
  keywords: [
    "machine screws",
    "allen screws",
    "phillip machine screws",
    "socket head cap screws",
    "precision screws",
    "metal screws",
    "threaded fasteners",
  ],
  openGraph: {
    title: "Machine Screws - All Types | Screw Bazar",
    description:
      "Precision machine screws for industrial and mechanical applications",
    url: "https://www.screwbazar.com/products/screws/machine-screws",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/screws/machine-screws",
  },
};

export default function MachineScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
