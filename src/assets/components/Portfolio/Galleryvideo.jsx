import React from 'react';
import seo from "../../video/SEO.mp4"; // Ensure correct case in file path

function Galleryvideo() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center p-8 m-2 py-[9rem] bg-black">
            <div data-scroll data-scroll-speed="-0.2" className="max-w-4xl mb-8 lg:mb-0">
                <h1 className="text-5xl font-normal text-white leading-tight mb-4">
                    Crafting Visual Impact: Creating Designs that Speak to Your Audience.
                </h1>
                <p className="text-gray-500 text-xl mt-12">
                    "Transforming ideas into captivating visuals, we blend creativity with strategy to ensure every design resonates with purpose and vision."
                </p>
            </div>
            <div data-scroll data-scroll-speed="0.4" className="w-full h-1/3 lg:w-2/3 lg:h-[600px] opacity-60 m-2 p-20">
                <video
                    className="rounded-lg shadow-lg w-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={seo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Galleryvideo;
