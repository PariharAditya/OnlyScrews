import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Customer Portal | Screw Bazar",
  description: "Login to your Screw Bazar account to manage orders, view history, and access your customer dashboard.",
  keywords: [
    "login screw bazar",
    "customer login",
    "account access",
    "user login portal"
  ],
  openGraph: {
    title: "Login - Screw Bazar",
    description: "Access your customer account",
    url: "https://www.screwbazar.com/login",
    type: "website"
  },
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: "https://www.screwbazar.com/login"
  }
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
