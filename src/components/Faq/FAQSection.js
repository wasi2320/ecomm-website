import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are your perfumes original and authentic?",
      answer: "Yes, all our perfumes are 100% authentic and sourced directly from verified suppliers and brands."
    },
    {
      question: "How long do your perfumes last?",
      answer: "Our perfumes are designed to be long-lasting, with many customers reporting scent longevity of 6–10 hours or more."
    },
    {
      question: "Do you offer perfume samples?",
      answer: "Yes, we offer sample sizes for select fragrances so you can try before committing to a full-size bottle."
    },
    {
      question: "Are your perfumes suitable as gifts?",
      answer: "Absolutely! Our perfumes come in elegant packaging and make perfect gifts for any occasion."
    },
    {
      question: "How should I store my perfumes?",
      answer: "Store perfumes in a cool, dry place away from direct sunlight to maintain their quality and longevity."
    },
    {
      question: "What types of perfumes do you offer?",
      answer: "We offer a variety of fragrances including Eau de Parfum, Eau de Toilette, and body mists for both men and women."
    },
    {
      question: "Can I return a perfume if I don’t like the scent?",
      answer: "Yes, we accept returns on unopened perfumes within 30 days of purchase. Please review our return policy for more details."
    },
    {
      question: "Do you sell branded perfumes or niche fragrances?",
      answer: "We sell both! You'll find popular designer brands as well as unique niche fragrances in our collection."
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
