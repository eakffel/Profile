import React from 'react'
import Profilepic from '../images/Profilepic.jpg'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {  CgMail} from 'react-icons/cg';

function Card() {

  return (
    <div className="flex flex-col align-left w-full">
      <div className="flex flex-col align-left justify-left max-w-xs mx-auto bg-white shadow-xl rounded-xl p-3">
        <div className="">
          <img className="flex flex-col sm:flex-row w-50 h-100 align-left
          mx-auto shadow-xl rounded-full" src={Profilepic} alt="Profile face" />
        </div>
        <div className="text-center mt-6">
          <p className="text-xl sm:text-5xl font-semibold text-gray-900">
          Eliza Keffeler
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
          衛莎莎｜卫莎莎
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
        
          </p>
          <div className="flex align-center justify-center mt-4">
          <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="mailto:eakeffel@gmail.com" target='blank'>
              <CgMail />
              <span class="sr-only">Gmail</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/eliza-keffeler/">
              <FaLinkedin />
              <span class="sr-only">LinkedIn</span>
              </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/eakffel">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
          
          
  
    </div>
    </div>
    </div>
    </div>
      
  )
}

export default Card
