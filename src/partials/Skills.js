import React from 'react'
import { FaDatabase } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { SiGoogleanalytics} from 'react-icons/si';

function Skills() {
  return (

    <div className=" flex-fol max-w-auto mx-auto mt-8 ">
        <p className=" flex-col text-xl sm:text-3xl font-semibold text-gray-800 mt-4 
          bg-gray-500 shadow-xl rounded-xl p-2 ">
        Skills | 技能
      </p>
    
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-8xl 
    mx-auto  bg-gray-100 shadow-xl rounded-xl px-20">

      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 
      rounded-xl border-2 bg-white border-gray-200 ">
        <FaReact className="text-4xl sm:m-2 mx-auto inline-block " />
        <p className="text-xl font-semibold mt-4">
          Graphic Design
        </p>
        <p className="text-xl font-semibold mt-4">
        美術設計 </p>
      </div>

      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 
      rounded-xl border-2 border-gray-200 bg-white">
        <FaReact className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Digital Marketing 新媒體行銷
        </p>
      </div>

      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 
      rounded-xl border-2 border-gray-200 bg-white">
        <SiGoogleanalytics className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Google Analyics 
        </p>
        <p className="text-xl font-semibold mt-4">
        谷歌社交平台分析證書
        </p>
      </div>

    <div className="m-4 w-40 flex-none mx-auto text-center p-4 sm:m-2 
    rounded-xl border-2 border-gray-200 bg-white">
      <FaCode className="text-4xl sm:m-2 mx-auto inline-block" />
      <p className="text-xl font-semibold mt-4">
        Frontend 
      </p>
      <p className="text-xl font-semibold mt-4">
      前端編程設計
        </p>
    </div>

      <div className="m-5 w-40 flex-none mx-auto text-center p-4 sm:m-2 
      rounded-xl border-2 border-gray-200 bg-white">
        <FaDatabase className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Marketing Data analysis 市場數據分析
        </p>
      </div>

      <div className="m-5 w-40 flex-none mx-auto text-center sm:m-2 p-4 
      rounded-xl border-2 border-gray-200 bg-white">
        <FaReact className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          ReactJS
        </p>
      </div>


      </div>
   </div>
   

   
  )
}

export default Skills
