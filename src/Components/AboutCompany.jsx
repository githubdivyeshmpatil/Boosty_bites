import React from "react";
import chocolateImg from "../assets/images/low.png"; // Replace with your actual image path

const AboutCompany = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic font-[cursive] text-black mb-6">
          About Us
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify mb-4">
          At <strong>Boosty Bites</strong>, we believe chocolate should not only taste divine but also nourish the body. Founded with a passion for purity and wellness, we are a next-generation chocolate manufacturing company focused on crafting premium chocolates made with natural sugars, no preservatives, and zero artificial ingredients.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify mb-4">
          Born from the idea that indulgence can be both guilt-free and health-positive, we create chocolates that redefine snacking, especially for health-conscious individuals and growing children. Our state-of-the-art facility is built on sustainability, quality, and innovation, ensuring every bite carries the essence of nature and nutrition.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify mb-4">
          We are also pioneers in nutraceutical chocolates for kids, developing functional treats that combine the joy of chocolate with the benefits of essential vitamins, minerals, and natural bioactives—supporting immunity, energy, and cognitive development in a delicious form.
        </p>

       <ul className="list-disc list-outside text-left ml-4 text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
  <li>Essential vitamins & minerals</li>
  <li>Natural bioactives to support immunity, energy, and cognitive development</li>
  <li>Better ingredients</li>
  <li>Proven health benefits</li>
  <li>Ethical sourcing</li>
  <li>Environmental responsibility</li>
</ul>


        {/* Read More Button */}
        <div className="mt-6 flex items-center justify-center lg:justify-start">
          <button className="flex items-center text-brown-700 text-lg italic font-semibold hover:underline">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 w-6 h-4 fill-current text-brown-700"
              viewBox="0 0 24 24"
            >
              <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chocolate Image */}
    {/* Chocolate Image */}
<div className="w-full lg:w-1/2 flex justify-center">
  <img
    src={chocolateImg}
    alt="Chocolate Bar"
    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
  />
</div>

    </section>
  );
};

export default AboutCompany;
