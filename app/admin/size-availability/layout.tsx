import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Size Availability Management | Screw Bazar",
  description:
    "Manage product size availability for Screw Bazar inventory system.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
