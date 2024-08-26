import React, { useState } from 'react';
import MyModal from './Modal'; // Fix the file name casing
import MuxPlayerComponent from './MuxPlayer.js';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MyComponent = ({ playbackId, project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPos = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const yPos = ((e.clientY - rect.top) / rect.height - 0.1) * 10;
    setMousePosition({ x: xPos, y: yPos });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Adjusted style for pushing content
  const containerStyle = isHovered ? { 
    marginBottom: '40px', // Apply margin to push surrounding content
    marginTop: '40px', // Apply negative margin to prevent content from moving
    transition: 'margin 0.5s ease' // Smooth transition for the margin change
  } : { 
    margin: '0' // Reset margin when not hovered
  };

  const videoStyle = isHovered ? { 
    width: '120%', 
    height: '120%', 
    transition: 'width 0.5s ease, height 0.5s ease' 
  } : {};

  return (

       <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
      className="rounder zoomer cursor-pointer hover:shadow-2xl transition-shadow duration-500" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={containerStyle} // Apply the dynamic style here for the container
    >
      <MyModal Component={project} className="px-0">
        <div style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}>
          <MuxPlayerComponent 
            className="rounder video-zoom" 
            playbackId={playbackId}
            style={{ ...videoStyle, transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          />
        </div>
      </MyModal>
    </motion.div>
  );
};

export default MyComponent;