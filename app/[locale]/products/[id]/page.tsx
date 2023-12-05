// "use client"
import Head from "next/head";
import { useState, useEffect } from 'react';
import { ResolvingMetadata, type Metadata } from "next";
import { Merriweather, Noto_Serif, Inter } from "next/font/google";
import SnowAnimation from '../../components/snowAnimation'
import { GetItem } from "../../apis/GetDataHome";
import { getImg } from "../../utils/util";
import Contact from "../../components/Contact";
import Document from "../../components/Products/Document";
import Introduction from "../../components/Common/Introduction";
import ProductSystem from "../../components/Products/ProductSystem";
import { blogFont, blogTitleFont, blogDescriptionFont, systemStructure } from "../../utils/fonts";
import { type } from "os";
import { local } from "../../utils/http";
import Hero from "../../components/Products/Hero";
import Feature from "../../components/Products/Feature";
import Feedback from "../../components/Products/Feedback";
import ChatIcon from "../../components/Chat/ChatIcon"
import { useRouter } from 'next/router';
interface Props {
  param: { locale: string | undefined; id: string | undefined };
};

// export async function generateMetadata(
//   { param }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {

//   const id = param.id;
//   const product = await GetItem(Number(id));
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title:product?.data?.title,
//     description:product?.data?.short_content,
//     openGraph: {
//       images: [`${getImg(product?.data?.gallery)}`, ...previousImages],
//     },
//   };
// }
export default async function Page({ param }: Props | undefined) {
  // export default async function Page() {

  // const router = useRouter();
  // const pathname = router.pathname;
  // const productId = pat.split("/").pop();

  const data = await GetItem(Number(param?.id));
  const languageChoose = param?.locale;
  const gallery = data?.data?.gallery
  let dataFile = data?.data?.attributes;
  let dataContent = data?.data?.content;
  let titleContent = data?.data?.title;
  let descriptionContent = data?.data?.short_content;
  let catId = data?.data?.cat_id;
  const dataLanguage = data?.data?.multiple_language;


  // const [dataFile, setDataFile] = useState(null);
  // const [gallery, setGallery] = useState(null);
  // const [dataContent, setDataContent] = useState(null);
  // const [titleContent, setTitleContent] = useState(null);
  // const [descriptionContent, setDescriptionContent] = useState(null);
  // const [catId, setCatId] = useState(null);
  // const [dataLanguage, setDataLanguage] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await GetItem(Number(router.query.id));
  //       console.log('result', result);

  //       if (result && result.data) {
  //         const { attributes, content, title, short_content, cat_id, gallery, multiple_language } = result.data;
  //         setGallery(gallery)
  //         setDataFile(attributes);
  //         setDataContent(content);
  //         setTitleContent(title);
  //         setDescriptionContent(short_content);
  //         setCatId(cat_id);
  //         setDataLanguage(multiple_language);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData(); // Gọi hàm fetchData khi param thay đổi hoặc khi component được tạo ra lần đầu tiên
  // }, [router.query.id]);
  // if (languageChoose !== "vi" && param.id !== "383") {
  //   const multiLanguage = JSON.parse(dataLanguage);
  //   multiLanguage.map((item) => {
  //     if (item.lgn === languageChoose){
  //       dataContent = item.content;
  //       titleContent = item.title;
  //       descriptionContent = item.short_content;
  //       return [dataContent, titleContent, descriptionContent];
  //     }
  //   });
  // }
  return (
    <div className="relative">
      <Head>
        <title>{titleContent}</title>
        <meta name="description" content={descriptionContent} />
        <meta property="og:image" content={getImg(gallery)} />
      </Head>
      {/* <SnowAnimation/> */}
      <Hero
        pageName={titleContent}
        metaImage={getImg(gallery)}
      />
      <Feature pageName={titleContent} />
      <Introduction
        pageName={titleContent}
        description={descriptionContent}
        metaImage={getImg(gallery)}
        fontTitle={systemStructure.className}
      />
      <Feedback />
      <ProductSystem fontTitle={systemStructure.className} title={titleContent} catId={catId} />
      {dataFile &&
        <Document fontTitle={systemStructure.className} title={titleContent} content={dataFile} />
      }
      <Contact />
      {/* <ChatIcon pageName={titleContent} /> */}
    </div>
  );
}