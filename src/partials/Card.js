import React from 'react'
import Profilepic from '../images/Profilepic.jpg'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {  CgMail} from 'react-icons/cg';
import MPO from '../images/MPO.jpg'
import E from '../images/E.jpg'
import Martin from '../images/Martin.jpg'
import Rpic from '../images/Rpic.jpg'
import Rpic2 from '../images/Rpic2.jpg'

function Card() {

  return (
   
        <div className=" Name
        flex align-center mt-4 mr-20">
        <div className="md:flex flex-row align-center justify-center max-w-s mx-auto 
        bg-blue shadow-xl rounded-xl p-2 bg-gray-100">
            <img className="md:flex max-w-xs align-center w-40 h-40 mb-2 ml-2 mt-8
             shadow-xl rounded-2xl" src={Profilepic} alt="Profile face" />
      <div className="text-center m-2 mt-2 mx-auto">
          <p className="text-xl sm:text-4xl font-semibold mx-2 text-gray-800">
          Eliza Keffeler
          </p>
          <div className="text-center mt-2 mx-auto">
          <p className="text-xl sm:text-1xl font-semibold text-gray-700">
          衛莎莎｜卫莎莎
          </p>
          <p className="text-xs sm:text-base text-gray-700 pt-2 pb-1 px-20 w-auto inline-block border-b-4">
          </p>
          
<div className=" Contact link
        flex align-center justify-center mt-1">
          <a className="text-xl m-1 p-1 sm:m-2 sm:p-1 text-gray-800 hover:bg-gray-800 
          rounded-full hover:text-white transition-colors duration-300" href="mailto:eakeffel@gmail.com" 
          target='blank rel="noopener noreferrer'>
              <CgMail /><span class="sr-only">Gmail</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-1 text-gray-800 hover:bg-gray-800 
            rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/eliza-keffeler/" 
            target='blank rel="noopener noreferrer'>
              <FaLinkedin /><span class="sr-only">LinkedIn</span>
              </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-1 text-gray-800 hover:bg-gray-800 
            rounded-full hover:text-white transition-colors duration-300" href="https://github.com/eakffel"
            target='blank rel="noopener noreferrer'>
              <FaGithub /> <span class="sr-only">Github</span>
            </a>
            </div>
<div classname=" Title2
              md:flex flex-row-wrap align-left justify-left w-auto ">
            <p className="justify-left align-left text-xs sm:text-base font-semibold pt-2 pb-2 px-10 text-gray-600 ">
                   履歷 / 作品集 |  Resume/ Past Pojects  </p>
                   <p className="text-xs text-gray-600 pt-1  border-t-2">[點擊以下照片下載｜Click image for download]</p>
                   </div>
             <div className="doc Links
                          md:flex flex-row-wrap align-left justify-left w-auto ">
                          
                <a ClassName="Resume" 
                  href= ":https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:31f00990-2c4a-4877-9ad7-216e46945c26"
                  target="_blank" rel="noopener noreferrer">
                  <img className="flex flex-gridRow sm:flex-row w-20 h-30  m-3 sm:m-2 shadow-xl square " src={Rpic} alt='PDF'/>
                  </a >  
                   <a ClassName="Resume2" 
                      href= ":https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:3b35a0c2-d798-4380-b774-e16faca67d81"
                      target="_blank" rel="noopener noreferrer">
                          <img className="flex flex-col sm:flex-row w-20 h-30 sm:m-2 shadow-xl square " src={Rpic2} alt='PDF'/>
                       </a >  
                      <a ClassName="MPO-SM" 
                       href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:1f8a3c84-3e4d-4c60-9e19-3517f83ceb52"
                       target="_blank" rel="noopener noreferrer">
                       <img className="flex flex-col sm:flex-row w-20 h-30  sm:m-2 shadow-xl square" src={MPO} alt='PDF'/>
                         </a >
                         <a ClassName="Pastwork" 
                         href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:b95e2045-4c35-4083-8514-508c9f048120"
                         target="_blank" rel="noopener noreferrer">
                         <img className="flex flex-col sm:flex-row w-20 h-30  sm:m-2 shadow-xl square" src={E} alt='PDF'/>
                          </a >   
                           <a ClassName="Martin" 
                           href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:2bf62e9f-b93a-4d97-b3fb-5b89190c5857"
                           target="_blank" rel="noopener noreferrer">
                          <img className="flex flex-col sm:flex-row w-20 h-30 sm:m-2 shadow-xl square" src={Martin} alt='PDF'/>
                         </a >  
                </div>
     
            </div>
   
    </div>
  </div>
    
    </div>
    
   
    
      
  )
}

export default Card
