"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react';
import Chat from './Chat';
const ChatIcon = ({ pageName }: { pageName: string }) => {
  const [openChat, setOpenchat] = useState<boolean>(false)
  const [height, setHeight] = useState<boolean>(false)
  const [openIconChat, setOpenIconChat] = useState<boolean>(true)
  const handleCLickOpen = (): void => {
    setOpenchat(prev => !prev)
  }
  const handleMouseEnter = () => {
    setOpenIconChat(true);
  };  
  const handleMouseEnter2 = () => {
    setHeight(true);
    setOpenIconChat(true);

  };

  const handleMouseLeave = () => {
    setOpenIconChat(false);
    setHeight(false);
  }
  return (
    <>
      {!openChat && <div className={'fixed bottom-7 right-7 th-bd gap-1 flex justify-center items-center flex-col z-[1000] '}>
        <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave} className={' fixed bottom-[80px] ease-linear duration-100  w-fit h-fit p-1 shadow-2xl bg-white rounded-full th-fl ' + (openIconChat?'-translate-y-[216%]':'-translate-y-0')}>
          <Icon icon="logos:messenger" color='white' width={42} height={42} />
        </div>
        <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave} className={' fixed bottom-[80px] w-fit ease-linear duration-100  h-fit p-1 bg-white shadow-2xl rounded-full th-fl ' + (openIconChat?'-translate-y-[108%]':'-translate-y-0') }>
          <Icon icon="logos:facebook" color='white' className='' width={42} height={42} />
        </div>

       <div className={' ' + (height?'pt-52':'pt-0')} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave}>
          <div  className='w-[50px] bg-black animate-spin h-[50px] shadow-2xl rounded-full th-fl '>
            <Icon  icon="vaadin:option-a" className='' color='#7c3aed' width={30} height={30} />
          </div>
       </div>
        <div onClick={handleCLickOpen} className='w-12 h-12 first-line:shadow-2x rounded-full th-fl '>
          <Icon icon="ic:baseline-message" color='#7c3aed' width={44} height={44} />
        </div>
      </div>}
      {openChat &&
        <div className='flex flex-col'>
          <Chat pageName={pageName} handleCLickOpen={handleCLickOpen} />
        </div>}
    </>
  )
}

export default ChatIcon