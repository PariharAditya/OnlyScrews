import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Create Your Account | Screw Bazar",
  description:
    "Create a Screw Bazar account to enjoy faster checkout, order tracking, exclusive deals, and personalized fastener recommendations.",
  keywords: [
    "sign up screw bazar",
    "create account",
    "register fastener account",
    "new customer registration",
    "customer signup",
  ],
  openGraph: {
    title: "Sign Up - Create Your Account | Screw Bazar",
    description: "Join Screw Bazar for exclusive deals and faster checkout",
    url: "https://www.screwbazar.com/sign-up",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.screwbazar.com/sign-up",
  },
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
