import React from 'react'
import Teams from "../assets/components/Teams/Teams";
import { Testimonial } from '../assets/components/Testimonial';
import Marquees from '../assets/components/Marquees';
import AboutSection from '../assets/components/AboutUS/AboutSection';
import JOB from '../assets/components/JOB';




function About() {
  return (
    <div>
    <AboutSection />
    <Teams />
    <Marquees />
    <Testimonial />

    </div>
  )
}

export default About