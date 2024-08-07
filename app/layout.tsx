import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Commands } from "./components/Commands";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khai's Big World",
  description: "Gallery of my adventures and experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer
          socialMedia={{
            linkedin: 'https://linkedin.com/in/khaifahmi/',
            github: 'https://github.com/khaifahmi99/',
            website: 'https://kfzaki.com/',
          }}
        />
        <Commands />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
