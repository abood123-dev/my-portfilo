import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
export default function Home() {
  return (
    <div className="flex md:flex-row md:justify-center items-center md:gap-[200px] flex-col-reverse justify-center content-center mt-14">
         <div className="flex flex-col md:items-start justify-center items-cente  gap-5 md:w-[500px] w-[350px] md:mt-0  mt-10 md:-ml-10">
           <div className="text-center sm:text-left">   <span className="text-white text-sm text-center sm:text-left">Full Stack Next js and React Web Developer </span> </div>
          <div>    <h1 className="text-white md:text-5xl text-3xl text-center sm:text-left " >Hello I'm <span className="text-[#00ff99]">Abd Al-Fatah Al-Haj Ibrahim</span></h1> </div>
          <div>    <p className="text-sm/5 text-white/80 md:max-w-[500px] max-w-[300px] text-center sm:text-left md:ml-0 ml-5">I'm a Next.js (React) developer focused on building responsive, high-performance web applications. I work with APIs to handle dynamic data and ensure seamless experiences across devices. I combine modern tools like React and Tailwind CSS to create clean, efficient interfaces.</p> </div>
          <div className="flex md:flex-row md:justify-center items-center flex-col  md:ml-0 ml-0 md:gap-14 gap-9">    <Button variant='outline' size='lg' className="uppercase flex items-center gap-2 rounded-full"><span className="text-sm">Download CV</span><FiDownload/> </Button><div className="flex flex-row gap-3 justify-center items center"> <Socials/> </div> </div>
         </div>
         <div>
          <Photo/>
         </div>
    </div>
  );
}
