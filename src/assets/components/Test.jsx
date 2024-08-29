import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';


function Test() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
    });

    return () => scroll.destroy(); // Cleanup on component unmount
  }, []);

  return (
    <div className="main overflow-hidden" data-scroll
      data-scroll-section
      data-scroll-speed="-4">
      <h1 className="fixed text-4xl font-bold">Basic Usage</h1>
      <div className="flex justify-around items-center w-full h-[300px] bg-gray-200">
        <div
          className="w-48 h-48 bg-blue-500"
          data-scroll
          data-scroll-speed="-8"
        ></div>
        <div
          className="w-48 h-48 bg-blue-500"
          data-scroll
          data-scroll-speed="0.3"
        ></div>
      </div>
      <div style={{ height: '100vh' }}></div>
    </div>
  );
}

export default Test;
