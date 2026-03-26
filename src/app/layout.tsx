import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#435CFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Keighley Emergency Plumber | Fast Local Plumbing Service",
  description: " Burst pipe or blocked drain in Keighley? Our local plumbers respond fast with fixed pricing and same-day service. Get your free quote now.",
  keywords: ["Keighley Emergency Plumber", "Local Plumbers Keighley", "Fast Plumbing Service Keighley", "Blocked Drain Keighley", "Burst Pipe Repair Keighley", "Same Day Plumber Keighley", "Fixed Price Plumbing", "24/7 Plumber Keighley"],
  authors: [{ name: "Keighley Emergency Plumber" }],
  openGraph: {
    title: "Keighley Emergency Plumber | Fast Local Plumbing Service",
    description: " Burst pipe or blocked drain in Keighley? Our local plumbers respond fast with fixed pricing and same-day service. Get your free quote now.",
    url: "https://emergencyplumbers247.uk",
    siteName: "Keighley Emergency Plumber",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keighley Emergency Plumber",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keighley Emergency Plumber | Fast Local Plumbing Service",
    description: " Burst pipe or blocked drain in Keighley? Our local plumbers respond fast with fixed pricing and same-day service. Get your free quote now.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://emergencyplumbers247.uk",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased selection:bg-[#435CFF]/30">
        {children}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}