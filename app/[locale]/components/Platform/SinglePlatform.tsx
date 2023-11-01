import { Feature } from "@/types/feature";
import { join } from "path";
import { json } from "stream/consumers";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import Image from "next/image";

const SinglePlatform = ({ feature }: any) => {
  return (
    <div className="w-full h-[500px] max-[468px]:h-[600px]">
      <div className="w-full h-[90%] wow fadeInUp shadow-lg p-[20px] flex flex-col hover:cursor-pointer hover:bg-[#dcf7ef]" data-wow-delay=".15s">
        <div className="mb-10 flex h-150 w-auto items-center justify-center rounded-md bg-opacity-10 text-primary">
          <Image
            alt=""
            src={feature.img}
            className="h-[150px] w-auto md:w-72 xl:w-48"
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white text-center">
          {feature.title}
        </h3>
        <p className="pr-[10px] text-lg font-medium leading-relaxed text-center uppercase" style={{color: feature.colorIntro}}>
          {feature.intro}
        </p>
        <div className="text-center mt-auto mb-3">
            <button className="border-2 p-2 rounded-[30px] text-[#1a86bc]"><span className="ml-3">Xem chi tiết </span><BsFillArrowRightCircleFill className="inline mb-1 text-xl ml-4"/></button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlatform;
