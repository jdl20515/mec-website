import type { Metadata } from "next"
import type { Viewport } from "next"
import localFont from "next/font/local"
import "./globals.css"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"

const rockyCondensed = localFont({
  src: "../../public/rocky-condensed-light.otf",
  variable: "--font-rocky-condensed",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MEC Website",
  description: "The MIT Entrepreneurship Club.",
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={rockyCondensed.variable}>
      <head />
      <body
        className={`${rockyCondensed.className} text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider>
            {children}
            <Toaster position="top-center" richColors toastOptions={{}} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
