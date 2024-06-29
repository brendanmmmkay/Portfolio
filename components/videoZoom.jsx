import React, { useState } from 'react';
import MyModal from './Modal'; // Fix the file name casing
import MuxPlayerComponent from './MuxPlayer.js';

const MyComponent = ({ playbackId, project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPos = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const yPos = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePosition({ x: xPos, y: yPos });
  };

  // Reset mousePosition and isHovered state when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 }); // Reset position to center
  };

  const scaleStyle = isHovered ? { transform: 'scale(1.05)', transition: 'transform 0.5s ease' } : {};

  return (
    <div 
      className="rounder zoomer cursor-pointer hover:shadow-2xl transition-shadow duration-500" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave} // Use the new handler here
    >
      <MyModal Component={project} className="px-0">
        <div style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}>
          <MuxPlayerComponent 
            className="rounder video-zoom" 
            playbackId={playbackId}
            style={scaleStyle}
          />
        </div>
      </MyModal>
    </div>
  );
};

export default MyComponent;