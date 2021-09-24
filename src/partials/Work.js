import React from 'react'
import PDF from '../images/PDF.png'

function About() {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <p className="text-2xl md:text-4xl font-bold text-center">
        Work Collection | 作品集
      </p>
     <div>
     <img className="w-20 mx-auto shadow-xl rounded-full" src={PDF} alt='PDF' to="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:1f8a3c84-3e4d-4c60-9e19-3517f83ceb52"/>

    
      </div>
      </div>
  );

  
}


export default About
