import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import aboutbg from "../assets/images/boostybites_choco_blue.png";
import WhatsappButton from "../Components/WhatsappButton";

const AboutCompany = lazy(() => import("../Components/AboutCompany"));

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ SEO Helmet for About Page */}
      <Helmet>
        <title>Boosty Bites - About Us</title>
        <meta
          name="description"
          content="Learn about Boosty Bites – a next-generation chocolate manufacturing company making premium handmade & nutraceutical chocolates."
        />
        <meta
          name="keywords"
          content="Boosty Bites, about, company, handmade chocolate, functional chocolate, nutraceutical chocolate"
        />
        <meta property="og:title" content="Boosty Bites - About Us" />
        <meta
          property="og:description"
          content="Learn about Boosty Bites, pioneers in functional and nutraceutical chocolates for kids and adults."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.boostybites.in/about" />
        <meta
          property="og:image"
          content="https://www.boostybites.in/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boosty Bites - About Us" />
        <meta
          name="twitter:description"
          content="Discover Boosty Bites story, our mission, and how we are redefining chocolates for health-conscious people."
        />
        <meta
          name="twitter:image"
          content="https://www.boostybites.in/og-image.jpg"
        />
      </Helmet>

      {/* ✅ Page Hero Background */}
      <div className="relative w-full">
        <img
          src={aboutbg}
          alt="Boosty Bites"
          loading="eager"
          decoding="async"
          className="w-full h-auto object-contain object-top z-0 relative"
        />
        <div className="absolute z-10"></div>
      </div>

      {/* ✅ Lazy load company content */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <AboutCompany />
      </Suspense>

      {/* ✅ Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">
        <WhatsappButton />
      </div>
    </>
  );
}

export default About;
