
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
    subTitle,
    caption,
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                        <div className="relative object-contain lg:col-span-1" style={{ aspectRatio: "16/9" }}>
                            {playbackId && <MuxPlayerComponent playbackId={playbackId} />}
                            {src && <Image {...props} src={src} fill={fill} alt={alt} />}
                        </div>
                        <div className="relative object-contain lg:col-span-1" style={{ aspectRatio: "16/9" }}>
                            {playbackId2 && <MuxPlayerComponent playbackId={playbackId2} />}
                            {src2 && <Image {...props} src={src2} fill={fill} alt={alt} />}
                            <p className="text-chip-deep-gray absolute text-[0.6rem] tracking-[0.2rem] font-AvenirHeavy" style={{ top: '31.5rem' }}>MODUS</p>
                            <p className="absolute text-1xl font-Avenir" style={{ top: '33.3rem' }}>{subTitle}</p>
                            {/* <p className="absolute z-60 pt-20 text-1xl font-Avenir">{subTitle}</p> */}
                        </div>
                        <div className="relative object-contain lg:col-span-1" style={{ aspectRatio: "16/9" }}>
                            {src3 && <Image {...props} src={src3} fill={fill} alt={alt} />}
                        </div>
                        <h5 className="ml-1 md:ml-5 mt-11 text-4xl font-Avenir tracking-tight text-gray-900 p-5 lg:col-span-3">{content}</h5>
                        <div className='pt-1 pl-6 relative lg:col-span-3'>
                            <article className="md:invisible visible text-1xl font-Avenir mt-12 text-balance w-60 leading-6 relative">{subTitle}</article>
                        </div>
                    </div>
                    <div className="divide-y-2 divide-linear divide-red-600 mt-10 md:pt-0 lg:col-span-3">
                        <div></div>
                        <div></div>
                    </div>
                    <div className='py-4 md:p-4 flex flex-row text-nowrap overflow-x-scroll no-scrollbar gap-4 lg:col-span-3'>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirMedium relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">PRODUCT DESIGN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirMedium relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">LOGO DESIGN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirMedium relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">INTERACTION DESIGN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirMedium relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">ART DIRECTION</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Card;