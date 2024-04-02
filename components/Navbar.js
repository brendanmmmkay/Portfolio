import Link from "next/link";
import Image from 'next/image'
// import ArcyImg1 from "../components/tempLogo2.png"
import wordMark from "../components/wordMark.svg"
import Clipboard from "./Clipboard";

export default function Navbar() {
  return (
    <nav className="hidden md:block fixed z-50 w-full">
      <div className="py-1 bg-white"> {/* Add padding/margin for large screens */}
        <ul className="grid grid-cols-3">
          <div className="px-4">
          <Link href="/">
          {/* <Image className="invisible md:visible scale-125" src={wordMark} /> */}
          <li className="text-xxs font-AvenirHeavy text-stone-600">BRENDAN MCKAY</li>
          </Link>
          </div>
          {/* <p className="md:pl-40 text-stone-800 text-sm font-NeueHaasRoman">Brendan McKay</p> */}
          {/* Additional text */}
          <li className="text-xxs font-AvenirHeavy text-stone-600">BRAND DESIGNER AND PRODUCT STRATEGIST</li>
          {/* End of additional text */}
          <div className="invisible md:visible justify-end pt-1">
          <Link href="/Brendan_McKay_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">
              <button className="group text-chip-deep-gray borderColor-off-white font-AvenirHeavy relative h-6 overflow-hidden text-xxs tracking-wider text-toverflow-x-hidden rounded-8 bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">RESUME</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button className="group text-chip-deep-gray borderColor-off-white font-PPNeueMachina relative h-6 overflow-hidden text-xxs tracking-wider text-toverflow-x-hidden rounded-8 bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">LINKEDIN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </Link>
            {/* <Link href="/Brendan_McKay_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">
              <button className="group text-chip-deep-gray borderColor-off-white font-AvenirMedium relative h-10 overflow-hidden text-xs tracking-wider text-toverflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">BPMCKAY@SFU.CA</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </Link> */}
            <Clipboard text="BPMCKAY@SFU.CA" />
          </div>
        </ul>
      </div>
      {/* <div className="divide-y divide-linear divide-stone-200 w-full">
        <div></div>
        <div></div>
      </div> */}
    </nav>
  );
}