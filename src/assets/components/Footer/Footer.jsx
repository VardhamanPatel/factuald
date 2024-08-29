import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { FaLinkedin, FaInstagram, FaDribbble, FaTumblr } from "react-icons/fa";

function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <footer data-scroll data-scroll-speed="-0.1" className="bg-gradient-to-b from-gray-950 to-black text-gray-300 py-16 lg:py-24">
      {/* Call to Action */}
      <section className="w-full h-screen  flex justify-center items-center  px-6 py-16">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-20 text-white">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed mb-12 text-gray-400 max-w-3xl mx-auto">
            We’re here to collaborate with you on building something extraordinary. Contact us today and let’s start designing the future together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-black py-3 px-10 rounded-full text-lg lg:text-xl font-semibold hover:bg-yellow-600 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      <motion.div
        className="container mx-auto px-6 lg:px-16 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between"
          >
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Turning visionary ideas into stunning, impactful designs that elevate your brand.
            </p>
            <a
              href="mailto:contact@factualdesign.com"
              className="text-lg text-blue-400 hover:text-blue-500 transition-colors"
            >
              contact@factualdesign.com
            </a>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="text-lg text-gray-400 space-y-4">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Creative Direction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6">
              Let’s Collaborate
            </h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Ready to elevate your brand? Reach out to us and let’s discuss how we can collaborate.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-blue-600 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Social Media & Legal */}
        <div className="mt-16 border-t border-gray-800 pt-10">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-6 lg:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                {/* <FaLinkedin size={24} /> */}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                {/* <FaInstagram size={24} /> */}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Dribbble"
              >
                {/* <FaDribbble size={24} /> */}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Tumblr"
              >
                {/* <FaTumblr size={24} /> */}
              </a>
            </div>

            {/* Legal & Copyright */}
            <p className="text-sm text-gray-500 text-center lg:text-right">
              © 2024 Factual Design. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <div 
        data-scroll data-scroll-speed="0.1"  
        className="flex h-[20vw] w-full items-center overflow-hidden"
        ref={containerRef}
      >
        <span
          className="bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-white"
          ref={textRef}
        >
          Factual
        </span>
      </div>
    </footer>
  );
}

export default Footer;
