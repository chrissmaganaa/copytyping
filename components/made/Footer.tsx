import Link from "next/link";

export default function Footer() {

  return (
    <>
      <div className="font-josefin h-[60px] text-[#303030] text-sm flex items-center justify-between bg-black border-t border-[#111111] px-[24px]">

        <div className="text-white h-full w-full flex justify-start items-center gap-2">
          <div>X</div>
          <div>X</div>
          <div>X</div>
        </div>
        <div className="select-none h-full w-full flex justify-center items-center">
          <div>@ 2025 Copytyping. All rights reserved.</div>
        </div>


        <div className="font-josefin select-none h-full w-full flex justify-end items-center gap-2">
          <Link 
            href="/privacy"
            className="cursor-pointer">Privacy Policy</Link>
          <Link 
            href="/terms"
            className="cursor-pointer">Terms of Service</Link>
        </div>
        
      </div>
    </>
  )
}
