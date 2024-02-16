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
import arcPanel1 from "../image/ArcPanel1.png"
import arcPanel2 from "../image/ArcPanel2.png"
import arcPanel3 from "../image/ArcPanel3.png"
import grassLand from "../image/grassLand.png"
import arrow from "../image/arrow.svg"
import cursor from "../image/cursor.svg"
import AnimatedTextWord from '../../components/AnimatedTextWord';
'use client';
import { Carousel } from 'flowbite-react';
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
            className="absolute z-1 text-gray-900 top-0 left-0 w-full cursor-default bg-off-white"
        >
            <main>
                <div className=''>
                    <div className='pl-5 lg:px-48 py-1 '>

                    </div>

                    {/* <div class="body sticky top-0 z-[1000] flex h-20 flex-row items-center bg-gray-200">Nav content here</div> */}

                    <div className='bg-hero-pattern4 bg-cover pt-6'>
                        <div className="flex justify-center items-center lg:px-48 px-4 pt-48">

                            <h1
                                className=' text-left mr-1 text-[48px] lg:text-4xl leading-[3rem] lg:leading-15 tracking-relaxed drop-shadow-xl max-w-sm md:max-w-3xl pt-6 pb-20 font-Garamond text-stone-200'>Conscious and impactful user experience design through brand strategy and digital storytelling.
                            </h1>

                        </div>
                    </div>



                    <div class="pl-40 py-1">
                        <p class="pt-20 text-[0.7rem] tracking-widest text-stone-500 font-AvenirHeavy">PROJECTS</p>
                    </div>



                    <div className="md:overflow-x-scroll scroll-smooth no-scrollbar snap-x duration-1000 ease-in-out z-50 pt-5">

                        <div className="md:pl-40">
                            <div class=" bg-white border border-off-white drop-shadow-2xl lg:w-[150rem] mb-16">
                                <a href="#">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                                        <Image className="md:scroll-ml-48 snap-start" width={1000}
                                            src={momentPanelRedux1}
                                        />
                                        <div>
                                            <Container>
                                            <MuxPlayer muted autoPlay="muted" 
                                                streamType="on-demand"
                                                playbackId="02PYj9uQZu021zfxYQurnOBIhBn02x9YRHWXnW8iOzRPXg"
                                                metadataVideoTitle="Placeholder (optional)"
                                                metadataViewerUserId="Placeholder (optional)"
                                                primaryColor="#FFFFFF"
                                                secondaryColor="#000000"
                                                thumbnailTime="22"
                                                autoplay="any"
                                            />
                                            </Container>
                                            <p className="invisible md:visible pt-[3.1rem] text-chip-deep-gray absolute text-[0.6rem] tracking-[0.2rem] font-AvenirHeavy ">ABOUT:</p>
                                            <p className="invisible md:visible pt-[4.8rem] absolute text-1xl font-Avenir">A new brand and website to disrupt the energy industry.</p>
                                        </div>
                                        <div>
                                            <Image
                                                src={momentPanelRedux1}

                                            />
                                            {/* <p>yoooo</p> */}
                                        </div>
                                        {/* <Image
                                            src={momentPanelRedux1}
                                        /> */}
                                    </div>
                                </a>
                                <div class="">
                                    <a href="#">
                                        <h5 class="mb-2 ml-1 md:ml-5 mt-11 text-4xl font-Avenir tracking-tight text-gray-900 p-5">Moment Energy</h5>
                                    </a>

                                    <div className='pt-5 pl-6'>
                                        <article className="md:invisible visible text-1xl font-Avenir text-balance w-60 leading-6">A new brand and website to disrupt the energy industry.</article>
                                    </div>

                                    <div class="divide-y-2 divide-linear divide-off-white pt-10 md:pt-0">
                                        <div></div>
                                        <div>
                                        </div>


                                    </div>
                                    <div className='py-4 md:p-4 flex flex-row text-nowrap overflow-x-scroll no-scrollbar'>
                                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                                            <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-off-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr:1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">BRAND IDENTITY</button>
                                        </Link>
                                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                                            <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-off-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr-1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">LOGO DESIGN</button>
                                        </Link>
                                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                                            <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-off-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr-1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">PITCH DECKS</button>
                                        </Link>
                                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                                            <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-off-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr-1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">PITCH DECKS</button>
                                        </Link>
                                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                                            <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-off-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr-1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">PITCH DECKS</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>











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
                                                            <h4 className="font-Garamond pt-3 text-5xl text-stone-200 tracking-tighter">Let's get in touch:</h4>
                                                            <h5 className="font-Avenir pt-2 text-stone-200 tracking-normal text-[1.4rem]">Available November 2023 for design opportunities.</h5>
                                                        </div>
                                                        {/* DIV 2 */}

                                                        <div className="pt-20">
                                                            <button class="bg-stone-900 hover:bg-white font-Avenir text-1xl text-white hover:text-stone-800 hover:border border-stone-800 py-4 px-4 w-60 h-15 right-0">
                                                                Contact Me
                                                            </button></div>

                                                    </div>
                                                </div>

                                                {/* TEST ZONE END */}



                                                <div className="divide-y divide-stone-700">
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




                                                            <div className="col-span-2 md:border-l  border-stone-300">
                                                                <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                                                                    <h2 className="text-stone-700 font-SFpro leading-relaxed pt-20 md:pt-0 md:pl-10">Resume
                                                                    </h2>
                                                                </Link>
                                                                <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}><h2 className="text-stone-800 font-Avenir  leading-relaxed gap-10 md:pl-10 pt-5">A degree in design at Simon Fraser University and 5 years of freelance work experience.</h2>
                                                                </Link>

                                                                <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                                                                    <Image className="pt-10 md:ml-10 transition ease-in-out delay-15 hover:translate-x-3" src={arrow}></Image>
                                                                </Link>
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