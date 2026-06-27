import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CheckATruck — Fleet Compliance and Management for UK HGV Fleets",
  description: "Digital daily vehicle checks, job management and professional invoicing for HGV, tipper, grab and plant fleets. DVSA compliant. No vehicle minimum. 7-day free trial, no card required.",
  keywords: ["vehicle checks", "walkaround checks", "DVSA compliance", "fleet management", "HGV checks", "commercial vehicle inspection", "waste transfer notes", "fleet invoicing", "tipper fleet software"],
  openGraph: {
    title: "CheckATruck — Fleet Compliance and Management for UK HGV Fleets",
    description: "From daily walkaround checks to digital invoicing. Built for HGV, tipper, grab and plant fleets. DVSA compliant. 7-day free trial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-50">
        {children}
      </body>
    </html>
  );
}
