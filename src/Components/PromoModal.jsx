import React from 'react';
import user1 from '../assets/images/girls.png';

const PromoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg overflow-hidden shadow-lg relative flex flex-col md:flex-row">
        {/* ✖ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold text-gray-700"
        >
          &times;
        </button>

        {/* 📸 Left Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={user1}
            alt="Promo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 📋 Right Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-1">
            Flat 10% off on your first purchase
          </h2>
          <p className="text-xs mb-3 text-gray-600">
            Get your promo code and apply it at checkout.
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-1.5 mb-2 text-sm"
          />
          <div className="flex items-center mb-2 border rounded text-sm">
            <span className="px-2">🇮🇳 +91</span>
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 px-2 py-1.5 outline-none"
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition text-sm">
            Submit
          </button>

          <p className="text-[10px] mt-2 text-gray-500">
            By signing up, you agree to receive marketing messages. View our
            privacy policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
