"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HangingCTA from "@/components/Common/HangingCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { Rajdhani } from "next/font/google";
import "../styles/index.css";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${rajdhani.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <HangingCTA />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

