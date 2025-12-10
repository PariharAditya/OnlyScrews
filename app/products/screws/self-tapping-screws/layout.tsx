import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Tapping Screws - All Types | Screw Bazar",
  description:
    "Quality self-tapping screws for metal, plastic, and wood. Thread-forming and thread-cutting types. Available in various drives including Phillip, Torx, hex, and slotted.",
  keywords: [
    "self-tapping screws",
    "thread forming screws",
    "sheet metal screws",
    "tek screws",
    "self drilling screws",
    "tapping screws India",
  ],
  openGraph: {
    title: "Self-Tapping Screws - All Types | Screw Bazar",
    description:
      "Versatile self-tapping screws for metal, plastic, and wood applications",
    url: "https://www.screwbazar.com/products/screws/self-tapping-screws",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/screws/self-tapping-screws",
  },
};

export default function SelfTappingScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
