"use client";

import { useEffect } from "react"; // <-- Import useEffect
import Footer from "@/components/made/Footer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Preview from "@/components/made/Preview";

export default function Page() {
  const router = useRouter();

  // This hook locks the body scroll
  useEffect(() => {
    // On mount, hide scrollbar
    document.body.style.overflow = "hidden";

    // On unmount (when user leaves page), restore scrollbar
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Empty array means this runs once on mount/unmount

  return (
    <>
      <div className="bg-black inset-x-0 top-0 z-50 h-[50px] flex items-center justify-between border-[#181818] border-b px-2">
        <div className="w-[150px] font-josefin font-black">
          <Link draggable="false" href="/">
            <button className="cursor-pointer">copytyping.com</button>
          </Link>
        </div>
        <div className="">
        <Button className="text-white font-josefin bg-[#272727] hover:bg-[#202020] hover:cursor-pointer rounded-md hover:rounded-lg p-2 mr-1 border">Login</Button>
          <Button className="text-black font-bold font-josefin bg-[#ffffff] hover:bg-[#ccc] hover:cursor-pointer rounded-md hover:rounded-lg p-2 ml-1 border">Start Typing!</Button>
        </div>
      </div>

      <div className="bg-black h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        
        {/* headlines */}
        <div className="w-full flex flex-col justify-center items-center font-josefin">
          <div className="font-bold text-5xl">Master Copy Through Typing</div>
          <div className="font-extralight text-xl">Train like the pros to improve your typing speed while absorbing the world's most powerful sales copy.</div>
        </div>

        {/* preview container */}
        <div className="bg-[#222222] w-3/5 mt-16 mb-36 max-h-1/2 h-full">
          <Preview/>
        </div>
      
      </div>
      <Footer />
    </>
  )
}