import { useState } from 'react'
import phone1 from './assets/phone-1.png'
import phone2 from './assets/phone-2.png'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 font-mono">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold flex items-center">
              Budget Tracker App
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex mt-5 md:flex md:flex-row items-center space-x-8">
            <a href="https://www.linkedin.com/in/akingundogdu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-navy-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/akngundogdu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-navy-500 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com/akingundogdu/budget-tracker" target="_blank" rel="noopener noreferrer" className="text-white hover:text-navy-500 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://budget-tracker-2hfy.onrender.com/register" className="hidden md:block bg-primary-dark text-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-900 transition-all">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className=" mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
            Master Your Finances Anywhere, Anytime
            </h1>
            <p className="text-gray-300 mb-8 font-medium leading-relaxed font-mono">
             A powerful, simple, feature-rich Progressive Web App for seamless expense tracking, <br /> budgeting, and financial goal management. It is FREE and open source!
            </p>
            <a href="https://budget-tracker-2hfy.onrender.com/register" className="font-mono inline-block bg-navy text-white px-8 py-3 rounded-full hover:bg-navy-light transition-all">
              Get Started
            </a>
          </div>

          {/* Right Content - Phone Images */}
          <div className="lg:w-1/2 flex justify-center items-center space-x-2 lg:space-x-4 relative">
            <div className="mt-20 lg:mt-40">
              <img src={phone1} alt="App Screenshot 1" className="w-40 sm:w-48 md:w-64 lg:w-72" />
            </div>
            <div className="-mt-20 lg:-mt-40">
              <img src={phone2} alt="App Screenshot 2" className="w-40 sm:w-48 md:w-64 lg:w-72" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
