import React, { useState } from 'react';

const Clipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <button 
      onClick={copyToClipboard} 
      className={`group text-chip-deep-gray borderColor-off-white font-AvenirMedium relative h-10 overflow-hidden text-xs tracking-wider text-toverflow-x-hidden rounded-full bg-white px-8 py-1 cursor-pointer text-neutral-750 ${copied ? 'text-stone-600' : ''}`}
    >
      <span className="relative z-10">{copied ? 'COPIED!' : text}</span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full text-stone-700 rounded-full bg-off-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>
    </button>
  );
};

export default Clipboard;