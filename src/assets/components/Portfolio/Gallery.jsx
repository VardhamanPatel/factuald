import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const images = [
    { id: 1, src: "https://www.factualdesign.in/img/portfolio/camrola/01.jpg", title: "Camrola Quartz", subtitle: "360 Branding Solution", category: "Brochure" },
    { id: 2, src: "https://factualdesign.in/img/recent%20work/2.jpg", title: "Joyin Bites", subtitle: "Packaging Design", category: "Brochure" },
    { id: 3, src: "https://factualdesign.in/img/recent%20work/03%20(1).jpg", title: "Asian Paint", subtitle: "Sample Box", category: "Logo" },
    { id: 4, src: "https://factualdesign.in/img/recent%20work/3.jpg", title: "United Seeds", subtitle: "Packaging Design", category: "WebDesign" },
    { id: 5, src: "https://factualdesign.in/img/recent%20work/4.jpg", title: "Gamara Builders", subtitle: "Brochure Design", category: "Brochure" },
    { id: 6, src: "https://factualdesign.in/img/recent%20work/5.jpg", title: "Sidwin Fabric", subtitle: "Website Design", category: "Logo" },
    { id: 7, src: "https://factualdesign.in/img/recent%20work/6.jpg", title: "Sidwin Fabric", subtitle: "Brochure Design", category: "Brochure" },
  ];

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div data-scroll data-scroll-speed="0.3" className="bg-black min-h-screen py-20 p-4 mt-20">
      <div className="text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mx-4 md:mx-8">Case Studies</h1>
      </div>
      
      {/* Filter Bar */}
      <div className="flex justify-center flex-wrap py-4 shadow-md mt-12 bg-black">
        {['All', 'Logo', 'Brochure', 'WebDesign'].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`mx-4 px-5 md:px-10 lg:px-14 py-2 rounded-full text-sm md:text-lg font-bold transition-colors duration-300 mb-4 ${
              filter === category ? 'bg-red-500 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleClick(img.id)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
              onError={(e) => e.target.src = 'fallback-image-url.jpg'} // fallback image in case of loading error
            />
            <div className="p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white">{img.title}</h3>
              <p className="text-sm md:text-lg text-gray-400">{img.subtitle}</p>
              <p className="text-xs text-gray-400 mt-1">{img.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
