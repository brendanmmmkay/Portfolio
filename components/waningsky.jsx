// React component that fades in a blue rectangle when it appears in the viewport and fades out upon leaving the viewport.

import React, { useEffect, useRef, useState } from 'react';

const FadeInRectangle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      threshold: 0.1 // Adjust threshold based on requirement
    });
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
    </div>
  );
};

export default FadeInRectangle;