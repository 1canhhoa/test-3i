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
    slidesToShow: 1,
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
      <section id="features" className="mt-[26px] bg-[green]/[.03] py-16">
        <div style={{ marginBottom: "auto" }}>
          <Slider {...settings}>
            <div className="relative flex">
              <Image alt="slide" src={Sl2} className="m-auto w-full"></Image>
              <div className="absolute top-[20%] left-[50%] z-10 capitalize">
                <p className="text-shadow-md text-7xl font-bold text-white drop-shadow-2xl">
                  Keep Business Safe
                </p>
                <p className="text-7xl font-bold text-white drop-shadow-2xl">
                  And Ensure High
                </p>
                <p className="text-7xl font-bold text-white drop-shadow-2xl">
                  Avaibility.
                </p>
                <div className="mt-4">
                  <button className="rounded-md border-2 border-[#0f7d02] bg-[#0f7d02] p-3 text-white hover:border-[#735102] hover:bg-[#735102]">
                    More about us{" "}
                    <BsFillArrowRightCircleFill className="ml-3 inline text-2xl" />
                  </button>
                  <button className="ml-5 min-w-[160px] rounded-md border-2 border-white bg-white p-3 text-black hover:border-[#735102] hover:bg-[#735102] hover:text-white">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex">
              <Image alt="slide" src={Sl3} className="m-auto w-full"></Image>
              <div className="absolute top-[15%] left-[50%] z-10 capitalize">
                <p className="text-7xl font-bold text-[#0279cf] drop-shadow-xl">
                  We run all kinds of
                </p>
                <p className="text-7xl font-bold text-[#0279cf] drop-shadow-xl">
                  IT Services that
                </p>
                <p className="text-7xl font-bold text-[#0279cf] drop-shadow-xl">
                  vow your success
                </p>
                <div className="mt-4">
                  <button className="rounded-md border-2 border-[#0f7d02] bg-[#0f7d02] p-3 text-white hover:border-[#735102] hover:bg-[#735102]">
                    More about us{" "}
                    <BsFillArrowRightCircleFill className="ml-3 inline text-2xl" />
                  </button>
                  <button className="ml-5 min-w-[160px] rounded-md border-2 border-white bg-white p-3 text-black hover:border-[#735102] hover:bg-[#735102] hover:text-white">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
