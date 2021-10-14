import React from 'react'
import Profilepic from '../images/Profilepic.jpg'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {  CgMail} from 'react-icons/cg';

function Card() {

  return (
    <div className="md:flex flex-row-wrap align-center mt-8 mr-20">
      <div className="md:flex flex-row align-center justify-center max-w-s mx-auto bg-blue shadow-xl rounded-xl p-2">
          <img className="md:flex flex-gridRow max-w-xs align-center sm:flex-row w-35 h-75
          mx-auto shadow-xl rounded-full" src={Profilepic} alt="Profile face" />

        <div className="text-center m-2 mt-20 mx-auto">
          <p className="text-xl sm:text-4xl font-semibold mx-6 text-gray-700">
          Eliza Keffeler
          </p>
          <p className="text-xl sm:text-1xl font-semibold text-gray-700">
          衛莎莎｜卫莎莎
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-1 px-20 w-auto inline-block border-b-4">
          </p>
          <div className="flex align-center justify-center mt-2">
          <a className="text-xl m-1 p-1 sm:m-2 sm:p-1 text-gray-800 hover:bg-gray-800 
          rounded-full hover:text-white transition-colors duration-300" href="mailto:eakeffel@gmail.com" target='blank'>
              <CgMail />
              <span class="sr-only">Gmail</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-1 text-gray-800 hover:bg-gray-800 
            rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/eliza-keffeler/">
              <FaLinkedin />
              <span class="sr-only">LinkedIn</span>
              </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-1a text-gray-800 hover:bg-gray-800 
            rounded-full hover:text-white transition-colors duration-300" href="https://github.com/eakffel">
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
