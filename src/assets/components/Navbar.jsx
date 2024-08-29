import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo1 from '../../../src/assets/logo.png';
import { navItems } from "../../constants/index";
import { useState, useEffect, useCallback } from "react";
import "animate.css/animate.css";

const SCROLL_THRESHOLD = 10; // Avoid minor scroll changes

const topVariants = {
  closed: { rotate: 0 },
  opened: { rotate: 45, backgroundColor: "#f5f2f2" },
};

const centerVariants = {
  closed: { opacity: 1 },
  opened: { opacity: 0 },
};

const bottomVariants = {
  closed: { rotate: 0 },
  opened: { rotate: -45, backgroundColor: "##f5f2f2" },
};

const listVariants = {
  closed: { x: "100vw" },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollState, setScrollState] = useState("none");
  const [open, setOpen] = useState(false);

  // Scroll handler to detect scroll direction
  const onScroll = useCallback(() => {
    const currentScroll = window.scrollY;

    if (Math.abs(currentScroll - scrollPosition) > SCROLL_THRESHOLD) {
      setScrollState(currentScroll > scrollPosition ? "down" : "up");
      setScrollPosition(currentScroll);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(onScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScroll]);

  const isNavHidden = scrollState === "down";

  return (
    <nav
      className={`fixed z-[999] px-20 w-full h-10 py-8 flex justify-between items-center backdrop-blur-lg text-zinc-100 ${isNavHidden
          ? "hidden animate__animated animate__slideOutUp"
          : "animate__animated animate__slideInDown"
        }`}
    >
      <div className="flex items-center">
        <Link
          to="/"
          aria-label="Home"
          className="hidden sm:flex items-center"
        >
          <img src={logo1} alt="Factual Design Logo" className="h-11" />
          <h1 className="mx-2 font-bold text-lg">Factual Design</h1>
        </Link>
        <Link
          to="/"
          aria-label="Home"
          className="flex sm:hidden items-center justify-around"
        >
          <img src={logo1} alt="Factual Design Logo" className="h-10" />
        </Link>
      </div>

      <div className="py-4 flex justify-between items-center mx-10">


        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10  text-lg font-semibold">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className="p-2 rounded-lg hover:bg-black hover:text-white transition duration-300"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            className="w-10 h-7 flex flex-col justify-between"
            onClick={() => setOpen((prev) => !prev)}
            tabIndex={0} // Ensure the button is focusable
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-9 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-9 h-1 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-9 h-1 bg-white rounded origin-left"
            ></motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-full h-screen bg-[#1A1A1A] text-white flex flex-col items-center justify-center gap-20 inter text-5xl z-40"
        >
          {navItems.map((item, index) => (
            <motion.div
              variants={listItemVariants}
              key={index}
              onClick={() => setOpen(false)}
            >
              <Link
                to={item.to}
                className="hover:text-gray-400 transition duration-200"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          {/* Close Button */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 text-white text-3xl"
          >
            &times;
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
