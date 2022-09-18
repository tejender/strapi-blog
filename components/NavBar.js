import React from 'react'
import Image  from 'next/image';
import Link from "next/link"
import { useState } from 'react';
import Head from 'next/head';
import {FaFacebook,
    FaInstagram ,
     FaTwitter,
     FaYoutube
 } from 'react-icons/fa';


export default function NavBar({active}) {

    
const [navbar, setNavbar] = useState(false);
  return (
  
      <nav className="w-full bg-white shadow-lg z-50 fixed ">
        <div className="justify-start gap-20 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className=" ml-20 flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="font-semibold text-gray-500 text-lg">NEXT JS</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div 
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className=" text-gray-500 items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className={`nav-li ${active=='home' ? 'nav-li-active':'hi' }`}>
                  <Link href="/">
                    
                    <a >Home</a>
                  </Link>
                </li>
                <li className={`nav-li ${active=='posts' ? 'nav-li-active':'hi' }`}>
                  <Link href="/posts">
                    <a>Posts</a>
                  </Link>
                </li>
                <li className={`nav-li ${active=='about' ? 'nav-li-active':'hi' }`}>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li className={`nav-li ${active=='contact' ? 'nav-li-active':'hi' }`}>
                  <Link href="/contact">
                    <a>Contact </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='hidden social lg:flex gap-5 text-1xl text-green-700'>
              <FaFacebook/>
              <FaInstagram/>
              <FaTwitter/>
              <FaYoutube/>
          </div>
        </div>
      </nav>      
    
  );
}
