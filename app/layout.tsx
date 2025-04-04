import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
    title:
        "PrepSmart - AI Powered Real Time Interview Platform for Smarter Hiring",
    description:
        "PrepSmart.AI is an intelligent voice-driven interview platform that helps job seekers & companies assess candidates in real time using conversational AI",
    keywords:
        "interview platform, interview software, interview tool, interview platform for hiring, interview platform for recruiters, interview platform for companies, interview platform for employers, interview platform for job seekers, interview platform for hiring managers, interview platform for recruiters"
};
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    colorScheme: 'dark',
	userScalable: true
	
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={'${inter.className} antialiased'}>
                <Header />
                <main className="pt-[50px] pb-[50px]">{children}</main>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}