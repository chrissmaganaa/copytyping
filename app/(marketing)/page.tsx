"use client";

import Footer from "@/components/made/Footer";
import Headlines from "@/components/made/Headlines";
import Navbar from "@/components/made/Navbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="bg-black h-screen flex flex-col items-center justify-center">
        <Headlines/>
        <Button 
          onClick={() => router.push("/letters")}
          className="mt-3 font-black font-josefin text-lg cursor-pointer bg-violet-900 hover:bg-violet-950"
        >
          Start Typing!
        </Button>
      </div>
      <Footer />
    </>
  )
}