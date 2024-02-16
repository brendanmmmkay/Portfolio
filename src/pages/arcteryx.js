import { motion as m } from "framer-motion"
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import Image from 'next/image'
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
import arrow from "../image/arrow.svg"

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
                <div className='mb-10'>

                    <div className="border-y border-stone-600">
                        <div className="">
                            <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 md:divide-x md:divide-stone-600">
                                <div className="col-start-1 col-span-2 lg:px-48 px-5">

                                    <h2 className="text-stone-300 font-NeueHaasLight tracking-wide leading-relaxed pt-10">January — May 2020
                                    </h2>
                                    <h2 className="text-white font-Avenir text-[1.2rem] tracking-wider leading-relaxed gap-10 pt-10">Freelance Product Design and Brand creation</h2>

                                </div>

                                <div class="text-white grid grid-cols-1 gap-3">
                                    <div className="font-NeueHaasRoman  tracking-wider text-1xl pl-5 pt-10">
                                        Contribution
                                    </div>
                                    <div className="font-Avenir tracking-wide text-stone-400 pb-5 pl-5">
                                        <div>Design Strategy</div>
                                        <div>Art Direction</div>
                                        <div>Product Design</div>
                                        <div>Interaction Design</div>
                                    </div>
                                </div>



                                <div className="invisible md:visible">
                                    <div class="text-white grid grid-cols-1 gap-3">
                                        <div className="font-NeueHaasRoman text-1xl px-5 pt-10">
                                            Team
                                        </div>
                                        <div className="text-stone-400 tracking-wide font-Avenir px-5 pb-10">
                                            <div>Brendan McKay</div>
                                            <div>Aliasger Rasheed</div>
                                            <div>Tracy Chen</div>
                                            <div>Yan Tymoshenko</div>
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
                        className='text-2xl px-5 lg:text-[3.7rem] text-left text-1xl font-Garamond text-tahiti-500 leading-relaxed  md:leading-tight mt-10 pb-1 md:pb-5 lg:mt-40 lg:px-48 max-w-[84%] text-pretty'>A two product solution renewing trust in Arc’teryx’s lasting quality, helping the brand achieve sustainable goals.
                    </m.h1>
                </div>
            </div>


            <div className="h-96 object-cover lg:h-full lg:object-cover border-y border-stone-600">
                <Image
                    src={ArcyImg1}
                />
            </div>






            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond tracking-wide text-white'>Context</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    For a senior research and design course at Simon Fraser University, my team and I reached out to Arc’teryx. We practiced ethnography in depth, documenting and interviewing to find the best opportunity for design.
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    Ultimately, we discovered that customers become unhappy with their gear because they do not perform proper product care procedures.
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                    Through iteration and continual feedback, we concluded that a post-purchase intervention, communicating the importance of product care, would renew trust in the garments lasting quality and help Arc’teryx achieve sustainable goals.
                </div>

            </div>




            <div className="h-96 object-cover lg:h-full lg:object-cover border-y border-stone-600">
                <Image
                    src={ArcyImg4}
                />
            </div>




            <div class="lg:px-96 px-5 pb-10">
                <div className="mt-20 md:mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white tracking-wide'>Value</h1>
                    <h1 className='text-1xl lg:text-2xl font-NeueHaasRoman tracking-widest text-stone-400 lg:pt-1'>Identifying a design opportunity</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>
