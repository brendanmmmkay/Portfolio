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
import Paragraph from '../../components/paragraph';
import Footer from "../../components/footer.js";

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
                <div className=''>


                    <div className="bg-white">
                        <div className="px-5 lg:px-48 text-[0.6rem] tracking-widest text-stone-400 font-AvenirHeavy pt-24">ARC'TERYX X SFU</div>
                        {/* <p classname="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MOMENT ENERGY</p> */}



                        <div className='max-w-[90rem]'>
                            <m.h1 className="text-[1.2rem] px-5 lg:text-[2.4rem] text-left tracking-loose font-Garamond text-stone-700 leading-relaxed md:leading-tight pb-24 mt-5 lg:Pt-8 lg:px-48 max-w-prose">
                                A two product solution renewing trust in Arc’teryx’s lasting quality, helping the brand achieve sustainable goals.
                            </m.h1>
                        </div>
                        {/* <div className="px-5 lg:px-48 pt-20">
                          <p className="font-AvenirHeavy text-stone-500 tracking-widest text-[0.6rem]">FEATURED ON:</p>                       
                          <Image className="pb-10" src={momoPromo}/>
                      </div> */}


                    </div>
                </div>
            </div>







            <div className="h-96 object-cover lg:h-full lg:object-cover">
                <Image
                    src={ArcyImg1}
                />
            </div>


            <div className="border-y border-tahiti-100 bg-tahiti-200">
                <div className="">
                    <div className="grid lg:grid-cols-6 grid-cols-1 gap-6 md:divide-x md:divide-tahiti-100 divide-x-6">
                        <div className="col-start-1 col-span-2 lg:px-48 px-5">

                            <h2 className="text-stone-500 text-sm font-NeueHaasRoman tracking-wide leading-relaxed pt-10">January — May 2020
                                2021</h2>
                            <h2 className="text-stone-400 font-AvenirMedium text-[1.1rem] tracking-relaxed leading-relaxed gap-10 pt-3">Senior SFU experience design collaboration with Arc'teryx</h2>

                        </div>




                        <div className="hidden md:block">
              <div className=" grid grid-cols-1 gap-3">
                <div className="font-NeueHaasRoman text-stone-400 tracking-wide text-sm pl-5 pt-10">
                  Roles
                </div>
                <div className="font-Avenir tracking-wide text-stone-300 text-sm pb-10 pl-5">
                  <div>Design Strategy</div>
                  <div>Ethnography</div>
                  <div>Physical Product Design</div>
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



                        <div className="hidden md:block">
              <div className=" grid grid-cols-1 gap-3">
                <div className="font-NeueHaasRoman text-stone-400 tracking-wide text-sm pl-5 pt-10">
                  Team
                </div>
                <div className="font-Avenir tracking-wide text-stone-300 text-sm pb-10 pl-5">
                  <div>Aliasger Rasheed</div>
                  <div>Tracy Chen</div>
                  <div>Yan Tymoshenko</div>
                  <div>Brendan McKay</div>
                </div>
              </div>
            </div>

                    </div>
                </div>
            </div>



            <Paragraph
                header="Context"
                body1="For a senior research and design course at Simon Fraser University, my team and I reached out to Arc’teryx. We practiced ethnography in depth, documenting and interviewing to find the best opportunity for design."
                body2="Ultimately, we discovered that customers become unhappy with their gear because they do not perform proper product care procedures.  Through iteration and continual feedback, we concluded that a post-purchase intervention, communicating the importance of product care, would renew trust in the garments lasting quality and help Arc’teryx achieve sustainable goals."
            ></Paragraph>





            <div className="h-96 object-cover lg:h-full lg:object-cover border-y border-stone-600">
                <Image
                    src={ArcyImg4}
                />
            </div>




            <Paragraph
                header="Value"
                // subTitle="Identifying a design opportunity"
                body2="We made two products; the Product Care Magnet, and the Trail Bandana. Each product equips customers with the ability, the motivation, and the necessary reminder that longevity is achieved through a commitment to care."
            ></Paragraph>


            {/* <div classname="lg:px-96 px-5 pb-10">
                <div className="">
                <p className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
                        "To minimize our impact as much as possible and make sure that we build products to last a really, really long time”
                    </p>
                    </div>
                    </div> */}


            <div className="h-96 object-cover lg:h-full lg:object-cover border-y border-stone-600">
                <Image
                    src={ArcyImg8}
                />
            </div>



            <Paragraph
                header="Digital Touchpoint"
                body1="The product care journey begins with a gift. Arc'teryx customers are able to choose a free gift upon purchasing an item, online or in-store. We decided on gifts because we wanted to make product care knowledge available to every customer - free of cost."
                body2="We identified an opportunity to design for online buyers after discovering that there are no current product care touchpoints when ordering garments on the Arc'teryx website."
            ></Paragraph>



            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={ArcyImg9} />
                    <Image className="w-[60rem] md:flex-none" src={ArcyImg10} />
                </div>
            </div>



            <Paragraph
                header="Trail Bandana"
                body1="As a regularly used and washed garment for hikers, the Trail Bandana accessory acts as physical reminder of product care. On its front, the fabric pattern features legendary hiking trails near international brand store locations. On the back side, there are product care instructions for Gore-tex garments. The bandana is sustainably produced with gore-tex scraps, making it a collectible memento that supports brand values and product education."
            ></Paragraph>





            <div className="relative h-screen w-screen">
                <Image
                    src={ArcyImg11}
                    layout="fill"
                    objectFit="cover"
                />
            </div>


            <Paragraph
                header="Product Care Magnet"
                body1="The magnet is a product care guide made from Gore-tex scraps. The back of the grommet is magnetic, so people can stick it on their washing machines. The grommet loop allows people to put it on their hangers or hooks, so the care instructions can always live with the clothes."
            ></Paragraph>





            <div className="relative h-screen w-screen">
                <Image
                    src={ArcyImg12}
                    layout="fill"
                    objectFit="cover"
                />
            </div>



            <div className="pt-60"></div>


            <Paragraph
                header="Reaching Out"
                body1="For a senior design course at Simon Fraser University, our team was tasked with finding a local organization whose values we shared. Our challenge was to practice ethnography in depth, and find the best opportunity for design. Arc’teryx’s philosophy as a design company and commitment to sustainability resonated with our team."
                body2="We decided to reach out, initially contacting the Kitsilano branch’s Marketing and Community Lead, Caz. We were met with a warm welcome, as Caz connected us with Christy, at the new Arc’teryx Metrotown branch. Their kindness and interest opened further opportunities, as our team practiced in store ethnography, reviewed research findings and artifacts with Arc’teryx personnel, and eventually hosted a participatory design workshop."
            ></Paragraph>




            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={ArcyImg2} />
                    <Image className="w-[60rem] md:flex-none" src={ArcyImg3} />
                </div>
            </div>



            <Paragraph
                header="Ethnography and User Research"
                body1="We conducted 8 qualitative interviews with Arc’teryx customers, seeking to understand motivations, behaviors, and rituals. Quickly, patterns began to surface."
                body2="Our interviews confirmed that customers care for their garments in unconventional and sometimes damaging ways. Customers often believe that it is damaging to machine wash or dry their garments. Others believe that Arc’teryx’s reputation for quality and the high price point mean that products do not need care."
            ></Paragraph>





            <div className="md:overflow-x-scroll md:w-full p-4">
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
                    <Image className="w-[60rem] md:flex-none" src={ArcyImg5} />
                    <Image className="w-[60rem] md:flex-none" src={ArcyImg6} />
                </div>
            </div>


            <Paragraph
                header="Persona and Journey Frameworks"
                body1="With our research, we created personas and journey frameworks to share with Arc’teryx and our interviewees. These artifacts highlighted insights we discovered behind frictions we identified when grouping ethnographic results. A persona becomes accurate with open lines of feedback and iteration, when both client and customers can agree that the persona represents their core and most pressing needs."
            ></Paragraph>



            <div className="h-96 object-cover lg:h-full lg:object-cover ">
                <Image className="border-y border-stone-600 h-96 object-cover lg:h-full lg:object-cover"
                    src={ArcyImg7}
                />
            </div>


            <Paragraph
                header="Reflection"
                body1="Reaching out to Arc'teryx opened the door to an incredible experience. My greatest learning was in the importance of taking initiative, and believing in my abilities and process. Creating a mini sprint to be held in a professional environment with non-designers was initially daunting. I was always nervous that our collaboration would feel like a chore for our connections at Arc'teryx, and it increased when the sprint went virtual. Of course, they were eternally friendly and excited to be involved."
                body2="Taking initiative and believing in ourselves fueled our communications with Arc'teryx, our professor, and our research participants. Through conversations and study mehtods, the greater initiative we took - the better our understanding became."
            ></Paragraph>


            <div className="relative h-screen w-screen">
                <Image
                    src={ArcyImg13}
                    layout="fill"
                    objectFit="cover"
                />
            </div>



            <Footer></Footer>




        </m.main>


    );
}