import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imageBoxBg from "../assets/images/slider-bg1.png";
import BackgroundSection from "../Components/BackgroundSection";
import aboutbg3 from '../assets/images/te2.jpg'

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Customer",
    text: "long established fact that a reader will be distracted by the it has",
    image: "/img/te.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Nutritionist",
    text: "I recommend these chocolates to kids for a balanced treat.",
    image: "/img/te.jpg",
  },
  {
    id: 3,
    name: "Rohan Desai",
    role: "Parent",
    text: "My children love it! And I feel safe giving it to them.",
    image: "/img/te.jpg",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Doctor",
    text: "Great product with natural ingredients. Tastes amazing!",
    image: "/img/te.jpg",
  },
  {
    id: 5,
    name: "Kunal Joshi",
    role: "Fitness Coach",
    text: "Perfect post-workout snack with zero guilt!",
    image: "/img/te.jpg",
  },
  {
    id: 6,
    name: "Ritika Jain",
    role: "Teacher",
    text: "Even in school, kids love having Boosty Bites!",
    image: "/img/te.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(300);
  const [visibleCount, setVisibleCount] = useState(1);
  const cardMargin = 16;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        let cards = 1;
        if (window.innerWidth >= 1024) cards = 3;
        else if (window.innerWidth >= 768) cards = 2;

        const totalMargin = (cards - 1) * cardMargin;

        if (cards === 1) {
          setCardWidth(containerWidth * 0.95); // tighter for mobile
        } else {
          const width = (containerWidth - totalMargin) / cards;
          setCardWidth(width);
        }

        setVisibleCount(cards);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index + visibleCount < testimonials.length) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <BackgroundSection
        imageUrl={aboutbg3}
        className="h-[500px] p-10"
      >
      </BackgroundSection>
    <div className="w-full flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        What Our Customers Say
      </h2>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-screen-xl overflow-hidden px-2 sm:px-4"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (cardWidth + cardMargin)}px)`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 mb-6 px-1 sm:px-2"
              style={{
                width: `${cardWidth}px`,
                margin: visibleCount === 1 ? "0 auto" : undefined,
              }}
            >
              <div
                className="bg-center bg-no-repeat bg-cover rounded-2xl px-3 py-5 sm:px-4 md:px-6 flex flex-col items-center text-center relative overflow-hidden min-h-[400px]"
                style={{ backgroundImage: `url(${imageBoxBg})` }}
              >
                <div className="absolute  rounded-2xl backdrop-blur-sm" />
                <div className="relative z-10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 mx-auto border-2 border-white"
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-white">{t.name}</h3>
                  <p className="text-xs sm:text-sm text-white mb-2">{t.role}</p>
                  <p className="text-white text-sm max-w-xs mx-auto px-2">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
     <div className="flex justify-center items-center cursor-pointer gap-3 mt-6">
 <button
  onClick={prev}
  className="bg-[#5a2918] hover:bg-gray-300 p-2 h-10 w-14 sm:h-12 sm:w-16 flex justify-center items-center rounded disabled:opacity-50"
  disabled={index === 0}
>
  <FaChevronLeft className="text-white" />
</button>
<button
  onClick={next}
  className="bg-[#5a2918] hover:bg-gray-300 p-2 h-10 w-14 sm:h-12 sm:w-16 flex justify-center items-center rounded disabled:opacity-50"
  disabled={index + visibleCount >= testimonials.length}
>
  <FaChevronRight className="text-white" />
</button>

</div>

    </div>
    </>
  );
};

export default Testimonials;
