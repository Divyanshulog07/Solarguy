import React, { useState, useEffect, useRef } from "react";
import fifthImage from "../HomePageImage/thirdPart/5th.png";
import sixthImage from "../HomePageImage/thirdPart/6th.png";
import seventhImage from "../HomePageImage/thirdPart/7th.png";
import eighthImage from "../HomePageImage/thirdPart/8th.png";
import ninethImage from "../HomePageImage/thirdPart/9th.png";
import tenthImage from "../HomePageImage/thirdPart/10th.png";
import eleventhImage from "../HomePageImage/thirdPart/11th.png";
import twelvethImage from "../HomePageImage/thirdPart/12th.png";
import thirteenthImage from "../HomePageImage/thirdPart/13th.png";
import fourteenthImage from "../HomePageImage/thirdPart/14th.png";
import fifteenthImage from "../HomePageImage/thirdPart/15th.png";
import sixteenthImage from "../HomePageImage/thirdPart/16th.png";

const ThirdPart = () => {
  const [animateThirdPart, setAnimateThirdPart] = useState(false);
  const thirdPartRef = useRef(null);

  useEffect(() => {
    const thresholds = {
      lg: 0.3,
      md: 0,
      mobile: 0,
    };

    const observerThirdPart = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateThirdPart(true);
          observerThirdPart.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: thresholds[getDeviceType()] }
    );

    const currentThirdPartRef = thirdPartRef.current;

    if (currentThirdPartRef) {
      observerThirdPart.observe(currentThirdPartRef);
    }

    return () => {
      if (currentThirdPartRef) {
        observerThirdPart.unobserve(currentThirdPartRef);
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
      <div className="overflow-x-hidden lg:mt-0 md:-mt-10 -mt-10">
        <div
          ref={thirdPartRef}
          className={`font-bold text-center lg:mb-20 md:mb-20 mb-12 lg:text-4xl md:text-4xl text-2xl transform transition-transform duration-1000 ease-out delay-500 ${
            animateThirdPart
              ? "translate-x-0 opacity-100"
              : "lg:translate-x-[1024px] md:translate-x-[770px] translate-x-[360px] opacity-30"
          }`}
        >
          Quality Certification
        </div>
        <div
          className={`transform transition-transform duration-1000 ease-out delay-500 ${
            animateThirdPart
              ? "translate-x-0 opacity-100"
              : "lg:translate-x-[1450px] md:translate-x-[770px] translate-x-[370px] opacity-30"
          }`}
        >
          <div
            className={`lg:mt-3 md:mt-3 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 md:gap-10 gap-8 items-center`}
          >
            {[
              fifthImage,
              sixthImage,
              seventhImage,
              eighthImage,
              ninethImage,
              tenthImage,
              eleventhImage,
              twelvethImage,
              thirteenthImage,
              fourteenthImage,
              fifteenthImage,
              sixteenthImage,
            ].map((img, index) => (
              <div
                key={index}
                className="transform transition-transform duration-500 ease-out delay-200 hover:-translate-y-4"
              >
                <img
                  src={img}
                  alt={`img${index + 1}`}
                  className="object-cover lg:w-[40%] md:w-[50%] w-[60%] lg:ml-24 md:ml-14 ml-7 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPart;
