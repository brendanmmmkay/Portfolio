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
                    <div className='pl-5 py-1 '>

                    </div>

                    {/* <div className='bg-hero-pattern4 bg-cover pt-6'>
                        <div className="flex justify-center items-center lg:px-48 px-4 pt-32">

                            <h1
                                className='text-left mr-1 text-[48px] lg:text-4xl leading-[3rem] lg:leading-15 tracking-relaxed drop-shadow-xl max-w-sm md:max-w-3xl pt-6 pb-20 font-Garamond text-stone-200'>Conscious and impactful user experience design through brand strategy and digital storytelling.
                            </h1>

                        </div>
                    </div> */}


                    <div class="pl-40 py-1">
                        <p class="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">PROJECTS</p>
                    </div>

                    {/* <Card content="shootta flow"></Card> */}

                    {/* <Card content="NLE CHOPPA imageName=" >
                    </Card> */}


                    {/* <Card
                        src={Images.trains} alt="a moment" height={1000} width={1000}
                        content="Content for card 1"
                        fill={true}
                    /> */}


                    {/* <mux-player class="mux-player"></mux-player> */}


                    {/* <Card src={Images.trains} alt="a bluejay" fill={false} content="NLEEEEE" /> */}
                    {/* <mux-player class="mux-player"></mux-player> */}
                    {/* <Card src={Images.isoDuo} fill="true" alt="a bluejay" content="In Search Of" NLEmotto="something is going to happen tomorrow" /> */}


                        <div className="overflow-x-scroll">
                        <div className="md:w-[140vw] h-8 bg-blue-500">

                        </div>
                    </div>

                    <div className="w-full h-64 overflow-auto bg-gray-700 p-4 scrollbar-thumb-red-600 scrollbar-track-blue-500 scrollbar-thin rounded-none">
  {Array.from({ length: 20 }, (_, i) => (
    <p key={i} className="mb-4">
      Scrollable content line {i + 1}
    </p>
  ))}
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
                    <div class="relative h-32 w-32 ...">
                        <div class="absolute top-0 right-0 h-16 w-16 ...">03</div>
                    </div>




                    {/* <div className='tracking-tighter drop-shadow-2xl text-white pb-3 text-3xl'>
            <h4 className='font-Avenir'>Thanks for stopping by,</h4>
          </div> */}

                </div>




                {/* FOOTER */}





                <div className='bg-hero-pattern3 bg-cover pt-6'>
                    <div className='pt-3 pb-6'>



                        <div className='lg:px-[4rem] px-5'>

                            {/* <div class="flex rounded-lg bg-tahiti-300 border-tahiti-100 dark:border-tahiti-100 shadow-xl shadow-black/5 dark:shadow-black/30 pl-10"> */}
                            <div>
                                <div className="grid lg:grid-cols-1 sm:grid-cols-1 content-end">
                                    <div className="pt-3 gap-40">
                                        <div className="text-base">


                                            {/* TEST ZONE START */}
                                            <div className='px-0 lg:px-48 py-1'>

                                                {/* FUCK */}

                                                <div class="grid w-full items-center pb-5">
                                                    <div class="w-full justify-between flex space-x-2 flex-col md:flex-row">
                                                        {/* DIV 1 */}
                                                        <div className=' drop-shadow-2xl  pb-3 text-3xl'>
                                                            <h4 className="font-Garamond pt-3 text-4xl md:text-5xl text-stone-200 tracking-tighter">Let's get in touch!</h4>
                                                            <h5 className="font-Avenir pt-2 text-stone-400 leading-snug md:leading-normal tracking-normal text-[1.1rem] md:text-[1.4rem]">Available March 2023 for design opportunities.</h5>
                                                        </div>
                                                        {/* DIV 2 */}

                                                        <div className="pt-20">
                                                            <button class="bg-stone-200 hover:bg-stone-700 font-AvenirMedium text-1xl text-stone-800 hover:text-stone-200 hover:border-white border-stone-800 py-4 px-4 w-60 h-15 right-0">
                                                                Contact Me
                                                            </button></div>

                                                    </div>
                                                </div>

                                                {/* TEST ZONE END */}



                                                <div className="divide-y divide-stone-600">
                                                    <div></div>
                                                    <div>
                                                    </div>
                                                </div>

                                                {/* <div class="w-full justify-between flex space-x-2 flex-col md:flex-row">
                      <h6 className="pt-20 font-SFproBold text-[14px] text-stone-600 uppercase tracking-[.15em]">competencies</h6> */}
                                                <h6 className="pt-20 font-SFproBold text-[15px] text-stone-400 uppercase tracking-[.2em]">competencies</h6>
                                                {/* </div> */}


                                                <div>

                                                    <div className='mt-20 mb-10 p-1'>
                                                        <div className="grid grid-cols-0 md:grid-cols-5 gap-0 md:gap-16">

                                                            <div class="text-white">
                                                                {/* <div className="font-Avenir text-1xl">
                                Contribution
                              </div> */}
                                                                <div className="font-Avenir tracking-wide text-stone-300">
                                                                    <div>Design Strategy</div>
                                                                    <div>Art Direction</div>
                                                                    <div>Product Design</div>
                                                                    <div>Interaction Design</div>
                                                                </div>
                                                            </div>


                                                            <div class="text-white divide-x">
                                                                {/* <div className="font-Avenir text-1xl">
                                Tools
                              </div> */}
                                                                <div className="text-stone-300 tracking-wide font-Avenir">
                                                                    <div>Figma</div>
                                                                    <div>Miro</div>
                                                                    <div>Photoshop</div>
                                                                    <div>Illustrator</div>
                                                                </div>
                                                            </div>

                                                            <div class="text-white divide-x">
                                                                {/* <div className="font-Avenir text-1xl pr-5">
                                Tools
                              </div> */}
                                                                <div className="text-stone-300 tracking-wide font-Avenir pr-5 pt-10 md:pt-0">
                                                                    <div>Sprinting</div>
                                                                    <div>Copywriting</div>
                                                                    <div>User Research</div>
                                                                    <div>Project Management</div>
                                                                </div>
                                                            </div>




                                                            <div className="col-span-2 md:border-l  border-stone-600">
                                                                <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                                                                    <h2 className="text-stone-200 font-SFpro leading-relaxed pt-20 md:pt-0 md:pl-10">Resume
                                                                    </h2>
                                                                </Link>
                                                                <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}><h2 className="text-stone-300 font-Avenir  leading-relaxed gap-10 md:pl-10 pt-5">A degree in design at Simon Fraser University and 5 years of freelance work experience.</h2>
                                                                </Link>
                                                                <div className="md:pl-6">
                                                                    <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                                                                        <button class="group relative inline-flex h-12 md:w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-150"><div class="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-200"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                                                                    </Link>
                                                                </div>
                                                            </div>


                                                            {/* <div class="grid grid-cols-3 divide-x">
  <div>01</div>
  <div>02</div>
</div> */}





                                                        </div>
                                                    </div>

                                                    {/* center align */}
                                                    <div className="font-Avenir text-[14px] text-stone-400 grid grid-flow-col justify-center pt-40">
                                                        <div>Developed with Next.js and React by Brendan McKay</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}