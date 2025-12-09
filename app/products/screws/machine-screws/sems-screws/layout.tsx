import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEMS Screws - Pre-Assembled Washer Screws | Screw Bazar",
  description:
    "SEMS screws with pre-assembled washers for one-step installation. Machine screws permanently assembled with lock or flat washers. Saves assembly time and ensures proper washer use.",
  keywords: [
    "sems screws",
    "pre-assembled screws",
    "washer screws",
    "combination screws",
    "captive washer screws",
    "assembly screws",
  ],
  openGraph: {
    title: "SEMS Screws - Pre-Assembled Washer Screws | Screw Bazar",
    description:
      "SEMS screws with permanently attached washers for efficient assembly",
    url: "https://www.screwbazar.com/products/screws/machine-screws/sems-screws",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.screwbazar.com/products/screws/machine-screws/sems-screws",
  },
};

export default function SemsScrewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
