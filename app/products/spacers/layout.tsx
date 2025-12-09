import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spacers - Nylon, Metal, PCB & Custom Sizes | Screw Bazar",
  description:
    "Precision spacers for electronics, PCBs, and mechanical assemblies. Available in nylon, aluminum, brass, steel. Round, hex, and threaded spacers in all sizes.",
  keywords: [
    "spacers fasteners",
    "PCB spacers",
    "nylon spacers",
    "metal spacers",
    "hex spacers",
    "threaded spacers",
    "standoff spacers",
  ],
  openGraph: {
    title: "Spacers - Nylon, Metal, PCB & Custom | Screw Bazar",
    description: "Precision spacers for electronics and mechanical assemblies",
    url: "https://www.screwbazar.com/products/spacers",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/spacers",
  },
};

export default function SpacersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
