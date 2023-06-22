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

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Hi</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
    </div>,
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="absolute z-1 text-gray-900 top-0 left-0 w-full bg-regal-gray lg:px-48 px-16"
    >
      <main>
        <div className='my-48 p-1'>
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-left lg:text-5xl sm:text-2xl font-ArgentItalic text-white'>I weave business value with compelling visual storytelling toward impactful design that solves problems for people.
          </m.h1>
        </div>

        <div className="mt-40">
        <Link href={"/contact"}>
          <h1 className='text-5xl font-ArgentItalic text-white pb-5'>In Search Of</h1>
          </Link>
        </div>
        <div class="grid grid-cols-1 divide-y divide-linear-gray">
          <div></div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            <div className="lg:pt-5">           
            <Link href={"/contact"}>
              <Image
              src={test1}
              
               />
</Link>
              </div>
            <div className="lg:pt-5">
            <Link href={"/contact"}>
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
            <Link href={"/contact"}>
            <Image
              src={test2}
    />
              </Link>
            </div>
          </div>
        </div>
        <div class="flex flex-col-reverse">
        <Link href={"/contact"}>
          <div className="font-NeueHaasLight text-sub-gray pt-2 pb-5 tracking-wide">Freelance product design and logo design</div>
          </Link>
          <Link href={"/contact"}>
            <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic">A digital design directory</div>
          </Link>
        </div>
        

        <div className="mt-20">
        <Link href={"/arcteryx"}>
          <h1 className='text-5xl font-ArgentItalic text-white pb-5'>Arc'teryx</h1>
          </Link>
        </div>
        <div class="grid grid-cols-1 divide-y divide-linear-gray">
          <div></div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            <div className="lg:pt-5">      
            <Link href={"/arcteryx"}>
              <Image
              src={arcPanel1}
    />
              </Link> 
              </div>
            <div className="lg:pt-5">
            <Link href={"/arcteryx"}>
            <Image
              src={arcPanel2}
        />
              </Link>
            </div>
            <div className="lg:pt-5">
            <Link href={"/arcteryx"}>
            <Image
              src={arcPanel3}
            />
              </Link>
            </div>
            </div>
            
          </div>
        <div class="flex flex-col-reverse">
          <div className="font-NeueHaasLight text-sub-gray pt-2 pb-5 tracking-wide">Strategy, Copywriting, Prototyping, Service Design</div>
          <Link href={"/arcteryx"}>
            <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic">A Product Care Campaign</div>
          </Link>
        </div>


        <div className="mt-20">
          <h1 className='text-5xl font-ArgentItalic text-white pb-5'>Bosch Courier Connect - Coming Soon</h1>
        </div>
        <div class="grid grid-cols-1 divide-y divide-linear-gray hover:font-ArgentItalic">
          <div></div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            <div className="lg:pt-5">           
              <Image
              src={boschPanel1}
          />
              </div>
            <div className="lg:pt-5">
            <Image
              src={boschPanel2}
         />
            </div>
            <div className="lg:pt-5">
            <Image
              src={boschPanel3}
             />
            </div>
            </div>
          </div>
        <div class="flex flex-col-reverse">
          <div className="font-NeueHaasLight text-sub-gray pt-2 pb-5 tracking-wide">Product Design, Art Direction, Interaction Design</div>
          <Link href={"/contact"}>
            <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic">A safety solution for E-bike couriers</div>
          </Link>
        </div>




        <div className="mt-20">
          <h1 className='text-5xl font-ArgentItalic text-white pb-5'>Moment Energy - Coming Soon</h1>
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
          <div className="font-NeueHaasLight text-sub-gray pt-2 pb-5 tracking-wide">Branding, Brand Strategy, UX Design</div>
          <Link href={"/contact"}>
            <div className="font-NeueHaasRoman text-white pt-5 tracking-wide hover:font-ArgentItalic">A new brand and website to disrupt the energy industry.</div>
          </Link>
        </div>


<div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="pt-40 gap-40">
                <div className="lg:text-2xl text-base text-white">
                    
                        <h4>Contact me:</h4>
                    
                </div>
                <div className="lg:text-6xl text-2xl underline text-white">
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




      </main>
    </m.div>
  )
}
