import React from 'react';
import { motion } from 'framer-motion';

function AboutSection() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            <section data-scroll data-scroll-speed="-0.8" className="min-h-screen flex items-center bg-black px-12 py-24">
                <motion.div
                    className="w-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h1 className="text-6xl font-bold leading-tight mb-8 w-full">
                        We Are Factual Design
                    </h1>
                    <p className="text-2xl max-w-full leading-loose">
                        A design agency that crafts visual identities and compelling experiences. Based in Zurich, we merge strategy, creativity, and cutting-edge technology to bring your vision to life. Our approach is simple yet powerful: designing for impact, innovation, and elegance.
                    </p>
                </motion.div>
            </section>

            {/* Mission Statement */}
            <section data-scroll data-scroll-speed="0.3" className="min-h-screen flex items-center bg-gray-900 px-12 py-24">
                <motion.div
                    className="w-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h2 className="text-5xl font-semibold leading-tight mb-8">
                        We Believe in Design-Driven Solutions
                    </h2>
                    <p className="text-2xl max-w-full leading-loose">
                        At Factual Design, we treat every project as a unique opportunity to solve complex challenges with clarity and creativity. Our team is committed to delivering designs that are not only beautiful but also functional and strategic, ensuring every project serves a purpose beyond aesthetics.
                    </p>
                </motion.div>
            </section>

            {/* Why Us */}
            <section className="min-h-screen flex flex-col md:flex-row items-center bg-black px-12 py-24">
                <motion.div
                   data-scroll data-scroll-speed="0.3" className="w-full md:w-1/2 mb-12 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h3 className="text-4xl font-semibold leading-tight mb-6">
                        Why Choose Factual Design?
                    </h3>
                    <p className="text-xl leading-loose">
                        We specialize in creating cohesive, visually stunning solutions that resonate with your target audience. Our services range from brand identity and graphic design to social media marketing and video production, offering you a complete package tailored to your goals.
                    </p>
                </motion.div>

                <motion.div
                  data-scroll data-scroll-speed="-0.2"  className="w-full md:w-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h3 className="text-4xl font-semibold leading-tight mb-6">
                        Expertise You Can Rely On
                    </h3>
                    <p className="text-xl leading-loose">
                        Whether you're a new brand looking to make your mark or an established company seeking a visual refresh, we have the expertise to elevate your brand. We combine creative flair with strategic thinking, ensuring your brand leaves a lasting impression.
                    </p>
                </motion.div>
            </section>

            
           
        </div>
    );
}

export default AboutSection;
