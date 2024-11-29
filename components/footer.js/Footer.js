import React from 'react';
import Link from "next/link";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

    return (
        <motion.footer
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 1 }}
        >



            <div className="block md:hidden">
            <h2 className="text-stone-800 text-xxs font-SFpro pt-2">ETHOS</h2>
            <div className="">

                <div className="text-xxs font-SFpro text-stone-400 pt-2">I BELIEVE CANDID CONVERSATION AND EMPATHY ARE KEY TO UNDERSTAND THE TRUE NEEDS OF PEOPLE WE DESIGN FOR.</div>
                <div className="text-xxs font-SFpro text-stone-400  pt-2">I WEAVE BUSINESS VALUE WITH DIGITAL STORYTELLING TO CREATE DESIGN THAT SOLVES REAL PROBLEMS FOR PEOPLE.</div>
                <div className="text-xxs font-SFpro text-stone-400  pt-2">I SEEK TO CHALLENGE MYSELF AND LEARN FROM NEW PERSPECTIVES TO MAKE IMPACTFUL CHANGE THROUGH DESIGN.</div>
            </div>
            </div>

            <div className="hidden md:block">
            <h2 className="text-stone-800 text-xxs font-SFpro pt-2">ETHOS</h2>
            <div className="grid grid-cols-3 gap-2 md:max-w-2xl">

                <div className="text-xxs font-SFpro text-stone-400 max-w-xs">I BELIEVE CANDID CONVERSATION AND EMPATHY ARE KEY TO UNDERSTAND THE TRUE NEEDS OF PEOPLE WE DESIGN FOR.</div>
                <div className="text-xxs font-SFpro text-stone-400 max-w-xs">I WEAVE BUSINESS VALUE WITH DIGITAL STORYTELLING TO CREATE DESIGN THAT SOLVES REAL PROBLEMS FOR PEOPLE.</div>
                <div className="text-xxs font-SFpro text-stone-400 max-w-xs">I SEEK TO CHALLENGE MYSELF AND LEARN FROM NEW PERSPECTIVES TO MAKE IMPACTFUL CHANGE THROUGH DESIGN.</div>
            </div>
            </div>
            

            <div className="">
                <h1 className="text-3xl max-w-footer md:text-4xl text-left  tracking-loose font-Avenir text-stone-700 leading-tighter md:leading-tighter pt-10 pb-40">
                I employ strategic frameworks toward <br></br> actionable plans that make aspirational <br></br> value real through an end-to-end, human <br></br> centred perspective of brand engagement.
                </h1>

                <h2 className="text-stone-800 text-xxs font-SFpro pt-2">IMPACT</h2>
                <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0">HELPED SECURE $200, 000 IN INVESTMENTS THROUGH PITCH DECK DESIGN FOR A NATIONAL PITCH COMPETITION FOR MOMENT ENERGY.
                </h2>
                <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0"> 
                LEAD THE DESIGN CLUB AT SFU BY FACILITATING A WEEKLY VIRTUAL WORKSHOP FROM 2021-2023.

                </h2>
                <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0"> 
                VOLUNTEERED AT TOUCHPOINT INTERACTION DESIGN CONFERENCE 2019.
                </h2>

                <h2 className="text-stone-800 text-xxs font-SFpro pt-2">ACHIEVEMENTS</h2>
                <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0"> 
                BACHELORS IN INTERACTIVE ART AND TECHNOLOGY AT SIMON FRASER UNIVERSITY SIAT.
                </h2>
                <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0"> 
                MINOR IN PRINT AND DIGITAL MEDIA PUBLISHING.
                </h2>
                <h2 className="text-stone-400 font-SFpro text-xxs gap-10 pt-0"> 
                5+ YEARS OF FREELANCE DESIGN EXPERIENCE.
                </h2>

            </div>


        </motion.footer>
    );
};

export default Footer;