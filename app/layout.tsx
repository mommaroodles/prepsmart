import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import type { Viewport } from 'next'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as needed
});

export const metadata: Metadata = {
  title:
    "PrepSmart - AI Powered Real Time Interview Platform for Smarter Hiring",
  description:
    "PrepSmart.AI is an intelligent voice-driven interview platform that helps companies assess candidates in real time using conversational AI",
  keywords:
    "interview platform, interview software, interview tool, interview platform for hiring, interview platform for recruiters, interview platform for companies, interview platform for employers, interview platform for job seekers, interview platform for hiring managers, interview platform for recruiters"
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}

