import React from "react";
import Marquee from "./Marquee";
import logo1 from "../../assets/logos/11.png";
import logo2 from "../../assets/logos/12.png";
import logo3 from "../../assets/logos/13.png";
import logo4 from "../../assets/logos/14.png";
import logo5 from "../../assets/logos/15.png";
import logo6 from "../../assets/logos/16.png";
import logo7 from "../../assets/logos/17.png";
import logo8 from "../../assets/logos/18.png";
import logo9 from "../../assets/logos/19.png";
import logo10 from "../../assets/logos/20.png";
import logo11 from "../../assets/logos/21.png";
import logo12 from "../../assets/logos/22.png";
import logo13 from "../../assets/logos/23.png";
import logo14 from "../../assets/logos/24.png";
import logo15 from "../../assets/logos/25.png";
import logo16 from "../../assets/logos/26.png";
import logo17 from "../../assets/logos/27.png";
import logo18 from "../../assets/logos/28.png";
import logo19 from "../../assets/logos/29.png";
import logo20 from "../../assets/logos/30.png";
import logo21 from "../../assets/logos/31.png";
import logo22 from "../../assets/logos/32.png";
import logo23 from "../../assets/logos/33.png";
import logo24 from "../../assets/logos/34.png";

const Marquees = () => {
    const images = [
        [
            logo1,
            logo2,
            logo3,
            logo4,
            logo5,
            logo6,
            logo7,
            logo8,
            logo9,
            logo10,
            logo11,
        ],
        [
            logo12,
            logo13,
            logo14,
            logo15,
            logo16,
            logo17,
            logo18,
            logo19,
            logo20,
            logo21,
            logo22,
            logo23,
            logo24,
        ],
    ];

    return (
        <div data-scroll data-scroll-speed="-0.1" className=" h-screen bg-white p-12 m-2 rounded-3xl">
             <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 uppercase">Brands We have
             worked with</h1>
            <div className=" sticky py-20 mt-20 w-full bg-white  overflow-hidden contrast-200">
                {images.map((item, index) => (
                    <Marquee
                        key={index}
                        direction={index === 0 ? "left" : "right"}
                        imagesUrl={item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Marquees;
