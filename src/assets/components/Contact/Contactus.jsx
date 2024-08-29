import React from 'react';
import "./Contact.css";

const Contactus = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-16">
      <div className="w-full max-w-8xl bg-black rounded-3xl shadow-2xl py-12 px-6 md:py-16 md:px-10 lg:py-24 lg:px-14">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-10 lg:mb-10">
          Let's Discuss Your <br />
        </h1>
        <div className="wrapperr text-4xl text-yellow-300  md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight mb-12 lg:mb-10">
          <div className="wordss">
            <span>Creative Ideas</span>
            <span>Unique Design</span>
            <span>Digital Content</span>
            <span>Social Media</span>
          </div>
        </div>

        <div className=" gap-6 md:gap-8  py-6 md:py-10 lg:py-12 px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-10 border-t border-gray-600">
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-white">New Business</div>
            <a href="mailto:info@factualdesign.in" className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 hover:text-yellow-500 transition-colors">
              info@factualdesign.in
            </a>
          </div>

          <div className="flex items-center justify-between py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-10 border-t border-gray-600">
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-white">Careers</div>
            <a href="mailto:info@factualdesign.in" className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 hover:text-yellow-500 transition-colors">
              info@factualdesign.in
            </a>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 border-t border-gray-600 py-8 md:py-12 px-4 md:px-8 lg:px-12">
          <input
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-3 text-lg md:text-xl border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="text"
            placeholder="Your phone number"
            className="w-full px-4 py-3 text-lg md:text-xl border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 text-lg md:text-xl border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="text"
            placeholder="Your type of project"
            className="w-full px-4 py-3 text-lg md:text-xl border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            placeholder="Describe your project..."
            className="w-full px-4 py-4 md:py-6 text-lg md:text-xl border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </form>
        
        <div className="flex justify-center mt-8 md:mt-12">
          <button className="bg-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-yellow-600 font-semibold text-lg md:text-xl transition-all">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
