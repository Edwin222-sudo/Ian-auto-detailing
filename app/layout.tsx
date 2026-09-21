import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Maple Leaf Detail & Restoration LLC | Mobile Car Detailing in Ballwin, MO",
  description: "6 years of professional detailing experience. Interior/exterior details, paint correction, ceramic coating, ozone odor removal. Serving Ballwin and Greater St. Louis. Call (636) 284-8461.",
  keywords: ["car detailing Ballwin", "auto detailing St. Louis", "paint correction Ballwin", "ceramic coating Ballwin", "mobile detailing Ballwin MO"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
