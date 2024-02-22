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
        <div className='bg-hero-pattern bg-cover py-24'>
          <div className='lg:px-48 px-16'>
          <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
          <button type="button" class="border border-tahiti-200 focus:outline-none hover:bg-tahiti-200  hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200  rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-tahiti-300 text-tahiti-200 cursor-pointer">Resume</button>
            </Link>
            <Link href={"mailto:bpmckay@sfu.ca"}>
            <button type="button" class="border border-tahiti-200 focus:outline-none hover:bg-tahiti-200 hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200  rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-tahiti-300 text-tahiti-200 cursor-pointer">bpmckay@sfu.ca</button>
            </Link>
            <h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className='text-left  text-[16px] lg:text-3xl max-w-sm md:max-w-2xl pt-6 font-ArgentItalic text-transparent bg-clip-text bg-gradient-to-br from-tahiti-100 to-tahiti-200'>I weave business value with compelling visual storytelling toward impactful design that solves problems for people.
            </h1>
          </div>
        </div>

        <div className='lg:px-48 px-16'>


        <div class="h-[5000px]">
  <div class="body sticky top-0 z-[1] flex h-20 flex-row items-center bg-gray-200">Nav content here</div>
  <div class="mt-40">
    <div class="bg-conversly_color-blush absolute z-0 -ml-6 h-4/6 w-full md:h-2/6 lg:mt-40 lg:h-3/6"></div>
    <div class="z-1 relative mb-20 flex w-full flex-1 flex-col justify-center">About content here</div>
    {/* <div className="z-5"> */}

<div class="duration-700 ease-in-out inset-0 transition-all transform translate-x-0" data-carousel-item="">
<Carousel className="h-96 w-full">
      <Image
        alt="..."
        src={arcPanel2}
      />
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
</div>
  
{/* <div class="z-[1] m-[0] absolute">04</div> */}

{/* <div className="z-5"> */}
<div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
<Carousel className="h-96 w-full">
      <Image
        alt="..."
        src={momentPanel2}
      />
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

          <div className="mt-10 lg:mt-40">
            <Link href={"/insearchof"}>
              <h1 className='text-3xl lg:text-5xl font-ArgentItalic text-white pb-5 cursor-pointer'>In Search Of</h1>
            </Link>
          </div>
          <div className="grid grid-cols-1 divide-y divide-linear-gray">
            <div></div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
              <div className="lg:pt-5">
                <Link href={"/insearchof"}>
                  <Image
                    src={test1}

                  />
                </Link>
              </div>
              <div className="lg:pt-5">
                <Link href={"/insearchof"}>
                  <MuxPlayer
                    streamType="on-demand"
                    playbackId="oWqKBxCME02obOSNxtb01T801ew3tcgwwOp5502l7BihPyc"
                    metadataVideoTitle="Placeholder (optional)"
                    metadataViewerUserId="Placeholder (optional)"
                    primaryColor="#FFFFFF"
                    secondaryColor="#000000"
                    autoplay="muted"
                    loop
                  />
                </Link>
              </div>
              <div className="lg:pt-5">
                <Link href={"/insearchof"}>
                  <Image
                    src={test2}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <Link href={"/insearchof"}>
              <div className="font-NeueHaasLight text-stone-500 pt-2 pb-5 tracking-wide cursor-pointer">Freelance product design and logo design</div>
            </Link>
            <Link href={"/insearchof"}>
              <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic cursor-pointer">A digital design directory</div>
            </Link>
          </div>

          <Image src={test2} alt="..."/>
          <img src={test1} class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>

<h1 className="font-NeueHaasRoman text-white">CARoOOOOOSUELLL</h1>

<img src={test1}/>
<img src={test1}/>
<img src={test1}/>
<img src={test1}/>










    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
  <Image src={momentPanel2} class="block  absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt=""/>
  <Image src={momentPanel1} class="block  absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt=""/>
  <div class="relative top-500 top-1/2 px-4 py-2 opacity-100 ">
    <h2 class="text-xl text-white font-bold text-center ">Text 1 here</h2>
    <h2 class="text-xl text-white font-bold text-center ">Text 2 here</h2>

  </div>      
</div>




<div className="h-1000 w-full">
<Carousel className="z-4">
      <Image
        alt="..."
        src={boschPanel2}
      />
      <Image
      src={boschPanel3}
      alt="..."
      />
    </Carousel>
    </div>



<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image class="rounded-t-lg" src={arcPanel1} alt="" /> 
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>










        <div id="default-carousel" class="relative w-full" data-carousel="slide">
  
  <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
   
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
      <Image src={arcPanel1} class="w-full absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={momentPanel1}/>

      </div>
    
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
      <Image src={arcPanel1} class="w-full absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={momentPanel2}/>
      </div>
     
  </div>

  <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
  </div>

  <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span class="sr-only">Previous</span>
      </span>
  </button>
  <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span class="sr-only">Next</span>
      </span>
  </button>
