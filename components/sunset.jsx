import React from 'react';

const FadeInOnScroll = ({ src }) => {
  return (
    <div className="absolute w-full">
      <img
        src="/image/sky.svg"
        style={{ width: '100%' }}
        alt="Sky"
      />
      {/* Additional content can go here */}
    </div>
  );
};

export default FadeInOnScroll;