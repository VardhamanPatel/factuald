import React, { useState } from "react";
import { HiArrowRightCircle, HiArrowLeftCircle } from "react-icons/hi2";

const testimonials = [
  {
    name: "Vardhaman",
    position: "CEO/Founder @xyz Design Studio",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "factual has been an invaluable asset to our team, consistently delivering high-quality, visually stunning, and user-friendly designs. His keen eye for detail and creative flair have significantly elevated the user experience of our products. From concept to execution, Gautham has shown an impressive ability to transform ideas into captivating visual interfaces.",
  },
  {
    name: "Vivek",
    position: "Product Manager @TechCorp",
    image: "https://images.unsplash.com/photo-1630026317249-c1c83b21ea07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy",
    text: "Jane was instrumental in guiding our product development. Her insights into user experience were spot on. factual has been an invaluable asset to our team, consistently delivering high-quality, visually stunning, and user-friendly designs. Her keen eye for detail and creative flair have significantly elevated the user experience of our products.",
  },
  {
    name: "Kajal",
    position: "CTO @Innovatech",
    image: "https://images.unsplash.com/photo-1667053508464-eb11b394df83?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "John has been a key player in transforming our technical strategy. His ability to foresee industry trends has been crucial. factual has been an invaluable asset to our team, consistently delivering high-quality, visually stunning, and user-friendly designs.",
  },
  // Add more testimonials as needed
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section data-scroll data-scroll-speed='0.1' className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 sm:px-8 lg:px-16 relative rounded-2xl m-2">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-8xl font-bold mb-4 uppercase">Testimonial</h1>
        <hr className="mb-10 border-black border-1" />

        {/* Testimonials Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full lg:h-[70vh] flex flex-col md:flex-row items-center px-4 lg:px-12"
              >
                {/* Profile Image */}
                <div className="w-full lg:w-1/3 mb-6 md:mb-0 text-center md:text-left">
                  <img
                    className="h-48 w-48 rounded-full object-cover mx-auto md:mx-0 border-4 border-black shadow-lg"
                    src={testimonial.image}
                    alt={`Profile of ${testimonial.name}`}
                  />
                  <div className="mt-6">
                    <p className="text-3xl font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xl text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                {/* Testimonial Content */}
                <div className="w-full lg:w-2/3 text-center md:text-left bg-white shadow-lg p-8 rounded-lg border border-gray-300">
                  <p className="text-2xl lg:text-3xl italic text-gray-800 leading-relaxed px-6 lg:px-12">
                    “{testimonial.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handlePrevClick}
            aria-label="Previous testimonial"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <HiArrowLeftCircle className="w-12 h-12 hover:scale-110 transform transition-transform" />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handleNextClick}
            aria-label="Next testimonial"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <HiArrowRightCircle className="w-12 h-12 hover:scale-110 transform transition-transform" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-4 h-4 rounded-full transition-all ${
                currentIndex === index ? 'bg-black scale-110' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
