import { title } from 'process';
import React from 'react'
import { FaCodeCompare } from "react-icons/fa6";
import { GiShieldEchoes } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { SiSpeakerdeck } from "react-icons/si";
import hieusuat from '../../../../public/images/products/hieusuat.jpeg'
import capnhat from '../../../../public/images/products/capnhat.jpeg'
import baomat from '../../../../public/images/products/baomat.jpeg'
import tietkiem from '../../../../public/images/products/tietkiem.jpeg'
import Image from 'next/image';
const Feature = ({pageName}:{pageName:string}) => {
  return (
    <div className='lg:h-[300px] relative '>
      <div className='z-[1000] bg-[#e7f6e2] lg:bg-transparent h-full top-0 left-0 lg:absolute lg:-translate-y-[200px] w-full flex flex-col gap-8'>
        <div className=' text-[#3b3663] text-base font-medium bottom-40 flex flex-col justify-center items-center'>
          Tính năng
          <div className='text-xl md:text-3xl font-semibold'>
           Ưu điểm và lợi ích của
          </div>
          <div className='text-xl md:text-3xl font-semibold'>
          {pageName}
          </div>
        </div>
        <div className='grid grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mx-4'>
            <div className="rounded-md hover:scale-105 gap-4 shadow-lg flex text-lg flex-col justify-start items-center font-bold h-[350px] text-[rgb(59,54,99)] md:mt-[40px] bottom-0 bg-white border-[2px] border-gray-300">
              
              {/* <FaCodeCompare size={30}/> */}
              <Image width='350' height='200' className='h-[280px] rounded-tl-md rounded-tr-md' src={hieusuat} alt='ppp' />
              <div>Tăng Hiệu Suất Quản Lý</div>
            </div>
            <div className="rounded-md hover:scale-105 gap-4 shadow-lg -translate-y-[50px] flex text-lg flex-col justify-start items-center font-bold h-[350px] text-[rgb(59,54,99)] md:mt-[40px] bottom-0 bg-white border-[2px] border-gray-300">
            {/* <FaCodeCompare size={30}/> */}
            <Image width='350' height='200' className='h-[280px]  rounded-tl-md rounded-tr-md' src={baomat} alt='ppp' />

              <div>Bảo Mật Thông Tin</div>
            </div>
            <div className="rounded-md hover:scale-105 gap-4 shadow-lg flex text-lg flex-col justify-start items-center font-bold h-[350px] text-[rgb(59,54,99)] md:mt-[40px] bottom-0 bg-white border-[2px] border-gray-300">
            {/* <FaCodeCompare size={30}/> */}
            <Image width='350' height='350' src={tietkiem} className='h-[280px] rounded-tl-md rounded-tr-md' alt='ppp' />

              <div>Tiết Kiệm Thời Gian và Chi Phí</div>
            </div>
            <div className="rounded-md hover:scale-105 gap-4 shadow-lg flex text-lg -translate-y-[50px] flex-col justify-start items-center font-bold h-[350px] text-[rgb(59,54,99)] md:mt-[40px] bottom-0 bg-white border-[2px] border-gray-300">
            {/* <FaCodeCompare size={30}/> */}
            <Image width='350' height='350' src={capnhat} className='h-[280px] rounded-tl-md rounded-tr-md' alt='ppp' />

              <div>Đồng Bộ Hóa và Cập Nhật Liên Tục</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Feature