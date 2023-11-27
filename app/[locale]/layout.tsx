'use client'
import Footer from "../[locale]/components/Footer";
import { useRouter,usePathname } from 'next/navigation';
import Header from "../[locale]/components/Header";
import ScrollToTop from "../[locale]/components/ScrollToTop";
import LayoutRoot from "./layout/Rootlayout";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params?:any
}) {
  const router:any = usePathname();
  if(router === '/products'){
    return (
      <Productlayout>
        {children}
      </Productlayout>
  )
  }else{
    return (
      <LayoutRoot>
        {children}
      </LayoutRoot>
  );
}
}

import { Providers } from "./providers";import Productlayout from "./layout/Productlayout";

