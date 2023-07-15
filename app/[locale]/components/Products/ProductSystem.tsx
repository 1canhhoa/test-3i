"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useSearchParams   } from "next/navigation";
import Link from "next/link";
import dotenv from 'dotenv';

import { GetTreeCategoryData } from "../../apis/GetDataLogin";
import ProductSystemItem from "../../components/Products/ProductSystemItem";

interface ProductSystemProps {
  fontfamily?: string;
  fontTitle?: string;
}

const ProductSystem: React.FC<ProductSystemProps> = ({ fontfamily, fontTitle }) => {
  const pathname  = usePathname();
  const [ isLoading, setIsLoading ] = useState(false);
  const [treeCategory, setTreeCategory] = useState<any>([]);
  
  const parentItem = [];
  const childItem = [];

  const fetchData = async() => {
    setTreeCategory(await GetTreeCategoryData());
  };

  useEffect(() => {
    dotenv.config();
    fetchData();
  }, []);

  treeCategory?.data?.forEach(obj => {
    if (obj.HasChild === true) {
      parentItem.push(obj);
    } else {
      childItem.push(obj);
    }
  });

  return (
    <section id="productSystem" className={`w-full ${fontfamily} mt-[72px]`}>
      <div className="container">
        <h2 className={`text-[28px] font-bold text-center mb-[30px] ${fontTitle}`}>Danh mục chức năng Smartwork</h2>
        <div className="flex flex-wrap">
          {parentItem.map((parent) => {
            return (
              <div key={parent.Id} className="w-1/2 px-[15px] mb-[48px]">
                <h3 className={`text-center font-bold mb-[30px] text-[20px] underline leading-6 ${fontTitle}`}>{parent.Title}</h3>
                <ul className="flex flex-wrap">
                  {childItem.map((child) => (
                    <>
                      {child.ParentId === parent.Id &&
                        <ProductSystemItem key={child.Id} data={child} />
                      }
                    </>
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
