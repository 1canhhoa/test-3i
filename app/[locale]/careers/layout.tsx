import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClientOnly from "../components/ClientOnly";
import Header1 from "../components/Header1";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "my - title",
    template: "%s | my-title",
  },
  description: {
    template: "%s",
  },
};

export default function Careers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

        {/* <ClientOnly> */}
        

        {/* <Header /> */}
        <Header1/>
        {children}
        {/* <Footer /> */}
        {/* </ClientOnly> */}
 
    </div>
  
  );
}