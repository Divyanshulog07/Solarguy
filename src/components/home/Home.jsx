import React, { useEffect } from "react";
import Solar from "../home/homePageVideos/HomeNavbarSolar.mp4";
import FirstPart from "./homeParts/FirstPart";
import SecondPart from "./homeParts/SecondPart";
import ThirdPart from "./homeParts/ThirdPart";
import FourthPart from "./homeParts/FourthPart";
import FifthPart from "./homeParts/FifthPart";
import SixthPart from "./homeParts/SixthPart";
import SeventhPart from "./homeParts/SeventhPart";
import EighthPart from "./homeParts/EighthPart";

const Home = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="home-section">
        {/* navbar-part */}
        <div className="min-h-screen">
          <video
            className="relative top-0 left-0 w-full lg:h-[600px] md:h-[450px] h-[260px] object-cover"
            src={Solar}
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 left-0 w-full lg:h-[600px] md:h-[450px] h-[260px] bg-black lg:opacity-60 md:opacity-40 opacity-30"></div>
        </div>
        {/* first-part */}
        <FirstPart isDarkMode={isDarkMode} />
        {/* second-part */}
        <SecondPart isDarkMode={isDarkMode} />
        {/* third-part */}
        <ThirdPart />
        {/* fourth-part */}
        <FourthPart />
        {/* fifth-part */}
        <FifthPart />
        {/* sixth-part */}
        <SixthPart />
        {/* seventh-part  */}
        <SeventhPart isDarkMode={isDarkMode} />
        {/* eighth-part  */}
        <EighthPart isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default Home;
