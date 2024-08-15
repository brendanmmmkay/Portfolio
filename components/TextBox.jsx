import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextBox = ({ header, subtitle, ...props }) => {
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


      <div className="pt-4">
<div className="max-w-xs rounded-md bg-azure-400 border hover:border-sky-500 transition ease-in-out delay-150">
  <div className="px-4 py-4">
<p className="font-SFpro text-xxs">{header}</p>
<p className="font-Avenir text-stone-600 leading-relaxed pt-20 text-xs">{subtitle}</p>
</div>
</div>
</div>



    </motion.div>
  );
};

export default TextBox;