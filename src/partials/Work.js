import React from 'react'
import MPO from '../images/MPO.jpg'
import Post from '../images/Post.jpg'

function About() {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <p className="text-2xl md:text-4xl font-bold text-center">
        Work Collection | 作品集
      </p>
      <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto border-b-2"> Click on image to go the link ｜ 點及照片去到對應連接:</p>
      <div className="flex align-center justify-center mt-4 ">
     <a ClassName="MPO-SM" href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:1f8a3c84-3e4d-4c60-9e19-3517f83ceb52"target="_blank" rel="noopener noreferrer">
     <img className="w-20 mx-auto sm:m-2 shadow-xl square" src={MPO} alt='PDF'/>
</a>
<a ClassName="POST" href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:75e48e20-a30c-4661-bd17-100a21d6b3ac"target="_blank" rel="noopener noreferrer">
     <img className="w-20 mx-auto sm:m-2 shadow-xl square" src={Post} alt='PDF'/>
</a>
    </div>
      </div>
      
  )
  
}


export default About
