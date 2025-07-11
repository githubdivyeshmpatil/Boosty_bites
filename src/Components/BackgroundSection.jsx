// components/BackgroundSection.jsx
import React from "react";

const BackgroundSection = ({ imageUrl, children, className = "" }) => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundSection;
