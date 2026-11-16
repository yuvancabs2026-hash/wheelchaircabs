import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlassNav from "@/components/GlassNav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getGlobalData } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0e7490",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wheelchaircabs.com"),

  title: {
    default: "WheelchairCabs | Wheelchair Taxi in Bengaluru & Chennai",
    template: "%s | WheelchairCabs",
  },

  description:
    "Book WheelchairCabs wheelchair taxi rides in Bengaluru and Chennai with an automatic hydraulic lift for hospital appointments, airport transfers, and everyday travel.",
  manifest: "/site.webmanifest",

  keywords: [
    "wheelchair taxi Bengaluru",
    "wheelchair taxi Bangalore",
    "wheelchair cab Bengaluru",
    "wheelchair cab Bangalore",
    "wheelchair taxi Chennai",
    "wheelchair cab Chennai",
    "accessible taxi India",
    "accessible cab service",
    "wheelchair accessible transport",
    "hydraulic lift taxi",
    "taxi for wheelchair users",
    "cab for disabled passengers",
    "mobility assistance taxi",
    "hospital taxi for wheelchair users",
    "dialysis appointment transport",
    "wheelchair hospital transfer",
    "accessible airport taxi",
    "senior citizen cab",
    "non-emergency medical transport",
    "wheelchair taxi booking",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  openGraph: {
    title: "WheelchairCabs | Wheelchair Taxi in Bengaluru & Chennai",
    description:
      "Wheelchair-accessible taxi rides in Bengaluru and Chennai for hospital visits, airport trips, and everyday journeys.",
    url: "https://wheelchaircabs.com",
    siteName: "WheelchairCabs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 640,
        height: 640,
        alt: "WheelchairCabs Wheelchair Taxi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WheelchairCabs | Wheelchair Taxi in Bengaluru & Chennai",
    description:
      "Safe, dignified wheelchair-accessible transport in Bengaluru and Chennai.",
    images: ["/images/hero.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WheelchairCabs",
  url: "https://wheelchaircabs.com",
  logo: "https://wheelchaircabs.com/icon.svg",
  description: "Wheelchair-accessible taxi service for hospital visits, airport transfers, and everyday travel in Bengaluru and Chennai.",
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "City", name: "Chennai" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8105825544",
    contactType: "customer service",
    areaServed: ["Bengaluru", "Chennai"],
    availableLanguage: ["en", "kn", "hi"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = getGlobalData();

  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20 flex flex-col min-h-screen`}
      >
        <GlassNav data={globalData.nav} />
        <div className="grow">
          {children}
        </div>
        <Footer data={globalData.footer} />
        <WhatsAppFAB data={globalData.whatsapp} />
      </body>
    </html>
  );
}
