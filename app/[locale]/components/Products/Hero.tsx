"use client"
import React ,{useEffect,useState} from 'react'
import imgHeroProduct from '../../../../public/images/products/abc.jpeg'
import dsds from '../../../../public/images/products/vtcetdhdn.jpg'
import laptop from '../../../../public/images/products/laptop.jpeg'
import Image from 'next/image'
import next from 'next/types'
const Hero = () => {
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
    <div className='relative w-full h-[900px] flex justify-center items-start'>
        <Image src={imgHeroProduct} className='w-full h-[900px] absolute' alt="sasa" />
        {/* <Image src={dsds}  alt='ksksk' className='w-[700px] top-1/2 -translate-y-1/2 right-[200px] h-[500px] absolute' /> */}
      <div className='px-8 flex lg:flex-row flex-col items-center gap-8 absolute lg:justify-around lg:items-start w-full mt-[200px]'>
      {/* <h1 className='text-6xl text-[#3b3663] font-bold absolute top-1/3 left-[200px]'> */}
        <h1 className=' text-[#3b3663] h-[160px] text-6xl font-bold'>
          <div className='text-lg mb-4 font-medium'>WELLCOME TO 3I SOLUTIONS</div>
            {`Thiết Kế Website`}<br/>
          <span className="txt-rotate min-h-[32px] pt-10" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
              <span className="wrap min-h-[32px] ">{text}</span>
          </span>
        </h1>
        <Image src={dsds}  alt='ksksk' className='w-[550px] border-[5px] border-indigo-400 h-[350px] top-[20%]' />
        {/* <Image src={laptop}  alt='ksksk' className='w-[650px] border-[5px] border-indigo-400 h-[550px] top-[20%]' /> */}
      </div>
    </div>
  )
}

export default Hero