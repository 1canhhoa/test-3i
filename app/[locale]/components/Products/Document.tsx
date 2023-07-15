"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useSearchParams   } from "next/navigation";
import Link from "next/link";
import dotenv from 'dotenv';

interface DocumentProps {
  fontfamily?: string;
  fontTitle?: string;
  content?: string;
}

const Document: React.FC<DocumentProps> = ({ fontfamily, fontTitle, content }) => {


  return (
    <section id="Document" className={`w-full ${fontfamily} mt-[30px]`}>
      <div className="container mt-20">
        <h2 className={`text-[28px] font-bold text-center mb-[30px] ${fontTitle}`}>Danh sách tài liệu & hướng dẫn sử dụng</h2>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </section>
  );
};

export default Document;
