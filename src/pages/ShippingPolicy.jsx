import React from "react";
import BackgroundSection from "../Components/BackgroundSection";
import shiping from '../assets/images/shiping.png'

const ShippingPolicy = () => {
  return (
    <>
     <BackgroundSection
        imageUrl={shiping}
        className="h-[500px] p-10"
      >
      </BackgroundSection>
    <div className="max-w-5xl mx-auto px-4 py-8 text-[#333]">
      <h1 className="text-3xl font-bold text-[#7B3F00] mb-6">Shipping Policy – Boosty Bites</h1>

      <p className="mb-4">
        At <strong>Boosty Bites</strong>, we’re committed to delivering your chocolates fresh and on time. Below are the details of our shipping process to ensure a smooth experience.
      </p>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">1. Shipping Locations</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>We currently ship across all major cities in India.</li>
        <li>We do not offer international shipping at the moment.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">2. Delivery Time</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Orders are processed within <strong>1–2 business days</strong>.</li>
        <li>Standard delivery takes <strong>3–7 business days</strong> depending on the location.</li>
        <li>During festivals or peak seasons, delivery might take longer.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">3. Shipping Charges</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Free Shipping</strong> on orders above ₹499.</li>
        <li>Orders below ₹499 may include a nominal shipping fee, displayed at checkout.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">4. Order Tracking</h2>
      <p className="mb-4">
        Once your order is shipped, you will receive an email and/or SMS with the tracking details. You can use this to monitor your delivery in real-time.
      </p>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">5. Packaging</h2>
      <p className="mb-4">
        We use insulated and food-grade packaging to ensure your chocolates arrive fresh, safe, and in perfect condition.
      </p>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">6. Delays & Exceptions</h2>
      <p className="mb-4">
        Boosty Bites is not responsible for delays caused by natural calamities, logistics issues, or courier strikes. We do our best to ensure timely deliveries.
      </p>

      <p className="italic text-sm text-gray-600">
        For any queries related to shipping, feel free to reach us at <strong>support@boostybites.com</strong> or call us at <strong>+91-XXXXXXXXXX</strong>.
      </p>
    </div>
    </>
  );
};

export default ShippingPolicy;
