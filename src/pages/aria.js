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
import ariaSearchBar from "../image/ariaSearchBar.png"
import ariaThaiboyBio from "../image/ariaThaiboyBio.png"
import ariaPalm from "../image/ariaPalm.png"
import TextBox from "../../components/TextBox.jsx";
import ariaProfile from "../image/ariaProfile.png"
import ariaHost from "../image/ariaHost.png"
import ariaHands from "../image/ariaHands.png"
import ariaCalendar from "../image/ariaCalendar.png"


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





                        <TextBox header="NOTICE" subtitle="This is a recent project that I have been working on - just for fun. For rigorous design process, please check out my other projects!" />






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
                    <div className="hidden md:block rounder">
                        <MuxPlayerComponent className="" playbackId="D4GHIo5JY2jYtubriqhE01VbXv027KjpoWxY6tRPlhKeo" />
                    </div>


                    <div className="block md:hidden">
                            <div className="rounderFlat">
                                <Link href="/aria">
                                    <MuxPlayerComponent className="" playbackId="nGIXclfTrpmOqcFM019SlkeOTTHQJznmH3UAttTuxxOQ" />
                                </Link>
                            </div>
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



                {/* <Paragraph
                header="CONTEXT"
                body1="Aria is your go-to app for discovering and purchasing tickets to underground music events. The app is designed for underground music lovers to tap into events they may have missed, purchase tickets, and share new acts with friends. Whether it be a secret warehouse party in Paris or a basement show in New York, Aria is the medium where upcoming artists get all the shine."
            ></Paragraph> */}

                <Paragraph header="CONTEXT" body1="Aria is a platform for connecting people interested in underground music with artists across all kinds of experimental and alternative music genres. For listeners, Aria is a tool for discovering and keeping up with the world of live underground music. "></Paragraph>


                <div className="px-4">
                    <div className="hidden md:block rounder">
                        <MuxPlayerComponent className="" playbackId="qMHZN8uYYkDmxwS1usw00yCU01Li6BghXWi7rY4xurcQ4" />
                    </div>
                </div>

        <div className="rounded-md overflow-hidden">
                <div className="block md:hidden col-span-3 pt-5 px-4">
                    <MuxPlayerComponent playbackId="xt8jkPY02K1Y7U00oghl2z00Tmi459DwV02sBrG486AD02ag" />
                </div>
                </div>


                <div className="px-4 pb-4">
                    <div className="grid md:grid-cols-2 gap-4 py-4">

                        <Image className=" w-full"
                            src={aliceGlass}
                        />

                        <Image className=" w-full"
                            src={ariaSearchBar}
                        />


                    </div>

                </div>

                <Paragraph header="VALUE" body1="Aria seeks to bring value for both listeners and performers, creating a method for people to attend experimental live music events wherever they are in the world. "
                    body2="Musicians can share their events and sell tickets on Aria. Joining the feed gives artists access to listeners who enjoy alternative genres that are similar. "></Paragraph>



                <h2 className="text-stone-800 text-xxs font-SFpro pt-20 px-4">VALUE PROPOSAL</h2>

                <div className="flex flex-col md:flex-row gap-4 px-4">

                    <TextBox header="FOR LISTENERS" subtitle="Listeners learn about more music events, connect with the greater community of experimental music fans, and have more novel going-out music experiences." />
                    <TextBox header="FOR MUSICIANS" subtitle="Musicians sell more tickets to a wider audience of listeners and pack out venues." />
                    <TextBox header="FOR VENUES" subtitle="Venues that regularly host underground artists see a greater return of one time customers." />

                </div>




                <div className="px-4 pt-4">
                    <div className="rounder">
                        <MuxPlayerComponent className="" playbackId="vkO8iSvSn5oJ5fYCwenuxO4PKSj8ZG59bk9SJwjDJ24" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 py-2 px-4">

                    <Image className=" w-full"
                        src={ariaProfile}
                    />

                    <Image className="w-full"
                        src={ariaHost}
                    />


                </div>




                <Paragraph header="AN ALTERNATIVE OPTION FOR ALTERNATIVE MUSICIANS" body1="Musicians can share their events and sell tickets on Aria. Joining the feed gives artists access to listeners who enjoy alternative genres that are similar. "
                    body2="Aria eliminates cognitive overhead and gives SoundCloud and BandCamp artists a similarly simple and alternative ticket sales platform. Aria gives artists a modern and simpler alternative to creating facebook events, with a focus on clearer shareability."></Paragraph>




                <div className="grid md:grid-cols-2 gap-4 py-2 px-4">

                    <Image className=" w-full"
                        src={ariaHands}
                    />

                    <Image className="w-full"
                        src={ariaCalendar}
                    />


                </div>




                <Paragraph header="CONNECTING FANS" body1="Keeping up with underground events is difficult at home, and an even harder task abroad. Aria allows music streaming listeners to keep up with the tour dates of their artists without relying on twitter or facebook."
                    body2="Aria gives people more ways to connect in seemingly boring cities. Travellers who are visiting Paris or New York can see an event thrown by authentic culture in the cities."></Paragraph>


                <div className="grid md:grid-cols-2 gap-4 py-4 px-4">

                    <Image className=" w-full"
                        src={ariaThaiboyBio}
                    />

                    <Image className="w-full"
                        src={ariaPalm}
                    />


                </div>


            </div>



            <div className="pt-10 mt-10 bg-white w-full rounded-md pb-10">

                <div className='bg-hero-pattern2 bg-cover'>
                    <Paragraph
                        header="ADDENDUM"
                        body1="Thanks for stopping by — I have so much more to share about my process and approach to this project. Send me a message and let's make impactful design together."
                    ></Paragraph>

                </div>

                <div className="rounded-md overflow-hidden">

                    {/* <Image className="px-4 w-full pb-10"
                src={aliceGlass}
            /> */}
                </div>


            </div>

            {/* <div className="mt-10 pt-10"></div> */}
        </m.main>


    );
}