import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/images/kids1.png";
import img2 from "../assets/images/kids2.png";
import img3 from "../assets/images/kids1.png";
import img4 from "../assets/images/kids2.png"; // Reuse or update images as needed

const chocolates = [
  {
    name: "Boosty bites Chocolate",
    price: "$5.0",
    image: img1,
  },
  {
    name: "Boosty bites Chocolate",
    price: "$5.0",
    image: img2,
  },
  {
    name: "Boosty bites Chocolate",
    price: "$5.0",
    image: img3,
  },
  {
    name: "Boosty bites Chocolate",
    price: "$5.0",
    image: img4,
  },
];

function NutraceuticalChocolates() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-white">
      <div className="w-full max-w-screen-xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {chocolates.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#e9e9e9] border rounded-md shadow-md overflow-hidden group flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-[300px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={`chocolate-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hover Info */}
              <div className="h-[100px] relative">
                <div className="absolute bottom-0 left-0 w-full bg-[#421c00] text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="mt-1 text-sm tracking-wider">BUY NOW</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NutraceuticalChocolates;

