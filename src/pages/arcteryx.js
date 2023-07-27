import { motion as m } from "framer-motion"
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import Image from 'next/image'
import test1 from "../image/TWimgTest.png"
import ArcyImg1 from "../image/ArcyImg1.png"
import ArcyImg2 from "../image/ArcyImg2.png"
import ArcyImg3 from "../image/ArcyImg3.png"
import ArcyImg4 from "../image/ArcyImg4.png"
import ArcyImg5 from "../image/ArcyImg5.png"
import ArcyImg6 from "../image/ArcyImg6.png"
import ArcyImg7 from "../image/ArcyImg7.png"
import ArcyImg8 from "../image/ArcyImg8.png"
import ArcyImg9 from "../image/ArcyImg9.png"
import ArcyImg10 from "../image/ArcyImg10.png"
import ArcyImg11 from "../image/ArcyImg11.png"
import ArcyImg12 from "../image/ArcyImg12.png"
import ArcyImg13 from "../image/ArcyImg13.png"

export default function Arcteryx() {
    return (
        <m.main
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900 absolute z-2 top-0 left-0 w-full h-ful  bg-regal-gray lg:px-48 px-16">
            <div className='mt-20 mb-40 p-1'>

                <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-6">
                    <div className="col-start-1 col-span-2">
                
                        <h2 className="text-white font-NeueHaasLight tracking-wide leading-relaxed">January — May
                            2020</h2>
                            <h2 className="text-stone-400 font-NeueHaasLight tracking-wider leading-relaxed gap-10">14 week SFU project in collaboration with Arc’teryx</h2>
            
                    </div>

                    <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman text-1xl">
                            Contribution
                        </div>
                        <div className="font-NeueHaasLight tracking-wide text-stone-400">
                            <div>Design Strategy</div>
                            <div>Ethnography</div>
                            <div>Workshop Facilitaion</div>
                            <div>Service Design</div>
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


                    <div class="text-white grid grid-cols-1 gap-3">
                        <div className="font-NeueHaasRoman">
                            Team
                        </div>
                        <div className="text-stone-400 tracking-wide font-NeueHaasLight">
                            <div>Brendan McKay</div>
                            <div>Aliasger Rasheed</div>
                            <div>Tracy Chen</div>
                            <div>Yan Tymoshenko</div>
                        </div>
                    </div>


                </div>

                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-1xl lg:text-4xl text-left font-NeueHaas-Roman w-5/6 text-white mt-10 lg:mt-80'>A two product solution that leverages upcycled material to tell customers about the importance of product care - renewing trust in Arc’teryx’s lasting quality, and helping the brand achieve sustainable goals.
                </m.h1>
            </div>

            <div>
                <Image
                    src={ArcyImg1}
           />
            </div>




            <div class="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaasRoman text-white'>Value</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaas-Roman pt-20 text-white text-1xl lg:text-3xl leading-relaxed">
                    "To minimize our impact as much as possible and make sure that we build products to last a really, really long time”
                </div>
                <div className="font-NeueHaas-Roman pt-10 text-stone-400 text-1xl leading-relaxed">
                    — ARC'TERYX MARKETING LEAD
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    We made two products; the Product Care Magnet, and the Trail Bandana. Each product equips customers with the ability, the motivation, and the necessary reminder that longevity is achieved through a commitment to care.
                </div>

            </div>

            <div className="pt-5">
                <Image
                    src={ArcyImg4}
                    width={1600}
                    height={200} />
            </div>




            <div class="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaas-Roman text-white'>Context</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight pt-20 tracking-wide text-white text-1xl lg:text-2xl leading-10 xl:leading-12">
                    For a senior research and design course at Simon Fraser University, my team and I reached out to Arc’teryx. We practiced ethnography in depth, documenting and interviewing to find the best opportunity for design.
                </div>
                <div className="font-NeueHaas-Roman pt-10 text-white text-1xl lg:text-4xl leading-relaxed tracking-tight">
                    Ultimately, we discovered that customers become unhappy with their gear because they do not perform proper product care procedures.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    Through iteration and continual feedback, we concluded that a post-purchase intervention, communicating the importance of product care, would renew trust in the garments lasting quality and help Arc’teryx achieve sustainable goals.
                </div>

            </div>


            <div className="pt-5">
                <Image
                    src={ArcyImg8}
                    width={1600}
                    height={200} />
            </div>




            <div class="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaasRoman text-white'>Digital Touchpoint</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaas-Roman pt-20 text-white text-1xl lg:text-3xl leading-relaxed">
                    The product care journey begins with a gift. Arc'teryx customers are able to choose a free gift upon purchasing an item, online or in-store. We decided on gifts because we wanted to make product care knowledge available to every customer - free of cost.
                </div>
                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    We identified an opportunity to design for online buyers after discovering that there are no current product care touchpoints when ordering garments on the Arc'teryx website.
                </div>

            </div>


            <m.div>
                <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1">
                    <div className="pt-5 xs={12}">
                        <Image
                            src={ArcyImg9}
                            width={800}
                            height={200} />
                    </div>
                    <div className="pt-5">
                        <Image
                            src={ArcyImg10}
                            width={800}
                            height={200} />
                    </div>
                </div>
            </m.div>


            <m.div className="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaas-Roman text-white'>Trail Bandana</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    As a regularly used and washed garment for hikers, the Trail Bandana accessory acts as physical reminder of product care. On its front, the fabric pattern features legendary hiking trails near international brand store locations. On the back side, there are product care instructions for Gore-tex garments. The bandana is sustainably produced with gore-tex scraps, making it a collectible memento that supports brand values and product education.
                </div>

            </m.div>

            <m.div className="pt-20">
                <Image
                    src={ArcyImg11}
                    width={1500}
                    height={200} />
            </m.div>



            <m.div className="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaas-Roman text-white'>Product Care Magnet</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    The magnet is a product care guide made from Gore-tex scraps. The back of the grommet is magnetic, so people can stick it on their washing machines. The grommet loop allows people to put it on their hangers or hooks, so the care instructions can always live with the clothes.
                </div>

            </m.div>

            <m.div className="pt-20">
                <Image
                    src={ArcyImg12}
                    width={1500}
                    height={200} />
            </m.div>




            <m.div className="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaas-Roman text-white'>Reaching Out</h1>
                    {/* <h1 className='text-3xl font-NeueHaas-Roman text-stone-600 pt-1'>A problem shared by design educators</h1> */}
                </div>

                <div>
                    <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                        For a senior design course at Simon Fraser University, our team was tasked with finding a local organization whose values we shared. Our challenge was to practice ethnography in depth, and find the best opportunity for design. Arc’teryx’s philosophy as a design company and commitment to sustainability resonated with our team.
                    </div>

                    <div className="font-NeueHaasLight tracking-wide pt-10 text-white text-1xl lg:text-2xl pb-10 leading-10 xl:leading-12">
                        We decided to reach out, initially contacting the Kitsilano branch’s Marketing and Community Lead, Caz. We were met with a warm welcome, as Caz connected us with Christy, at the new Arc’teryx Metrotown branch. Their kindness and interest opened further opportunities, as our team practiced in store ethnography, reviewed research findings and artifacts with Arc’teryx personnel, and eventually hosted a participatory design workshop.
                    </div>
                </div>

            </m.div>

            <m.div>
                <div class="divide-y divide-linear-gray">
                    <div></div>
                    <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1">
                        <div className="pt-5 xs={12}">
                            <Image
                                src={ArcyImg2}
                                width={800}
                                height={200} />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={ArcyImg3}
                                width={800}
                                height={200} />
                        </div>
                    </div>
                </div>
            </m.div>








            <m.div class="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaas-Roman text-white'>Ethnography and User Research </h1>
                </div>


                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide pt-20  text-white text-1xl lg:text-2xl leading-10 xl:leading-12">
                    We conducted 8 qualitative interviews with Arc’teryx customers, seeking to understand motivations, behaviors, and rituals. Quickly, patterns began to surface.
                </div>

                <div className="pt-10 font-NeueHaasLight tracking-wide pt-30  text-white text-1xl lg:text-2xl leading-10 xl:leading-12">
                    Our interviews confirmed that customers care for their garments in unconventional and sometimes damaging ways. Customers often believe that it is damaging to machine wash or dry their garments. Others believe that Arc’teryx’s reputation for quality and the high price point mean that products do not need care.
                </div>
            </m.div>

            <m.div>
                <div class="pt-20 grid container lg:grid-cols-2 gap-6 sm:grid-cols-1">
                    <div className="pt-5 xs={12}">
                        <Image
                            src={ArcyImg5}
                            width={800}
                            height={200} />
                    </div>
                    <div className="pt-5">
                        <Image
                            src={ArcyImg6}
                            width={800}
                            height={200} />
                    </div>
                </div>
            </m.div>


            <m.div className="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaas-Roman text-white'>Persona and Journey Frameworks</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    With our research, we created personas and journey frameworks to share with Arc’teryx and our interviewees. These artifacts highlighted insights we discovered behind frictions we identified when grouping ethnographic results. A persona becomes accurate with open lines of feedback and iteration, when both client and customers can agree that the persona represents their core and most pressing needs.
                </div>

            </m.div>

            <m.div className="pt-20">
                <Image
                    src={ArcyImg7}
                    width={1500}
                    height={200} />
            </m.div>


            {/* <m.div>
                <div class="xl:w-4/6">
                    <div className="pt-20"></div>
                    <h1 className='text-5xl font-NeueHaasRoman text-white'>Key Insights</h1>
                    <ul className="list-disc font-NeueHaasRoman tracking-snug leading-wide text-white pt-20 text-3xl">
                        <li>Customers lose their trust in the Arc’teryx brand when their garments wet out due to lack of product care.</li>
                        <li className="pt-10 text-3xl">There are no product care touchpoints when ordering garments online.</li>
                    </ul>
                </div>
            </m.div> */}



            <m.div className="xl:w-4/6">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaas-Roman text-white'>Reflection</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                Reaching out to Arc'teryx opened the door to an incredible experience. My greatest learning was in the importance of taking initiative, and believing in my abilities and process. Creating a mini sprint to be held in a professional environment with non-designers was initially daunting. I was always nervous that our collaboration would feel like a chore for our connections at Arc'teryx, and it increased when the sprint went virtual. Of course, they were eternally friendly and excited to be involved.
                    </div>

                    <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                Taking initiative and believing in ourselves fueled our communications with Arc'teryx, our professor, and our research participants. Through conversations and study mehtods, the greater initiative we took - the better our understanding became.
                    </div>

            </m.div>

            <m.div className="pt-20">
                <Image
                    src={ArcyImg13}
                    width={1500}
                    height={200} />
            </m.div>



            <div class="flex flex-col-reverse">
               
            <Link href={"/"}>
                <div className="font-NeueHaasLight text-white text-1xl lg:lg:text-3xl pt-10 pb-5 underline hover:font-ArgentItalic">Return home.</div>
                </Link>
                    <div className="font-NeueHaasRoman text-white pt-52 text-1xl lg:lg:text-4xl leading-10 xl:leading-12 tracking-wide xl:w-4/6">Thanks for stopping by! I have so much more to share about this project, let's get in touch!</div>
            </div>

            <div className="flex pt-40 lg:gap-40">
                <div className="text-1xl lg:text-2xl text-base text-white">
                    
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
        </m.main>
    );
}