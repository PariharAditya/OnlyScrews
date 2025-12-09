import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stand-Offs - Threaded, Hex, Round & PCB | Screw Bazar",
  description:
    "Quality stand-offs for PCBs, panels, and mounting applications. Available in brass, aluminum, nylon, and steel. Threaded male-female, female-female standoffs in all sizes.",
  keywords: [
    "standoffs",
    "PCB standoffs",
    "threaded standoffs",
    "hex standoffs",
    "brass standoffs",
    "nylon standoffs",
    "panel standoffs",
  ],
  openGraph: {
    title: "Stand-Offs - Threaded, Hex, Round & PCB | Screw Bazar",
    description: "Premium stand-offs for PCB and panel mounting",
    url: "https://www.screwbazar.com/products/stand-offs",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/stand-offs",
  },
};

export default function StandOffsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
