import { motion as m } from "framer-motion"
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import Image from 'next/image'
import BoschImg1 from "../image/BoschImg1.png"
import BoschImg2 from "../image/BoschImg2.png"
import BoschImg3 from "../image/BoschImg3.png"
import BoschImg4 from "../image/BoschImg4.png"
import BoschImg5 from "../image/BoschImg5.png"
import BoschImg6 from "../image/BoschImg6.png"
import arrow from "../image/arrow.svg"
import momentTrainSplash from "../image/momentTrainStation.png"
import momentTrust from "../image/momentTrust.png"
import momentlogo1 from "../image/momentLogo1.png"
import momentlogoAlt1 from "../image/momentLogoAlt1.png"
import momentlogo2 from "../image/momentLogo2.png"
import momentlogo3 from "../image/momentLogo3.png"
import momentProductDetail from "../image/momentProductDetail.png"
import momentPitch from "../image/momentPitch.png"
import momentSlide1 from "../image/momentSlide1.png"
import momentSlide2 from "../image/momentSlide2.png"
import momentMood1 from "../image/momentMood1.png"
import momentMood2 from "../image/momentMood2.png"
import momentMood3 from "../image/momentMood3.png"
import momentMood4 from "../image/momentMood4.png"
import momoPromo from "../image/momoPromo.svg"


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
                <div className=''>









