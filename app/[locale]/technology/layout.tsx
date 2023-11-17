import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ClientOnly from "../components/ClientOnly";

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

export default function Technology({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(children);

  return (
    <div>
      {/* <ClientOnly> */}

      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
      {/* </ClientOnly> */}
    </div>
  );
}
