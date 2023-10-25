import React from "react";
import Navbar from "../components/Navbar";
const ServicePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Create an Account and Share Your Art
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Welcome to our art gallery community! We're excited to have you
            share your artwork with us. Follow these steps to get started:
          </p>

          {/* Step 1 */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Step 1: Create an Account
            </h2>
            <p className="mt-2 text-gray-600">
              Click on the "Sign Up" or "Create Account" button on the top right
              corner of our website.
            </p>
            <img
              src="/signup-screenshot.png"
              alt="Sign Up Screenshot"
              className="mt-4 rounded-lg shadow-md"
            />
          </div>

          {/* Step 2 */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Step 2: Fill Out Your Details
            </h2>
            <p className="mt-2 text-gray-600">
              Provide your username, email address, and a secure password. Click
              "Create Account."
            </p>
            <img
              src="/signup-form-screenshot.png"
              alt="Sign Up Form Screenshot"
              className="mt-4 rounded-lg shadow-md"
            />
          </div>

          {/* Step 3 */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Step 3: Verify Your Email
            </h2>
            <p className="mt-2 text-gray-600">
              Check your email inbox for a verification link and click on it to
              activate your account.
            </p>
            <img
              src="/email-verification-screenshot.png"
              alt="Email Verification Screenshot"
              className="mt-4 rounded-lg shadow-md"
            />
          </div>

          {/* Step 4 */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Step 4: Share Your Art
            </h2>
            <p className="mt-2 text-gray-600">
              Log in to your account, navigate to the "Upload Art" section, and
              follow the instructions to share your artwork with our community.
            </p>
            <img
              src="/upload-art-screenshot.png"
              alt="Upload Art Screenshot"
              className="mt-4 rounded-lg shadow-md"
            />
          </div>

          {/* Additional Info */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Additional Information
            </h2>
            <p className="mt-2 text-gray-600">
              If you encounter any issues or have questions, feel free to
              contact our support team at support@artgallery.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
