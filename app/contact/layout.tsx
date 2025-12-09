import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Screw Bazar",
  description: "Contact Screw Bazar for fastener inquiries, support, and orders. Reach our team via phone, email, or visit our location. We're here to help with all your fastener needs.",
  keywords: [
    "contact screw bazar",
    "fastener supplier contact",
    "hardware store contact",
    "screw shop location",
    "fastener customer support",
    "bulk order inquiry",
    "technical support fasteners"
  ],
  openGraph: {
    title: "Contact Us - Screw Bazar",
    description: "Get in touch with our team for fastener inquiries and support",
    url: "https://www.screwbazar.com/contact",
    type: "website"
  },
  alternates: {
    canonical: "https://www.screwbazar.com/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
