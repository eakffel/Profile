import React from 'react'
import MPO from '../images/MPO.jpg'
import E from '../images/E.jpg'
import Martin from '../images/Martin.jpg'


function About() {
  return (

    <div className="max-w-auto mx-auto mt-10 align-left justify-left">
      <p className=" align-left justify-left text-xl sm:text-3xl font-semibold text-gray-800 mt-4 bg-gray-400 shadow-xl rounded-xl p-2">
        Work Collection | 作品集
      </p>
      <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto border-t-2">
         Click image for links ｜ 點及照片去到對應連接:</p>
      <div className="flex align-left justify-center mt-8 mr-8 
      bg-white-300 shadow-xl rounded-xl px-20">
     <a ClassName="MPO-SM" 
     href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:1f8a3c84-3e4d-4c60-9e19-3517f83ceb52"target="_blank" rel="noopener noreferrer">
     <img className="flex flex-col sm:flex-row w-25 h-40 mx-auto sm:m-2 shadow-xl square" src={MPO} alt='PDF'/>
    </a >
    <a ClassName="MPO-SM" 
     href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:b95e2045-4c35-4083-8514-508c9f048120"target="_blank" rel="noopener noreferrer">
     <img className="flex flex-col sm:flex-row w-25 h-40 mx-auto sm:m-2 shadow-xl square" src={E} alt='PDF'/>
    </a >   
    <a ClassName="Martin" 
     href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:2bf62e9f-b93a-4d97-b3fb-5b89190c5857"target="_blank" rel="noopener noreferrer">
     <img className="flex flex-col sm:flex-row w-25 h-40 mx-auto sm:m-2 shadow-xl square" src={Martin} alt='PDF'/>
    </a >  
   
</div>
   
    </div>

       
      
  )
  
}


export default About
