import React, { useEffect, useRef, useState } from "react";
import fourthImage from "../aboutPageImages/second-part/4th.jpeg";
import fifthImage from "../aboutPageImages/second-part/5th.jpeg";

const SecondPart = () => {
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
      <div>
        <div
          ref={secondPartRef}
          className="lg:flex md:flex lg:gap-10 md:gap-7 lg:mt-20 md:mt-20 mt-14 lg:px-20 md:px-16 px-4 overflow-hidden"
        >
          {/* left-image  */}
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <img
              src={fourthImage}
              alt="fourthimage"
              className={`object-cover object-top rounded-xl w-full lg:h-[70%] md:h-[80%] h-[100%] transform transition-transform duration-1000 ease-out delay-500 ${
                animateSecondPart
                  ? "translate-x-0 opacity-100"
                  : "lg:-translate-x-[900px] md:-translate-x-[800px] -translate-x-[390px] opacity-0"
              }`}
            />
            <div
              className={`text-center mt-4 whitespace-nowrap transform transition-transform duration-1000 ease-out delay-500 ${
                animateSecondPart
                  ? "translate-x-0 opacity-100"
                  : "lg:translate-x-[900px] md:translate-x-[800px] translate-x-[390px] opacity-0"
              }`}
            >
              <p className="lg:text-xl md:text-lg text-sm font-bold">
                Mr. Rahul Manwatkar
              </p>
              <p className="lg:text-lg md:text-sm text-xs">
                Founder & Managing Director
              </p>
            </div>
          </div>
          {/* right-image  */}
          <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-7">
            <img
              src={fifthImage}
              alt="fifthimage"
              className={`object-cover object-top rounded-xl w-full lg:h-[70%] md:h-[80%] h-[100%] transform transition-transform duration-1000 ease-out delay-500 ${
                animateSecondPart
                  ? "translate-x-0 opacity-100"
                  : "lg:translate-x-[900px] md:translate-x-[800px] translate-x-[390px] opacity-0"
              }`}
            />
            <div
              className={`text-center mt-4 whitespace-nowrap transform transition-transform duration-1000 ease-out delay-500 ${
                animateSecondPart
                  ? "translate-x-0 opacity-100"
                  : "lg:-translate-x-[900px] md:-translate-x-[800px] -translate-x-[390px] opacity-0"
              }`}
            >
              <p className="lg:text-xl md:text-lg text-sm font-bold">
                Mr. Divyanshu Bansod
              </p>
              <p className="lg:text-lg md:text-sm text-xs">
                Co-Founder & Director
              </p>
            </div>
          </div>
        </div>
        <div className="lg:-mt-40 md:mt-0 mt-10 lg:px-24 md:px-10 px-4">
          <p className="font-bold text-center lg:text-2xl md:text-xl text-lg leading-5">
            We aim to create high-quality products that utilize solar power,
            with the goal of generating energy for the future.
          </p>
          <p className="text-justify lg:text-lg md:text-base text-sm mt-3">
            We have set our sights on creating top-of-the-line products for the
            future of energy generation, harnessing the power of solar
            technology. Our mission is to prioritize quality and promote
            sustainable solutions. As the world transitions away from
            traditional energy sources, our main focus is on developing premium
            solar-based solutions. Beyond simply manufacturing, we have a vision
            for a future where clean and renewable energy plays a leading role.
            Our dedication drives us to transform this vision into tangible
            results by continually innovating and implementing cutting-edge
            solar technologies, shaping an environmentally-friendly and
            efficient energy landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondPart;
