import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCB Fasteners - Screws, Standoffs, Spacers | Screw Bazar",
  description:
    "Specialized PCB fasteners for electronics assembly. Shop PCB screws, standoffs, spacers, nuts, and mounting hardware. Non-conductive nylon and metal options available.",
  keywords: [
    "PCB fasteners",
    "PCB screws",
    "PCB standoffs",
    "electronics hardware",
    "circuit board mounting",
    "PCB spacers",
    "electronics assembly",
  ],
  openGraph: {
    title: "PCB Fasteners - Screws, Standoffs, Spacers | Screw Bazar",
    description: "Precision fasteners for PCB and electronics assembly",
    url: "https://www.screwbazar.com/products/pcb-fasteners",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/pcb-fasteners",
  },
};

export default function PCBFastenersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
