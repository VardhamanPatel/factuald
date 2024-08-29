import React from 'react';
import { motion } from 'framer-motion';
import { people } from "../../../constants/index";

function Teams() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section data-scroll data-scroll-speed="0.5"className="bg-zinc-900 px-12 py-24 rounded-2xl m-2">
      {/* Divider */}
      <div className='w-full h-0.5 bg-zinc-800 mb-12'></div>  
      
      {/* Heading */}
      <motion.div
        className="w-full text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-6xl lg:text-8xl font-semibold text-white leading-tight tracking-tighter mb-8">
          Meet Our <br /> Creative Design Team
        </h1>
        <p className="text-2xl lg:text-2xl max-w-full mx-auto text-gray-400 leading-relaxed tracking-wider mb-12">
          Our designers are passionate about staying ahead of design trends and technologies, guaranteeing visually stunning, contemporary projects. Clear communication is key to our process, ensuring that each step is aligned with your vision and goals. Your satisfaction drives us, and we strive to deliver designs that exceed expectations.
        </p>
      </motion.div>

      {/* Team Members */}
      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {people.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <img className="w-full rounded-xl object-cover" src={person.imgSrc} alt={person.name} />
            <h1 className="mt-6 text-3xl font-semibold text-white capitalize">{person.name}</h1>
            <p className="mt-2 text-xl text-gray-400 capitalize">{person.role}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Teams;
