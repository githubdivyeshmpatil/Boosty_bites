import React, { useEffect, lazy, Suspense } from 'react';
import aboutbg from '../assets/images/boostybites_choco_blue.png';
import WhatsappButton from '../Components/WhatsappButton';

const AboutCompany = lazy(() => import('../Components/AboutCompany'));

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative w-full">
        {/* ✅ Optimized PNG Image */}
        <img
          src={aboutbg}
          alt="Boosty Bites"
          loading="eager"
          decoding="async"
          className="w-full h-auto object-contain object-top z-0 relative"
        />

        {/* Optional overlay */}
        <div className="absolute z-10"></div>
      </div>

      {/* ✅ Lazy load company content */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <AboutCompany />
      </Suspense>
            <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">        
  <WhatsappButton />
</div>

    </>
  );
}

export default About;
