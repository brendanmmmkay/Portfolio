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
import cursor from "../image/cursor.svg"
import AnimatedTextWord from '../../components/AnimatedTextWord';

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
        <div className='pl-5 lg:px-48 py-1 lg:py-24'>
          

          <h1
              className='text-left text-[38px] lg:text-7xl leading-[2.6rem] lg:leading-15 tracking-tighter max-w-sm md:max-w-2xl pt-6 pb-20 font-NationalMedium text-tahiti-300'>I create conscious and impactful design through brand strategy and digital storytelling.
            </h1>

            <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
          <button type="button" class="border border-tahiti-200 focus:outline-none hover:bg-tahiti-200  hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200  rounded-full text-sm px-5 py-2.5 mr-2 mb-1 bg-tahiti-300 text-tahiti-200 cursor-pointer">Resume</button>
            </Link>
            <Link href={"mailto:bpmckay@sfu.ca"}>
            <button type="button" class="border border-tahiti-200 focus:outline-none hover:bg-tahiti-200 hover:text-tahiti-300 focus:ring-4 focus:ring-tahiti-200  rounded-full text-sm px-5 py-2.5 mr-1 bg-tahiti-300 text-tahiti-200 cursor-pointer">bpmckay@sfu.ca</button>
            </Link>
</div>
            <div className='lg:px-48 px-16'>
              



      

            {/* <div className='pt-10 lg:pt-20  text-stone-800 text-1xl lg:text-7xl tracking-tighter font-ArgentItalic'><AnimatedTextWord text="I create conscious and impactful design through brand strategy and digital storytelling." /></div>
             */}
         
          </div>
        </div>

    {/* <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
/> */}

        <div className='lg:px-48 px-16'>


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
              <h1 className='text-3xl lg:text-5xl font-NeueHaasRoman text-white pb-5 cursor-pointer'>Arc'teryx</h1>
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
              <h1 className='text-3xl lg:text-5xl font-NeueHaasRoman text-white pb-5 cursor-pointer'>Bosch Courier Connect</h1>
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
            <h1 className='text-3xl lg:text-5xl font-NeueHaasRoman text-white pb-5'>Moment Energy - Coming Soon</h1>
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
        </div>

        


        {/* <div className='bg-hero-pattern bg-cover py-24'> */}
        <div className='py-24'>

        <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 px-48">
                    <div className="col-start-1 col-span-2">

                        <h2 className="text-white font-NeueHaasLight tracking-wide leading-relaxed">September — December
                            2020</h2>
                        <h2 className="text-stone-400 font-NeueHaasLight tracking-wider leading-relaxed gap-10">6 week Academic Experience Design Project</h2>

                    </div>

                    <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman text-1xl">
                            Contribution
                        </div>
                        <div className="font-NeueHaasLight tracking-wide text-stone-400">
                            <div>Design Strategy</div>
                            <div>Art Direction</div>
                            <div>Product Design</div>
                            <div>Interaction Design</div>
                        </div>
                    </div>


                    <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman text-1xl">
                            Tools
                        </div>
                        <div className="text-stone-400 tracking-wide font-NeueHaasLight">
                            <div>Figma</div>
                            <div>Miro</div>
                            <div>Photoshop</div>
                            <div>Illustrator</div>
                        </div>
                    </div>
</div>

          <div className='lg:px-48 px-16'>

            {/* <div class="flex rounded-lg bg-tahiti-300 border-tahiti-100 dark:border-tahiti-100 shadow-xl shadow-black/5 dark:shadow-black/30 pl-10"> */}
            <div>
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
        </div>



      </main>
    </div>
  )
}
