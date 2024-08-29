import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ServiceSection() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div data-scroll data-scroll-speed='0.1'>
      <motion.div
        className="w-full bg-gradient-to-b from-black p-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-[#CDEA70] text-black p-24 rounded-3xl"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 uppercase">Services We Offer</h1>
          <p className="text-xl mb-12">
            Combine craft, good design, and best-in-class technology to create
            digital experiences that make your competitors jealous and customers
            talk about your brand. In a good way, of course.
          </p>

          <div className="space-y-8">
            <motion.h2
              className="text-3xl font-bold text-orange-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
            >
              Digital Products + Web Design
            </motion.h2>

            {/* Accordion Section */}
            <div className="border-b border-gray-600">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('web-design')}
              >
                <h3 className="text-xl font-semibold">BRANDING, STRATEGY & IDENTITY</h3>
                <span className="text-orange-500 text-2xl">
                  {openSection === 'web-design' ? '-' : '+'}
                </span>
              </div>
              {openSection === 'web-design' && (
                <motion.div
                  className="p-4 text-lg text-gray-950"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.1 }}
                >
                  Help businesses with their branding identity systems better. We
                  understand that strategy is the key component to develop any brand. We
                  make an action plan that determines the type of image our clients
                  want to build with their customers. Brand Strategy Naming Convention
                  Logo Design Corporate Identity
                </motion.div>
              )}
            </div>
            <div className="border-b border-gray-600">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('design')}
              >
                <h3 className="text-xl font-semibold">DESIGN & COMMUNICATION</h3>
                <span className="text-orange-500 text-2xl">
                  {openSection === 'design' ? '-' : '+'}
                </span>
              </div>
              {openSection === 'design' && (
                <motion.div
                  className="p-4 text-lg text-gray-950"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.1 }}
                >
                  Design and communication are two main pillars which create a
                  positive image of any brand in front of their clients. We build
                  and activate brands through cultural insight, strategic vision,
                  and the power of emotion. It helps your clients recognize your
                  actual personality and make the best reflection of it in the
                  market. Behind each and every design there's a deep thought
                  process. Graphic Design Photography 3D Visualization Packaging
                  Design`
                </motion.div>
              )}
            </div>
            <div className="border-b border-gray-600">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('web')}
              >
                <h3 className="text-xl font-semibold">WEB & MOBILE DESIGN</h3>
                <span className="text-orange-500 text-2xl">
                  {openSection === 'web' ? '-' : '+'}
                </span>
              </div>
              {openSection === 'web' && (
                <motion.div
                  className="p-4 text-lg text-gray-950"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.1 }}
                >
                  Websites and mobile applications are the best networking
                  platforms. With these platforms you are just one click away from
                  your potential clients. Websites and mobile apps help to reach
                  out to more clients and boost conversion rates for your business
                  faster. UX Design Web Development Ecommerce Solution Mobile App
                  Design
                </motion.div>
              )}
            </div>
            <div className="border-b border-gray-600">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('social')}
              >
                <h3 className="text-xl font-semibold">SOCIAL MEDIA MARKETING</h3>
                <span className="text-orange-500 text-2xl">
                  {openSection === 'social' ? '-' : '+'}
                </span>
              </div>
              {openSection === 'social' && (
                <motion.div
                  className="p-4 text-lg text-gray-950"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.1 }}
                >
                  In today's world, if it's not on social media, it's not happening.
                  Building an insight-based systematic plan and strategy for your
                  business. With a well-designed digital/social media campaign, you
                  get more visibility and qualified leads. Social Media Management
                  Digital Marketing
                </motion.div>
              )}
            </div>
            <div className="border-b border-gray-600">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('systems')}
              >
                <h3 className="text-xl font-semibold">VIDEO</h3>
                <span className="text-orange-500 text-2xl">
                  {openSection === 'systems' ? '-' : '+'}
                </span>
              </div>
              {openSection === 'systems' && (
                <motion.div
                  className="p-4 text-lg text-gray-950"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.1 }}
                >
                  Video allows you to be concise and capture viewers' interest in
                  the first few seconds. Good quality videos with high resolution
                  are an integrated part of social media growth. Communicate with
                  your clients better through animation & motion video Video
                  Advertising 2D/3D Animation Video Motion Graphic
                </motion.div>
              )}
            </div>

            {/* Additional Accordion Sections (Add more as necessary) */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ServiceSection;
