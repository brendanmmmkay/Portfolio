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
                   <div className="lg:px-48 px-5">
            <div className='mt-20 mb-10 p-1'>

                <div className="grid lg:grid-cols-5 grid-cols-1 gap-6">
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
                    className='lg:text-5xl text-left text-1xl font-Garamond w-5/6 text-white mt-10 lg:mt-80'>A smart phone application that leverages the Bosch eBike Systems technology to help couriers win time.
                </m.h1>
            </div>

            <div>
                <Image className="h-96 object-cover lg:h-full lg:object-cover"
                    src={BoschImg6}
                />
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
                    While food delivery apps have seen rapid growth since the pandemic, couriers in the gig economy are under pressure on the job to perform to high standards as the backbone for companies who seek to restore the food industry.
                </div>
                <div className="font-NeueHaas-Roman pt-10 text-white text-1xl lg:text-2xl leading-10 xl:leading-12 tracking-tight">
                    To just barely make minimum wage, couriers push their limits - often ignoring fatigue and exhaustion.
                </div>

            </div>




            <div className="xl:w-4/6 pb-10">
                <div className="font-NeueHaas-Roman pt-20 text-white text-3xl leading-10 xl:leading-12">
                    “If I succeed in making two deliveries per hour, I barely earn minimum wage.”
                </div>
                <div className="font-NeueHaas-Roman pt-10 text-stone-400 text-1xl leading-10 xl:leading-12">
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
                    <h1 className='text-2xl lg:text-5xl font-NeueHaasRoman text-white'>Business opportunity</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    For a senior level design course, I was tasked with an ill-defined, client based project. My mission was to find a company that could benefit from an experience design intervention.

                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
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
                    <h1 className='text-2xl lg:text-5xl font-NeueHaasRoman text-white'>Framing</h1>
                    <h1 className='text-1xl lg:text-3xl font-NeueHaas-Roman text-stone-500 pt-1'>Identifying a design opportunity</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-2xl lg:text-3xl pt-20 leading-10 xl:leading-12">
                    Help ebike couriers win time by aiding them to memorize their city and ride to the best of their abilities - in order to maximize their earnings.
                </div>
            </div>



            <div className="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaasRoman text-white'>Wayfinding</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    Couriers don’t want to rely on constant directions from their map.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    After accepting a delivery, they begin riding as quickly as possible, seeking to reach a landmark in the area. Couriers lose time on the trip when they near the address, seeking specific directions on their map.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                    To encourage riders to rely on their memory, Courier Connect defaults to providing simple assurance, and indicates the direction of the address to ensure they are going the right way when riding through a familiar area.
                </div>

            </div>


            <div className="pt-5 h-96 object-cover lg:h-full lg:object-cover">
                        <Image
                            src={BoschImg4}
                        />
                    </div>


                    <div className="xl:w-4/6 pb-10">
                <div className="mt-40">
                    <h1 className='text-2xl lg:text-5xl font-NeueHaasRoman text-white'>Time Saving Intervention</h1>
                </div>

                <div class="divide-y divide-linear-gray pt-5">
                    <div></div>
                    <div>
                    </div>
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                Couriers rely on tips to earn money, so they must complete deliveries as quickly as possible.
                </div>

                <div className="font-NeueHaasLight tracking-wide text-white text-1xl lg:text-2xl pt-20 leading-10 xl:leading-12">
                As riders approach their destination, Courier Connect chimes in. To eliminate the most common culprit of wasted time, Courier Connect automatically enables directions as riders near arrival to equip them with the information necessary to seamlessly continue toward the delivery address.
                    </div>

            </div>


            <div className="h-96 object-cover lg:h-full lg:object-cover pb-60">
                        <Image
                            src={BoschImg5}
                        />
                    </div>

                    </div>








                    <div className='bg-hero-pattern2 bg-cover pt-6 lg:px-48 px-5'>
          <div className='pt-3 pb-6'>



            <div className='lg:px-[4rem] px-5'>

              {/* <div class="flex rounded-lg bg-tahiti-300 border-tahiti-100 dark:border-tahiti-100 shadow-xl shadow-black/5 dark:shadow-black/30 pl-10"> */}
              <div>
                <div className="grid lg:grid-cols-1 sm:grid-cols-1 content-end">
                  <div className="pt-3 gap-40">
                    <div className="text-base">


                      {/* TEST ZONE START */}
                      <div className='px-0  py-1'>

                      {/* FUCK */}

                      <div class="grid w-full items-center pb-5">
                        <div class="w-full justify-between flex space-x-2 flex-col md:flex-row">
                          {/* DIV 1 */}
                          <div className=' drop-shadow-2xl  pb-3 text-3xl'>
                            <h4 className="font-Garamond pt-3 text-5xl text-stone-800 tracking-tighter">Let's get in touch:</h4>
                            <h5 className="font-Avenir pt-2 text-stone-600 tracking-normal text-[1.4rem]">Available November 2023 for design opportunities.</h5>
                          </div>
                          {/* DIV 2 */}

                          <div className="pt-20">
                            <button class="bg-stone-900 hover:bg-stone-700 font-Avenir text-1xl text-white py-4 px-4 w-60 h-15 right-0">
                              Contact Me
                            </button></div>

                        </div>
                      </div>

                      {/* TEST ZONE END */}



                      <div className="divide-y divide-stone-300">
                        <div></div>
                        <div>
                        </div>
                      </div>

                      {/* <div class="w-full justify-between flex space-x-2 flex-col md:flex-row">
                      <h6 className="pt-20 font-SFproBold text-[14px] text-stone-600 uppercase tracking-[.15em]">competencies</h6> */}
                      <h6 className="pt-20 font-SFproBold text-[14px] text-stone-600 uppercase tracking-[.15em]">competencies</h6>
                     {/* </div> */}
                     
                     
                      <div>

                        <div className='mt-10 mb-10 p-1'>
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

                            
                              <div className="col-span-2">

                              <h2 className="text-stone-700 font-SFpro leading-relaxed pt-20 md:pt-0">Resume
                                </h2>
                             <Link href={"https://github.com/brendanmmmkay/Old-Portfolio/blob/master/brendan_mckay_Resume.pdf"}><h2 className="text-stone-800 font-Avenir  leading-relaxed gap-10">A degree in design and freelance work experience.</h2>
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