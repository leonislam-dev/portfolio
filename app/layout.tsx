import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Ashraful Islam Leon - Software Developer & AI Enthusiast",
  description:
    "Professional software developer passionate about AI and deep learning. Explore my projects, insights, and journey in technology.",
  keywords: ["software developer", "AI", "deep learning", "web development", "portfolio"],
  authors: [{ name: "Ashraful Islam Leon" }],
  openGraph: {
    title: "Ashraful Islam Leon - Software Developer & AI Enthusiast",
    description: "Professional software developer passionate about AI and deep learning",
    url: "https://leonislam.dev",
    siteName: "Leon Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashraful Islam Leon - Software Developer & AI Enthusiast",
    description: "Professional software developer passionate about AI and deep learning",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen bg-background">
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
