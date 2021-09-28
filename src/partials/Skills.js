import React from 'react'
import { FaDatabase } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { SiGoogleanalytics} from 'react-icons/si';

function Skills() {
  return (
      <div className="max-w-4xl mx-auto mt-16">
 <p className=" text-2xl md:text-4xl font-bold text-center ">
        Skills | 技能
      </p>
      <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto border-b-2">
    Listed Below ｜ 列在以下：</p>
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 rounded-xl border-2 border-gray-300">
        <FaReact className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Graphic Design
        </p>
        <p className="text-xl font-semibold mt-4">
        美術設計 </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 rounded-xl border-2 border-gray-300">
        <FaReact className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Digital Marketing 新媒體行銷
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 rounded-xl border-2 border-gray-300">
        <SiGoogleanalytics className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Google Analyics 
        </p>
        <p className="text-xl font-semibold mt-4">
        谷歌社交平台分析證書
        </p>
      </div>
    <div className="m-4 w-40 flex-none mx-auto text-center p-4 sm:m-2 rounded-xl border-2 border-gray-300">
      <FaCode className="text-4xl sm:m-2 mx-auto inline-block" />
      <p className="text-xl font-semibold mt-4">
        Frontend 
      </p>
      <p className="text-xl font-semibold mt-4">
      前端編程設計
        </p>
    </div>
      <div className="m-5 w-40 flex-none mx-auto text-center p-4 sm:m-2 rounded-xl border-2 border-gray-300">
        <FaDatabase className="text-4xl sm:m-2 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Marketing Data analysis 市場數據分析
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center sm:m-2 p-5 rounded-xl border-2 border-gray-300">
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
