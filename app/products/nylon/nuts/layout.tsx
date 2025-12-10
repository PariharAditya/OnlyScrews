import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nylon Nuts - Non-Conductive Plastic Nuts | Screw Bazar",
  description:
    "Non-conductive nylon nuts for electronics and electrical applications. Lightweight, corrosion-resistant, and insulating. Available in hex, wing, and other styles.",
  keywords: [
    "nylon nuts",
    "plastic nuts",
    "non-conductive nuts",
    "insulated nuts",
    "electrical hardware",
    "plastic hex nuts",
  ],
  openGraph: {
    title: "Nylon Nuts - Non-Conductive | Screw Bazar",
    description:
      "Non-conductive nylon nuts for electrical and electronics applications",
    url: "https://www.screwbazar.com/products/nylon/nuts",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/nylon/nuts",
  },
};

export default function NylonNutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
