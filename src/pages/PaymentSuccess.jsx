import React from "react";
import Navbar from "../components/Navbar";

const PaymentSuccess = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p>Your payment was successful.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
