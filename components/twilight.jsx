import React, { useState, useEffect } from 'react';

const ScrollColorComponent = () => {
  const tStart = 0; // Start transition this many pixels from the top
  const tEnd = 200; // End transition
  const cStart = [255, 255, 255, 1.0]; // Start color (white)
  const cEnd = [59, 130, 246, 1.0]; // End color (Tailwind's blue-500)
  const cDiff = [
    cEnd[0] - cStart[0],
    cEnd[1] - cStart[1],
    cEnd[2] - cStart[2],
    cEnd[3] - cStart[3],
  ];

  const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 1.0)');

  const scrollColor = () => {
    const p = (window.scrollY - tStart) / (tEnd - tStart); // % of transition
    const clampedP = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
    const cBg = [
      Math.round(cStart[0] + cDiff[0] * clampedP),
      Math.round(cStart[1] + cDiff[1] * clampedP),
      Math.round(cStart[2] + cDiff[2] * clampedP),
      (cStart[3] + cDiff[3] * clampedP).toFixed(2),
    ];
    setBackgroundColor(`rgba(${cBg.join(',')})`);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollColor);

    return () => {
      window.removeEventListener('scroll', scrollColor);
    };
  }, []);

  return (
    <div id="hello" style={{ backgroundColor }}>
      {/* Content here */}
      heyyyyyy
    </div>
  );
};

export default ScrollColorComponent;