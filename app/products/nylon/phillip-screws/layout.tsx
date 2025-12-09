import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nylon Phillip Screws - Non-Conductive Plastic Screws | Screw Bazar",
  description:
    "Non-conductive nylon Phillip screws for electronics, electrical panels, and sensitive equipment. Lightweight, corrosion-resistant, and insulating properties.",
  keywords: [
    "nylon phillip screws",
    "plastic screws",
    "non-conductive screws",
    "insulated screws",
    "electrical screws",
    "electronics screws",
  ],
  openGraph: {
    title: "Nylon Phillip Screws - Non-Conductive | Screw Bazar",
    description:
      "Non-conductive nylon screws for electronics and sensitive applications",
    url: "https://www.screwbazar.com/products/nylon/phillip-screws",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/nylon/phillip-screws",
  },
};

export default function NylonPhillipScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
