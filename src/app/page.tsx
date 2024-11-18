import Image from "next/image";
import  Header  from "@/components/header";
import Main from "@/components/main"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bgColor w-full min-h-screen">
          <Header />
          <Main/>
          <Footer/>
    </div>
  );
}