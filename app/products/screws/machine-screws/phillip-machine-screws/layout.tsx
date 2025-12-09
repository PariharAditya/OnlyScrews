import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phillip Machine Screws - Cross Drive Screws | Screw Bazar",
  description:
    "Quality Phillip machine screws with cross-head drive. Available in pan, flat, oval, and round head styles. Multiple materials and thread types for all applications.",
  keywords: [
    "phillip machine screws",
    "cross head screws",
    "phillips drive screws",
    "pan head screws",
    "flat head phillips screws",
  ],
  openGraph: {
    title: "Phillip Machine Screws | Screw Bazar",
    description: "Phillip machine screws in various head styles and materials",
    url: "https://www.screwbazar.com/products/screws/machine-screws/phillip-machine-screws",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.screwbazar.com/products/screws/machine-screws/phillip-machine-screws",
  },
};

export default function PhillipMachineScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
