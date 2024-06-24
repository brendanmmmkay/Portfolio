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
import boschPanel1 from "../image/boschPanel1.png"


export default function Bosch() {
    return (
        <m.main

            className="w-full h-full bg-kenya-hara">

            <div className="">
                <div className="px-4">


                    <div className="block md:hidden px-4">
                        <div className="">
                            <Link href="/">
                                <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRENDAN MCKAY — [03.24.24] <br></br>BRAND DESIGNER AND PRODUCT STRATEGIST</li>
                            </Link>
                        </div>
                    </div>



{/* <div className="backdrop-blur-md"></div> */}


                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-200 min-w-full">
                    <div>
                        <VideoComponent src={cityLights} delay={0} />
                    </div>
                    <div>
                        <VideoComponent src={isoScroll} delay={0.2} />
                    </div>
                    <div>
                        <VideoComponent src={vesperFine} delay={0.4} />
                    </div>
                </div>
 */}


                    {/* 
                    <div className=" h-20">

<div className="relative group">
    <div className="rounded-lg overflow-hidden relative">
        <Image
            src={brendanPS2}

        />
        <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-500 rounded-lg">
            <span className="text-white text-lg opacity-0 group-hover:opacity-100 font-SFpro text-xxs transition-opacity duration-500">HELLO!</span>
        </div>
    </div>
    <div>
        <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">

        </div>
        <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
            <div></div>
        </div>
    </div>
</div>

</div>



<h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-[4rem] pl-5"> 
                I am looking for exciting new projects and opportunities to <br></br>make impactful design. reach out for collaboration!
                </h2>

 */}






                    <div className="max-w-2xl">
                        <div className=" text-[0.6rem] text-stone-400 font-AvenirHeavy pt-64">MOMENT ENERGY</div>

                        {/* <p className="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MOMENT ENERGY</p> */}

                        <m.h1

                            className="text-[1.2rem] md:text-3xl text-left tracking-loose font-Avenir text-stone-700 leading-relaxed md:leading-tight mt-5 pb-5 lg:Pt-8">A new logo, visual identity, and web strategy to disrupt the energy storage industry.
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


            <div className="px-4">
                <div className="rounderMoment2">
                    <MuxPlayerComponent className="" playbackId="XO6omvmtlqUNQCa28gtR01muUqkNe401VukzFMAcHi8fY" />
                </div>
            </div>




            <div className="px-4 bg-white">
                <div className="">
                    <div className="md:grid lg:grid-cols-5 grid-cols-1 gap-6 ">
                        <div className="col-start-1 col-span-2">

                            <h2 className="text-stone-800 text-xxs font-SFpro pt-2">APRIL — AUGUST 2021</h2>
                            <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0 pb-20 md:pb-0"> PRODUCT DESIGN AND BRAND REFRESH <br></br> 4 MONTH INTERNSHIP</h2>

                        </div>

                        <div className="hidden md:block">
                            <div className=" grid grid-cols-1">
                                <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                    ROLES
                                </div>
                                <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
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
                                <div className="font-SFpro text-stone-400 text-xxs">
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



            {/* <div className='mt-10 px-4 py-4'>
                    <div className='bg-hero-pattern5 bg-cover'>
                        <Footer />
                    </div>
                </div> */}
{/* 
                <div className="bg-hero-pattern4 bg-cover bg-center h-64">
</div>

            <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:translate-y-1 after:bg-blue-600 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">Hover me</button>
 */}

{/* <div className="bg-hero-pattern4 bg-cover bg-center h-40 backdrop-blur-xl absolute"></div> */}


            <Paragraph
                header="CONTEXT"
                body1="In a design internship with Moment Energy, I was responsible for a brand refresh and website launch as the sole designer for the clean tech start-up."
                body2="Moment Energy is helping to build a sustainable economy through battery energy storage systems made from repurposed electric vehicle batteries, with a mission to provide worldwide access to clean, reliable and affordable power."
            ></Paragraph>



            <Image className="px-4"
                src={momentTable}
            />




            <div className="grid md:grid-cols-2 pt-4">
                <Paragraph
                    header="APPROACH"
                    body1="I facilitated design sprint activities with company founders on brand strategy to create language that communicates their mission, vision, and positioning. I built brand strategy pillars to guide the founders toward making value real for customers."
                    body2="I then created a new brand direction imbued with the aforementioned principles, and developed design standards to ensure the new brand could be consistently applied in any outward materials."
                ></Paragraph>
                <div>
                    <Image className="px-4"
                        src={momentNewFonts}
                    />
                </div>
            </div>

            <div className="px-4 rounded-xl">
                <div className="">
                    <Image className=""
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
                    <Image className="px-4"
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


            <div className="px-4">
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
                <Image className="pb-4 px-4"
                    src={momentNewDeployment}
                />
            </div>



            <div className="px-4">
                <div className="rounderMoment3">
                    <MuxPlayerComponent className="" playbackId="U02mo00dYkyPxFoRZu2ZpdR6sPV9ijqgAZEnIav3sGIY00" />
                </div>
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


            <div className='bg-hero-pattern2 bg-cover'>
                <Paragraph
                    header="ADDENDUM"
                    body1="Thanks for stopping by — I have so much more to share about my process and approach to this project. Send me a message and let's make impactful design together."
                ></Paragraph>

            </div>

            {/* <div className="pt-60"></div> */}














        </m.main>


    );
}