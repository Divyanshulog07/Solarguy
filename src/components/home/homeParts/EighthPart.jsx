import React from "react";
import twentythreeImage from "../HomePageImage/eighthPart/23rd.jpeg";
import twentyfourImage from "../HomePageImage/eighthPart/24th.jpeg";
import twentyfiveImage from "../HomePageImage/eighthPart/25th.jpeg";

const EighthPart = ({isDarkMode}) => {
  return (
    <>
      <div className="mt-40">
        <p className="font-bold text-center lg:text-4xl md:text-4xl text-2xl lg:mb-16 md:mb-16 mb-10">
          Our Blogs
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-7 gap-7 lg:px-20 md:px-5 px-7">
          <div
            className={`rounded-lg border border-gray-300 shadow-lg lg:w-[450px] md:w-[370px] w-full lg:h-[600px] md:h-[500px] h-[500px] hover:-translate-y-4 duration-700 grayscale hover:grayscale-0 ${
              isDarkMode
                ? "bg-black shadow-gray-300"
                : "bg-white shadow-gray-800"
            }`}
          >
            <img
              src={twentythreeImage}
              alt="twentythreeimage"
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              {/* Card content */}
              <h2 className="lg:text-2xl md:text-xl text-xl font-bold mb-2">
                Myths and Facts : <br />
                Green Energy is the Future
              </h2>
              <p className="text-justify lg:text-xl md:text-base text-base">
                <span className="font-semibold">Myth:</span> Green energy is
                insufficient and expensive. <br />
                <span className="font-semibold">Fact:</span> Advancements make
                green energy increasingly affordable and sustainable, reducing
                environmental impact, ensuring a cleaner future for generations
                to come.
              </p>
            </div>
          </div>
          <div
            className={`rounded-lg border border-gray-300 shadow-lg lg:w-[450px] md:w-[370px] w-full lg:h-[600px] md:h-[500px] h-[500px] hover:-translate-y-4 duration-700 grayscale hover:grayscale-0 ${
              isDarkMode
                ? "bg-black shadow-gray-300"
                : "bg-white shadow-gray-800"
            }`}
          >
            <img
              src={twentyfourImage}
              alt="twentyfourimage"
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              {/* Card content */}
              <h2 className="lg:text-2xl md:text-xl text-xl font-bold mb-2">
                Solar Photovoltic Modules :
                <br />
                Green Energy is the Future
              </h2>
              <p className="text-justify lg:text-xl md:text-base text-base">
                Solar photovoltaic modules, commonly known as solar panels,
                harness sunlight to generate electricity. Composed of
                interconnected cells, they convert solar energy into usable
                power, offering a sustainable energy solution.
              </p>
            </div>
          </div>
          <div
            className={`rounded-lg border border-gray-300 shadow-lg lg:w-[450px] md:w-[370px] w-full lg:h-[600px] md:h-[500px] h-[500px] hover:-translate-y-4 duration-700 grayscale hover:grayscale-0 ${
              isDarkMode
                ? "bg-black shadow-gray-300"
                : "bg-white shadow-gray-800"
            }`}
          >
            <img
              src={twentyfiveImage}
              alt="twentyfiveimage"
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              {/* Card content */}
              <h2 className="lg:text-2xl md:text-xl text-xl font-bold mb-2">
                Finding The Most Efficient Solar Panel Manufacturers In India Is
                A Task
              </h2>
              <p className="text-justify lg:text-xl md:text-base text-base">
                Identifying the most efficient solar panel manufacturers in
                India poses a challenging task. The market offers a variety of
                options, requiring thorough research to ensure optimal energy
                solutions..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EighthPart;
