import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import {
  FaGoogle,
  FaApple,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/images/rideconnect2.png";
import PolicyModal from "../../components/home/Footer/PolicyModal";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  //////////////////////////////////////////////////////
  // INPUTS
  //////////////////////////////////////////////////////
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  //////////////////////////////////////////////////////
  // SIGN IN
  //////////////////////////////////////////////////////
  const handleSignIn = (e) => {
    e.preventDefault();

    let valid = true;

    if (!email) {
      setErrEmail("Please enter your email");
      valid = false;
    }

    if (!password) {
      setErrPassword("Please enter your password");
      valid = false;
    }

    if (valid) {
      setSuccessMsg(
        `Welcome back. Your account has been verified successfully.`
      );

      setEmail("");
      setPassword("");
    }
  };

  //////////////////////////////////////////////////////
  // POLICY MODAL
  //////////////////////////////////////////////////////
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

  //////////////////////////////////////////////////////
  // POLICIES
  //////////////////////////////////////////////////////
  const privacyContent = (
    <>
      <h3 className="font-semibold mb-2">Privacy Policy</h3>
      <p>
        We collect personal information to improve your shopping experience,
        process orders securely, and provide customer support.
      </p>
    </>
  );

  const refundContent = (
    <>
      <h3 className="font-semibold mb-2">Refund Policy</h3>
      <p>
        Returns are accepted within 7 days for unused products in original
        packaging.
      </p>
    </>
  );

  const shippingContent = (
    <>
      <h3 className="font-semibold mb-2">Shipping Policy</h3>
      <p>
        Orders are processed within 1–3 business days with tracking provided.
      </p>
    </>
  );

  const termsContent = (
    <>
      <h3 className="font-semibold mb-2">Terms of Service</h3>
      <p>
        By using this website, you agree to our terms, policies, and conditions.
      </p>
    </>
  );

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex overflow-hidden">
      {/* ========================================= */}
      {/* LEFT PREMIUM PANEL */}
      {/* ========================================= */}
      <div className="hidden lg:flex w-1/2 relative border-r border-white/10 overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-white/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full" />

        <div className="relative z-10 flex flex-col justify-between p-14 w-full">
          {/* TOP */}
          <div>
            <Link to="/">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={logo}
                alt="logo"
                className="w-36 object-contain"
              />
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <p className="uppercase tracking-[0.3em] text-gray-500 text-sm">
                Premium Experience
              </p>

              <h1 className="text-5xl font-bold leading-tight mt-4">
                Welcome
                <br />
                Back.
              </h1>

              <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
                Access your account to manage orders, wishlist, premium
                products, and enjoy a seamless luxury shopping experience.
              </p>
            </motion.div>

            {/* FEATURES */}
            <div className="mt-14 space-y-5">
              {[
                "Secure checkout & encrypted payments",
                "Fast shipping with live tracking",
                "Premium products from trusted brands",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <BsCheckCircleFill className="text-green-400 text-sm" />
                  </div>

                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <button
              onClick={() =>
                openPolicy("Privacy Policy", privacyContent)
              }
              className="hover:text-white transition"
            >
              Privacy
            </button>

            <span>|</span>

            <button
              onClick={() =>
                openPolicy("Refund Policy", refundContent)
              }
              className="hover:text-white transition"
            >
              Refunds
            </button>

            <span>|</span>

            <button
              onClick={() =>
                openPolicy("Shipping Policy", shippingContent)
              }
              className="hover:text-white transition"
            >
              Shipping
            </button>

            <span>|</span>

            <button
              onClick={() =>
                openPolicy("Terms", termsContent)
              }
              className="hover:text-white transition"
            >
              Terms
            </button>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* RIGHT FORM */}
      {/* ========================================= */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 py-10 relative">
        {/* MOBILE LOGO */}
        <Link to="/" className="lg:hidden absolute top-6 left-6">
          <img src={logo} alt="logo" className="w-28" />
        </Link>

        {/* GLOW */}
        <div className="absolute w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-md"
        >
          {successMsg ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-2xl text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                <BsCheckCircleFill className="text-green-400 text-4xl" />
              </div>

              <h2 className="text-3xl font-semibold">
                Signed In
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {successMsg}
              </p>

              <Link to="/">
                <button className="w-full mt-8 h-14 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition">
                  Continue Shopping
                </button>
              </Link>
            </motion.div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-7 sm:p-10 backdrop-blur-2xl shadow-2xl">
              {/* HEADER */}
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Account Access
                </p>

                <h2 className="text-4xl font-bold mt-3">
                  Sign In
                </h2>

                <p className="text-gray-400 mt-3">
                  Enter your credentials to continue.
                </p>
              </div>

              {/* SOCIAL */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  className="h-14 rounded-2xl border border-white/10 bg-black/40
                  hover:bg-white hover:text-black transition duration-300
                  flex items-center justify-center gap-3"
                >
                  <FaGoogle />
                  Google
                </button>

                <button
                  className="h-14 rounded-2xl border border-white/10 bg-black/40
                  hover:bg-white hover:text-black transition duration-300
                  flex items-center justify-center gap-3"
                >
                  <FaApple />
                  Apple
                </button>
              </div>

              {/* DIVIDER */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-[1px] bg-white/10" />

                <span className="text-xs text-gray-500">
                  OR CONTINUE WITH EMAIL
                </span>

                <div className="flex-1 h-[1px] bg-white/10" />
              </div>

              {/* FORM */}
              <form onSubmit={handleSignIn} className="space-y-5">
                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    placeholder="you@example.com"
                    className="w-full h-14 px-5 rounded-2xl bg-black/40 border border-white/10
                    outline-none focus:border-white/30 transition"
                  />

                  {errEmail && (
                    <p className="text-red-500 text-sm mt-2">
                      {errEmail}
                    </p>
                  )}
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-sm text-gray-500 hover:text-white transition"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePassword}
                      placeholder="••••••••"
                      className="w-full h-14 px-5 pr-14 rounded-2xl bg-black/40 border border-white/10
                      outline-none focus:border-white/30 transition"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                    >
                      {showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>
                  </div>

                  {errPassword && (
                    <p className="text-red-500 text-sm mt-2">
                      {errPassword}
                    </p>
                  )}
                </div>

                {/* REMEMBER */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-400">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <span className="text-green-400">
                    Secure Login
                  </span>
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-white text-black font-semibold text-lg
                  hover:bg-gray-200 transition duration-300 mt-2"
                >
                  Sign In
                </motion.button>
              </form>

              {/* FOOTER */}
              <p className="text-center text-gray-400 text-sm mt-8">
                Don’t have an account?{" "}
                <Link to="/signup">
                  <span className="text-white hover:underline">
                    Create Account
                  </span>
                </Link>
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* MODAL */}
      <PolicyModal
        isOpen={modal.open}
        onClose={closePolicy}
        title={modal.title}
        content={modal.content}
      />
    </div>
  );
};

export default SignIn;