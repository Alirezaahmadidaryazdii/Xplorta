import type { Metadata } from "next";
import SmoothScrolling from "./components/SmoothScrolling";
import CustomCursor from "./components/ui/CustomCursor";
import "./globals.css";
import Footer from "./sections/Footer";
import Header from "./sections/header";

import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    {
      path: "../public/Fonts/ClashDisplay-Variable.ttf",
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
          </div>
            <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
