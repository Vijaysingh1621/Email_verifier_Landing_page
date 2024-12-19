'use client';

import { useState } from "react";
import logo from "../../../public/logo.svg";
import brand1 from "../../../public/sentry-ecom-new.svg";
import brand2 from "../../../public/acexmedia-new.svg";
import brand3 from "../../../public/outreach-clerk-new.svg";
import brand4 from "../../../public/og-new.svg";
import brand5 from "../../../public/xlr-media-new.svg";
import Image from "next/image";
import OnboardingModal from "../Components/BoardingModal";

export default function EmailVerifier() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true); // Show the loading slider
    setTimeout(() => {
      setIsLoading(false); // Hide the loading slider
      setIsModalOpen(true); // Open the modal
    }, 3000); // Simulate a 3-second loading time
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#09061A] to-[#111827] flex flex-col items-center px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 pt-8 self-start ml-8">
        <Image src={logo} alt="logo" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full text-center mt-[107px]">
        <h1 className="lg:text-7xl text-7xl font-semibold mb-4 bg-gradient-to-b from-gray-100 to-gray-400 text-transparent bg-clip-text">
          Email Checker
        </h1>
        <h1 className="lg:text-7xl text-6xl font-semibold mb-8 bg-gradient-to-b from-gray-200 to-gray-500 text-transparent bg-clip-text">
          <span className="font-normal">and</span> Verifier
        </h1>

        <p className="text-gray-400 text-xl mb-12 max-w-2xl">
          Reduce bounce rate and improve your email marketing performance with our verifier.
        </p>

        {/* Email Input */}
        <div className="relative w-full max-w-2xl">
          <div className="relative flex items-center w-full rounded-[25px] bg-gray-800/100 p-1 backdrop-blur-xl shadow-[0_0_45px_-5px_rgba(59,130,246,0.1)]">
            <input
              type="email"
              placeholder="Enter an email to verify"
              className="flex-1 pl-7 bg-transparent border-0 text-gray-200 placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-6 focus:outline-none"
            />
            <button
              onClick={handleVerify}
              className="bg-gradient-3 py-4 rounded-[15px] text-[17px] lg:text-[19px] hover:bg-blue-700 text-white lg:px-10 px-5 mr-1"
            >
              Verify
            </button>
          </div>
        </div>
      </main>

      {/* Brands Section */}
      <div className="p-8 flex justify-center items-center flex-col mt-10 w-full">
        <h4 className="lg:text-[20px] text-[14px] md:text-[15px] text-gray-300 mb-[19px] p-5">
          Modern companies are using <span className="font-semibold">verifier</span>
        </h4>
        <div className="flex flex-wrap justify-evenly items-center w-full gap-8 md:gap-6 lg:gap-8">
          <Image src={brand1} alt="brand1" className="h-auto lg:h-[40px] w-auto" />
          <Image src={brand2} alt="brand2" className="h-auto lg:h-[40px] w-auto" />
          <Image src={brand3} alt="brand3" className="h-auto lg:h-[40px] w-auto" />
          <Image src={brand4} alt="brand4" className="h-auto lg:h-[40px] w-auto" />
          <Image src={brand5} alt="brand5" className="h-auto lg:h-[40px] w-auto" />
        </div>
      </div>

      {/* Loading Slider */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center flex-col gap-5 justify-center bg-black/50 backdrop-blur-sm">
            <h4 className="">verifying your email in real time...</h4>
          <div className="w-48 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 animate-pulse rounded-full"></div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && <OnboardingModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
