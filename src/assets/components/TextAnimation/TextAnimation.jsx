// AnimatedTitle.jsx
import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './TextAnimation.css'; // Updated CSS file name

const TextAnimation = () => {
  const lettersContainerRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const letters = lettersContainerRef.current.children;

    setTimeout(() => {
      Array.from(letters).forEach((letter, index) => {
        anime({
          targets: letter,
          easing: 'easeInOutQuad',
          translateY: ['-40px'],
          delay: 40 * index,
        });

        anime({
          targets: letter,
          easing: 'easeInOutQuad',
          opacity: 1,
          delay: 80 * index,
          complete: function (anim) {
            if (index === letters.length - 1) {
              revealSubtitle();
            }
          },
        });
      });
    }, 400);

    function revealSubtitle() {
      anime({
        targets: subtitleRef.current,
        easing: 'easeInOutQuad',
        opacity: 1,
        duration: 250,
        delay: 0,
      });
    }
  }, []);

  return (
    <div className="animation-wrapper">
      <h1>
        <span className="title-container inter mt-6" ref={lettersContainerRef}>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">F</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">a</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">c</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">t</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">u</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">l</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">&nbsp;&nbsp; </span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">D</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">e</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">s</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">i</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">g</span>
          <span className="letter text-center font-medium  text-7xl sm:text-6xl lg:text-[240px]">n</span>
        </span>
        <br />
        <span className="subtitle" ref={subtitleRef}>THE WORD ITSELF TALK ABOUT FACT</span>
      </h1>
    </div>
  );
};

export default TextAnimation;
