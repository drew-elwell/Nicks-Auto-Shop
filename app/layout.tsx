import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | Trusted Auto Repair in Boulder, CO`,
  description: `Family-owned auto repair shop in Boulder, CO since ${BUSINESS_INFO.founded}. ASE-certified technicians providing honest, professional service for all foreign & domestic vehicles.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

