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
        We collect personal information that you voluntarily provide when interacting
        with our website, including but not limited to your full name, email address,
        phone number, billing address, shipping address, and payment details.
        Additionally, we may collect technical data such as IP address, browser type,
        device information, and browsing behavior through cookies and analytics tools.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">2. How We Use Your Information</h3>
      <p>
        Your information is used to process orders, manage payments, deliver products,
        provide customer support, personalize your shopping experience, improve our
        services, detect fraud, and send transactional or promotional communications.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">3. Legal Basis for Processing</h3>
      <p>
        We process your data based on contractual necessity (to fulfill orders),
        legitimate business interests (to improve services), legal obligations,
        and your consent where applicable.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">4. Data Protection & Security</h3>
      <p>
        We implement industry-standard security measures including SSL encryption,
        secure servers, and restricted access controls. However, no method of data
        transmission over the internet can be guaranteed 100% secure.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">5. Sharing of Information</h3>
      <p>
        We do not sell or rent your personal data. We may share your information with
        trusted third-party service providers such as payment processors, logistics
        partners, email marketing services, and analytics providers strictly for
        business operations.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">6. Cookies & Tracking Technologies</h3>
      <p>
        We use cookies, pixels, and similar technologies to enhance user experience,
        remember preferences, analyze traffic, and deliver targeted advertisements.
        You may disable cookies through your browser settings.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">7. Data Retention</h3>
      <p>
        We retain your information only for as long as necessary to fulfill the purposes
        outlined in this policy, including legal, accounting, or reporting requirements.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">8. Your Rights</h3>
      <p>
        You have the right to request access, correction, deletion, or restriction of
        your personal data. You may also object to processing or request data portability
        where applicable.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">9. Third-Party Links</h3>
      <p>
        Our website may contain links to third-party websites. We are not responsible
        for the privacy practices or content of those external sites.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">10. Children’s Privacy</h3>
      <p>
        Our services are not intended for individuals under the age of 13. We do not
        knowingly collect personal data from children.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">11. Policy Updates</h3>
      <p>
        We reserve the right to update this Privacy Policy at any time. Changes will
        be posted on this page with an updated revision date.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">12. Contact</h3>
      <p>
        Email: info@therideconnect.com | Phone: 480-787-0039
      </p>
    </>
  );
  
  const refundContent = (
    <>
      <h3 className="font-semibold mb-2">1. Return Eligibility</h3>
      <p>
        Returns are accepted within 7 days of delivery. Items must be unused,
        unopened, and in their original packaging with all seals intact.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">2. Non-Returnable Items</h3>
      <p>
        Due to hygiene and safety reasons, opened perfumes, testers, clearance items,
        and gift cards are non-returnable unless defective or damaged upon arrival.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">3. Damaged or Incorrect Items</h3>
      <p>
        If you receive a damaged, defective, or incorrect product, you must notify us
        within 48 hours of delivery with photo evidence for resolution.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">4. Return Process</h3>
      <p>
        To initiate a return, contact our support team. Once approved, you will receive
        return instructions. Unauthorized returns may not be accepted.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">5. Refund Timeline</h3>
      <p>
        Refunds are processed within 5–10 business days after inspection. Processing
        time may vary depending on your payment provider.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">6. Shipping Costs</h3>
      <p>
        Original shipping charges are non-refundable. Return shipping costs are the
        responsibility of the customer unless the return is due to our error.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">7. Order Cancellation</h3>
      <p>
        Orders may be canceled within a limited time before shipment. Once shipped,
        cancellation is not possible.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">8. Fraud Prevention</h3>
      <p>
        We reserve the right to deny refunds in cases of suspected abuse, fraud,
        or violation of our policies.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">9. Contact</h3>
      <p>Email: info@therideconnect.com</p>
    </>
  );
  
  const shippingContent = (
    <>
      <h3 className="font-semibold mb-2">1. Order Processing</h3>
      <p>
        Orders are processed within 1–3 business days. Processing times may increase
        during peak seasons or promotional periods.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">2. Shipping Time</h3>
      <p>
        Estimated delivery time is 5–10 business days depending on location and
        carrier availability.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">3. Shipping Fees</h3>
      <p>
        Shipping costs are calculated at checkout and may vary based on destination
        and order weight.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">4. Tracking Information</h3>
      <p>
        Once shipped, a tracking number will be provided via email.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">5. Delays & Liability</h3>
      <p>
        We are not responsible for delays caused by shipping carriers, customs,
        weather conditions, or unforeseen circumstances.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">6. Incorrect Address</h3>
      <p>
        Customers are responsible for providing accurate shipping details. We are not
        liable for lost or delayed shipments due to incorrect addresses.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">7. Lost Packages</h3>
      <p>
        If a package is marked delivered but not received, customers must contact the
        carrier directly. We will assist where possible but are not liable for carrier issues.
      </p>
    </>
  );
  
  const termsContent = (
    <>
      <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
      <p>
        By accessing this website, you agree to comply with and be bound by these Terms.
        If you do not agree, you must not use our services.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">2. Eligibility</h3>
      <p>
        You must be at least 18 years old or have parental consent to use this website.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">3. Products & Pricing</h3>
      <p>
        We reserve the right to modify product pricing, descriptions, and availability
        without notice.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">4. Orders & Payments</h3>
      <p>
        We reserve the right to refuse or cancel any order at our discretion, including
        suspected fraud or pricing errors.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">5. Intellectual Property</h3>
      <p>
        All content, logos, and materials are the property of Ride Connect and may not
        be copied, reproduced, or distributed without permission.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">6. Limitation of Liability</h3>
      <p>
        We shall not be liable for any indirect, incidental, or consequential damages
        arising from the use of our services.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">7. Governing Law</h3>
      <p>
        These Terms shall be governed by and interpreted under the laws of the United States.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">8. Changes to Terms</h3>
      <p>
        We reserve the right to update these Terms at any time without prior notice.
      </p>
  
      <h3 className="font-semibold mt-4 mb-2">9. Contact</h3>
      <p>
        Phone: 480-787-0039 | Email: info@therideconnect.com
      </p>
    </>
  );
  return (
    <div className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
  
        {/* 🔥 TRUST TEXT */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-gray-500 uppercase">
            Verified Business
          </p>
  
          <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-xl mx-auto leading-relaxed">
            Registered with Better Business Bureau & Authorized Distributor Network
          </p>
        </div>
  
        {/* 🔥 POLICY LINKS */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8">
  
          <button
            onClick={() => openPolicy("Privacy Policy", privacyContent)}
            className="hover:text-white transition duration-200"
          >
            Privacy Policy
          </button>
  
          <span className="hidden sm:block text-gray-600">|</span>
  
          <button
            onClick={() => openPolicy("Return & Refund Policy", refundContent)}
            className="hover:text-white transition duration-200"
          >
            Return & Refund
          </button>
  
          <span className="hidden sm:block text-gray-600">|</span>
  
          <button
            onClick={() => openPolicy("Shipping Policy", shippingContent)}
            className="hover:text-white transition duration-200"
          >
            Shipping Policy
          </button>
  
          <span className="hidden sm:block text-gray-600">|</span>
  
          <button
            onClick={() => openPolicy("Terms of Service", termsContent)}
            className="hover:text-white transition duration-200"
          >
            Terms of Service
          </button>
  
        </div>
  
        {/* 🔥 DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5 sm:mb-6" />
  
        {/* 🔥 COPYRIGHT */}
        <p className="text-center text-[11px] sm:text-xs text-gray-500 flex flex-wrap justify-center items-center gap-1">
          <AiOutlineCopyright />
          {new Date().getFullYear()} TRC Shop — All Rights Reserved
        </p>
  
        {/* 🔥 ADDRESS */}
        <p className="text-center text-[11px] sm:text-xs text-gray-500 mt-2 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 leading-relaxed">
          <span>
            2041 W Marconi Ave, Phoenix AZ 85023
          </span>
          <span className="hidden sm:inline">—</span>
          <span className="flex items-center gap-1">
            RIDECONNECT LLC <AiOutlineTrademarkCircle />
          </span>
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