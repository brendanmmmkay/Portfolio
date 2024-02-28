import Link from "next/link";
import Image from 'next/image'
import ArcyImg1 from "../components/tempLogo2.png"

export default function Navbar() {
  return (
    <nav className="relative z-50">
      <div className="lg:px-48 py-2 bg-white outline-2 w-full">
        <ul className="flex justify-between items-center">
          <Image className="w-11 h-11 pt-1" src={ArcyImg1} />
          {/* Additional text */}
          <li className="text-sm font-semibold text-gray-700">Your Additional Text</li>
          {/* End of additional text */}
          <div className="justify-end pt-1">
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button className="group text-chip-deep-gray borderColor-off-white relative h-10 overflow-hidden text-xs tracking-wider text-toverflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">RESUME</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button className="group text-chip-deep-gray borderColor-off-white relative h-10 overflow-hidden text-xs tracking-wider text-toverflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">LINKEDIN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button className="group text-chip-deep-gray borderColor-off-white relative h-8 overflow-hidden text-xs tracking-wider text-toverflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">BPMCKAY@SFU.CA</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            </Link>
          </div>
        </ul>
      </div>
      <div className="divide-y divide-linear divide-stone-200 w-full">
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}