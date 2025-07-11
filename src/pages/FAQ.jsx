import React, { useState } from "react";

const faqs = [
  {
    question: "What makes Boosty Bites chocolates special?",
    answer:
      "Our chocolates are handcrafted using premium ingredients with no added preservatives. Every bite is packed with rich flavor and love!",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes, we deliver to all major cities and towns across India through our trusted courier partners.",
  },
  {
    question: "How long will my order take to arrive?",
    answer:
      "Orders are typically delivered within 3–7 business days. Remote locations may take slightly longer.",
  },
  {
    question: "Do you offer custom gift packaging?",
    answer:
      "Absolutely! We offer personalized gift wrapping and custom messages. You can select this option at checkout.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "If your order hasn’t been shipped yet, we can modify or cancel it. Please contact our support team immediately.",
  },
  {
    question: "Are your chocolates vegetarian?",
    answer:
      "Yes, all Boosty Bites chocolates are 100% vegetarian and made with ethically sourced ingredients.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[#7B3F00] mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-[#7B3F00] focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
