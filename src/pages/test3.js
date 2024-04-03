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
import Images from '@/image';
import { images } from '../../next.config';
import MuxPlayerComponent from '../../components/MuxPlayer';
import LazyCardWrapper from '../../components/LazyCard';
import Paragraph from '../../components/paragraph';
import FooterDark from '../../components/FooterDark';
import wordMark from "../../components/wordMark.svg"
import Clipboard from '../../components/Clipboard';
import brendanPS2 from "../image/brendanPS2.png"



export default function Home() {
    return (
        <div>
            <head>
                <title>Hello</title>
                <link rel="icon" href="/favicon.ico" />


            </head>
        </div>,
        <div

        >
            <main>
     

                    
                        <div className="flex justify-center items-center pt-4 pb-4 bg-white">
                           
                        
030303030



</div>


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


             
            </main>
        </div>
    )
}