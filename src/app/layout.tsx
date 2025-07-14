"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import localFont from "next/font/local";
import "../styles/index.css";

const lateef = localFont({
  variable: "--font-lateef",
  src: [
    {
      weight: "400",
      path: "./fonts/lateef-Regular.ttf",
    },
    {
      weight: "600",
      path: "./fonts/lateef-Semibold.ttf",
    },
  ],
});

const tajawal = localFont({
  variable: "--font-tajawal",
  src: [
    {
      weight: "400",
      path: "./fonts/Tajawal-Regular.ttf",
    },
    {
      weight: "600",
      path: "./fonts/Tajawal-Bold.ttf",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fa" dir="rtl">
      {/*
      <head /> will contain the components returned by the nearest parent
      head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      <head />
      */}

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${tajawal.variable} ${lateef.variable}`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