<article className="text-wrap">
                <p className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    "To minimize our impact as much as possible and make sure that we build products to last a really, really long time”
                </p>
                <p className="font-Avenir tracking-wide text-white pt-20 pb-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    We made two products; the Product Care Magnet, and the Trail Bandana. Each product equips customers with the ability, the motivation, and the necessary reminder that longevity is achieved through a commitment to care.
                </p>
                </article>

            </div>




            <div className="h-96 object-cover lg:h-full lg:object-cover border-y border-stone-600">
                <Image
                    src={ArcyImg8}
                />
            </div>



            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white pb-2'>Digital Touchpoint</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    The product care journey begins with a gift. Arc'teryx customers are able to choose a free gift upon purchasing an item, online or in-store. We decided on gifts because we wanted to make product care knowledge available to every customer - free of cost.
                </div>
                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                    We identified an opportunity to design for online buyers after discovering that there are no current product care touchpoints when ordering garments on the Arc'teryx website.
                </div>
            </div>

            <div className="w-screen overflow-x-auto">
                <m.div>
                    <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
                        <div className="pt-5 xs={12}">
                            <Image
                                src={ArcyImg9}
                            />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={ArcyImg10}
                            />
                        </div>
                    </div>
                </m.div>
            </div>



            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl tracking-wide font-Garamond text-white'>Trail Bandana</h1>
                </div>

                <div class="divide-y divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white text-1xl lg:text-2xl pt-20 pb-20 leading-10 xl:leading-12">
                    As a regularly used and washed garment for hikers, the Trail Bandana accessory acts as physical reminder of product care. On its front, the fabric pattern features legendary hiking trails near international brand store locations. On the back side, there are product care instructions for Gore-tex garments. The bandana is sustainably produced with gore-tex scraps, making it a collectible memento that supports brand values and product education.
                </div>

            </div>


            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                <Image className="border-y border-stone-600 h-96 object-cover lg:h-full lg:object-cover"
                    src={ArcyImg11}
                />
            </div>


            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white'>Product Care Magnet</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                    The magnet is a product care guide made from Gore-tex scraps. The back of the grommet is magnetic, so people can stick it on their washing machines. The grommet loop allows people to put it on their hangers or hooks, so the care instructions can always live with the clothes.
                </div>

            </div>



            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                <Image className="border-y border-stone-600 h-96 object-cover lg:h-full lg:object-cover"
                    src={ArcyImg12}
                />
            </div>



            <div className="pt-60"></div>




            <div className="lg:px-96 px-5 pb-10">
                <div className="">
                    <h1 className='text-3xl lg:text-5xl font-Garamond tracking-wide text-white'>Reaching Out</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                For a senior design course at Simon Fraser University, our team was tasked with finding a local organization whose values we shared. Our challenge was to practice ethnography in depth, and find the best opportunity for design. Arc’teryx’s philosophy as a design company and commitment to sustainability resonated with our team.
                    </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                We decided to reach out, initially contacting the Kitsilano branch’s Marketing and Community Lead, Caz. We were met with a warm welcome, as Caz connected us with Christy, at the new Arc’teryx Metrotown branch. Their kindness and interest opened further opportunities, as our team practiced in store ethnography, reviewed research findings and artifacts with Arc’teryx personnel, and eventually hosted a participatory design workshop.
                    </div>

                {/* <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                    Through iteration and continual feedback, we concluded that a post-purchase intervention, communicating the importance of product care, would renew trust in the garments lasting quality and help Arc’teryx achieve sustainable goals.
                </div> */}

            </div>


            <div className="w-screen overflow-x-auto">
                <m.div>
                    <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
                        <div className="pt-5 xs={12}">
                            <Image
                                src={ArcyImg2}
                            />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={ArcyImg3}
                            />
                        </div>
                    </div>
                </m.div>
            </div>




            <div className="lg:px-96 px-5 pb-10">
                <div className="">
                    <h1 className='text-3xl lg:text-5xl font-Garamond tracking-wide text-white pt-20'>Ethnography and User Research</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-500 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                We conducted 8 qualitative interviews with Arc’teryx customers, seeking to understand motivations, behaviors, and rituals. Quickly, patterns began to surface.
               </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                Our interviews confirmed that customers care for their garments in unconventional and sometimes damaging ways. Customers often believe that it is damaging to machine wash or dry their garments. Others believe that Arc’teryx’s reputation for quality and the high price point mean that products do not need care.
               </div>

            </div>


            <div className="w-screen overflow-x-auto">
                <m.div>
                    <div class="grid container lg:grid-cols-2 gap-6 sm:grid-cols-1 lg:ml-[20rem]">
                        <div className="pt-5 xs={12}">
                            <Image
                                src={ArcyImg5}
                            />
                        </div>
                        <div className="pt-5">
                            <Image
                                src={ArcyImg6}
                            />
                        </div>
                    </div>
                </m.div>
            </div>




            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white'>Persona and Journey Frameworks</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                With our research, we created personas and journey frameworks to share with Arc’teryx and our interviewees. These artifacts highlighted insights we discovered behind frictions we identified when grouping ethnographic results. A persona becomes accurate with open lines of feedback and iteration, when both client and customers can agree that the persona represents their core and most pressing needs.
                    </div>

            </div>



            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                <Image className="border-y border-stone-600 h-96 object-cover lg:h-full lg:object-cover"
                    src={ArcyImg7}
                />
            </div>




            <div className="lg:px-96 px-5 pb-10">
                <div className="mt-40">
                    <h1 className='text-3xl lg:text-5xl font-Garamond text-white'>Reflection</h1>
                </div>

                <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                Reaching out to Arc'teryx opened the door to an incredible experience. My greatest learning was in the importance of taking initiative, and believing in my abilities and process. Creating a mini sprint to be held in a professional environment with non-designers was initially daunting. I was always nervous that our collaboration would feel like a chore for our connections at Arc'teryx, and it increased when the sprint went virtual. Of course, they were eternally friendly and excited to be involved.
                </div>

                <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose pb-20">
                Taking initiative and believing in ourselves fueled our communications with Arc'teryx, our professor, and our research participants. Through conversations and study mehtods, the greater initiative we took - the better our understanding became.
                 </div>

            </div>

            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                <Image className="h-96 object-cover lg:h-full lg:object-cover"
                    src={ArcyImg13}
                />
            </div>






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


                                                        {/* <div class="grid grid-cols-3 divide-x">
  <div>01</div>
  <div>02</div>
</div> */}





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