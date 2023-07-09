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
export default function Bosch() {
    return (
        <m.main
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900 absolute z-2 top-0 left-0 w-full h-ful  bg-regal-gray">
                   <div className="lg:px-48 px-16">
            <div className='mt-20 mb-40 p-1'>

                <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-6">
                    <div className="col-start-1 col-span-2">

                        <h2 className="text-white font-NeueHaasLight tracking-wide leading-relaxed">September — December
                            2020</h2>
                        <h2 className="text-stone-400 font-NeueHaasLight tracking-wider leading-relaxed gap-10">6 week Academic Experience Design Project</h2>

                    </div>

                    <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman text-1xl">
                            Contribution
                        </div>
                        <div className="font-NeueHaasLight tracking-wide text-stone-400">
                            <div>Design Strategy</div>
                            <div>Art Direction</div>
                            <div>Product Design</div>
                            <div>Interaction Design</div>
                        </div>
                    </div>


                    <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman text-1xl">
                            Tools
                        </div>
                        <div className="text-stone-400 tracking-wide font-NeueHaasLight">
                            <div>Figma</div>
                            <div>Miro</div>
                            <div>Photoshop</div>
                            <div>Illustrator</div>
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
                    className='lg:text-4xl text-left sm:text-5xl font-NeueHaas-Roman w-5/6 text-white mt-20 sm:mt-80'>A smart phone application that leverages the Bosch eBike Systems technology to help couriers win time.
                </m.h1>
            </div>

            <div>
                <Image className="h-96 object-cover lg:h-full lg:object-cover"
                    src={BoschImg6}
                />
            </div>




            <div class="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Context</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight pt-20 tracking-wide text-white text-2xl leading-loose">
                    While food delivery apps have seen rapid growth since the pandemic, couriers in the gig economy are under pressure on the job to perform to high standards as the backbone for companies who seek to restore the food industry.
                </div>
                <div className="font-NeueHaas-Roman pt-10 text-white text-2xl leading-relaxed tracking-tight">
                    To just barely make minimum wage, couriers push their limits - often ignoring fatigue and exhaustion.
                </div>

            </div>




            <div className="xl:w-4/6 pb-10">
                <div className="font-NeueHaas-Roman pt-20 text-white text-3xl leading-relaxed">
                    “If I succeed in making two deliveries per hour, I barely earn minimum wage.”
                </div>
                <div className="font-NeueHaas-Roman pt-10 text-stone-400 text-1xl leading-relaxed">
                    — eBike Courier research participant
                </div>
            </div>


            <m.div>
                <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1">
                    <div className="pt-5 xs={12}">
                        <Image
                            src={BoschImg2}
                        />
                    </div>
                    <div className="pt-5">
                        <Image
                            src={BoschImg3}
                        />
                    </div>
                </div>
            </m.div>


            <div className="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaasRoman text-white'>Business opportunity</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                    For a senior level design course, I was tasked with an ill-defined, client based project. My mission was to find a company that could benefit from an experience design intervention.

                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                    Bosch is focusing on developing a stress-free experience for eBike riders, providing fitness tracking and wayfinding for recreational users. However, despite partnering with manufacturers that target eBike couriers, Bosch does not yet address their key problems with its current line of smart technology and software.
                </div>

            </div>


            <div>
                <Image
                    src={BoschImg1}
                />
            </div>


            <div className="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaasRoman text-white'>Framing</h1>
                    <h1 className='text-3xl font-NeueHaas-Roman text-stone-500 pt-1'>Identifying a design opportunity</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-3xl pt-20 leading-loose">
                    Help ebike couriers win time by aiding them to memorize their city and ride to the best of their abilities - in order to maximize their earnings.
                </div>
            </div>



            <div className="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaasRoman text-white'>Wayfinding</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                    Couriers don’t want to rely on constant directions from their map.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                    After accepting a delivery, they begin riding as quickly as possible, seeking to reach a landmark in the area. Couriers lose time on the trip when they near the address, seeking specific directions on their map.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                    To encourage riders to rely on their memory, Courier Connect defaults to providing simple assurance, and indicates the direction of the address to ensure they are going the right way when riding through a familiar area.
                </div>

            </div>


            <div className="pt-5">
                        <Image
                            src={BoschImg4}
                        />
                    </div>


                    <div className="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaasRoman text-white'>Time Saving Intervention</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                Couriers rely on tips to earn money, so they must complete deliveries as quickly as possible.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                As riders approach their destination, Courier Connect chimes in. To eliminate the most common culprit of wasted time, Courier Connect automatically enables directions as riders near arrival to equip them with the information necessary to seamlessly continue toward the delivery address.
                    </div>

            </div>


            <div className="pt-5 pb-20">
                        <Image
                            src={BoschImg5}
                        />
                    </div>

                    </div>



<div className="bg-purple-900">

    <div className="left-5">

    <div className="lg:px-48 px-16">
            <div class="flex flex-col-reverse left-2">
                <Link href={"/"}>
                    <div className="font-NeueHaasLight text-white lg:text-3xl pt-10 pb-5 underline hover:font-ArgentItalic">Return home.</div>
                </Link>
                <div className="font-ArgentItalic text-white pt-52 lg:text-5xl leading-relaxed tracking-4 xl:w-5/6">Thanks for stopping by! I have so much more to share about this project — let's get in touch!</div>
            </div>

            <div className="flex pt-40 lg:gap-40">
                <div className="lg:text-2xl text-base text-white">

            

                    <h4>Find me:</h4>

                </div>
                <div className="lg:text-6xl text-2xl text-white underline">
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
                </div>
                </div>
            </div>
        </m.main>


    );
}