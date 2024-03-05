import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Paragraph = ({ header, subtitle, body1, body2, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 0.9 }}
      {...props}
    >
      <div class="lg:px-96 px-5 pb-10">
        <div className="mt-20 md:mt-40">
          <h1 className='text-3xl lg:text-5xl font-Garamond text-white tracking-wide'>{header}</h1>
          <h1 className='text-1xl lg:text-2xl font-NeueHaasRoman tracking-widest text-stone-400 lg:pt-1'>{subtitle}</h1>
        </div>

        <div class="divide-y divide-linear divide-stone-600 pt-5 max-w-screen-xl">
          <div></div>
          <div></div>
        </div>

        <div className="font-Avenir tracking-wide text-white pt-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
         {body1}
        </div>
        <div className="font-Avenir tracking-wide text-white pt-20 pb-20 leading-10 md:leading-loose md:text-2xl max-w-prose">
         {body2}
        </div>
      </div>
    </motion.p>
  );
};

export default Paragraph;