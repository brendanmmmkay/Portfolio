import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Video from 'next-video';

const VideoComponent = ({ src, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
      },
    },
  };

  return (
    <div ref={ref} className="">
      <motion.div
        className="rounded-lg overflow-hidden"
        variants={variants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <Video src={src} controls={false} autoPlay muted loop/>
      </motion.div>
    </div>
  );
};

export default VideoComponent;