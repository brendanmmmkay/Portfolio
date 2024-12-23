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
import TextBox from "../../components/TextBox.jsx";
import isoPersona from "../image/isoPersona.png";
import isoJourneyFramework from "../image/isoJourneyFramework.png";
import isoQualitative from "../image/isoQualitative.png";
import isoLogoProcess from "../image/isoLogoProcess.png";

export default function InSearchOf() {
  return (
    <m.main
      // initial={{ y: "100%" }}
      // animate={{ y: "0%" }}
      // transition={{ duration: 0.75, ease: "easeOut" }}
      // exit={{ opacity: 1 }}
      className="top-0 left-0 w-full h-full bg-white bg-opacity-40">
      <div className="bg-white rounded-md">
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
            <div className="md:grid lg:grid-cols-2 grid-cols-1 gap-6 ">
              <div className="col-start-1 col-span-1 px-5">

                <h2 className="text-stone-800 text-xxs font-SFpro pt-2">DECEMBER 2022 — ONGOING</h2>
                <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0 pb-20 md:pb-0"> FREELANCE CONTRACTING <br></br> LOGO AND PRODUCT DESIGN</h2>

              </div>

<div className="flex gap-20">
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
        </div>




        <Paragraph
          header="HOW IT BEGAN"
          subTitle="Identifying a design opportunity"
          body1=" In January 2022 I met JP Ramirez, a professor teaching a design course in typography and space at the University of Illinois School of Art + Design. Meanwhile, I was organizing weekly meetings as president of the Design Club at Simon Fraser University."
          body2=" We both commonly referred our students to a loose list of great design resources that we had scattered across our notes and bookmarks. Our goal was to formalize this list in an easy to access directory for budding design professionals."
        ></Paragraph>



<div className="flex flex-col md:flex-row gap-4 px-4">

<TextBox header="PROBLEM" subtitle="Budding design professionals struggle to find reputable, professional grade design inspiration with enough context and supporting artifacts." body2="Budding design professionals struggle to find reputable, professional grade design inspiration with enough context and supporting artifacts." />
<TextBox header="FRAMING" subtitle="How might we map the landscape of design companies for inspiration seekers who need to build upon their knowledge and connections to the design industry." />

</div>


        {/* <mux-player
        playback-id="G3SeeYw4jS3SfumVruMkvCNGceJu45LYqBhlX8RnS01Q"
        metadata-video-title="Placeholder (optional)"
        metadata-viewer-user-id="Placeholder (optional)"
        accent-color="#FF0000"
      ></mux-player> */}


        <div className="px-4 pt-8">
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

        <h2 className="text-stone-800 text-xxs font-SFpro pt-20 px-4">BRAND PILLARS</h2>

        <div className="flex flex-col md:flex-row gap-4 px-4">

          <TextBox header="MAP" subtitle=" It’s important for designers to have all their resources in one place. We seek to curate a broad map of resources, across many disciplines, to provide a sense of the breadth and depth of the visual design industry, and connect people with valuable resources." />
          <TextBox header="INSPIRE" subtitle="Excellent designers habitually seek inspiration constantly. We curate beautiful design and resources from the first impression to the last. We aim to provide that inspiring moment when you find something thoughtfully—and unexpectedly—curated that you never would have found on your own." />
          <TextBox header="BUILD TASTE" subtitle="Excellent designers cherish insightful discourse. We provide deep connection with the design industry by contributing insightful commentary and education in every resource. We’re the helpful librarian you’ve been waiting for to give you the meaning behind the recommendation, and guide you to build your taste." />

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


        <h2 className="text-stone-800 text-xxs font-SFpro pt-20 px-4">VALUE</h2>

        <div className="flex flex-col md:flex-row gap-4 px-4">

          <TextBox header="FOR SEEKERS" subtitle="Seekers have a curated list of professional resources to learn the landscape of design and reference professional grade case studies." />
          <TextBox header="FOR ISO" subtitle="The directory gains a user base of seekers who support the development of our list via ad revenue, shares, and donations." />
          <TextBox header="FOR COMPANIES" subtitle="The directory connects future talent with companies across the world, and lesser known boutique companies gain new fans." />

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

        <div className="px-4 pt-20">
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



        <div className="pb-20">  </div>


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


      <div className=" bg-white rounded-md mt-20">

        <div className="md:w-1/2">
          <m.h1 className="px-4 text-3xl text-left  font-Avenir text-stone-700   mt-5 lg:pt-10 ">
            Case Study
          </m.h1>
        </div>



        <div className="grid md:grid-cols-2">
          <Paragraph
            header="USER RESEARCH AND PERSONAS"
            body1="I hosted sprint activities with JP and our developer, Bryant, where we asked questions and attempted to paint a picture of our persona. Next, I created an online questionnaire seeking to confirm and test our assumptions with potential users to develop a persona with real user data."
            body2="After synthesizing the results of the questionnaire and polls, I reproached the persona of assumptions and replaced all of the assumptions with real insights from our research results."
          ></Paragraph>

          

          <div className="px-4 object-cover pb-4 rounded-8 items-end py-20">
            <Image className=""
              src={isoPersona}
            />
                    <div className="flex flex-col md:flex-row gap-4 ">
          <TextBox  subtitle="We learned that designers often find a single good artifact, but are unable to find the supporting artifacts and context necessary to use it as a precedent." />
          <TextBox  subtitle="We learned that people struggle less with seeking inspiration, and more with knowing what to seek." />
          {/* <TextBox header="BUILD TASTE" subtitle="Excellent designers cherish insightful discourse. We provide deep connection with the design industry by contributing insightful commentary and education in every resource. We’re the helpful librarian you’ve been waiting for to give you the meaning behind the recommendation, and guide you to build your taste." /> */}

        </div>
          </div>
          
        </div>




        <div className="grid md:grid-cols-2">
          <Paragraph
            header="JOURNEY FRAMEWORKS"
            body1="Next, I presented the persona to some of the people we interviewed to see if they agreed that we were painting an accurate picture, and that the frictions and needs of the persona reflected their actual needs."
            body2="I then created a set of journey frameworks by grouping similar habits and demographics, and populated each journey with quotes pulled from our research insights. We compared a daily feature flow, a learning curriculum based flow, and a quiz based discovery flow."
          ></Paragraph>

          <div className="px-4 object-cover pb-4 rounded-8 items-end py-20">
            <Image className=""
              src={isoJourneyFramework}
            />
          </div>
        </div>



        <div className="grid md:grid-cols-2">
          <Paragraph
            header="USER TESTING AND QUALITATIVE INSIGHTS"
            body1="I drafted a wireframe prototype for each of the two most compelling journey frameworks, and scheduled user testing. Each participant was given a set of tasks to complete. I asked participants to think aloud and narrate their flow through the prototype, while I timed the exercise and took notes."
            body2="Upon completion of the tasks, I asked follow up questions to see which prototype felt more valuable. I then repopulated the journey framework with updated insights, and iterated the most well received prototype to eliminate errors and misconceptions."
          ></Paragraph>

          <div className="px-4 object-cover pb-4 rounded-8 items-end py-20">
            <Image className=""
              src={isoQualitative}
            />
                    <div className="flex flex-col md:flex-row gap-4">
          <TextBox  subtitle="We learned that users needed more than one image to tell if it is worth it to visit the companies site." />
          <TextBox  subtitle="We learned that users were less interested in gamifying their design learning experience." />
          {/* <TextBox header="BUILD TASTE" subtitle="Excellent designers cherish insightful discourse. We provide deep connection with the design industry by contributing insightful commentary and education in every resource. We’re the helpful librarian you’ve been waiting for to give you the meaning behind the recommendation, and guide you to build your taste." /> */}

        </div>
          </div>
          
        </div>


        <div className="grid md:grid-cols-2">
          <Paragraph
            header="CREATING THE LOGO"
            body1="I used a pen and sketchbook to create 8 logo iterations in 8 minutes as a warmup exercise each day. The initial form for this iteration of the logo began with a location pin, inspired by our brand pillar to ‘map the landscape of design’. "
            body2="By scaling and reflecting the pin, I created a head and body that represents our individual seeker. Together, they create a flower-like form where the seeds are waypoints, representing the connections our seeker gains as they explore In Search Of."
          ></Paragraph>

          <div className="px-4 object-cover pb-4 rounded-8 items-end py-8">
            <Image className=""
              src={isoLogoProcess}
            />
          </div>
        </div>


        <div className="px-4 pb-8">
          <div className="rounder">
            <MuxPlayerComponent className="rounder" playbackId="9wCLC4dxj2yWo02uLQPGC02LUv025ljDn5Pt6jKfDMY61E" />
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

        <div className="rounded-md overflow-hidden pt-20">
          {/* <Image
    src={momentMoodboard}
    className="pb-20 px-5 object-cover"
    // Make sure to apply width and height or layout="fill" for Next.js Image component
  /> */}
        </div>


      </div>




    </m.main>


  );
}