import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const LightDarkButton = ({ isDarkMode, toggleTheme }) => {
  return (
    <>
      <button
        className={`relative flex items-center lg:w-16 md:w-16 w-14 lg:h-8 md:h-8 h-6 rounded-full p-1 ${
          isDarkMode ? "bg-gray-950" : "bg-yellow-500"
        }`}
        onClick={toggleTheme}
        title={isDarkMode ? "Dark Mode" : "Light Mode"}
      >
        <div className="absolute inset-0 flex items-center justify-between px-1 w-full">
          <BsFillSunFill size={20} color={isDarkMode ? "white" : "black"} />
          <MdDarkMode size={20} color={isDarkMode ? "white" : "black"} />
        </div>
        <div
          className={`absolute lg:w-6 md:w-6 w-5 lg:h-6 md:h-6 h-5 bg-white rounded-full transition-transform duration-300 transform ${
            isDarkMode
              ? "lg:translate-x-8 md:translate-x-8 translate-x-7"
              : "translate-x-0"
          } flex items-center justify-center`}
        >
          {isDarkMode ? (
            <MdDarkMode size={20} color="black" />
          ) : (
            <BsFillSunFill size={20} color="black" />
          )}
        </div>
      </button>
    </>
  );
};

export default LightDarkButton;

