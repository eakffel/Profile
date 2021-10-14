import React from 'react'
import Profilepic from '../images/Profilepic.jpg'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {  CgMail} from 'react-icons/cg';

function Card() {

  return (
    <div className="inline-block flex flex-col-wrap align-center w-full m-5">
      <div className="flex flex-col align-center justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl px-10 ml-8 ">
      <div className="flex flex-col align-center justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl px-10 mr-8">
        <div className="">
          <img className="flex flex-col sm:flex-row w-40 h-100 m-3 align-center
          mx-auto shadow-xl rounded-full" src={Profilepic} alt="Profile face" />
        </div>
        <div className="text-center mt-1">
          <p className="text-xl sm:text-2xl font-semibold text-gray-700">
          Eliza Keffeler
          </p>
          <p className="text-xl sm:text-1xl font-semibold text-gray-700">
          衛莎莎｜卫莎莎
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-1 px-20 w-auto inline-block border-b-4">
          </p>
          <div className="flex align-center justify-center mt-2">
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
    </div>
   
    
      
  )
}

export default Card
