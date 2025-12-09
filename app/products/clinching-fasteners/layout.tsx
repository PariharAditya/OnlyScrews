import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Clinching Fasteners - Self-Clinching Nuts, Studs & Hardware | Screw Bazar",
  description:
    "Premium self-clinching fasteners for sheet metal and thin materials. Shop self-clinching nuts, studs, standoffs, and inserts for permanent, reliable mounting solutions.",
  keywords: [
    "clinching fasteners",
    "self-clinching nuts",
    "self-clinching studs",
    "sheet metal fasteners",
    "press-fit fasteners",
    "PEM fasteners",
    "thin metal hardware",
  ],
  openGraph: {
    title: "Clinching Fasteners - Self-Clinching Hardware | Screw Bazar",
    description:
      "Self-clinching fasteners for permanent mounting in sheet metal",
    url: "https://www.screwbazar.com/products/clinching-fasteners",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/products/clinching-fasteners",
  },
};

export default function ClinchingFastenersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
