import React, { useEffect } from "react";
import BackgroundSection from "../Components/BackgroundSection";
import aboutbg5 from '../assets/images/aboutbg.jpg'

const ReturnPolicy = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackgroundSection
        imageUrl={aboutbg5}
        className="h-[500px] p-10"
      >
      </BackgroundSection>
    <div className="max-w-5xl mx-auto px-4 py-8 text-[#333]">
      <h1 className="text-3xl font-bold text-[#7B3F00] mb-6">Return & Refund Policy – Boosty Bites</h1>

      <p className="mb-4">
        At <strong>Boosty Bites</strong>, we strive to deliver the finest handcrafted chocolates with love and care.
        However, if you're not completely satisfied with your purchase, we're here to help.
      </p>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">1. Return Eligibility</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Product received is damaged, melted, or expired.</li>
        <li>Wrong item delivered.</li>
        <li>Order is incomplete or has missing items.</li>
        <li>Issue must be reported within <strong>24 hours</strong> of delivery.</li>
        <li>Product must be unused, in original packaging with proof of purchase.</li>
        <li>Photo/video proof must be submitted.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">2. Non-Returnable Items</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Change of mind or personal taste preferences.</li>
        <li>Opened or tampered items.</li>
        <li>Items not bought from our official website or partners.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">3.   Refunds (if applicable)</h2>
      <p className="mb-4">
        Once approved, we may offer a <strong>replacement</strong>, <strong>credit coupon</strong>, or a <strong>full refund</strong>.
        Refunds will be processed within <strong>7–10 business days</strong> to your original payment method.
      </p>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">4. How to Request a Return or Refund</h2>
      <p className="mb-2">Please contact our support team with the following:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Order ID</li>
        <li>Description of the issue</li>
        <li>Photos/videos as proof</li>
      </ul>
      <p className="mt-2">
        📧 <strong>support@boostybites.com</strong><br />
        📞 <strong>+91-XXXXXXXXXX</strong> (Mon–Sat, 10 AM – 6 PM)
      </p>

      <h2 className="text-xl font-semibold text-[#7B3F00] mb-2 mt-6">5. Shipping for Returns</h2>
      <p className="mb-4">
        If a return is approved, we'll provide return instructions. Boosty Bites may arrange pickup or ask you to send the product back.
      </p>

      <p className="italic text-sm text-gray-600">
        Note: Boosty Bites reserves the right to refuse returns or refunds if policy conditions are not met.
      </p>
    </div>
    </>
  );
};

export default ReturnPolicy;
