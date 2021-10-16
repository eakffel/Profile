import React from 'react'
import USHCA from '../images/USHCA.png'
import MPOlogo from '../images/MPOlogo.png'
import Olemiss from '../images/Olemiss.png'
import Martin from '../images/Martin.jpeg'





function About() {
  return (

    <div className=" Titile
    max-w-auto mx-auto mt-10 align-left justify-left">
      <p className=" md:flex align-left justify-left text-xl sm:text-3xl font-semibold text-gray-300
       mt-4 bg-gray-500 shadow-xl rounded-xl p-2">
        工作經歷 | Experiences   
      </p>

      <div className=" MPO
      md:flex align-left justify-left rounded-xl w-auto border-l-2 border-r-2 
      border-gray-200 bg-gray-100">
            <img className="md:flex max-w-xs align-left justify-left w-20 h-20 ml-20 mt-2 mb-2
           shadow-xl " src={MPOlogo} alt="MPOlogo" />
        <a href="https://www.microportortho.com" className=" md:flex text-xs sm:text-base text-gray-600 
        pt-2 pb-2 px-10 w-auto mt-6 ">
        微創骨科產品公司｜MicroPort Orthopedics             
         </a>
         <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto m-5 mr-10 ">
         市場行銷部實習生｜Marketing Intern
            </p>
            <p className="align-left text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 m-6 ml-10 ">
            十月 2020年 – 五月 2021年</p>
            </div>

     <div className="USHCA 
           md:flex w-auto rounded-xl border-l-2 border-r-2 border-t-2 border-gray-300 bg-gray-100">
            <img className="md:flex max-w-xs align-left justify-left w-20 h-20 ml-20 mt-3 mb-2
                shadow-xl " src={USHCA} alt="USHCA" />
                <a href="https://usheartlandchina.org" className="text-xs sm:text-base text-gray-600 pt-2 
                pb-2 px-10 w-auto m-6 ">
                    US Heartland China Association             
                </a>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-20 w-auto m-5 ml-4 ">
                市場行銷部實習｜Marketing Intern
                    </p>
                <p className="align-left text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 
                     mt-6 ml-6 ">
                    五月 2019年 – 十二月 2020年</p>

                   
          </div>
          <div className="USHCA 
          md:flex w-auto rounded-xl  border-l-2 border-r-2 border-t-2 border-gray-300 bg-gray-100">
            <img className="md:flex max-w-xs align-left justify-left w-20 h-20 ml-20 mt-3 mb-2
                shadow-xl " src={USHCA} alt="USHCA" />
                <a href="https://usheartlandchina.org" className="text-xs sm:text-base text-gray-600 pt-2 
                pb-2 px-10 w-auto m-6 ">
                    US Heartland China Association             
                </a>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-20 w-auto m-5 ml-5 ">
                市場研究實習生｜Research Intern
                    </p>
                <p className="align-left text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10
                     m-6 mr-5">
                    五月 2019年 – 十二月 2020年</p>


          </div>
          <div className=" Martin
          md:flex w-auto rounded-xl border-l-2 border-r-2 border-t-2 border-gray-300 bg-gray-100">
            <img className="md:flex max-w-xs align-left justify-left w-20 h-20 ml-20 mt-3 mb-2
                shadow-xl " src={Martin} alt="Martin" />
                <a href="https://www.martin-eng.com" className="text-xs sm:text-base text-gray-600 pt-2 
                pb-2 px-10 w-auto m-6 ">
                    Martin Engineering Company           
                </a>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-20 w-auto m-6 mr-20 ">
                工程部翻譯實習生｜Translation Intern
                    </p>
                <p className="align-left text-xs sm:text-base text-gray-600 pt-2 pb-2 px-0 w-auto
                     m-6 mr-5">
                  五月 2019 – 九月 2019 年</p>
                   
          </div>
          <div className=" Olemiss
          md:flex w-auto mb-2 shadow-xl rounded-xl border-2 border-white-300 bg-gray-100">
            <img className="md:flex max-w-xs align-left justify-left w-20 h-20 ml-20 mt-2 mb-2
                shadow-xl " src={Olemiss} alt="Olemiss" />
                <a href="https://usheartlandchina.org" className="text-xs sm:text-base text-gray-600 pt-2 
                pb-2 px-10 w-auto m-6 ">
                    密西西比大學｜University of Mississippi           
                </a>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto m-6 ml-1 ">
                中文輔導老師｜Chinese Language Tutor
                    </p>
                <p className="align-right text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto
                     m-6 ml-10">
                   八月 2018年 – 八月 2019年</p>

                   
          </div>
    </div>

       
      
  )
  
}


export default About
