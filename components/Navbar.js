import Link from "next/link";
import Image from 'next/image'
import wordMark from "../components/wordMark.svg"
import Clipboard from "./Clipboard";

export default function Navbar() {
  return (
    <nav className="hidden md:block fixed z-50 w-full">
      <div className=" bg-white"> 
        <ul className="grid grid-cols-3">

          <div className="px-4">
          <Link href="/">
          <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRENDAN MCKAY — [03.24.24]</li>
          </Link>
          </div>

          <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRAND DESIGNER AND PRODUCT STRATEGIST</li>


          <div className=" pt-1">
          <Link href="/Brendan_McKay_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">
              {/* <button className="group text-chip-deep-gray borderColor-off-white font-SFpro relative h-6 overflow-hidden text-xxs tracking-wider text-toverflow-x-hidden rounded-8 bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">RESUME</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button> */}
            <button className="text-xxs font-SFpro text-stone-600 pr-10">RESUME</button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              {/* <button className="group text-chip-deep-gray borderColor-off-white font-SFpro relative h-6 overflow-hidden text-xxs tracking-wider text-toverflow-x-hidden rounded-8 bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">LINKEDIN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button> */}
              <button className="text-xxs font-SFpro text-stone-600 pr-10">LINKEDIN</button>
            </Link>
            {/* <Link href="/Brendan_McKay_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">
              <button className="group text-chip-deep-gray borderColor-off-white font-AvenirMedium relative h-10 overflow-hidden text-xs tracking-wider text-toverflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">BPMCKAY@SFU.CA</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </Link> */}
            <Clipboard text="BPMCKAY@SFU.CA" />
          </div>

        </ul>
      </div>

    </nav>
  );
}