import React, { useState } from "react";
import firstImage from "../blogsImages/firstPart/1st.jpeg";
import secondImage from "../blogsImages/firstPart/2nd.jpeg";

const FirstPart = ({ isDarkMode }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const blogs = [
    {
      image: firstImage,
      title: "Solar Panel Manufacturers \nIn India – Solarguy",
      text: "Finding the most efficient solar panel manufacturers in India is a task If you are the option to tackle the force of solar-based energy for your own home.",
      moreText:
        "then you must look at the complete list of solar panel companies in India that can furnish you with the power systems that you want.",
    },
    {
      image: secondImage,
      title:
        "Choose The Best Rooftop Solar \nCompany In India For Your Benefits",
      text: "Introduction While solar-powered farms and tax credits and new energy arrangements push their direction to the solar-based front, rooftop photovoltaic systems have been slacking.",
      moreText:
        "Those inside the solar-based industry might be flaunting an anticipated yearly development pace of 50%, yet until nearby local organizations and residents can embrace solar-oriented energy over petroleum, the expectation might be only that.",
    },
    {
      image: firstImage,
      title: "Fetch PV Module Manufacturers \nIn India Who Offers The Best",
      text: "Introduction Silicon is a natural semiconductor available in plenty that has all the electric properties required for the manufacturing of solar panels. Various countries all over the planet have silicon mines.",
      moreText:
        "However, with the goal of less expensive PV board manufacturing, silicon is commonly bought from the nations with the most reasonable costs, like China and India.",
    },
  ];

  return (
    <>
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .mt-custom-768-1024 {
            margin-top: -480px;
          }
        }
        @media (min-width: 800px) and (max-width: 1280px) {
          .mt-custom-800-1280 {
            margin-top: -580px;
          }
        }
        @media (min-width: 360px) and (max-width: 820px) {
          .mt-custom-360-820 {
            margin-top: -380px;
          }
        }
        @media (min-width: 380px) and (max-width: 930px) {
          .mt-custom-380-930 {
            margin-top: -450px;
          }
        }
      `}</style>
      <div className={`lg:-mt-20 mt-custom-768-1024 mt-custom-800-1280 mt-custom-360-820 mt-custom-380-930`}>
        <p className="font-bold text-center lg:text-4xl md:text-4xl text-2xl lg:mb-16 md:mb-16 mb-10">
          Our Blogs
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-7 gap-7 lg:px-12 md:px-6 px-7">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-lg border border-gray-300 shadow-lg lg:w-[450px] md:w-[370px] w-full ${
                expandedCard === index
                  ? "h-auto"
                  : "lg:h-[650px] md:h-[550px] h-[560px]"
              } ${isDarkMode ? "bg-black shadow-gray-300" : "bg-white shadow-gray-800"}`}
            >
              <img
                src={blog.image}
                alt={`blog-image-${index}`}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-4 flex-grow">
                <h2 className="lg:text-2xl md:text-xl text-xl font-bold mb-2 whitespace-pre-line">
                  {blog.title}
                </h2>
                <p className="text-justify lg:text-xl md:text-base text-base">
                  {blog.text}
                  {expandedCard === index && (
                    <span className="block mt-2">
                      {blog.moreText}
                    </span>
                  )}
                </p>
              </div>
              <div className="p-4 flex justify-center">
                <button
                  className={`bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold ${
                    isDarkMode ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedCard === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstPart;

