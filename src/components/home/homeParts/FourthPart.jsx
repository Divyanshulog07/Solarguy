import React, { useState, useEffect, useRef } from "react";
import seventeenImage from "../HomePageImage/fourthPart/17th.jpeg";
import eighteenImage from "../HomePageImage/fourthPart/18th.jpeg";
import nineteenImage from "../HomePageImage/fourthPart/19th.jpeg";
import twentyImage from "../HomePageImage/fourthPart/20th.jpeg";
import image01 from "../HomePageImage/fourthPart/01-img.png";
import image02 from "../HomePageImage/fourthPart/02-img.png";
import image03 from "../HomePageImage/fourthPart/03-img.png";
import image04 from "../HomePageImage/fourthPart/04-img.png";

const FourthPart = () => {
  const [animateFourthPart, setAnimateFourthPart] = useState(false);
  const fourthPartRef = useRef(null);

  useEffect(() => {
    const thresholds = {
      lg: 0.3,
      md: 0,
      mobile: 0,
    };

    const observerFourthPart = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateFourthPart(true);
          observerFourthPart.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: thresholds[getDeviceType()] }
    );

    const currentFourthPartRef = fourthPartRef.current;

    if (currentFourthPartRef) {
      observerFourthPart.observe(currentFourthPartRef);
    }

    return () => {
      if (currentFourthPartRef) {
        observerFourthPart.unobserve(currentFourthPartRef);
      }
    };
  }, []);

  const getDeviceType = () => {
    const breakpoints = {
      lg: 1024,
      md: 768,
      mobile: 0,
    };

    const screenWidth = window.innerWidth;
    if (screenWidth >= breakpoints.lg) {
      return "lg";
    } else if (screenWidth >= breakpoints.md) {
      return "md";
    } else {
      return "mobile";
    }
  };
  
  return (
    <>
      <div
        ref={fourthPartRef}
        className={`lg:mt-40 md:mt-40 mt-28 transform transition-transform duration-1000 ease-out delay-500 ${
          animateFourthPart
            ? "translate-y-0 opacity-100"
            : "translate-y-32 opacity-30"
        }`}
      >
        <div
          className={`font-bold text-center lg:mb-20 md:mb-20 mb-12 lg:text-4xl md:text-4xl text-2xl`}
        >
          Industries
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 px-3`}
        >
          {[
            {
              mainImage: seventeenImage,
              aboveImage: image01,
              text: "Agriculture",
            },
            {
              mainImage: eighteenImage,
              aboveImage: image02,
              text: "Recidential",
            },
            {
              mainImage: nineteenImage,
              aboveImage: image03,
              text: "Commercial",
            },
            {
              mainImage: twentyImage,
              aboveImage: image04,
              text: "Industrial",
            },
          ].map((images, index) => (
            <div
              key={index}
              className="relative grayscale hover:grayscale-0 delay-200"
            >
              {/* Main image */}
              <img
                src={images.mainImage}
                alt={`img${index + 1}`}
                className="object-cover w-[400px] h-[450px] rounded-lg"
              />
              {/* Display above images */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
                <img
                  src={images.aboveImage}
                  alt={`aboveImg${index + 1}`}
                  className="object-cover w-[200px] h-[200px] opacity-70"
                />
              </div>
              {/* Text message */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-center uppercase text-4xl font-bold text-white">
                  {images.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FourthPart;
