import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from 'next/image';
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
    chip1,
    chip2,
    chip3,
    chip4,
    ...props
}) => {
    const [isRightSide, setIsRightSide] = useState(false);

    useEffect(() => {
        const checkMousePosition = (e) => {
            setIsRightSide(e.clientX > window.innerWidth / 2);
        };

        window.addEventListener('mousemove', checkMousePosition);

        return () => {
            window.removeEventListener('mousemove', checkMousePosition);
        };
    }, []);
    return (
        <div className="md:overflow-x-scroll scroll-smooth no-scrollbar duration-100 ease-in-out z-50 pt-3">
            <div className="md:pl-40">
            <motion.div
    initial={{ opacity: 0, x: '40vw' }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ x: isRightSide ? '-50vw' : 0, transition: { duration: 4.5 } }}
    transition={{
        opacity: { duration: 1 }, // adjust this value to make the fade in faster
        x: { duration: 2.1 }, // adjust this value to make the initial load faster
    }}
>
            
                <div className="bg-white border border-off-white drop-shadow-2xl md:w-[140vw] mb-16">
                    {/* <div className="bg-white border border-off-white drop-shadow-2xl lg:w-[150rem] mb-16"> */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                        <div className="relative object-contain lg:col-span-1" style={{ aspectRatio: "16/9" }}>
                            {playbackId && <MuxPlayerComponent playbackId={playbackId} />}
                            {src && <Image {...props} src={src} fill={fill} alt={alt} />}
                        </div>


                        {/* <div className="relative object-contain lg:col-span-1" style={{ aspectRatio: "16/9" }}>
                            {playbackId2 && <MuxPlayerComponent playbackId={playbackId2} />}
                            {src2 && <Image {...props} src={src2} fill={fill} alt={alt} />}
                            <p className="invisible md:visible text-chip-deep-gray absolute text-[0.6rem] tracking-[0.2rem] font-AvenirHeavy" style={{ top: '31.5rem' }}>INFO</p>
                            <p className="invisible md:visible absolute text-1xl font-Avenir" style={{ top: '33.3rem' }}>{subTitle}</p>
                        </div> */}

                        <div className="relative object-cover lg:col-span-1 flex flex-col" style={{ aspectRatio: "16/9" }}>
                            <div className="block">
                                {playbackId2 && <MuxPlayerComponent playbackId={playbackId2} />}
                                {src2 && <Image {...props} src={src2} fill={fill} alt={alt} />}
                            </div>
                            {/* <div className="mt-4"> 
        <p className="relative hidden md:block text-chip-deep-gray text-[0.6rem] tracking-[0.2rem] z-80 font-AvenirHeavy">INFO</p>
        <p className="hidden md:block text-1xl z-80 font-Avenir">{subTitle}</p>
    </div> */}
                        </div>







                        <div className="relative object-contain lg:col-span-1" style={{ aspectRatio: "16/9" }}>
                            {src3 && <Image {...props} src={src3} fill={fill} alt={alt} />}
                        </div>


                        {/* 
                        <div className="grid">
                            <h5 className=" ml-1 md:ml-5 mt-11 text-4xl font-Avenir tracking-tight text-gray-900 p-5 lg:col-span-3">{content}</h5>
                            <div className="mt-4">
                                <p className="relative hidden md:block text-chip-deep-gray text-[0.6rem] tracking-[0.2rem] z-80 font-AvenirHeavy">INFO</p>
                                <p className="hidden md:block text-1xl z-80 font-Avenir">{subTitle}</p>
                            </div>
                        </div> */}


                        <div className="grid">
                            <h5 className=" ml-1 md:ml-5 mt-11 text-4xl font-Avenir tracking-tight text-gray-900 p-5 lg:col-span-3">{content}</h5>
                        </div>



                        {/* <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-500 h-32">
                                <p className="relative hidden md:block text-chip-deep-gray text-[0.6rem] tracking-[0.2rem] z-80 font-AvenirHeavy">INFO</p>
                            </div>
                            <div className="bg-red-500 h-32">
                                <p className="hidden md:block text-1xl z-80 font-Avenir">{subTitle}</p>
                            </div>
                        </div> */}



                        <div className="grid grid-cols-1">
                                <p className="hidden md:block text-chip-deep-gray text-[0.6rem] tracking-[0.2rem] z-80 font-AvenirHeavy mt-10">INFO</p>
                                <p className="hidden md:block text-1xl z-80 font-Avenir">{subTitle}</p>
                        </div>


                        <div className="md:flex flex-col justify-end">
    <button className="hidden md:block bg-white hover:bg-regal-gray font-Avenir text-1xl text-stone-800 hover:text-stone-200 border border-edge-white py-4 px-4 w-60 h-16 right-0">
        View Case Study
    </button>
</div>


                        <div className='pt-1 pl-6 relative lg:col-span-3'>
                            <article className="md:hidden block text-1xl font-Avenir mt-12 text-balance w-60 leading-6 relative">{subTitle}</article>
                        </div>

                    </div>
                    <div className="divide-y-2 divide-linear pt-4  md:pt-8 lg:col-span-3">
                        <div></div>
                        <div></div>
                    </div>
                    <div className='py-4 md:p-4 flex flex-row text-nowrap overflow-x-scroll no-scrollbar gap-4 lg:col-span-3'>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirMedium relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">{chip1}</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirMedium relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">{chip2}</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirMedium relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">{chip3}</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="group text-chip-deep-gray border-2 border-off-white whitespace-nowrap font-AvenirMedium relative h-9 overflow-hidden text-xs tracking-widest text-overflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">{chip4}</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-800 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
                    </div>
                </div>
           
        </motion.div>
        </div>
        </div>
    );
}

export default Card;








