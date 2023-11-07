import Image from "next/image";
import Link from "next/link";

import LogoLight from "@/public/images/logo/logo.png";
import { getCurrentYear } from "../../utils/util";
import {
  MdOutlineMailOutline,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 mt-12 bg-[green] bg-opacity-5 pt-16 md:pt-20 "
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:px-[100px]">
            <div className="mb-12 w-full lg:mb-2">
              <Link href="/" className="mb-8 inline-block max-w-[400px]">
                <Image
                  src={LogoLight}
                  alt="logo"
                  className="w-full dark:hidden"
                  width={362}
                  height={65}
                />
                <Image
                  src="images/logo/logo.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-5/12">
              <div className="mb-12 max-w-[400px] lg:mb-16">
                <h2 className="mb-[20px] text-[1.2rem] font-bold uppercase">
                  Vị trí các cơ sở
                </h2>
                <ul className="mb-9 text-base font-medium leading-relaxed ">
                  <li className="mb-[15px]">
                    <span className="mb-[5px] text-[1rem] font-bold text-black dark:text-white">
                      HÀ NỘI (HEADQUARTER):
                    </span>
                    <div className="mt-[10px] flex items-center">
                      <MdOutlineLocationOn className="mr-2 text-xl" />
                      <span className=" inline-block font-normal">
                        Nhà B1-4 Khu đô thị Hạ Đình - Thanh Xuân - Hà Nội
                      </span>
                    </div>
                  </li>
                  <li className="mb-[15px]">
                    <span className="mb-[5px] text-[1rem] font-bold text-black dark:text-white">
                      HỒ CHÍ MINH:
                    </span>
                    <div className="mt-[10px] flex">
                      <MdOutlineLocationOn className="mt-1 mr-2 text-2xl" />
                      <span className=" inline-block font-normal">
                        Số 23-25 Trần Nhật Duật, Phường Tân Định, Quận 1, Tp Hồ
                        chí Minh
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-7/12 xl:w-7/12">
              <div className="mb-[20px] w-full xl:px-12">
                <div className="px-4">
                  <h2 className="mb-[10px] text-[1.2rem] font-bold uppercase">
                    Liên hệ với chúng tôi
                  </h2>
                  <ul className="mb-[30px] text-base font-medium leading-relaxed ">
                    <li className="mb-[5px] flex items-center">
                      <MdOutlineMailOutline className="mr-[7px] text-xl" />
                      <span className="mr-[7px]">Email:</span>
                      <a
                        href="mailto: info@3i.com.vn"
                        className="inline-block  font-normal hover:text-primary"
                      >
                        info@3i.com.vn
                      </a>
                    </li>
                    <li className="mb-[5px] flex items-center">
                      <MdOutlineLocalPhone className="mr-[7px] text-xl" />
                      <span className="mr-[7px]">Mua hàng:</span>
                      <a
                        href="tel: (+84) 0904322883"
                        className="inline-block  font-normal hover:text-primary"
                      >
                        (+84) 0904322883
                      </a>
                    </li>
                    <li className="mb-[5px] flex items-center">
                      <MdOutlineLocalPhone className="mr-[7px] text-xl" />
                      <span className="mr-[7px]">Tuyển dụng:</span>
                      <a
                        href="mailto: (+84) 0904322883"
                        className="inline-block  font-normal hover:text-primary"
                      >
                        (+84) 0904322883
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center px-4">
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 50 50"
                      className="fill-current"
                    >
                      <path d="M 25 2 C 12.3 2 2 12.3 2 25 C 2 37.7 12.3 48 25 48 C 37.7 48 48 37.7 48 25 C 48 12.3 37.7 2 25 2 z M 25 4 C 36.6 4 46 13.4 46 25 C 46 36.6 36.6 46 25 46 C 13.4 46 4 36.6 4 25 C 4 13.4 13.4 4 25 4 z M 26.5 10 C 23.8 10 21.799609 10.900391 20.599609 12.400391 C 19.399609 13.900391 19 15.999219 19 18.199219 L 19 20 L 17 20 C 16.5 20 16 20.5 16 21 L 16 26 C 16 26.5 16.5 27 17 27 L 19 27 L 19 39 C 19 39.5 19.5 40 20 40 L 26 40 C 26.5 40 27 39.5 27 39 L 27 27 L 31 27 C 31.125 27 31.244141 26.98125 31.353516 26.945312 C 31.681641 26.8375 31.925 26.574219 32 26.199219 L 33 21.199219 C 33.1 20.899219 33.000781 20.600391 32.800781 20.400391 C 32.600781 20.100391 32.3 20 32 20 L 27 20 L 27 17.800781 C 27 17.550781 27.000391 17.424609 27.025391 17.349609 C 27.050391 17.274609 27.099219 17.249219 27.199219 17.199219 C 27.299219 17.099219 27.899219 17 28.699219 17 L 32 17 C 32.5 17 33 16.5 33 16 L 33 12 C 33 11.6 32.700781 11.199609 32.300781 11.099609 C 32.300781 11.099609 29.4 10 26.5 10 z M 26.599609 11.900391 C 28.499609 11.900391 30.2 12.399219 31 12.699219 L 31 15 L 28.699219 15 C 27.599219 15 26.799609 15.099609 26.099609 15.599609 C 25.399609 15.999609 25 16.900781 25 17.800781 L 25 21 C 25 21.5 25.5 22 26 22 L 30.800781 22 L 30.199219 25 L 26 25 C 25.875 25 25.75 25.03125 25.632812 25.085938 C 25.28125 25.25 25 25.625 25 26 L 25 38 L 21 38 L 21 26 C 21 25.875 20.96875 25.75 20.914062 25.632812 C 20.75 25.28125 20.375 25 20 25 L 18 25 L 18 22 L 20 22 C 20.125 22 20.25 21.96875 20.367188 21.914062 C 20.71875 21.75 21 21.375 21 21 L 21 18.199219 C 21 17.699219 21.024219 17.232031 21.074219 16.792969 C 21.224219 15.475781 21.599219 14.424609 22.199219 13.599609 C 22.999219 12.599609 24.299609 11.900391 26.599609 11.900391 z"></path>
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 50 50"
                      className="fill-current"
                    >
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 30.693359 14.058594 C 27.093054 14.058594 24.152344 16.998175 24.152344 20.597656 C 24.152344 20.622956 24.159856 20.646615 24.160156 20.671875 C 20.346071 20.164308 16.972078 18.281343 14.654297 15.439453 A 1.0001 1.0001 0 0 0 13.015625 15.568359 C 12.452734 16.536013 12.130859 17.663768 12.130859 18.857422 C 12.130859 19.919597 12.426761 20.906321 12.878906 21.796875 A 1.0001 1.0001 0 0 0 12.085938 22.773438 L 12.085938 22.84375 C 12.085938 24.777783 12.990963 26.452789 14.332031 27.652344 A 1.0001 1.0001 0 0 0 14.072266 28.677734 C 14.630704 30.41466 15.93241 31.774479 17.5625 32.541016 C 16.258408 33.150994 14.861087 33.587891 13.320312 33.587891 C 12.909515 33.587891 12.510187 33.564538 12.119141 33.517578 A 1.0001 1.0001 0 0 0 11.460938 35.353516 C 14.065405 37.024617 17.166795 38 20.490234 38 C 25.860882 38 30.105907 35.743874 32.943359 32.525391 C 35.780812 29.306907 37.253906 25.153083 37.253906 21.240234 C 37.253906 21.122724 37.248494 21.01029 37.246094 20.894531 C 38.219933 20.11274 39.135827 19.250444 39.830078 18.210938 A 1.0001 1.0001 0 0 0 38.705078 16.699219 C 38.866705 16.38464 39.095491 16.111528 39.205078 15.769531 A 1.0001 1.0001 0 0 0 37.744141 14.603516 C 36.869551 15.121731 35.886845 15.463383 34.869141 15.701172 C 33.725772 14.727018 32.30529 14.058594 30.693359 14.058594 z M 30.693359 16.058594 C 32.005547 16.058594 33.178321 16.606981 34.005859 17.490234 A 1.0001 1.0001 0 0 0 34.927734 17.789062 C 35.079649 17.759183 35.201682 17.662443 35.351562 17.626953 C 35.332963 17.638463 35.321514 17.658672 35.302734 17.669922 A 1.0001 1.0001 0 0 0 35.832031 19.527344 C 35.763341 19.579724 35.722335 19.662323 35.652344 19.712891 A 1.0001 1.0001 0 0 0 35.238281 20.566406 C 35.247781 20.79066 35.253906 21.015832 35.253906 21.240234 C 35.253906 24.645385 33.939657 28.371609 31.443359 31.203125 C 28.947059 34.03464 25.308587 36 20.490234 36 C 18.837046 36 17.2817 35.669687 15.800781 35.167969 C 17.643043 34.77762 19.387244 34.125203 20.816406 33.003906 A 1.0001 1.0001 0 0 0 20.21875 31.21875 C 18.803099 31.19304 17.712807 30.392345 16.898438 29.359375 C 17.197615 29.320665 17.507049 29.319275 17.792969 29.240234 A 1.0001 1.0001 0 0 0 17.724609 27.294922 C 16.073199 26.96164 14.784996 25.723029 14.3125 24.121094 C 14.7378 24.223448 15.110445 24.452375 15.5625 24.466797 A 1.0001 1.0001 0 0 0 16.150391 22.636719 C 14.930654 21.821102 14.130859 20.439709 14.130859 18.857422 C 14.130859 18.530423 14.306329 18.270522 14.371094 17.964844 C 17.211591 20.776703 20.99183 22.6429 25.248047 22.857422 A 1.0001 1.0001 0 0 0 26.271484 21.628906 C 26.193654 21.29976 26.152344 20.956387 26.152344 20.597656 C 26.152344 18.079138 28.173664 16.058594 30.693359 16.058594 z"></path>
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 50 50"
                      className="fill-current"
                    >
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z"></path>
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-[#FF0000]"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 50 50"
                      className="fill-current"
                    >
                      <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex w-full xl:px-12">
                <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                  <div className="mb-12 lg:mb-16">
                    <h2 className="mb-6 text-lg font-bold  text-black dark:text-white">
                      Liên kết nhanh
                    </h2>
                    <ul>
                      <li>
                        <a
                          href="/"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Trang chủ{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/en/careers"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Tuyển dụng{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/en/contact"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Liên hệ{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-4/12">
                  <div className="mb-12 lg:mb-16">
                    <h2 className="mb-6 text-lg font-bold  text-black dark:text-white">
                      Sản phẩm & dịch vụ
                    </h2>
                    <ul>
                      <li>
                        <a
                          href="/en/products/2706"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Sản phẩm{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/en/services"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Dịch vụ{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/en/technology/2727"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Công nghệ{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
                  <div className="mb-12 lg:mb-16">
                    <h2 className="mb-6 text-lg font-bold  text-black dark:text-white">
                      Hỗ trợ
                    </h2>
                    <ul>
                      <li>
                        <a
                          href="/"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Hỗ trợ kĩ thuật{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Điều khoản sử dụng{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/en/about-us"
                          className="mb-4 inline-block text-base font-medium  hover:text-primary"
                        >
                          {" "}
                          Bảng giá{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[green]/10 py-8">
          <div className="container">
            <p className="text-center text-base  dark:text-white">
              © Copyright {getCurrentYear()} 3I. All right reserved
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
