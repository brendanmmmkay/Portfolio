import { motion as m } from "framer-motion"
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import Image from 'next/image'
import isoDummy1 from "../image/isoDummy.png"
import isoDummy2 from "../image/isoDummy2.png"
import isoDummy3 from "../image/isoDummy3.png"
import isoDummy4 from "../image/isoDummy4.png"
import isoDummy5 from "../image/isoDummy5.png"
import arrow from "../image/arrow.svg"
import Paragraph from '../../components/paragraph';
import isoLogoMark from "../image/isoLogoMark.svg"
import isoTrio from "../image/isoMobileTrio.svg"
import isoCardProcess from "../image/isoCardProcess.svg"
import Footer from "../../components/footer.js";
import MuxPlayerComponent from "../../components/MuxPlayer";
import isoProductEntry from "../image/isoProductEntry.png";
import isoBrandPillars from "../image/isoBrandPillars.png";
import isoNewCardDuo from "../image/isoNewCardDuo.png";
import isoMotto1 from "../image/isoMotto1.png";

export default function InSearchOf() {
  return (
    <m.main
      // initial={{ y: "100%" }}
      // animate={{ y: "0%" }}
      // transition={{ duration: 0.75, ease: "easeOut" }}
      // exit={{ opacity: 1 }}
      className="top-0 left-0 w-full h-full bg-white bg-opacity-40">
        <div className="bg-white">
      <div className="">
        <div className=''>

        <div className="block md:hidden">
                    <div className="px-4">
                        <Link href="/">
                            <li className="text-xxs font-AvenirHeavy text-stone-600 py-2">BRENDAN MCKAY — [03.24.24] <br></br>BRAND DESIGNER AND PRODUCT STRATEGIST</li>
                        </Link>
                    </div>
                </div>

<div className="border-off-white rounded-full"></div>

          <div className="">
            <div className="px-4 text-[0.6rem] text-stone-400 font-AvenirHeavy pt-64">IN SEARCH OF</div>
            {/* <p className="pt-20 text-[0.6rem] tracking-widest text-stone-500 font-AvenirHeavy">MOMENT ENERGY</p> */}



            <div className="md:w-1/2">
              <m.h1 className="px-4 text-[1.2rem] md:text-3xl text-left  font-Avenir text-stone-700  pb-10 mt-5 lg:Pt-8">
                A curated and educational library of excellent resources for design professionals who seek to enhance their knowledge of the visual design industry.
              </m.h1>
            </div>
            {/* <div className="px-5 lg:px-48 pt-20">
                        <p className="font-AvenirHeavy text-stone-500 tracking-widest text-[0.6rem]">FEATURED ON:</p>                       
                        <Image className="pb-10" src={momoPromo}/>
                    </div> */}


          </div>
        </div>
      </div>


      <div className="px-4">
      <div className="rounder">
        <MuxPlayerComponent className="rounder" playbackId="5G6l6JWfc49fnjFJ01qBkbrw02HUfG7MzrFtSJvsZvD0200" />
      </div>
</div>



      <div className=" bg-white">
        <div className="">
          <div className="md:grid lg:grid-cols-5 grid-cols-1 gap-6 ">
            <div className="col-start-1 col-span-2 px-5">

              <h2 className="text-stone-800 text-xxs font-SFpro pt-2">DECEMBER 2022 — ONGOING</h2>
              <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0 pb-20 md:pb-0"> FREELANCE CONTRACTING <br></br> LOGO AND PRODUCT DESIGN</h2>

            </div>

            <div className="hidden md:block">
              <div className=" grid grid-cols-1">
                <div className="font-SFpro text-stone-800 tracking-wide text-xxs pt-2">
                  ROLES
                </div>
                <div className="tracking-wide font-SFpro text-stone-400 text-xxs">
                  <div>PRODUCT DESIGN</div>
                  <div>LOGO DESIGN</div>
                  <div>BUSINESS STRATEGY</div>
                  <div>BRAND DESIGN</div>
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





      <Paragraph
        header="HOW IT BEGAN"
        subTitle="Identifying a design opportunity"
        body1=" In January 2022 I met JP Ramirez, a professor teaching a design course in typography and space at the University of Illinois School of Art + Design. Meanwhile, I was organizing weekly meetings as president of the Design Club at Simon Fraser University."
        body2=" We both commonly referred our students to a loose list of great design resources that we had scattered across our notes and bookmarks. Our goal was to formalize this list in an easy to access directory for budding design professionals."
      ></Paragraph>


      {/* <mux-player
        playback-id="G3SeeYw4jS3SfumVruMkvCNGceJu45LYqBhlX8RnS01Q"
        metadata-video-title="Placeholder (optional)"
        metadata-viewer-user-id="Placeholder (optional)"
        accent-color="#FF0000"
      ></mux-player> */}


<div className="px-4">
      <div className="rounder">
        <MuxPlayerComponent className="rounder" playbackId="u3HkTv7HlZ6OCyp00qaYCWUZS4RedoFup02uCQQpy4Rpo" />
      </div>
</div>

      <div className="grid md:grid-cols-2">
        <div>

          <Paragraph
            header="PRODUCT DESIGN APPROACH"
            body1="I began by facilitating exercises with our team to create brand pillars and determine our value proposition."
            body2="We are creating a digital tool for design professionals who seek to enhance their connection with, and knowledge of, the visual design industry. We support them by providing a curated, educational, inspiring, and exploratory library of excellent resources. We are unlike competitors who focus on ephemeral updates to niche fields of the visual design industry."
          ></Paragraph>

          {/* <Paragraph
            header="Creating the Logo"
            body1="  I used a pen and sketchbook to create 8 logo iterations in 8 minutes as a warmup exercise each day. The initial form for this iteration of the logo began with a location pin, inspired by our brand pillar to ‘map the landscape of design’."
            body2="  By scaling and reflecting the pin, I created a head and body that represents our individual seeker. Together, they create a flower-like form where the petals are waypoints, representing the connections our seeker gains as they explore the directory."
          ></Paragraph> */}
        </div>

        <div>
          <div className="px-4 pt-4 object-cover rounded-8">
            <Image className=""
              src={isoMotto1}
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
      <div className="rounder">
        <MuxPlayerComponent className="rounder" playbackId="W1tCvXEcikb01SJO0201MBpdgq17lCtKgU6VtprSweuWQ00" />
      </div>
</div>

      <div className="grid md:grid-cols-2">


        <Paragraph
          header="DETERMINING VALUE FOR SEEKERS"
          body1="People I interviewed said that they connected strongly and best with resources that were highly regarded or recommended by mentors and peers."
          body2="To promote strong connections between our readers and our resources, each entry in the design directory is accompanied by copy that tells the importance of each resource and why it is regarded so highly."
        ></Paragraph>

<div className="px-4 object-cover pb-4 rounded-8">
        <Image className=""
          src={isoProductEntry}
        />
      </div>


      </div>



      

      {/* <Paragraph
        header="Design Sprint Process"
        body1="I hosted sprint activities with JP and our developer, Bryant, where we asked questions and attempted to paint a picture of our persona. Next, I created an online questionnaire seeking to confirm and test our assumptions with potential users to develop a persona with real user data."
        body2="Next, I quickly created a set of potential journey frameworks complete with quotes pulled from our user interviews to understand what kind of experience would aid our personas frictions best."
      ></Paragraph> */}


      {/* <div className="md:overflow-x-scroll md:w-full p-4">
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:space-x-4 ml-1 md:ml-40">
          <Image className="w-[60rem] md:flex-none" src={isoDummy3} />
          <Image className="w-[60rem] md:flex-none" src={isoDummy4} />
        </div>
      </div> */}


      {/* <Paragraph
        header="Determining Value for Seekers"
        body2="People I interviewed said that they connected strongly and best with resources that were highly regarded or recommended by mentors and peers. To promote strong connections between our readers and our resources, each entry in the design directory is accompanied by copy that tells the importance of each resource and why it is regarded so highly."
      ></Paragraph> */}


      {/* <div className="object-cover md:h-full">
        <Image className="border-y border-stone-600 h-96 object-cover lg:h-full lg:object-cover"
          src={isoDummy5}
        />
      </div> */}

<div className="px-4">
<div className="rounder">
        <MuxPlayerComponent className="rounder" playbackId="dQr02SV34UZCXs66W01Yphq8UY7swGrevRrpnVfIwQzxs" />
      </div>
      </div>


      <div className="grid md:grid-cols-2">

        <Paragraph
          header="MAPPING THE LANDSCAPE OF DESIGN"
          body1="On cards, I used the scrollable chip pattern to retain contextual design discovery and inform search decisions. To map the landscape of design - chip categories include media type, type of design discipline, and type of organization."
        ></Paragraph>


        <Image className="px-4 pt-4 object-cover rounded-8 pb-10" src={isoNewCardDuo}></Image>


      </div>


      <div className='bg-hero-pattern2 bg-cover'>
            <Paragraph
                header="ADDENDUM"
                body1="Thanks for stopping by! I have so much more to share about my process and approach to this project. I would love to get in touch and share my excitement for this project with you."
            ></Paragraph>
</div>


      {/* <div className="object-cover md:h-full">
        <MuxPlayer className=""
          streamType="on-demand"
          playbackId="oJylykWgGQrDEj1MrGo3ELsnDGn01pjdlWyw8vT01uW6o"
          metadataVideoTitle="Placeholder (optional)"
          metadataViewerUserId="Placeholder (optional)"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          autoplay="muted"
          loop
        />
      </div> */}

      {/* 

      <div className="relative h-screen w-screen m-0 p-0">
        <Image
          src={isoTrio}
          layout="fill"
          objectFit="cover"
        />
      </div> */}


      {/* <Paragraph
        header="Cards"
        body1="I wanted people to experience a visually stimulating search for inspiration. To feel rich with great imagery and design, I leveraged a 6 column grid and made many card iterations to see the images and type at different scales." />
 */}


      {/* <div className="relative w-screen h-[100vh] m-0 p-0">
        <Image
          src={isoCardProcess}
          layout="fill"
          objectFit="cover"
        />
      </div>
 */}


      {/* <Paragraph
        header="Conclusion"
        body1="Thanks for stopping by! I have so much more to share about my process and approach to this project. I would love to get in touch and share my excitement for this project with you."
      ></Paragraph>
 */}










</div>
    </m.main>


  );
}