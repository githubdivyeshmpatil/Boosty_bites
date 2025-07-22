import React, { useEffect } from 'react'
import TermsAndConditions from '../Components/TermsAndConditions'
import BackgroundSection from '../Components/BackgroundSection'
import aboutbg2 from '../assets/images/bg2.jpg'

function Terms() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
   <>
    <BackgroundSection
        imageUrl={aboutbg2}
        className="h-[500px] p-10"
      >
      </BackgroundSection>
   <TermsAndConditions/>
   </>
  )
}

export default Terms