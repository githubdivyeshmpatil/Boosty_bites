import React from 'react';
import leftImg from '../assets/images/pata2.png';
import rightImg from '../assets/images/pata2.png';

function Title({ text, dec }) {
  return (
    <div className="bg-[#8f3c14] h-48 md:h-60 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center relative text-white w-full ">
        {/* Left Image */}
        <img
          src={leftImg}
          alt="left"
          className="w-24 h-24 md:w-36 md:h-36 absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:block"
        />

        {/* Center Text */}
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{text}</h2>
          {dec && <p className="mt-2 text-sm sm:text-base md:text-lg  max-w-2xl mx-auto">{dec}</p>}
        </div>

        {/* Right Image */}
        <img
          src={rightImg}
          alt="right"
          className="w-24 h-24 md:w-36 md:h-36 absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block"
        />
      </div>
    </div>
  );
}

export default Title;
