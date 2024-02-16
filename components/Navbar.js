import Link from "next/link";
import Image from 'next/image'
import ArcyImg1 from "../components/tempLogo2.png"

export default function Navbar() {
    return (
        
        <nav className="text-1xl font-medium relative lg:px-48 py-2 z-50 text-stone-700 bg-white border-y border-off-white">
            {/* <ul className="flex gap-12">
                <Link href={"/"}>
                    <li className="pr-5 font-Avenir">Logo</li>
                </Link>
                <Link href={"/bosch"}>
                    <li className="font-Avenir">LinkedIn</li>
                </Link>
            </ul> */}
           
           
            <ul class="flex justify-between">
            <Image className="w-11 h-11"
                            src={ArcyImg1}
                        />
                        <div className="justify-end">
  <Link href={"/bosch"}>
<p></p>
  </Link>
  <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full text-[0.7rem] px-5 py-2 mr:1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">ABOUT</button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-off-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr:1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">RESUME</button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-off-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr:1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">CONTACT</button>
            </Link>
            </div>
</ul>
        </nav>
    );
}


// export default function Navbar() {
//     return (
//         <nav className="z-20 absolute">
//             <ul className="grid grid-cols-2 gap-1">
//                 <Link href={"/"}>
//                     <li>Home</li>
//                 </Link>
//                 <Link href={"/contact"}>
//                     <li>Contact</li>
//                 </Link>
//             </ul>
//         </nav>
//     );
// }