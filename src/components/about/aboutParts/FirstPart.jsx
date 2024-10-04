import React, { useEffect, useRef, useState } from "react";
import firstImage from "../aboutPageImages/first-part/1st.jpg";
import secondImage from "../aboutPageImages/first-part/2nd.jpg";
import thirdImage from "../aboutPageImages/first-part/3rd.jpeg";

const FirstPart = ({ isDarkMode }) => {
  const [animateFirstPart, setAnimateFirstPart] = useState(false);
  const firstPartRef = useRef(null);

  useEffect(() => {
    const thresholds = {
      lg: 0.3,
      md: 0,
      mobile: 0,
    };

    const observerFirstPart = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateFirstPart(true);
          observerFirstPart.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: thresholds[getDeviceType()] }
    );

    const currentFirstPartRef = firstPartRef.current;

    if (currentFirstPartRef) {
      observerFirstPart.observe(currentFirstPartRef);
    }

    return () => {
      if (currentFirstPartRef) {
        observerFirstPart.unobserve(currentFirstPartRef);
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
        ref={firstPartRef}
        className={`lg:flex lg:gap-20 lg:-mt-[145px] md:-mt-[640px] -mt-[480px] lg:px-28 md:px-20 px-7 items-center transition-opacity duration-1000 delay-500 overflow-hidden ${
          animateFirstPart ? "opacity-100" : "opacity-0"
        } ${isDarkMode ? "bg-gray-800 py-20" : "bg-gray-200 py-20"}`}
      >
        {/* Left container */}
        <div
          className={`lg:w-1/2 md:w-full w-full transform transition-transform duration-1000 ease-out delay-500 ${
            animateFirstPart
              ? "translate-x-0 opacity-100"
              : "lg:-translate-x-[900px] md:-translate-x-[800px] -translate-x-[390px] opacity-0"
          }`}
        >
          <img
            src={firstImage}
            alt="firstimage"
            className="object-cover rounded-xl w-full h-auto"
          />
        </div>
        {/* Right container */}
        <div
          className={`lg:w-1/2 md:w-full w-full transform transition-transform duration-1000 ease-out delay-500 ${
            animateFirstPart
              ? "translate-x-0 opacity-100"
              : "lg:translate-x-[900px] md:translate-x-[800px] translate-x-[390px] opacity-0"
          }`}
        >
          <div>
            <h2 className="uppercase text-3xl font-bold mb-4 lg:mt-0 md:mt-10 mt-10">
              About Company
            </h2>
            <p className="font-bold mb-4 text-justify">
              With our deep and 30 years long understanding of human need for
              ever growing sources of energy, we realized that fossil fuel must
              make way for renewable and green sources.{" "}
            </p>
            <p className="mb-4 text-justify">
              Our pursuits led us to set up the most advanced 600 MW solar
              photovoltaic modules manufacturing unit spread over a sprawling
              2,20,000 sqft area at Nagpur, the heart of India, from where we
              cater to the solar assets management needs of our clients across
              the country.
            </p>
            <p className="mb-4 text-justify">
              We specialize in manufacturing high efficiency solar PV modules
              using advanced Mono PERC and Bifacial technology. We offer our
              clients the full spectrum of photovoltaic solar products,
              applications, solutions and services, from small domestic systems
              to the large industrial projects.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 lg:mr-0 md:mr-0 mr-4">
            <img
              src={secondImage}
              alt="secondimage"
              className="w-1/2 h-auto object-cover rounded-xl"
            />
            <img
              src={thirdImage}
              alt="thirdimage"
              className="w-1/2 h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPart;
