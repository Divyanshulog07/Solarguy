import React from "react";
import secondImage from "../alphaPlusSeriesImages/secondPart/2nd.jpeg";
import thirdImage from "../alphaPlusSeriesImages/secondPart/3rd.jpg";
import fourthImage from "../alphaPlusSeriesImages/secondPart/4th.jpg";

const SecondPart = () => {
  return (
    <>
      <div className="lg:flex md:flex justify-center lg:gap-6 md:gap-4 lg:mt-28 md:mt-28 mt-20 lg:px-0 md:px-0 px-10">
        <img
          src={secondImage}
          alt="secondimage"
          className="rounded-lg object-cover lg:w-[450px] md:w-[260px] w-[330px] lg:h-[250px] md:h-[220px] h-[200px] hover:-translate-y-6 duration-500"
        />
        <img
          src={thirdImage}
          alt="thirdimage"
          className="rounded-lg object-cover lg:w-[450px] md:w-[260px] w-[330px] lg:h-[250px] md:h-[220px] h-[200px] lg:mt-0 md:mt-0 mt-7 hover:-translate-y-6 duration-500"
        />
        <img
          src={fourthImage}
          alt="fourthimage"
          className="rounded-lg object-cover lg:w-[450px] md:w-[260px] w-[330px] lg:h-[250px] md:h-[220px] h-[200px] lg:mt-0 md:mt-0 mt-7 hover:-translate-y-6 duration-500"
        />
      </div>
    </>
  );
};

export default SecondPart;
