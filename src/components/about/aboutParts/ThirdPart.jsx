import React, { useEffect, useRef, useState } from "react";
import sixthImage from "../aboutPageImages/third-part/6th.png";

const ThirdPart = ({ isDarkMode }) => {
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
      <div
        className={`lg:mt-20 md:mt-20 mt-16 ${
          isDarkMode ? "bg-gray-800 py-20" : "bg-gray-200 pt-5 pb-20"
        }`}
      >
        <div
          ref={thirdPartRef}
          className={`transform transition-transform duration-1000 ease-out delay-500 ${
            animateThirdPart
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-30"
          }`}
        >
          <div className="text-center">
            <div className="uppercase font-semibold lg:text-xl md:text-xl text-lg">
              Our Story
            </div>
            <div className="font-bold lg:text-2xl md:text-2xl text-xl">
              Story Behind Solarguy
            </div>
          </div>
          <div className="lg:flex items-center lg:mt-0 lg:px-20 md:px-5 px-10">
            <div className="lg:w-1/3 md:w-full w-full lg:mt-0 md:mt-8 mt-5">
              <img
                src={sixthImage}
                alt="sixthimage"
                className="md:mx-auto mx-auto"
              />
            </div>
            <div className="lg:flex md:flex lg:gap-10 md:gap-7 lg:w-[70%] md:w-full w-full lg:mt-0 md:mt-8 mt-7">
              {/* first-card  */}
              <div
                className={`rounded-lg border border-gray-300 shadow-lg p-7 lg:w-[650px] md:w-[650px] w-full lg:h-[200px] md:h-[250px] hover:bg-blue-900 hover:border-none hover:text-white hover:-translate-y-4 duration-700 ${
                  isDarkMode
                    ? "bg-black shadow-gray-300"
                    : "bg-white shadow-gray-800"
                }`}
              >
                {/* Card content */}
                <h2 className="text-xl font-bold mb-2">Our Vision</h2>
                <p className="text-justify">
                  Committed to nation-building, we aim to provide accessible,
                  affordable, cleaner energy for people's well-being and
                  sustainability.
                </p>
              </div>
              {/* second-card  */}
              <div
                className={`rounded-lg border border-gray-300 shadow-lg p-7 lg:w-[650px] md:w-[650px] w-full lg:h-[200px] md:h-[250px] hover:bg-blue-900 hover:border-none hover:text-white hover:-translate-y-4 duration-700 lg:mt-0 md:mt-0 mt-7 ${
                  isDarkMode
                    ? "bg-black shadow-gray-300"
                    : "bg-white shadow-gray-800"
                }`}
              >
                {/* Card content */}
                <h2 className="text-xl font-bold mb-2">Our Mission</h2>
                <p className="text-justify">
                  We aim for recognition with ambitious scope, rapid execution,
                  and high-quality operations, establishing us as clean energy
                  advocates.
                </p>
              </div>
              {/* third-card  */}
              <div
                className={`rounded-lg border border-gray-300 shadow-lg p-7 lg:w-[650px] md:w-[650px] w-full lg:h-[200px] md:h-[250px] hover:bg-blue-900 hover:border-none hover:text-white hover:-translate-y-4 duration-700 lg:mt-0 md:mt-0 mt-7 ${
                  isDarkMode
                    ? "bg-black shadow-gray-300"
                    : "bg-white shadow-gray-800"
                }`}
              >
                {/* Card content */}
                <h2 className="text-xl font-bold mb-2">Our Achievement</h2>
                <p className="text-justify">
                  Solarguy achieves a Major Milestone in Renewable Energy
                  Dispatch with the Highest Recorded Output of 1.7MW in a Single
                  day in the Month of July.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPart;
