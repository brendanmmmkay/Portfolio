import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MuxPlayer from "@mux/mux-player-react";
import Modal from './modal';

const Paragraph = ({ header, subtitle, body1, body2, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 1.5 }}
      {...props}
    >


<div className="grid md:grid-cols-2">
  <div className="px-4 pt-20 pb-5 max-w-prose">
    <div className="mt-10 md:mt-96">
      <h1 className='text-xxs font-SFpro text-stone-600 tracking-wide'>{header}</h1>
      <h1 className='text-xxs font-SFpro tracking-widest text-stone-400 lg:pt-1'>{subtitle}</h1>
    </div>

    <div className="font-Avenir text-stone-600 leading-relaxed pt-20 text-xs">
     {body1}
    </div>
    <div className="font-Avenir text-stone-600 leading-relaxed pt-5 text-xs">
     {body2}
    </div>
  </div>  

  {/* <div className="bg-green-500 h-32 w-32">
   
  </div> */}
</div>



    </motion.div>
);
};

export default Paragraph;