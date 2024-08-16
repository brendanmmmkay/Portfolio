import Link from "next/link";
import Image from 'next/image'
import wordMark from "../components/wordMark.svg"
import Clipboard from "./Clipboard";

export default function Navbar() {
  return (
    <nav className="hidden md:block fixed z-50 w-full">
      <div className="mt-4 ml-20 px-4 bg-white border border-off-white rounded-l-lg"> 
        <ul className="grid grid-cols-3 items-center">
          
          {/* Brand Name */}
          <li className="flex justify-start">
            <Link href="/" className="text-xxs font-AvenirHeavy text-stone-600 py-2">
              BRENDAN MCKAY
            </Link>
          </li>

          {/* Position */}
          <li className="flex justify-center">
          <div className="flex justify-center w-full">
            <span className="text-xxs font-AvenirHeavy text-stone-600 py-2 ml-[10rem]">BRAND DESIGNER AND PRODUCT STRATEGIST</span>
          </div>
          </li>

          {/* Links and Clipboard */}
          <li className="inline-flex justify-end items-center gap-10 pb-2">
            <div>
            <Link href="/Brendan_McKay_Resume_2024.pdf" target="_blank" rel="noopener noreferrer" className="text-xxs font-SFpro text-stone-600 pt-1">
              RESUME
            </Link>
            </div>
            <div>
            <Link href="https://www.linkedin.com/in/brendan-mckay/" className="text-xxs font-SFpro text-stone-600 ">
              LINKEDIN
            </Link>
            </div>
            <div>
            <Clipboard text="BPMCKAY@SFU.CA" />
            </div>
          </li>

        </ul>
      </div>
    </nav>
  );
}