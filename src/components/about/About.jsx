import React, { useEffect } from "react";
import aboutNavbarImage from "../about/aboutPageImages/aboutNavbar.avif";
import { Link } from "react-router-dom";
import FirstPart from "./aboutParts/FirstPart";
import SecondPart from "./aboutParts/SecondPart";
import ThirdPart from "./aboutParts/ThirdPart";
import FourthPart from "./aboutParts/FourthPart";

const About = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="about-section">
        {/* navbar-part  */}
        <div className="min-h-screen">
          <img
            className="relative top-0 left-0 w-full lg:h-[600px] md:h-[450px] h-[260px] object-cover"
            src={aboutNavbarImage}
            alt="aboutnavbarimage"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 left-0 w-full lg:h-[600px] md:h-[450px] h-[260px] bg-black lg:opacity-50 md:opacity-40 opacity-30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center lg:-mt-40 md:-mt-[650px] -mt-[400px] lg:space-y-4 md:space-y-3 space-y-2">
            <h1 className="text-white lg:text-5xl md:text-4xl text-2xl font-bold">
              About Us
            </h1>
            <p className="text-white lg:text-lg md:text-sm text-xs font-bold">
              <Link to="/">
                <span>Home</span>
              </Link>{" "}
              / About Us
            </p>
          </div>
        </div>
        {/* first-part  */}
        <FirstPart isDarkMode={isDarkMode} />
        {/* second-part  */}
        <SecondPart />
        {/* third-part  */}
        <ThirdPart isDarkMode={isDarkMode} />
        {/* fourth-part */}
        <FourthPart />
      </div>
    </>
  );
};

export default About;
