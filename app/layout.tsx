import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Metrics from "@/components/Metrics";
import PowerfulFeature from "@/components/PowerfulFeature";
import Features from "@/components/Features";
import Companies from "@/components/Companies";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Companies />
        <Features />
        <PowerfulFeature />
        <Metrics />
        <Faq />
        <Footer />
      </body>
    </html>
  );
}
