// import React,{useState} from 'react';

// import { motion } from "framer-motion";
// import { createSearchParams, useNavigate } from 'react-router';

// import { Button } from './Button';

// export function Search() {

//   const navigate = useNavigate()
//   const [searchTerm, setSearchTerm] = useState('');

//   function handleSubmit(e) {

//     alert("li")
//     e.prevenDefault()
//     navigate({
//       pathname: '/search',
//       search: createSearchParams({q:searchTerm}).toString()
//     })
//   }

//   return (
//     <form className="relative w-full flex flex-col justify-center items-center gap-4" onSubmit={()=>{handleSubmit()}}>

//       {/* Input Field */}
//       <input type="search" placeholder="Search..." id="searchInput" onChange={(e)=>{setSearchTerm(e.target.value)}} className="w-10/12 px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"/>
     
//       {/* Animated Clear Button */}
//       <motion.div className="absolute inset-y-0  flex items-center text-gray-500 hover:text-gray-700 right-10" whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{ scale: 0.9 }}>

//         <button type="submit" onClick={() => (document.getElementById('searchInput').value = '')} className="focus:outline-none " >

//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
//           </svg>

//         </button>

//       </motion.div>
//       <button type="submit" className="w-5/12 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline">
//         Submit
//       </button>
//     </form>
//   );

// }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createSearchParams, useNavigate } from 'react-router'; 

export function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // Fix typo here
    if (!searchTerm.trim()) {
      alert('Please enter a search term.');
      return;
    }
    navigate({
      pathname: '/search',
      search: createSearchParams({ q: searchTerm }).toString(),
    });
  }

  return (
    <form
      className="relative w-full flex flex-col justify-center items-center gap-4"
      onSubmit={handleSubmit} // Pass the function directly
    >
      {/* Input Field */}
      <input
        type="search"
        placeholder="Search..."
        id="searchInput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-black w-12/12 px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Animated Clear Button */}
      <motion.div
        className="absolute inset-y-0 flex items-center text-gray-500 hover:text-gray-700 right-2 bottom-12"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          type="button" // Change type to 'button' to avoid triggering submit
          onClick={() => setSearchTerm('')} // Clear the state instead of manipulating the DOM
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-5/12 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline"
      >
        Submit
      </button>
    </form>
  );
}
