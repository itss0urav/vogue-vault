import Navbar from "../components/Navbar";
import React from "react";

const TosPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Terms of Service
        </h1>
        <div className="prose lg:prose-xl">
          <h2 className="font-bold mb-3">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Vogue Vault. These are the terms and conditions governing
            your access to and use of the website Vogue Vault and its related
            sub-domains, sites, services and tools.
          </p>

          <h2 className="font-bold mb-3">2. Membership Eligibility</h2>
          <p className="mb-4">
            Use of the Vogue Vault website is available only to persons who can
            form legally binding contracts under applicable law.
          </p>

          <h2 className="font-bold mb-3">
            3. Your Account and Registration Obligations
          </h2>
          <p className="mb-4">
            If you use Vogue Vault, you are responsible for maintaining the
            confidentiality of your account and password and for restricting
            access to your computer, and you agree to accept responsibility for
            all activities that occur under your account or password.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </>
  );
};

export default TosPage;
