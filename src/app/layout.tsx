import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexxel.dev"),
  title: {
    default: "Manu Mishra",
    template: "%s | Manu Mishra",
  },
  description: "Developer, cardist and maker of things.",
  openGraph: {
    title: "Manu Mishra",
    description: "Developer, cardist and maker of things.",
    url: "",
    siteName: "Manu Mishra",
    locale: "en_US",
    type: "website",
    images: ["/code.png"], // Updated to your PNG
  },
  icons: {
    icon: "/code.png",      // For general browsers
    shortcut: "/code.png",  // For shortcuts
    apple: "/code.png",     // For Apple devices
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Manu Mishra",
    card: "summary_large_image",
    creator: "",
    images: ["/code.png"], // Updated to your PNG
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Browser Tab Favicon */}
        <link rel="icon" type="image/png" href="/code.png" sizes="any" />
      </head>
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
