import '../styles/globals.css';
// import Navbar from '../../components/Navbar';
import { AnimatePresence } from "framer-motion";
import { Router } from 'next/router';
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from '../../components/Navbar';

function App({ Component, pageProps, router }) {
return (
  <>
  <Navbar />
  <AnimatePresence>
    <Component key={router.pathname} {...pageProps} />
  </AnimatePresence>
  </>
  
);
}

export default App;