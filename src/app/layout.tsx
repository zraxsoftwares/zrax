import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ZRAX SOFTWARES | Custom Websites, Applications & Software Solutions",
  description:
    "We engineer high-performance digital products — from real-time transaction systems to AI-powered analytics — with security and scalability at the core.",
  keywords: [
    "software development",
    "web development",
    "custom applications",
    "ZRAX",
    "Nairobi software company",
    "React",
    "Next.js",
    "Node.js",
  ],
  openGraph: {
    title: "ZRAX SOFTWARES",
    description:
      "Building Custom Websites, Applications, & Innovative Software Solutions",
    type: "website",
    siteName: "ZRAX SOFTWARES",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
