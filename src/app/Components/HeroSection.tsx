import logo from "../../../public/logo.svg";

import Image from "next/image";

export default function EmailVerifier() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#09061A] to-[#111827] flex flex-col items-center px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 pt-8 self-start ml-8">
      <Image src={logo} alt="logo" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full text-center mt-[-100px]">
        <h1 className="text-6xl font-semibold mb-4 bg-gradient-to-b from-gray-100 to-gray-400 text-transparent bg-clip-text">
          Email Checker
        </h1>
        <h1 className="text-6xl font-semibold mb-8 bg-gradient-to-b from-gray-200 to-gray-500 text-transparent bg-clip-text">
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
              
              className="bg-blue-600 py-4 rounded-[15px] text-[19px] hover:bg-blue-700 text-white  px-8 mr-1"
            >
              Verify
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}


