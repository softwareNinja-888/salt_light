import React from 'react';

import { motion } from "framer-motion";

export function Search() {
  return (
    <div className="relative w-full flex justify-center items-center">

      {/* Input Field */}
      <input
        type="search"
        placeholder="Search..."
        id="searchInput"
        className="w-10/12 px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
     
      {/* Animated Clear Button */}
      <motion.div
        className="absolute inset-y-0  flex items-center text-gray-500 hover:text-gray-700 right-10"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          type="button"
          onClick={() => (document.getElementById('searchInput').value = '')}
          className="focus:outline-none "
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
    </div>
  );

}
