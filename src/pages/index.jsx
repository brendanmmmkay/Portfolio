'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image'
import Video from 'next-video';
import getStarted from '/videos/get-started.mp4';
import VideoComponent from '../../components/VideoComponent';
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
// import cursor from "../image/cursor.svg"
import AnimatedTextWord from '../../components/AnimatedTextWord';
import { Carousel } from 'flowbite-react';
import Footer from '../../components/footer.js/Footer';
import Card from '../../components/Card.js';
// import Images from '@/image';
// import { images } from '../../next.config';
import MuxPlayerComponent from '../../components/MuxPlayer';
import LazyCardWrapper from '../../components/LazyCard';
import Paragraph from '../../components/paragraph';
import FooterDark from '../../components/FooterDark';
import wordMark from "../../components/wordMark.svg"
import Clipboard from '../../components/Clipboard';
// import MyModal from '../../components/Modal.jsx';
import InSearchOf from './insearchof';
import Moment from './moment';
import Arcteryx from './arcteryx';
import GradientTrail from './GradientTrail';
import brendanPS2 from "../image/brendanPS2.png"
import cityLights from '/videos/citylights.mp4';
import vesperFine from '/videos/vesperfine.mp4';
import isoScroll from '/videos/isoScroll.mp4';
import orangeTerrain from '/videos/orangeterrain.mp4';
import vesperGreen from '../image/vesperGreen.png';
import businessCard from '../image/businessCard.png';
import UnderlineButton from '../../components/button.js';
import RainDrop from '../../components/rain.js';
import MovingRectangles from '../../components/cloud.js';
import moon from '../image/moon.png';
import house from '../image/house.svg';
import sky from '../image/sky.svg';
import Eyeball from '../../components/eye.jsx';
import FadeInOnScroll from '../../components/sunset.jsx';
import FadeInRectangle from '../../components/waningsky.jsx';
import VideoZoom from '../../components/videoZoom.jsx';
import SunSet from '../../components/waningsky.jsx';
import FadeInOnScrollBackground from '../../components/sunset.jsx';
import TwilightFade from '../../components/twilight.jsx'
import MaskedCursor from '../../components/MaskedCursor.jsx';
import Aria from './aria.js';
import TextBox from '../../components/TextBox.jsx';
import Navbar from '../../components/Navbar';
import TextRevealTW from '../../components/TextReveal.tsx';

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);



    };

    return (
        <div id="root">
            <head>
                <title>Hello</title>
                <link rel="icon" href="/favicon.ico" />

            </head>
        </div>,
        <div>
            <main className=" bg-kenya-hara">


                {/* <MaskedCursor></MaskedCursor> */}

                <div className="block md:hidden">
                    <div className="px-4">
                        <Link href="/">
                            <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRENDAN MCKAY — [03.24.24] <br></br>BRAND DESIGNER AND PRODUCT STRATEGIST</li>
                        </Link>
                    </div>
                </div>
                {/* <h2 className="hidden md:block text-stone-400 font-SFpro text-xxs gap-10 pt-[4rem] pl-5">
                    I am looking for exciting new projects and opportunities to <br></br>make impactful design. Reach out for collaboration!
                </h2> */}





                <div className="ml-2 pt-5">
                    <Eyeball></Eyeball>
                </div>







                <div className="pt-40 px-4">

          

                    {/* <VideoZoom></VideoZoom> */}
                    <div id="modal-root"></div>

                    <div className="block md:hidden">
                        <h1 className="text-3xl md:text-3xl tracking-loose font-Avenir text-stone-700 leading-tighter md:leading-tighter">
                            I make aspirational value real through<br></br> user experience design & product strategy.
                        </h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 gap-4">
                            {/* <h1 className="text-3xl md:text-3xl tracking-loose font-Avenir text-stone-700 leading-tighter md:leading-tighter">
                                I make aspirational value real through<br></br> user experience design & product strategy.
                            </h1> */}
      <TextRevealTW />
                           

                            <div className="tracking-wide font-SFpro text-stone-400 text-xxs max-w-lg">

                                <p className="pb-5">
                                    HELLO!
                                </p>

                                <p>
                                    MY CRAFT IS DEFINED BY MY APPROACH; METICULOUSLY DETAILED, SOCIALLY CONSCIOUS, AND VALUE BASED. MEANINGFUL WORK FOR ME IS WHEN I CAN ELIMINATE FRICTIONS FOR PEOPLE IN NEED. I FEEL FULFILLED WHEN I CREATE A VALUABLE SOLUTION THAT INCORPORATES PLAY AND SPARKS JOY. I ENJOY WEAVING PUNCHY AND POWERFUL VISUAL LANGUAGE WITH ELEGANT AND THOUGHTFUL EXPERIENCES. I CARRY MY PASSION FOR PROBLEM SOLVING ACROSS INDUSTRIES AND DISCIPLINES, UNDERSTANDING THAT CREATING VALUE FOR PEOPLE IS THE PURPOSE OF DESIGN.
                                </p>
                            </div>
                        </div>
                    </div>




                    <div className="tracking-wide font-SFpro text-stone-400 text-xxs pt-10">
                        <div>[FEATURED PROJECTS]</div>
                    </div>

                    <div className="grid grid-cols-3 gap-y-4 cursor-pointer">


                        <div className="hidden md:block col-span-3 pt-5">

                            <VideoZoom project={InSearchOf} playbackId="W1tCvXEcikb01SJO0201MBpdgq17lCtKgU6VtprSweuWQ00" />
                            {/* <div className="rounder cursor-pointer hover:shadow-2xl transition-shadow duration-500">
                                <MyModal Component={InSearchOf} className="px-0">
                                    <MuxPlayerComponent className="rounder" playbackId="W1tCvXEcikb01SJO0201MBpdgq17lCtKgU6VtprSweuWQ00" />
                                </MyModal>
                            </div> */}

                        </div>

                        <div className="contents md:hidden col-span-3 pt-10">
                            <div className="rounderFlat">
                                <Link href="/insearchof">
                                    <MuxPlayerComponent className="" playbackId="019702D00dSt00J82rNhLOnHZQxx9MVCyAZHJgCvXyjz3R8" />
                                </Link>
                            </div>
                        </div>



                        </div>
                    
                        <div className="grid grid-cols-2 w-full">
                            <div className="">
                                <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                    <div>
                                        <button role="link" className="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">IN SEARCH OF</button>

                                        <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
                                            <div>FREELANCE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pl-2">
                                <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                    <button role="link" className="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">CONTEXT</button>
                                </div>
                                <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
                                    <div>A CURATED AND EDUCATIONAL DESIGN DIRECTORY</div>
                                </div>
                            </div>
</div>
                      

                     
                        





<div className="hidden md:block col-span-3 pt-10">

<VideoZoom project={Moment} playbackId="jQINbX00JYpZpPZLn3ED8VmoMcxQ741a5GOAfR6DITGw" />
{/* <div className="rounder hover:shadow-2xl transition-shadow duration-500">
    <MyModal Component={Moment} className="px-0">
        <MuxPlayerComponent className="rounder" playbackId="jQINbX00JYpZpPZLn3ED8VmoMcxQ741a5GOAfR6DITGw" />
    </MyModal>
</div> */}
</div>


<div className="rounderFlat contents md:hidden col-span-3 pt-10 ">
<div style={{ borderRadius: '8px', overflow: 'hidden' }}>
    <Link href="/moment">
        <MuxPlayerComponent className="" playbackId="zlM8Mryy00bGsUzAFj6OrGcOgH5uNbbbNHQStMtGiaIY" />
    </Link>
</div>
</div>









<div className="grid grid-cols-2 w-full">
<div className=" text-stone-500">
    <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
        <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">MOMENT ENERGY</button>
    </div>
    <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
        <div>INTERNSHIP</div>
    </div>
</div>

<div className="pl-2 text-stone-500">
    <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
        <div>
            <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">CONTEXT</button>
            <div className="tracking-wide font-SFpro text-stone-400 text-xxs">

                <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-stone-400 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">A NEW WEBSITE AND BRAND TO DISRUPT THE ENERGY STORAGE INDUSTRY</button>
            </div>
        </div>
    </div>
</div>
<div className="hidden md:block text-stone-500">
    <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">

    </div>
    <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
        <div></div>
    </div>
</div>
</div>











                        <div className="hidden md:block col-span-3 pt-5">

                            <VideoZoom project={Aria} playbackId="D4GHIo5JY2jYtubriqhE01VbXv027KjpoWxY6tRPlhKeo" />
                            {/* <div className="rounder cursor-pointer hover:shadow-2xl transition-shadow duration-500">
                                <MyModal Component={InSearchOf} className="px-0">
                                    <MuxPlayerComponent className="rounder" playbackId="W1tCvXEcikb01SJO0201MBpdgq17lCtKgU6VtprSweuWQ00" />
                                </MyModal>
                            </div> */}

                        </div>

                        <div className="contents md:hidden col-span-3 pt-10">
                            <div className="rounderFlat">
                                <Link href="/aria">
                                    <MuxPlayerComponent className="" playbackId="nGIXclfTrpmOqcFM019SlkeOTTHQJznmH3UAttTuxxOQ" />
                                </Link>
                            </div>
                        </div>




                        <div className="grid grid-cols-2 w-full">
                        <div className=" text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">ARIA</button>
                            </div>
                            <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
                                <div>JUST FOR FUN</div>
                            </div>
                        </div>
                        <div className="pl-2 text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                <div>
                                    <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">CONTEXT</button>
                                    <div className="tracking-wide font-SFpro text-stone-400 text-xxs">

                                        <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-stone-400 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">AN UNDERGROUND MUSIC EVENT TRICKET PLATFORM</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">

                            </div>
                            <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
                                <div></div>
                            </div>
                        </div>
</div>









                    <div className="grid grid-cols-2 gap-4 pt-10">
                        <div className="">

                            <div className="relative group">
                                <div className="rounded-lg overflow-hidden relative transition ease-in-out delay-150 hover:shadow-md">
                                    <Link href="/arcteryx">
                                        <Image
                                            src={arcPanel1}

                                        />
                                    </Link>





                                    {/* <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-500 rounded-lg cursor-pointer">
                                        <span className="text-white text-lg opacity-0 group-hover:opacity-100 font-SFpro text-xxs transition-opacity duration-500">COMING SOON</span>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                        ARCTERYX SFU
                                    </div>
                                    <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
                                        <div>ACADEMIC</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" h-20">

                            <div className="relative group">
                                <div className="rounded-lg overflow-hidden relative">
                                    <Image
                                        src={boschPanel1}

                                    />
                                    <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-500 rounded-lg cursor-pointer">
                                        <span className="text-white text-lg opacity-0 group-hover:opacity-100 font-SFpro text-xxs transition-opacity duration-500">COMING SOON</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                        BOSCH COURIER CONNECT
                                    </div>
                                    <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
                                        <div>ACADEMIC</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div className=" h-20">

                            <div className="relative group">
                                <div className="rounded-lg overflow-hidden relative">
                                    <Image
                                        src={brendanPS2}

                                    />
                                    <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-500 rounded-lg">
                                        <span className="text-white text-lg opacity-0 group-hover:opacity-100 font-SFpro text-xxs transition-opacity duration-500">HELLO!</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">

                                    </div>
                                    <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
                                        <div></div>
                                    </div>
                                </div>
                            </div>

                        </div> */}
                    </div>






                    {/* <GradientTrail></GradientTrail> */}






                    <div className="hidden md:block pt-40">

                    </div>




                    <div className="grid md:hidden grid-cols-3 gap-4 pt-20">

                        <div>
                            <Link href="/Brendan_McKay_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">
                                {/* <button className="group text-chip-deep-gray borderColor-off-white font-SFpro relative h-6 overflow-hidden text-xxs tracking-wider text-toverflow-x-hidden rounded-8 bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">RESUME</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button> */}
                                <button className="text-xxs font-SFpro text-stone-600 pr-10">RESUME</button>
                            </Link>
                            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                                {/* <button className="group text-chip-deep-gray borderColor-off-white font-SFpro relative h-6 overflow-hidden text-xxs tracking-wider text-toverflow-x-hidden rounded-8 bg-white px-8 py-1 cursor-pointer text-neutral-750"><span className="relative z-10">LINKEDIN</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button> */}
                                <button className="text-xxs font-SFpro text-stone-600 pr-10">LINKEDIN</button>
                            </Link>
                            <Clipboard text="BPMCKAY@SFU.CA" />
                        </div>
                    </div>



                    <div className="divide-y divide-stone-100 opacity-50 pt-10 md:pt-40">
                        <div></div>
                        <div>
                        </div>
                    </div>

                </div>



                <div className='mt-10 px-4 py-4 max-w-full'>
                    <div className='bg-hero-pattern4 bg-cover max-w-full'>
                        <Footer />
                    </div>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-3 pb-2 min-w-full gap-2 px-2">
                    <div>
                        <VideoComponent src={cityLights} delay={0} />
                    </div>
                    <div>
                        <VideoComponent src={isoScroll} delay={0.2} />
                    </div>
                    <div>
                        <Image className="rounded-lg overflow-hidden" src={businessCard} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3  pb-0 min-w-full gap-2 px-2">
                    <div>
                        <VideoComponent src={orangeTerrain} delay={0.6} />
                    </div>
                    <div>
                        <Image className="rounded-lg" src={vesperGreen} />
                    </div>
                    <div>
                        <VideoComponent src={vesperFine} delay={1} />
                    </div>
                </div>


                <div className="mt-1"></div>

                <div className="divide-y divide-stone-100 opacity-50 pt-10 md:pt-40">
                    <div></div>
                    <div>
                    </div>
                </div>



                <TwilightFade >
                    
                </TwilightFade>

                {/* <div className="pt-40  text-stone-800 text-2xl">yooooo im a div wit text</div>
 */}

                {/* <div class="animated-div"></div> */}
                {/* <FadeInOnScroll></FadeInOnScroll> */}

                <FadeInOnScrollBackground src="/image/sky.svg">
                </FadeInOnScrollBackground>
                <div className="z-10 relative h-full">

                    {/* <Image className="z-0 absolute w-full" src={sky} /> */}


                    {/* <FadeInRectangle></FadeInRectangle> */}

                    <div className=" mt-40 pl-5 absolute z-0">
                        {/* <h1 className="text-3xl max-w-footer md:text-4xl text-left  tracking-loose font-Avenir text-stone-700 leading-tighter md:leading-tighter">
                        
                        </h1> */}


                        {/* <h2 className="text-stone-400 mt-[40rem] absolute font-SFpro text-xxs bottom-10 z-5">
    LET'S CONNECT ON MY SOCIALS!
  </h2>


                        <div className="flex gap-24 pt-10  ">
                            <Link href={"https://www.instagram.com/brandstratagem/"}>
                              
                                <div className="absolute text-xxs font-SFpro mt-[40rem] text-stone-600">
                                    <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">INSTAGRAM</button>
                                </div>
                            </Link>

                            <Link href={"https://read.cv/brendanmckay"}>
                               
                                <div className="absolute text-xxs font-SFpro mt-[40rem] text-stone-600">
                                    <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">READ.CV</button>
                                </div>
                            </Link>
                            <Link href={"https://openprocessing.org/user/439705/"}>
                               
                                <div className="absolute text-xxs font-SFpro mt-[40rem] text-stone-600">
                                   <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">OPENPROCESSING</button>
                              
                                </div>
                            </Link>
                        </div> */}

                    </div>
                    <div className="z-10"></div>


                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-3xl pt-10 max-w-footer md:text-4xl text-center tracking-loose font-Avenir leading-tighter md:leading-tighter bg-gradient-to-r from-azure-100 via-azure-200 to-azure-300 text-transparent bg-clip-text bg-300% animate-gradient">
                            {/* Practicing on the west coast of Canada.<br></br>
        Creating design solutions internationally. */}
                            Reach out for a chat, <br></br>
                            and let me determine how <br></br>
                            I can help realize your dreams.
                        </h1>
                    </div>


                    <Image className="z-0 absolute right-32 pt-20" src={moon} />

                    <MovingRectangles ></MovingRectangles>

                    <Image className="z-0 absolute right-1/3  bottom-5" src={house} />
                    {/* <div className="z-5 absolute pt-40">yoooooo</div> */}
                    <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pl-5 pb-4 absolute bottom-0 z-5">
                        2024 BRENDAN MCKAY
                    </h2>
                    <RainDrop className="z-4 absolute"></RainDrop>
                    {/* <ScrollAnimatedImage className="absolute" src={sky} /> */}


                </div>




            </main>
        </div>

    )
}