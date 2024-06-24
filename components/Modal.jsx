import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <div>
      <div onClick={handleOpen}>
        {children}
      </div>

      <AnimatePresence mode="out-in">
  {isOpen && (
    <>
      <motion.div
        className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-md bg-stone-800 z-20"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
        transition={{ ease: "easeOut", duration: 0.5 }}
        onClick={handleClose}
      />
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-auto ml-20 mt-10 overflow-auto z-30 bg-white"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ type: 'spring', stiffness: 20 }}
      >
        <Component />
      </motion.div>
    </>
  )}
</AnimatePresence>
    </div>
  );
};

export default MyModal;