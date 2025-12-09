import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Access Your Account | Screw Bazar",
  description:
    "Sign in to your Screw Bazar account to manage orders, track shipments, view order history, and access exclusive customer benefits.",
  keywords: [
    "sign in screw bazar",
    "customer login",
    "fastener account access",
    "order tracking login",
    "customer portal",
    "account sign in",
  ],
  openGraph: {
    title: "Sign In - Screw Bazar",
    description: "Access your account to manage orders and track shipments",
    url: "https://www.screwbazar.com/sign-in",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.screwbazar.com/sign-in",
  },
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
