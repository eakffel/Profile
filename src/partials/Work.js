import React from 'react'
import MPO from '../images/MPO.jpg'
import E from '../images/E.jpg'


function About() {
  return (

    <div className="max-w-4xl mx-auto mt-10 ">
      <p className=" sm:flex-row text-2xl md:text-4xl font-bold text-center">
        Work Collection | 作品集
      </p>
      <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto border-t-2">
         Click image for links ｜ 點及照片去到對應連接:</p>
      <div className="flex align-center justify-center mt-8 ">
     <a ClassName="MPO-SM" 
     href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:1f8a3c84-3e4d-4c60-9e19-3517f83ceb52"target="_blank" rel="noopener noreferrer">
     <img className="flex flex-col sm:flex-row w-25 h-40 mx-auto sm:m-2 shadow-xl square" src={MPO} alt='PDF'/>
    </a >
    <a ClassName="MPO-SM" 
     href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:b95e2045-4c35-4083-8514-508c9f048120"target="_blank" rel="noopener noreferrer">
     <img className="flex flex-col sm:flex-row w-25 h-40 mx-auto sm:m-2 shadow-xl square" src={E} alt='PDF'/>
    </a >    
   
</div>
   
    </div>

       
      
  )
  
}


export default About
