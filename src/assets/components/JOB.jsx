import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function JOB() {

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  if (inView1) {
    animation1.start({
      scaleX: 1.2,
      scaleY: 1.2,
      transition: { duration: 0.6 },
    });
  }

  if (inView2) {
    animation2.start({
      scaleX: 1.2,
      scaleY: 1.2,
      transition: { duration: 0.6 },
    });
  }

  if (inView3) {
    animation3.start({
      scaleX: 1.2,
      scaleY: 1.2,
      transition: { duration: 0.6 },
    });
  }

  return (
    <div className="bg-black w-full h-full text-white p-8 flex flex-col space-y-8">
      <motion.div
        className="text-8xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>Hiring Now</span>
        <span className="ml-2 inline-block align-top text-sm">&#10230;</span>
      </motion.div>

      <div className="grid justify-items-start gap-8 md:gap-16">
        <motion.div
          className="bg-white text-black text-4xl md:text-6xl font-bold px-6 py-5 md:px-10 md:py-7 rounded-r-full mt-10 md:mt-20 hover:scale-95"
          ref={ref1}
          initial={{ scaleX: 1, scaleY: 1 }}
          animate={animation1}
        >
          Graphic Designer
        </motion.div>
        <motion.div
          className="justify-self-end bg-white text-black text-4xl md:text-6xl font-bold px-6 py-5 md:py-7 rounded-l-full hover:scale-95"
          ref={ref2}
          initial={{ scaleX: 1, scaleY: 1 }}
          animate={animation2}
        >
          UI/UX Designer
        </motion.div>
        <motion.div
          className="bg-white text-black text-4xl md:text-6xl font-bold px-6 py-5 md:py-7 rounded-r-full hover:scale-95"
          ref={ref3}
          initial={{ scaleX: 1, scaleY: 1 }}
          animate={animation3}
        >
          Web-App Designer
        </motion.div>
      </div>
      <motion.button
        className="bg-white text-black font-semibold py-2 px-6 rounded-full self-end mt-4 md:mt-8"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Discover all
      </motion.button>
    </div>

  )
}

export default JOB