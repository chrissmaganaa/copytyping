import type { Metadata } from "next"
import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "copytying",
  description: "master copy through typing",
}

export default function rootlayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${josefin.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
