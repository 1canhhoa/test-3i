import React from 'react'
import { FaCodeCompare } from "react-icons/fa6";
import { GiShieldEchoes } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { SiSpeakerdeck } from "react-icons/si";
const Feature = () => {
  return (
    <div className='lg:h-[300px] relative '>
      <div className='z-[1000] bg-[#e7f6e2] lg:bg-transparent h-full top-0 left-0 lg:absolute lg:-translate-y-[200px] w-full flex flex-col gap-8'>
        <div className=' text-[#3b3663] text-base font-medium bottom-40 flex flex-col justify-center items-center'>
          Tính năng
          <div className='text-xl md:text-3xl font-semibold'>
          Giải Pháp Thiết Kế Website 3I Solutions
          </div>
          <div className='text-xl md:text-3xl font-semibold'>
          Cao cấp – Chuẩn SEO – Responsive
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className="rounded-md hover:bg-[#282868] gap-4 flex text-lg flex-col justify-center items-center font-bold text-white h-[320px] md:mt-[40px] bottom-0 bg-[#3d3d6a]">rounded-md 
              <FaCodeCompare size={30}/>
              <div>Thiết Kế App Giáo Dục</div>
              <span className='w-8 h-[2px] bg-white'></span>
              <div>Website Kinh Doanh Vượt Trội</div>
            </div>
            <div className="rounded-md gap-4 hover:bg-[#2c4d8c] flex text-lg flex-col justify-center items-center font-bold text-white h-[320px] bottom-0 bg-[#5076bb]">
            <FaCodeCompare size={30}/>
              <div>Thiết Kế App Giáo Dục</div>
              <span className='w-8 hover:bg-opacity-95 h-[2px] bg-white'></span>
              <div>Website Kinh Doanh Vượt Trội</div>
            </div>
            <div className="rounded-md gap-4 hover:bg-[#1d899e] flex text-lg flex-col justify-center items-center font-bold text-white h-[320px] md:mt-[30px] bottom-0 bg-[#50acbe]">
            <FaCodeCompare size={30}/>
              <div>Thiết Kế App Giáo Dục</div>
              <span className='w-8 h-[2px] bg-white'></span>
              <div>Website Kinh Doanh Vượt Trội</div>
            </div>
            <div className="rounded-md gap-4 hover:bg-[#238e83] flex text-lg flex-col justify-center items-center font-bold text-white h-[320px]  bottom-0 bg-[#43b6aa]">
            <FaCodeCompare size={30}/>
              <div>Thiết Kế App Giáo Dục</div>
              <span className='w-8 h-[2px] bg-white'></span>
              <div>Website Kinh Doanh Vượt Trội</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Feature