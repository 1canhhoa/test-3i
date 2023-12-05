import React from 'react'
import Image from 'next/image'
import logo3i from '../../../../public/images/logo/logo3i.png'
import { Icon } from '@iconify/react';
interface ChatProps {
  handleCLickOpen: () => void;
}
const Chat: React.FC<ChatProps>= ({handleCLickOpen}) => {
  return (
   <>
      <div className='w-[500px] flex flex-col justify-start items-center bg-gray-100 z-[1000] fixed bottom-20 right-6 h-[500px] rounded-lg shadow-md'>
          <div className="p-10 gap-2 rounded-tl-lg rounded-tr-lg bg-green-400 text-center flex justify-center items-center flex-col">
              <Image src={logo3i} width={30} height={30} alt="sss" />
              <div className='font-medium text-lg  text-white'>Bạn vui lòng điền vào biểu mẫu dưới đây để các nhân viên 
                hỗ trợ tốt hơn và nhận ưu đãi từ của hàng</div>
          </div>
          <div className='w-[450px] bg-white border-[3px] flex flex-col justify-start items-center p-4 gap-4 border-green-400 shadow-xl z-[1000px] rounded-md h-[400px] -translate-y-[20px]'>
              <input type="text" placeholder='*tên'  className='w-[80%] outline-none rounded-sm pl-4 border-[1px]  border-gray-300  h-[40px]'/>
              <input type="text" placeholder='*số điện thoại' className='w-[80%] outline-none rounded-sm pl-4 border-[1px]  border-gray-300  h-[40px]'/>
              <button className='px-10 rounded-lg py-2 bg-green-600 text-white hover:scale-105'>Bắt đầu cuộc trò chuyện </button>
          </div>
      </div>
      <div onClick={handleCLickOpen} className='w-12 fixed z-[1000] bottom-6 right-6 h-12 bg-green-500 shadow-2xl rounded-full th-fl '>
        <Icon icon="iconoir:xmark" color='white' width={30} height={30} />
      </div>
   </>
  )
}

export default Chat