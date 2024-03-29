import React, { useState } from 'react';

const Clipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative group inline-block">
      <button 
        onClick={copyToClipboard} 
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`relative z-10 group text-chip-deep-gray borderColor-off-white font-AvenirMedium h-10 overflow-hidden text-xs tracking-wider text-toverflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750 ${copied ? 'text-stone-600' : ''}`}
      >
        <span className="relative z-10">{copied ? 'COPIED!' : text}</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150 z-0"></span>
        </span>
      </button>
      {showTooltip && (
        <div className="absolute font-AvenirHeavy text-xs bg-gray-900 text-white py-1 px-2 rounded bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          COPY
        </div>
      )}
    </div>
  );
};

export default Clipboard;