import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Torx Machine Screws - Star Drive Screws | Screw Bazar",
  description:
    "Precision Torx machine screws with 6-point star drive for superior torque transfer and reduced cam-out. Available in various head styles, materials, and sizes.",
  keywords: [
    "torx machine screws",
    "star drive screws",
    "torx screws",
    "6 point screws",
    "torx fasteners",
    "precision machine screws",
  ],
  openGraph: {
    title: "Torx Machine Screws - Star Drive | Screw Bazar",
    description: "Torx machine screws for superior torque transfer",
    url: "https://www.screwbazar.com/products/screws/machine-screws/torx-machine-screws",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.screwbazar.com/products/screws/machine-screws/torx-machine-screws",
  },
};

export default function TorxMachineScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
