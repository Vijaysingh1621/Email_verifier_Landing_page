import { Mail, CheckCircle } from 'lucide-react'
import imageright from "../../../public/imageRight.svg"
import imageleft from "../../../public/imageLeft.svg"
import Image from 'next/image'

export default function EmailVerifier() {
  return (
    <div className="min-h-screen  p-8 mt-[200px]">
        <div className=' max-w-6xl mx-auto text-center text-medium lg:px-[50px] px-0 gap-5'>
        <h1 className="text-4xl md:text-5xl lg:text-5xl  leading-tight bg-gray-200 text-transparent bg-clip-text">
            World's most accurate email<br/> verifier and validator online
          </h1>
          
          <p className="text-xl text-gray-400 mt-5">
            Clean and validate your email addresses in just one click
          </p>
        </div>
         
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
     
        {/* Left Column */}
        <div className="space-y-8">
          

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-gray-400" />
              <span className="text-xl text-gray-200">Bulk email verifier</span>
            </div>
            
            <h3 className="text-2xl text-gray-200">
              Verify your email lists effortlessly
            </h3>
            
            <p className="text-gray-400">
              Use the bulk email verifier to improve email deliverability and sender reputation.
            </p>

            <ul className="space-y-3">
              {['Remove wrong emails', 'Avoid spam traps', 'Reduce bounces'].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
        
        <button className="px-8 py-3 text-lg font-medium text-white bg-gradient-1 rounded-[15px] hover:bg-gradient-2 transition-colors duration-200 shadow-lg shadow-blue-500/20">
            Dive in!
            </button>
          </div>
        </div>

        {/* Right Column - Dashboard Preview */}
              <div className=''>
                <Image src={imageright} alt="imageRight"/>
              </div>

            {/* Email List */}
           

            {/* Avatar Group */}
           
              
        {/* Left Column - Dashboard Preview */}
        <div className=''>
                <Image src={imageleft} alt="imageRight"/>
        </div>



           {/* Right Column - API Description */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-gray-400">
            <code>&lt;/&gt;</code>
            <span className="text-xl">Email Verification API</span>
          </div>

          <h2 className="text-4xl font-semibold text-gray-200">
            Prevent inaccurate data with real-time email validation
          </h2>

          <p className="text-lg text-gray-400">
            Guard your system against inaccurate data by instantly filtering out invalid addresses!
          </p>

          <ul className="space-y-4">
            {[
              'Elegant and secure HTTPS-based RESTful API, with JSON as its core data format',
              'Validate emails before they enter your database',
              "Integrate the Verifier's real-time API into your website's registration process."
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-green-400 shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          {/* Button */}
        
        <button className="px-8 py-3 text-lg font-medium text-white bg-gradient-1 rounded-[15px] hover:bg-gradient-2 transition-colors duration-200 shadow-lg shadow-blue-500/20">
            Dive in!
            </button>
          </div>

       
          
      </div>
    </div>
  )
}

