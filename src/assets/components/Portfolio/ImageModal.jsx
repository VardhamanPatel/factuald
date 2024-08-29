import React from "react";
import ReactDOM from "react-dom";

const ImageModal = ({ image, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition"
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={image}
          alt="Enlarged"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
