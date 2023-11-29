import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { useDispatch } from "react-redux";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    region: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Validate fields as needed

    // Simulate a successful payment
    setTimeout(() => {
      dispatch(resetCart());
      // Handle success
      alert("Your Order has been placed!");
      // Redirect to home screen
      navigate("/");
    }, 1000);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>Payment gateway only applicable for Production build.</p>

        {/* Payment form */}
        <form onSubmit={handlePaymentSubmit}>
          {/* User contact info */}
          <h1 style={{ fontSize: '2rem', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>CONTACT INFORMATION</h1>
          {/* Email Address */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              value={paymentDetails.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          {/* First Name and Last Name */}
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={paymentDetails.firstName}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={paymentDetails.lastName}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
          </div>

          {/* Shipping Address */}

          <h1 style={{ fontSize: '2rem', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>SHIPPING ADDRESS</h1>
          <div className="flex">
            <div className="w-1/2 pl-2 mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="123 Main St"
                value={paymentDetails.address}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="w-1/2 pl-2 mb-4">
              <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                Apartment
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                placeholder="Apt 42"
                value={paymentDetails.apartment}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pl-2 mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="United States"
                value={paymentDetails.country}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="w-1/2 pl-2 mb-4">
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                Region
              </label>
              <input
                type="text"
                id="region"
                name="region"
                placeholder="North"
                value={paymentDetails.region}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pl-2 mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="New York"
                value={paymentDetails.city}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="w-1/2 pl-2 mb-4">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="NY"
                value={paymentDetails.state}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pl-2 mb-4">
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="10001"
                value={paymentDetails.zipCode}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="w-1/2 pl-2 mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="555-555-5555"
                value={paymentDetails.phone}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
          </div>
          {/* ... (other fields) */}

          {/* Payment Details */}

          <h1 style={{ fontSize: '2rem', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>PAYMENT DETAILS</h1>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  maxLength="16"
                  required
                />
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <div className="mb-4">
                <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="MM/YY"
                  value={paymentDetails.expirationDate}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  maxLength="5"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              maxLength="3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300"
          >
            Buy Now
          </button>
        </form>

        {/* Explore More button */}
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
