import React from "react";
import Herosec from "../assets/components/Herosec";
import HeroVideo from "../assets/components/HeroVideo";
import { Testimonial } from "../assets/components/Testimonial";
import Marquees from "../assets/components/Marquees";
import Crafting from "../assets/components/Crafting";
import ServiceSection from "../assets/components/Services/ServiceSection";

import LocomotiveScroll from 'locomotive-scroll';

function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Herosec />
      <HeroVideo />
      <Crafting />
      <ServiceSection />
      <Marquees />
      <Testimonial />

    </div>
  );
}

export default Home;
