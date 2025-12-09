import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rivets - Pop, Blind, Solid & All Types | Screw Bazar",
  description:
    "Quality rivets for permanent fastening. Shop pop rivets, blind rivets, solid rivets, drive rivets, and specialty riveting solutions for metal, plastic, and composite materials.",
  keywords: [
    "rivets online",
    "pop rivets",
    "blind rivets",
    "solid rivets",
    "drive rivets",
    "aluminum rivets",
    "steel rivets India",
  ],
  openGraph: {
    title: "Rivets - Pop, Blind, Solid & All Types | Screw Bazar",
    description: "Comprehensive range of rivets for permanent fastening",
    url: "https://www.screwbazar.com/products/rivets",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/rivets",
  },
};

export default function RivetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
