import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/assets/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "../src/assets/components/Footer/Footer";
import ProductDetails from "../src/assets/components/Portfolio/ProductDetails";
import Gallery from "../src/assets/components/Portfolio/Gallery";
import TransitionProvider from "../src/assets/components/TransitionProvider";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <Navbar />
      <TransitionProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/G" element={<Gallery />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      </TransitionProvider>
      <Footer />
    </Router>
  );
};

export default App;
