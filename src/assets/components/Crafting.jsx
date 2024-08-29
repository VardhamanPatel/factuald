import { motion } from "framer-motion";
import React from "react";

function Crafting() {
  return (
    <section
      data-scroll
      data-scroll-speed="-0.1"
      className="w-full text-gray-100 p-6 md:p-12 lg:p-16 bg-black"
    >
      <div className="mx-auto text-left bg-black rounded-2xl p-6 md:p-12 lg:p-16">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl lg:text-7xl font-bold text-gray-50 mb-6 md:mb-12 m-4 md:m-6"
        >
          Elevate Your Digital Presence <br /> with Our Expertise
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="p-4 md:p-8"
          >
            <span className="text-2xl lg:text-4xl font-bold">
              250+
            </span>
            <p className="mt-2 md:mt-4 mb-4 md:mb-8 text-lg md:text-xl text-gray-300">
              Client Reviews
            </p>
            <span className="text-2xl lg:text-4xl font-bold">
              300+
            </span>
            <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-300">
              Completed Projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="pt-4"
          >
            <p className="text-white max-w-full md:max-w-2xl mx-auto text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Our team of professionals has been crafting exceptional digital
              solutions since 2004. With a deep understanding of diverse
              industries, we collaborate closely with clients to bring their
              visions to life. Our commitment to quality and innovation drives
              us to deliver impactful results in every project.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-auto flex items-center justify-center"
          >
            <h2 className="w-full text-4xl md:text-6xl lg:text-8xl font-normal text-center mb-8 md:mb-6 uppercase">
              Creating Digital <br />
              <span className="mt-2 text-4xl md:text-6xl lg:text-8xl">
                Solutions...Since{" "}
                <span className="text-blue-950">2013</span>
              </span>
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Crafting;
