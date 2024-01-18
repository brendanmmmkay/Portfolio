import { motion as m } from "framer-motion"
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import Image from 'next/image'
import isoDummy1 from "../image/isoDummy.png"
import isoDummy2 from "../image/isoDummy2.png"
import isoDummy3 from "../image/isoDummy3.png"
import isoDummy4 from "../image/isoDummy4.png"
import isoDummy5 from "../image/isoDummy5.png"
import arrow from "../image/arrow.svg"

export default function Bosch() {
    return (
        <m.main
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900 absolute z-2 top-0 left-0 w-full h-ful  bg-tahiti-100">
                <div className="bg-tahiti-200 pt-10"></div>
                   <div className="">
            <div className='mb-10'>

<div className="border-y border-stone-600">
    <div className="">
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 md:divide-x md:divide-stone-600">
                    <div className="col-start-1 col-span-2 lg:px-48 px-5">

                        <h2 className="text-stone-300 font-NeueHaasLight tracking-wide leading-relaxed pt-10">January 2022 - Ongoing
                            </h2>
                        <h2 className="text-white font-Avenir text-[1.2rem] tracking-wider leading-relaxed gap-10 pt-10">Freelance Product Design and Brand creation</h2>

                    </div>

                    <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman  tracking-wider text-1xl pl-5 pt-10">
                            Contribution
                        </div>
                        <div className="font-Avenir tracking-wide text-stone-400 pb-5 pl-5">
                            <div>Design Strategy</div>
                            <div>Art Direction</div>
                            <div>Product Design</div>
                            <div>Interaction Design</div>
                        </div>
                    </div>



<div className="invisible md:visible">
                    <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman text-1xl px-5 pt-10">
                            Tools
                        </div>
                        <div className="text-stone-400 tracking-wide font-Avenir px-5 pb-10">
                            <div>Figma</div>
                            <div>Miro</div>
                            <div>Photoshop</div>
                            <div>Illustrator</div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    {/* <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman">
                            Team
                        </div>
                        <div className="text-stone-400 tracking-wide font-NeueHaasLight">
                            <div>Brendan McKay</div>
                            <div>Christina Hoang</div>
                            <div>Tracy Chen</div>
                            <div>Yan Tymoshenko</div>
                        </div>
                    </div> */}


                </div>

                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-2xl px-5 lg:text-[3.7rem] text-left text-1xl font-Garamond text-tahiti-500 leading-relaxed  md:leading-tight mt-10 pb-1 md:pb-5 lg:mt-40 lg:px-48 max-w-[94%]'>A curated and educational library of excellent resources for design professionals who seek to enhance their knowledge of the visual design industry.
                </m.h1>
            </div>
            </div>


<div className="h-96 object-cover lg:h-full lg:object-cover border-y border-stone-600">
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
</div>



            <div class="lg:px-96 px-5 pb-10">
                <div className="mt-20 md:mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white tracking-wide'>How it began</h1>
                    <h1 className='text-1xl lg:text-2xl font-NeueHaasRoman tracking-widest text-stone-400 lg:pt-1'>Identifying a design opportunity</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                In January 2022 I met JP Ramirez, a professor teaching a design course in typography and space at the University of Illinois School of Art + Design. Meanwhile, I was organizing weekly meetings as president of the Design Club at Simon Fraser University.
                </div>
                <div className="font-Avenir tracking-wide text-white pt-20 pb-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                We both commonly referred our students to a loose list of great design resources that we had scattered across our notes and bookmarks. Our goal was to formalize this list in an easy to access directory for budding design professionals.
                     </div>

            </div>


            <mux-player
  playback-id="nrCOycEeew0002I62nNMZEuqSUN02AcNOVd00p5bUnPXvqs"
  metadata-video-title="Placeholder (optional)"
  metadata-viewer-user-id="Placeholder (optional)"
  accent-color="#FF0000"
></mux-player>


            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond tracking-wide text-white'>Creating the Logo</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                I used a pen and sketchbook to create 8 logo iterations in 8 minutes as a warmup exercise each day. The initial form for this iteration of the logo began with a location pin, inspired by our brand pillar to ‘map the landscape of design’.
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                By scaling and reflecting the pin, I created a head and body that represents our individual seeker. Together, they create a flower-like form where the seeds are waypoints, representing the connections our seeker gains as they explore In Search Of.
                </div>

            </div>



            <div className="h-96 object-cover lg:h-full lg:object-cover ">
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
                    </div>



            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white pb-2'>Design Sprint Process</h1>    
                      </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                I hosted sprint activities with JP and our developer, Bryant, where we asked questions and attempted to paint a picture of our persona. Next, I created an online questionnaire seeking to confirm and test our assumptions with potential users to develop a persona with real user data.
                </div>
                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                Next, I quickly created a set of potential journey frameworks complete with quotes pulled from our user interviews to understand what kind of experience would solve our users problems best.
                </div>
            </div>

            <div className="w-screen overflow-x-auto">
            <m.div>
                <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
                    <div className="pt-5 xs={12}">
                        <Image
                            src={isoDummy3}
                        />
                    </div>
                    <div className="pt-5">
                        <Image
                            src={isoDummy4}
                        />
                    </div>
                </div>
            </m.div>
            </div>



            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl tracking-wide font-Garamond text-white'>Determining Value for Seekers</h1>
                </div>

                <div class="divide-y divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                Leveraging data I gained from the google poll, I created a journey frameworks to understand how people would get to our website, and how their experience would develop as they used our directory over time.
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                People I interviewed said that they connected strongly and best with resources that were highly regarded or recommended by mentors and peers. To promote strong connections between our readers and our resources, every entry in the design directory is accompanied by copy that holds each resource in high regards.
                </div>

            </div>


            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                        <Image className="border-y border-stone-600 h-96 object-cover lg:h-full lg:object-cover"
                            src={isoDummy5}
                        />
                    </div>


                    <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white'>Mapping the landscape of design</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                {/* <div className="font-Avenir tracking-wider text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-[50rem]">
                The chips work as tags in the backend, which allowed us to easily populate each resource with important context.
                </div> */}

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                On cards, I used the scrollable chip pattern to retain contextual design discovery and inform users search decisions. To map the landscape of design - chip categories include media type, type of design discipline, and type of organization.
                    </div>

            </div>


            <div className="h-96 object-cover lg:h-full lg:object-cover ">
            <MuxPlayer className=""
                streamType="on-demand"
                playbackId="oJylykWgGQrDEj1MrGo3ELsnDGn01pjdlWyw8vT01uW6o"
                metadataVideoTitle="Placeholder (optional)"
                metadataViewerUserId="Placeholder (optional)"
                primaryColor="#FFFFFF"
                secondaryColor="#000000"
                autoplay="muted"
                loop
            />
                    </div>

                    



<div className="pt-60"></div>




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
                            <h4 className="font-Garamond pt-3 text-4xl text-stone-800 tracking-tighter">Let's get in touch:</h4>
                            <h5 className="font-Avenir pt-2 text-stone-600 tracking-normal text-[1.1rem] leading-tight max-w-0.5 md:max-w-1 md:text-[1.4rem]">Available November 2023 for design opportunities.</h5>
                          </div>
                          {/* DIV 2 */}

                          <div className="pt-20">
                            <button class="bg-stone-900 hover:bg-white font-Avenir text-1xl text-white hover:text-stone-800 hover:border border-stone-800 py-4 px-4 w-60 h-15 right-0">
                              Contact Me
                            </button></div>

                        </div>
                      </div>

                      {/* TEST ZONE END */}



                      <div className="divide-y divide-stone-300 ">
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



            
        </m.main>


    );
}