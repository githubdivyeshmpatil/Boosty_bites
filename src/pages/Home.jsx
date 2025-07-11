import React from 'react'
import ChocolateBanner from '../Components/ChocolateBanner'
import AboutCompany from '../Components/AboutCompany'
import Title from '../Components/Title'
import ChocolateVisionSection from '../Components/ChocolateVisionSection'
import ChocolateSlider from '../Components/ChocolateSlider'
import NutraceuticalChocolates from '../Components/NutraceuticalChocolates'
import DistributionAvailability from '../Components/DistributionAvailability'
import FunctionalChocolateSlider from '../Components/FunctionalChocolates'
import Navbar from '../Components/Navbar'
import OfferChocolateSection from '../Components/OfferChocolateSection'
import WhatsappButton from '../Components/WhatsappButton'

function Home() {
  return (
    <>
      {/* Wrapper with responsive container and overflow-x-hidden */}
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <ChocolateBanner />

        <div className="mt-6 md:mt-10 lg:mt-16 px-4">
          <AboutCompany />
        </div>

        <Title
          text="The Future of Chocolate"
          dec="Chocolate is evolving—from being just a sweet treat to becoming a functional food. Consumers today demand more from their confections: better ingredients, health benefits, ethical sourcing, and environmental responsibility."
        />
        <ChocolateVisionSection />

        <Title
          text="Our chocolate products"
          dec="Smooth, rich, and irresistible—made with natural sweeteners and premium cocoa. Available in"
        />
        <ChocolateSlider />

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

        <DistributionAvailability />
        <OfferChocolateSection />
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">
  <WhatsappButton />
</div>

    </>
  )
}

export default Home
