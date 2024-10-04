import React, { useState, useEffect } from "react";
import seventhImage from "../aboutPageImages/fourth-part/7th.jpeg";
import eighthImage from "../aboutPageImages/fourth-part/8th.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const FourthPart = () => {
  const [activeSlide, setActiveSlide] = useState(1); // State to track active slide
  const [isPaused, setIsPaused] = useState(false); // State to track hover pause

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide(); // Automatically move to the next slide if not paused
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [activeSlide, isPaused]); // Re-run effect when activeSlide or isPaused changes

  const nextSlide = () => {
    setActiveSlide(activeSlide === 2 ? 1 : activeSlide + 1); // Cycle between 1 and 2
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide === 1 ? 2 : activeSlide - 1); // Cycle between 1 and 2
  };

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause automatic slide on mouse enter
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume automatic slide on mouse leave
  };
  return (
    <>
      <div className="lg:flex lg:gap-48 items-center lg:mt-20 md:mt-20 mt-16 lg:px-28 md:px-16 px-7">
        {/* left-part */}
        <div className="lg:w-1/2 md:w-full w-full relative">
          {" "}
          {/* Added relative class here */}
          <img
            src={seventhImage}
            alt="seventhimage"
            className="w-full lg:h-[600px] rounded-lg"
          />
          <img
            src={eighthImage}
            alt="eighthimage"
            className="absolute lg:bottom-10 md:bottom-5 bottom-1 lg:left-[58%] md:left-[35%] left-[35%] border-4 border-white right-0 lg:w-52 md:w-52 w-28 lg:h-52 md:h-52 h-28 rounded-lg animate-slideSm lg:animate-slideLg md:animate-slideMd"
          />
        </div>
        {/* right-part */}
        <div>
          <div className="relative font-bold lg:text-4xl md:text-4xl text-base text-center lg:mt-0 md:mt-10 mt-7">
            What does our client say about our company
          </div>
          <div className="relative lg:h-[34vh] md:h-[23vh] h-[36vh] overflow-x-hidden lg:mt-16 md:mt-16 mt-10">
            {/* Slide 1 */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`absolute inset-0 flex justify-around items-center lg:mb-16 md:mb-14 mb-10 transition-transform duration-500 ease-in-out transform ${
                activeSlide === 1
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              {/* slide-1 */}
              <div className="lg:max-w-lg md:max-w-lg max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden px-10 bg-blue-900 lg:mt-16 md:mt-14 mt-10">
                <div className="p-4 flex justify-center lg:gap-10 md:gap-10 gap-2 items-center">
                  <div className="lg:h-16 md:h-16 h-9 lg:w-16 md:w-16 w-9 border-2 border-blue-400 rounded-full bg-white text-blue-700 flex items-center justify-center lg:text-3xl md:text-3xl text-xl font-bold">
                    D
                  </div>
                  <div className="mt-4 text-white whitespace-nowrap">
                    <h2 className="lg:text-xl md:text-xl text-lg font-bold">
                      Divyanshu Bansod
                    </h2>
                    <p className="font-semibold">IT Manager</p>
                  </div>
                </div>
                <hr className="border border-gray-300" />
                <div className="pt-4 pb-8">
                  <p className="text-white font-semibold text-justify lg:text-base md:text-base text-sm">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, perferendis Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, exercitationem."
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`absolute inset-0 flex justify-around items-center lg:mb-16 md:mb-14 mb-10 transition-transform duration-500 ease-in-out transform ${
                activeSlide === 2
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="lg:max-w-lg md:max-w-lg max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden px-10 bg-blue-900 lg:mt-16 md:mt-14 mt-10">
                <div className="p-4 flex justify-center lg:gap-10 md:gap-10 gap-2 items-center">
                  <div className="lg:h-16 md:h-16 h-9 lg:w-16 md:w-16 w-9 border-2 border-blue-400 rounded-full bg-white text-blue-700 flex items-center justify-center lg:text-3xl md:text-3xl text-xl font-bold">
                    S
                  </div>
                  <div className="mt-4 text-white whitespace-nowrap">
                    <h2 className="lg:text-xl md:text-xl text-lg font-bold">
                      Sumit Bandal
                    </h2>
                    <p className="font-semibold">Bank Manager</p>
                  </div>
                </div>
                <hr className="border border-gray-300" />
                <div className="pt-4 pb-8">
                  <p className="text-white font-semibold text-justify lg:text-base md:text-base text-sm">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, perferendis Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, exercitationem."
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel navigation buttons */}
            <div className="absolute inset-x-0 top-1/2 flex justify-between items-center lg:px-0 md:px-10 px-0">
              <FaAngleLeft
                onClick={prevSlide}
                size={30}
                className="cursor-pointer"
              />

              <FaAngleRight
                onClick={nextSlide}
                size={30}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthPart;
