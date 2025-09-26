import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const carouselImages = [
  assets.c1,
  assets.c2,
  assets.c3,
  assets.c4,
  assets.c5,
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // 4 sec auto-slide
      return () => clearInterval(interval);
  }, []);

    return (
      <div className="relative z-0 border border-gray-400">
        {/* Carousel Container */}
        <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden flex items-center justify-center">
          {/* Images */}
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Overlay Text */}
          <div className="absolute text-center text-[#414141] bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
            {/* OUR BESTSELLER */}
            <div className="flex items-center justify-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
            </div>

            {/* Latest Arrivals */}
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>

            {/* SHOP IN */}
            <div className="flex items-center justify-center gap-2">
              <p className="font-semibold text-sm md:text-base">SHOP IN</p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
