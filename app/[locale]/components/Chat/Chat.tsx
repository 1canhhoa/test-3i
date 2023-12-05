import React, { useState } from 'react'
import Image from 'next/image'
import logo3i from '../../../../public/images/logo/logo3i.png'
import { Icon } from '@iconify/react';
interface ChatProps {
  handleCLickOpen: () => void;
  pageName: string
}
const Chat: React.FC<ChatProps> = ({ handleCLickOpen, pageName }) => {
  const [startChat, setStartChat] = useState<boolean>(false)

  return (
    <>
      {!startChat && < div className='w-[500px] flex flex-col justify-start items-center bg-gray-100 z-[1000] fixed bottom-20 right-6 h-[500px] rounded-lg shadow-md'>
        <div className="p-10 gap-2 rounded-tl-lg rounded-tr-lg bg-green-400 text-center flex justify-center items-center flex-col">
          <Image src={logo3i} width={30} height={30} alt="sss" />
          <div className='font-medium text-lg  text-white'>Bạn vui lòng điền vào biểu mẫu dưới đây để các nhân viên
            hỗ trợ tốt hơn </div>
        </div>
        <div className='w-[450px] bg-white border-[1px] flex flex-col justify-start items-center p-4 gap-4 border-green-400 shadow-xl z-[1000px] rounded-md h-[400px] -translate-y-[20px]'>
          <input type="text" placeholder='*tên' className='w-[80%] outline-none rounded-sm pl-4 border-[1px]  border-gray-300  h-[40px]' />
          <input type="text" placeholder='*số điện thoại' className='w-[80%] outline-none rounded-sm pl-4 border-[1px]  border-gray-300  h-[40px]' />
          <button onClick={() => setStartChat(true)} className='px-10 rounded-lg py-2 bg-green-600 text-white hover:scale-105' > Bắt đầu cuộc trò chuyện </button>
        </div>
      </div >}
      {
        startChat &&
        < div className='border-[1px] border-gray-200 w-[500px] flex flex-col justify-around items-center bg-gray-100 z-[1000] fixed bottom-20 right-6 h-[500px] rounded-lg shadow-md'>
          <div className="p-4 gap-2 rounded-tl-lg rounded-tr-lg bg-green-400 border-[1px] border-gray-200 w-full text-center flex justify-center items-center flex-col">
            <div className=' p-6 rounded-full bg-gray-50 border-[1px] border-gray-300'>
              <Image src={logo3i} className='' width={30} height={30} alt="sss" />
            </div>
            <div className='font-semibold text-lg  text-white'>đội ngũ support 3i</div>
          </div>
          <div className='h-[250px] w-full'>
            <div className='w-fit text-start mx-2 '>
              <div className='text-start px-4 py-2 rounded-lg th-bd bg-gray-300'> khách hàng đang quan tâm đến sản phẩm {pageName} </div>
            </div>
          </div>
          <form className=' min-h-[50px] w-full px-2 flex items-center justify-center gap-2'>
            <Icon icon="material-symbols:image" className='h-10 w-10' color='#22c55e' />
            <div className='border-[1px] border-gray-300 w-full h-[90%] pl-4 bg-[#f5f5f5]  rounded-full flex justify-center items-center'>
              <input placeholder='enter...' type="text" className='bg-[#f5f5f5] outline-none w-full h-full' />
              <Icon icon="mdi:emoticon" className='h-10 w-10' color='#22c55e' />
            </div>
            <button><Icon icon="material-symbols:send" className='h-10 w-10' color='#22c55e' /></button>
          </form >
        </div >
      }
      <div onClick={handleCLickOpen} className='w-12 fixed z-[1000] bottom-6 right-6 h-12 bg-green-500 shadow-2xl rounded-full th-fl '>
        <Icon icon="iconoir:xmark" color='white' width={30} height={30} />
      </div>
    </>
  )
}

export default Chat