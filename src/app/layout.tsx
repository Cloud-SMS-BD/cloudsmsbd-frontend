import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ReduxProvider } from "@/redux/ReduxProvider";
import FloatingMessenger from "@/components/FloatingMessenger/FloatingMessenger ";
import NextTopLoader from "nextjs-toploader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud SMS BD",
  description:
    "Cloud SMS BD offers reliable and fast SMS and OTP services for businesses in Bangladesh. Get bulk SMS, OTP, API integration, and promotional messages.",
  keywords: [
    "Cloud SMS BD",
    "bulk SMS Bangladesh",
    "OTP service BD",
    "SMS API Bangladesh",
    "OTP API BD",
    "SMS and OTP provider",
  ],
  authors: [{ name: "Cloud SMS BD", url: "https://cloudsmsbd.com/" }],
  creator: "Cloud SMS BD",
  publisher: "Cloud SMS BD",
  openGraph: {
    title: "Cloud SMS BD - Best SMS and OTP Solutions",
    description: "Reliable bulk SMS and OTP API services in Bangladesh.",
    url: "https://cloudsmsbd.com/",
    siteName: "Cloud SMS BD",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud SMS BD",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader  showSpinner={false} />

            {children}
            <FloatingMessenger />
          </ThemeProvider>
          <Toaster />
        </ReduxProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cloud SMS BD",
              url: "https://cloudsmsbd.com/",
              logo: "/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+8801760001377",
                contactType: "customer service",
                areaServed: "BD",
                availableLanguage: ["English", "Bengali"],
              },
              sameAs: ["https://www.facebook.com/fb.cloudsmsbd"],
            }),
          }}
        />
      </body>
    </html>
  );
}
