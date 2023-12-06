
import Footer from "../components/Footer";

import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocale } from'next-intl';
import { notFound } from'next/navigation';
import { useTranslations } from 'next-intl';

const queryClient = new QueryClient();

export const metadata = {
  title: "3i - Platform điều hành doanh nghiệp",
  description: "Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi đang từng bước đạt được uy tín và niềm tin từ khách hàng với những sản phẩm công nghệ hiện đại và phù hợp với các doanh nghiệp trong nước và các đối tác nước ngoài như Hàn Quốc , Nhật Bản , Trung Quốc.",
};




export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params?:any
}) {


  return (
    <html>
      <body className={`dark:bg-black overflow-x-hidden`}>
          <Providers >
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
      </body>
    </html>
  );
}

import { Providers } from "../providers";
