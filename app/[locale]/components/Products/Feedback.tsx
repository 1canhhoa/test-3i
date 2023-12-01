"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import {  } from 'swiper/modules';
import { FreeMode, Autoplay,Pagination, Navigation } from "swiper";
import SpaceCity1 from "../../../../public/images/products/ggg1.png";
import { FaQuoteLeft } from "react-icons/fa";
import {
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";
const Feedback = () => {
  const ServiceData = [
    {
      icon: RxCrop,
      title: "Development",
      content: "Tôi thực sự thích cách bạn diễn đạt ý kiến của mình. Nó rất rõ ràng và thú vị!,Câu chuyện này làm tôi cười nghiêng ngả. Bạn có khả năng viết chuyện tuyệt vời!",
      backgroundImage: SpaceCity1,
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Tôi hoàn toàn đồng ý với quan điểm của bạn. Đây là một vấn đề quan trọng mà chúng ta cần phải thảo luận thêm",
      backgroundImage: SpaceCity1,
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Cảm ơn bạn đã chia sẻ thông tin này. Tôi đã học được nhiều điều mới!,Ôi, tôi cảm thấy như mình đã trải qua cùng bạn mỗi lần đọc bài viết của bạn. Rất chân thành và chia sẻ!",
      backgroundImage: SpaceCity1,
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Bức tranh mà bạn mô tả quá tuyệt vời! Mình muốn có khả năng nghệ thuật như vậy.,Cách bạn giải quyết vấn đề này thực sự thông minh. Tôi sẽ thử áp dụng nó vào cuộc sống hàng ngày của mình",
      backgroundImage: SpaceCity1,
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Nói chung, tôi rất ấn tượng với kiến thức chuyên sâu của bạn về chủ đề này. Bạn là nguồn thông tin đáng tin cậy,Bài hát này làm tôi nhớ lại những kỷ niệm tuyệt vời. Cảm ơn bạn đã đưa ra sự chia sẻ",
      backgroundImage: SpaceCity1,
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Tôi hoàn toàn đồng ý với quan điểm của bạn về vấn đề xã hội này. Chúng ta cần sự thay đổi, và ý kiến của bạn là một bước quan trọng!",
      backgroundImage: SpaceCity1,
    },
  ];
  return (
    <div className=" flex items-center justify-center flex-col h-[900px] bg-gray-100">
      <div className='flex flex-col w-ful py-10 my-[50px] text-md md:text-2xl font-semibold bg-gray-200 th-fl'>
        được tin tưởng sử dụng bởi hàng trăm tổ chức,cá nhân 
      <div className='text-sm font-normal px-24 md:px-48 text-center'>Sự tin tưởng là yếu tố chính để xây dựng văn hóa tổ chức tích cực, thuận lợi cho sự tăng trưởng và phát triển. Các nhóm làm việc hiệu quả, có sự tương tác tích cực, thường tạo ra kết quả tích cực cho tổ chức.
      </div>
      </div>
      <Swiper
        effect={'silde'}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1228: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          1700: {
            slidesPerView: 3,
            spaceBetween: 150
          },
          1800:{
            slidesPerView: 3,
            spaceBetween: 189
          }
        }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        // freeMode={true}
        // modules={[FreeMode, Pagination]}
        modules={[FreeMode, Autoplay ,Pagination, Navigation]}
        pagination={{ el: '.swiper-pagination', dynamicBullets: false, clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          // clickable: true,
        }}
        className=" max-w-[400px] md:max-w-[70%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="   max-w-[400px] text-black h-[500px] md:max-w-[370px] lg:h-[500px] lg:max-w-[362px] xl:max-w-[400px] flex flex-col gap-6 mb-10 group relative shadow-lg bg-white rounded-xl px-6 py-8    overflow-hidden cursor-pointer">
              <div
                className="flex  flex-col justify-center items-center gap-2 inset-0 bg-cover bg-center"
              >
                <Image src={SpaceCity1} className='h-24 border-[1px] border-gray-200 w-24 rounded-full' alt="" />
                <div className='text-lg font-semibold'>Emma Chamberlain</div>
              </div>
              <div className='flex justify-end'>
                  <FaQuoteLeft color='orange' className=''/>
              </div>
              <div className="relative flex flex-col gap-3">
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>

        ))}
        <div className="
        swiper-button-prev after:text-xl after:text-white z-[1000]
        hover:bg-opacity-100
        w-[50px] h-[50px] th-fl bg-black bg-opacity-25 rounded-full absolute  left-0 top-[44%] -translate-y-1/2">
          <IoIosArrowBack size={20} color="white" />
        </div>
        <div className="th-fl z-[1000] hover:bg-opacity-100 top-[44%] bg-opacity-25 swiper-button-next after:text-xl after:bg-white w-[50px] h-[50px] bg-black rounded-full absolute  right-0 -translate-y-1/2">
          <IoIosArrowForward size={20} color="white" />
        </div>
        <div className="swiper-pagination">

        </div>
      </Swiper>
    </div>
  )
}

export default Feedback