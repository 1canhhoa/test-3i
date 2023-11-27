"use client";
import SectionTitle from "../Common/SectionTitle";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./HomePageSlide.css";
import Sl2 from "@/public/images/HomeSlides/bia.png";
import Sl3 from "@/public/images/HomeSlides/slide2.png";
// import Sl7 from "@/public/images/HomeSlides/ei.png";
import Image from "next/image";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const CustomPrevArrow: React.FC<CustomArrowProps> = ({
  className,
  onClick,
}) => (
  <div className={`${className} custom-arrow custom-prev`} onClick={onClick}>
    <SlArrowLeft size={60} />
  </div>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({
  className,
  onClick,
}) => (
  <div className={`${className} custom-arrow custom-next`} onClick={onClick}>
    <SlArrowRight size={60} />
  </div>
);

export default function HomeSlides() {
  let settings = {
    fade: true,
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  const data = [Sl2, Sl3];
  return (
    <>
      <section id="features" className="mt-[26px] z-0 bg-[green]/[.03] py-16">
        <div style={{ marginBottom: "auto" }}>
          <Slider {...settings}>
          <div className="flex relative">
              <Image alt="slide" src={Sl2} className="m-auto" width={4903} height={882}></Image>
              <div className="absolute z-10 top-[5%] left-[55%] capitalize">
                <div className=" shadow-lg  text-gray-200 p-4 ">
                <p className="text-white text-7xl font-bold drop-shadow-xl "style={{textShadow: "2px 2px green"}}>Keep Business Safe</p>
                <p className="text-white text-7xl font-bold drop-shadow-xl  "style={{textShadow: "2px 2px green"}}>And Ensure High</p>
                <p className="text-white text-7xl font-bold drop-shadow-xl   "style={{textShadow: "2px 2px green"}}>Avaibility.</p>
                </div>
                
                <div className="mt-4">
                  <button className="border-2 border-[#0f7d02] bg-[#0f7d02] p-3 text-white hover:bg-[#735102] hover:border-[#735102] rounded-md">More about us <BsFillArrowRightCircleFill className="inline text-2xl ml-3"/></button>
                  <button className="border-2 border-white bg-white p-3 text-black hover:bg-[#735102] hover:border-[#735102] hover:text-white rounded-md ml-5 min-w-[160px]">Our Services</button>
                </div>
              </div>
          </div>
          <div className="flex relative">
              <Image alt="slide" src={Sl3} className="m-auto" width={4903} height={882}></Image>
              <div className="absolute z-10 top-[15%] left-[50%] capitalize">
              <div className=" shadow-lg  text-gray-200 p-4 ">
                <p className="text-[#0279cf] text-7xl font-bold drop-shadow-xl" style={{textShadow: "2px 2px red"}}>We run all kinds of</p>
                <p className="text-[#0279cf] text-7xl font-bold drop-shadow-xl" style={{textShadow: "2px 2px red"}}>IT Services that</p>
                <p className="text-[#0279cf] text-7xl font-bold drop-shadow-xl" style={{textShadow: "2px 2px red"}}>vow your success</p>
                </div>
                <div className="mt-4">
                  <button className="border-2 border-[#0f7d02] bg-[#0f7d02] p-3 text-white hover:bg-[#735102] hover:border-[#735102] rounded-md">More about us <BsFillArrowRightCircleFill className="inline text-2xl ml-3"/></button>
                  <button className="border-2 border-white bg-white p-3 text-black hover:bg-[#735102] hover:border-[#735102] hover:text-white rounded-md ml-5 min-w-[160px]">Our Services</button>
                </div>
              </div>
          </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
