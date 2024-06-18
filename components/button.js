import React from 'react';

const UnderlineButton = ({ children }) => {
  return (
    <button className="relative overflow-hidden">
      {children}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-width duration-200 hover:w-full"></div>
    </button>



  );
};

export default UnderlineButton;