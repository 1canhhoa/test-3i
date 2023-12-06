"use client"
import React ,{useEffect,useState} from 'react'
import imgHeroProduct from '../../../../public/images/products/abc.jpeg'
import dsds from '../../../../public/images/products/vtcetdhdn.jpg'
import Image from 'next/image'
import { Icon } from '@iconify/react';
const Hero = (
  {
    pageName,
    metaImage
}:{
  pageName:string,
  metaImage:string
}) => {
  return (
    <div className='relative w-full h-[900px]  flex justify-center items-start'>
        <Image src={imgHeroProduct} className='w-full h-[900px] absolute' alt="sasa" />
        <div className=' px-8 flex lg:flex-row absolute flex-col items-center gap-2 lg:justify-around lg:items-center w-full mt-[100px]'>
          <h1 className=' text-[rgb(59,54,99)] max-w-[600px] ease-linear duration-150 h-[160px] text-2xl sm:text-4xl lg:text-5xl font-bold'>
            <div className='text-base md:text-lg mb-4 font-medium tracking-wider'>WELLCOME TO 3I SOLUTIONS</div>
              {pageName}<br/>
          </h1>
          <div className='relative z-0 flex items-center'>
            <Icon icon="teenyicons:tv-outline"  className=' text-[370px] md:text-[600px] z-[1000]' color='#dcf3ca'/>
            <Image src={metaImage} width={700} height={700}  alt='ksksk' className='w-[300px] h-[220px] ease-linear duration-100 md:w-[520px] md:h-[360px] top-[50px] left-[35px] md:top-[80px] md:left-[40px] absolute shadow-sm rounded-xl ' />
          </div>
        </div>

    </div>
  )
}

export default Hero