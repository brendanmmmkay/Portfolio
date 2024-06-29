import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const MyModal = ({ Component, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false); // State to track if we're in the browser
  const modalRootRef = useRef(null); // Ref to store the modal root element

  const handleOpen = () => {
    setIsOpen(true);
    if (isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (isBrowser) {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    setIsBrowser(true); // Component did mount, we are in the browser
    modalRootRef.current = document.getElementById('modal-root'); // Get the modal root element

    return () => {
      if (isBrowser) {
        document.body.style.overflow = 'auto'; // Clean up overflow style
      }
    };
  }, []);

  const modalVariants = {
    hidden: { x: "100vw" },
    visible: { x: 0 },
    exit: { x: "100vw" },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7 },
    exit: { opacity: 0 },
  };

  const modalContent = (
    <AnimatePresence mode="out-in">
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-stone-800 z-20"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            transition={{ ease: "easeOut", duration: 0.5 }}
            onClick={handleClose}
          />
          <motion.div
            className="fixed top-0 bottom-0 h-screen w-auto ml-[4rem] mt-10 overflow-auto z-30 bg-white shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ type: 'spring', stiffness: 20 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <Component />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div>
      <div onClick={handleOpen}>
        {children}
      </div>
      {isBrowser && modalRootRef.current && ReactDOM.createPortal(modalContent, modalRootRef.current)}
    </div>
  );
};

export default MyModal;