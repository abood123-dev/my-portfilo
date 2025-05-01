import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center gap-[600px] mt-12">
         <div className="flex flex-col items-start gap-4 w-[400px]">
              <span className="text-white text-xl">Full Stack Next js and React Web Developer </span>
              <h1 className="text-white text-4xl" >Hello I'm <span className="text-[#00ff99]">Abd Al-Fatah Al-Haj Ibrahim</span></h1>
              <p className="text-sm/5 text-white/80 max-w-[500px] ">I'm a Next.js (React) developer focused on building responsive, high-performance web applications. I work with APIs to handle dynamic data and ensure seamless experiences across devices. I combine modern tools like React and Tailwind CSS to create clean, efficient interfaces.</p>
              <div><Button variant='outline' size='lg' className="uppercase flex items-center gap-2 rounded-full"><span className="text-sm">Download CV</span><FiDownload/> </Button></div> 
         </div>
         <div>
          photo
         </div>
    </div>
  );
}
