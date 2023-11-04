import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import { handleItemNavBar } from "../../utils/util";
import menuData from "./menuData";
import menuMobileBg from "@/public/images/menu/map_menu.jpg";

const MainMenu = ({ dataMenu, navbarOpen, navbarToggleHandler }) => {
  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <nav
      id="navbarCollapse"
      className={`navbar ease fixed top-[50px] right-0 bottom-0 z-30 w-full border-body-color/50 bg-white bg-nav-mobile px-4 py-4 duration-300 dark:border-body-color/20 dark:bg-dark max-[1200px]:h-screen max-[1200px]:overflow-y-auto xs:top-[75px] md:top-[65px] lg:top-[65px] xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:bg-none xl:p-0 xl:opacity-100 ${
        navbarOpen
          ? "visibility left-[0] opacity-100"
          : "invisible left-[-100%] opacity-0"
      }`}
    >
      <ul className="block items-center xl:flex xl:space-x-[20px]">
        {dataMenu.map((menuItem, index) => (
          <li
            key={menuItem.id}
            className=" group relative mb-[4px] border-none"
          >
            {menuItem.title ? (
              <>
                {/* Phần navbar */}
                {menuItem?.children.length > 0 ? (
                  <span
                    onClick={() => handleSubmenu(index)}
                    className={`flex w-full cursor-pointer items-center justify-between text-sm font-bold uppercase text-white group-hover:text-[green] dark:text-white xl:mr-0 xl:inline-flex xl:py-6 xl:px-0 xl:text-[12px] xl:text-dark 2xl:text-base`}
                  >
                    {menuItem.title}
                    <BsChevronDown size={16} className="ml-[7px] font-bold" />
                  </span>
                ) : (
                  <Link
                    href={`/${handleItemNavBar(menuItem.multiple_language)}`}
                    className={`pointer flex cursor-pointer py-2 text-base font-bold uppercase text-white group-hover:text-[green] dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 xl:text-[12px] xl:text-dark 2xl:text-base`}
                  >
                    {menuItem.title}
                  </Link>
                )}
                {/* Phần subnav */}
                {menuItem?.children.length > 0 && (
                  <div
                    className={`submenu relative top-full left-0  rounded-b-md bg-none pl-[20px] transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark xl:invisible xl:absolute xl:top-[110%] xl:block xl:min-w-[400px] xl:bg-white xl:p-4 xl:opacity-0 xl:shadow-lg xl:group-hover:visible xl:group-hover:top-full ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem?.children.map((submenuItem, index) => (
                      <div
                        key={submenuItem}
                        className="group/submenu flex items-center hover:text-[green]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 30 30"
                          className="hidden fill-current group-hover/submenu:block"
                        >
                          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
                          <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
                        </svg>
                        <Link
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                          onClick={navbarToggleHandler}
                          href={`/${handleItemNavBar(
                            menuItem.multiple_language
                          )}/${
                            submenuItem.first_id === -1
                              ? String(submenuItem.id)
                              : String(submenuItem.first_id)
                          }`}
                          key={submenuItem.id}
                          className="block w-full rounded py-2.5 text-sm font-semibold uppercase text-white transition-transform duration-300 ease-in-out hover:translate-x-1 hover:text-[green] dark:text-white lg:px-3 xl:text-dark"
                        >
                          <p className="w-full"> {submenuItem.title}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href="/"
                onClick={() => handleSubmenu(index)}
                className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
              >
                {menuItem.title}
                <span className="pl-3">
                  <BsChevronDown size={16} className="ml-[7px] font-bold" />
                </span>
              </Link>
            )}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 origin-left scale-x-0 transform bg-[#008000] transition-transform duration-500 group-hover:w-full group-hover:scale-x-100"></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
