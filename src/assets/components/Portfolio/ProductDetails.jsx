import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./Data";
import ImageModal from "./ImageModal";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);

  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <p className="text-xl text-center text-white">Product not found.</p>;
  }

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <section className="w-full bg-white text-[#1A1A1A] overflow-hidden">
      <div className="relative h-full">
        <button
          onClick={() => navigate("/G")}
          className="absolute top-0 right-12 w-10 h-10 bg-gray-800 text-white text-3xl font-bold rounded-full flex items-center justify-center hover:bg-black transition z-40"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="text-center my-24">
          <h2 className="text-4xl lg:text-6xl uppercase font-extrabold text-gray-900">
            {product.title}
          </h2>
        </div>

        <div>
          <p>
            <span className="font-semibold text-[#1A1A1A]">SERVICE:</span>{" "}
            <span className="text-zinc-500 mx-4">
              {product.service || "N/A"}
            </span>
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-1 gap-8 my-12">
          <div className="flex justify-center p-16">
            <img
              src={product.additionalImages[0]} // Example usage of product data
              alt={product.title}
              className="rounded-2xl w-full cursor-pointer"
              onClick={() => openModal(product.additionalImages[0])}
            />
          </div>

          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">The Brief</h2>
            <p className="mt-4 text-2xl font-semibold">
              {product.aboutClient}
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            {product.additionalImages.slice(1, 3).map((image, index) => (
              <div key={index} className="w-full md:w-1/2">
                <img
                  src={image}
                  alt={`Visual ${index + 1}`}
                  className="rounded-lg cursor-pointer"
                  onClick={() => openModal(image)}
                />
              </div>
            ))}
          </div>
          <div className="p-6 flex flex-col justify-center">
            <p className="mt-4 text-2xl font-semibold text-center">
              We developed a visual configurator tool that not only showcased the
              products' exquisite craftsmanship, but also empowered users to
              personalize their furniture selections.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.additionalImages.slice(3).map((image, index) => (
              <div key={index} className="col-span-1">
                <img
                  src={image}
                  alt={`Feature ${index + 1}`}
                  className="rounded-lg cursor-pointer"
                  onClick={() => openModal(image)}
                />
              </div>
            ))}
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Patch of Light</h2>
            <p className="mt-4 text-2xl font-semibold">
              Quartz stone, as the name suggests, is an engineered stone used for
              a variety of applications in the building and construction industry,
              be it residential, non-residential, or commercial.
            </p>
          </div>
        </section>

        <section className="py-12 text-center">
          <div className="flex justify-center gap-12 mt-8">
            <div>
              <h3 className="text-xl font-bold">3 weeks</h3>
              <p className="text-lg">UI/UX Design</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">8 weeks</h3>
              <p className="text-lg">Development</p>
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-full">
            Visit Website
          </button>
        </section>
      </div>

      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </section>
  );
};

export default ProductDetails;
