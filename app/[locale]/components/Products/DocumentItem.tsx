"use client";
import React  from "react";
import Link from "next/link";
import { BsFiletypeDocx, BsFilePpt, BsFileEarmarkExcel } from "react-icons/bs";
import { ItemDocumentProps } from "./Document";
interface DocumentItemProps{
  file: ItemDocumentProps
}

const DocumentItem: React.FC<DocumentItemProps> = ({ file }) => {
  return (
    <>
      {file.code === "File" && 
        <li className={`w-1/2 pl-2 mr-2 py-2 border-[1px] border-gray-200 hover:border-[green] hover:text-[green]  rounded-md mt-[30px]`}>
          <Link href={`${process.env.BACKEND_URL}${file.value}`} className=" hover:underline">
            <span className="inline-block mr-[7px] align-middle">
              {file.type === "CMA_TYPE20211029143540" ? <BsFiletypeDocx size={18}/> : ""}
              {file.type === "CMA_TYPE20211103150450" ? <BsFilePpt size={18}/> : ""}
              {file.type === "CMA_TYPE20211029143551" ? <BsFileEarmarkExcel size={18}/> : ""}
            </span>
            <span className="align-middle">{file.title}</span>
          </Link>
        </li>
      }
    </>
  );
};

export default DocumentItem;
