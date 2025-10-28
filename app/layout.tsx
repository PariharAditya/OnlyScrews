import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import { AuthProvider } from "../contexts/AuthContext";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnlyScrews - Industrial Fasteners & Hardware Supplier",
  description:
    "Your trusted partner for industrial fasteners, screws, nuts, bolts, washers, and anchors. Bulk orders with expert guidance.",
  icons: {
    icon: "/SB.jpg",
    shortcut: "/SB.jpg",
    apple: "/SB.jpg",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#1a5f7a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <Navbar />
            <div className="mt-[144px]">{children}</div>
            <WhatsAppButton />
          </AuthProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}