import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile - Account Settings | Screw Bazar",
  description:
    "Manage your Screw Bazar profile, update personal information, view order history, and configure account preferences.",
  keywords: [
    "user profile",
    "account settings",
    "order history",
    "customer dashboard",
    "account management",
  ],
  openGraph: {
    title: "My Profile - Screw Bazar",
    description: "Manage your account settings and preferences",
    url: "https://www.screwbazar.com/profile",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.screwbazar.com/profile",
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
