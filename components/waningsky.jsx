import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Assuming you're using Next.js's Image component

const SunSet = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkIfVisible = () => {
      const imgElement = document.getElementById('animatedImage');
      if (imgElement) {
        const rect = imgElement.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', checkIfVisible);
    checkIfVisible(); // Initial check on component mount

    return () => window.removeEventListener('scroll', checkIfVisible);
  }, []);

  return (
    <motion.div
      id="animatedImage"
      initial={{ opacity: 0, y: 50 }} // Start from slightly below and faded out
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Animate to fully visible and in position
      transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
      className="z-0 absolute w-full"
    >
      <Image src={src} layout="fill" objectFit="cover" />
    </motion.div>
  );
};

export default SunSet;