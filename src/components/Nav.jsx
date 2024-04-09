import React, { useState } from 'react';

export const Nav = ({ theme }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = ["Home", "About", "Projects", "Contact"]

  return (
    <nav className="sticky top-4 z-50">
      <div className="max-w-[90vw] flex justify-center mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 mt-3 p-2">
          <div className="static flex items-center justify-between p-2 w-[80vw]  dark:bg-gray-900 bg-black rounded-3xl dark:text-white text-gray-300 px-4">
            <div className="flex-shrink-0">
              <a href="/" className="font-bold text-sm">marvelUs 👨🏾‍💻</a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">

              {navLinks.map((link, index) => (
                <a key={index} href="#"  className="hover:text-white px-3 py-2 rounded-md text-sm font-medium">{link}</a>
              ))}
                
              </div>
            </div>

            <div className='text-xl'><i className='fa fa-house' onClick={theme}/></div>

          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link, index) => (
                <a key={index} href="#"  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link}</a>
      ))}
          </div>
        </div>
      )}


    </nav>
  );
};
