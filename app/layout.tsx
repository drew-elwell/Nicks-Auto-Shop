import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nick's Auto Repair | Trusted Auto Repair in Boulder, CO",
  description: "Family-owned auto repair shop in Boulder, CO since 1977. ASE-certified technicians providing honest, professional service for all foreign & domestic vehicles.",
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

