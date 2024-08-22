import React, { useState } from 'react';
import MyModal from './Modal'; // Fix the file name casing
import MuxPlayerComponent from './MuxPlayer.js';

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

  // Adjusted style for pushing content
  const containerStyle = isHovered ? { 
    margin: '40px', // Apply margin to push surrounding content
    transition: 'margin 0.5s ease' // Smooth transition for the margin change
  } : { 
    margin: '0' // Reset margin when not hovered
  };

  const videoStyle = isHovered ? { 
    width: '110%', 
    height: '110%', 
    transition: 'width 0.5s ease, height 0.5s ease' 
  } : {};

  return (
    <div 
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
    </div>
  );
};

export default MyComponent;