import React from "react";
import Navbar from "../components/Navbar";

const Terms = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our Art Gallery website! By using our website, you agree to
          comply with and be bound by the following terms and conditions of use.
        </p>
        <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By accessing or using this website in any manner, you agree to these
          Terms of Service.
        </p>
        <h2 className="text-lg font-semibold mb-2">2. User Accounts</h2>
        <p className="text-gray-700 mb-4">
          To access certain features of the website, you may be required to
          create a user account. You are responsible for maintaining the
          confidentiality of your account credentials.
        </p>
        <h2 className="text-lg font-semibold mb-2">3. User Content</h2>
        <p className="text-gray-700 mb-4">
          Users may post, upload, and/or contribute (“post”) content to the
          website. You are solely responsible for the content you post.
        </p>
        <h2 className="text-lg font-semibold mb-2">4. Prohibited Activities</h2>
        <p className="text-gray-700 mb-4">
          You agree not to engage in any of the following prohibited activities:
          (a) copying, distributing, or disclosing any part of the website in
          any medium, including without limitation by any automated or
          non-automated “scraping”;
        </p>
        {/* Add more terms and conditions content here */}
      </div>
    </div>
  );
};

export default Terms;
