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
  // other metadata
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
  },
  robots: "index, follow",
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
