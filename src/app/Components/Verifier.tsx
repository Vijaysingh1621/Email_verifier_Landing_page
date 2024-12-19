import { Mail, CheckCircle } from 'lucide-react'


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

            <button className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors duration-200 shadow-lg shadow-blue-500/20">
              Dive in!
            </button>
          </div>
        </div>

        {/* Right Column - Dashboard Preview */}
       

            {/* Email List */}
           

            {/* Avatar Group */}
           
          
      </div>
    </div>
  )
}

