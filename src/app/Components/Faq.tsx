'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0)

  const faqs = [
    {
      question: "How is the Verifier different from other email verifier tools?",
      answer: (
        <div className="space-y-4">
          <p>BrandNav Verifier stands out for several reasons:</p>
          <ul className="space-y-2">
            <li>Accuracy: Our advanced algorithms ensure precise email verification.</li>
            <li>Efficiency: Fast processing for large email lists, saving you time.</li>
            <li>User-Friendly: Easy-to-use interface makes verification hassle-free.</li>
            <li>Data Security: Your information is handled with the utmost security.</li>
            <li>Support: Responsive customer support to assist you at any step.</li>
          </ul>
          <p className="pt-2">Don't just take our word for it, checkout our G2 reviews we're rated 4.8/5 by users.</p>
        </div>
      )
    },
    {
      question: "What does it mean when an email address is valid?",
      answer: "Content for valid email explanation..."
    },
    {
      question: "What does it mean when an email address is unknown?",
      answer: "Content for unknown email explanation..."
    },
    {
      question: "What does it mean when an email address is invalid?",
      answer: "Content for invalid email explanation..."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#09061A] to-[#111827] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-5xl font-normal text-center mb-16 bg-gradient-to-b from-gray-100 to-gray-400 text-transparent bg-clip-text">
          Frequently asked questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#30273D]/100 to-gray-900/60 bg-transparent bg-opacity-20 rounded-2xl backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left text-[16px] text-gray-200 hover:text-white transition-colors"
                aria-expanded={openQuestion === index}
              >
                {faq.question}
                {openQuestion === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-8 transition-all duration-200 ease-in-out ${
                  openQuestion === index ? 'max-h-[1000px] pb-6 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <div className="text-gray-300 space-y-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

