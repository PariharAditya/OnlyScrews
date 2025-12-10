import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slotted Machine Screws - Flat Drive Screws | Screw Bazar",
  description:
    "Traditional slotted machine screws with single-slot drive. Available in various head styles including flat, pan, oval, and round. Quality materials and finishes.",
  keywords: [
    "slotted machine screws",
    "flat drive screws",
    "slotted head screws",
    "traditional screws",
    "single slot screws",
  ],
  openGraph: {
    title: "Slotted Machine Screws | Screw Bazar",
    description: "Traditional slotted machine screws in various head styles",
    url: "https://www.screwbazar.com/products/screws/machine-screws/slotted-machine-screws",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.screwbazar.com/products/screws/machine-screws/slotted-machine-screws",
  },
};

export default function SlottedMachineScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
