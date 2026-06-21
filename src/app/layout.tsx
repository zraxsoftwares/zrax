import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-geist-serif",
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
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZRAX SOFTWARES",
    description: "Building Custom Websites, Applications, & Innovative Software Solutions",
    images: ["/og-image.svg"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/darkmode.webp" media="(prefers-color-scheme: dark)" />
        <link rel="preload" as="image" href="/lightmode.webp" media="(prefers-color-scheme: light)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  }
                  document.documentElement.classList.add(theme === 'light' ? 'light' : 'dark');
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ZRAX SOFTWARES",
              "url": "https://zraxsoftwares.com",
              "description": "We engineer high-performance digital products — from real-time transaction systems to AI-powered analytics — with security and scalability at the core.",
              "foundingDate": "2023",
              "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "128", "bestRating": "5" },
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
