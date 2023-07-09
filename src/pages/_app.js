// import '@/styles/globals.css'
import '../styles/globals.css';
import Navbar from '../../components/Navbar';
import { AnimatePresence } from "framer-motion";
import { Router } from 'next/router';
import { motion, useScroll, useSpring } from "framer-motion";

function App({ Component, pageProps, router }) {
return (
  <div className="py-24 px-12 lg:px-48">
  <Navbar />
<AnimatePresence>  
  <Component key={Router.pathname} {...pageProps} />
  </AnimatePresence>
  </div>
);
}

export default App;