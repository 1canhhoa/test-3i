'use client'
import Footer from "../[locale]/components/Footer";
import { useRouter,usePathname } from 'next/navigation';
import Header from "../[locale]/components/Header";
import ScrollToTop from "../[locale]/components/ScrollToTop";
import LayoutRoot from "./layout/Rootlayout";
import Productlayout from "./layout/Productlayout";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Chat from "./components/Chat/ChatIcon";
export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params?:any
}) {
  
  const router:any = usePathname();
  console.log("router",router);
  // if(router.startsWith('/products/') || router === '/products' ){
    if(router === '/pss' ){
    const productId = router.split('/')[2];
    return (
      <Productlayout>
        {children}
      </Productlayout>
  )
  }else{
    return (
      <LayoutRoot>
        {children}
        <Chat/>
      </LayoutRoot>
  );
}
}