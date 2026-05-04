import React, { useState } from "react";
import { AiOutlineCopyright, AiOutlineTrademarkCircle } from "react-icons/ai";
import PolicyModal from "./PolicyModal";

const FooterBottom = () => {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    content: "",
  });

  const openPolicy = (title, content) => {
    setModal({ open: true, title, content });
  };

  const closePolicy = () => {
    setModal({ open: false, title: "", content: "" });
  };
  const privacyContent = (
    <>
      <h3 className="font-semibold mb-2">1. Information We Collect</h3>
      <p>
        We collect personal information such as your name, email address, phone number,
        shipping address, and payment details when you place an order or contact us.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">2. How We Use Your Information</h3>
      <p>
        Your information is used to process orders, provide customer support, improve our
        services, and communicate updates related to your purchase.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">3. Data Protection</h3>
      <p>
        We implement industry-standard security measures to protect your personal data.
        However, no method of transmission over the internet is 100% secure.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">4. Sharing Information</h3>
      <p>
        We do not sell or rent your personal information. We may share data with trusted
        partners such as payment processors and shipping providers.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">5. Cookies</h3>
      <p>
        Our website uses cookies to enhance user experience and analyze website traffic.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">6. Contact</h3>
      <p>
        For privacy-related inquiries, contact us at: info@therideconnect.com
      </p>
    </>
  );
  
  const refundContent = (
    <>
      <h3 className="font-semibold mb-2">1. Return Eligibility</h3>
      <p>
        Items may be returned within 7 days of delivery. Products must be unused,
        in original packaging, and in the same condition received.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">2. Non-Returnable Items</h3>
      <p>
        Certain items such as opened perfumes, testers, and clearance items are
        non-refundable unless defective.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">3. Refund Process</h3>
      <p>
        Once your return is received and inspected, we will notify you of approval.
        Refunds are processed within 5–7 business days.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">4. Shipping Costs</h3>
      <p>
        Shipping fees are non-refundable unless the return is due to our error.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">5. Contact</h3>
      <p>
        Email: info@therideconnect.com for return requests.
      </p>
    </>
  );
  
  const shippingContent = (
    <>
      <h3 className="font-semibold mb-2">1. Processing Time</h3>
      <p>
        Orders are processed within 1–2 business days (excluding weekends and holidays).
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">2. Delivery Time</h3>
      <p>
        Delivery typically takes 5–10 business days depending on your location.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">3. Tracking</h3>
      <p>
        Tracking information will be provided once your order has shipped.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">4. Delays</h3>
      <p>
        We are not responsible for delays caused by carriers, customs, or unforeseen events.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">5. Shipping Address</h3>
      <p>
        Please ensure your shipping address is correct. We are not responsible for lost
        packages due to incorrect information.
      </p>
    </>
  );
  
  const termsContent = (
    <>
      <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
      <p>
        By accessing and using this website, you agree to be bound by these terms.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">2. Products & Pricing</h3>
      <p>
        We reserve the right to modify prices, discontinue products, or update
        descriptions at any time without notice.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">3. Orders</h3>
      <p>
        We reserve the right to refuse or cancel any order at our discretion.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">4. Intellectual Property</h3>
      <p>
        All content on this site is the property of Ride Connect and may not be used
        without permission.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">5. Limitation of Liability</h3>
      <p>
        We are not liable for any indirect or incidental damages arising from the
        use of our website or products.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">6. Contact</h3>
      <p>
        Phone: 480-787-0039 | Email: info@therideconnect.com
      </p>
    </>
  );
  return (
    <div className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TRUST TEXT */}
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase">
            Verified Business
          </p>
          <p className="text-sm text-white/80 mt-2">
            Registered with Better Business Bureau & Authorized Distributor Network
          </p>
        </div>

        {/* 🔥 POLICY LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">

          <button onClick={() => openPolicy("Privacy Policy", privacyContent)}>
            Privacy Policy
          </button>

          <button onClick={() => openPolicy("Return & Refund Policy", refundContent)}>
            Return & Refund
          </button>

          <button onClick={() => openPolicy("Shipping Policy", shippingContent)}>
            Shipping Policy
          </button>

          <button onClick={() => openPolicy("Terms of Service", termsContent)}>
            Terms of Service
          </button>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-gray-500 flex justify-center items-center gap-1">
          <AiOutlineCopyright />
          {new Date().getFullYear()} TRC Shop — All Rights Reserved
        </p>

        {/* ADDRESS */}
        <p className="text-center text-xs text-gray-500 mt-2 flex justify-center items-center gap-1">
          2041 W Marconi Ave, Phoenix AZ 85023 — RIDECONNECT LLC
          <AiOutlineTrademarkCircle />
        </p>

      </div>

      {/* 🔥 MODAL */}
      <PolicyModal
        isOpen={modal.open}
        onClose={closePolicy}
        title={modal.title}
        content={modal.content}
      />
    </div>
  );
};

export default FooterBottom;