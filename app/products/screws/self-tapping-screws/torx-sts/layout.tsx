import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Torx STS Self-Tapping Screws | Screw Bazar",
  description:
    "Torx STS self-tapping screws with 6-point star drive. Superior torque transfer, reduced cam-out, and tamper resistance. Ideal for sheet metal, plastic, and wood applications.",
  keywords: [
    "torx sts",
    "torx self tapping screws",
    "star drive tapping screws",
    "security torx screws",
    "tamper resistant screws",
  ],
  openGraph: {
    title: "Torx STS Self-Tapping Screws | Screw Bazar",
    description: "Torx STS self-tapping screws with superior torque transfer",
    url: "https://www.screwbazar.com/products/screws/self-tapping-screws/torx-sts",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.screwbazar.com/products/screws/self-tapping-screws/torx-sts",
  },
};

export default function TorxSTSSelfTappingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
