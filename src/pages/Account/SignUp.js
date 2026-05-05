import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/images/RTC.png";
import PolicyModal from "../../components/home/Footer/PolicyModal";

const SignUp = () => {

  // STATES (same logic)
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  // MODAL
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

  // EMAIL VALIDATION
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  // SUBMIT
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!checked) return;

    if (!clientName) setErrClientName("Enter your name");
    if (!email) setErrEmail("Enter your email");
    else if (!EmailValidation(email)) setErrEmail("Enter valid email");

    if (!phone) setErrPhone("Enter phone number");

    if (!password) setErrPassword("Create password");
    else if (password.length < 6)
      setErrPassword("Minimum 6 characters");

    if (!address) setErrAddress("Enter address");
    if (!city) setErrCity("Enter city");
    if (!country) setErrCountry("Enter country");
    if (!zip) setErrZip("Enter zip");

    if (
      clientName &&
      email &&
      EmailValidation(email) &&
      password.length >= 6 &&
      address &&
      city &&
      country &&
      zip
    ) {
      setSuccessMsg(`Welcome ${clientName}, your account request is submitted.`);
    }
  };

  // POLICY CONTENT (SHORT VERSION FOR MODAL)
  const privacyContent = (
    <p>
      We collect necessary personal data to process orders, improve services,
      and ensure secure transactions. Your data is never sold and is protected
      with industry-standard security.
    </p>
  );

  const termsContent = (
    <p>
      By using our platform, you agree to our policies regarding purchases,
      payments, and usage. We reserve the right to update terms when necessary.
    </p>
  );

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] text-white flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 p-12 flex-col justify-between border-r border-white/10">

        <div>
          <img src={logo} className="w-32 mb-10" />

          <h1 className="text-3xl font-semibold leading-snug">
            Build your account with confidence
          </h1>

          {/* 🔥 TRUST DESCRIPTION */}
          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-md">
            We are a growing ecommerce platform with over 3 years of experience
            delivering quality products and reliable service. Our focus is on
            trust, transparency, and long-term customer relationships. Every
            order is handled with care — from secure checkout to fast delivery —
            ensuring a smooth and dependable shopping experience.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-5">
            {[
              "Secure checkout & encrypted payments",
              "Fast and reliable order fulfillment",
              "Trusted by thousands of customers",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <BsCheckCircleFill className="text-green-500 mt-1" />
                <p className="text-sm text-gray-400">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* POLICY LINKS */}
        <div className="flex gap-6 text-xs text-gray-500 flex-wrap">
          <button onClick={() => openPolicy("Terms", termsContent)} className="hover:text-white">
            Terms
          </button>
          <button onClick={() => openPolicy("Privacy", privacyContent)} className="hover:text-white">
            Privacy
          </button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4">

        {successMsg ? (
          <div className="max-w-md text-center">
            <p className="text-green-500">{successMsg}</p>
          </div>
        ) : (
          <form className="w-full max-w-md space-y-4">

            <h2 className="text-2xl font-semibold mb-4">
              Create Account
            </h2>

            {/* INPUT */}
            <Input label="Full Name" value={clientName} onChange={setClientName} err={errClientName} />
            <Input label="Email" value={email} onChange={setEmail} err={errEmail} />
            <Input label="Phone" value={phone} onChange={setPhone} err={errPhone} />
            <Input label="Password" value={password} onChange={setPassword} err={errPassword} type="password" />
            <Input label="Address" value={address} onChange={setAddress} err={errAddress} />
            <Input label="City" value={city} onChange={setCity} err={errCity} />
            <Input label="Country" value={country} onChange={setCountry} err={errCountry} />
            <Input label="Zip Code" value={zip} onChange={setZip} err={errZip} />

            {/* CHECKBOX */}
            <div className="flex gap-2 text-sm text-gray-400">
              <input type="checkbox" onChange={() => setChecked(!checked)} />
              <p>
                I agree to{" "}
                <span onClick={() => openPolicy("Terms", termsContent)} className="text-white cursor-pointer underline">
                  Terms
                </span>{" "}
                and{" "}
                <span onClick={() => openPolicy("Privacy", privacyContent)} className="text-white cursor-pointer underline">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSignUp}
              className={`w-full py-3 rounded-md transition ${
                checked
                  ? "bg-white text-black hover:opacity-90"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/signin" className="text-white hover:underline">
                Sign in
              </Link>
            </p>

          </form>
        )}

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

export default SignUp;

////////////////////////////////////////////////////
// 🔥 INPUT COMPONENT
////////////////////////////////////////////////////
const Input = ({ label, value, onChange, err, type = "text" }) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      className="w-full px-4 py-3 bg-black border border-white/10 rounded-md text-sm outline-none focus:border-white/30"
    />
    {err && <p className="text-xs text-red-500 mt-1">{err}</p>}
  </div>
);