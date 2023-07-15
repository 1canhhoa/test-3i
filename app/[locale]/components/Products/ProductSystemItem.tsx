"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
require('dotenv').config();
import { BsFiletypeDoc } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaRegFilePowerpoint } from "react-icons/fa"

import { GetListCmsItem } from "../../apis/GetDataLogin";
import Modal from "../Modals/Modal";
import useModal from "../../hooks/useModal";

interface User { 
  Id:string,
  Title:string,
  Image: string
}

interface ProductSystemItemProps {
  data: User;
}

const ProductSystemItem: React.FC<ProductSystemItemProps> = ({ data }:ProductSystemItemProps) => {
  const modal = useModal();
  const [ isLoading, setIsLoading ] = useState(false);
  const [listCmsItem, setListCmsItem] = useState<any>({});
  const [selectedItemId, setSelectedItemId] = useState(null);

  const fetchData = async() => {
    setListCmsItem(await GetListCmsItem(data.Id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const bodyReactElement: React.ReactElement = <div dangerouslySetInnerHTML={{ __html: listCmsItem?.data?.Object[0]?.full_text }} />;
  const bodyContent = (
    <div className="w-full">{bodyReactElement}</div>
  )

  const attachments = (
    <ul className="px-0 py-[15px]">
      {listCmsItem?.data?.Object[0]?.attachments.map((file) => (
        <li key={file.id} className="inline mr-[10px] pr-[10px] border-r-[1px] border-[#71bc42] last:border-r-0">
          <a className="text-[#71bc42] hover:text-[#4f832e]" href={`${'https://backend.smartwork.3i.com.vn'}${file.file_url}`}>
            {file.file_type === '.docx' || file.docx === 'doc' ? <BsFiletypeDoc size={18} className="inline mr-[7px] align-middle"/> : ""}
            {file.file_type === '.xlsx' || file.docx === 'xls' ? <SiMicrosoftexcel size={18} className="inline mr-[7px] align-middle"/> : ""}
            {file.file_type === '.pptx' || file.docx === 'ppt' ? <FaRegFilePowerpoint size={18} className="inline mr-[7px] align-middle"/> : ""}
            {file.file_name}
          </a>
        </li>
      ))}
    </ul>
  )

  const handleOpenModal = (id) => {
    setSelectedItemId(id);
  }

  const handleClose = () => {
    setSelectedItemId(null);
  }

  return (
    <li className="w-1/2 mb-[10px] px-[3px]" id={data.Id}>
      <span
        onClick={() => handleOpenModal(data.Id)}
        className="cursor-pointer block py-[10px] border-[1px] border-[transparent] border-b-[#f5f5f5] hover:border-b-[#5ab46c] hover:shadow-sm"
      >
        <Image src={`https://backend.smartwork.3i.com.vn/${data?.Image}`} width={20} height={20} alt={data.Title} className="inline mr-[5px] align-middle" />
        <span className="inline align-middle uppercase text-[12px]">{data.Title}</span>
      </span>
      {selectedItemId === data.Id &&
        <Modal id={data.Id} isOpen={true} onClose={handleClose} title={`Chi tiết về ${listCmsItem?.data?.Object[0]?.title}`} body={bodyContent} attachments={attachments}/>
      }
    </li>
  );
};

export default ProductSystemItem;
