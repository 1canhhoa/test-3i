"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useSearchParams   } from "next/navigation";
import Link from "next/link";

import { GetTreeCategoryData } from "../../apis/GetDataLogin";
import ProductSystemItem from "../../components/Products/ProductSystemItem";

interface ProductSystemProps {
  catId: number;
  title?: string
  fontfamily?: string;
  fontTitle?: string;
}

const ProductSystem: React.FC<ProductSystemProps> = ({ fontfamily, fontTitle, title, catId }) => {
  const pathname  = usePathname();
  const [treeCategory, setTreeCategory] = useState(null);
  const [parentItem, setParentItem] = useState([]);
  const [childItem, setChildItem] = useState([]);

  const fetchData = async () => {
    const data = await GetTreeCategoryData();
    setTreeCategory(data);

    // Xử lý dữ liệu ở đây sau khi có dữ liệu mới
    const newParentItem = [];
    const newChildItem = [];

    data?.data?.forEach(obj => {
      if (obj.ParentId === catId) {
        newParentItem.push(obj);
      } else {
        newChildItem.push(obj);
      }
    });

    setParentItem(newParentItem);
    setChildItem(newChildItem);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="productSystem" className={`w-full ${fontfamily} mt-[72px]`}>
      <div className="container">
        <h2 className={`text-[28px] font-semibold text-center mb-[40px] ${fontTitle}`}>Danh mục chức năng {title}</h2>
        <div className="flex flex-wrap">
          {parentItem.map((parent,index) => {
            const imageParent = parent?.Image ? `${process.env.BACKEND_URL}${parent?.Image}` : '/images/common/icon-structure-default.png';
            return (
              <div key={index} className="w-1/2 px-[15px] mb-[48px] border-r-[1px] border-r-[#dee2e6] even:border-r-0">
                <h3 className={`text-center font-medium mb-[30px] text-[24px] underline leading-6 ${fontTitle}`}>
                  <Image src={imageParent} width={20} height={20} alt={parent.Title} className="inline mr-[5px] align-middle" />
                  {parent.Title}
                </h3>
                <ul className="flex mr-2 justify-start items-start flex-wrap">
                  {childItem.map((child,index) => (
                    <div key={index}>
                      {child.ParentId === parent.Id &&
                        <ProductSystemItem  data={child}/>
                      }
                    </div>
                  ))}
                </ul>
              </div>
            )
          })
          }
        </div>
      </div>
      
    </section>
  );
};

export default ProductSystem;
