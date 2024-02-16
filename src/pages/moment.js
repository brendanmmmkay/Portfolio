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
                <div className='bg-off-white'>

                    <div className="border-y border-edge-white bg-off-white">
                        <div className="">
                            <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 md:divide-x md:divide-edge-white">
                                <div className="col-start-1 col-span-2 lg:px-48 px-5">

                                    <h2 className="text-stone-600 font-NeueHaasLight tracking-wide leading-relaxed pt-10">April — August
                                        2021</h2>
                                    <h2 className="text-stone-400 font-Avenir text-[1.1rem] tracking-wide leading-relaxed gap-10 pt-10">Product design and brand refresh <br></br> 4 month Internship</h2>

                                </div>

                                <div class="text-stone-600 grid grid-cols-1 gap-3">
                                    <div className="font-NeueHaasLight  tracking-wider text-1xl pl-5 pt-10">
                                        Roles
                                    </div>
                                    <div className="font-Avenir tracking-wide text-stone-400 pb-5 pl-5">
                                        <div>Brand Strategy</div>
                                        <div>Logo Design</div>
                                        <div>Product Design</div>
                                        <div>Pitch Deck Design</div>
                                    </div>
                                </div>


                                <div className="invisible md:visible">
                                    <div class="text-stone-600 grid grid-cols-1 gap-3">
                                        <div className="font-NeueHaasLight text-1xl px-5 pt-10">
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
                        className="text-2xl px-5 lg:text-[2.5rem] text-left tracking-loose font-Garamond text-stone-600 leading-relaxed  md:leading-tight pb-10 lg:mt-20 lg:px-48">A new brand and website for Moment Energy
                    </m.h1>
                </div>
            </div>

            <div className="border-y border-stone-600">
                <Image className="h-96 object-cover lg:h-full lg:object-cover"
                    src={momentTrainSplash}
                />
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

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    Moment is the only Canadian company working with Nissan North America and Mercedes Benz Energy to repurpose their EV batteries. In my internship, I designed a pitch deck that saw Moment recognized as the Grand Prize Winner of the 2021 National Impact Investor Challenge held by Spring Activator in June 2021.
                </div>

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

            <div className="h-96 object-cover lg:h-full lg:object-cover ">
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




            <div className="w-screen overflow-x-auto">
                <m.div>
                    <div class="grid container lg:grid-cols-3 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
                        <div className="pt-5 xs={12}">
                            <Image
                                src={momentlogoAlt1}
                            />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={momentlogo2}
                            />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={momentlogo3}
                            />
                        </div>
                    </div>
                </m.div>
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




            <div className="overflow-x-scroll w-full p-4">
                <div className="flex flex-nowrap space-x-4 ml-40">
                    <Image className="w-[60rem] flex-none" src={momentSlide1} />
                    <Image className="w-[60rem] flex-none" src={momentSlide1} />
                    <Image className="w-[60rem] flex-none" src={momentSlide1} />
                    <Image className="w-[60rem] flex-none" src={momentSlide1} />
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




            <div className="w-screen overflow-x-auto">
                <m.div>
                    <div class="h-96 grid container lg:grid-cols-3 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
                        <div className="pt-5 xs={12}">
                            <Image
                                src={momentPitch}
                            />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={momentSlide2}
                            />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={momentSlide1}
                            />
                        </div>
                    </div>
                </m.div>
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