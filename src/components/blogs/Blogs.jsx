import React, { useEffect } from "react";
import blogsNavbarImage from "../blogs/blogsImages/blogsNavbarImages.jpeg";
import { Link } from "react-router-dom";
import FirstPart from "./blogsParts/FirstPart";

const Blogs = ({ isDarkMode }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="blogs-section">
        {/* navbar-part  */}
        <div className="min-h-screen">
          <img
            className="top-0 left-0 w-full lg:h-[600px] md:h-[450px] h-[260px] object-cover"
            src={blogsNavbarImage}
            alt="blogsnavbarimage"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 left-0 w-full lg:h-[600px] md:h-[450px] h-[260px] bg-black lg:opacity-60 md:opacity-60 opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center lg:-mt-40 md:-mt-[650px] -mt-[400px] lg:space-y-4 md:space-y-3 space-y-2">
            <h1 className="text-white lg:text-5xl md:text-4xl text-2xl font-bold">
              Blogs
            </h1>
            <p className="text-white lg:text-lg md:text-sm text-xs font-bold">
              <Link to="/">
                <span>Home</span>
              </Link>{" "}
              / Blogs
            </p>
          </div>
        </div>
        <div>
          <FirstPart isDarkMode={isDarkMode}/>
        </div>
      </div>
    </>
  );
};

export default Blogs;
