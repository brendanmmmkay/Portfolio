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
            <main className="bg-white pt-40">
                <div className="pt-40 px-4">





                    <div className="grid grid-cols-3 gap-y-4">
                        <div className="col-span-3">


                            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                <div className="h-96">
                                    <MyModal Component={Moment} className="px-0">
                                        <MuxPlayerComponent playbackId="OrtKMk2dEzaj02iJRdo00uMXdohEkMznl29vQAf2JmFz4" />
                                    </MyModal>
                                </div>
                            </div>

                        </div>


                        <div className=" text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                MOMENT ENERGY
                            </div>
                        </div>
                        <div className="ml-4 text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                <div>
                                    CONTEXT
                                    <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                        <div>A NEW WEBSITE AND BRAND TO DISRUPT THE ENERGY STORAGE INDUSTRY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" text-stone-500">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                EPOCH
                            </div>
                            <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                <div>DECEMBER 2022 - ONGOING</div>
                            </div>
                        </div>





                        <div className="col-span-3 pt-10">

                            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                <div className="h-96">
                                    <MyModal Component={InSearchOf}>
                                        <MuxPlayerComponent playbackId="qsbvW5V44mhboekAB4CAKYyzeTycM7KCokPVbYZO02iE" />
                                    </MyModal>
                                </div>
                            </div>


                        </div>





                        <div className="">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                <div>
                                    MOMENT ENERGY
                                    <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                        <div>INTERNSHIP</div>
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
                        <div className="">
                            <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                EPOCH
                            </div>
                            <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                <div>DECEMBER 2022 - ONGOING</div>
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
                        <div className="bg-gray-200 h-20">

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
                        <div className="bg-gray-200 h-20">

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











                    <div className="grid grid-cols-3 gap-4">

                        yo








                    </div>



                    <div className="divide-y divide-stone-100 opacity-50 pt-40">
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