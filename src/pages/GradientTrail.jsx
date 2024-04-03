import React, { useState } from 'react';

const GradientTrail = () => {
  const [trail, setTrail] = useState([]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const newTrail = [...trail, { x: clientX, y: clientY }];

    // Keep only the last 50 points to limit the length of the trail
    if (newTrail.length > 50) {
      newTrail.shift();
    }

    setTrail(newTrail);
  };

  return (
    <div
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      onMouseMove={handleMouseMove}
    >
      {trail.map((point, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: point.x,
            top: point.y,
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '10px solid',
            borderBottomColor: `rgba(0, 0, 255, ${1 - index / 50})`, // Gradient from deep blue to transparent
            transform: 'translate(-50%, -50%) rotate(45deg)', // Rotate the triangle
          }}
        />
      ))}
    </div>
  );
};

export default GradientTrail;
