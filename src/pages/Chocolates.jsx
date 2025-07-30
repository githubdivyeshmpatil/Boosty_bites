import React, { useEffect } from 'react';
import BackgroundSection from '../Components/BackgroundSection';
import aboutbg4 from '../assets/images/banner.png';
import WhatsappButton from '../Components/WhatsappButton';

function Chocolates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
   <BackgroundSection
  imageUrl={aboutbg4}
  className="w-full min-h-screen bg-no-repeat bg-top bg-contain p-5 flex items-start justify-center"
>
  {/* Optional content */}
</BackgroundSection>



      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">
        <WhatsappButton />
      </div>
    </>
  );
}

export default Chocolates;
