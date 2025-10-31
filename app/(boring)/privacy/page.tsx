import Headbar from "@/components/made/Headbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Privacy() {
  return (
    <>
      <div className="w-full flex flex-col items-center font-josefin">

        <Headbar/>

        <Link href="/">
          <Button className="text-[#999999] bg-transparent flex justify-center items-center h-[32px] w-[72px] pb-1 mt-32 ease-in duration-200 transition-all cursor-pointer rounded-md hover:text-white hover:bg-[#151515] hover:rounded-sm">Back</Button>
        </Link>

        <div className="font-bold text-4xl my-8">Privacy Policy</div>

        <div className="bg-blue-800 flex flex-col items-center my-4">
          <div className="text-xl font-semibold">1. Introduction</div>
          <div className="bg-emerald-950 flex flex-col justify-center text-lg font-light w-[600px] p-4">
            <div className="pb-4">CopyTyping ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our typing practice service.</div>
            <div className="pt-4">Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use the Service.</div>
          </div>
        </div>

        <div className="bg-blue-800 flex flex-col items-center my-4">
          <div className="text-xl font-semibold">2. Information We Collect</div>
          <div className="bg-emerald-950 flex flex-col justify-center text-lg font-light w-[600px] p-4">

            <div className="py-2 font-semibold">Personal Information</div>
            <div className="pb-4">When you create an account or use our Service, we may collect:</div>
            <ul>
                <li>- Name and email address (via Google OAuth)</li>
                <li>- Profile picture (if provided through Google)</li>
                <li>- Account preferences and settings</li>
            </ul>
            
            <div className="py-2 font-semibold">Usage Data</div>
            <div className="pt-4">Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use the Service.</div>
          </div>
        </div>
      </div>
    </>
  )
}


// 2.1 Personal Information
// When you create an account or use our Service, we may collect:

// Name and email address (via Google OAuth)
// Profile picture (if provided through Google)
// Account preferences and settings

// 2.2 Usage Data
// We automatically collect information about your use of the Service, including:

// Typing performance metrics (WPM, accuracy, errors)
// Practice session data and history
// Time spent using the Service
// Pages visited and features used
// Device information and browser type
// IP address and general location data