'use client';

import Footer from '../../components/footer.js/Footer';
// import { Container } from './components/styles/Container.styled';
// const carousel = new Carousel(carouselElement, items, options, instanceOptions);

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        Footer,
        <div>
            <head>
                <title>Hello</title>
                <link rel="icon" href="/favicon.ico" />


            </head>
        </div>,


        <div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="absolute z-1 text-gray-900 top-0 left-0 w-full cursor-default bg-off-white"
        >
            <main>

            </main>
        </div>
    )
}