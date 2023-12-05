import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import Chat from './Chat';
const ChatIcon = ({ pageName }: { pageName: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [openChat,setOpenchat] = useState(false)
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const [openChat, setOpenchat] = useState<boolean>(false)

  const handleCLickOpen = (): void => {
    setOpenchat(prev => !prev)
  }
  return (
    <>
      {!openChat && <div className={'fixed bottom-8 gap-1 flex flex-col right-7 z-[1000] '}>
        <div onClick={handleCLickOpen} className='w-fit h-fit p-1 shadow-2xl bg-white rounded-full th-fl '>
          <Icon icon="logos:messenger" color='white' width={42} height={42} />
        </div>
        <div onClick={handleCLickOpen} className=' w-fit h-fit p-1 bg-white shadow-2xl rounded-full th-fl '>
          <Icon icon="logos:facebook" color='white' width={42} height={42} />
        </div>
        <div onClick={handleCLickOpen} className='w-12 h-12 bg-green-500 shadow-2xl rounded-full th-fl '>
          <Icon icon="fa6-solid:message" color='white' width={20} height={20} />
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