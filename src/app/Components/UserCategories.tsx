import { Users2, Laptop, Briefcase, MessageCircle, MonitorIcon as MonitorStar } from 'lucide-react'
import user from "../../../public/Icon.svg"
import laptop from "../../../public/Computer.svg"
import contactless from "../../../public/Contactless.svg"
import repair from "../../../public/Home repair service.svg"
import ImportantDevice from "../../../public/Important devices.svg"

import Image from 'next/image'

export default function VerifierUsers() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl md:text-5xl text-center p-5 mb-16 bg-gradient-to-b from-gray-100 to-gray-400 text-transparent bg-clip-text font-medium">
          Who is using Verifier?
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-0  mb-12">
            {/*left side cards*/}
            <div className='flex flex-col lg:gap-7 gap-12 mb-10 lg:mb-0  '>
                 {/* Card 1 */}
          <div className=" bg-gradient-radial rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_45px_-5px_rgba(0,0,0,0.2)] flex-col gap-10 items-center  border-[1px] border-b-0  border-gray-700" >
            
            <Image src={user} alt="user" className="w-15 h-15 text-white " />
            <span className="text-[22px] text-gray-200">Sales and marketing teams</span>
          </div>


            {/* Card 4 */}
          <div className=" bg-gradient-radial rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_45px_-5px_rgba(0,0,0,0.2)] flex-col gap-10 items-center  border-[1px] border-b-0 border-gray-700">
          <Image src={laptop} alt="user" className="w-15 h-15 text-white" />
            <span className="text-[22px] text-gray-200">Software & IT companies</span>
          </div>

            </div>
         

          {/* Central Card */}
          <div className=" bg-gradient-radial rounded-2xl py-8 px-6 mb-[20px] backdrop-blur-xl shadow-[0_0_45px_-5px_rgba(0,0,0,0.2)]  border-[1px] border-gray-700 flex-col justify-center  items-start w-[300px] border-b-0 ml-10 ">
         
            <h2 className="text-4xl font-medium text-left mb-10 bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text">
              Irreplaceable tool for businesses
            </h2>
            <div className='mt-10'>
            <Image src={repair} alt="user" className="w-15 h-15 text-white" />
            <span className="text-[22px] text-gray-200">Service providers</span>
            </div>
            
            
          </div>

             {/*right side cards*/}
             <div className='flex flex-col gap-7 '>

                  {/* Card 3 */}
          <div className=" bg-gradient-radial rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_45px_-5px_rgba(0,0,0,0.2)] flex-col gap-10 items-center  border-[1px] border-b-0 border-gray-700">
          <Image src={contactless} alt="user" className="w-15 h-15 text-white" />
            <span className="text-[22px] text-gray-200">Recruiters</span>
          </div>

          {/* Card 6 */}
          <div className=" bg-gradient-radial rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_45px_-5px_rgba(0,0,0,0.2)] flex-col gap-10 items-center  border-[1px] border-b-0  border-gray-700">
          <Image src={ImportantDevice} alt="user" className="w-15 h-15 text-white" />
            <span className="text-[22px] text-gray-200">Backlinks outreach</span>
          </div>
        </div>

             </div>

        

          

          

          

        {/* Button */}
        <div className="flex justify-center">
        <button className="px-8 py-3 text-lg font-medium text-white bg-gradient-1 rounded-[15px] hover:bg-gradient-2 transition-colors duration-200 shadow-lg shadow-blue-500/20">
            Dive in!
            </button>

        </div>
      </div>
    </div>
  )
}

