import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What products do you offer?",
      answer: "We offer a wide range of products including perfumes, tools, and safety plumbing products."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact us through email at info@therideconnect.com or by phone at 913 414 3536."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we provide international shipping. Shipping costs vary depending on your location."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase for most items. Please check our return policy page for more details."
    },
    {
      question: "Do you offer any discounts?",
      answer: "We occasionally offer promotions and discounts. You can sign up for our newsletter to stay updated on special offers."
    }
  ];

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the current open FAQ if clicked again
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#374151] to-[#000000] py-16 px-6 text-white rounded ">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
