import { motion as m } from "framer-motion"
import Link from "next/link";
// import '@/styles/globals.css'

export default function Contact(){
    return(
<m.main 
          initial={{ y: "100%" }} 
          animate={{ y: "0%" }} 
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
className="text-gray-900 absolute z-2 top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16">
<div className="my-96 p-1">
    <h1 className='text-4xl text-center lg:text-right lg:text-9x1'>Thanks for stopping by!</h1>
</div>
<div className="flex gap-40">
    <div className="lg:text-2xl text-base">
    <Link href={"/"}>
        <h4>Find me</h4>
        </Link>
    </div>
    <div className="lg:text-6xl text-2xl underline">
<ul>
    <div className="overflow-hidden">
    <li className="pb-2">twitter</li>
    <li className="pb-2">twitter</li>
    <li className="pb-2">twitter</li>
    <li className="pb-2">twitter</li>
    </div>
</ul>
    </div>
</div>
</m.main>
    );
}