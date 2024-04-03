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
import ScrollOnHover from '../../components/ScrollButton';
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


                    <div className="pl-40 py-1">
                        <p className="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">PROJECTS</p>
                    </div>





                    {/* <Card content="shootta flow"></Card> */}

                    {/* <Card content="NLE CHOPPA imageName=" >
                    </Card> */}


                    {/* <Card
                        src={Images.trains} alt="a moment" height={1000} width={1000}
                        content="Content for card 1"
                        fill={true}
                    /> */}


                    {/* <mux-player className="mux-player"></mux-player> */}


                    {/* <Card src={Images.trains} alt="a bluejay" fill={false} content="NLEEEEE" /> */}
                    {/* <mux-player className="mux-player"></mux-player> */}
                    {/* <Card src={Images.isoDuo} fill="true" alt="a bluejay" content="In Search Of" NLEmotto="something is going to happen tomorrow" /> */}




                    {/* <div className="overflow-x-scroll no-scrollbar duration-1000 ease-in-out z-50 pt-3">
            <button 
                className="px-4 py-2 bg-blue-500 text-white"
                onMouseEnter={(e) => {
                    e.currentTarget.parentElement.style.transform = 'translateX(-100px)';
                    e.currentTarget.parentElement.style.transition = 'transform 0.5s ease';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.parentElement.style.transform = 'translateX(0)';
                    e.currentTarget.parentElement.style.transition = 'transform 0.5s ease';
                }}
            >
                Hover me
            </button>
 
 
        </div> */}



{/* 

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
</div> */}



         



                    {/* NEW FOOTER */}


                    {/* <!-- Pin to top right corner --> */}
                    <div className="relative h-32 w-32 ...">
                        <div className="absolute top-0 right-0 h-16 w-16 ...">03</div>
                    </div>




                    {/* <div className='tracking-tighter drop-shadow-2xl text-white pb-3 text-3xl'>
            <h4 className='font-Avenir'>Thanks for stopping by,</h4>
          </div> */}

                </div>




                {/* FOOTER */}





            </main>
        </div>
    )
}


