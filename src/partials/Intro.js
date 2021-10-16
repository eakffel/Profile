import React from 'react'
import Olemiss from '../images/Olemiss.png'
import Dragon from '../images/Dragon.jpeg'






function Intro() {

    return(
        <div>
        <p className=" T
        text-xs sm:text-base text- pt-2 mb-5 px-5 w-auto border-b-4"></p>
        <div className=" flex-row-wrap align-left justify-left w-auto mt-8">
        <p className="md:flex flex-gridRow text-xl sm:text-3xl font-semibold text-gray-300 mt-4 
        bg-gray-500 shadow-xl rounded-xl p-2">
            教育背景｜EDUCATION</p>
            </div>
     <div className=" College
     md:flex align-left justify-left w-auto rounded-xl
     border-l-2 border-r-2 border-gray-200 bg-gray-100">
            <img className="md:flex max-w-xs align-left justify-left w-20 h-20 ml-20 mt-2
           shadow-xl rounded-full" src={Olemiss} alt="Olemiss" />
        <a href="https://olemiss.edu" className=" md:flex text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto mt-6 ">
             密西西比大學｜University of Mississippi              
         </a>
         <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto m-6 ">
            經濟市場行銷/中文雙學位｜Marketing/ Chinese
            </p>
            <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto m-6 ">
            八月 2018年 - 八月 2022年</p>
            </div>

     <div className=" Collierville
     md:flex w-auto mb-2 rounded-xl border-2 border-gray-200 bg-gray-100">

            <img className="md:flex max-w-xs align-left justify-left w-20 h-20 ml-20 mt-2 mb-2
                shadow-xl rounded-full" src={Dragon} alt="Olemiss" />
                <a href="https://colliervillems.colliervilleschools.org" className="text-xs sm:text-base text-gray-600 pt-2 
                pb-2 px-10 w-auto m-6 ">
                    Collierville 高中｜Collierville High              
                </a>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto m-6 mr-20 ">
                中英文雙文憑｜bilingual Sealed Diploma 
                    </p>
                <p className="align-right text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto
                     m-6 mr-10">
                    八月 2018年 - 八月 2022年</p>

                   
          </div>
</div>









    )
}


export default Intro