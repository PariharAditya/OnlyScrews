import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nylon Fasteners - Screws, Nuts, Spacers & More | Screw Bazar",
  description:
    "Complete range of nylon fasteners - non-conductive, corrosion-resistant, and lightweight. Shop nylon screws, nuts, washers, spacers, and standoffs for electronics and sensitive applications.",
  keywords: [
    "nylon fasteners",
    "nylon screws",
    "nylon nuts",
    "nylon spacers",
    "plastic fasteners",
    "non-conductive fasteners",
    "insulated hardware",
  ],
  openGraph: {
    title: "Nylon Fasteners - Screws, Nuts, Spacers | Screw Bazar",
    description:
      "Non-conductive, corrosion-resistant nylon fasteners for sensitive applications",
    url: "https://www.screwbazar.com/products/nylon",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/nylon",
  },
};

export default function NylonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
