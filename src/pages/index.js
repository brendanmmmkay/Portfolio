import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Head from 'next/head';
import { motion as m } from "framer-motion";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Hi</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      </div>,
          <m.div 
          initial={{ y: "100%" }} 
          animate={{ y: "0%" }} 
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className="absolute z-1 text-gray-900 top-0 left-0 w-full bg-orange-100 lg:px-48 px-16"
          >
    <main>
      <div className='my-96 p-1'>
        <m.h1 
        animate={{ y: 0}}
initial={{ y: "100%" }}
transition={{delay: 0.5, duration: 0.5}}
         className='text-4xl text-center lg:text-right lg:text-9x1'>Hello all, I like to design though making and caring and a little kissy kissyqwe
         </m.h1>
      </div>
      <div className="flex justify-between">
      <Link href={"/contact"}>
        <h2>Design</h2>
        </Link>
        <div>
          <h2>hi</h2>
        </div>
        <h2>Company</h2>
        <h2>2022</h2>
        <div class="grid grid-cols-2 gap-6">
          <div>Box 1</div>
          <div>Box 2</div>
          <div>Box 3</div>
          <div>Box 4</div>
        </div>
        <div class="flex flex-col-reverse">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
      <div>
        <h3>Canadian designs to make you coom.</h3>
        <h3>click contact for cool trans girl to appear.</h3>
      </div>
      <div className="mt-40">
<h1 className='text-5xl tect-center'>sometiing new</h1>
      </div>
      <div class="grid grid-cols-1 divide-y divide-red-800">
  <div>01</div>
          <div class="grid grid-cols-4 gap-6">
          <div>Box 1</div>
          <div>Box 2</div>
          <div>Box 3</div>
          <div>Box 4</div>
        </div>
  <div class="flex flex-col-reverse">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
  <div>02</div>
  <div>03</div>
</div>
    </main>
    </m.div>
  )
}
