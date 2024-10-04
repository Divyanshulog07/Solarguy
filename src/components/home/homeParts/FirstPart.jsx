import React from "react";
import firstImage from "../HomePageImage/firstPart/1st.png";
import secondImage from "../HomePageImage/firstPart/2nd.jpeg";

const FirstPart = ({isDarkMode}) => {
  return (
    <>
      <div>
        <div className="relative flex flex-col h-screen lg:flex-row lg:-mt-36 md:-mt-[620px] -mt-[400px]">
          {/* Text Section (for mobile and iPad only) */}
          <div className="lg:hidden absolute md:top-16 top-20 md:left-0 left-1/2 md:transform-none transform -translate-x-1/2 -translate-y-1/2 md:text-start text-center md:px-5">
            <div className="font-bold md:text-xl text-sm text-gray-400">
              <div className="">
                We Are{" "}
                <span
                  className={`uppercase font-semibold md:text-3xl text-lg ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Solarguy
                </span>
              </div>
              <div className="">Best-In-Class Products & Solutions</div>
            </div>
          </div>

          {/* Background Image */}
          <div
            className={`flex-1 lg:flex-none bg-cover bg-center h-1/2 lg:h-full lg:w-1/2 lg:order-2 lg:-mt-16 md:-mt-[430px] -mt-[350px] ${
              isDarkMode ? "opacity-60" : "opacity-20"
            }`}
            style={{
              backgroundImage: `url(${firstImage})`,
              backgroundSize: "80%", // Adjusted size
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Text Section (visible for lg and above screens) */}
          <div className="hidden lg:flex flex-col items-start lg:w-1/2 lg:order-1 px-10 mt-16">
            <div className="font-bold text-3xl text-gray-500 lg:text-left">
              <div className="">
                We Are{" "}
                <span
                  className={`uppercase font-semibold text-5xl ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Solarguy
                </span>
              </div>
              <div className="">Best-In-Class Products & Solutions</div>
            </div>
          </div>
        </div>
        <div className="relative lg:flex md:flex lg:justify-between md:justify-between lg:-mt-[580px] md:-mt-[950px] -mt-[600px] lg:px-10 md:px-5">
          <div className="mt-5 lg:mb-0 md:mb-0 mb-10 lg:mr-0 md:mr-5 mr-0">
            <img src={secondImage} alt="secondimage" />
          </div>
          <div className="lg:flex lg:gap-5 lg:mt-20 lg:ml-0 md:ml-0 ml-12">
            <div
              className={`rounded-lg border border-gray-300 shadow-lg p-4 w-[310px] h-[230px] hover:bg-blue-900 hover:border-none hover:text-white hover:-translate-y-4 duration-700 ${
                isDarkMode
                  ? "bg-black shadow-gray-300"
                  : "bg-white shadow-gray-800"
              }`}
            >
              {/* Card content */}
              <h2 className="text-xl font-bold mb-2">Sustainable Future</h2>
              <p className="text-justify">
                By harnessing the power of solar panels, we are leading the
                charge towards a sustainable future. Our promotion of clean
                energy solutions is paving the way for a greener and more
                environmentally conscious world.
              </p>
            </div>
            <div
              className={`rounded-lg border border-gray-300 shadow-lg p-4 w-[310px] h-[230px] lg:mt-0 md:mt-10 mt-10 hover:bg-blue-900 hover:border-none hover:text-white hover:-translate-y-4 duration-700 ${
                isDarkMode
                  ? "bg-black shadow-gray-300"
                  : "bg-white shadow-gray-800"
              }`}
            >
              {/* Card content */}
              <h2 className="text-xl font-bold mb-2">Seamless Installation</h2>
              <p className="text-justify">
                Say goodbye to the hassle of solar panel installation and
                welcome a seamless experience with our exceptional solutions.
                Our committed team will handle the process with ease and
                precision, delivering sustainable energy directly to your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPart;
