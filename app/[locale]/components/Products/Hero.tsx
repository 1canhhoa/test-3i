"use client"
import React ,{useEffect,useState} from 'react'
import imgHeroProduct from '../../../../public/images/products/abc.jpeg'
import dsds from '../../../../public/images/products/vtcetdhdn.jpg'
import Image from 'next/image'
import { Icon } from '@iconify/react';
const Hero = ({pageName}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Seo Marketing", "Responsive", "UI/UX Designer"];
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div className='relative w-full h-[900px]  flex justify-center items-start'>
        <Image src={imgHeroProduct} className='w-full h-[900px] absolute' alt="sasa" />
        <div className=' px-8 flex lg:flex-row absolute flex-col items-center gap-2 lg:justify-around lg:items-center w-full mt-[100px]'>
          <h1 className=' text-[rgb(59,54,99)] max-w-[600px] ease-linear duration-150 h-[160px] text-4xl lg:text-5xl font-bold'>
            <div className='text-base md:text-lg mb-4 font-medium tracking-wider'>WELLCOME TO 3I SOLUTIONS</div>
              {pageName}<br/>
            <span className="txt-rotate min-h-[32px] pt-10" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                <span className="wrap min-h-[32px] ">{text}</span>
            </span>
          </h1>
          <div className='relative z-0 flex items-start'>
            <Icon icon="teenyicons:tv-outline"  fontSize={600} className=' z-[1000]' color='#99f6e4'/>
            <Image src={dsds}  alt='ksksk' className='w-[520px] top-[80px] left-[40px] absolute shadow-sm rounded-xl h-[360px]' />
          </div>
        </div>

    </div>
  )
}

export default Hero