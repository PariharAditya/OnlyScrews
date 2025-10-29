import { Montserrat, Nunito_Sans } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'
import { AuthProvider } from '../contexts/AuthContext'
import { ErrorBoundary } from '../components/ErrorBoundary'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

export const metadata = {
  title: 'OnlyScrews - Industrial Fasteners & Hardware Supplier',
  description: 'Your trusted partner for industrial fasteners, screws, nuts, bolts, washers, and anchors. Bulk orders with expert guidance.',
  icons: {
    icon: '/SB.jpg',
    shortcut: '/SB.jpg',
    apple: '/SB.jpg',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://screwbazar.com'),
  other: {
    'msapplication-TileColor': '#1a5f7a',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Screw Bazar'
  }
}

export const viewport = {
  themeColor: '#1a5f7a',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${nunitoSans.variable} font-sans`}>
        <ClerkProvider>
          <AuthProvider>
            <ErrorBoundary>
              <Navbar />
              <div className="mt-[144px]">
                {children}
              </div>
              <WhatsAppButton />
            </ErrorBoundary>
          </AuthProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}