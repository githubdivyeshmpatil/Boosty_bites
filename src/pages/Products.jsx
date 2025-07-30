import React, { useEffect } from 'react'
import aboutbg4 from '../assets/images/Productpage.png'
import BackgroundSection from '../Components/BackgroundSection'
import ChocolateSlider from '../Components/ChocolateSlider'
import Title from '../Components/Title'
import NutraceuticalChocolates from '../Components/NutraceuticalChocolates'
import FunctionalChocolateSlider from '../Components/FunctionalChocolates'
import WhatsappButton from '../Components/WhatsappButton'

function Products() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <BackgroundSection
  imageUrl={aboutbg4}
  className="w-full min-h-screen bg-no-repeat bg-top bg-contain p-5 flex items-start justify-center"
>
  {/* Your content here */}
</BackgroundSection>

       <div className="mt-6 md:mt-10 lg:mt-16 ">
          <Title
            text="Our chocolate products"
            dec="Smooth, rich, and irresistible—made with natural sweeteners and premium cocoa. Available in"
          />
          <ChocolateSlider />
        </div>

        <div className="">
          <Title
            text="Nutraceutical Chocolates for Kids"
            dec="A first-of-its-kind range designed for growing children—each bar is loaded with essential nutrients."
          />
          <NutraceuticalChocolates />

          <Title
            text="Functional Chocolate Squares"
            dec="Perfect for adults and fitness enthusiasts."
          />
          <FunctionalChocolateSlider />
        </div>
               <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">
  <WhatsappButton />
</div>

   </>
  )
}

export default Products