import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screws - All Types & Sizes | Screw Bazar",
  description:
    "Browse our extensive range of screws including wood screws, machine screws, self-tapping screws, chipboard screws, and more. Available in various materials, sizes, and drive types.",
  keywords: [
    "screws online",
    "wood screws",
    "machine screws",
    "self-tapping screws",
    "chipboard screws",
    "stainless steel screws",
    "buy screws India",
  ],
  openGraph: {
    title: "Screws - All Types & Sizes | Screw Bazar",
    description: "Comprehensive range of screws for every application",
    url: "https://www.screwbazar.com/products/screws",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/screws",
  },
};

export default function ScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
