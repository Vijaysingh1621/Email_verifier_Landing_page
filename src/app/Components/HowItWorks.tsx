import { Upload, MailCheck, Download } from 'lucide-react'
import icon1 from "../../../public/icon (1).svg"
import icon2 from "../../../public/icon (3).svg"
import icon3 from "../../../public/icon (4).svg"
import Image from 'next/image'


export default function HowItWorks() {
  const steps = [
    {
      icon: icon1,
      title: "Upload",
      description: "Upload your email lists in .csv format"
    },
    {
      icon: icon2,
      title: "Verify",
      description: "Let Verifier perform, ensuring email validity"
    },
    {
      icon: icon3,
      title: "Download",
      description: "Download your clean and verified email list"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-radial-2 p-6 sm:p-12 md:p-24 mb-[200px]">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 bg-gradient-to-b from-gray-100 to-gray-400 text-transparent bg-clip-text">
          How it works
        </h1>

        <p className="text-base sm:text-lg text-gray-400 mb-12 sm:mb-20">
          It's super easy to verify your email addresses with Verifier.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:mb-[200px]">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className=" backdrop-blur-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Image src={step.icon} alt="icon" className="w-38 h-38 sm:w-16 sm:h-16" />
              </div>
              <h2 className="text-lg sm:text-2xl font-semibold text-gray-200 mb-2 sm:mb-3">
                {step.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-[200px] sm:max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
   
    </div>
    
  )
}
