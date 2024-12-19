import { Check } from 'lucide-react'
import logo from "../../../public/logo.svg";
import Image from 'next/image';

export default function VerifierFooter() {
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-7xl font-medium mb-2">
          <span className="bg-gradient-to-b from-gray-100 to-gray-300 text-transparent bg-clip-text">
            TrySee Verifier
          </span>
        </h1>
        <h2 className="text-6xl md:text-7xl font-medium mb-12">
          <span className="bg-gradient-to-b from-gray-500 to-gray-600 text-transparent bg-clip-text">
            in action
          </span>
        </h2>

        <button className="px-8 py-3 text-lg font-medium text-white bg-gradient-1 rounded-[15px] hover:bg-gradient-2 transition-colors duration-200 shadow-lg shadow-blue-500/20">
            Dive in!
            </button>
      </div>

      {/* Footer */}
      <footer className="w-full px-8 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4">
          <Image src={logo} alt="logo" />
            <div className="space-y-1">
              <p className="text-gray-400">2024 Verifier. All rights reserved.</p>
              <p className="text-gray-600 text-sm">
                All trademarks, logos, and brand names are the property of their respective owners.
              </p>
            </div>
          </div>
          
          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-gray-200 transition-colors">
              Terms and conditions
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

