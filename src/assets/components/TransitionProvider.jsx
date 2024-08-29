import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TransitionProvider = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="relative w-full min-h-screen overflow-hidden"
      >
        {/* Black bar at the top */}
        <motion.div
          className="fixed inset-0 bg-zinc-200 rounded-b-[200px] z-20"  // Ensure it’s behind Navbar
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Transition text */}
        <motion.div
          className="fixed inset-0 flex items-center justify-center text-black text-8xl cursor-default"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {location.pathname.substring(1)}
        </motion.div>
        
        {/* Black bar at the bottom */}
        <motion.div
          className="fixed bottom-0 left-0 w-full bg-zinc-100 rounded-t-[100px] z-10"  // Ensure it’s behind Navbar
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Render children */}
        <div className="relative z-0">  {/* Ensures children are properly layered */}
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
