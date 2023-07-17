import Head from "next/head";
import React from "react";
import { ResolvingMetadata, type Metadata } from "next";
import { Merriweather, Noto_Serif, Inter } from "next/font/google";

import { GetAbout } from "../../apis/GetDataHome";
import {getImg} from '../../utils/util';
import AboutSectionOne from "../../components/About/AboutSectionOne";
import AboutSectionTwo from "../../components/About/AboutSectionTwo";
import Introduction from "../../components/Common/Introduction";
import ProductSystem from "../../components/Products/ProductSystem";
import Document from "../../components/Products/Document";
import Contact from "../../components/Contact";

const blogFont = Merriweather({
  subsets: ["vietnamese"],
  weight: "400"
});

const blogTitleFont = Noto_Serif({
  subsets: ["vietnamese"]
})

const blogDescriptionFont = Inter({
  subsets: ["vietnamese"]
})

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const id = params.id;
  const product = await GetAbout(Number(id));
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title:product?.data?.title,
    description:product?.data?.short_content,
    openGraph: {
      images: [`${getImg(product?.data?.gallery)}`, ...previousImages],
    },
  };
}

export default async function page({ params, searchParams }: Props) {
  const data = await GetAbout(Number(params.id));
  const languageChoose = searchParams.keyword;

  let dataFile = data?.data?.attributes;
  let titleContent = data?.data?.title;
  let descriptionContent = data?.data?.short_content;

  if (languageChoose !== 'vi'){
    const multiLanguage = JSON.parse(data?.data?.multiple_language);
    multiLanguage.map((item) => {
      if (item.lgn === languageChoose){
        dataContent = item.content;
        titleContent = item.title;
        descriptionContent = item.short_content
        return [dataContent, titleContent, descriptionContent];
      }
    });
  }

  return (
    <>
      <Head>
        <title>{titleContent}</title>
        <meta name="description">{descriptionContent}</meta>
        <meta property="og:image">{getImg(data?.data?.gallery)}</meta>
      </Head>
      <Introduction
        pageName={titleContent}
        description={descriptionContent}
        metaImage={getImg(data?.data?.gallery)}
        fontFamily={blogFont.className}
        fontTitle={blogTitleFont.className}
        fontDescription={blogDescriptionFont.className}
      />
      <ProductSystem fontfamily={blogFont.className} fontTitle={blogTitleFont.className} title={titleContent}/>
      {dataFile &&
        <Document fontfamily={blogFont.className} fontTitle={blogTitleFont.className} title={titleContent} content={dataFile} />
      }
      <Contact />
    </>
  );
}
