import React from "react";
import firstImage from "../alphaPlusSeriesImages/firstPart/1st.png";

const FirstPart = ({ isDarkMode }) => {
  return (
    <>
      <div className="lg:flex md:flex lg:-mt-16 md:-mt-[550px] -mt-[360px] lg:px-0 md:px-8 px-10 items-center">
        <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center">
          <img
            src={firstImage}
            alt="firstimage"
            className="object-cover lg:w-[60%] md:w-[100%] w-[70%] h-auto hover:-translate-x-6 hover:-translate-y-6 duration-500"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full mt-4">
          <h1 className="uppercase font-bold lg:text-5xl md:text-4xl text-3xl lg:mt-0 md:mt-0 mt-5">
            Alpha Plus Series
          </h1>
          <h3 className="font-semibold lg:mt-5 md:mt-5 mt-3 whitespace-nowrap">
            MBB, M10 MONOPERC HALF CUT MODULES
          </h3>
          <h3 className="font-semibold">
            144 Cells | From 525 Wp – Upto 550 Wp
          </h3>
          <h2 className="font-bold lg:text-3xl md:text-2xl text-xl lg:mt-4 md:mt-4 mt-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside lg:text-base md:text-base text-sm text-justify">
            <li className="lg:mt-5 md:mt-5 mt-3">
              Latest Technology MBB, M10 half cut modules providing higher
              output and high reliability.
            </li>
            <li className="lg:mt-3 md:mt-3 mt-1">
              Better performance under low light & high temperature.
            </li>
            <li className="lg:mt-3 md:mt-3 mt-1">
              Excellent performance in extremely low light and low irradiance.
            </li>
            <li className="lg:mt-3 md:mt-3 mt-1">
              Lower temperature coefficient.
            </li>
            <li className="lg:mt-3 md:mt-3 mt-1">
              Ideal for : Commercial, Residential, Industrial and Institutional
              Projects.
            </li>
            <li className="lg:mt-3 md:mt-3 mt-1">
              Resistant to PID, LID and Salt-Mist/Ammonia corrosion
            </li>
            <li className="lg:mt-3 md:mt-3 mt-1">
              25 years warranty of 85% power output.
            </li>
            <li className="lg:mt-3 md:mt-3 mt-1">
              12 years manufacturers warranty.
            </li>
          </ul>
          <button
            className={`bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold mt-5 ${
              isDarkMode
                ? "hover:bg-white hover:text-black"
                : "hover:bg-black hover:text-white"
            }`}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstPart;
