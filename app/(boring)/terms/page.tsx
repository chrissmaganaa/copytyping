import Footer from "@/components/made/Footer"
import Headbar from "@/components/made/Headbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Privacy() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <div className="w-full bg-[#101010] flex flex-col items-center font-josefin">

        <Headbar/>

        <Link href="/">
          <Button className="text-[#999999] bg-transparent flex justify-center items-center h-[32px] w-[72px] pb-1 mt-32 ease-in duration-200 transition-all cursor-pointer rounded-md hover:text-white hover:bg-[#151515] hover:rounded-sm">Back</Button>
        </Link>


        <div className="w-2/4">
          <div className="font-bold text-4xl mt-8 text-center">Terms of Service</div>
          <div className="font-light text-md mb-8 text-center text-[#666666]">Last updated on {formattedDate}</div>

          <hr className="mb-8"></hr>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">1. Acceptance of Terms</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">By accessing and using CopyTyping ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</div>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">2. Description of Service</div>
            <div className="flex flex-col text-lg font-light p-4"/>

              <div className="pb-4">CopyTyping is an online typing practice platform that allows users to practice typing with classic sales letters and copywriting pieces. The service includes:</div>
              <ul>
                <li>- Access to a library of sales letters for typing practice</li>
                <li>- Performance tracking and statistics</li>
                <li>- Leaderboard functionality</li>
                <li>- User account management</li>
                <li>- Progress history and analytics</li>
              </ul>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">3. User Accounts</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">To access certain features of the Service, you may be required to create an account. You agree to:</div>
              <ul>
                <li>- Provide accurate and complete registration information</li>
                <li>- Maintain the security of your account credentials</li>
                <li>- Accept responsibility for all activities under your account</li>
                <li>- Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">4. Acceptable Use</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">You agree not to use the Service to:</div>
              <ul>
                <li>- Violate any applicable laws or regulations</li>
                <li>- Infringe upon the rights of others</li>
                <li>- Transmit any harmful or malicious content</li>
                <li>- Attempt to gain unauthorized access to the Service</li>
                <li>- Interfere with the proper functioning of the Service</li>
                <li>- Use automated tools to access the Service without permission</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">5. Intellectual Property</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">The Service and its original content, features, and functionality are owned by CopyTyping and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</div>
              <div className="pb-4">The sales letters and copywriting content used in the Service are either in the public domain or used under fair use provisions for educational purposes.</div>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">6. Privacy</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.</div>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">7. Disclaimer of Warranties</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">The Service is provided "as is" and "as available" without any representations or warranties, express or implied. We make no representations or warranties in relation to this Service or the information and materials provided on this Service.</div>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">8. Limitation of Liability</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">In no event shall CopyTyping, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.</div>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">9. Termination</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</div>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">10. Changes to Terms</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</div>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <div className="text-xl font-semibold">11. Contact Information</div>
            <div className="flex flex-col text-lg font-light p-4">
              <div className="pb-4">If you have any questions about these Terms of Service, please contact us through our website or support channels.</div>
            </div>
          </div>
        </div>
        <div className="my-8"></div>
      </div>
      <Footer/>
    </>
  )
}