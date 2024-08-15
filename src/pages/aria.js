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
import momentMoodboard from "../image/momentMoodboards.png"
import aliceGlass from "../image/aliceGlass.png"



export default function Aria() {
    return (
        <m.main className="w-full h-full">
<div className="bg-white rounded-md">
            <div className="">
                <div className="px-4">


                    <div className="block md:hidden px-4">
                        <div className="">
                            <Link href="/">
                                <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRENDAN MCKAY — [03.24.24] <br></br>BRAND DESIGNER AND PRODUCT STRATEGIST</li>
                            </Link>
                        </div>
                    </div>











                    <div className="max-w-2xl">
                        <div className=" text-[0.6rem] text-stone-400 font-AvenirHeavy pt-64">ARIA</div>

                        {/* <p className="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MOMENT ENERGY</p> */}

                        <m.h1

                            className="text-[1.2rem] md:text-3xl text-left tracking-loose font-Avenir text-stone-700 leading-relaxed md:leading-tight mt-5 pb-5 lg:Pt-8">A ticket sales and distribution app <br></br>focused on underground music and events
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
                    <MuxPlayerComponent className="" playbackId="o16WJY01Nf4h34usYkCnkR8GLD1wL76n6BXzS5F4h2lI" />
                </div>
            </div>




            <div className="px-4 ">
                <div className="">
                    <div className="md:grid lg:grid-cols-5 grid-cols-1 gap-6 ">
                        <div className="col-start-1 col-span-2">

                            <h2 className="text-stone-800 text-xxs font-SFpro pt-2">SUMMER 2024</h2>
                            <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0 pb-20 md:pb-0"> JUST FOR FUN!</h2>

                        </div>

                     



                        <div className="hidden md:block">
                            <div className=" grid grid-cols-1">
                                <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                                    TOOLS
                                </div>
                                <div className="font-SFpro text-stone-400 text-xxs">
                                    <div>FIGMA</div>
                                    <div>AFTER EFFECTS</div>
                                    <div>ORIGAMI STUDIO</div>
                                    <div>PHOTOSHOP</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



            <Paragraph
                header="CONTEXT"
                body1="Aria is your go-to app for discovering and purchasing tickets to underground music events. The app is designed for underground music lovers to tap into events they may have missed, purchase tickets, and share new acts with friends. Whether it be a secret warehouse party in Paris or a basement show in New York, Aria is the medium where upcoming artists get all the shine."
            ></Paragraph>



<div className="px-4 pb-10">
                <div className="rounder">
                    <MuxPlayerComponent className="" playbackId="yh758Ag7SIVho492FoSlPoUBKFTek9XP61yuMpcifeA" />
                </div>
            </div>




</div>
<div className="pt-10 mt-10 bg-white w-full rounded-md">

<div className='bg-hero-pattern2 bg-cover'>
                <Paragraph
                    header="ADDENDUM"
                    body1="Thanks for stopping by — I have so much more to share about my process and approach to this project. Send me a message and let's make impactful design together."
                ></Paragraph>

            </div>

            <div className="rounded-md overflow-hidden">

            <Image className="px-4 w-full pb-10"
                src={aliceGlass}
            />
</div>


    </div>

    {/* <div className="mt-10 pt-10"></div> */}
        </m.main>


    );
}