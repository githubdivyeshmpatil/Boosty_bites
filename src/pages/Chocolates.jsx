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
        className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
      >
        {/* Optional: Add content here if needed */}
      </BackgroundSection>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">
        <WhatsappButton />
      </div>
    </>
  );
}

export default Chocolates;
