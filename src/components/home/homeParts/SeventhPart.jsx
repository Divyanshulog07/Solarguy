import React from "react";

const SeventhPart = ({isDarkMode}) => {
  return (
    <>
      <div className="mt-16">
        <div className="uppercase text-center font-bold lg:text-3xl md:text-3xl text-xl">
          Milestones
        </div>
        <div className="lg:px-24 md:px-10 px-5">
          <div className="mt-5 text-justify lg:text-[18.5px] md:text-[18.5px] text-sm">
            In 2016 Novasys was established for solar modules mass production by
            consolidating several solar research and analysis. Solar power
            business is a strategic growth area for Novasys. Today, our solar
            manufacturing unit is at the forefront of product development for
            solar modules both for residential and commercial usage.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-around items-center lg:px-20 md:px-5 px-[75px] lg:mt-56 md:mt-60 mt-40">
          <div className="relative lg:mt-0 md:mt-0">
            <div
              className={`w-64 h-32 border-8 rounded-bl-full rounded-br-full border-t-0 flex items-center justify-center ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <div
                className={`w-52 h-52 border-8 rounded-full flex items-center justify-center mb-32 ${
                  isDarkMode ? "border-gray-500" : "border-gray-300"
                }`}
              >
                <span className="text-center text-base">
                  Incorporated for promoting fossil fuels
                </span>
              </div>
            </div>
            <span className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl">
              2004
            </span>
          </div>
          <div className="relative lg:-mt-[260px] md:-mt-[260px] mt-36">
            <span className="absolute bottom-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl">
              2016
            </span>
            <div
              className={`w-64 h-32 border-8 rounded-tl-full rounded-tr-full border-b-0 flex items-center justify-center ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <div
                className={`w-52 h-52 border-8 rounded-full flex items-center justify-center mt-32 ${
                  isDarkMode ? "border-gray-500" : "border-gray-300"
                }`}
              >
                <span className="text-center text-base">
                  Changed its identity to Solarguys for promoting renewable
                  energy
                </span>
              </div>
            </div>
          </div>
          <div className="relative lg:mt-0 md:mt-0 mt-64">
            <div
              className={`w-64 h-32 border-8 rounded-bl-full rounded-br-full border-t-0 flex items-center justify-center ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <div
                className={`w-52 h-52 border-8 rounded-full flex items-center justify-center mb-32 ${
                  isDarkMode ? "border-gray-500" : "border-gray-300"
                }`}
              >
                <span className="text-center text-base">
                  Awarded as the Trusted Solar EPC company by Times Business &
                  Education awards.
                </span>
              </div>
            </div>
            <span className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl">
              2018
            </span>
          </div>
          <div className="relative lg:-mt-[260px] md:mt-10 mt-36">
            <span className="absolute bottom-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl">
              2022
            </span>
            <div
              className={`w-64 h-32 border-8 rounded-tl-full rounded-tr-full border-b-0 flex items-center justify-center ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <div
                className={`w-52 h-52 border-8 rounded-full flex items-center justify-center mt-32 ${
                  isDarkMode ? "border-gray-500" : "border-gray-300"
                }`}
              >
                <span className="text-center text-base">
                  Set up 300 MW solar PV module manufacturing facilities.
                </span>
              </div>
            </div>
          </div>
          <div className="relative lg:mt-0 md:mt-72 mt-64">
            <div
              className={`w-64 h-32 border-8 rounded-bl-full rounded-br-full border-t-0 flex items-center justify-center ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <div
                className={`w-52 h-52 border-8 rounded-full flex items-center justify-center mb-32 ${
                  isDarkMode ? "border-gray-500" : "border-gray-300"
                }`}
              >
                <span className="text-center text-base">
                  Set up 600 MW solar PV module manufacturing facilities.
                </span>
              </div>
            </div>
            <span className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl">
              2023
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhPart;
