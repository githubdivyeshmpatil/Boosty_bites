import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

      <p className="mb-6 text-sm text-center text-gray-500">Effective Date: DD/MM/YYYY</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. General Information</h2>
        <p>
          This website is operated by <strong>[Your Brand Name]</strong>. Throughout the site, the terms “we”, “us”, and “our” refer to [Your Brand Name].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
        <p>
          To use our services, you must be at least 18 years old or have permission from a parent or legal guardian.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Products and Services</h2>
        <p>
          We sell chocolates and related products for personal consumption. All products are subject to availability and may be withdrawn at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Pricing and Payment</h2>
        <p>
          All prices are listed in INR and are inclusive of applicable taxes unless otherwise stated. Payments must be made through secure payment gateways available on the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Shipping & Delivery</h2>
        <p>
          Delivery timelines depend on your location and product availability. We are not responsible for delays caused by courier services or natural events.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Returns & Refunds</h2>
        <p>
          Please refer to our Return & Refund Policy for detailed information. We only accept returns for damaged or incorrect products, subject to verification.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
        <p>
          All content, including images, text, logos, and product designs, is the property of [Your Brand Name] and protected under Indian copyright law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. User Conduct</h2>
        <p>
          You agree not to use our website for any illegal purpose or submit false information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
        <p>
          We do our best to ensure information accuracy, but we are not liable for any damages arising from use of this website or our products.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of [Your City].
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
        <p>
          If you have any questions, please contact us at:
          <br />📧 <a href="mailto:support@yourbrand.com" className="text-blue-600 underline">support@yourbrand.com</a>
          <br />📞 +91-XXXXXXXXXX
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
