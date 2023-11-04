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
        top: "50%",
        right: "2%",
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
        top: "50%",
        left: "1%",
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