<div className="bg-white">
                    <div className="px-5 lg:px-48 text-[0.6rem] tracking-widest text-stone-400 font-AvenirHeavy pt-24">MOMENT ENERGY</div>
                    {/* <p class="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MOMENT ENERGY</p> */}

                    <m.h1

                        className="text-[1.2rem] px-5 lg:text-[3rem] text-left tracking-loose font-Garamond text-stone-600 leading-relaxed  md:leading-tight pb-5 mt-5 lg:mt-8 lg:px-48">A new logo, visual identity, and web strategy <br></br> to disrupt the energy storage industry.
                    </m.h1>

                    <div className="px-5 lg:px-48 pt-20">
                        <p className="font-AvenirHeavy text-stone-500 tracking-widest text-[0.6rem]">FEATURED ON:</p>                       
                        <Image className="pb-10" src={momoPromo}/>
                    </div>


                </div>
            </div>
            </div>

            <div className="border-y border-stone-600">
                <Image className="h-96 object-cover lg:h-full lg:object-cover"
                    src={momentTrainSplash}
                />
            </div>






            <div className="border-y border-tahiti-100 bg-tahiti-200">
                        <div className="">
                            <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 md:divide-x md:divide-tahiti-100 divide-x-6">
                                <div className="col-start-1 col-span-2 lg:px-48 px-5">

                                    <h2 className="text-stone-500 text-sm font-NeueHaasRoman tracking-wide leading-relaxed pt-10">April — August
                                        2021</h2>
                                    <h2 className="text-stone-400 font-AvenirMedium text-[1.1rem] tracking-relaxed leading-relaxed gap-10 pt-3">Product design and brand refresh, <br></br> 4 month Internship</h2>

                                </div>

                                <div className="invisible md:visible">
                                <div class=" grid grid-cols-1 gap-3">
                                    <div className="font-NeueHaasRoman text-stone-500 tracking-wide text-sm pl-5 pt-10">
                                        Roles
                                    </div>
                                    <div className="font-Avenir tracking-wide text-stone-400 text-sm pb-10 pl-5">
                                        <div>Brand Strategy</div>
                                        <div>Logo Design</div>
                                        <div>Product Design</div>
                                        <div>Pitch Deck Design</div>
                                    </div>
                                </div>
                                </div>


                                <div className="invisible md:visible">
                                    <div class="text-stone-500 grid grid-cols-1 gap-3">
                                        <div className="font-NeueHaasRoman tracking-wide text-sm pl-5 pt-10">
                                            Tools
                                        </div>
                                        <div className="font-Avenir tracking-wide text-stone-400 text-sm pb-5 pl-5">
                                            <div>Figma</div>
                                            <div>Miro</div>
                                            <div>Photoshop</div>
                                            <div>Illustrator</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





            <div class="lg:px-96 px-5 pb-10">
                <div className="mt-20 md:mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white tracking-wide'>Context</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    In a design internship with Moment Energy, I was responsible for a brand refresh and website launch as the sole designer for the clean tech start-up.
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    Moment Energy is a cleantech company that is helping to build a sustainable economy through battery energy storage systems made from repurposed electric vehicle batteries, with a mission to provide worldwide access to clean, reliable and affordable power.
                </div>

                {/* <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    Moment is the only Canadian company working with Nissan North America and Mercedes Benz Energy to repurpose their EV batteries. In my internship, I designed a pitch deck that saw Moment recognized as the Grand Prize Winner of the 2021 National Impact Investor Challenge held by Spring Activator in June 2021.
                </div> */}

            </div>



            <div className="h-96 object-cover lg:h-full lg:object-cover pt-20">
                {/* <Image className="border-y border-stone-600 h-full object-cover lg:w-full  lg:object-cover"
                            src={BoschImg1}
                        /> */}
                <MuxPlayer muted no-controls
                    streamType="on-demand"
                    playbackId="02PYj9uQZu021zfxYQurnOBIhBn02x9YRHWXnW8iOzRPXg"
                    metadataVideoTitle="Placeholder (optional)"
                    metadataViewerUserId="Placeholder (optional)"
                    primaryColor="#FFFFFF"
                    secondaryColor="#000000"
                    thumbnailTime="22"
                    autoplay="any"

                />
            </div>


            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-4xl font-Garamond tracking-wide text-white'>Approach</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    I Facilitated design sprint activities with company founders on brand strategy to create language that communicates their mission, vision, and positioning. I built brand strategy pillars to guide the founders toward making value real for customers.
                </div>
                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    I then created a new brand direction imbued with the aforementioned principles, and developed design standards to ensure the new brand could be consistently applied in any outward materials.
                </div>

            </div>

            <div className="h-96 object-cover lg:h-full lg:object-cover pt-20">
                <Image className="border-y border-stone-600 h-full object-cover lg:w-full  lg:object-cover"
                    src={momentProductDetail}
                />
            </div>


            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-4xl font-Garamond tracking-wide text-white'>Logo design</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    The new logo leverages the same basic elements as the original logo - a circle and the letter ‘m’. Inspired by Saul Bass, I sought to leverage negative space to abstract the form, toward a more scalable and memorable mark.
                </div>
                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    To imbue the logo with our brand pillars I considered the idea of energy storage. How could I contain the organic and flowing curves of the ‘M’,  in a more rigid, trustworthy container? The repeating arches of the ‘m’ are also reminiscent of the rounded edges of stacked batteries in Moment’s energy solutions.
                </div>

            </div>
            




            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentlogoAlt1} />
                    <Image className="w-[60rem] md:flex-none" src={momentlogo2} />
                    <Image className="w-[60rem] md:flex-none" src={momentlogo3} />
                </div>
            </div>




            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-4xl font-Garamond tracking-wide text-white'>Brand strategy - imbuing trust</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    Moment had trouble with customers placing trust in them. The young and recently graduated founders hid their faces to masquerade as an older team in an industry that trusts tenure and decades of experience.
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                    I created a web experience that champions the founders youth as disruptors in the field, while exuding reliability by leveraging photography of real and successful product deployments.
                </div>

            </div>



            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                <Image className="border-y border-stone-600 h-full object-cover lg:w-full  lg:object-cover"
                    src={momentTrust}
                />
            </div>






            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-4xl font-Garamond tracking-wide text-white'>Moodboarding</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    I began by showing the moment team competitors in their industry and discussing their design decisions. This was to determine where moment could be unique. Next, I quickly compiled examples of different brands and drew attention to how they leveraged colour, typography, and expressive elements. I then asked the founders to determine which mode of expression they preferred most.
                </div>
                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    I created four distinctly different moodboards, each following the approach of a direction whose values I defined through feedback from the founders.
                </div>

            </div>


            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentMood1} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood2} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood3} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood4} />
                </div>
            </div>




            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-4xl font-Garamond tracking-wide text-white'>Impact</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    I created data visualizations and content design for slide decks presented at national pitch competitions, helping secure over $200,000 in investments during my internship.
                </div>

            </div>



            
            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentPitch} />
                    <Image className="w-[60rem] md:flex-none" src={momentSlide1} />
                    <Image className="w-[60rem] md:flex-none" src={momentSlide2} />
                </div>
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
                                                                {/* <button class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950"><div class="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-200"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button> */}
                                                                <button class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-150"><div class="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-800"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                                                            </Link>
                                                        </div>






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