import React, { useState, useEffect } from 'react';

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const FadeInOnScroll = () => {
  const [bgColor, setBgColor] = useState('from-white to-white'); // Default background color
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track the last scroll position

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      const isScrollingDown = scrollPosition > lastScrollTop;

      // Determine the background color based on scroll direction and position
      const newBgColor = isScrollingDown && scrollPosition > 100 ? 'bg-blue-500' : 'from-white to-white';

      setBgColor(newBgColor);
      setLastScrollTop(scrollPosition <= 0 ? 0 : scrollPosition); // Update last scroll position, but never below 0
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div
      className={`w-full h-screen overflow-hidden ${bgColor} transition-all duration-500 ease-in-out`}
    >
      {/* Content goes here */}
    </div>
  );
};

export default FadeInOnScroll;