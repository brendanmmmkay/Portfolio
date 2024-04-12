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
import LazyCardWrapper from "../../components/LazyCard";
import MuxPlayerComponent from "../../components/MuxPlayer";
import momentTable from "../image/momentTable.png"
import momentNewVD from "../image/momentNewVD.png"
import momentNewTeam from "../image/momentNewTeam.png"
import momentNewDeployment from "../image/momentNewDeployment.png"
import momentNewFonts from "../image/momentNewFonts.png"
import momentLogoProg from "../image/momentLogoProg.png"


export default function Bosch() {
    return (
        <m.main

            className="top-0 px-4 w-full h-full bg-white">
            <div className=""></div>
            <div className="">
                <div className=''>




                    <div className="max-w-2xl">
                        <div className=" text-[0.6rem] tracking-widest text-stone-400 font-AvenirHeavy pt-64">MOMENT ENERGY</div>
                        {/* <p className="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MOMENT ENERGY</p> */}

                        <m.h1

                            className="text-[1.2rem] md:text-3xl text-left tracking-loose font-Avenir text-stone-700 leading-relaxed md:leading-tight mt-5 pb-5 lg:Pt-8">A new logo, visual identity, and web strategy <br></br> to disrupt the energy storage industry.
                        </m.h1>

                        {/* <div className="">
                            <p className="px-4 text-[0.6rem] tracking-widest text-stone-400 font-AvenirHeavy pt-5">FEATURED ON:</p>
                            <Image className="pb-4 px-4" src={momoPromo} />
                        </div> */}



                    </div>
                </div>
            </div>


            {/* <div className="px-4 pt-4">
            <MuxPlayerComponent playbackId="UNyuj9ShWAzZHTleYGbMy02Xy902mMXl5K00Z5rJPkQoG00" />
            </div> */}



            <div className="">
                <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <div className="h-[45rem]">
                        <MuxPlayerComponent playbackId="UNyuj9ShWAzZHTleYGbMy02Xy902mMXl5K00Z5rJPkQoG00" />
                    </div>
                </div>
            </div>



            <div className=" bg-white">
                <div className="">
                    <div className="md:grid lg:grid-cols-5 grid-cols-1 gap-6 ">
                        <div className="col-start-1 col-span-2 px-5">

                            <h2 className="text-stone-800 text-xxs font-SFpro pt-2">APRIL — AUGUST 2021</h2>
                            <h2 className="text-stone-300 font-SFpro text-xxs gap-10 pt-0 pb-20 md:pb-0"> PRODUCT DESIGN AND BRAND REFRESH <br></br> 4 MONTH INTERNSHIP</h2>

                        </div>

                        <div className="hidden md:block">
                            <div className=" grid grid-cols-1">
                                <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                    ROLES
                                </div>
                                <div className="tracking-wide font-SFpro text-stone-300 text-xxs">
                                    <div>BRAND STRATEGY</div>
                                    <div>LOGO DESIGN</div>
                                    <div>BUSINESS STRATEGY</div>
                                    <div>PITCH DECK DESIGN</div>
                                </div>
                            </div>
                        </div>


                        <div className="hidden md:block">
                            <div className=" grid grid-cols-1">
                                <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                    TOOLS
                                </div>
                                <div className="font-SFpro text-stone-300 text-xxs">
                                    <div>FIGMA</div>
                                    <div>MIRO</div>
                                    <div>PHOTOSHOP</div>
                                    <div>ILLUSTRATOR</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>





            <Paragraph
                header="CONTEXT"
                body1="In a design internship with Moment Energy, I was responsible for a brand refresh and website launch as the sole designer for the clean tech start-up."
                body2="Moment Energy is helping to build a sustainable economy through battery energy storage systems made from repurposed electric vehicle batteries, with a mission to provide worldwide access to clean, reliable and affordable power."
            ></Paragraph>



            <Image className=""
                src={momentTable}
            />




            {/* <div className="h-96 object-cover lg:h-full lg:object-cover pt-20">
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
            </div> */}


            <div className="grid md:grid-cols-2 pt-4">
                <Paragraph
                    header="APPROACH"
                    body1="I facilitated design sprint activities with company founders on brand strategy to create language that communicates their mission, vision, and positioning. I built brand strategy pillars to guide the founders toward making value real for customers."
                    body2="I then created a new brand direction imbued with the aforementioned principles, and developed design standards to ensure the new brand could be consistently applied in any outward materials."
                ></Paragraph>
                <div>
                    <Image className=""
                        src={momentNewFonts}
                    />
                </div>
            </div>

            <div className="">
                <div className=" object-cover lg:h-full lg:object-cover">
                    <Image className=" h-full"
                        src={momentNewVD}
                    />
                </div>
            </div>


            <div className="grid md:grid-cols-2 pt-4">
                <Paragraph
                    header="LOGO DESIGN"
                    body1="The new logo leverages the same basic elements as the original logo - a circle and the letter ‘m’. Inspired by Saul Bass, I sought to leverage negative space to abstract the form, toward a more scalable and memorable mark."
                    body2="To imbue the logo with our brand pillars I considered the idea of energy storage. How could I contain the organic and flowing curves of the ‘M’,  in a more rigid, trustworthy container? The repeating arches of the ‘m’ are also reminiscent of the rounded edges of stacked batteries in Moment’s energy solutions."
                ></Paragraph>
                <div>
                    <Image className=""
                        src={momentLogoProg}
                    />
                </div>
            </div>




            {/* <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentlogoAlt1} />
                    <Image className="w-[60rem] md:flex-none" src={momentlogo2} />
                    <Image className="w-[60rem] md:flex-none" src={momentlogo3} />
                </div>
            </div> */}


            <div className="">
                <div className=" object-cover lg:h-full lg:object-cover ">
                    <Image className=" h-full object-cover lg:w-full  lg:object-cover"
                        src={momentNewTeam}
                    />
                </div>
            </div>



            <div className="grid md:grid-cols-2 pt-4">
                <Paragraph
                    header="PRODUCT STRATEGY - IMBUING TRUST"
                    body1="Moment had trouble with customers placing trust in them. The young and recently graduated founders hid their faces to masquerade as an older team in an industry that trusts tenure and decades of experience."
                    body2="I created a web experience that champions the founders youth as disruptors in the field, while exuding reliability by leveraging photography of real and successful product deployments."
                ></Paragraph>
                <Image className="pb-4"
                    src={momentNewDeployment}
                />
            </div>



            {/* <Paragraph
                header="Moodboarding"
                body1="I began by showing the moment team competitors in their industry and discussing their design decisions. This was to determine where moment could be unique. Next, I quickly compiled examples of different brands and drew attention to how they leveraged colour, typography, and expressive elements. I then asked the founders to determine which mode of expression they preferred most."
                body2="I created four distinctly different moodboards, each following the approach of a direction whose values I defined through feedback from the founders."
            ></Paragraph>
 */}


            {/* <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentMood1} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood2} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood3} />
                    <Image className="w-[60rem] md:flex-none" src={momentMood4} />
                </div>
            </div> */}

            {/* 
            <Paragraph
                header="Impact"
                body1="I created data visualizations and content design for slide decks presented at national pitch competitions, helping secure over $200,000 in investments during my internship."
            ></Paragraph>

 */}



            {/* <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={momentPitch} />
                    <Image className="w-[60rem] md:flex-none" src={momentSlide1} />
                    <Image className="w-[60rem] md:flex-none" src={momentSlide2} />
                </div>
            </div> */}



            {/* <Paragraph
                header="Conclusion"
                body1="Thanks for stopping by! I have so much more to share about my process and approach to this project. I would love to get in touch and share my excitement for this project with you."
            ></Paragraph>
 */}

            {/* <div className="pt-60"></div> */}






        </m.main>


    );
}