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
      path: "fonts/Lateef-Regular.ttf",
    },
    {
      weight: "600",
      path: "fonts/Lateef-SemiBold.ttf",
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
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sewpxfvi94");
            `,
          }}
        />
      </head>

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
