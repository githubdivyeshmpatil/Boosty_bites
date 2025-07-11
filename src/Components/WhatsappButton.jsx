import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20know%20more"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappButton;
