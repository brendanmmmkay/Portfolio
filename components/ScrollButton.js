// import React, { useRef, useState } from 'react';
// import Card from './Card'; // adjust the path according to your file structure

// const ScrollOnHover = () => {
//   const scrollDiv = useRef(null);
//   const [scrollInterval, setScrollInterval] = useState(null);

//   const handleMouseEnter = () => {
//     clearInterval(scrollInterval); // Clear any existing interval
//     setScrollInterval(setInterval(() => {
//       scrollDiv.current.scrollBy({ top: 0, left: 5, behavior: 'smooth' });
//     }, 20));
//   };

//   const handleMouseLeave = () => {
//     clearInterval(scrollInterval); // Clear the interval when mouse leaves
//   };

//   return (
//     <div>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Hover to Scroll
//       </button>

//       <div
//         ref={scrollDiv}
//         className="h-full w-[140vw] overflow-auto bg-gray-200 p-4 scrollbar-thumb-red-500 scrollbar-track-yellow-200 scrollbar-thin rounded-none mt-4"
//       >
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//     </div>
//   );
// }

// export default ScrollOnHover;