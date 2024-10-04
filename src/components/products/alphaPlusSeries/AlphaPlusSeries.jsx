import React, { useEffect } from "react";
import alphaPlusNavbarImage from "../alphaPlusSeries/alphaPlusSeriesImages/alphaPlusNavbarImage.jpeg";
import { Link } from "react-router-dom";
import FirstPart from "./alphaPlusSeriesParts/FirstPart";
import SecondPart from "./alphaPlusSeriesParts/SecondPart";

const AlphaPlusSeries = ({ isDarkMode }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="alphaPlus-section">
        {/* navbar-part  */}
        <div className="min-h-screen">
          <img
            className="relative top-0 left-0 w-full lg:h-[600px] md:h-[450px] h-[260px] object-cover"
            src={alphaPlusNavbarImage}
            alt="alphaplusnavbarimage"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 left-0 w-full lg:h-[600px] md:h-[450px] h-[260px] bg-black lg:opacity-40 md:opacity-40 opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center lg:-mt-40 md:-mt-[650px] -mt-[400px] lg:space-y-4 md:space-y-3 space-y-2">
            <h1 className="text-white lg:text-5xl md:text-4xl text-2xl font-bold">
              Alpha Plus Series
            </h1>
            <p className="text-white lg:text-lg md:text-sm text-xs font-bold">
              <Link to="/">
                <span>Home</span>
              </Link>{" "}
              / Alpha Plus Series
            </p>
          </div>
        </div>
        {/* first-part  */}
        <FirstPart isDarkMode={isDarkMode} />
        {/* secpnd-part  */}
        <SecondPart/>
      </div>
    </>
  );
};

export default AlphaPlusSeries;
