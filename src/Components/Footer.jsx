import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import footerbg from '../assets/images/footerbg.png'
export default function Footer() {
  return (
    <>
      {/* 🔶 Top Wave (like chocolate flowing down) */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-[60px] fill-[#4a1c08]"
        >
          <path d="M0,0 C150,100 350,0 600,0 C850,0 1050,100 1200,0 L1200,100 L0,100 Z" />
        </svg>
      </div>

      {/* 🔔 Email Strip with dark chocolate bg */}
      <div className="bg-[#4a1c08] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          {/* Email input */}
          <div className="flex w-full md:w-3/4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500 placeholder-gray-500"
            />
            <button className="bg-black px-5 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-lg">
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white text-white transition"><FaFacebookF /></a>
<a href="https://www.instagram.com/boostybites.india/" className="w-10 h-10 flex items-center justify-center border border-white text-white transition">
  <FaInstagram />
</a>            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white text-white transition"><FaLinkedinIn /></a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white text-white transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* 🔻 Main Footer */}
      <footer className="bg-[#4a1c08] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Boosty Bites</h2>
            <p className="text-sm sm:text-base md:text-lg text-justify text-white">
              Whether you're a chocolate lover, health professional, or investor, we invite you to join us in shaping the future of chocolate—cleaner, smarter, and naturally delicious.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg text-justify text-white">
              <li><a href="/" className="hover:text-white">Home</a></li>
               <li><a href="/about_us" className="hover:text-white">About Us</a></li>
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/testimonial" className="hover:text-white">Testimonial</a></li>
              <li><a href="/contact_us" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg text-justify text-white">
              <li><a href="/faq" className="hover:text-white">FAQs</a></li>
              <li><a href="/shippingpolicy" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="/returnpolicy" className="hover:text-white">Return Policy</a></li>
              <li><a href="/terms&condition" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4 text-sm sm:text-base md:text-lg text-white">
              {/* 📍 Corporate Office */}
              <div>
                <span className="inline-block font-medium">📍Office:</span>
                <div className="ml-6">
# 206 & 207. Sonigara Landmark 110. Chatrapati Chowk Rd. Dynasty Society. Kaspate Wasti Wakad Pune, Pimpri-Chinchwad Maharashtra 11057                </div>
              </div>

              {/* 📞 Phone */}
              <div>
                <span className="inline-block font-medium">📞 Phone:</span>
                <div className="ml-6">+91-9876543210</div>
              </div>

              {/* 📧 Email */}
              <div>
                <span className="inline-block font-medium">📧 Email:</span>
                <div className="ml-6">Support@boostybites.in</div>
              </div>

              {/* 🌐 Website */}
              <div>
                <span className="inline-block font-medium">🌐 Website:</span>
                <div className="ml-6">www.boostybites.com</div>
              </div>
            </div>
          </div>
        </div>

      {/* 🔻 Center Image (Responsive Logo) */}
<div className="w-full flex justify-center ">
  <img
    src={footerbg} // 🔁 Replace with your actual image path
    alt="Boosty Bites Logo"
    className="w-60 md:w-80 lg:w-96 object-contain"
  />
</div>



        {/* Copyright */}
        <div className="border-t border-white text-center py-4 text-sm text-white">
          &copy; 2025 Boosty Bites. All rights reserved.
        </div>
      </footer>
    </>
  );
}
