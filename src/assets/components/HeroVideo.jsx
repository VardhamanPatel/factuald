import React from 'react';
import video from "../video/factual.mp4";

function HeroVideo() {
  return (
    <div data-scroll data-scroll-speed="0.1"  className=" w-full bg-black mt-4 ">
      <div className="p-1">
        <video
          id="videoscreen1"
          className="w-full opacity-100 brightness-200"
          loop
          autoPlay
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  );
}

export default HeroVideo;
