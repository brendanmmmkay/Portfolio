

import { useState, useEffect } from 'react';

const MyModal = ({ Component, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div>
      <div onClick={handleOpen}>
        {children}
      </div>

      {isOpen && (
    <div className="fixed top-0 bottom-0 bg-white opacity-10 h-screen w-auto ml-20  overflow-auto z-40">
    <div className="fixed inset-y-0 left-0 w-20 bg-stone-800 opacity-50 z-30" onClick={handleClose}></div>
    <Component />
</div>
      )}
    </div>
  );
};

export default MyModal;