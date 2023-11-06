import Navbar from "../components/Navbar";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service Card */}
          {[
            { title: "Free Shipping", description: "Enjoy free shipping on all orders over ₹500." },
            { title: "24/7 Customer Support", description: "Our customer support team is available 24/7 to help you with your queries." },
            { title: "Easy Returns", description: "Not satisfied with your purchase? Return it within 30 days for a full refund." },
            { title: "Secure Payments", description: "Your payments are secure with our top-of-the-line encryption methods." },
            { title: "Quality Guarantee", description: "All our products are guaranteed to be of the highest quality." },
            { title: "Fast Delivery", description: "Get your products delivered to your doorstep in as fast as 2 days." }
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicePage;
