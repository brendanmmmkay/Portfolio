import React, { useEffect, useRef } from 'react';

const RainDrop = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const drops = [];
    const dropCount = 100;
    const dropWidth = 0.2; // Width of the raindrops
    const dropHeight = 0.2; // Height of the raindrops
    let puddleHeight = 0; // Height of the puddle

    for (let i = 0; i < dropCount; i++) {
        drops.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          speed: Math.random() + 0.5,
          value: Math.random() < 0.5 ? 'U' : 'X' // U or X
        });
      }
      
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#DDDDDD';
        ctx.font = '5px SFpro'; // Set the font size and family
        drops.forEach(drop => {
          ctx.fillText(drop.value, drop.x, drop.y); // Draw the U or X
          drop.y += drop.speed;
          if (drop.y > canvas.height) {
            drop.y = 0;
            if (puddleHeight < 1) { // Limit the puddle height to 50
              puddleHeight += 0.01; // Increase the puddle height when a drop hits the bottom
            }
          }
        });
        // Draw the puddle
        ctx.fillRect(0, canvas.height - puddleHeight, canvas.width, puddleHeight);
        requestAnimationFrame(draw);
      };
      
      draw();
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default RainDrop;