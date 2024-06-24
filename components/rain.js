import React, { useEffect, useRef } from 'react';

const RainDrop = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const gravity = 0.02;
    const bounceFactor = 0.2;
    const dropCount = 100;
    const drops = [];

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        velocity: Math.random() + 0.5,
        value: Math.random() < 0.5 ? 'U' : 'X',
      });
    }

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#DDDDDD';
        ctx.font = '5px SFpro';
      
        drops.forEach(drop => {
          ctx.fillText(drop.value, drop.x, drop.y);
          drop.y += drop.velocity;
          drop.velocity += gravity;
          if (drop.y > canvas.height) {
            if (Math.abs(drop.velocity) < 1) { // if velocity is low enough
              drop.y = 0; // reset to top of canvas
              drop.velocity = Math.random() + 0.5; // give it a new random velocity
            } else {
              drop.y = canvas.height;
              drop.velocity = -drop.velocity * bounceFactor; // bounce
            }
          }
        });
      
        requestAnimationFrame(draw);
      };

    draw();
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default RainDrop;