import { motion as m } from "framer-motion"
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import Image from 'next/image'
import test1 from "../image/TWimgTest.png"
import isoDummy1 from "../image/isoDummy.png"
import isoDummy2 from "../image/isoDummy2.png"
import isoDummy3 from "../image/isoDummy3.png"
import isoDummy4 from "../image/isoDummy4.png"
import isoDummy5 from "../image/isoDummy5.png"


// import '@/styles/globals.css'

export default function insearchof() {

    return (    
        <m.main
        
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900 absolute z-2 top-0 left-0 w-full h-ful  bg-regal-gray lg:px-48 px-16">

            <div className='mt-60 mb-40 p-1'>
                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-left sm:text-2xl lg:text-4xl font-NeueHaas-Roman w-4/5 text-white'>A curated and educational library of excellent resources for design professionals who seek to enhance their knowledge of the visual design industry.
                </m.h1>
            </div>

            <MuxPlayer
                streamType="on-demand"
                playbackId="NeOKRNJnDyJN7pFcQ1vQN2p3rcTM2DcW5gs022JDksPw"
                metadataVideoTitle="Placeholder (optional)"
                metadataViewerUserId="Placeholder (optional)"
                primaryColor="#FFFFFF"
                secondaryColor="#000000"
                autoplay="muted"
                loop
            />

            <m.div className="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>How it began</h1>
                    <h1 className='text-3xl font-NeueHaas-Roman text-stone-600 pt-1'>A problem shared by design educators</h1>
                </div>

                <div>
                    <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-10 leading-loose">
                        In January 2022 I met JP Ramirez, a professor teaching a design course in typography and space at the University of Illinois School of Art + Design. Meanwhile, I was organizing weekly meetings as president of the Design Club at Simon Fraser University.
                    </div>

                    <div className="font-NeueHaasLight tracking-wide pt-5 text-white text-2xl pb-10 leading-loose">
                        We both commonly referred our students to a loose list of great design resources that we had scattered across our notes and bookmarks.

                        Our goal was to formalize this list in an easy to access directory for budding design professionals.
                    </div>
                </div>

            </m.div>

            <m.div>
                <div class="divide-y divide-linear-gray">
                    <div></div>
                    <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1">
                        <div className="pt-5 xs={12}">
                            <Image
                                src={isoDummy1}
                                width={800}
                                height={200} />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={isoDummy2}
                                width={800}
                                height={200} />
                        </div>
                    </div>
                </div>
            </m.div>






            <div class="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Creating the Logo</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                    I used a pen and sketchbook to create 8 logo iterations in 8 minutes as a warmup exercise each day. The initial form for this iteration of the logo began with a location pin, inspired by our brand pillar to ‘map the landscape of design’.
                </div>

                <div className="font-NeueHaasLight tracking-wide pt-20 text-white text-2xl leading-loose">
                    By scaling and reflecting the pin, I created a head and body that represents our individual seeker. Together, they create a flower-like form where the seeds are waypoints, representing the connections our seeker gains as they explore In Search Of.
                </div>
            </div>

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


            <m.div class="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Design Sprint Process</h1>
                </div>


                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide pt-20  text-white text-2xl leading-loose">
                    I hosted sprint activities with JP and our developer, Bryant, where we asked questions and attempted to paint a picture of our persona. Next, I created an online questionnaire seeking to confirm and test our assumptions with potential users to develop a persona with real user data.
                </div>

                <div className="font-NeueHaasLight text-1xl tracking-wider pt-5 font-NeueHaas-Roman text-stone-500 leading-loose">
                    I quickly created a set of potential journey frameworks complete with quotes pulled from our user interviews to understand what kind of experience would solve our users problems best.
                </div>
            </m.div>

            <m.div>
                <div class="pt-20 divide-y divide-linear-gray">
                    <div></div>
                    <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1">
                        <div className="pt-5 xs={12}">
                            <Image
                                src={isoDummy3}
                                width={800}
                                height={200} />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={isoDummy4}
                                width={800}
                                height={200} />
                        </div>
                    </div>
                </div>
            </m.div>


            <m.div className="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Determining Value for Seekers</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                    Leveraging data I gained from the google poll, I created a journey frameworks to understand how people would get to our website, and how their experience would develop as they used our directory over time.
                </div>

                <div className="font-NeueHaasLight tracking-wider text-1xl pt-5 font-NeueHaas-Roman text-stone-500 leading-loose">
                    People I interviewed said that they connected strongly and best with resources that were highly regarded or recommended by mentors and peers. To promote strong connections between our readers and our resources, every entry in the design directory is accompanied by copy that holds each resource in high regards.
                </div>

            </m.div>

            <m.div className="pt-20">
                <Image
                    src={isoDummy5}
                    width={1500}
                    height={200} />
            </m.div>


            <m.div className="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Mapping the landscape of design</h1>
                </div>
                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white leading-loose text-2xl pt-20">
                    To contextualize the respective design domains that each resource is a part of, I leveraged chips. The chips work as tags in the backend, which allowed us to easily populate each resource with important context.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white leading-loose text-2xl pt-10 pb-20">
                    On cards, I used the scrollable chip pattern to retain contextual design discovery and inform users search decisions. To map the landscape of design - chip categories include media type, type of design discipline, and type of organization.
                </div>
            </m.div>

            <MuxPlayer
                streamType="on-demand"
                playbackId="oJylykWgGQrDEj1MrGo3ELsnDGn01pjdlWyw8vT01uW6o"
                metadataVideoTitle="Placeholder (optional)"
                metadataViewerUserId="Placeholder (optional)"
                primaryColor="#FFFFFF"
                secondaryColor="#000000"
                autoplay="muted"
                loop
            />







<div class="flex flex-col-reverse">
               
               <Link href={"/contact"}>
                   <div className="font-NeueHaasLight text-white lg:text-3xl pt-10 pb-5 underline hover:font-ArgentItalic">Return home.</div>
                   </Link>
                       <div className="font-NeueHaasRoman text-white pt-52 lg:text-4xl leading-loose tracking-wide xl:w-4/6">Thanks for stopping by! I have so much more to share about this project, let's get in touch!</div>
               </div>

            <div className="flex pt-40 lg:gap-40 sm:">
                <div className="lg:text-2xl text-base text-white">
                    
                        <h4>Find me:</h4>
                    
                </div>
                <div className="lg:text-6xl text-2xl underline text-white">
                    <ul>
                        <div className="overflow-hidden">
                        <Link href={"mailto:bpmckay@sfu.ca"}>
                            <li className="pb-4 hover:font-ArgentItalic">bpmckay@sfu.ca</li>
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
        </m.main>
    );
}