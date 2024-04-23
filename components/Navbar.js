import Link from "next/link";
import Image from 'next/image'
import wordMark from "../components/wordMark.svg"
import Clipboard from "./Clipboard";

export default function Navbar() {
  return (
    <nav className="hidden md:block fixed z-50 w-full">
      <div className="px-4 bg-white"> 
        <ul className="grid grid-cols-3 gap-4">

      
          <div className="flex justify-start">
          <Link href="/">
          <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRENDAN MCKAY — [03.24.24]</li>
          </Link>
          </div>

          <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRAND DESIGNER AND PRODUCT STRATEGIST</li>


          <div className="flex justify-end  pt-1">
          <Link href="/Brendan_McKay_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">
            <button className="text-xxs font-SFpro text-stone-600 pr-10">RESUME</button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button className="text-xxs font-SFpro text-stone-600 pr-10">LINKEDIN</button>
            </Link>

            <Clipboard text="BPMCKAY@SFU.CA" />
          </div>

        </ul>
      </div>

    </nav>
  );
}