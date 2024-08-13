import React, { useState, useEffect, useRef } from 'react';

const ScrollColorComponent = () => {
  const elementRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 1.0)');

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const { top, height } = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Adjust the transition to be more gradual
      // Extend the transition range to start earlier and end later than the middle of the viewport
      let p = Math.max(0, Math.min(1, (windowHeight / 2 - top) / (height * 0.4)));

      // Calculate the new background color based on progress
      const cStart = [255, 255, 255, 1.0]; // Start color (white)
      const cEnd = [182, 241, 248, 1.0]; // End color (blue-500)
      const cDiff = [
        cEnd[0] - cStart[0],
        cEnd[1] - cStart[1],
        cEnd[2] - cStart[2],
        cEnd[3] - cStart[3],
      ];

      const cBg = [
        Math.round(cStart[0] + cDiff[0] * p),
        Math.round(cStart[1] + cDiff[1] * p),
        Math.round(cStart[2] + cDiff[2] * p),
        (cStart[3] + cDiff[3] * p).toFixed(2),
      ];
      setBackgroundColor(`rgba(${cBg.join(',')})`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={elementRef} style={{ backgroundColor, height: '150vh', overflow: 'auto' }}>
    </div>
  );
};

export default ScrollColorComponent;