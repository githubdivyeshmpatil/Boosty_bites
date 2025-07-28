import React from "react";
import chocolateImage from "../assets/images/post1.png"; // make sure this path is correct

function ChocolateVisionSection() {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
            At Boosty Bites, we’re leading this evolution.
          </h2>
          
          <ul className="space-y-4 sm:text-base md:text-lg text-justify text-base text-gray-700 list-none">
            <li className="flex items-start gap-2">
              <span className="text-xl">🔹</span>
              <p>
                <strong>Natural & Clean-Label:</strong> We use only natural sugars like stevia, dates, jaggery, or monk fruit extract—never refined white sugar.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">🔹</span>
              <p>
                <strong>No Preservatives or Artificial Flavors:</strong> We believe in shelf-stable purity, not shelf-life extension at the cost of health.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">🔹</span>
              <p>
                <strong>Functional & Nutraceutical:</strong> Our R&D team is constantly innovating with ingredients that support immunity, brain development, digestion, and bone health.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">🔹</span>
              <p>
                <strong>Sustainable Sourcing:</strong> Our cocoa is sourced from certified farms with ethical labor practices and eco-friendly methods.
              </p>
            </li>
          </ul>

          <p className="text-lg text-gray-800 font-medium pt-2">
            Our goal is simple: To build the healthiest chocolate brand for future generations.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={chocolateImage}
            alt="Chocolate Concept"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ChocolateVisionSection;
  