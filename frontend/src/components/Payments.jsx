import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const Payments = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    orderId: `order_${Date.now()}`,
    customerName: "",
    customerEmail: "",
    customerPhone: "",
  });

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };
  const appId = import.meta.env.VITE_APP_ID;
  //payment
  const handlePayment = async (e) => {
    e.preventDefault();
    console.log("Payment function triggered"); // Check if this logs

    try {
      // Load Stripe and continue
      const stripe = await loadStripe(appId);
      console.log("Stripe loaded"); // Check if this logs

      // Prepare request
      const body = {
        details: paymentDetails,
      };
      const response = await fetch(
        "http://localhost:5000/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      console.log("Request sent"); // Check if this logs
      if (!response.ok) {
        console.error("Response not OK", response.status);
        throw new Error("Failed to create checkout session");
      }

      const session = await response.json();
      console.log("Session created:", session); // Check if this logs

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error("Stripe checkout error:", result.error.message);
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <form className="max-w-lg mx-auto bg-white mt-40 p-6 shadow-md rounded-md space-y-4">
      <h2 className="text-xl font-semibold text-center mb-4">Payment</h2>
      <p className="text-center">PAY MINIMUM 50 RUPEES</p>
      <input
        type="text"
        name="customerName"
        value={paymentDetails.customerName}
        onChange={handleChange}
        placeholder="Customer Name"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="email"
        name="customerEmail"
        value={paymentDetails.customerEmail}
        onChange={handleChange}
        placeholder="Customer Email"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="tel"
        name="customerPhone"
        value={paymentDetails.customerPhone}
        onChange={handleChange}
        placeholder="Customer Phone"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="number"
        name="amount"
        min={50}
        value={paymentDetails.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </form>
  );
};

export default Payments;
