import Image from "next/image";
import SectionTitleFull from "../Common/SectionTitleFull";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-[green] bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="">
      <div className="container">
        <div
        //className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"
        >
          <div
            className="-mx-4 flex flex-col items-center text-center"
          >
            <div
            // className="w-full px-4 lg:w-2/3"
            >
              <SectionTitleFull
                title="Bảng giá theo gói"
                paragraph="Đăng ký theo gói để được hưởng mức giá hấp dẫn với nhiều ưu đãi kèm theo"
                mb="44px"
              />
              <div>
                <div className="flex">
                  <div className="max-w-sm w-1/5 rounded-2xl overflow-hidden shadow-2xl mx-3 "
                  // style={{
                  //   borderStyle: "solid",
                  //   borderColor: "red"
                  // }}
                  >
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 px-6 py-6 bg-[#8acb8a] rounded-lg text-3xl">Gói TimeSheet+</div>
                      <p className="text-gray-700 text-lg text-body-color">
                        Số hóa và tự động hóa chấm công, tính lương nhân sự
                      </p>
                      <br />
                    </div>
                    <div className="divider-wrap" data-alignment="default">
                      <div style={{ height: "50px" }} className="divider"></div>
                    </div>
                    <div className="wpb_wrapper">
                      <div className="packages">
                        <span style={{ fontWeight: "40px" }}>
                          Giá khi mua theo combo
                        </span>
                        <div id="text1">
                          <h2 className="pt-5 text-4xl text-orange font-semibold leading-loose">20.000 đ</h2>
                        </div>
                        <div>
                          <span className="text-body-color">/user/tháng</span>
                        </div>
                      </div>
                      <button className="bg-[#269126] rounded-lg text-white"><a className="px-6 flex"><span className=" py-4">ĐĂNG KÝ NGAY</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></a></button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bao gồm tính năng chấm công di động & tính lương trực tuyến</span>
                    </div>
                  </div>
                  <div className="max-w-sm w-1/5 rounded-2xl	 overflow-hidden shadow-2xl mx-3"
                  // style={{
                  //   borderStyle: "solid",
                  //   borderColor: "red"
                  // }}
                  >
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 px-6 py-6 bg-[#8acb8a] rounded-lg text-3xl">Gói HRM+</div>
                      <p className="text-gray-700 text-lg text-body-color">
                        Đầy đủ các chức năng phân hệ HRM+ giải quyết bài toán quản trị & phát triển nhân sự</p>
                    </div>
                    <div className="divider-wrap" data-alignment="default">
                      <div style={{ height: "20px" }} className="divider"></div>
                    </div>
                    <div className="wpb_wrapper">
                      <div className="packages" style={{ marginTop: "25px" }}>
                        <span style={{ fontWeight: "40px" }}>
                          Giá khi mua theo combo
                        </span>
                        <div id="text2">
                          <h2 className="pt-5 text-4xl text-orange font-semibold leading-loose">45.000 đ</h2>
                        </div>
                        <div>
                          <span className="text-body-color">/user/tháng</span>
                        </div>
                      </div>
                      <button className="bg-[#269126] rounded-lg text-white"><a className="px-6 flex"><span className=" py-4">ĐĂNG KÝ NGAY</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></a></button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        . Tặng phân hệ OFFICE+</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">. Sử dụng đầy đủ tính năng thuộc phân hệ HRM+</span>
                      {/*<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                    </div>
                  </div>
                  <div className="max-w-sm w-1/5 rounded-2xl overflow-hidden shadow-2xl mx-3 "
                  // style={{
                  //   borderStyle: "solid",
                  //   borderColor: "red"
                  // }}
                  >
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 px-6 py-6 bg-[#8acb8a] rounded-lg text-3xl">Gói WORK+</div>
                      <p className="text-gray-700 text-lg text-body-color">
                        Đầy đủ các chức năng phân hệ WORK+ giải quyết bài toán quản trị công việc & hiệu suất</p>
                    </div>
                    <div className="divider-wrap" data-alignment="default">
                      <div style={{ height: "20px" }} className="divider"></div>
                    </div>
                    <div className="wpb_wrapper">
                      <div className="packages">
                        <span style={{ fontWeight: "40px" }}>
                          Giá khi mua theo combo
                        </span>
                        <div id="text3">
                          <h2 className="pt-5 text-4xl text-orange font-semibold leading-loose">45.000 đ</h2>
                        </div>
                        <div>
                          <span className="text-body-color">/user/tháng</span>
                        </div>
                      </div>
                      <button className="bg-[#269126] rounded-lg text-white"><a className="px-6 flex"><span className=" py-4">ĐĂNG KÝ NGAY</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></a></button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">. Tăng phân hệ OFFOCE+</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">. Sử dụng đầy đủ tính năng thuộc phân hệ WORK+</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">. Không bao gồm tính năng FastCons</span>
                    </div>
                  </div>
                  <div className="max-w-sm w-1/5 rounded-2xl overflow-hidden shadow-2xl mx-3 "
                  // style={{
                  //   borderStyle: "solid",
                  //   borderColor: "red"
                  // }}
                  >
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 px-6 py-6 bg-[#8acb8a] rounded-lg text-3xl">Gói CRM+</div>
                      <p className="text-gray-700 text-lg text-body-color">
                        Đầy đủ các chức năng phân hệ CRM+ giải quyết bài toán tăng trưởng doanh thu, khách hàng</p>
                    </div>
                    <div className="divider-wrap" data-alignment="default">
                      <div style={{ height: "20px" }} className="divider"></div>
                    </div>
                    <div className="wpb_wrapper">
                      <div className="packages">
                        <span style={{ fontWeight: "40px" }}>
                          Giá khi mua theo combo
                        </span>
                        <div id="text4">
                          <h2 className="pt-5 text-4xl text-orange font-semibold leading-loose">60.000 đ</h2>
                        </div>
                        <div>
                          <span className="text-body-color">/user/tháng</span>
                        </div>
                      </div>
                      <button className="bg-[#269126] rounded-lg text-white"><a className="px-6 flex"><span className=" py-4">ĐĂNG KÝ NGAY</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></a></button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">. Tặng phân hệ OFFICE+</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">. Sử dụng đầy đủ tính năng thuộc phân hệ CRM+</span>
                    </div>
                  </div>
                  <div className="max-w-sm w-1/5 rounded-2xl overflow-hidden shadow-2xl mx-3 "
                  // style={{
                  //   borderStyle: "solid",
                  //   borderColor: "red"
                  // }}
                  >
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 px-6 py-6 bg-[#8acb8a] rounded-lg text-3xl">Gói SME+</div>
                      <p className="text-gray-700 text-lg text-body-color">
                        Đầy đủ 4 phân hệ WORK+, OFFICE+, HRM+, CRM+ cho doanh nghiệp nhỏ và vừa</p>
                    </div>
                    <div className="divider-wrap" data-alignment="default">
                      <div style={{ height: "50px" }} className="divider"></div>
                    </div>
                    <div className="wpb_wrapper">
                      <div className="packages">
                        <span style={{ fontWeight: "40px" }}>
                          Giá khi mua theo combo
                        </span>
                        <div id="text5">
                          <h2 className="pt-5 text-4xl text-orange font-semibold leading-loose">100.000 đ</h2>
                        </div>
                        <div>
                          <span className="text-body-color">/user/tháng</span>
                        </div>
                      </div>
                      <button className="bg-[#269126] rounded-lg text-white"><a className="px-6 flex"><span className=" py-4">ĐĂNG KÝ NGAY</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></a></button>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">. Sử dụng đầy đủ 4 phân hệ WORK+, HRM+, CRM+, OFFICE+</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">. Không bao gồm tính năng FastCons</span>
                    </div>
                  </div>
                </div>
                <a className="flex text-[#53e153] text-2xl pt-5 pl-5  hover:text-[black]">
                  <span className="px-3 py-3.5">Xem bảng so sánh tính năng chi tiết giữa các gói </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="flex rounded-2xl shadow-2xl">
                <div className="w-3/5">
                  <div>
                    <div className="px-4 py-4 ">
                      <div className="font-bold mb-2 px-4 py-6 bg-[#8acb8a] rounded-lg text-3xl" style={{ width: "400px" }}>Gói FastCons</div>
                      <p className="font-bold text-[green] text-6xl" style={{
                        width: "550px",
                      }}>
                        3i for Construction
                      </p>
                      <br />
                    </div>
                    {/* <div className="divider-wrap" data-alignment="default">
                      <div style={{ height: "20px" }} className="divider"></div>
                    </div> */}
                    <div className="wpb_wrapper">
                      <div className="packages" style={{
                        fontSize: "30px",
                        width: "800px"
                      }}>
                        <span style={{ fontWeight: "400px" }}>
                          Gói giải pháp dành cho doanh nghiệp lĩnh vực Xây dựng
                        </span>
                      </div>
                      {/* <div className="divider-wrap" data-alignment="default"><div style={{ marginTop: "12.5px", width: "300px", height: "2px", marginBottom: "12.5px", transform: "scale(1, 1)" }} data-width="300" data-animate="yes" data-animation-delay="" data-color="default" className="divider-small-border completed"></div></div> */}
                      <ul className="px-3 pt-2 pb-2" style={{ width: "600px" }}>
                        <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">. Bao gồm tính năng chấm công di động & tính lương trực tuyến</li>
                        <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">. Bao gồm tính năng chấm công di động & tính lương trực tuyến</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-2/5" style={{ marginTop: "50px" }}>
                  <div id="text6">
                    <h2 className="pt-5 text-4xl text-orange font-semibold leading-loose">100.000 đ</h2>
                  </div>
                  <div>
                    <span className="text-body-color">/user/tháng</span>
                  </div>
                  <button className="bg-[#269126] rounded-lg text-white">
                    <a className=" flex">
                      <span className="px-30 py-4">ĐĂNG KÝ NGAY</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 mr-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                      </svg>
                    </a>
                  </button>
                </div>


              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
export default AboutSectionOne;

