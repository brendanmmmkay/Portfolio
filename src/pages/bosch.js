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
import Footer from "../../components/footer.js";
import Paragraph from "../../components/paragraph";

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
              <div className="px-5 lg:px-48 text-[0.6rem] tracking-widest text-stone-400 font-AvenirHeavy pt-24">BOSCH COURIER CONNECT</div>
              {/* <p classname="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MOMENT ENERGY</p> */}
  
  
  
              <div className='max-w-[90rem]'>
                <m.h1 className="text-[1.2rem] px-5 lg:text-[3rem] text-left tracking-loose font-Garamond text-stone-700 leading-relaxed md:leading-tight pb-24 mt-5 lg:Pt-8 lg:px-48">
                A smart phone application that <br></br>leverages the Bosch eBike Systems <br></br>technology to help couriers win time.
                </m.h1>
              </div>
              {/* <div className="px-5 lg:px-48 pt-20">
                          <p className="font-AvenirHeavy text-stone-500 tracking-widest text-[0.6rem]">FEATURED ON:</p>                       
                          <Image className="pb-10" src={momoPromo}/>
                      </div> */}
  
  
            </div>
          </div>
        </div>
 



            <div className="border-y border-stone-600">
                <Image className="h-96 object-cover lg:h-full lg:object-cover"
                    src={BoschImg6}
                />
            </div>





            <div className="border-y border-tahiti-100 bg-tahiti-200">
                <div className="">
                    <div className="grid lg:grid-cols-6 grid-cols-1 gap-6 md:divide-x md:divide-tahiti-100 divide-x-6">
                        <div className="col-start-1 col-span-3 lg:px-48 px-5">

                            <h2 className="text-stone-500 text-sm font-NeueHaasRoman tracking-wide leading-relaxed pt-10">September — December 2020</h2>
                            <h2 className="text-stone-400 font-AvenirMedium text-[1.1rem] tracking-relaxed leading-relaxed gap-10 pt-3 pb-20 md:pb-0">6 week Academic <br></br>Experience Design Project</h2>

                        </div>




                        <div className="hidden md:block">
              <div className=" grid grid-cols-1 gap-3">
                <div className="font-NeueHaasRoman text-stone-400 tracking-wide text-sm pl-5 pt-10">
                  Roles
                </div>
                <div className="font-Avenir tracking-wide text-stone-300 text-sm pb-10 pl-5">
                  <div>Art Direction</div>
                  <div>UX Design</div>
                  <div>User Research</div>
                  <div>Business Strategy</div>
                </div>
              </div>
            </div>


                        <div className="hidden md:block">
              <div className=" grid grid-cols-1 gap-3">
                <div className="font-NeueHaasRoman text-stone-400 tracking-wide text-sm pl-5 pt-10">
                  Tools
                </div>
                <div className="font-Avenir tracking-wide text-stone-300 text-sm pb-10 pl-5">
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
        body1=" While food delivery apps have seen rapid growth since the pandemic, couriers in the gig economy are under pressure on the job to perform to high standards as the backbone for companies who seek to restore the food industry."
        body2=" To just barely make minimum wage, couriers push their limits - often ignoring fatigue and exhaustion."
      ></Paragraph>






            <div className="lg:px-96 px-5 pb-10">
                <div className="font-NeueHaas-Roman pt-20 text-white text-3xl font-Avenir tracking-wide leading-10 md:leading-loose md:text-2xl max-w-prose">
                    “If I succeed in making two deliveries per hour, I barely earn minimum wage.”
                </div>
                <div className="font-NeueHaas-Roman pt-10 text-stone-400 text-1xl leading-10 xl:leading-12">
                    — eBike Courier research participant
                </div>
            </div>



            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={BoschImg2} />
                    <Image className="w-[60rem] md:flex-none" src={BoschImg3} />
                </div>
            </div>



            <Paragraph
        header="Business opportunity"
        // subTitle="Identifying a design opportunity"
        body1="  For a senior level design course, I was tasked with an ill-defined, client based project. My mission was to find a company that could benefit from an experience design intervention."
        body2="  Bosch is focusing on developing a stress-free experience for eBike riders, providing fitness tracking and wayfinding for recreational users. However, despite partnering with manufacturers that target eBike couriers, Bosch does not yet address their key problems with its current line of smart technology and software."
      ></Paragraph>






            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                        <Image className="border-y border-stone-600 h-full object-cover lg:w-full  lg:object-cover"
                            src={BoschImg1}
                        />
                    </div>



                    <Paragraph
        header="Framing"
        subTitle="Identifying a design opportunity"
        body1="Help ebike couriers win time by aiding them to memorize their city and ride to the best of their abilities - in order to maximize their earnings."
      ></Paragraph>



<Paragraph
        header="Wayfinding"
        // subTitle="Identifying a design opportunity"
        body1="Couriers don’t want to rely on constant directions from their map. After accepting a delivery, they begin riding as quickly as possible, seeking to reach a landmark in the area. Couriers lose time on the trip when they near the address, seeking specific directions on their map."
        body2="Bosch is focusing on developing a stress-free experience for eBike riders, providing fitness tracking and wayfinding for recreational users. However, despite partnering with manufacturers that target eBike couriers, Bosch does not yet address their key problems with its current line of smart technology and software.  To encourage riders to rely on their memory, Courier Connect defaults to providing simple assurance, and indicates the direction of the address to ensure they are going the right way when riding through a familiar area."
      ></Paragraph>





            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                        <Image className="border-y border-stone-600 h-96 object-cover lg:h-full lg:object-cover"
                            src={BoschImg4}
                        />
                    </div>



                    <Paragraph
        header="Time Saving Intervention"
        // subTitle="Identifying a design opportunity"
        body1="Couriers rely on tips to earn money, so they must complete deliveries as quickly as possible."
        body2="As riders approach their destination, Courier Connect chimes in. To eliminate the most common culprit of wasted time, Courier Connect automatically enables directions as riders near arrival to equip them with the information necessary to seamlessly continue toward the delivery address."
      ></Paragraph>




            <div className="h-96 object-cover lg:h-full lg:object-cover border-y border-stone-600">
                        <Image className="h-96 object-cover lg:h-full lg:object-cover"
                            src={BoschImg5}
                        />
                    </div>
                    

                    




<Footer></Footer>


            
        </m.main>


    );
}