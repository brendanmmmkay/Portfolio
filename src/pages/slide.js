'use client';
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Head from 'next/head';
import { motion as m } from "framer-motion";
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
import arcPanel1 from "../image/ArcPanel1.png"
import arcPanel2 from "../image/ArcPanel2.png"
import arcPanel3 from "../image/ArcPanel3.png"
import cursor from "../image/cursor.svg"

import { Carousel } from 'flowbite-react';

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
      className="absolute z-1 text-gray-900 top-0 left-0 w-full cursor-default bg-stone-400"
    >
      <main>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

      <div class="body sticky top-0 z-[1000] flex h-20 flex-row items-center bg-gray-200">Nav content here</div>
    <div class="bg-conversly_color-blush absolute -ml-6 h-4/6 w-full md:h-2/6 lg:mt-40 lg:h-3/6"></div>
    <div class="z-1 relative mb-20 flex w-full flex-1 flex-col justify-center">About content here</div>

      <h2 className="text-gray-900">hellow world</h2>

      

<div className="h-96">
      <Carousel>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <h1
              className='text-left mr-1 text-[48px] lg:text-7xl leading-[3rem] lg:leading-15 tracking-tighter max-w-sm md:max-w-4xl pt-6 pb-20 font-NationalExtraBold text-tahiti-300'>Conscious and impactful design through brand strategy and digital storytelling.
            </h1>
            <Image
      src={boschPanel2}
      alt="..."
      />
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 2 gxsyuabxiscbuiwdbciuwebuqcuiewb
        <Image
      src={boschPanel2}
      alt="..."
      />
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <Image
      src={boschPanel2}
      alt="..."
      />
      </div>
    </Carousel>
    </div>




      <div class="w-screen h-screen">
  <div class="relative z-10" id="relative">
    <header>
      <div class="absolute top-0 z-50 w-full sm:px-12 mx-auto flex items-center justify-between py-4 shadow-2xl bg-opacity-10">
        <div class="flex items-center space-x-2">
          <button>
            <img src="https://cdn-icons-png.flaticon.com/128/3845/3845868.png" alt="Logo" class="w-10"/>
          </button>
        </div>
        <nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
          <button class="rounded bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700"> Sign Up </button>
        </nav>
      </div>
      <div id="indicators-carousel" class="relative" data-carousel="slide">
        <div class="overflow-hidden relative h-64 md:h-96">


        <Carousel className="h-96 w-full z-20">
            <div>
      <Image
        alt="..."
        src={arcPanel2}
      />yeaaaaaaaaa</div>
      <Image
      src={boschPanel2}
      alt="..."
      />
    </Carousel>
    </div>



        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true"
            aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        <button type="button"
          class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev="">
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button type="button"
          class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next="">
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
    </header>
  </div>
</div>






      <div class="w-96 h-96">
  <div class="relative z-10" id="relative">
    <header>
      <div class="absolute top-0 z-50 w-full sm:px-12 mx-auto flex items-center justify-between py-4 shadow-2xl bg-opacity-10">
        <div class="flex items-center space-x-2">
          <button>
            <img src="https://cdn-icons-png.flaticon.com/128/3845/3845868.png" alt="Logo" class="w-10"/>
          </button>
        </div>
        <nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
          <button class="rounded bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700"> Sign Up </button>
        </nav>
      </div>

      <div id="indicators-carousel" class="relative" data-carousel="slide">
        <div class="overflow-hidden relative h-64 md:h-96">
          <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            data-carousel-item="active">
            <img src="https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
              <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Fast & Easy Booking</div>
          </div>
          <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item="">
            <img src="https://images.pexels.com/photos/4489729/pexels-photo-4489729.jpeg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
              <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Many Pickup Location</div>
          </div>
          <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <img src="https://images.pexels.com/photos/4488654/pexels-photo-4488654.jpeg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
              <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Statified Customers</div>
          </div>
          <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <img src="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
              <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Advanced Engine Services</div>
          </div>
          <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
            data-carousel-item="">
            <img src="https://images.pexels.com/photos/6872599/pexels-photo-6872599.jpeg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
              <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Professional Car Wash</div>
          </div>
        </div>
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true"
            aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        <button type="button"
          class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev="">
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button type="button"
          class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next="">
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
    </header>
  </div>
</div>




<div class="h-[5000px]">

    {/* <div className="z-5"> */}

<div class="duration-700 ease-in-out inset-0 transition-all transform translate-x-0" data-carousel-item="">
<Carousel className="h-96 w-full">
    <div>
      <Image
        alt="..."
        src={arcPanel2}
      /><h2>ysyes</h2></div>
      <Image
      src={boschPanel2}
      alt="..."
      />
    </Carousel>
  <div class="top-1/2 px-4 py-2 opacity-100">
    <h2 class="text-xl text-white font-bold text-center ">Text 1 here</h2>
    <h2 class="text-xl text-white font-bold text-center ">Text 2 here</h2>

  {/* </div>       */}
</div>
    
  </div>
</div>







<div
  id="carouselExampleCaptions"
  className="relative"
  data-te-carousel-init
  data-te-ride="carousel">
  {/* <!--Carousel indicators--> */}
  <div
    class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>

  {/* <!--Carousel items--> */}
  <div
    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/* <!--First item--> */}
    <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      >
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
        class="block w-full"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 class="text-xl">First slide label</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
    {/* <!--Second item--> */}
    <div
      class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      >
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
        class="block w-full"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 class="text-xl">Second slide label</h5>
        <p>
          Some representative placeholder content for the second slide.
        </p>
      </div>
    </div>
    {/* <!--Third item--> */}
    <div
      class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
     >
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
        class="block w-full"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 class="text-xl">Third slide label</h5>
        <p>
          Some representative placeholder content for the third slide.
        </p>
      </div>
    </div>
  </div>

  {/* <!--Carousel controls - prev item--> */}
  <button
    class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span>z
    
  </button>
  {/* <!--Carousel controls - next item--> */}
  <button
    class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span>
  </button>
</div>









      </main>
    </div>
  )
}