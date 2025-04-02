import React from 'react'
import {useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


  return (
   <>
   <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Center Search and Links */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="ml-10 flex space-x-8">
              <Link to="/Home" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/team" className="text-gray-600 hover:text-gray-900">Services</Link>
              <Link to="/projects" className="text-gray-600 hover:text-gray-900">Testmonials</Link>
              <Link to="/calendar" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
          </div>

          {/* Right Side - Book Now and User */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/book" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book Now
            </Link>
            <div className="flex-shrink-0">
              <button className="bg-gray-200 p-1 rounded-full">
                <span className="sr-only">User menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/32"
                  alt="User"
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
              <div className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <Link to="/dashboard" className="block text-gray-600 hover:text-gray-900 py-2">Dashboard</Link>
                <Link to="/team" className="block text-gray-600 hover:text-gray-900 py-2">Team</Link>
                <Link to="/projects" className="block text-gray-600 hover:text-gray-900 py-2">Projects</Link>
                <Link to="/calendar" className="block text-gray-600 hover:text-gray-900 py-2">Calendar</Link>
                <Link to="/book" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4">
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
   </>
  )
}

export default Navbar