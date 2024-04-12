'use client';
import React, { useState, useRef } from 'react';
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
// import Images from '@/image';
// import { images } from '../../next.config';
import MuxPlayerComponent from '../../components/MuxPlayer';
import LazyCardWrapper from '../../components/LazyCard';
import Paragraph from '../../components/paragraph';
import FooterDark from '../../components/FooterDark';
import wordMark from "../../components/wordMark.svg"
import Clipboard from '../../components/Clipboard';
import MyModal from '../../components/Modal';
import InSearchOf from './insearchof';
import Moment from './moment';
import GradientTrail from './GradientTrail';
import brendanPS2 from "../image/brendanPS2.png"





export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <head>
                <title>Hello</title>
                <link rel="icon" href="/favicon.ico" />

            </head>
        </div>,
        <div>
            <main className="bg-white">




                <div className="block md:hidden">
                    <div className="px-4">
                        <Link href="/">
                            <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRENDAN MCKAY — [03.24.24] <br></br>BRAND DESIGNER AND PRODUCT STRATEGIST</li>
                        </Link>
                    </div>
                </div>








                <div className="pt-40 px-4">
                    <div className="grid grid-cols-3 gap-y-4 pt-40">









                        <div className="hidden md:block col-span-3 pt-10">

                            <div className="rounder">
                                <MyModal Component={InSearchOf} className="px-0">
                                    <MuxPlayerComponent className="rounder" playbackId="W1tCvXEcikb01SJO0201MBpdgq17lCtKgU6VtprSweuWQ00" />
                                </MyModal>
                            </div>


                        </div>

                        <div className="contents md:hidden col-span-3 pt-10">
                            <div className="rounderFlat">
                                <Link href="/insearchof">
                                    <MuxPlayerComponent className="rounderFlat" playbackId="019702D00dSt00J82rNhLOnHZQxx9MVCyAZHJgCvXyjz3R8" />
                                </Link>
                            </div>
                        </div>





                        <div className="">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                <div>
                                    IN SEARCH OF
                                    <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                        <div>FREELANCE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                CONTEXT
                            </div>
                            <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                <div>A NEW WEBSITE AND BRAND TO DISRUPT THE ENERGY STORAGE INDUSTRY</div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                EPOCH
                            </div>
                            <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                <div>DECEMBER 2022 - ONGOING</div>
                            </div>
                        </div>





                        <div className="hidden md:block col-span-3 pt-10">

                            <div className="rounder">
                                <MyModal Component={Moment} className="px-0">
                                    <MuxPlayerComponent className="rounder" playbackId="jQINbX00JYpZpPZLn3ED8VmoMcxQ741a5GOAfR6DITGw" />
                                </MyModal>
                            </div>


                        </div>

                        <div className="contents md:hidden col-span-3 pt-10">
                            <div className="rounderFlat">
                                <Link href="/moment">
                                    <MuxPlayerComponent className="rounderFlat" playbackId="zlM8Mryy00bGsUzAFj6OrGcOgH5uNbbbNHQStMtGiaIY" />
                                </Link>
                            </div>
                        </div>


                        <div className=" text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                MOMENT ENERGY
                            </div>
                        </div>
                        <div className=" text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                <div>
                                    CONTEXT
                                    <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                        <div>A NEW WEBSITE AND BRAND TO DISRUPT THE ENERGY STORAGE INDUSTRY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                EPOCH
                            </div>
                            <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                <div>MARCH 2024</div>
                            </div>
                        </div>




                    </div>







                    <div className="grid grid-cols-3 gap-4 pt-10">
                        <div className="">

                            <div className="relative group">
                                <div className="rounded-lg overflow-hidden relative">
                                    <Image
                                        src={arcPanel1}

                                    />
                                    <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-500 rounded-lg">
                                        <span className="text-white text-lg opacity-0 group-hover:opacity-100 font-SFpro text-xxs transition-opacity duration-500">COMING SOON</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                        ARCTERYX SFU
                                    </div>
                                    <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
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
                                    <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-500 rounded-lg">
                                        <span className="text-white text-lg opacity-0 group-hover:opacity-100 font-SFpro text-xxs transition-opacity duration-500">COMING SOON</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                        BOSCH COURIER CONNECT
                                    </div>
                                    <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                        <div>ACADEMIC</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" h-20">

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
                                    <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                        <div></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>






                    {/* <GradientTrail></GradientTrail> */}






                    <div className="hidden md:block pt-40">

                    </div>




                    <div className="grid md:hidden grid-cols-3 gap-4 pt-40">

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
                <div className='mt-10 px-4 py-4'>
                    <div className='bg-hero-pattern4 bg-cover'>
                        <Footer />
                    </div>
                </div>

            </main>
        </div>

    )
}