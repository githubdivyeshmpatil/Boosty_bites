import React from 'react';
import chocolateImage from '../assets/images/banner.png'; // correct image path

const OfferChocolateSection = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4 bg-white">
      <div className="w-full max-w-6xl border bg-white flex flex-col md:flex-row items-center md:items-start px-4 py-10 gap-8">
        {/* Left side image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={chocolateImage}
            alt="Chocolate Offer"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>

        {/* Right side text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-cursive text-[#3c1303] mb-2">
            Offers on chocolates
          </h2>
          <p className="text-xl md:text-2xl font-cursive text-[#3c1303]">
            Get 5% Offer <br />
            any Chocolate items
          </p>
          <button className="mt-4 bg-[#3c1303] text-white py-2 px-6 text-sm uppercase hover:bg-[#52200a] transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferChocolateSection;
