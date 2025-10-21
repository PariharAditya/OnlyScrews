import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import { AuthProvider } from '../contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OnlyScrews - Industrial Fasteners & Hardware Supplier',
  description: 'Your trusted partner for industrial fasteners, screws, nuts, bolts, washers, and anchors. Bulk orders with expert guidance.',
  icons: {
    icon: '/SB.jpg',
    shortcut: '/SB.jpg',
    apple: '/SB.jpg',
  },
  manifest: '/manifest.json',
}

export const viewport = {
  themeColor: '#1a5f7a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}