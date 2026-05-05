import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/images/RTC.png";
import PolicyModal from "../../components/home/Footer/PolicyModal";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) setErrEmail("Enter your email");
    if (!password) setErrPassword("Enter your password");

    if (email && password) {
      setSuccessMsg(
        `Welcome back. We’re verifying your access and will contact you at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };
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
    <div className="w-full min-h-screen bg-[#0f0f0f] text-white flex flex-col lg:flex-row">

      {/* 🔥 LEFT SIDE (HIDDEN ON MOBILE) */}
      <div className="hidden lg:flex w-1/2 p-12 flex-col justify-between border-r border-white/10">

        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-32 mb-10" />
          </Link>

          <h1 className="text-3xl font-semibold leading-snug">
            Welcome back
          </h1>
          <p className="text-gray-400 mt-2">
            Sign in to access your account and continue shopping.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-6">

            {[
              "Fast checkout experience",
              "Track your orders easily",
              "Trusted by thousands of customers",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <BsCheckCircleFill className="text-green-500 mt-1" />
                <p className="text-sm text-gray-400">{text}</p>
              </div>
            ))}

          </div>
        </div>

      
        <div className="flex gap-6 text-xs text-gray-500">
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
        <PolicyModal
        isOpen={modal.open}
        onClose={closePolicy}
        title={modal.title}
        content={modal.content}
      />
        </div>
      </div>

      {/* 🔥 RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6">

        {successMsg ? (
          <div className="w-full max-w-md text-center space-y-6">
            <p className="text-green-500 text-sm">{successMsg}</p>

            <Link to="/signup">
              <button className="w-full py-3 bg-white text-black font-medium hover:opacity-90 transition rounded-md">
                Go to Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full max-w-md space-y-6">

            <h2 className="text-2xl sm:text-3xl font-semibold">
              Sign In
            </h2>

            {/* EMAIL */}
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Email</label>
              <input
                onChange={handleEmail}
                value={email}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-md 
                text-sm outline-none focus:border-white/30 transition"
              />
              {errEmail && (
                <p className="text-xs text-red-500">{errEmail}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Password</label>
              <input
                onChange={handlePassword}
                value={password}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-md 
                text-sm outline-none focus:border-white/30 transition"
              />
              {errPassword && (
                <p className="text-xs text-red-500">{errPassword}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSignUp}
              className="w-full py-3 bg-white text-black font-medium 
              hover:opacity-90 transition rounded-md"
            >
              Sign In
            </button>

            {/* SIGNUP */}
            <p className="text-sm text-center text-gray-400">
              Don’t have an account?{" "}
              <Link to="/signup">
                <span className="text-white hover:underline">
                  Sign up
                </span>
              </Link>
            </p>

          </form>
        )}

      </div>
    </div>
  );
};

export default SignIn;