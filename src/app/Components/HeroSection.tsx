'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import brand1 from "../../../public/sentry-ecom-new.svg";
import brand2 from "../../../public/acexmedia-new.svg";
import brand3 from "../../../public/outreach-clerk-new.svg";
import brand4 from "../../../public/og-new.svg";
import brand5 from "../../../public/xlr-media-new.svg";
import OnboardingModal from "../Components/BoardingModal";

export default function EmailVerifier() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [progress, setProgress] = useState(50); // Default slider value

  const handleVerify = () => {
    setIsVerifying(true);
    setProgress(0); // Reset slider

    // Simulate progress bar filling up
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval); // Stop progress once it reaches 100%
          setTimeout(() => {
            setIsVerifying(false); // Hide slider
            setIsModalOpen(true); // Show modal
          }, 500); // Small delay for better UX
          return prev;
        }
        return prev + 10; // Increment slider
      });
    }, 300); // Progress update interval
  };

  return (
    <div className="min-h-screen bg-gradient-radial-1 flex flex-col items-center px-4 ">
      {/* Logo */}
      <div className="flex items-center gap-2 pt-8 self-start ml-8">
        <Image src={logo} alt="logo" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full text-center mt-[107px]">
        <h1 className="lg:text-7xl text-5xl font-semibold mb-4 bg-gradient-to-b from-gray-100 to-gray-400 text-transparent bg-clip-text">
          Email Checker
        </h1>
        <h1 className="lg:text-7xl text-5xl font-semibold mb-8 bg-gradient-to-b from-gray-200 to-gray-500 text-transparent bg-clip-text">
          <span className="font-normal">and</span> Verifier
        </h1>

        <p className="text-gray-400 text-xl mb-12 max-w-2xl">
          Reduce bounce rate and improve your email marketing performance with our verifier.
        </p>

        {/* Email Input or Slider */}
        <div className="relative w-full max-w-2xl">
          {isVerifying ? (
            <div className="w-full ">
              <h4 className="text-gray-200 text-center mb-4 overflow-x-hidden">
                Verifying your email in real-time...
              </h4>
              {/* Custom Slider */}
              <div className="relative lg:w-[350px] w-full lg:ml-[160px] lg: w-full max-w-full h-3 bg-gray-800/50 rounded-full overflow-x-hidden">
                <div
                  className="absolute h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full overflow-x-hidden"
                  style={{ width: `${progress}%` }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="absolute w-full h-2 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <div className="relative flex items-center w-full rounded-[25px] bg-gray-800/100 p-1 backdrop-blur-xl shadow-[0_0_45px_-5px_rgba(59,130,246,0.1)] bg-gradient-to-br from-[#404B7A]/50 to-gray-900/60 bg-transparent bg-opacity-20 ring-1 ">
              <input
                type="email"
                placeholder="Enter an email to verify"
                className="flex-1 pl-7 bg-transparent border-0 text-gray-200 placeholder:text-gray-300 focus-visible:ring-0 focus-visible:rounded-[25px] focus-visible:ring-offset-0 text-lg py-6 focus:outline-none"
              />
              <button
                onClick={handleVerify}
                className="bg-gradient-3 py-4 rounded-[15px] text-[17px] lg:text-[19px] hover:bg-blue-700 text-white lg:px-10 px-5 ml-[-80px] mr-1"
              >
                Verify
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Brands Section */}
      <div className="p-8 flex justify-center items-center flex-col mt-10 w-full lg:mb-[200px]">
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

      {/* Modal */}
      {isModalOpen && <OnboardingModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
