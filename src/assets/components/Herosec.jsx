import { motion } from 'framer-motion';
import React from 'react';
import './RotatingText.css';

function Herosec() {
  const titles = ['Factual Design', 'Creative Digital', 'Agency'];

  const ImageMask = ({ width }) => (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width }}
      transition={{ ease: 'easeInOut', duration: 2 }}
      className="image-mask mr-[2vw] bg-cover bg-center rounded-md h-[5vw] relative"
    />
  );

  return (
    <div
      data-scroll
      data-scroll-speed="-0.7"
      className="hero-section bg-gradient-to-b from-gray-900 to-black text-white pt-1 relative"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black opacity-40"></div>

      <section className="relative z-10">
        <div className="text-structure mt-40 px-12">
          {titles.map((title, index) => (
            <div key={index} className="text-mask mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 1.2, ease: 'easeOut' }}
                className="text-container flex items-center justify-start"
              >
                {index === 0 && <ImageMask width="10vw" />}
                {index === 1 && <ImageMask width="30vw" />}
                {index === 2 && <ImageMask width="15vw" />}
                <h1 className="text-title uppercase text-[5.5vw] leading-[5.5vw] tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
                  {title}
                </h1>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="section-info border-t text-sm sm:text-md lg:text-2xl border-gray-700 mt-24  flex justify-between items-center tracking-tight  py-8 px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
            className="specialization text-gray-400 font-medium text-lg mt-2"
          >
            <h3 className="mb-0 ">Specialized in</h3>
            <div className="wrapper text-md  sm:text-sm lg:text-xl  text-white font-semibold tracking-tighter space-y-6">
              <div className="words sm:-mt-1 lg:mt-1 ">
                <span>Branding</span>
                <span>Logo Design</span>
                <span>Brand Visual</span>
                <span>Marketing</span>
                <span>Social Media</span>
                <span>Web Deign</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
            className="empowerment text-gray-400 font-medium text-lg mt-2"
          >
            Empowering <br />
            <span className="highlighted-text text-white font-medium">Digital Products & Brands</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
            className="location text-gray-400 font-medium text-lg mt-2"
          >
            Location <br />
            <span className="highlighted-text text-white font-medium">Ahmedabad</span>
          </motion.p>
        </div>
      </section>

      <div className="marquee-container w-full p-2 overflow-hidden flex items-center justify-center text-xl font-bold text-gray-300 bg-gradient-to-r from-black via-gray-800 to-black shadow-lg rounded-md">
        <div className="marquee flex gap-[20px] px-[10px] animate-marquee">
          <p className="marquee-item text-gray-400 whitespace-nowrap">Creative Design Studio for</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">-</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">Branding</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">|</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">Strategy & Identity</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">|</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">Design & Communication</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">|</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">Web & Mobile Design</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">|</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">Social Media Marketing</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">|</p>
          <p className="marquee-item text-gray-400 whitespace-nowrap">Video</p>
        </div>
      </div>
    </div>
  );
}

export default Herosec;
