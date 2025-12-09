import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Fastener Questions Answered | Screw Bazar",
  description: "Find answers to frequently asked questions about screws, bolts, fasteners, ordering, shipping, and more. Get expert help with your fastener selection and purchase.",
  keywords: [
    "fastener FAQ",
    "screw questions",
    "bolt selection help",
    "hardware ordering",
    "fastener shipping info",
    "material selection guide",
    "fastener technical support"
  ],
  openGraph: {
    title: "FAQ - Fastener Questions Answered | Screw Bazar",
    description: "Get answers to your fastener questions - selection, ordering, shipping, and more",
    url: "https://www.screwbazar.com/faq",
    type: "website"
  },
  alternates: {
    canonical: "https://www.screwbazar.com/faq"
  }
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
