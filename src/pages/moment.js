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
import Paragraph from '../../components/paragraph';
import Footer from "../../components/footer.js";


export default function Bosch() {
    return (
        <m.main
            // initial={{ y: "100%" }}
            // animate={{ y: "0%" }}
            // transition={{ duration: 0.75, ease: "easeOut" }}
            // exit={{ opacity: 1 }}
            className="text-gray-900 absolute z-2 top-0 left-0 w-full h-ful  bg-tahiti-100">
            <div className="bg-tahiti-200 pt-10"></div>
            <div className="">
                <div className=''>









                    <div className="bg-white">
                        <div className="px-5 lg:px-48 text-[0.6rem] tracking-widest text-stone-400 font-AvenirHeavy pt-24">MOMENT ENERGY</div>
                        {/* <p className="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MOMENT ENERGY</p> */}

                        <m.h1

                            className="text-[1.2rem] px-5 lg:text-[2.8rem] text-left tracking-loose font-Garamond text-stone-600 leading-relaxed  md:leading-tight pb-5 mt-5 lg:mt-8 lg:px-48">A new logo, visual identity, and web strategy <br></br> to disrupt the energy storage industry.
                        </m.h1>

                        <div className="px-5 lg:px-48 pt-20">
                            <p className="font-AvenirHeavy text-stone-500 tracking-widest text-[0.6rem]">FEATURED ON:</p>
                            <Image className="pb-10" src={momoPromo} />
                        </div>




{/* fix zone */}


{/* 
                        <div className="md:pl-6">
                        <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                            <button className="group relative inline-flex h-12 md:w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-150"><div className="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-200"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                        </Link>
                    </div>

                    <div className='bg-regal-gray pt-6'>
                    </div>

                    <div className="divide-y divide-stone-600 ">
                        <div></div>
                        <div>
                        </div>
                    </div>

                    <div className="md:pl-6">
                        <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                            <button className="group relative inline-flex h-12 md:w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-150"><div className="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-200"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                        </Link>
                    </div>

                    <div className="pt-20">
                        <Link href={"https://www.linkedin.com/in/brendan-mckay/"}>
                            <button className="bg-stone-200 hover:bg-regal-gray font-Avenir text-1xl text-stone-800 hover:text-stone-200 hover:border border-stone-200 py-4 px-4 w-60 h-15 right-0">
                                Contact Me
                            </button></Link></div>


                    <div className="md:pl-6">
                        <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                            <button className="group relative inline-flex h-12 md:w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-150"><div className="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-200"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                        </Link>
                    </div>

 */}

{/* fix zone */}




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
                            <h2 className="text-stone-400 font-AvenirMedium text-[1.1rem] tracking-relaxed leading-relaxed gap-10 pt-3 pb-20 md:pb-0">Product design and brand refresh, <br></br> 4 month Internship</h2>

                        </div>

                        <div className="hidden md:block">
                            <div className=" grid grid-cols-1 gap-3">
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


                        <div className="hidden md:block">
                            <div className="text-stone-500 grid grid-cols-1 gap-3">
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


            <Paragraph
                header="Context"
                body1="In a design internship with Moment Energy, I was responsible for a brand refresh and website launch as the sole designer for the clean tech start-up."
                body2="Moment Energy is helping to build a sustainable economy through battery energy storage systems made from repurposed electric vehicle batteries, with a mission to provide worldwide access to clean, reliable and affordable power."
            ></Paragraph>




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


            <Paragraph
                header="Approach"
                body1="I Facilitated design sprint activities with company founders on brand strategy to create language that communicates their mission, vision, and positioning. I built brand strategy pillars to guide the founders toward making value real for customers."
                body2="I then created a new brand direction imbued with the aforementioned principles, and developed design standards to ensure the new brand could be consistently applied in any outward materials."
            ></Paragraph>



            <div className="h-96 object-cover lg:h-full lg:object-cover pt-20">
                <Image className="border-y border-stone-600 h-full object-cover lg:w-full  lg:object-cover"
                    src={momentProductDetail}
                />
            </div>



            <Paragraph
                header="Logo design"
                body1="The new logo leverages the same basic elements as the original logo - a circle and the letter ‘m’. Inspired by Saul Bass, I sought to leverage negative space to abstract the form, toward a more scalable and memorable mark."
                body2="To imbue the logo with our brand pillars I considered the idea of energy storage. How could I contain the organic and flowing curves of the ‘M’,  in a more rigid, trustworthy container? The repeating arches of the ‘m’ are also reminiscent of the rounded edges of stacked batteries in Moment’s energy solutions."
            ></Paragraph>





            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentlogoAlt1} />
                    <Image className="w-[60rem] md:flex-none" src={momentlogo2} />
                    <Image className="w-[60rem] md:flex-none" src={momentlogo3} />
                </div>
            </div>



            <Paragraph
                header="Brand strategy - imbuing trust"
                body1="Moment had trouble with customers placing trust in them. The young and recently graduated founders hid their faces to masquerade as an older team in an industry that trusts tenure and decades of experience."
                body2="I created a web experience that champions the founders youth as disruptors in the field, while exuding reliability by leveraging photography of real and successful product deployments."
            ></Paragraph>



            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                <Image className="border-y border-stone-600 h-full object-cover lg:w-full  lg:object-cover"
                    src={momentTrust}
                />
            </div>


            <Paragraph
                header="Moodboarding"
                body1="I began by showing the moment team competitors in their industry and discussing their design decisions. This was to determine where moment could be unique. Next, I quickly compiled examples of different brands and drew attention to how they leveraged colour, typography, and expressive elements. I then asked the founders to determine which mode of expression they preferred most."
                body2="I created four distinctly different moodboards, each following the approach of a direction whose values I defined through feedback from the founders."
            ></Paragraph>



            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentMood1} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood2} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood3} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood4} />
                </div>
            </div>


            <Paragraph
                header="Impact"
                body1="I created data visualizations and content design for slide decks presented at national pitch competitions, helping secure over $200,000 in investments during my internship."
            ></Paragraph>





            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentPitch} />
                    <Image className="w-[60rem] md:flex-none" src={momentSlide1} />
                    <Image className="w-[60rem] md:flex-none" src={momentSlide2} />
                </div>
            </div>



            <Paragraph
                header="Conclusion"
                body1="Thanks for stopping by! I have so much more to share about my process and approach to this project. I would love to get in touch and share my excitement for this project with you."
            ></Paragraph>


            {/* <div className="pt-60"></div> */}




            <Footer></Footer>

        </m.main>


    );
}