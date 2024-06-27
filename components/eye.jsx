import React, { useState, useEffect } from 'react';
import Image from 'next/image';



const Eyeball = () => {
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyeball = document.getElementById('eyeball');
      const rect = eyeball.getBoundingClientRect();
      const eyeballCenterX = rect.left + rect.width / 2;
      const eyeballCenterY = rect.top + rect.height / 2;
      const angle = Math.atan2(event.clientY - eyeballCenterY, event.clientX - eyeballCenterX);
      const distance = Math.min(rect.width / 8, rect.width / 8);
      const pupilX = distance * Math.cos(angle);
      const pupilY = distance * Math.sin(angle);
      setPupilPosition({ x: pupilX, y: pupilY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="eyeball" style={{
      width: '30px', // Reduced from 100px
      height: '30px', // Reduced from 100px
      // borderRadius: '50%',
      position: 'relative',
      overflow: 'hidden',
      pointerEvents: 'none', // Added to allow clicks to pass through
    }}>
      <img src="/image/bookMark.svg" alt="Eyeball Outline" style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }} />
      <div style={{
        width: '5px', // Reduced from 40px
        height: '5px', // Reduced from 40px
        borderRadius: '50%',
        backgroundColor: '#36383F',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)', // Adjusted for centering
        marginLeft: pupilPosition.x - 2, // Adjusted for new pupil size
        marginTop: pupilPosition.y - 4, // Adjusted for new pupil size
      }} />
    </div>
  );
};

export default Eyeball;