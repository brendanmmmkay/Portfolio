// button.js
import React from 'react';

const UnderlineButton = ({ children }) => {
  return (
    <button className="relative overflow-hidden bg-gray-800 text-white rounded-lg px-4 py-2 hover:underline">
      {children}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-200 group-hover:w-full"></div>
    </button>
  );
};

export default UnderlineButton;