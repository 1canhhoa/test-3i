// "use client"
import Head from "next/head";
import { useState, useEffect} from 'react';
import { ResolvingMetadata, type Metadata } from "next";
import { Merriweather, Noto_Serif, Inter } from "next/font/google";
import SnowAnimation  from '../../components/snowAnimation'
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

type Props = {
  params: { locale: string; id: string };
};

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {

//   const id = params.id;
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

export default async function Page({ params }: Props) {
  
  const data = await GetItem(Number(params.id));
  const languageChoose = params.locale;
  console.log('data',data?.data?.attributes);
  
  let dataFile = data?.data?.attributes;
  let dataContent = data?.data?.content;
  let titleContent = data?.data?.title;
  let descriptionContent = data?.data?.short_content;
  let catId = data?.data?.cat_id;
  const dataLanguage = data?.data?.multiple_language;

  // if (languageChoose !== "vi" && params.id !== "383") {
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
        <meta property="og:image" content={getImg(data?.data?.gallery)} />
      </Head>
      {/* <SnowAnimation/> */}
      <Hero 
      pageName={titleContent}
      metaImage={getImg(data?.data?.gallery)}
      />
      <Feature pageName={titleContent} />
      <Introduction
        pageName={titleContent}
        description={descriptionContent}
        metaImage={getImg(data?.data?.gallery)}
        fontTitle={systemStructure.className}
      />
      <Feedback/>
      <ProductSystem fontTitle={systemStructure.className} title={titleContent} catId={catId} />
      {dataFile &&
        <Document fontTitle={systemStructure.className} title={titleContent} content={dataFile} />
      }
      <Contact />
    </div>
  );
}