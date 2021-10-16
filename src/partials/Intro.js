import React from 'react'
import Rpic from '../images/Rpic.jpg'
import Rpic2 from '../images/Rpic2.jpg'





function Intro() {

    return(
        <div>
        <p className="text-xs sm:text-base text- pt-2 mb-5 px-5 w-auto border-b-4"></p>

        <p className="text-xl sm:text-3xl font-semibold text-gray-800 mt-4 bg-gray-400 shadow-xl rounded-xl p-2 
        ">
            Resume｜履歷</p>
<p className="text-xs sm:text-base text-gray-600 pt-2 pb-2 px-10 w-auto border-t-2">
Click image for links ｜ 點及照片去到對應連接</p>

<div className="flex align-left justify-center mt-6 
bg-white-300 shadow-xl rounded-xl px-30">

<a ClassName="Resume" 
     href= ":https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:caa27e14-a7f3-4641-80c6-2779635e5bc7"target="_blank" rel="noopener noreferrer">
     <img className="flex flex-col sm:flex-row w-25 h-40 mx-auto sm:m-2 shadow-xl square border-b-4" src={Rpic} alt='PDF'/>
    </a >  
    <a ClassName="Resume2" 
     href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:31f00990-2c4a-4877-9ad7-216e46945c26"target="_blank" rel="noopener noreferrer">
     <img className="flex flex-col sm:flex-row w-25 h-40 mx-auto sm:m-2 shadow-xl square border-b-4" src={Rpic2} alt='PDF'/>
    </a >  

</div>
</div>


    )
}


export default Intro