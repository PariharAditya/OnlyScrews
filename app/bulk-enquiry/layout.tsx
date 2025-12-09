import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Enquiry - Wholesale Fastener Orders | Screw Bazar",
  description:
    "Submit bulk enquiries for wholesale fastener orders. Get competitive pricing on large quantities of screws, bolts, nuts, and hardware. Quick quotations for industrial projects.",
  keywords: [
    "bulk fastener order",
    "wholesale screws",
    "industrial fastener quote",
    "bulk hardware purchase",
    "wholesale bolts nuts",
    "construction bulk order",
    "fastener wholesale pricing",
  ],
  openGraph: {
    title: "Bulk Enquiry - Wholesale Fastener Orders | Screw Bazar",
    description:
      "Get competitive pricing on bulk fastener orders for industrial projects",
    url: "https://www.screwbazar.com/bulk-enquiry",
    type: "website",
  },
  alternates: {
    canonical: "https://www.screwbazar.com/bulk-enquiry",
  },
};

export default function BulkEnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
