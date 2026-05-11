import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCcVisa,
  FaCcMastercard,
  FaLock,
  FaCheckCircle,
  FaCreditCard,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/orebiSlice";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  //////////////////////////////////////////////////////
  // CARD DETECTION
  //////////////////////////////////////////////////////
  const detectCardType = (number) => {
    const cleaned = number.replace(/\s/g, "");

    if (/^4/.test(cleaned)) return "visa";
    if (/^5[1-5]/.test(cleaned)) return "mastercard";

    return "";
  };

  const cardType = detectCardType(paymentDetails.cardNumber);

  //////////////////////////////////////////////////////
  // FORMATTERS
  //////////////////////////////////////////////////////
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").substring(0, 16);

    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .substring(0, 5);
  };

  //////////////////////////////////////////////////////
  // INPUT
  //////////////////////////////////////////////////////
  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (name === "cardNumber") {
      value = formatCardNumber(value);
    }

    if (name === "expirationDate") {
      value = formatExpiry(value);
    }

    if (name === "cvv") {
      value = value.replace(/\D/g, "").substring(0, 3);
    }

    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  //////////////////////////////////////////////////////
  // LUHN VALIDATION
  //////////////////////////////////////////////////////
  const validateCard = (number) => {
    const cleaned = number.replace(/\s/g, "");

    let sum = 0;
    let shouldDouble = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i));

      if (shouldDouble) {
        digit *= 2;

        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  //////////////////////////////////////////////////////
  // SUBMIT
  //////////////////////////////////////////////////////
  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!paymentDetails.email)
      newErrors.email = "Email is required";

    if (!paymentDetails.firstName)
      newErrors.firstName = "First name required";

    if (!paymentDetails.lastName)
      newErrors.lastName = "Last name required";

    if (!paymentDetails.address)
      newErrors.address = "Address required";

    if (!paymentDetails.city)
      newErrors.city = "City required";

    if (!paymentDetails.state)
      newErrors.state = "State required";

    if (!paymentDetails.zipCode)
      newErrors.zipCode = "ZIP required";

    if (!paymentDetails.phone)
      newErrors.phone = "Phone required";

    //////////////////////////////////////////////////////
    // CARD VALIDATION
    //////////////////////////////////////////////////////
    if (!paymentDetails.cardNumber) {
      newErrors.cardNumber = "Card number required";
    } else if (!validateCard(paymentDetails.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (!cardType) {
      newErrors.cardNumber = "Only Visa & Mastercard supported";
    }

    if (!paymentDetails.expirationDate) {
      newErrors.expirationDate = "Expiry required";
    }

    if (!paymentDetails.cvv || paymentDetails.cvv.length < 3) {
      newErrors.cvv = "Invalid CVV";
    }

    setErrors(newErrors);

    //////////////////////////////////////////////////////
    // SUCCESS
    //////////////////////////////////////////////////////
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        dispatch(resetCart());

        const orderId =
          "RTC-" + Math.floor(100000 + Math.random() * 900000);

        navigate("/order-success", {
          state: {
            orderId,
            customer: paymentDetails.firstName,
          },
        });
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-20">

        <Breadcrumbs title="Secure Checkout" />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:col-span-2"
          >
            <div
              className="
              relative
              bg-white/5
              border border-white/10
              rounded-[32px]
              p-6 sm:p-8
              backdrop-blur-2xl
              overflow-hidden
            "
            >

              {/* SHIMMER */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-[40%] top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-shimmer" />
              </div>

              {/* HEADER */}
              <div className="relative z-10 flex items-center justify-between mb-10">

                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                    Premium Checkout
                  </p>

                  <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                    Complete Your Order
                  </h1>

                  <p className="text-gray-400 mt-3 text-sm">
                    Secure SSL encrypted checkout experience
                  </p>
                </div>

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(34,197,94,0.2)",
                      "0 0 20px rgba(34,197,94,0.5)",
                      "0 0 0px rgba(34,197,94,0.2)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="
                    w-14 h-14 rounded-2xl
                    bg-green-500/10
                    border border-green-500/20
                    flex items-center justify-center
                  "
                >
                  <FaLock className="text-green-400 text-xl" />
                </motion.div>
              </div>

              {/* CREDIT CARD UI */}
              <motion.div
                whileHover={{ rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  relative
                  h-[240px]
                  rounded-[28px]
                  overflow-hidden
                  mb-10
                  border border-white/10
                  bg-gradient-to-br
                  from-[#1a1a1a]
                  via-[#101010]
                  to-black
                  p-7
                "
              >

                {/* GLOW */}
                <div
                  className={`
                    absolute inset-0 opacity-20 blur-3xl
                    ${
                      cardType === "visa"
                        ? "bg-blue-500"
                        : cardType === "mastercard"
                        ? "bg-orange-500"
                        : "bg-white"
                    }
                  `}
                />

                {/* CHIP */}
                <div className="relative z-10 w-14 h-10 rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-500 mb-8" />

                {/* CARD NUMBER */}
                <div className="relative z-10 text-2xl sm:text-3xl tracking-[0.2em] font-light">
                  {paymentDetails.cardNumber || "•••• •••• •••• ••••"}
                </div>

                {/* BOTTOM */}
                <div className="relative z-10 flex items-end justify-between mt-10">

                  <div>
                    <p className="text-gray-500 text-xs uppercase">
                      Card Holder
                    </p>

                    <h3 className="mt-1 text-lg">
                      {paymentDetails.firstName || "YOUR"}{" "}
                      {paymentDetails.lastName || "NAME"}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs uppercase">
                      Expires
                    </p>

                    <h3 className="mt-1 text-lg">
                      {paymentDetails.expirationDate || "MM/YY"}
                    </h3>
                  </div>

                  {/* CARD BRAND */}
                  <div className="text-5xl">
                    {cardType === "visa" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <FaCcVisa className="text-blue-500" />
                      </motion.div>
                    )}

                    {cardType === "mastercard" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <FaCcMastercard className="text-orange-500" />
                      </motion.div>
                    )}

                    {!cardType && (
                      <FaCreditCard className="text-gray-600" />
                    )}
                  </div>
                </div>
              </motion.div>

              {/* FORM */}
              <form onSubmit={handlePaymentSubmit} className="relative z-10">

                {/* CONTACT */}
                <SectionTitle title="Contact Information" />

                <div className="mb-8">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={paymentDetails.email}
                    onChange={handleInputChange}
                  />

                  <Error text={errors.email} />
                </div>

                {/* NAME */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={paymentDetails.firstName}
                      onChange={handleInputChange}
                    />

                    <Error text={errors.firstName} />
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={paymentDetails.lastName}
                      onChange={handleInputChange}
                    />

                    <Error text={errors.lastName} />
                  </div>
                </div>

                {/* ADDRESS */}
                <SectionTitle title="Shipping Address" />

                <div className="space-y-4 mb-8">

                  <div>
                    <Input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      value={paymentDetails.address}
                      onChange={handleInputChange}
                    />

                    <Error text={errors.address} />
                  </div>

                  <Input
                    type="text"
                    name="apartment"
                    placeholder="Apartment, suite, etc."
                    value={paymentDetails.apartment}
                    onChange={handleInputChange}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div>
                      <Input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={paymentDetails.city}
                        onChange={handleInputChange}
                      />

                      <Error text={errors.city} />
                    </div>

                    <div>
                      <Input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={paymentDetails.state}
                        onChange={handleInputChange}
                      />

                      <Error text={errors.state} />
                    </div>

                    <div>
                      <Input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP Code"
                        value={paymentDetails.zipCode}
                        onChange={handleInputChange}
                      />

                      <Error text={errors.zipCode} />
                    </div>

                  </div>

                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={paymentDetails.phone}
                      onChange={handleInputChange}
                    />

                    <Error text={errors.phone} />
                  </div>

                </div>

                {/* PAYMENT */}
                <SectionTitle title="Payment Details" />

                <div className="space-y-4">

                  <div className="relative">

                    <Input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentDetails.cardNumber}
                      onChange={handleInputChange}
                    />

                    {/* DETECTED CARD */}
                    <AnimatePresence>
                      {cardType && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            flex items-center gap-2
                          "
                        >
                          {cardType === "visa" ? (
                            <>
                              <FaCcVisa className="text-blue-500 text-3xl" />
                              <span className="text-xs text-blue-400">
                                VISA
                              </span>
                            </>
                          ) : (
                            <>
                              <FaCcMastercard className="text-orange-500 text-3xl" />
                              <span className="text-xs text-orange-400">
                                MASTERCARD
                              </span>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Error text={errors.cardNumber} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <Input
                        type="text"
                        name="expirationDate"
                        placeholder="MM/YY"
                        value={paymentDetails.expirationDate}
                        onChange={handleInputChange}
                      />

                      <Error text={errors.expirationDate} />
                    </div>

                    <div>
                      <Input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={paymentDetails.cvv}
                        onChange={handleInputChange}
                      />

                      <Error text={errors.cvv} />
                    </div>

                  </div>

                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0px 0px 30px rgba(255,255,255,0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className="
                    relative
                    overflow-hidden
                    w-full
                    h-16
                    rounded-2xl
                    bg-white
                    text-black
                    font-semibold
                    text-lg
                    mt-10
                  "
                >

                  {/* SHIMMER */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -left-[120%] top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 animate-shimmer" />
                  </div>

                  <span className="relative z-10">
                    {loading
                      ? "Processing Payment..."
                      : "Complete Secure Order"}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <div
              className="
              sticky top-10
              bg-white/5
              border border-white/10
              rounded-[32px]
              p-6
              backdrop-blur-2xl
            "
            >

              <h2 className="text-2xl font-semibold mb-8">
                Order Summary
              </h2>

              {/* ITEMS */}
              <div className="space-y-5">

                <SummaryRow label="Subtotal" value="$249.00" />
                <SummaryRow label="Shipping" value="Free" />
                <SummaryRow label="Tax" value="$18.00" />

                <div className="border-t border-white/10 pt-5">
                  <SummaryRow
                    label="Total"
                    value="$267.00"
                    bold
                  />
                </div>
              </div>

              {/* SECURITY */}
              <motion.div
                animate={{
                  borderColor: [
                    "rgba(34,197,94,0.2)",
                    "rgba(34,197,94,0.5)",
                    "rgba(34,197,94,0.2)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="
                  mt-8
                  rounded-2xl
                  border
                  bg-green-500/10
                  p-5
                  flex items-start gap-4
                "
              >
                <FaCheckCircle className="text-green-400 text-2xl mt-1" />

                <div>
                  <h3 className="font-semibold text-white">
                    Payment Protected
                  </h3>

                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    Your payment information is encrypted and
                    securely processed.
                  </p>
                </div>
              </motion.div>

              {/* SHOPPING BTN */}
              <Link to="/">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border border-white/10
                    mt-6
                    transition
                  "
                >
                  Continue Shopping
                </motion.button>
              </Link>

            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

//////////////////////////////////////////////////////
// COMPONENTS
//////////////////////////////////////////////////////

const SectionTitle = ({ title }) => (
  <h2 className="text-xl font-semibold mb-5 mt-10">
    {title}
  </h2>
);

const Input = ({ ...props }) => (
  <input
    {...props}
    className="
      w-full
      h-14
      rounded-2xl
      bg-black/40
      border border-white/10
      px-5
      outline-none
      transition
      focus:border-white/30
      focus:bg-black/60
    "
  />
);

const Error = ({ text }) =>
  text ? (
    <p className="text-red-500 text-sm mt-2">
      {text}
    </p>
  ) : null;

const SummaryRow = ({ label, value, bold }) => (
  <div
    className={`flex justify-between ${
      bold ? "text-lg font-semibold text-white" : "text-gray-300"
    }`}
  >
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default Payment;