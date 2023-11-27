import { Inter } from "next/font/google";

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

export default function Products({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-96">
      <div>header service</div>
      {children}
      <div>footer service</div>
      </div>

  );
}