import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";

import StairEffect from "@/components/StairEffect";
import PageTransition from "@/components/PageTransition";

const font = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-leagueSpartan",
});

export const metadata: Metadata = {
  title: "Monabbir Bhuiyan",
  description: "Welcome to my Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
