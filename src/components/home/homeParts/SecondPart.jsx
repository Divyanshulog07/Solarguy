import React, { useEffect, useRef, useState } from "react";
import thirdImage from "../HomePageImage/secondPart/3rd.png";
import fourthImage from "../HomePageImage/secondPart/4th.jpg";
import { FaAngleRight } from "react-icons/fa";

const SecondPart = ({ isDarkMode }) => {
  const [animateSecondPart, setAnimateSecondPart] = useState(false);
  const secondPartRef = useRef(null);
  useEffect(() => {
    const thresholds = {
      lg: 0.3,
      md: 0,
      mobile: 0,
    };

    const observerSecondPart = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSecondPart(true);
          observerSecondPart.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: thresholds[getDeviceType()] }
    );

    const currentSecondPartRef = secondPartRef.current;

    if (currentSecondPartRef) {
      observerSecondPart.observe(currentSecondPartRef);
    }

    return () => {
      if (currentSecondPartRef) {
        observerSecondPart.unobserve(currentSecondPartRef);
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
      <div className="overflow-x-hidden">
        <div
          ref={secondPartRef}
          className={`lg:mt-36 md:mt-20 mt-10 mb-40 relative transform transition-transform duration-1000 ease-out delay-500 ${
            animateSecondPart
              ? "translate-x-0 opacity-100"
              : "lg:-translate-x-[900px] md:-translate-x-[800px] -translate-x-[360px] opacity-30"
          }`}
        >
          <div className="lg:flex lg:justify-between object-cover">
            <div className="relative">
              <img
                className="lg:h-[450px] md:h-[550px] h-[400px] lg:w-[750px] md:w-[800px] w-[400px] opacity-20"
                src={thirdImage}
                alt="thirdimage"
              />
              <div className="absolute inset-0 flex flex-col text-justify justify-center items-start lg:ml-24 lg:px-0 md:px-7 px-4 lg:mr-5">
                <p className="uppercase font-bold mb-2 lg:text-xl md:text-xl text-sm">
                  why choose us ?
                </p>
                <p className="font-bold mb-2 lg:text-3xl md:text-3xl text-xl">
                  We Are Building a <br /> Sustainable Future
                </p>
                <p className="mb-5 lg:text-lg md:text-lg text-xs">
                  The cutting-edge technology with machines and equipment
                  sourced from the best in class producers, aim to help in cost
                  leadership, scale of operations and reliability standards as
                  per global benchmarks.
                </p>
                <div className="flex items-center gap-3">
                  <FaAngleRight
                    size={25}
                    className={`rounded-full ${
                      isDarkMode ? "text-black bg-white" : "bg-black text-white"
                    }`}
                  />
                  <p className="font-bold mb-2 lg:text-xl md:text-xl text-sm">
                    Affordable & long-lasting one-time investment
                  </p>
                </div>
                <p className="mb-7 lg:text-lg md:text-lg text-xs lg:ml-9 md:ml-9 ml-9">
                  Enjoy cost-effective advantages without breaking the bank.
                  Invest in the solar power system for long-term savings on
                  electricity bills.
                </p>
                <div className="flex items-center gap-3">
                  <FaAngleRight
                    size={25}
                    className={`rounded-full ${
                      isDarkMode ? "text-black bg-white" : "bg-black text-white"
                    }`}
                  />
                  <p className="font-bold mb-2 lg:text-xl md:text-xl text-sm">
                    Reduce carbon footprint, save earth!
                  </p>
                </div>
                <p className="lg:text-lg md:text-lg text-xs lg:ml-9 md:ml-9 ml-9">
                  Solar power is crucial for achieving climate objectives and
                  preserving the Earth with clean, green energy.
                </p>
              </div>
            </div>
            <div className="lg:mr-32 md:mt-10 mt-7 lg:px-0 md:px-5 px-2">
              <img
                className="lg:h-[400px] md:h-[500px] h-[300px] lg:w-[650px] md:w-[820px] w-[400px]"
                src={fourthImage}
                alt="fourthimage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPart;
