"use client";
import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Sl2 from "@/public/images/HomeSlides/bia.png";
import Sl3 from "@/public/images/HomeSlides/slide2.png";
// import Sl7 from "@/public/images/HomeSlides/ei.png";
import Image from "next/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "100",
        position: "absolute",
        top: "40%",
        right: "4%",
        font: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "100",
        position: "absolute",
        top: "40%",
        left: "0%",
        font: "30px",
      }}
      onClick={onClick}
    />
  );
}

export default function HomeSlides() {
  let settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const data = [Sl2, Sl3];
  return (
    <>
      <section id="features" className="mt-[26px] bg-[green]/[.03] py-16">
        <div style={{ marginBottom: "auto" }}>
          <Slider {...settings}>
          <div className="flex relative">
                        <Image alt="slide" src={Sl2} className="m-auto w-full"></Image>
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
                        <Image alt="slide" src={Sl3} className="m-auto w-full"></Image>
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
