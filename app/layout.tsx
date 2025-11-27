import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/ui/CustomCursor";
import SmoothScrolling from "./components/SmoothScrolling";
import Footer from "./sections/Footer";
import Header from "./sections/header";

import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Variable.ttf",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xplorta",
  description: "Analize your social backups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${clashDisplay.variable} antialiased bg-background`}>
          <CustomCursor />
        <SmoothScrolling>

          <div className="flex flex-col min-h-screen w-full max-w-6xl mx-auto">
            <Header />
            <main className="flex-grow w-full mt-10">{children}</main>
            <Footer />
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
