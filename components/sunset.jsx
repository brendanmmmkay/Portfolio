import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ src }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: inView ? 1 : 0 },
  };

  return (
    <div ref={ref} className="absolute w-full transition-all duration-2000 ease-in-out">
      <img
        src="/image/sky.svg"
        style={{ opacity: fadeInVariants.visible.opacity, transition: 'opacity 10s cubic-bezier(0.23, 1, 0.32, 1)' }}
        alt="Sky"
      />
      {/* Additional content can go here */}
    </div>
  );
};

export default FadeInOnScroll;
