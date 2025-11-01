import Link from "next/link";

export default function Footer() {

  return (
    <>
      <div className="font-josefin h-[50px] text-[#303030] text-sm flex items-center justify-between bg-black border-t border-[#181818] px-[24px]">
        <div className="select-none h-full w-full flex justify-start items-center">
          <div>@ 2025 Copytyping. All rights reserved.</div>
        </div>

        <div className="text-white h-full w-full flex justify-center items-center gap-2">
          
        </div>


        <div className="font-josefin select-none h-full w-full flex justify-end items-center gap-2">
          <Link href="/privacy" className="hover:text-[#999999]">Privacy</Link>
          <Link href="/terms" className="hover:text-[#999999]">Terms</Link>
        </div>
        
      </div>
    </>
  )
}