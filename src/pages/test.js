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
import cursor from "../image/cursor.svg"
import AnimatedTextWord from '../../components/AnimatedTextWord';
'use client';
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
      className="absolute z-1 text-gray-900 top-0 left-0 w-full cursor-default bg-regal-gray"
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
                            <button class="bg-stone-900 hover:bg-stone-700 font-Avenir text-1xl text-white py-4 px-4 w-60 h-15 right-0">
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
                      <h6 className="pt-20 font-SFproBold text-[14px] text-stone-600 uppercase tracking-[.15em]">competencies</h6>
                     {/* </div> */}
                     
                     
                      <div>

                        <div className='mt-10 mb-10 p-1'>
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

                            
                              <div className="col-span-2">

                              <h2 className="text-stone-700 font-SFpro leading-relaxed pt-20 md:pt-0">Resume
                                </h2>
                             <Link href={"https://github.com/brendanmmmkay/Old-Portfolio/blob/master/brendan_mckay_Resume.pdf"}><h2 className="text-stone-800 font-Avenir  leading-relaxed gap-10">A degree in design and freelance work experience.</h2>
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