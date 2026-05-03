import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CheckaTruck - Daily Vehicle Walkaround Checks for Commercial Fleets",
  description: "Digital daily vehicle checks for commercial fleets. DVSA compliant walkaround inspections with photo evidence, defect reporting, and offline capability. 70p per vehicle per week.",
  keywords: ["vehicle checks", "walkaround checks", "DVSA compliance", "fleet management", "HGV checks", "commercial vehicle inspection"],
  openGraph: {
    title: "CheckaTruck - Daily Vehicle Walkaround Checks",
    description: "Digital daily vehicle checks for commercial fleets. DVSA compliant, works offline.",
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
