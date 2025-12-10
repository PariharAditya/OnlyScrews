import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Drilling Screws - TEK Screws | Screw Bazar",
  description:
    "Self-drilling screws (TEK screws) that drill their own hole and form threads. Ideal for metal roofing, cladding, and steel framing. No pre-drilling required.",
  keywords: [
    "self drilling screws",
    "tek screws",
    "drill point screws",
    "roofing screws",
    "metal building screws",
    "self piercing screws",
  ],
  openGraph: {
    title: "Self-Drilling Screws - TEK Screws | Screw Bazar",
    description:
      "Self-drilling screws that eliminate the need for pre-drilling",
    url: "https://www.screwbazar.com/products/screws/self-drilling-screws",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.screwbazar.com/products/screws/self-drilling-screws",
  },
};

export default function SelfDrillingScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
