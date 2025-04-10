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
    "Cloud SMS and Otp BD offers reliable and fast SMS and Otp services for businesses in Bangladesh. Get bulk SMS and Otp, API integration, and promotional messages.",
  keywords: [
    "Cloud SMS and Otp BD",
    "bulk SMS and Otp",
    "SMS and Otp API",
    "Bangladesh SMS and Otp services",
  ],
  // authors: [{ name: "Your Name", url: "https://www.yourwebsite.com" }],
  openGraph: {
    title: "Cloud SMS and Otp BD - Best SMS and Otp Solutions",
    description: "Reliable bulk SMS and Otp and API services in Bangladesh.",
    url: "https://www.cloudsms and Otpbd.com",
    siteName: "Cloud SMS and Otp BD",
    type: "website",
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cloud Sms and Otp BD Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud SMS and Otp BD - Best SMS and Otp Solutions",
    description: "Fast and secure bulk SMS and Otp services in Bangladesh.",
    // images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
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
            <NextTopLoader />
            {children}
            <FloatingMessenger />
          </ThemeProvider>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
