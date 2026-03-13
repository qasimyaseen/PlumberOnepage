import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#7FD13B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hit The Switch | Reliable Melbourne Electricians | Same-Day Service",
  description: "Looking for a reliable electrician in Melbourne? Hit The Switch offers 24/7 emergency repairs, switchboard upgrades, and free quotes. Serving East & South-Eastern suburbs.",
  keywords: ["Electrician Melbourne", "Emergency Electrician", "24/7 Electrician", "Switchboard Upgrade Melbourne", "Electrical Services"],
  authors: [{ name: "Hit The Switch" }],
  openGraph: {
    title: "Hit The Switch | Reliable Melbourne Electricians",
    description: "24/7 Emergency electrical services in Melbourne's East & South-Eastern suburbs. Free quotes & same-day service.",
    url: "https://hittheswitch.com.au",
    siteName: "Hit The Switch",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hit The Switch Melbourne Electricians",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hit The Switch | Melbourne Electricians",
    description: "Reliable 24/7 electrical services across Melbourne. Same-day repairs & switchboard upgrades.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hittheswitch.com.au",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#7FD13B]/30">{children}</body>
    </html>
  );
}