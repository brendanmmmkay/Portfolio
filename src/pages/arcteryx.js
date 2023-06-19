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
// import '@/styles/globals.css'

export default function Arcteryx() {
    return (
        <m.main
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900 absolute z-2 top-0 left-0 w-full h-ful  bg-regal-gray lg:px-48 px-16">
            <div className='mt-60 mb-40 p-1'>
                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-4xl text-left lg:text-10x1 font-NeueHaas-Roman w-5/6 text-white'>A two product solution that leverages upcycled material to tell customers about the importance of product care - renewing trust in Arc’teryx’s lasting quality, and helping the brand achieve sustainable goals.
                </m.h1>
            </div>

            <div>
                <Image
                    src={ArcyImg1}
                    width={1600}
                    height={200} />
            </div>




            <div class="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-5xl font-NeueHaasRoman text-white'>Value</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaas-Roman pt-20 text-white text-3xl leading-relaxed">
                    "To minimize our impact as much as possible and make sure that we build products to last a really, really long time”
                </div>
                <div className="font-NeueHaas-Roman pt-10 text-stone-400 text-1xl leading-relaxed">
                    — ARC'TERYX MARKETING LEAD
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
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
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Context</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight pt-20 tracking-wide text-white text-2xl leading-loose">
                For a senior research and design course at Simon Fraser University, my team and I reached out to Arc’teryx. We practiced ethnography in depth, documenting and interviewing to find the best opportunity for design. 
                   </div>
                <div className="font-NeueHaas-Roman pt-10 text-white text-4xl leading-relaxed tracking-tight">
                Ultimately, we discovered that customers become unhappy with their gear because they do not perform proper product care procedures.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
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
                    <h1 className='text-5xl font-NeueHaasRoman text-white'>Digital Touchpoint</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaas-Roman pt-20 text-white text-3xl leading-relaxed">
                The product care journey begins with a gift. Arc'teryx customers are able to choose a free gift upon purchasing an item, online or in-store. We decided on gifts because we wanted to make product care knowledge available to every customer - free of cost. 
                    </div>
                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
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
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Trail Bandana</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
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
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Product Care Magnet</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
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
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Reaching Out</h1>
                    {/* <h1 className='text-3xl font-NeueHaas-Roman text-stone-600 pt-1'>A problem shared by design educators</h1> */}
                </div>

                <div>
                    <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                        For a senior design course at Simon Fraser University, our team was tasked with finding a local organization whose values we shared. Our challenge was to practice ethnography in depth, and find the best opportunity for design. Arc’teryx’s philosophy as a design company and commitment to sustainability resonated with our team.
                    </div>

                    <div className="font-NeueHaasLight tracking-wide pt-10 text-white text-2xl pb-10 leading-loose">
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
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Ethnography and User Research </h1>
                </div>


                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide pt-20  text-white text-2xl leading-loose">
                    We conducted 8 qualitative interviews with Arc’teryx customers, seeking to understand motivations, behaviors, and rituals. Quickly, patterns began to surface.
                </div>

                <div className="pt-10 font-NeueHaasLight tracking-wide pt-30  text-white text-2xl leading-loose">
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
                    <h1 className='text-5xl font-NeueHaas-Roman text-white'>Persona and Journey Frameworks</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>


                <div className="font-NeueHaasLight tracking-wide text-white text-2xl pt-20 leading-loose">
                    With our research, we created personas and journey frameworks to share with Arc’teryx and our interviewees. These artifacts highlighted insights we discovered behind frictions we identified when grouping ethnographic results. A persona becomes accurate with open lines of feedback and iteration, when both client and customers can agree that the persona represents their core and most pressing needs.
                </div>

            </m.div>

            <m.div className="pt-20">
                <Image
                    src={ArcyImg7}
                    width={1500}
                    height={200} />
            </m.div>


            <m.div>
<div class="xl:w-4/6">
    <div className="pt-20"></div>
    <h1 className='text-5xl font-NeueHaasRoman text-white'>Key Insights</h1>
            <ul className="list-disc font-NeueHaasRoman tracking-snug leading-wide text-white pt-20 text-3xl">
                <li>Customers lose their trust in the Arc’teryx brand when their garments wet out due to lack of product care.</li>
                <li className="pt-10 text-3xl">There are no product care touchpoints when ordering garments online.</li>
            </ul>
            </div>
            </m.div>






            <div class="flex flex-col-reverse">
                <div className="font-NeueHaasLight text-sub-gray pt-5 pb-5">Freelance product design and logo design</div>
                <Link href={"/contact"}>
                    <div className="font-NeueHaasRoman text-white pt-52 lg:text-2xl leading-loose tracking-wide">Thanks for stopping by! I have so much more to share about this project, let's get in touch!</div>
                </Link>
            </div>

            <div className="flex pt-20 gap-40">
                <div className="lg:text-2xl text-base text-white">
                    <Link href={"/"}>
                        <h4>Find me</h4>
                    </Link>
                </div>
                <div className="lg:text-6xl text-2xl underline text-white">
                    <ul>
                        <div className="overflow-hidden">
                            <li className="pb-4">Email</li>
                            <li className="pb-4">Linkedin</li>
                            <li className="pb-4">Read.cv</li>
                            <li className="pb-12">Medium</li>
                        </div>
                    </ul>
                </div>
            </div>
        </m.main>
    );
}