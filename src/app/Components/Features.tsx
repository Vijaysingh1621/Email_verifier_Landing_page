import { Trash2, ShieldAlert, ThumbsUp, Code, Shield, Database, Mail, FileCheck, Server, AlertTriangle, Clock, Mailbox } from 'lucide-react'

export default function EmailFeatures() {
  const features = [
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "Disposable email detection",
      description: "Verifier detects & removes temp emails for a clean, reliable list."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Hard bounce prevention",
      description: "Efficiently eliminate undeliverable emails due to non-existent addresses."
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Soft bounce prevention",
      description: "Verifier spots soft bounce issues for successful email delivery."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Email verification API",
      description: "Integrate our email verification software to remove inaccurate data."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Catch-All email detection",
      description: "Detect and remove catch-all domains to assess your email risk."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "MX record validation",
      description: "Validate email authenticity with advanced MX record checks."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "SMTP provider identification",
      description: "Automatically identify email providers to enhance targeting."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Email syntax validation",
      description: "Syntax check ensures only RFC-compliant emails remain."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Email domain validation",
      description: "Confirm domain functionality with our verification process."
    },
    {
      icon: <Mailbox className="w-6 h-6" />,
      title: "SMTP verification",
      description: "Evaluate and analyze email deliverability for valuable insights."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Anti-greylisting technology",
      description: "Trust verifier for accurate email verification with anti-greylisting tech."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time results",
      description: "Track the real-time results of your email verification as we process the list."
    }
  ]

  return (
    <div className="min-h-screen p-8 mt-[100px] mb-[100px]">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 flex-row  lg:gap-0">
        {/* Header Section */}
        <div className="max-w-xl mb-16 lg:mr-[10px]">
          <h1 className="text-5xl font-medium mb-4 bg-gradient-to-b from-gray-100 to-gray-400 text-transparent bg-clip-text ">
            Rock solid email verification
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Clean, optimize, and supercharge your email lists.
          </p>
          {/* Button */}
        
        <button className="px-8 py-3 text-lg font-medium text-white bg-gradient-1 rounded-[15px] hover:bg-gradient-2 transition-colors duration-200 shadow-lg shadow-blue-500/20">
            Dive in!
            </button>
            
            
            

        </div>
        
       {/* Features Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <div 
      key={index}
      className=" "
    >
      {/* Inner container with dark background for content */}
      <div className="w-full h-full bg-gradient-to-br from-[#30273D]/100 to-gray-900/60 bg-transparent bg-opacity-20 rounded-3xl p-6 text-white">
        <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
          {feature.icon}
        </div>
        <h3 className="text-lg font-medium mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
      
    </div>
  )
}

