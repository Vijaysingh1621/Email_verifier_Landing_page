'use client';
import MessageIcon from "../../../public/messageIcon.svg"
import Image from "next/image";

import { Shield, X } from 'lucide-react';

type OnboardingModalProps = {
  onClose: () => void; // Explicitly define the type of onClose
};

export default function OnboardingModal({ onClose }: OnboardingModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm ">
      <div className="relative w-full max-w-2xl text-white shadow-2xl rounded-3xl overflow-hidden  bg-gradient-to-br from-[#282345] to-[#293757]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white p-2 rounded-full focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              One last step!
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Make sure to sign up before you get your result. We promise it won&apos;t take long.
            </p>
            <button className="px-8 py-3 text-lg font-medium text-white bg-gradient-1 rounded-[15px] hover:bg-gradient-2 transition-colors duration-200 shadow-lg shadow-blue-500/20">
            Take me in!
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
           
              <Image src={MessageIcon} alt="message" className="w-46 h-46 text-emerald-400" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
