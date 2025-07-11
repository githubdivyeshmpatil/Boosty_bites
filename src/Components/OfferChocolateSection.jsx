import React from 'react';
import chocolateImage from '../assets/images/boul3.png'; // correct image path

const OfferChocolateSection = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4 bg-white">
      {/* Border box with image inside bottom */}
      <div className="w-full max-w-4xl border text-center px-4 pt-10 pb-10 bg-white relative">
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

        {/* Image at the bottom inside border */}
        <div className="mt-10">
          <img
            src={chocolateImage}
            alt="Chocolate Offer"
            className="mx-auto max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferChocolateSection;
