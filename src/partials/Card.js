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

    <div className="
     text-center font-sans-500 mt-1 mx-auto shadow-md rounded-md p-2 bg-gray-100">
    <p className="text-xl sm:text-6xl font-sans mx-2 text-gray-100
    shadow-l rounded-2xl p-1 bg-gray-800">
    Eliza Keffeler
       </p>
       <p className="text-xl sm:text-3xl font-semibold text-gray-700">
          衛莎莎｜卫莎莎
          </p>
       
   <div className=" Pro
   md:flex flex-row align-center justify-center">
            <img className="md:flex align-center max-w-md w-50 h-25 mb-5 mt-1 ml-20
             shadow-xl rounded-full
             border-black border-4" 
             src={Profilepic} alt="Profile face"/>

  <div className="text-center m-2 mt-2 mx-auto">
          <p className="text-xs sm:text-base text-gray-700 pt-8 pb-1 px-20 w-auto inline-block border-b-4">
          </p>
        
<div className=" Contact link
        flex align-center justify-center mt-1">
          <a className="text-xl m-3 p-1 sm:m-2 sm:p-1 text-gray-800 hover:bg-gray-800
          rounded-full hover:text-white transition-colors duration-300" 
          href="mailto:eakeffel@gmail.com" 
          target='blank rel="noopener noreferrer'>
              <CgMail size={30}/><span class="sr-only">Gmail</span>
            </a>
            <a className="text-xl m-1 p-1 md:m-2 sm:p-1 text-gray-800 hover:bg-gray-800 
            rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/eliza-keffeler/" 
            target='blank rel="noopener noreferrer'>
              <FaLinkedin size={30} /><span class="sr-only">LinkedIn</span>
              </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-1 text-gray-800 hover:bg-gray-800 
            rounded-full hover:text-white transition-colors duration-300" href="https://github.com/eakffel"
            target='blank rel="noopener noreferrer'>
              <FaGithub size={30}/> <span class="sr-only">Github</span>
            </a>
            </div>
<div classname=" Title2
              md:flex flex-row-wrap align-left justify-left w-auto ">
            <p className="justify-left align-left text-xl md:text-base font-semibold pt-2 pb-2 px-1 pr-20 text-gray-600 ">
                   履歷 / 作品集 |  Resume/ Past Pojects  </p>
                   <p className="text-xs text-gray-600 pt-1  border-t-2">[點擊以下照片下載｜Click image for download]</p>
                   </div>
             <div className="doc Links
                          md:flex flex-row-wrap align-left justify-left w-auto ">
                          
                <a ClassName="Resume" 
                  href= "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:8b18b797-cb24-3e57-a863-5191c7a1eedf"
                  target="_blank" rel="noopener noreferrer">
                  <img className="flex flex-gridRow sm:flex-row w-25 h-40  m-3 sm:m-2 shadow-xl square "
                   src={Rpic} alt='PDF'/>
                  </a >  
                      <a ClassName="MPO-SM" 
                       href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:1f8a3c84-3e4d-4c60-9e19-3517f83ceb52"
                       target="_blank" rel="noopener noreferrer">
                       <img className="flex flex-col sm:flex-row w-25 h-40  sm:m-2 shadow-xl square"
                        src={MPO} alt='PDF'/>
                         </a >
                         <a ClassName="Pastwork" 
                         href= "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:9d27f95d-d30f-3570-b69d-513ada3b7d5b"
                         target="_blank" rel="noopener noreferrer">
                         <img className="flex flex-col sm:flex-row w-25 h-40  sm:m-2 shadow-xl square" 
                         src={E} alt='PDF'/>
                          </a >   
                           <a ClassName="Martin" 
                           href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:2bf62e9f-b93a-4d97-b3fb-5b89190c5857"
                           target="_blank" rel="noopener noreferrer">
                          <img className="flex flex-col sm:flex-row w-25 h-40 sm:m-2 shadow-xl square" 
                          src={Martin} alt='PDF'/>
                         </a >  
               
                         </div>
                </div>
     
            </div>
   
    </div>
 
    
    
   
    
      
  )
}

export default Card
