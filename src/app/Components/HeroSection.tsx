import logo from "../../../public/logo.svg";
import brand1 from "../../../public/sentry-ecom-new.svg";
import brand2 from "../../../public/acexmedia-new.svg";
import brand3 from "../../../public/outreach-clerk-new.svg";
import brand4 from "../../../public/og-new.svg";
import brand5 from "../../../public/xlr-media-new.svg";
import Image from "next/image";
import backgroundblur from "../../../public/background blur.svg"

export default function EmailVerifier() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#09061A] to-[#111827] flex flex-col items-center px-4 "  >
       

      {/* Logo */}
      <div className="flex items-center gap-2 pt-8 self-start ml-8">
      <Image src={logo} alt="logo" />
      </div>

      {/* Main Content */}
      {/* <svg width="1120" height="831" viewBox="0 0 1280 831" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1002_637)">
            <ellipse cx="640" rx="570" ry="231" fill="#505CAD"/>
            </g>
            <defs>
            <filter id="filter0_f_1002_637" x="-530" y="-831" width="2340" height="1662" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_1002_637"/>
            </filter>
            </defs>
            
            </svg> */}
      <main className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full text-center mt-[107px] " >
        <h1 className="lg:text-7xl text-7xl font-semibold mb-4 bg-gradient-to-b from-gray-100 to-gray-400 text-transparent bg-clip-text">
          Email Checker
        </h1>
        <h1 className="lg:text-7xl text-6xl  font-semibold mb-8 bg-gradient-to-b from-gray-200 to-gray-500 text-transparent bg-clip-text">
         <span className="font-normal">and</span> Verifier
        </h1>
        
        <p className="text-gray-400 text-xl mb-12 max-w-2xl">
          Reduce bounce rate and improve your email marketing performance with our verifier.
        </p>

        {/* Email Input */}
        <div className="relative w-full max-w-2xl ">
          <div className="relative flex items-center w-full rounded-[25px]  bg-gray-800/100 p-1 backdrop-blur-xl shadow-[0_0_45px_-5px_rgba(59,130,246,0.1)]">
            <input 
              type="email"
              placeholder="Enter an email to verify"
              className="flex-1 pl-7 bg-transparent border-0 text-gray-200 placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-6"
            />
            <button 
              
              className="bg-gradient-3 py-4  rounded-[15px] text-[17px] lg:text-[19px] hover:bg-blue-700 text-white  lg:px-10 px-5 mr-1"
            >
              Verify
            </button>
          </div>
        </div>
      </main>

      <div className="p-8 flex justify-center items-center flex-col mt-10 w-full">
        <h4 className="lg:text-[20px] text-[14px] md:text-[15px]  text-gray-300 mb-[19px] p-5">
          Modern companies are using <span className="font-semibold"> verifier</span>
        </h4>
        <div className="flex flex-wrap justify-evenly  items-center w-full  gap-8 md:gap-6 lg:gap-8">
          <Image src={brand1} alt="brand1" className="h-auto lg:h-[40px] w-auto" />
          <Image src={brand2} alt="brand2" className="h-auto lg:h-[40px] w-auto" />
          <Image src={brand3} alt="brand3" className="h-auto lg:h-[40px] w-auto" />
          <Image src={brand4} alt="brand4" className="h-auto lg:h-[40px] w-auto" />
          <Image src={brand5} alt="brand5" className="h-auto lg:h-[40px] w-auto" />
        </div>
      </div>
    </div>
  )
}


