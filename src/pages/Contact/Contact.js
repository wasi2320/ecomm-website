import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const prevLocation = location.state?.data || "Home";

  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");

  const [showToast, setShowToast] = useState(false);

  const EmailValidation = (email) =>
    String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const handlePost = (e) => {
    e.preventDefault();

    let valid = true;

    if (!clientName) {
      setErrClientName("Enter your Name");
      valid = false;
    }

    if (!email) {
      setErrEmail("Enter your Email");
      valid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a Valid Email");
      valid = false;
    }

    if (!messages) {
      setErrMessages("Enter your Message");
      valid = false;
    }

    if (valid) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      setclientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs title="Contact" prevLocation={prevLocation} />

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-[#151515] border border-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

          <form onSubmit={handlePost} className="flex flex-col gap-6">

            {/* FLOATING INPUT */}
            <FloatingInput
              label="Your Name"
              value={clientName}
              setValue={setclientName}
              error={errClientName}
            />

            <FloatingInput
              label="Email Address"
              value={email}
              setValue={setEmail}
              error={errEmail}
            />

            <FloatingTextarea
              label="Your Message"
              value={messages}
              setValue={setMessages}
              error={errMessages}
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 text-black py-3 rounded-md font-semibold shadow-md hover:bg-yellow-500 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-6 right-6 bg-[#1a1a1a] px-6 py-4 rounded-lg shadow-xl border border-gray-700 flex gap-3"
          >
            <div className="bg-green-500 w-6 h-6 flex items-center justify-center rounded-full">
              ✓
            </div>
            <div>
              <p className="font-semibold">Message Sent</p>
              <p className="text-sm text-gray-400">
                We'll contact you soon
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;





/* ================= COMPONENTS ================= */

const FloatingInput = ({ label, value, setValue, error }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full bg-transparent border border-gray-700 rounded-md px-3 pt-5 pb-2 focus:border-yellow-400 outline-none"
      />

      <label className="absolute left-3 top-2 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400">
        {label}
      </label>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

const FloatingTextarea = ({ label, value, setValue, error }) => {
  return (
    <div className="relative">
      <textarea
        rows="4"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full bg-transparent border border-gray-700 rounded-md px-3 pt-5 pb-2 focus:border-yellow-400 outline-none resize-none"
      />

      <label className="absolute left-3 top-2 text-sm text-gray-400 transition-all peer-focus:text-yellow-400">
        {label}
      </label>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};