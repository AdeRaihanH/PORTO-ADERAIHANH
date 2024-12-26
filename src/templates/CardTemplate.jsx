import React, { useState } from "react";

const Quote = ({ isChange, newText }) => {
  if (isChange) {
    return (
      <div className="absolute inset-0 flex justify-center items-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300">
        <h1 className="text-white font-semibold text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-sm md:max-w-md break-words">
          {newText}
        </h1>
      </div>
    );
  } else {
    return null;
  }
};

const CardTemplate = ({ bgImage, newText }) => {
  const [isChange, setIsChange] = useState(false);

  function handleCardClick() {
    setIsChange(!isChange);
  }

  return (
    <div
      className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square bg-center bg-cover flex flex-col justify-center items-center rounded cursor-pointer transition-all duration-300 ${
        isChange ? "grayscale-0" : "grayscale hover:grayscale-0"
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={handleCardClick}
    >
      <Quote isChange={isChange} newText={newText} />
    </div>
  );
};

export default CardTemplate;