</div>



          <div className="mt-20">
            <Link href={"/arcteryx"}>
              <h1 className='text-3xl lg:text-5xl font-ArgentItalic text-white pb-5 cursor-pointer'>Arc'teryx</h1>
            </Link>
          </div>
          <div className="grid grid-cols-1 divide-y divide-linear-gray">
            <div></div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
              <div className="lg:pt-5 cursor-pointer">
                <Link href={"/arcteryx"}>
                  <Image
                    src={arcPanel1}
                  />
                </Link>
              </div>
              <div className="lg:pt-5 cursor-pointer">
                <Link href={"/arcteryx"}>
                  <Image
                    src={arcPanel2}
                  />
                </Link>
              </div>
              <div className="lg:pt-5 cursor-pointer">
                <Link href={"/arcteryx"}>
                  <Image
                    src={arcPanel3}
                  />
                </Link>
              </div>
            </div>

          </div>
          <div className="flex flex-col-reverse">
            <div className="font-NeueHaasLight text-stone-500 pt-2 pb-5 tracking-wide cursor-pointer">Strategy, Copywriting, Prototyping, Service Design</div>
            <Link href={"/arcteryx"}>
              <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic cursor-pointer">A Product Care Campaign</div>
            </Link>
          </div>


          <div className="mt-20">
            <Link href={"/bosch"}>
              <h1 className='text-3xl lg:text-5xl font-ArgentItalic text-white pb-5 cursor-pointer'>Bosch Courier Connect</h1>
            </Link>
          </div>
          <div class="grid grid-cols-1 divide-y divide-linear-gray hover:font-ArgentItalic">
            <div></div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
              <div className="lg:pt-5 cursor-pointer">
                <Link href={"/bosch"}>
                  <Image
                    src={boschPanel1}
                  /></Link>
              </div>
              <div className="lg:pt-5 cursor-pointer">
                <Link href={"/bosch"}>
                  <Image
                    src={boschPanel2}
                  /></Link>
              </div>
              <div className="lg:pt-5 cursor-pointer">
                <Link href={"/bosch"}>
                  <Image
                    src={boschPanel3}
                  /></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <div className="font-NeueHaasLight text-stone-500 pt-2 pb-5 tracking-wide cursor-pointer">Product Design, Art Direction, Interaction Design</div>
            <Link href={"/Bosch"}>
              <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic cursor-pointer">A safety solution for E-bike couriers</div>
            </Link>
          </div>





          <div className="mt-20">
            <h1 className='text-3xl lg:text-5xl font-ArgentItalic text-white pb-5'>Moment Energy - Coming Soon</h1>
          </div>
          <div className="grid grid-cols-1 divide-y divide-linear-gray">
            <div></div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
              <div className="lg:pt-5">
                <Image
                  src={momentPanel1}
                />
              </div>
              <div className="lg:pt-5">
                <Image
                  src={momentPanel2}
                />
              </div>
              <div className="lg:pt-5">
                <Image
                  src={momentPanel3}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <div className="font-NeueHaasLight text-stone-500 pt-2 pb-40 tracking-wide">Branding, Brand Strategy, UX Design</div>
            <Link href={"/contact"}>
              <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic">A new brand and website to disrupt the energy industry.</div>
            </Link>
          </div>
        </div>

{/*        

        <div id="default-carousel" class="relative w-full" data-carousel="slide">
  
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"arcPanel1"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
     
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={arcPanel2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="arcPanel3" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
    </div>
 
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> */}

          <div className='lg:px-48 px-16'>

            <div className="flex rounded-lg bg-tahiti-300 border-tahiti-100 dark:border-tahiti-100 shadow-xl shadow-black/5 dark:shadow-black/30 pl-10">
              <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="pt-10 gap-40">
                  <div className="lg:text-2xl text-base text-white">


                    <div className='drop-shadow-2xl text-tahiti-200'>
                      <h4>Let's get in touch:</h4>
                    </div>



                    <div className="lg:text-6xl text-2xl underline text-tahiti-100">
                      <ul>
                        <div className="overflow-hidden">
                          <Link href={"mailto:bpmckay@sfu.ca"}>
                            <li className="pb-4 pt-10 hover:font-ArgentItalic">bpmckay@sfu.ca</li>
                          </Link>
                          <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <li className="pb-4 hover:font-ArgentItalic">Linkedin</li>
                          </Link>
                          <Link href={"https://read.cv/bedthyme/"}>
                            <li className="pb-4 hover:font-ArgentItalic">Read.cv</li>
                          </Link>
                          <Link href={"https://medium.com/@brendanmckaydesign"}>
                            <li className="pb-12 hover:font-ArgentItalic">Medium</li>
                          </Link>
                        </div>
                      </ul>
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