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
    image: img1
  },
  {
    name: "Boosty bites Chocolate",
    price: "$5.0",
    image: img2
  },
  {
    name: "Boosty bites Chocolate",
    price: "$5.0",
    image: img3
  },
  {
    name: "Boosty bites Chocolate",
    price: "$5.0",
    image: img4
  }
];

function NutraceuticalChocolates() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const cardMargin = 16;
  const visibleCount = 4; // Updated to show 4 cards
  const [cardWidth, setCardWidth] = useState(300); // Initial fallback width

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && window.innerWidth >= 768) {
        const containerWidth = containerRef.current.offsetWidth;
        const width = (containerWidth - (visibleCount - 1) * cardMargin) / visibleCount;
        setCardWidth(width);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index + visibleCount < chocolates.length) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-screen-xl overflow-hidden px-4 md:px-0"
      >
        {/* Card Wrapper */}
        <div
          className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (cardWidth + cardMargin)}px)`
          }}
        >
          {chocolates.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:h-[400px] flex-shrink-0 mx-0 md:mx-2 mb-6 md:mb-0"
              style={{
                width: window.innerWidth < 768 ? "100%" : `${cardWidth}px`
              }}
            >
              <div className="h-full bg-[#e9e9e9] border rounded-md shadow-md overflow-hidden group relative flex flex-col">
                {/* Image */}
                <div className="h-[360px] p-0 flex items-center justify-center overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex items-center gap-6 mt-6">
        <button
          onClick={prev}
          className="w-24 h-12 flex items-center justify-center bg-[#4a1c08] p-4 shadow disabled:opacity-50"
          disabled={index === 0}
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>

        <button
          onClick={next}
          className="w-24 h-12 flex items-center justify-center bg-[#4a1c08] p-4 shadow disabled:opacity-50"
          disabled={index + visibleCount >= chocolates.length}
        >
          <FaArrowRight className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
}

export default NutraceuticalChocolates;
