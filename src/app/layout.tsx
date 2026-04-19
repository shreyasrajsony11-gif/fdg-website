import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FDG \u2014 Fourth Dimension Group | Architecture & Project Management Consultancy",
  description:
    "28 years. 1,300+ projects. India's most trusted end-to-end architecture, engineering, interior design, and project management consultancy. Based in Pune, delivering worldwide.",
  keywords: [
    "architecture",
    "project management",
    "interior design",
    "FDG",
    "Fourth Dimension Group",
    "Pune",
    "India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-fdg-black text-fdg-text font-dm antialiased">
        <Preloader />
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
