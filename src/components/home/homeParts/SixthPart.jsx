import React from "react";
import sixthPageVideo from "../homePageVideos/sixthPageVideo.mp4";

const SixthPart = () => {
  return (
    <>
      <div className="mt-20">
        <video
          className="object-cover"
          src={sixthPageVideo}
          autoPlay
          loop
          muted
        />
      </div>
    </>
  );
};

export default SixthPart;
