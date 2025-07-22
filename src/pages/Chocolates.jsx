import React, { useEffect } from 'react'
import BackgroundSection from '../Components/BackgroundSection'
import aboutbg4 from '../assets/images/chocolatebg.jpg'
import Title from '../Components/Title'
import ChocolateSlider from '../Components/ChocolateSlider'
import NutraceuticalChocolates from '../Components/NutraceuticalChocolates'
import FunctionalChocolateSlider from '../Components/FunctionalChocolates'
import WhatsappButton from '../Components/WhatsappButton'

function Chocolates() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
   <>
     <BackgroundSection
        imageUrl={aboutbg4}
        className="h-[500px] p-10"
      >
      </BackgroundSection>
             <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">
  <WhatsappButton />
</div>

   </>
  )
}

export default Chocolates