import React, { useState, useEffect } from "react";
import twentyoneImage from "../HomePageImage/fifthPart/21st.jpeg";
import twentytwoImage from "../HomePageImage/fifthPart/22nd.png";
import twentythreeImage from "../HomePageImage/fifthPart/23rd.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const FifthPart = () => {
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
      <div className="relative lg:h-[75vh] md:h-[50vh] h-[50vh] mt-28 overflow-x-hidden">
        {/* Background Image */}
        <img
          src={twentyoneImage}
          alt="twentyoneimage"
          className="w-full h-full object-cover blur"
        />

        {/* Slide 1 */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute inset-0 flex justify-around items-center lg:ml-36 md:ml-0 ml-10 lg:mt-0 md:mt-0 mt-[68px] transition-transform duration-500 ease-in-out transform ${
            activeSlide === 1
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="text-center">
              <img
                src={twentytwoImage}
                alt="twentytwoimage"
                className="lg:w-[270px] md:w-[220px] lg:h-[370px] md:h-[300px] mx-auto mb-3"
              />
              <div className="uppercase font-bold lg:text-3xl md:text-3xl text-sm text-white whitespace-nowrap">
                Alpha Plus Series
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] md:w-[40%] w-full">
            <div className="lg:block md:block hidden font-bold text-3xl text-white">
              Explore Our Products
            </div>
            <div className="mt-3 text-white lg:block md:block hidden">
              Solarguy is focused on customer loyalty with an array of items,
              services and strong after-deals support with a fantastic plan of
              system, improvement and manufacturing skills.
            </div>
            <div className="mt-5 lg:flex md:flex hidden gap-3 font-bold items-center text-2xl text-white">
              <FaAngleRight size={25} className={`rounded-full bg-black`} />
              <div>Alpha Plus Series</div>
            </div>
            <div className="mt-3 list-disc list-inside text-white lg:block md:block hidden">
              <li>
                Latest Technology MBB, M10 half cut modules providing higher
                output and high reliability.
              </li>
              <li>Better performance under low light & high temperature.</li>
              <li>Lower temperature coefficient.</li>
              <li>
                Ideal for: Commercial, Residential, Industrial and Institutional
                Projects.
              </li>
            </div>
            <div className="lg:mt-3 md:mt-3 -mt-8 lg:ml-0 md:ml-0 -ml-3">
              <button className="bg-blue-700 text-white hover:bg-white hover:text-black delay-100 font-bold rounded-md py-1.5 px-3">
                View More
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute inset-0 flex justify-around items-center lg:ml-36 md:ml-0 ml-10 lg:mt-0 md:mt-0 mt-[68px] transition-transform duration-500 ease-in-out transform ${
            activeSlide === 2
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="text-center">
              <img
                src={twentythreeImage}
                alt="twentythreeimage"
                className="lg:w-[270px] md:w-[220px] lg:h-[370px] md:h-[300px] mx-auto mb-3"
              />
              <div className="uppercase font-bold lg:text-3xl md:text-3xl text-sm text-white whitespace-nowrap">
                Rigel Plus Series
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] md:w-[38%] w-full">
            <div className="font-bold lg:block md:block hidden text-3xl text-white">
              Explore Our Products
            </div>
            <div className="mt-3 text-white lg:block md:block hidden">
              Solarguy is focused on customer loyalty with an array of items,
              services and strong after-deals support with a fantastic plan of
              system, improvement and manufacturing skills.
            </div>
            <div className="mt-5 lg:flex md:flex hidden gap-3 font-bold items-center text-2xl text-white">
              <FaAngleRight size={25} className={`rounded-full bg-black`} />
              <div>Rigel Plus Series</div>
            </div>
            <div className="mt-3 list-disc list-inside text-white lg:block md:block hidden">
              <li>Upto 30% increase in efficiency.</li>
              <li>Better performance under low light & high temperature.</li>
              <li>Very high power output per sq. meter.</li>
              <li>
                Ideal for: Commercial, Residential, Industrial and Institutional
                Projects.
              </li>
            </div>
            <div className="lg:mt-3 md:mt-3 -mt-8 lg:ml-0 md:ml-0 -ml-3">
              <button className="bg-blue-700 text-white hover:bg-white hover:text-black delay-100 font-bold rounded-md py-1.5 px-3">
                View More
              </button>
            </div>
          </div>
        </div>

        {/* Carousel navigation buttons */}
        <div className="absolute inset-x-0 top-1/2 flex justify-between items-center lg:px-10 md:px-10 px-5">
          <FaAngleLeft
            onClick={prevSlide}
            size={30}
            className="text-white cursor-pointer"
          />

          <FaAngleRight
            onClick={nextSlide}
            size={30}
            className="text-white cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default FifthPart;
