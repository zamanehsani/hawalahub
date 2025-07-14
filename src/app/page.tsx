// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import ContactInfo from "@/components/Contact/contactInfo";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حواله خانه",
  description: "بهترین همکار بین المللی انتقال پول شما",
  keywords: [
    "حواله",
    "انتقال پول",
    "خدمات مالی",
    "حواله خانه",
    "پرداخت بین المللی",
    "ارسال پول",
    "خدمات حواله",
  ],
  authors: [{ name: "حواله خانه" }],
  openGraph: {
    title: "حواله خانه",
    description: "بهترین همکار بین المللی انتقال پول شما",
    type: "website",
    locale: "fa_IR",
    url: "https://hawalahub.com",
    siteName: "حواله خانه",
    images: [
      {
        url: "/text_only.png",
        width: 1200,
        height: 630,
        alt: "حواله خانه",
      },
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "حواله خانه آیکون",
      },
    ],
  },
  robots: "index, follow",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/icon_only.png" },
  ],
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing />
      <Blog /> */}

      <ContactInfo />
    </>
  );
}
