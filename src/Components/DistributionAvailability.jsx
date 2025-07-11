import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const distributionPoints = [
  "Retail: Available in leading organic and health food stores across India",
  "Online: Shop directly from our website and partner e-commerce platforms like Amazon, Flipkart, and BigBasket",
  "Healthcare: Supplied to pediatric clinics, hospitals, and nutritionist networks",
  "School Cafeterias: Safe, fun, and nourishing options for children’s mid-day treats",
  "Global Expansion: Export-ready and seeking partners in Southeast Asia, Middle East, and Europe",
];

function DistributionAvailability() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-left">
        {/* Title & Intro */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Distribution & Availability
        </h2>
        <p className="text-gray-600 mb-6">
          We’re proud to serve customers across multiple verticals:
        </p>

        {/* Distribution Points List */}
        <ul className="space-y-4">
          {distributionPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Contact Info */}
       <p className="mt-6 text-gray-800 font-medium">
  For bulk orders, dealership opportunities, and retail partnerships, please reach out via the{" "}
  <a href="/contact_us" className="text-blue-600 underline cursor-pointer">
    Contact Us
  </a>{" "}
  page.
</p>

      </div>
    </section>
  );
}

export default DistributionAvailability;
