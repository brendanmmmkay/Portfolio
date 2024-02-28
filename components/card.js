// import React from 'react';
// import Link from "next/link";
// import Image from 'next/image'
// // import momentProductDetail from "../image/momentProductDetail.png"
// import MuxPlayer from '@mux/mux-player-react';
// // import MuxDynamic from './MuxPlayer';
// import MuxPlayerComponent from './MuxPlayer';

// // function Card() {

// // const Card = (props) => {
// const Card = ({
//     src,
//     src2, 
//     src3,
//     fill,
//     alt,
//     content,
//     NLEmotto,
//     playbackId,
//     playbackId2,
//     ...props
// }) => {

//     return (








//         <div className="md:overflow-x-scroll scroll-smooth no-scrollbar snap-x duration-1000 ease-in-out z-50 pt-3">
//             <div className="md:pl-40">
//                 <div className="bg-white border border-off-white drop-shadow-2xl lg:w-[150rem] mb-16">
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 overflow-hidden">
//                         <div className="relative object-contain lg:col-span-1">
//                             {playbackId && <MuxPlayerComponent playbackId={playbackId} />}
//                             <Image {...props} src={src} fill={fill} alt={alt} />
//                         </div>
//                         <div className="flex-none lg:col-span-1 overflow-hidden">
//                         {/* <MuxPlayerComponent {...props} playbackId={playbackID}></MuxPlayerComponent> */}
//                         {/* <MuxPlayerComponent {...props} playbackId={playbackId2} /> */}
//                         {playbackId2 && <MuxPlayerComponent playbackId={playbackId2} />}
//                         <Image {...props} src={src2} fill={fill} alt={alt} />
//                         {/* <MuxPlayerComponent playbackId="SUdAptJfxtpe2oKgpQT6qCAiIZpe602X8to01wJumOCSk " /> */}
//                             {/* <mux-player class="mux-player"></mux-player> */}
//                         {/* <mux-player class="mux-player"></mux-player> */}
//             {/* <MuxPlayerComponent videoId="SUdAptJfxtpe2oKgpQT6qCAiIZpe602X8to01wJumOCSk" /> */}
//                             <p className="invisible lg:visible text-chip-deep-gray pt-10 absolute text-[0.6rem] tracking-[0.2rem] font-AvenirHeavy">ABOUT:</p>
//                             <p className="invisible lg:visible absolute pt-16 text-1xl font-Avenir">A digital design directory.</p>
//                         </div>
//                         <div className="relative object-contain lg:col-span-1">
//                             <Image {...props} src={src3} fill={fill} alt={alt} />
//                         </div>
//                         <h5 className="ml-1 md:ml-5 mt-11 text-4xl font-Avenir tracking-tight text-gray-900 p-5 lg:col-span-3">{content}</h5>
//                         <div className='pt-1 pl-6 relative lg:col-span-3'>
//                             <article className="md:invisible visible text-1xl font-Avenir text-balance w-60 leading-6 relative">{NLEmotto}</article>
//                         </div>






//                     </div>
//                     <div className="divide-y-2 divide-linear divide-off-white mt-10 md:pt-0 lg:col-span-3">
//                         <div></div>
//                         <div></div>
//                     </div>
//                     <div className='py-4 md:p-4 flex flex-row text-nowrap overflow-x-scroll no-scrollbar gap-2 lg:col-span-3'>
//                         <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
//                             <button class="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirHeavy relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span class="relative z-10">PRODUCT DESIGN</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
//                         </Link>
//                         <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
//                             <button class="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirHeavy relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span class="relative z-10">LOGO DESIGN</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
//                         </Link>
//                         <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
//                             <button class="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirHeavy relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span class="relative z-10">INTERACTION DESIGN</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
//                         </Link>
//                         <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
//                             <button class="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirHeavy relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span class="relative z-10">ART DIRECTION</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
//                         </Link>

//                         {/* Repeat similar buttons for other links */}
//                     </div>
//                 </div>
//             </div>
//         </div>










//     )

// }

// export default Card;



import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from 'next/image'
import MuxPlayerComponent from './MuxPlayer';

const Card = ({
    src,
    src2, 
    src3,
    fill,
    alt,
    content,
    NLEmotto,
    playbackId,
    playbackId2,
    ...props
}) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} // Initial animation state: fully transparent
            animate={{ opacity: 1 }} // Animation to fade in the card
            transition={{ duration: 0.5 }} // Animation duration
            className="md:overflow-x-scroll scroll-smooth no-scrollbar snap-x duration-1000 ease-in-out z-50 pt-3"
        >
            <div className="md:pl-40">
                <div className="bg-white border border-off-white drop-shadow-2xl lg:w-[150rem] mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 overflow-hidden">
                        <div className="relative object-contain lg:col-span-1">
                            {playbackId && <MuxPlayerComponent playbackId={playbackId} />}
                            <Image {...props} src={src} fill={fill} alt={alt} />
                        </div>
                        <div className="flex-none lg:col-span-1 overflow-hidden">
                            {playbackId2 && <MuxPlayerComponent playbackId={playbackId2} />}
                            <Image {...props} src={src2} fill={fill} alt={alt} />
                            <p className="invisible lg:visible text-chip-deep-gray pt-10 absolute text-[0.6rem] tracking-[0.2rem] font-AvenirHeavy">ABOUT:</p>
                            <p className="invisible lg:visible absolute pt-16 text-1xl font-Avenir">A digital design directory.</p>
                        </div>
                        <div className="relative object-contain lg:col-span-1">
                            <Image {...props} src={src3} fill={fill} alt={alt} />
                        </div>
                        <h5 className="ml-1 md:ml-5 mt-11 text-4xl font-Avenir tracking-tight text-gray-900 p-5 lg:col-span-3">{content}</h5>
                        <div className='pt-1 pl-6 relative lg:col-span-3'>
                            <article className="md:invisible visible text-1xl font-Avenir text-balance w-60 leading-6 relative">{NLEmotto}</article>
                        </div>
                    </div>
                    <div className="divide-y-2 divide-linear divide-off-white mt-10 md:pt-0 lg:col-span-3">
                        <div></div>
                        <div></div>
                    </div>
                    <div className='py-4 md:p-4 flex flex-row text-nowrap overflow-x-scroll no-scrollbar gap-2 lg:col-span-3'>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirHeavy relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">PRODUCT DESIGN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirHeavy relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">LOGO DESIGN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirHeavy relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">INTERACTION DESIGN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirHeavy relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">ART DIRECTION</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Card;