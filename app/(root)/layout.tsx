import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Header from  "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: `%s  | Music Store`,
    default: APP_NAME,
  }
};
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header/>
        <main className="flex-1 wrapper">{children}</main>
        <Footer/>
      </div>
    );
  }