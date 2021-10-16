import React from 'react'
import { FaDatabase } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { SiGoogleanalytics} from 'react-icons/si';

function Skills() {
  return (
    <div className=" flex-fol max-w-auto mx-auto mt-16 ">
        <p className=" flex-col text-xl sm:text-3xl font-semibold text-gray-800 mt-4 
        bg-gray-400 shadow-xl rounded-xl p-2 ">
        Skills | 技能
      </p>
      <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto border-t-2">
    Listed Below ｜ 列在以下：</p>
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-8xl mx-auto mt-8
    bg-white-300 shadow-xl rounded-xl px-20">
      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 
      rounded-xl border-2 border-gray-200">
        <FaReact className="text-4xl sm:m-2 mx-auto inline-block " />
        <p className="text-xl font-semibold mt-4">
          Graphic Design
        </p>
        <p className="text-xl font-semibold mt-4">
        美術設計 </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 
      rounded-xl border-2 border-gray-200">
        <FaReact className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Digital Marketing 新媒體行銷
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 
      rounded-xl border-2 border-gray-200">
        <SiGoogleanalytics className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Google Analyics 
        </p>
        <p className="text-xl font-semibold mt-4">
        谷歌社交平台分析證書
        </p>
      </div>
    <div className="m-4 w-40 flex-none mx-auto text-center p-4 sm:m-2 
    rounded-xl border-2 border-gray-200">
      <FaCode className="text-4xl sm:m-2 mx-auto inline-block" />
      <p className="text-xl font-semibold mt-4">
        Frontend 
      </p>
      <p className="text-xl font-semibold mt-4">
      前端編程設計
        </p>
    </div>
      <div className="m-5 w-40 flex-none mx-auto text-center p-4 sm:m-2 
      rounded-xl border-2 border-gray-200">
        <FaDatabase className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Marketing Data analysis 市場數據分析
        </p>
      </div>
      <div className="m-5 w-40 flex-none mx-auto text-center sm:m-2 p-4 
      rounded-xl border-2 border-gray-200">
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
