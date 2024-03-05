import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNavClick = () => {
    setOpenNav(!openNav);
  };

  return (
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="inline-flex items-center px-3 py-2 text-white font-bold text-xl">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="hidden sm:block space-x-4">
            
            <Link to='/'></Link>
            <Link to='/mystories'></Link>
            <Link to='/readmore'></Link>
            <Link to='/signup'></Link>
            <Link to='/myfeed'></Link>
            <Link to='/create'></Link>
            <Link to='/update'></Link>
            <Link to='/stories' className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium no-underline">
              Stories
            </Link>
            <Link to='/contact' className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium no-underline">
              Contact
            </Link>
            <Link to='/sign' className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium no-underline">
              Sign In
            </Link>
            <Link to='/signup'>
              <button className='bg-blue-400 font-medium text-white px-3 py-1.5 rounded hover:bg-blue-300'>Get Started</button>
            </Link>
          </div>

          <div className="sm:hidden">
            <button onClick={handleNavClick} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Toggle menu</span>
              {openNav ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {openNav && (
            <div className="fixed inset-y-5 left-0 w-56 bg-white py-4 pl-6 h-96 sm:hidden">
              <Link to='/stories' className="block py-2 pr-4 pl-3 text-gray-700 font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">Stories</Link>
              <Link to='/contact' className="block py-2 pr-4 pl-3 text-gray-700 font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">Contact</Link>
              <Link to='/signup' className="block py-2 pr-4 pl-3 text-gray-700 font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">Sign In</Link>
              <Link to='/signup'><button className='bg-blue-400 font-medium text-white px-3 py-1.5 rounded'>Get Started</button></Link>
            </div>
          )}
        </nav>
      </header>
  );
};

export default Navbar;
