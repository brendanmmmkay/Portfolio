'use client';
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Head from 'next/head';
import { motion } from "framer-motion";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import test1 from "../image/TWimgTest.png"
import test2 from "../image/isoCardDuo.png"
import boschPanel1 from "../image/boschPanel1.png"
import boschPanel2 from "../image/boschPanel2.png"
import boschPanel3 from "../image/boschPanel3.png"
import momentPanel1 from "../image/momentPanel1.png"
import momentPanel2 from "../image/momentPanel2.png"
import momentPanel3 from "../image/momentPanel3.png"
import momentPanelRedux1 from "../image/momentTrains.png"
import momentTrainSplash from "../image/momentTrainStation.png"
import momentProductDetail from "../image/momentProductDetail.png"
import arcPanel1 from "../image/ArcPanel1.png"
import arcPanel2 from "../image/ArcPanel2.png"
import arcPanel3 from "../image/ArcPanel3.png"
import grassLand from "../image/grassLand.png"
import arrow from "../image/arrow.svg"
import cursor from "../image/cursor.svg"
import AnimatedTextWord from '../../components/AnimatedTextWord';
import { Carousel } from 'flowbite-react';
import Footer from '../../components/footer.js/Footer';
import Card from '../../components/Card.js';
import Images from '@/image';
import { images } from '../../next.config';
import MuxPlayerComponent from '../../components/MuxPlayer';
import LazyCardWrapper from '../../components/LazyCard';
import Paragraph from '../../components/paragraph';
import FooterDark from '../../components/FooterDark';
// import { Container } from './components/styles/Container.styled';
// const carousel = new Carousel(carouselElement, items, options, instanceOptions);
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <head>
                <title>Hello</title>
                <link rel="icon" href="/favicon.ico" />


            </head>
        </div>,
        <div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="absolute z-1 text-gray-900 top-0 left-0 w-full cursor-default bg-tahiti-400"
        >
            <main>
                <div className=''>
                    {/* <div className='pl-5 md:py-1 '>

                    </div> */}

<div className="block md:hidden">
                    <div className='bg-hero-pattern4 bg-cover pt-6'>
                        <div className="flex justify-center items-center lg:px-48 px-4 pt-32">

                            <h1
                                className='text-left mr-1 text-[48px] lg:text-4xl leading-[3.5rem] lg:leading-15 tracking-relaxed drop-shadow-xl max-w-sm md:max-w-3xl pt-6 pb-20 font-Garamond text-stone-200'>Conscious and impactful user experience design through brand strategy and digital storytelling.
                            </h1>

                        </div>
                    </div>
</div>

                    <div className="pl-5 md:pl-40 md:pt-24">
                        <p className=" text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MY PROJECTS</p>
                    </div>



                    <Link href={"/insearchof"}>
                        <LazyCardWrapper
                            src={false}
                            src2={false}
                            src3={Images.isoThumbDuo}
                            fill="true"
                            // alt="a bluejay"
                            content="In Search Of"
                            subTitle="A digital design directory."
                            playbackId="dOM00pqI022lCLHtNFaLn6r2KZ1aI01OstRGpqleqGV6r00"
                            playbackId2="oWqKBxCME02obOSNxtb01T801ew3tcgwwOp5502l7BihPyc"
                        />
                    </Link>


                    <Link href={"/moment"}>
                        <LazyCardWrapper
                            src={Images.trains}
                            src2={false}
                            src3={Images.momentLogo}
                            fill="true"
                            // alt="a bluejay"
                            content="Moment Energy"
                            subTitle="A new brand and website to disrupt the energy industry."
                            playbackId={false}
                            playbackId2="02PYj9uQZu021zfxYQurnOBIhBn02x9YRHWXnW8iOzRPXg"
                        />
                    </Link>

                    <Link href={"/arcteryx"}>
                        <LazyCardWrapper
                            src={Images.arcyUno}
                            src2={Images.shaneJeon}
                            src3={Images.arcyDos}
                            fill="true"
                            // alt="a bluejay"
                            content="Arc'teryx x SFU"
                            subTitle="A Product Care Campaign"
                            playbackId={false}
                            playbackId2={false}
                        />
                    </Link>

                    <Link href={"/bosch"}>
                        <LazyCardWrapper
                            src={Images.boschOne}
                            src2={Images.boschTwo}
                            src3={Images.boschThree}
                            fill="true"
                            // alt="a bluejay"
                            content="Bosch Courier Connect"
                            subTitle="A safety solution for E-bike couriers"
                            playbackId={false}
                            playbackId2={false}
                        />
                    </Link>




                    {/* NEW FOOTER */}


                    {/* <!-- Pin to top right corner --> */}
                    {/* <div class="relative h-32 w-32 ...">
                        <div class="absolute top-0 right-0 h-16 w-16 ...">03 greedo</div>
                    </div> */}




                    {/* <div className='tracking-tighter drop-shadow-2xl text-white pb-3 text-3xl'>
            <h4 className='font-Avenir'>Thanks for stopping by,</h4>
          </div> */}

                </div>




                {/* FOOTER */}


<FooterDark></FooterDark>

            </main>
        </div>
    )
}