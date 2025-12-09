import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuts - Hex, Lock, Wing & All Types | Screw Bazar",
  description:
    "Complete range of nuts including hex nuts, lock nuts, wing nuts, T-nuts, insert nuts, and more. Available in steel, stainless steel, brass, and other materials.",
  keywords: [
    "nuts fasteners",
    "hex nuts",
    "lock nuts",
    "wing nuts",
    "t-nuts",
    "insert nuts",
    "buy nuts online India",
  ],
  openGraph: {
    title: "Nuts - Hex, Lock, Wing & All Types | Screw Bazar",
    description: "Quality nuts for secure fastening in all applications",
    url: "https://www.screwbazar.com/products/nuts",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/nuts",
  },
};

export default function NutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
