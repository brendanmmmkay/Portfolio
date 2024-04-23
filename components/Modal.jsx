import { motion } from 'framer-motion';
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
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: 0 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7 },
  };

  return (
    <div>
      <div onClick={handleOpen}>
        {children}
      </div>

      {isOpen && (
  <>
<motion.div
  className="fixed top-0 bottom-0 left-0 right-0 bg-stone-800 z-20"
  style={{ opacity: '0.3 !important' }}
  initial="hidden"
  animate="visible"
  variants={backdropVariants}
  transition={{ ease: "easeOut", duration: 0.5 }}
  onClick={handleClose}
/>
    <motion.div
      className="fixed top-0 bottom-0 h-screen w-auto ml-20 overflow-auto z-30 bg-white"
      initial="hidden"
      animate="visible"
      variants={modalVariants}
      transition={{ type: 'spring', stiffness: 20 }}
    >
      <Component />
    </motion.div>
  </>
)}
    </div>
  );
};

export default MyModal;