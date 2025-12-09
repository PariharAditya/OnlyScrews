import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Torx STS Screws - Security Torx Fasteners | Screw Bazar",
  description:
    "Premium Torx STS (Security Torx System) screws with enhanced security features. Ideal for tamper-resistant applications in electronics, automotive, and industrial equipment.",
  keywords: [
    "torx screws",
    "security torx",
    "torx sts",
    "tamper resistant screws",
    "star drive screws",
    "torx fasteners India",
  ],
  openGraph: {
    title: "Torx STS Screws - Security Torx Fasteners | Screw Bazar",
    description: "Premium Torx STS screws for tamper-resistant applications",
    url: "https://www.screwbazar.com/category/torx-sts",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/category/torx-sts",
  },
};

export default function TorxSTSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
