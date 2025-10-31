import Headbar from "@/components/made/Headbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Privacy() {
  return (
    <>
      <div className="w-full bg-[#101010] flex flex-col items-center font-josefin">

        <Headbar/>

        <Link href="/">
          <Button className="text-[#999999] bg-transparent flex justify-center items-center h-[32px] w-[72px] pb-1 mt-32 ease-in duration-200 transition-all cursor-pointer rounded-md hover:text-white hover:bg-[#151515] hover:rounded-sm">Back</Button>
        </Link>


        <div className="bg-green-900 w-2/4">
          <div className="font-bold text-4xl my-8 text-center">Privacy Policy</div>

          <hr className="mb-8"></hr>

          <div className="bg-violet-800 flex flex-col my-4">
            <div className="text-xl font-semibold">1. Introduction</div>
            <div className="bg-purple-950 flex flex-col text-lg font-light p-4">
              <div className="pb-4">CopyTyping ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our typing practice service.</div>
              <div className="pt-4">Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use the Service.</div>
            </div>
          </div>

          <div className="bg-violet-800 flex flex-col my-4">
            <div className="text-xl font-semibold">2. Information We Collect</div>
            <div className="bg-purple-950 flex flex-col text-lg font-light p-4">

              <div className="py-2 font-semibold">Personal Information</div>
              <div className="pb-4">When you create an account or use our Service, we may collect:</div>
              <ul>
                  <li>- Name and email address (via Google OAuth)</li>
                  <li>- Profile picture (if provided through Google)</li>
                  <li>- Account preferences and settings</li>
              </ul>

              <div className="py-2 font-semibold">Usage Data</div>
              <div className="pb-4">We automatically collect information about your use of the Service, including:</div>
              <ul>
                  <li>- Typing performance metrics (WPM, accuracy, errors)</li>
                  <li>- Practice session data and history</li>
                  <li>- me spent using the Service</li>
                  <li>- Pages visited and features used</li>
                  <li>- Device information and browser type</li>
                  <li>- IP address and general location data</li>
              </ul>
            </div>
          </div>

          <div className="bg-violet-800 flex flex-col my-4">
            <div className="text-xl font-semibold">3. How We Use Your Information</div>
            <div className="bg-purple-950 flex flex-col text-lg font-light p-4">
              <div className="pb-4">We use the information we collect to:</div>
              <ul>
                  <li>- Provide, operate, and maintain the Service</li>
                  <li>- Track your typing progress and performance</li>
                  <li>- Generate leaderboards and statistics</li>
                  <li>- Improve and personalize your experience</li>
                  <li>- Communicate with you about the Service</li>
                  <li>- Detect and prevent fraud or abuse</li>
                  <li>- Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          <div className="bg-violet-800 flex flex-col my-4">
            <div className="text-xl font-semibold">4. Google OAuth Integration</div>
            <div className="bg-purple-950 flex flex-col text-lg font-light p-4">
              <div className="pb-4">We use Google OAuth for authentication, which allows you to sign in using your Google account. When you use Google OAuth:</div>
              <ul>
                  <li>- We receive your basic profile information from Google (name, email, profile picture)</li>
                  <li>- We do not store your Google password</li>
                  <li>- You can revoke access at any time through your Google account settings</li>
                  <li>- Google's privacy policy also applies to the information they provide to us</li>
              </ul>
            </div>
          </div>

          <div className="bg-violet-800 flex flex-col my-4">
            <div className="text-xl font-semibold">5. Information Sharing Disclosure</div>
            <div className="bg-purple-950 flex flex-col text-lg font-light p-4">
              <div className="pb-4">We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</div>
              <ul>
                  <li>- Service Providers: We may share information with trusted third parties who assist us in operating the Service</li>
                  <li>- Legal Requirements: We may disclose information when required by law or to protect our rights</li>
                  <li>- Business Transfers: Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                  <li>- Public Information: Your username and performance statistics may be displayed on public leaderboards</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}