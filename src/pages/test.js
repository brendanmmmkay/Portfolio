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
import arcPanel1 from "../image/ArcPanel1.png"
import arcPanel2 from "../image/ArcPanel2.png"
import arcPanel3 from "../image/ArcPanel3.png"
import grassLand from "../image/grassLand.png"
import arrow from "../image/arrow.svg"
import cursor from "../image/cursor.svg"
import AnimatedTextWord from '../../components/AnimatedTextWord';
import { Carousel } from 'flowbite-react';
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
        <div className='bg-hero-pattern2 bg-cover'>
          <div className='pl-5 lg:px-48 py-1 lg:py-24 absolute'>

          </div>

          {/* <div class="body sticky top-0 z-[1000] flex h-20 flex-row items-center bg-gray-200">Nav content here</div> */}

          <div className="z-50 absolute lg:px-48 px-4 pt-20">

            <h1
              className='text-left mr-1 text-[48px] lg:text-7xl leading-[3rem] lg:leading-15 tracking-tighter max-w-sm md:max-w-3xl pt-6 pb-20 font-Garamond text-white'>Conscious and impactful design through brand strategy and digital storytelling.
            </h1>

            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class=" focus:outline-none hover:bg-stone-300  hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200  rounded-full text-sm px-5 py-2.5 mr-2 mb-3 bg-stone-800 text-white font-NationalBook tracking-3 leading-1 cursor-pointer">RESUME</button>
            </Link>
            <Link href={"mailto:bpmckay@sfu.ca"}>
              <button type="button" class=" focus:outline-none hover:bg-stone-300 hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200  rounded-full text-sm px-5 py-2.5 bg-stone-800 text-white font-NationalBook tracking-3 cursor-pointer">BPMCKAY@SFU.CA</button>
            </Link>
          </div>



          {/* <div className="h-128 z-1 top-0">
            <Carousel>

              <div className="width: 100%;
  h-128;
  object-fit: fill; items-center justify-center dark:text-white ">
                <div>
                  <h1>yoooo</h1>
                </div>
                <Image
                  src={boschPanel2}
                  alt="..." className=""
                >
                </Image>
              </div>

              <div className="flex width: 100%;
  h-128; object-cover items-center justify-center dark:text-white">
                <div>
                  <h1>yoooo</h1>
                </div>
                <Image
                  src={boschPanel2}
                  alt="..." className="" width={2760}
                >
                </Image>
              </div>

            </Carousel>
          </div> */}






          {/* 
          <div className="
  object-fit: fill h-128 w-128;">
            <Image className=""
              src={boschPanel3}
            />
          </div> */}

          {/* This shit works!!! */}
          <div class="bg-indigo-300 h-150 lg:h-128">
            <Carousel slideInterval={250000}>
              {/* <Image className="h-150 lg:h-128 object-cover lg:object-cover"
                src={test2}
              /> */}

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
              <Image className="h-150 lg:h-128 object-cover lg:object-cover"
                src={grassLand}
              />
              <mux-player
                playback-id="nrCOycEeew0002I62nNMZEuqSUN02AcNOVd00p5bUnPXvqs"
                metadata-video-title="Placeholder (optional)"
                metadata-viewer-user-id="Placeholder (optional)"
                accent-color="#FF0000"
              ></mux-player>
            </Carousel>
          </div>


          {/* <div>
            <Image className="h-150 lg:h-128 object-cover lg:object-cover"
              src={test2}
            />
          </div> */}






          {/* <div className='pt-10 lg:pt-20  text-stone-800 text-1xl lg:text-7xl tracking-tighter font-ArgentItalic'><AnimatedTextWord text="I create conscious and impactful design through brand strategy and digital storytelling." /></div>
             */}


        </div>

        {/* <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
/> */}




        {/* 
        <div>
          <Image className="h-96 object-cover lg:h-full lg:object-cover"
            src={boschPanel2}
          />
        </div> */}

        {/* 
        <div>
          <Image
            src={boschPanel2}
          />
        </div> */}




        <div className='lg:px-48 px-4'>


          {/* <div className="bg-white">

                    <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
          <button class="group hover:scale-110 border-2 hover:shadow hover:border-none hover:tracking-widest borderColor-off-white focus:borderColor-white text-xs tracking-wider py-2 px-4 rounded-full font-NationalHeavy text-chip-deep-gray cursor-pointer">
            LINKEDIN
          </button>
          </Link>

          <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
          <button class="group text-chip-deep-gray borderColor-off-white relative h-12 overflow-hidden text-xs tracking-wider text-toverflow-x-hidden rounded-full bg-white px-8 py-2 cursor-pointer text-neutral-750"><span class="relative z-10">LINKEDIN</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
       </Link>

       <button class="inline-block px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-md shadow-md hover:shadow-lg hover:border-transparent transition duration-300 ease-in-out">
  Hover Me
</button>
</div> */}


          <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}>
            <div className="mt-10 lg:mt-40">
              <Link href={"/insearchof"}>
                <h1 className='text-3xl lg:text-5xl font-ArgentItalic text-white pb-5 cursor-pointer'>In Search Of</h1>
              </Link>
            </div>
            <div class="grid grid-cols-1 divide-y divide-linear-gray">
              <div></div>
              <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
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
            <div class="flex flex-col-reverse">
              <Link href={"/insearchof"}>
                <div className="font-NeueHaasLight text-stone-500 pt-2 pb-5 tracking-wide cursor-pointer">Freelance product design and logo design</div>
              </Link>
              <Link href={"/insearchof"}>
                <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic cursor-pointer">A digital design directory</div>
              </Link>
            </div>
          </motion.div>


          <div className="mt-20">
            <Link href={"/arcteryx"}>
              <h1 className='text-3xl lg:text-5xl font-ArgentItalic text-white pb-5 cursor-pointer'>Arc'teryx</h1>
            </Link>
          </div>
          <div class="grid grid-cols-1 divide-y divide-linear-gray">
            <div></div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
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
          <div class="flex flex-col-reverse">
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
            <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
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
          <div class="flex flex-col-reverse">
            <div className="font-NeueHaasLight text-stone-500 pt-2 pb-5 tracking-wide cursor-pointer">Product Design, Art Direction, Interaction Design</div>
            <Link href={"/Bosch"}>
              <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic cursor-pointer">A safety solution for E-bike couriers</div>
            </Link>
          </div>






          <div className="mt-20">
            <h1 className='text-3xl lg:text-5xl font-ArgentItalic text-white pb-5'>Moment Energy - Coming Soon</h1>
          </div>
          <div class="grid grid-cols-1 divide-y divide-linear-gray">
            <div></div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
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
          <div class="flex flex-col-reverse">
            <div className="font-NeueHaasLight text-stone-500 pt-2 pb-40 tracking-wide">Branding, Brand Strategy, UX Design</div>
            <Link href={"/contact"}>
              <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic">A new brand and website to disrupt the energy industry.</div>
            </Link>
          </div>












          {/* 
<div className="w-screen overflow-x-auto">
            <div>
                <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
                    <div className="pt-5 xs={12}">
                        <Image
                            src={test1}
                        />
                    </div>
                    <div className="pt-5">
                        <Image
                            src={test2}
                        />
                    </div>
                </div>
            </div>
            </div> */}





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





        <div className='bg-hero-pattern2 bg-cover pt-6'>
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
                              <h4 className="font-Garamond pt-3 text-5xl text-stone-800 tracking-tighter">Let's get in touch:</h4>
                              <h5 className="font-Avenir pt-2 text-stone-600 tracking-normal text-[1.4rem]">Available November 2023 for design opportunities.</h5>
                            </div>
                            {/* DIV 2 */}

                            <div className="pt-20">
                              <button class="bg-stone-900 hover:bg-white font-Avenir text-1xl text-white hover:text-stone-800 hover:border border-stone-800 py-4 px-4 w-60 h-15 right-0">
                                Contact Me
                              </button></div>

                          </div>
                        </div>

                        {/* TEST ZONE END */}



                        <div className="divide-y divide-stone-300">
                          <div></div>
                          <div>
                          </div>
                        </div>

                        {/* <div class="w-full justify-between flex space-x-2 flex-col md:flex-row">
                      <h6 className="pt-20 font-SFproBold text-[14px] text-stone-600 uppercase tracking-[.15em]">competencies</h6> */}
                        <h6 className="pt-20 font-SFproBold text-[15px] text-stone-600 uppercase tracking-[.2em]">competencies</h6>
                        {/* </div> */}


                        <div>

                          <div className='mt-20 mb-10 p-1'>
                            <div className="grid grid-cols-0 md:grid-cols-5 gap-0 md:gap-16">

                              <div class="text-white">
                                {/* <div className="font-Avenir text-1xl">
                                Contribution
                              </div> */}
                                <div className="font-Avenir tracking-wide text-stone-800">
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
                                <div className="text-stone-800 tracking-wide font-Avenir">
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
                                <div className="text-stone-800 tracking-wide font-Avenir pr-5 pt-10 md:pt-0">
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










        <div className="w-screen overflow-x-scroll">
          <div className="ml-20"></div>
          <div class=" rounded shadow-lg bg-white">
            <a href="#">
              <div class="grid container lg:grid-cols-3 gap-1 sm:grid-cols-1">
                <Image
                  src={momentPanel3}
                />                <Image
                  src={momentPanel2}
                />                <Image
                  src={momentPanel2}
                />
              </div>
            </a>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>








        <div className="w-screen overflow-x-scroll">

          <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
            <div className="pt-5 xs={12}">
              <Image width={1000}
                src={test1}
              />
            </div>
            <div className="pt-5">
              <Image
                src={test2}
              />
            </div>
          </div>

        </div>












        {/* <div>
          <h2 className="z-0 pt-30">uhhhh</h2>
        </div> */}


        <div className="md:overflow-x-scroll scroll-smooth no-scrollbar snap-x duration-1000 ease-in-out z-50">
          
          <div className="md:pl-40">
            <div class=" bg-white border border-edge-white drop-shadow-2xl lg:w-[150rem] mb-16 mt-32">
              <a href="#">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
                  <Image className="md:scroll-ml-48 snap-start" width={1000}
                    src={momentPanel3}
                  />                <Image
                    src={momentPanel2}
                  />                
                  <div>
                  <Image
                    src={momentPanel2}
                    
                  />
                  <p>yoooo</p>
                  </div>
                  <Image
                    src={momentPanel2}
                  />
                </div>
              </a>
              <div class="p-5 overflow-x-scroll">
                <a href="#">
                  <h5 class="mb-2 text-3xl font-Avenir tracking-tight text-gray-900">Moment Energy</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>






        <div className="md:overflow-x-scroll scroll-smooth no-scrollbar snap-x duration-1000 ease-in-out z-50">
          
          <div className="md:pl-40">
            <div class=" bg-white border border-edge-white drop-shadow-2xl lg:w-[150rem] mb-16">
              <a href="#">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
                  <Image className="md:scroll-ml-48 snap-start" width={1000}
                    src={momentPanel3}
                  />
                  <div>
                   <Image
                    src={momentPanel2}
                  />   
                  <p className="invisible md:visible pt-[3.1rem] text-chip-deep-gray absolute text-[0.6rem] tracking-[0.2rem] font-AvenirHeavy ">ABOUT:</p>
                  <p className="invisible md:visible pt-[4.8rem] absolute text-1xl font-Avenir">A new brand and website to disrupt the energy industry.</p>
                </div>
                  <div>
                  <Image
                    src={momentPanel2}
                    
                  />
                  {/* <p>yoooo</p> */}
                  </div>
                  <Image
                    src={momentPanel2}
                  />
                </div>
              </a>
              <div class="">
                <a href="#">
                  <h5 class="mb-2 ml-1 md:ml-5 mt-11 text-4xl font-Avenir tracking-tight text-gray-900 p-5">Moment Energy</h5>
                </a>

                <div className='pt-5 pl-6'>
                <article className="md:invisible visible text-1xl font-Avenir text-balance w-60 leading-6">A new brand and website to disrupt the energy industry.</article>
                </div>
                
                <div class="divide-y-2 divide-linear divide-edge-white pt-10 md:pt-0">
                    <div></div>
                    <div>
                    </div>
              
              
                </div>
                <div className='py-4 md:p-4 flex flex-row text-nowrap overflow-x-scroll no-scrollbar'>
                <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-edge-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr:1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">BRAND IDENTITY</button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-edge-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr-1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">LOGO DESIGN</button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-edge-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr-1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">PITCH DECKS</button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-edge-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr-1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">PITCH DECKS</button>
            </Link>
            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
              <button type="button" class="ml-5 focus:outline-none hover:bg-stone-300 whitespace-nowrap border-edge-white hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200 rounded-full border-2 text-[0.7rem] px-5 py-2 mr-1 bg-white text-chip-deep-gray font-AvenirHeavy tracking-widest leading-1 cursor-pointer">PITCH DECKS</button>
            </Link>
            </div>
              </div>
            </div>
          </div>
        </div>


        <div className="w-screen overflow-x-scroll">

          <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
            <div className="pt-5 xs={12}">
              <Image width={1000}
                src={test1}
              />
            </div>
            <div className="pt-5">
              <Image
                src={test2}
              />
            </div>
          </div>

        </div>





      </main>
    </div>
  )
}