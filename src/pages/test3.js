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



export default function Home() {
    return (
            <head>
                <title>Hello</title>
                <link rel="icon" href="/favicon.ico" />


            </head>,
            <main className="">
               


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
                            path="/insearchof"
                            sectionid="isoProductDesign"
                            chip1="PRODUCT DESIGN"
                            chip2="LOGO DESIGN"
                            chip3="INTERACTION DESIGN"
                            chip4="SPRINT PROCESS"
                        />
                    </Link>


               




             
            </main>
      
    )
}